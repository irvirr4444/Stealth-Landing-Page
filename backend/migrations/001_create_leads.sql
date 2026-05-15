-- Create leads table for capturing ICSC Vegas contacts
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  qr_source TEXT NOT NULL DEFAULT 'general',
  CONSTRAINT leads_qr_source_check CHECK (
    qr_source IN ('QR=1', 'QR=2', 'QR=3', 'QR=4', 'QR=5', 'general')
  )
);

-- Index for quick lookups by email (avoid duplicates)
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);

-- RLS: Disable for now since we use service_role key server-side
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
