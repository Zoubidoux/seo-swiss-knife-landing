-- ============================================================
-- Search Toolbox — Migration
-- Run in Supabase SQL Editor (project yowicdqindwwlybmlpku)
--
-- We reuse the existing tables from the Chrome extension.
-- Only 3 columns need to be added to user_entitlements.
-- ============================================================

-- Add the 3 columns missing from user_entitlements
-- (if they already exist this is a no-op)
alter table public.user_entitlements
  add column if not exists cancel_at_period_end  boolean not null default false;

alter table public.user_entitlements
  add column if not exists subscription_interval text
    check (subscription_interval in ('month','year') or subscription_interval is null);

alter table public.user_entitlements
  add column if not exists payment_status        text
    check (payment_status in ('active','past_due','unpaid') or payment_status is null);

-- That's it. All other tables (user_profiles, billing_events,
-- stripe_webhook_events) are already used as-is.
