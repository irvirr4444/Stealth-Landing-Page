# Backend

This folder is reserved for Supabase database migrations and scripts.

The actual "backend" logic (API routes) lives in `frontend/app/api/` since we're using Next.js Route Handlers.

## Supabase setup

1. Create a `leads` table in your Supabase dashboard with these columns:
   - `id` (uuid, primary key, default: gen_random_uuid())
   - `name` (text, not null)
   - `phone` (text, not null)
   - `email` (text, not null)
   - `created_at` (timestamptz, default: now())
   - `utm_source` (text)
   - `utm_medium` (text)
   - `utm_campaign` (text)
   - `qr_source` (text, not null, default: general)

2. Or run the migration SQL in `migrations/001_create_leads.sql`
