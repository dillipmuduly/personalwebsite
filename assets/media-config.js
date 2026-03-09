/**
 * ============================================================
 *  DR. DILLIP KUMAR MUDULY — MEDIA CONFIGURATION FILE
 *  Edit this file to add/remove videos and gallery images.
 *  No coding knowledge needed — just follow the instructions.
 * ============================================================
 *
 *  ⚠️  ACTION REQUIRED BEFORE GOING LIVE:
 *
 *  1. Set your WhatsApp number (line ~67):
 *       whatsapp : "919013072969"
 *       Format: 91 (India code) + your 10-digit number
 *       Example: "919437000000"  ← no +, no spaces, no dashes
 *
 *  2. Set your phone number (line ~66):
 *       phone : "+91-9013072969"
 *
 *  3. Upload your photo:
 *       assets/gallery/hero_image.jpg
 *
 * ============================================================
 */

const MEDIA_CONFIG = {

  /**
   * ── GALLERY IMAGES ──────────────────────────────────────
   * Add images to the assets/gallery/ folder using these naming patterns.
   * The website will automatically show them in the correct category.
   *
   * Naming rules:
   *   conference1.jpg, conference2.jpg, conference3.jpg ...
   *   cme1.jpg, cme2.jpg ...
   *   camp1.jpg, camp2.jpg ...      (awareness camps)
   *   screening1.jpg, screening2.jpg ...
   *   team1.jpg, team2.jpg ...
   *   award1.jpg, award2.jpg ...
   *   lecture1.jpg, lecture2.jpg ...
   *   surgery1.jpg, surgery2.jpg ...  (operating / clinical)
   *
   * Tell the system how many images you have in each category:
   * (Set to 0 if you have none yet)
   */
  gallery: {
    conference : { label: "Conferences & CME",    count: 0, prefix: "conference" },
    cme        : { label: "CME & Workshops",       count: 0, prefix: "cme"        },
    camp       : { label: "Awareness Camps",       count: 0, prefix: "camp"       },
    screening  : { label: "Screening Programs",    count: 0, prefix: "screening"  },
    team       : { label: "Team & Department",     count: 0, prefix: "team"       },
    award      : { label: "Awards & Recognition",  count: 0, prefix: "award"      },
    lecture    : { label: "Lectures & Talks",      count: 0, prefix: "lecture"    },
    surgery    : { label: "Clinical & OR",         count: 0, prefix: "surgery"    },
  },

  /**
   * ── VIDEOS ──────────────────────────────────────────────
   * Add YouTube or Vimeo video IDs below.
   *
   * For YouTube:  Go to the video → copy the ID from the URL
   *   e.g. youtube.com/watch?v=XXXXXXXXXXX  → id is "XXXXXXXXXXX"
   *
   * For Vimeo: vimeo.com/123456789 → id is "123456789"
   *
   * Categories: "breast" | "earlydetection" | "odia" | "gi" | "thyroid" | "general"
   *
   * EXAMPLE (remove the // to activate):
   // { id: "dQw4w9WgXcQ", platform: "youtube", category: "breast",        title: "Breast Cancer Awareness Talk" },
   // { id: "dQw4w9WgXcQ", platform: "youtube", category: "earlydetection", title: "Early Detection & Warning Signs" },
   // { id: "123456789",   platform: "vimeo",   category: "odia",           title: "ସ୍ତନ କର୍କଟ ରୋଗ — Odia Podcast Ep.1" },
   */
  videos: [
    // Add your videos here ↓
  ],

  /**
   * ── CLINIC DETAILS ──────────────────────────────────────
   * Update your contact information here.
   */
  clinic: {
    address   : "Utkal Hospital, Bhubaneswar, Odisha",
    phone     : "+91-9013072969",       // Replace with real number
    whatsapp  : "919013072969",         // Replace with real number (no + sign, no spaces)
    maps_link : "https://www.google.com/maps/place/UTKAL+HOSPITAL/@20.3225835,85.7978529,778m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a190856d2434299:0x584e864fb095095d!8m2!3d20.3225785!4d85.8004278!16s%2Fg%2F11byl8r_wx?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",                      // Paste Google Maps link here
  }

};

// ── Do not edit below this line ──
window.MEDIA_CONFIG = MEDIA_CONFIG;
