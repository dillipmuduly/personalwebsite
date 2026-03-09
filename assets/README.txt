# Website Image & Media Guide
## drdillipmuduly.co.in

> **Who is this for?** Anyone updating the website — clinic staff, web helper, or Dr. Muduly directly.  
> No technical knowledge needed. Just follow the steps below.

---

## YOUR WEBSITE FOLDER STRUCTURE

When you open your website files, you will see this layout:

```
📁 your-website/
│
├── index.html                  ← Main website page (do not edit)
├── patient-resources.html      ← Patient resources page
├── professional-resources.html ← Professional resources page
│
└── 📁 assets/
    ├── media-config.js         ← ⭐ THE MAIN CONFIG FILE (edit this)
    └── 📁 gallery/
        ├── hero_image.jpg      ← Your profile photo
        ├── conference1.jpg
        ├── conference2.jpg
        ├── cme1.jpg
        └── ... (all your photos go here)
```

---

## PART 1 — YOUR PROFILE PHOTO (Hero Image)

This is the main photo shown on the homepage right side.

### File name (exact):
```
hero_image.jpg
```

### Where to put it:
```
assets/gallery/hero_image.jpg
```

### Requirements:
| Item | Recommendation |
|------|---------------|
| File name | Must be exactly `hero_image.jpg` |
| Format | JPG or JPEG only |
| Orientation | Portrait (tall) works best |
| Minimum size | 600 × 800 pixels |
| Best size | 900 × 1200 pixels |
| Background | Plain / white / clinic background preferred |

### ✅ Steps:
1. Rename your photo to `hero_image.jpg`
2. Place it inside the `assets/gallery/` folder
3. Reload the website — the photo will appear automatically

---

## PART 2 — GALLERY PHOTOS

The gallery has **8 categories**. Each category has its own naming rule.

### Category naming table:

| Category | File Prefix | Example Names | What Photos to Use |
|----------|-------------|---------------|-------------------|
| Conferences | `conference` | `conference1.jpg`, `conference2.jpg` | ASOOCON, IASO, CME conferences attended |
| CME & Workshops | `cme` | `cme1.jpg`, `cme2.jpg` | Workshops, CME sessions, teaching |
| Awareness Camps | `camp` | `camp1.jpg`, `camp2.jpg` | Cancer awareness / screening camps |
| Screening | `screening` | `screening1.jpg`, `screening2.jpg` | Screening drives, health camps |
| Team | `team` | `team1.jpg`, `team2.jpg` | Team photos, department group photos |
| Awards | `award` | `award1.jpg`, `award2.jpg` | Award ceremonies, fellowships |
| Lectures | `lecture` | `lecture1.jpg`, `lecture2.jpg` | Guest lectures, talks, presentations |
| Clinical | `surgery` | `surgery1.jpg`, `surgery2.jpg` | OT / clinical setting (no patient faces) |

### ⚠️ Important naming rules:
- Always start numbering from **1** (not 0)
- Numbers must be **continuous** — no gaps (1, 2, 3 … not 1, 3, 5)
- File extension must be `.jpg` (lowercase)
- No spaces in file names

### ✅ Example — Adding 3 conference photos:
1. Rename your photos:
   - `conference1.jpg`
   - `conference2.jpg`
   - `conference3.jpg`
2. Put all three inside `assets/gallery/`
3. Open `assets/media-config.js`
4. Find the `conference` entry and set `count: 3`
5. Save the file and reload the website

---

## PART 3 — UPDATING media-config.js

This is the **one file you edit** to tell the website how many photos you have, your phone number, WhatsApp, and videos.

### How to open it:
- Right-click on `media-config.js` → Open with Notepad (Windows) or TextEdit (Mac)

### What it looks like inside:

```javascript
var MEDIA_CONFIG = {

  clinic: {
    phone:    "+91-XXXXXXXXXX",       // ← Your phone number
    whatsapp: "91XXXXXXXXXX",         // ← 91 + 10-digit number, NO spaces or +
    address:  "Utkal Hospital, Bhubaneswar, Odisha",
    maps_link: "https://maps.google.com/..."
  },

  gallery: {
    conference: { prefix: "conference", count: 0,  label: "Conference" },
    cme:        { prefix: "cme",        count: 0,  label: "CME & Workshop" },
    camp:       { prefix: "camp",       count: 0,  label: "Awareness Camp" },
    screening:  { prefix: "screening",  count: 0,  label: "Screening" },
    team:       { prefix: "team",       count: 0,  label: "Team" },
    award:      { prefix: "award",      count: 0,  label: "Award" },
    lecture:    { prefix: "lecture",    count: 0,  label: "Lecture" },
    surgery:    { prefix: "surgery",    count: 0,  label: "Clinical" },
  },

  videos: [
    // Add YouTube videos here — see Part 4
  ]

};
```

### The `count` number:
- This tells the website **how many photos** you have in each category
- If you add 4 conference photos → set `count: 4`
- If you have no photos in a category → leave it as `count: 0`

### Phone number format:
```
phone: "+91-94370XXXXX"       ← With country code, dashes OK here
```

### WhatsApp number format:
```
whatsapp: "9194370XXXXX"      ← 91 + number, NO +, NO spaces, NO dashes
```

---

## PART 4 — ADDING YOUTUBE VIDEOS

You can add your YouTube video links to the website.

### Steps:
1. Open the YouTube video you want to add
2. Copy the **Video ID** from the URL

```
https://www.youtube.com/watch?v=  ABC123xyz
                                  ^^^^^^^^^^
                                  This is the Video ID
```

3. Open `assets/media-config.js`
4. Add an entry inside the `videos: [ ]` section:

```javascript
videos: [
  {
    id:       "ABC123xyz",
    title:    "Breast Cancer Awareness — Dr. Dillip Kumar Muduly",
    category: "breast",
    platform: "youtube"
  },
]
```

### Video categories available:
| Category value | Shown as |
|---------------|----------|
| `breast` | Breast Cancer |
| `earlydetection` | Early Detection |
| `odia` | Odia Content |
| `gi` | GI Cancer |
| `thyroid` | Thyroid Cancer |
| `general` | General Oncology |

### Adding multiple videos:
```javascript
videos: [
  { id: "ABC123xyz", title: "Video One Title", category: "breast",        platform: "youtube" },
  { id: "DEF456abc", title: "Video Two Title", category: "odia",          platform: "youtube" },
  { id: "GHI789def", title: "Video Three Title", category: "general",     platform: "youtube" },
]
```

> **Vimeo videos:** Change `platform: "youtube"` to `platform: "vimeo"` and use the Vimeo video ID.

---

## PART 5 — PHOTO GUIDELINES (for best results)

| Rule | Why |
|------|-----|
| Use JPG format only | The website only reads `.jpg` files |
| Keep file size under 500 KB per photo | Faster loading on mobile |
| Compress photos before uploading | Use [squoosh.app](https://squoosh.app) — free, no install needed |
| Do not include patient faces in clinical photos | NMC compliance |
| Portrait or landscape both work for gallery | Website crops to 4:3 ratio |
| Profile photo should show face clearly | Hero image is displayed large |

### How to compress photos (free):
1. Go to **squoosh.app** on any browser
2. Drag your photo onto the page
3. Set quality to **80%**
4. Download the compressed file
5. Rename it and place in `assets/gallery/`

---

## PART 6 — QUICK CHECKLIST

Use this every time you add new photos:

- [ ] Photo renamed with correct prefix and number (e.g. `conference4.jpg`)
- [ ] Photo placed inside `assets/gallery/` folder
- [ ] `count` updated in `media-config.js` to match number of photos
- [ ] File saved
- [ ] Website reloaded in browser to check

---

## PART 7 — COMMON MISTAKES & FIXES

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Photo not showing | Wrong file name | Check spelling — must match prefix exactly, e.g. `conference1.jpg` not `Conference1.jpg` |
| Only some photos show | Count too low in config | Update `count` to match actual number of files |
| All photos missing from a category | Count still set to 0 | Set correct count in `media-config.js` |
| WhatsApp button not working | Wrong number format | Remove all spaces, `+`, and dashes. Format: `919437XXXXXX` |
| Profile photo not appearing | Wrong file name or location | Must be `assets/gallery/hero_image.jpg` exactly |
| Video not showing | Wrong Video ID | Copy only the ID part from YouTube URL, not the full link |

---

## QUICK REFERENCE CARD

```
PROFILE PHOTO
  File name : hero_image.jpg
  Location  : assets/gallery/hero_image.jpg

GALLERY PHOTOS
  Location  : assets/gallery/
  conference1.jpg, conference2.jpg ...
  cme1.jpg, cme2.jpg ...
  camp1.jpg, camp2.jpg ...
  screening1.jpg, screening2.jpg ...
  team1.jpg, team2.jpg ...
  award1.jpg, award2.jpg ...
  lecture1.jpg, lecture2.jpg ...
  surgery1.jpg, surgery2.jpg ...

CONFIG FILE
  Location  : assets/media-config.js
  Edit      : count, phone, whatsapp, videos

NEED HELP?
  Contact your web support or refer to this README
```

---

*README prepared for drdillipmuduly.co.in · Last updated March 2026*