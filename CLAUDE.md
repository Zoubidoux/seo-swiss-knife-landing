# CLAUDE.md — Search Toolbox Landing Page

## Project Overview

Landing page for **Search Toolbox** (Chrome SEO extension), built with React + TypeScript + Vite + Tailwind CSS v4, deployed on Vercel via GitHub sync.

**Live URL:** https://seogeotoolkit.com  
**GitHub:** Zoubidoux/seo-swiss-knife-landing  
**Vercel:** auto-deploys on push to `master`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS v4 (via `@import "tailwindcss"`) |
| Auth | Supabase Auth (Google OAuth + email) |
| Database | Supabase (shared with Chrome extension) |
| Payments | Stripe Payment Links (test mode) |
| Serverless | Vercel Functions (`/api/*.ts`) |
| i18n | Custom (`src/i18n/index.ts`) — EN/FR/DE/IT/ES |

---

## Environment Variables (Vercel)

```
VITE_SUPABASE_URL=https://yowicdqindwwlybmlpku.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key>
STRIPE_SECRET_KEY=sk_test_...        # → sk_live_... for production
STRIPE_WEBHOOK_SECRET=whsec_...
VITE_SITE_URL=https://seogeotoolkit.com
```

The app uses placeholder fallbacks when env vars are missing (prevents blank page in preview deploys):
- See `src/lib/supabase.ts` → `supabaseConfigured` flag

---

## Supabase Schema

**Project ID:** `yowicdqindwwlybmlpku` (shared with Chrome extension — same `user_id`)

Key tables:
- `user_profiles` — email, stripe_customer_id, credits_remaining
- `user_entitlements` — plan, period_end, cancel_at_period_end, subscription_interval, payment_status
- `billing_events` — raw Stripe event log
- `stripe_webhook_events` — idempotency guard
- `auth_pending_sessions` — Chrome extension handshake (code, access_token, user_id)

Auth flow: Supabase Auth → same `user_id` used in both web app and Chrome extension.

---

## Stripe Payment Links

### Current (TEST mode)
```
PRO_MONTHLY:       https://buy.stripe.com/test_6oU4gB8Pi3l5gNk6Fl0sU00
PRO_YEARLY:        https://buy.stripe.com/test_4gMdRb0iM1cX40ybZF0sU01
UNLIMITED_MONTHLY: https://buy.stripe.com/test_00w7sN8Pi08TgNkd3J0sU02
UNLIMITED_YEARLY:  https://buy.stripe.com/test_5kQbJ3fdG9Jtbt0bZF0sU03
```

### To switch to PRODUCTION
Replace these URLs in **two files**:
1. `src/components/PricingSection.tsx` → `STRIPE_LINKS` object
2. `src/pages/CheckoutContinuePage.tsx` → `PLAN_DATA` object

Also update `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in Vercel env vars.

### How attribution works
When logged-in user clicks a plan, they are redirected to:
```
https://buy.stripe.com/xxx?client_reference_id=USER_SUPABASE_ID&prefilled_email=EMAIL
```
Stripe sends `checkout.session.completed` webhook → `/api/stripe-webhook.ts` reads `client_reference_id` → updates `user_entitlements` in Supabase.

---

## Checkout Flow

```
User clicks plan
  ├── NOT logged in → /checkout/continue?plan=pro&billing=monthly
  │     ├── Shows AuthForm (Google OAuth or email)
  │     └── After login → auto-redirect to Stripe payment link
  └── Logged in → direct redirect to Stripe payment link (with client_reference_id)

After Stripe payment:
  └── Success → /checkout/success (webhook already updated DB)
  └── Cancel  → /checkout/cancel
```

---

## Vercel API Routes

| Route | Purpose |
|---|---|
| `POST /api/stripe-webhook` | Receives Stripe events, updates Supabase |
| `POST /api/create-portal-session` | Opens Stripe Customer Portal for billing management |
| `POST /api/create-checkout-session` | (Legacy — kept for future use with Price IDs) |

---

## i18n

Languages: EN / FR / DE / IT / ES

- Context: `src/contexts/LanguageContext.tsx`
- Translations: `src/i18n/index.ts`
- Persistence: stored in `localStorage` key `st_lang`, overridden by `?lang=XX` URL param
- All page components use `const { lang } = useLanguage()` + `translations[lang].xxx`

To add a new translation section:
1. Add the key to the `en` object in `src/i18n/index.ts`
2. TypeScript will error on the other 4 languages (`fr`, `de`, `it`, `es`) — add matching keys to all

---

## Mascot Physics (HeroSection)

3 mascots float beside the hero subtitle. When grabbed and thrown:
- Spring drag with real mouse velocity tracking (`dragVelPctRef`)
- Gravity: `0.013%/frame`
- Bounce: converts mascot position to viewport px, bounces off `window.innerWidth/Height`
- Rainbow tongue: `state: 'open'` for 3s after release (`mouthOpenUntil`)
- **Key bug fixed:** `dragRef.current` is captured synchronously before `setMascots` (React defers updaters — reading a ref inside the updater gets the post-null value)

RoamingMascot: `position: fixed`, spawns randomly every 60–120s, same physics.

---

## Key Files

```
src/
  components/
    Navbar.tsx              — Fixed nav with language switcher
    HeroSection.tsx         — Physics mascots + hero content
    PricingSection.tsx      — Pricing cards + Stripe redirect
    RoamingMascot.tsx       — Random floating mascot (fixed position)
    Mascot.tsx              — Renders mascot image by type+state
  pages/
    AccountPage.tsx         — Dashboard (plan, credits, extension sync) + AuthForm
    CheckoutContinuePage.tsx — Bridge: login → Stripe redirect
    CheckoutSuccessPage.tsx
    CheckoutCancelPage.tsx
  contexts/
    AuthContext.tsx          — Supabase auth + user_profiles + user_entitlements
    LanguageContext.tsx      — Lang state + localStorage persistence
  i18n/index.ts             — All translations (EN/FR/DE/IT/ES)
  lib/supabase.ts           — Supabase client + type interfaces
api/
  stripe-webhook.ts         — Stripe → Supabase sync
  create-portal-session.ts  — Stripe Customer Portal
  create-checkout-session.ts — (Legacy, kept for Price ID flow)
```
