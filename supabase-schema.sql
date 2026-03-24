-- ============================================================
-- Search Toolbox — Supabase Schema
-- Run this in your Supabase project → SQL Editor
-- ============================================================

-- 1. Profiles table (extends auth.users 1-to-1)
create table if not exists public.profiles (
  id                      uuid references auth.users(id) on delete cascade primary key,
  email                   text,
  stripe_customer_id      text unique,
  subscription_status     text not null default 'free'
                            check (subscription_status in ('free','pro','enterprise')),
  subscription_plan       text,          -- Stripe price lookup_key e.g. "pro_monthly"
  subscription_period_end timestamptz,   -- When the current period ends
  created_at              timestamptz default now() not null
);

-- 2. Row Level Security
alter table public.profiles enable row level security;

-- Users can only read/update their own row
create policy "select own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Service role (used by Stripe webhook) bypasses RLS automatically.

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
