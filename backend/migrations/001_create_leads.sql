-- Create leads table for capturing ICSC Vegas contacts
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  ip TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Index for quick lookups by email (avoid duplicates)
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);

-- RLS: Disable for now since we use service_role key server-side
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
