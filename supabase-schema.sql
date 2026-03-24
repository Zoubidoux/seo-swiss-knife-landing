-- ============================================================
-- Search Toolbox — Supabase Schema
-- Run this in your Supabase project → SQL Editor
-- ============================================================

-- 1. Profiles table (extends auth.users 1-to-1)
create table if not exists public.profiles (
  id                      uuid references auth.users(id) on delete cascade primary key,
  email                   text,

  -- Stripe identifiers
  stripe_customer_id      text unique,
  stripe_subscription_id  text unique,   -- to look up the sub without the customer_id

  -- Subscription state
  subscription_status     text not null default 'free'
                            check (subscription_status in ('free','pro','enterprise')),
  subscription_plan       text,          -- Stripe price lookup_key e.g. "pro_monthly" / "pro_yearly"
  subscription_interval   text           -- 'month' | 'year' — set from Stripe price
                            check (subscription_interval in ('month','year') or subscription_interval is null),
  subscription_period_end timestamptz,   -- Next renewal OR cancellation date

  -- Cancellation
  cancel_at_period_end    boolean not null default false,
                                         -- true = user cancelled, stays active until period_end

  -- Payment health
  payment_status          text           -- 'active' | 'past_due' | 'unpaid'
                            check (payment_status in ('active','past_due','unpaid') or payment_status is null),

  created_at              timestamptz default now() not null
);

-- 2. Row Level Security
alter table public.profiles enable row level security;

create policy "select own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Service role (used by webhook) bypasses RLS automatically.

-- 3. Auto-create profile row when a new user signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- MIGRATION (if you already ran the first version of this schema)
-- Run these ALTER TABLE statements to add the new columns:
-- ============================================================
-- alter table public.profiles add column if not exists stripe_subscription_id text unique;
-- alter table public.profiles add column if not exists subscription_interval text check (subscription_interval in ('month','year') or subscription_interval is null);
-- alter table public.profiles add column if not exists cancel_at_period_end boolean not null default false;
-- alter table public.profiles add column if not exists payment_status text check (payment_status in ('active','past_due','unpaid') or payment_status is null);
