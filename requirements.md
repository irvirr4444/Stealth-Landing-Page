# Stealth Landing Page — ICSC Vegas

**Event:** ICSC Vegas — Sun May 17 – Tue May 19  
**Purpose:** Capture leads via QR code from the conference floor.  
**Owner:** Michael (build). Dan: spec, mockup, domain, QR, follow-up.

**Goal:** Capture **200–500** high-quality CRE professional contacts (principals, brokers, lenders, sponsors) over three days in Vegas. **Stealth positioning** — hint at the product without revealing it so the narrative stays controlled on post-conference follow-up.

A separate HTML mockup file shows design intent (referenced in the original brief).

---

## Who this is for

Broad CRE audience. The hinted product speaks to anyone running deal flow.

| Segment | Angle |
| -------- | ----- |
| **Principals / owners** | Sourcing equity, next acquisition, investor relationships |
| **Brokers** | Debt, equity, leasing, investment sales |
| **Lenders** | Life cos, debt funds, CMBS, balance sheet lenders |
| **Sponsors / developers** | Capital raising, JV matching, deal marketing |

**Universal pain:** Relationships live in Outlook or in people’s heads; deals go to stale Rolodexes; no time for the relationships that actually close deals.

---

## Positioning and copy

**Tone:** Stealth, premium, mysterious — say less, not more. Reference: Arc browser, Friend.com (waiting lists with minimal copy). **Not** a CRM pitch — hint at relief from draining work.

### Required copy (by zone)

| Zone | Copy |
| ---- | ---- |
| **Mark (top)** | `[pulsing gold dot]` **In Stealth** \| `[counter]` on the list |
| **Eyebrow** | Something is coming |
| **Headline (cycling word)** | Don’t run your **[deals / capital / book / relationships]** alone anymore. |
| **Subhead** | It’s time we gave you the lift you deserved. |
| **Positioning line** | Built for anyone who runs deal flow for a living. |
| **Hint stack (3 lines, 2 struck)** | ~~— Rebuilding your contact list every quarter~~ |
| | ~~— Blasting deals to a Rolodex that’s gone stale~~ |
| | — More time on the relationships that close deals |
| **Form label** | Be the first to know |
| **CTA** | Get early access |
| **Footer** | Launching soon. Invite-only at the start. |
| **Success title** | You’re on the list. |
| **Success subtext** | We’ll be in touch soon. The first calls go out shortly after ICSC. |

---

## Design intent

Use the attached mockup for full visual reference. Summary:

### Color and mood

- **Dark mode default:** deep navy `#0a0e1a`, cream text `#f5f3ed`, warm gold accent `#b88a4a`
- **Feel:** Premium, not corporate

### Typography

- **Serif headline** (Times New Roman or Georgia); **sans-serif** body
- **Rotating word:** Italic gold with a small **blinking caret** (alive / typing)

### Motion and background

- **Animated gradient mesh:** Two soft blurred orbs (gold + dark blue), slow drift, **~18s loop** — subtle, alive
- **Headline cycle:** `deals → capital → book → relationships` every **2.8s**, smooth fade + rise
- **Pulsing gold dot** next to “In Stealth” — live signal without explaining what
- **Live counter** (e.g. “127 on the list”): increments occasionally (~**40%** chance every **8** seconds) for light social proof

### Layout and polish

- **Subtle grid** with radial mask — fades at edges; architectural / RE feel without being literal
- **Haptic on submit:** Light vibration via **Vibration API** (premium on iPhone)
- **Success state:** Hero swaps to gold checkmark + “You’re on the list”; **pop** animation on icon
- **Mobile-first:** ~95% iPhone scans in a noisy hall — single column, large tap targets, fast load, **safe-area** for notch / home indicator
- **No logo, no company name** on page — stealth; “who are you?” answered at the booth

---

## Form fields

Three fields only (low friction on the floor).

| Field | Type | Required | Autocomplete |
| ----- | ---- | -------- | -------------- |
| Full name | text | yes | `name` |
| Mobile | tel | yes | `tel` |
| Work email | email | yes | `email` |

**Why phone:** Text response ~**5–10×** email; follow-up is a **personal text from a real person** within 48 hours, not a marketing blast. Phone is the highest-value field. Role can be inferred from email domain or asked in the text thread.

---

## Technical scope

| Area | Requirement |
| ---- | ----------- |
| **Domain** | Short, stealth-feeling (e.g. `dealflow.so`, `oneline.so`). Not corporate. **Dan locks by Thursday.** |
| **Stack** | Next.js on Vercel, Tailwind, **single page** |
| **Backend** | Form → **Supabase** or **Airtable**. Store: name, phone, email, timestamp, IP, UTM source |
| **QR / UTMs** | **3–5** distinct codes with different UTM tags (booth A, B, handouts, etc.) |
| **Post-submit** | Quiet confirmation, gold checkmark; **no** marketing automation; **no** “check your inbox” — same dark page, thank-you |
| **Analytics** | PostHog or Plausible — real-time scan → submit to tune **Sunday night** if needed |
| **Performance** | Under **1.5s** on 3G; bad convention WiFi. Inlined CSS acceptable; **system fonts** or **one** Google Font max |

---

## Timeline

| When | What |
| ---- | ---- |
| **Tue May 13** | Dan sends spec + mockup; Michael reviews and confirms |
| **Wed May 14** | Michael ships v1 to staging; Dan, Brett, Marc review |
| **Thu May 15** | Final copy/design tweaks; **lock domain**; generate QR codes |
| **Fri May 16** | Print QR on cards/stickers; test scan on **three** phones |
| **Sun May 17** | Live in Vegas |

---

## What we say in person (booth)

Default: **curiosity, not specificity.**

> We’re not talking about it yet. We’re in stealth. But if you spend any part of your day in real estate deal flow — sourcing capital, finding buyers, managing your relationships — you’re going to want to be on this list. Drop your number and we’ll be the first call you get when we open the doors.

If they push, tailor:

| Who | Line |
| --- | ---- |
| Principal | It’s about how you find the next deal and the right capital partner without burning the week on it. |
| Broker | It’s about turning your inbox into the CRM you wish you had. |
| Lender | It’s about reaching the right borrowers without the spray-and-pray. |

**Rule:** Curiosity is the funnel; specificity kills it. Brett, Marc, and Dan at the booth.

---

## Post-conference follow-up

Within **48 hours** of ICSC ending, **Dan** texts each contact from his **personal number** — direct, conversational, not marketing.

> Hey [Name], thanks for scanning at ICSC. I’m Dan from the team building this. Quick question — if there was one part of running your deal flow that drained you most, what would it be? Curious to hear before we open the doors.

The text **qualifies**: responses bucket the audience and flag who to treat as **design partners**.
