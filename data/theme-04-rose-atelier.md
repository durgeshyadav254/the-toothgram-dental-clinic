# Theme 04 — Rose Atelier Dental
## Soft Feminine Boutique Luxury Website · Cursor Design Prompt

> **Identity:** Beauty atelier + cosmetic dental lounge — intimate, glowing, personal.  
> **Feel:** Rose quartz, satin, soft copper light; a private beauty studio that happens to do world-class dentistry.  
> **Not like:** Dark couture noir, cold Nordic product UI, or deep emerald old-money club.

---

## 1. Creative North Star

> The website should feel like booking a facial at the most beautiful studio in the city — then discovering the dentistry is elite. Soft glow. Personal attention. Pretty without being unserious.

**Emotional targets:** nurtured, beautiful, excited, safe.  
**User thought on land:** *“I want to be taken care of here. My smile is going to look so naturally pretty.”*

---

## 2. Brand Personality

| Trait | Expression |
|--------|------------|
| Soft-luxe | Blurred gradients, satin surfaces, pillowy cards |
| Intimate | First-person-friendly copy, “you”, concierge warmth |
| Beauty-led | Skincare/beauty visual language married to clinical trust |
| Radiant | Light pinks, pearl, glowing skin photography |
| Playful-refined | Gentle curves, soft bounce on chips — still adult |

**Voice:** Warm, encouraging, polished best-friend + expert. More exclamation restraint than beauty blogs — elegant warmth, not influencer hype.

---

## 3. Color System

```css
:root {
  /* Soft grounds */
  --blush: #F8EDE8;           /* main warm blush canvas */
  --blush-deep: #F0DDD6;      /* bands */
  --pearl: #FFF9F6;           /* pure soft white-pearl */
  --rose-mist: #F3E0DC;       /* chips / hover washes */

  /* Rose & copper */
  --rose: #C9898F;            /* primary rose */
  --rose-deep: #A66B72;       /* hover / text accent */
  --rose-rich: #7A454C;       /* strong text on light / footer option */
  --copper: #C4956A;          /* warm copper metal accent */
  --copper-soft: #E5C9B0;

  /* Ink */
  --ink: #2A2224;             /* soft espresso (not pure black) */
  --ink-soft: #6B5E60;        /* mauve-gray body */
  --ink-faint: #9A8C8E;

  /* Support */
  --mauve: #B9A4B0;           /* secondary floral gray-mauve */
  --success: #6F8F7A;
  --error: #B55C5C;
  --border: #EAD5CF;
  --focus: #C9898F;
}
```

**Rules:**
- Canvas is **blush/pearl**, never cold gray, never full black homepage.
- Rose = primary actions and soft highlights.
- Copper replaces “champagne gold” and “brass” — warmer, more beauty-metal.
- Dark footer can be rose-rich espresso, not emerald and not pure obsidian.
- Don’t drift into medical blue or heritage green.

---

## 4. Typography

```css
--font-display: "Italiana", "Cormorant Infant", "Playfair Display", serif;
--font-body: "Jost", "Mulish", "Nunito Sans", sans-serif;
--font-script-optional: "Snell Roundhand", "Great Vibes"; /* ONLY for tiny flourishes, never body */
```

| Role | Spec |
|------|------|
| Hero H1 | Display serif italic or light roman, 56–84px, soft tracking |
| H2 | Serif 36–48px |
| Labels | Sans 11–12px uppercase tracking 0.16em in rose-deep or copper |
| Body | Sans 16–17px, line-height 1.7, ink-soft |
| Buttons | Sans medium 14px, sentence case: “Book my consult” |

**Type mood:** Beauty editorial / bridal atelier.  
**Not:** Swiss only. **Not:** heavy Bodoni poster. Script max 1–2 words decorative (“Hello,”) if at all.

---

## 5. Imagery Direction

- **Hero:** Soft-focus glow portrait — dewy skin, natural pink lip, gentle smile; or blush-toned lounge interior
- **Clinic:** Curved sofas, bouquets, soft lamps, rose plaster walls, onyx pink details
- **Treatments:** Beauty flat-lays (silk, pearl, porcelain shade guides) — never clinical gore
- **Doctor:** Approachable glam, warm smile, soft wardrobe (rose, cream, taupe)
- **Before/After:** Warm grade, peach highlights, rounded frames

**Lighting:** Butterfly/softbox beauty light; peach-teal contrast subtle.  
**Avoid:** Harsh fluorescent, black marble nightclub, sterile white-only lab.

---

## 6. Layout Language (Unique to This Theme)

1. **Soft curves everywhere** — 24–40px radii; organic blob shapes behind heroes (CSS radial gradients)
2. **Overlapping cards** — slight rotation ±1–2° on gallery polaroids optional
3. **Wave / arc section dividers** (SVG) between bands — not straight brass rules
4. **Center-weighted beauty heroes** with floating pill CTAs
5. **Story tiles** in masonry with rounded clips
6. **Concierge chat aesthetic** for forms — friendly step titles (“Tell us what you dream of”)
7. **Instagram-like gallery** density (still refined)

**Must not copy:** noir side-rail, Nordic strict bento only, heritage double brass frames as default.

---

## 7. Motion

- Soft spring-ish easing (but subtle): `cubic-bezier(0.34, 1.2, 0.64, 1)` on chips only  
- Most UI: 300–400ms ease-out  
- Blob backgrounds: very slow float animation (optional, disable on reduced motion)  
- Image hover: scale 1.03 + soft brightness  
- Heart/star micro on favorite cases optional — keep tasteful  

---

## 8. UI Components

### Buttons
```
Primary:   bg-rose → hover rose-deep, text-pearl, rounded-full, px-8 py-4, soft shadow copper/rose
Secondary: bg-pearl, border border-border, text-ink, rounded-full
Ghost:     text-rose-deep, underline decoration-copper/40
```

### Cards
```
bg-pearl
border: 1px solid var(--border)
border-radius: 28px
shadow: 0 10px 40px rgba(169, 107, 114, 0.08)
hover: translateY(-3px), shadow deeper rose-tint
```

### Chips
Rose-mist fill, rose-deep text, fully pill; active = rose solid + pearl text

### Inputs
Pearl or blush-deep fill, rounded-2xl, rose focus ring; friendly placeholder copy

### Before/After
Rounded-3xl mask; copper/rose gradient handle; labels in soft sans

### Badges
“Loved by 900+ patients” in pearl pill with rose star icons

---

## 9. Site Map & Naming

```
/                    Home
/the-lounge          About the space / experience
/your-dentist        Doctor bio (warmer naming)
/smile-studio        Services index
/smile-studio/[slug]
/glow-gallery        Before/after
/dream-smile         Virtual smile analysis funnel
/love-notes          Reviews
/visit
/book
/journal             Beauty + dental tips
```

CTAs (human, soft):
- **Book my consult**
- **Get my dream smile plan**
- **See glow-ups**
- **Meet your dentist**
- **Say hello**

---

## 10. Homepage Structure

```
[HEADER pearl/blur — wordmark script-serif mix + nav + Book my consult]
[HERO — glow photo + soft blob bg + friendly H1 + dual pill CTAs + star love badge]
[AS SEEN IN / LOVED ON — soft logo row]
[WHY YOU'LL FEEL AT HOME — 3 rounded icon cards]
[SMILE STUDIO — horizontal scroll pills + rounded service cards]
[YOUR DENTIST — warm portrait circle crop or soft rectangle + bio]
[GLOW GALLERY — masonry rounded cases]
[LOVE NOTES — testimonial carousel with avatars]
[DREAM SMILE CTA — blush-deep band with wizard teaser]
[JOURNAL TEASERS optional]
[FOOTER rose-rich or espresso-rose]
[MOBILE dock: Book · Call · Dream smile]
```

### Hero copy
- Label: `Cosmetic dental lounge · [City]`  
- H1: `Your soft  
place to  
shine.`  
  *(alt)* `Pretty, natural  
smiles — planned  
around you.`  
- Sub: `Veneers, Invisalign, whitening, and full smile design in a calm, beauty-first lounge made for comfort.`  
- CTA: `Book my consult` · `Get my dream smile plan`

### Why you’ll feel at home
1. **Beauty-first eye** — We design for faces, lips, and how you light up in photos.  
2. **Gentle pacing** — Anxiety-aware visits, cozy rooms, no rush.  
3. **Clear plan** — You’ll see the vision before we begin.

### Services tone
- Veneers → *Porcelain petals for your smile*  
- Aligners → *Straighten, softly*  
- Whitening → *A lit-from-within glow*  
- Makeover → *Your full glow-up, orchestrated*  
- General care → *Healthy base, always*  
- Emergency → *We’re here when it hurts*

---

## 11. Dream Smile Funnel (Unique UX)

Friendly multi-step, beauty-quiz energy:

**Step 1 — Your vibe**  
Visual cards: Natural soft · Bright glam · Subtle refine · Full glow-up  

**Step 2 — What you’d love**  
Chip multi-select: whiter, straighter, smoother edges, close gaps, youthful fullness…  

**Step 3 — Selfies**  
Cute illustrated guides (line art faces), rose dashed upload zones  

**Step 4 — Meet you**  
Name, phone, email, “How should we reach out?”  

**Done**  
Confetti-free success: soft check animation + “Your plan is being prepared with care.”

Progress bar: rose gradient fill on blush track.

---

## 12. Content Voice Samples

| Context | Copy |
|---------|------|
| Veneers | Custom porcelain shaped to look like your smile — just more rested, even, and radiant. |
| Invisalign | Straighten on your schedule, without putting your life on display. |
| CTA | Book my consult |
| Anxiety | Nervous? Tell us. We’ll go gently. |
| Footer | Soft care. Serious skill. Beautiful smiles. |

**Avoid:** “Silhouette”, “Private members club”, “Clear care. Calm results.” product voice, “Est. craftsmanship brass ledger” formality.

---

## 13. Tech Implementation

- Next.js + Tailwind + Framer Motion  
- Fonts: `Cormorant_Infant` + `Jost` (or Italiana + Mulish)  
- Gradient utilities for blobs  

```js
colors: {
  blush: { DEFAULT: '#F8EDE8', deep: '#F0DDD6', mist: '#F3E0DC' },
  pearl: '#FFF9F6',
  rose: { DEFAULT: '#C9898F', deep: '#A66B72', rich: '#7A454C' },
  copper: { DEFAULT: '#C4956A', soft: '#E5C9B0' },
  ink: { DEFAULT: '#2A2224', soft: '#6B5E60', faint: '#9A8C8E' },
  mauve: '#B9A4B0',
}
```

```css
/* Hero blob example */
.hero-blob {
  background:
    radial-gradient(circle at 20% 30%, rgba(201,137,143,0.35), transparent 45%),
    radial-gradient(circle at 80% 20%, rgba(196,149,106,0.2), transparent 40%),
    var(--blush);
}
```

---

## 14. Component Checklist

- [ ] SoftHeader
- [ ] GlowHero (blobs + pills)
- [ ] LoveBadge (stars)
- [ ] HomeComfortCards
- [ ] StudioServiceCard (rounded)
- [ ] DentistWarmSpot
- [ ] GlowMasonry + BeforeAfterSoft
- [ ] LoveNotesCarousel
- [ ] DreamSmileWizard
- [ ] WaveDivider
- [ ] RoseFooter
- [ ] MobileSoftDock

---

## 15. Do / Don’t

**Do:** blush canvas, rose/copper, pill buttons, big radii, beauty photography, warm friendly CTAs, dream-smile quiz  
**Don’t:** black fashion shells, fjord teal product UI, emerald brass crests, sharp 2px heritage boxes as default, aggressive mystery copy

---

## 16. Cursor Build Order

1. Blush/rose/copper tokens + soft fonts  
2. Soft header/footer/mobile dock  
3. Glow home (hero → comfort → studio → gallery → love notes)  
4. Smile studio pages  
5. Dream smile wizard  
6. Your dentist / lounge / visit  
7. Motion blobs + a11y (contrast: rose on pearl must pass — use rose-deep for small text)

---

## 17. Differentiation Reminder

| Theme | Canvas | Metal/Accent | Type | Mood |
|-------|--------|--------------|------|------|
| 01 Obsidian | Black | Antique gold | Bodoni fashion | Cinematic exclusive |
| 02 Nordic | Alabaster/cool | Fjord teal | Geometric sans | Calm product-minimal |
| 03 Emerald | Cream paper | Brass | Heritage serif | Old-money garden club |
| 04 Rose | Blush pearl | Copper/rose | Soft beauty serif | Boutique beauty lounge |

**If it starts looking like any other theme, push harder into curves, blush, and beauty-quiz language.**

---

## 18. Quick MVP Paths (All Themes Share Intent, Not Skin)

Still implement for this skin:
1. Home  
2. Dream Smile funnel  
3. Glow Gallery  
4. Book + Contact  
5. Core services (veneers, aligners, whitening, makeovers, general)

---

*Theme 04 complete · Rose Atelier*
