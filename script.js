/* =========================================================
   آلیگیتور پروجکت
   جاوااسکریپت تعاملی — فارسی و انگلیسی - RTL & LTR
   دوزبانه با تغییر زبان در همان صفحه
   ========================================================= */

const translations = {
  fa: {
    title: "علیگیتور پروجکت — دیجی و تهیه‌کننده",
    description: "علیگیتور پروجکت — دیجی، تهیه‌کننده و هنرمند موسیقی الکترونیک.",
    brand_name: "علیگیتور",
    brand_mark: "ع",
    search_placeholder: "علیگیتور پروجکت",
    search_aria: "جستجوی علیگیتور پروجکت",
    clear_search: "پاک‌کردن جستجو",
    search_button: "جستجو",
    theme_toggle: "تغییر حالت روشن و تاریک",
    lang_toggle: "تغییر زبان",
    lang_toggle_short: "EN",
    menu_open: "بازکردن منو",
    menu_close: "بستن منو",
    nav_all: "همه",
    nav_music: "موسیقی",
    nav_videos: "ویدیوها",
    nav_events: "رویدادها",
    nav_gallery: "گالری",
    nav_about: "درباره",
    hero_title: "علیگیتور پروجکت",
    hero_desc: "علیگیتور پروجکت دیجی و تهیه‌کنندهٔ موسیقی الکترونیک است که صداهای پرانرژی میان هاوس، تکنو و موسیقی الکترونیک ملودیک می‌سازد.",
    hero_link_music: "موسیقی",
    hero_link_about: "درباره",
    hero_link_events: "رویدادها",
    hero_link_gallery: "گالری",
    about_heading: "درباره علیگیتور پروجکت",
    about_large: "علیگیتور پروجکت هویت هنری یک دیجی و تهیه‌کننده است که بر موسیقی الکترونیک، فرهنگ کلاب و اجراهای زندهٔ اتمسفریک تمرکز دارد.",
    about_p: "با ترکیب ریتم‌های پرقدرت، ملودی‌های هیپنوتیزم‌کننده و تولید مدرن الکترونیک، علیگیتور پروجکت صدایی می‌سازد که هم برای کلاب‌های صمیمی و هم برای پیست‌های بزرگ طراحی شده است.",
    info_artist_label: "هنرمند",
    info_artist_value: "علیگیتور پروجکت",
    info_job_label: "حرفه",
    info_job_value: "دیجی و تهیه‌کننده",
    info_genre_label: "سبک",
    info_genre_value: "هاوس / تکنو",
    info_location_label: "مستقر در",
    info_location_value: "ایران",
    music_eyebrow: "همین حالا گوش کنید",
    music_heading: "موسیقی",
    view_all: "مشاهده همه",
    youtube_link: "یوتیوب",
    track1_info: "علیگیتور پروجکت · Ft. Copenhagen Drummers",
    track2_info: "علیگیتور پروجکت · نسخهٔ رسمی",
    track3_info: "علیگیتور پروجکت · میکس اصلی",
    track4_info: "علیگیتور پروجکت vs Space Frog",
    videos_eyebrow: "تماشا",
    videos_heading: "ویدیوها",
    video_music_video: "موزیک ویدیو",
    video_prefix1: "Aligator & Decaville · ",
    track_project: "علیگیتور پروجکت · ",
    video_with_bijan: "به همراه بیژن مرتضوی · موزیک ویدیو",
    events_eyebrow: "اجرای زنده",
    events_heading: "رویدادهای پیش‌رو",
    event_month_mordad: "مرداد",
    event_month_shahrivar: "شهریور",
    event_month_mehr: "مهر",
    event1_title: "اجرای زندهٔ علیگیتور پروجکت",
    event1_loc: "تهران، ایران",
    event1_time: "۲۲:۰۰ تا ۰۴:۰۰",
    event2_title: "حرکت شب",
    event2_loc: "مشهد، ایران",
    event2_time: "۲۳:۰۰ تا ۰۵:۰۰",
    event3_title: "شب عمیق الکترونیک",
    event3_loc: "اصفهان، ایران",
    event3_time: "۲۱:۰۰ تا ۰۴:۰۰",
    ticket: "بلیت",
    gallery_eyebrow: "تصاویر",
    gallery_heading: "گالری",
    gallery_hint: "برای بزرگ‌نمایی روی تصویر بزنید",
    gallery_caption1: "پشت میکسر در کلاب",
    gallery_caption2: "جزئیات میکسر و فیدرها",
    gallery_caption3: "جمعیت در فستیوال شبانه",
    gallery_caption4: "استیج و نورپردازی",
    gallery_caption5: "صفحهٔ وینیل",
    gallery_caption6: "استودیوی تولید موسیقی",
    gallery_alt1: "دیجی پشت میکسر در کلاب",
    gallery_alt2: "جزئیات میکسر دیجی",
    gallery_alt3: "جمعیت در فستیوال شبانه",
    gallery_alt4: "استیج و نورپردازی",
    gallery_alt5: "صفحهٔ وینیل روی گرامافون",
    gallery_alt6: "استودیوی تولید موسیقی",
    related_heading: "جستجوهای مرتبط",
    related_electronic: "موسیقی الکترونیک",
    related_genre: "سبک",
    related_dj: "دیجی و تهیه‌کننده",
    related_artist: "هنرمند",
    related_club: "فرهنگ کلاب",
    related_music: "موسیقی",
    knowledge_title: "علیگیتور پروجکت",
    knowledge_type: "دیجی موسیقی الکترونیک و بازیگر",
    knowledge_label: "اطلاعات هنرمند",
    knowledge_img1: "علیگیتور پروجکت در حال اجرا",
    knowledge_img2: "اجرای زندهٔ علیگیتور پروجکت",
    knowledge_img3: "علیگیتور پروجکت",
    knowledge_img4: "جمعیت در اجرای زنده",
    knowledge_img5: "استیج و نورپردازی",
    knowledge_img6: "صفحهٔ وینیل",
    social_instagram: "اینستاگرام",
    social_spotify: "اسپاتیفای",
    social_soundcloud: "ساندکلود",
    social_youtube: "یوتیوب",
    social_email: "ایمیل",
    social_telegram: "تلگرام",
    knowledge_exp: "سابقه",
    knowledge_exp_val: "۲۰ سال",
    knowledge_genre: "سبک",
    knowledge_genre_val: "الکترونیک",
    knowledge_job: "حرفه",
    knowledge_job_val: "دیجی / بازیگر",
    knowledge_loc: "موقعیت",
    knowledge_loc_val: "ایران",
    more_info: "اطلاعات بیشتر درباره علیگیتور پروجکت",
    mobile_explore: "کاوش",
    lightbox_aria: "نمایش تصویر در اندازهٔ بزرگ",
    close: "بستن",
    prev_image: "تصویر قبلی",
    next_image: "تصویر بعدی",
    play_track: "پخش آهنگ",
    play_video: "پخش ویدیو",
    prev_track: "آهنگ قبلی",
    next_track: "آهنگ بعدی",
    play_pause: "پخش / توقف",
    close_player: "بستن پخش‌کننده",
    toast_soon: "به‌زودی",
    toast_ticket_soon: "لینک خرید بلیت به‌زودی اضافه می‌شود.",
    toast_track_options: "گزینه‌های این آهنگ به‌زودی اضافه می‌شود.",
    toast_link_soon: "لینک {name} به‌زودی اضافه می‌شود.",
    toast_no_result: "نتیجه‌ای برای «{query}» یافت نشد.",
    toast_show: "نمایش «{title}»",
    toast_play_click: "برای پخش، یک‌بار روی صفحه کلیک کنید.",
    toast_audio_error: "پخش این فایل صوتی ممکن نشد.",
    search_for: "جستجو برای «{query}»",
    player_artist: "علیگیتور پروجکت",
    player_cover: "ع"
  },
  en: {
    title: "Aligator Project — DJ & Producer",
    description: "Aligator Project — DJ, producer and electronic music artist.",
    brand_name: "Aligator",
    brand_mark: "A",
    search_placeholder: "Aligator Project",
    search_aria: "Search Aligator Project",
    clear_search: "Clear search",
    search_button: "Search",
    theme_toggle: "Toggle light/dark mode",
    lang_toggle: "Change language",
    lang_toggle_short: "فا",
    menu_open: "Open menu",
    menu_close: "Close menu",
    nav_all: "All",
    nav_music: "Music",
    nav_videos: "Videos",
    nav_events: "Events",
    nav_gallery: "Gallery",
    nav_about: "About",
    hero_title: "Aligator Project",
    hero_desc: "Aligator Project is a DJ and electronic music producer creating high-energy sounds between house, techno and melodic electronic music.",
    hero_link_music: "Music",
    hero_link_about: "About",
    hero_link_events: "Events",
    hero_link_gallery: "Gallery",
    about_heading: "About Aligator Project",
    about_large: "Aligator Project is the artistic identity of a DJ and producer focused on electronic music, club culture and atmospheric live performances.",
    about_p: "Combining powerful rhythms, hypnotic melodies and modern electronic production, Aligator Project creates a sound designed for both intimate clubs and big dancefloors.",
    info_artist_label: "Artist",
    info_artist_value: "Aligator Project",
    info_job_label: "Profession",
    info_job_value: "DJ & Producer",
    info_genre_label: "Genre",
    info_genre_value: "House / Techno",
    info_location_label: "Based in",
    info_location_value: "Iran",
    music_eyebrow: "Listen now",
    music_heading: "Music",
    view_all: "View all",
    youtube_link: "YouTube",
    track1_info: "Aligator Project · Ft. Copenhagen Drummers",
    track2_info: "Aligator Project · Official Version",
    track3_info: "Aligator Project · Original Mix",
    track4_info: "Aligator Project vs Space Frog",
    videos_eyebrow: "Watch",
    videos_heading: "Videos",
    video_music_video: "Music Video",
    video_prefix1: "Aligator & Decaville · ",
    track_project: "Aligator Project · ",
    video_with_bijan: "Ft. Bijan Mortazavi · Music Video",
    events_eyebrow: "Live",
    events_heading: "Upcoming Events",
    event_month_mordad: "Aug",
    event_month_shahrivar: "Sep",
    event_month_mehr: "Oct",
    event1_title: "Aligator Project Live Set",
    event1_loc: "Tehran, Iran",
    event1_time: "22:00 - 04:00",
    event2_title: "Night Move",
    event2_loc: "Mashhad, Iran",
    event2_time: "23:00 - 05:00",
    event3_title: "Deep Electronic Night",
    event3_loc: "Isfahan, Iran",
    event3_time: "21:00 - 04:00",
    ticket: "Tickets",
    gallery_eyebrow: "Photos",
    gallery_heading: "Gallery",
    gallery_hint: "Click image to enlarge",
    gallery_caption1: "Behind the decks in club",
    gallery_caption2: "Mixer and faders details",
    gallery_caption3: "Crowd at night festival",
    gallery_caption4: "Stage and lighting",
    gallery_caption5: "Vinyl record",
    gallery_caption6: "Music production studio",
    gallery_alt1: "DJ behind mixer in club",
    gallery_alt2: "DJ mixer details",
    gallery_alt3: "Crowd at night festival",
    gallery_alt4: "Stage and lighting",
    gallery_alt5: "Vinyl record on turntable",
    gallery_alt6: "Music production studio",
    related_heading: "Related searches",
    related_electronic: "Electronic Music",
    related_genre: "Genre",
    related_dj: "DJ & Producer",
    related_artist: "Artist",
    related_club: "Club Culture",
    related_music: "Music",
    knowledge_title: "Aligator Project",
    knowledge_type: "Electronic Music DJ & Actor",
    knowledge_label: "Artist Info",
    knowledge_img1: "Aligator Project performing",
    knowledge_img2: "Aligator Project live performance",
    knowledge_img3: "Aligator Project",
    knowledge_img4: "Crowd at live show",
    knowledge_img5: "Stage and lighting",
    knowledge_img6: "Vinyl record",
    social_instagram: "Instagram",
    social_spotify: "Spotify",
    social_soundcloud: "SoundCloud",
    social_youtube: "YouTube",
    social_email: "Email",
    social_telegram: "Telegram",
    knowledge_exp: "Experience",
    knowledge_exp_val: "20 Years",
    knowledge_genre: "Genre",
    knowledge_genre_val: "Electronic",
    knowledge_job: "Profession",
    knowledge_job_val: "DJ / Actor",
    knowledge_loc: "Location",
    knowledge_loc_val: "Iran",
    more_info: "More info about Aligator Project",
    mobile_explore: "Explore",
    lightbox_aria: "View image in large size",
    close: "Close",
    prev_image: "Previous image",
    next_image: "Next image",
    play_track: "Play track",
    play_video: "Play video",
    prev_track: "Previous track",
    next_track: "Next track",
    play_pause: "Play / Pause",
    close_player: "Close player",
    toast_soon: "Coming soon",
    toast_ticket_soon: "Ticket link will be added soon.",
    toast_track_options: "Track options coming soon.",
    toast_link_soon: "{name} link coming soon.",
    toast_no_result: "No results for \"{query}\".",
    toast_show: "Showing \"{title}\"",
    toast_play_click: "Click once on page to play.",
    toast_audio_error: "Could not play this audio file.",
    search_for: "Search for \"{query}\"",
    player_artist: "Aligator Project",
    player_cover: "A"
  }
};

const searchDataByLang = {
  fa: [
    { keyword: "آلیگیتور", title: "آلیگیتور پروجکت — دیجی و تهیه‌کننده", section: "about" },
    { keyword: "درباره", title: "دربارهٔ آلیگیتور پروجکت", section: "about" },
    { keyword: "دیجی", title: "آلیگیتور پروجکت — دیجی و تهیه‌کننده", section: "about" },
    { keyword: "موسیقی", title: "موسیقی — آلیگیتور پروجکت", section: "music" },
    { keyword: "آهنگ", title: "موسیقی — آلیگیتور پروجکت", section: "music" },
    { keyword: "ترک", title: "موسیقی — آلیگیتور پروجکت", section: "music" },
    { keyword: "ویدیو", title: "ویدیوها — آلیگیتور پروجکت", section: "videos" },
    { keyword: "رویداد", title: "رویدادهای پیش‌رو — آلیگیتور پروجکت", section: "events" },
    { keyword: "کنسرت", title: "رویدادهای پیش‌رو — آلیگیتور پروجکت", section: "events" },
    { keyword: "اجرا", title: "رویدادهای پیش‌رو — آلیگیتور پروجکت", section: "events" },
    { keyword: "گالری", title: "گالری — آلیگیتور پروجکت", section: "gallery" },
    { keyword: "عکس", title: "گالری — آلیگیتور پروجکت", section: "gallery" },
    { keyword: "تصویر", title: "گالری — آلیگیتور پروجکت", section: "gallery" },
    { keyword: "اسپاتیفای", title: "آلیگیتور پروجکت در اسپاتیفای", section: "music" },
    { keyword: "یوتیوب", title: "آلیگیتور پروجکت در یوتیوب", section: "videos" },
    { keyword: "اینستاگرام", title: "آلیگیتور پروجکت در اینستاگرام", section: "about" }
  ],
  en: [
    { keyword: "aligator", title: "Aligator Project — DJ & Producer", section: "about" },
    { keyword: "about", title: "About Aligator Project", section: "about" },
    { keyword: "dj", title: "Aligator Project — DJ & Producer", section: "about" },
    { keyword: "music", title: "Music — Aligator Project", section: "music" },
    { keyword: "track", title: "Music — Aligator Project", section: "music" },
    { keyword: "song", title: "Music — Aligator Project", section: "music" },
    { keyword: "video", title: "Videos — Aligator Project", section: "videos" },
    { keyword: "event", title: "Upcoming Events — Aligator Project", section: "events" },
    { keyword: "concert", title: "Upcoming Events — Aligator Project", section: "events" },
    { keyword: "show", title: "Upcoming Events — Aligator Project", section: "events" },
    { keyword: "gallery", title: "Gallery — Aligator Project", section: "gallery" },
    { keyword: "photo", title: "Gallery — Aligator Project", section: "gallery" },
    { keyword: "image", title: "Gallery — Aligator Project", section: "gallery" },
    { keyword: "spotify", title: "Aligator Project on Spotify", section: "music" },
    { keyword: "youtube", title: "Aligator Project on YouTube", section: "videos" },
    { keyword: "instagram", title: "Aligator Project on Instagram", section: "about" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     عناصر
     ======================================================= */

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearch = document.getElementById("clearSearch");
  const searchSuggestions = document.getElementById("searchSuggestions");

  const navLinks = document.querySelectorAll(".nav-link");

  const sections = document.querySelectorAll(
    ".content-section, .search-result"
  );

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  const moreInfoButton = document.getElementById("moreInfoButton");
  const knowledgePanel = document.querySelector(".knowledge-panel");

  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");

  const musicPlayer = document.getElementById("musicPlayer");
  const closePlayer = document.getElementById("closePlayer");

  const mainPlayButton = document.getElementById("mainPlayButton");
  const previousTrack = document.getElementById("previousTrack");
  const nextTrack = document.getElementById("nextTrack");

  const playerTitle = document.getElementById("playerTitle");
  const currentTimeElement = document.getElementById("currentTime");
  const totalTimeElement = document.getElementById("totalTime");
  const progressValue = document.getElementById("progressValue");

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const galleryItems = Array.from(
    document.querySelectorAll(".gallery-item")
  );
  const artistCollage = document.querySelector(".artist-collage");

  /* =======================================================
     زبان و تم - مدیریت و تشخیص خودکار از مرورگر
     ======================================================= */

  // تشخیص خودکار زبان مرورگر
  function detectBrowserLanguage() {
    try {
      const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
      const navLangs = navigator.languages || [];
      const allLangs = [navLang];
      for (let i = 0; i < navLangs.length; i++) {
        if (navLangs[i]) allLangs.push(navLangs[i].toLowerCase());
      }
      // اول فارسی
      for (let j = 0; j < allLangs.length; j++) {
        const l = allLangs[j];
        if (!l) continue;
        if (l.startsWith("fa")) return "fa";
      }
      // بعد انگلیسی
      for (let k = 0; k < allLangs.length; k++) {
        const ll = allLangs[k];
        if (!ll) continue;
        if (ll.startsWith("en")) return "en";
      }
      // برای بقیه (de, fr, ...) اگر فارسی نیست، انگلیسی
      if (navLang) {
        return navLang.startsWith("fa") ? "fa" : "en";
      }
      return "fa";
    } catch (e) {
      return "fa";
    }
  }

  // تشخیص خودکار تم مرورگر
  function detectBrowserTheme() {
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    } catch (e) {
      return "light";
    }
  }

  let currentLang = (() => {
    try {
      const saved = localStorage.getItem("aligator-lang");
      if (saved === "fa" || saved === "en") return saved;
      const htmlLang = document.documentElement.getAttribute("data-lang");
      if (htmlLang === "fa" || htmlLang === "en") return htmlLang;
      // اگر هیچ‌کدام ذخیره نشده، از مرورگر تشخیص بده
      return detectBrowserLanguage();
    } catch (e) {
      return "fa";
    }
  })();

  function t(key, params = {}) {
    const dict = translations[currentLang] || translations.fa;
    let text = dict[key] !== undefined ? dict[key] : (translations.fa[key] || key);
    Object.keys(params).forEach(p => {
      text = text.replace(`{${p}}`, params[p]);
    });
    return text;
  }

  function toLocalizedDigits(value) {
    const str = String(value);
    if (currentLang === "fa") {
      return str.replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
    }
    return str;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    return toLocalizedDigits(`${minutes}:${String(remaining).padStart(2, "0")}`);
  }

  function formatTrackNumber(num) {
    return toLocalizedDigits(String(num).padStart(2, "0"));
  }

  function formatDay(num) {
    return toLocalizedDigits(String(num));
  }

  // اعمال زبان به کل صفحه
  function applyLanguage(lang) {
    currentLang = lang;
    const isFa = lang === "fa";

    // ذخیره
    try {
      localStorage.setItem("aligator-lang", lang);
    } catch (e) {}

    // html attributes
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isFa ? "rtl" : "ltr");
    // برای دسترسی آسان در CSS
    document.body.setAttribute("dir", isFa ? "rtl" : "ltr");

    // عنوان و توضیحات
    document.title = t("title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("description"));
    }

    // دکمه زبان - نمایش زبان مقصد
    if (langToggle) {
      langToggle.textContent = t("lang_toggle_short");
      langToggle.setAttribute("aria-label", t("lang_toggle"));
    }

    // تمام عناصر با data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      // برای عناصری که خودشان شامل HTML داخلی دارند (مثلاً span داخلی) فقط textContent را تغییر می‌دهیم اگر فرزند متنی ساده باشد
      // اما برای سادگی، textContent را ست می‌کنیم مگر اینکه کلید خاص باشد
      const translation = t(key);
      // اگر عنصر دارای فرزندان با data-i18n جداگانه است، از تغییر مستقیم صرف‌نظر کن (برای جلوگیری از بازنویسی)
      // بررسی می‌کنیم آیا عنصر فقط متن ساده دارد یا شامل فرزند data-i18n است
      const hasNestedI18n = el.querySelector("[data-i18n]");
      if (!hasNestedI18n) {
        el.textContent = translation;
      } else {
        // اگر شامل nested است، فقط اگر خودش متن مستقیم داشته باشد، آن را نگه ندار - ولی برای این پروژه، بیشتر عناصر ساده هستند
        // برای عناصر والد که خودشان کلید دارند و فرزندان هم دارند، فقط اگر key مربوط به خود والد باشد، باز هم textContent را در صورت نیاز تغییر می‌دهیم
        // در این پیاده‌سازی، فرض می‌کنیم والدها متن ساده دارند
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          el.textContent = translation;
        }
      }
    });

    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    // value برای input جستجو
    document.querySelectorAll("[data-i18n-value]").forEach(el => {
      const key = el.getAttribute("data-i18n-value");
      if (!key) return;
      const newVal = t(key);
      // اگر input مقدار فعلی برابر با ترجمه قبلی است یا خالی است، آن را به‌روز کن
      // برای جلوگیری از پاک شدن جستجوی کاربر، فقط اگر مقدار فعلی یکی از ترجمه‌هاست یا خالی است
      const allTranslationsForKey = [translations.fa[key], translations.en[key]].filter(Boolean);
      if (!el.value || allTranslationsForKey.includes(el.value) || el.value.trim() === "") {
        el.value = newVal;
      }
      // همچنین placeholder را ست می‌کنیم برای آینده
      el.setAttribute("placeholder", newVal);
    });

    // alt
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const key = el.getAttribute("data-i18n-alt");
      if (key) el.setAttribute("alt", t(key));
    });

    // caption برای data-caption (گالری)
    document.querySelectorAll("[data-i18n-caption]").forEach(el => {
      const key = el.getAttribute("data-i18n-caption");
      if (key) {
        const trans = t(key);
        el.setAttribute("data-caption", trans);
        // اگر figcaption داخلی دارد، آن هم قبلاً با data-i18n ترجمه شده، ولی برای اطمینان
        const fig = el.querySelector("figcaption");
        if (fig && fig.getAttribute("data-i18n") === key) {
          fig.textContent = trans;
        }
      }
    });

    // content برای meta
    document.querySelectorAll("[data-i18n-content]").forEach(el => {
      const key = el.getAttribute("data-i18n-content");
      if (key) el.setAttribute("content", t(key));
    });

    // برند و کاور پلیر - عناصر خاص
    const brandMark = document.querySelector(".brand-mark");
    if (brandMark) brandMark.textContent = t("brand_mark");

    const playerCover = document.querySelector(".player-cover");
    if (playerCover) playerCover.textContent = t("player_cover");

    // شماره ترک‌ها
    document.querySelectorAll("[data-track-num]").forEach(el => {
      const num = parseInt(el.getAttribute("data-track-num"), 10);
      if (!isNaN(num)) el.textContent = formatTrackNumber(num);
    });

    // روزهای رویداد
    document.querySelectorAll("[data-event-day]").forEach(el => {
      const num = parseInt(el.getAttribute("data-event-day"), 10);
      if (!isNaN(num)) el.textContent = formatDay(num);
    });

    // زمان‌های پلیر - اگر در حال پخش نیست، صفر را به‌روز کن
    if (!isPlaying) {
      if (currentTimeElement) currentTimeElement.textContent = formatTime(0);
      // totalTime بعداً با لود ترک به‌روز می‌شود
    } else {
      // اگر در حال پخش است، زمان فعلی را دوباره فرمت کن
      if (audioElement && !isNaN(audioElement.currentTime)) {
        currentTimeElement.textContent = formatTime(Math.floor(audioElement.currentTime));
      }
    }

    // مدت زمان ترک‌ها را دوباره فرمت کن
    tracks.forEach((track, index) => {
      if (track.seconds) {
        const element = trackElements[index];
        if (element) {
          const durationCell = element.querySelector(".track-duration");
          if (durationCell) {
            durationCell.textContent = formatTime(track.seconds);
          }
        }
      }
    });

    // اگر suggestion باز است، آن را ببند یا دوباره نمایش بده
    searchSuggestions.classList.remove("show");

    // برای لایت‌باکس اگر باز است، کپشن را به‌روز کن
    if (lightbox.classList.contains("open") && galleryItems[currentImageIndex]) {
      const item = galleryItems[currentImageIndex];
      lightboxCaption.textContent = item.getAttribute("data-caption") || "";
    }

    // اگر ویدیو مودال باز است، عنوانش را نگه دار (عناوین ویدیو انگلیسی هستند و نیازی به ترجمه ندارند)

    console.log(`Language switched to: ${lang}`);
  }

  // تغییر زبان با دکمه
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = currentLang === "fa" ? "en" : "fa";
      applyLanguage(nextLang);
      // نمایش پیام
      showToast(nextLang === "fa" ? "زبان به فارسی تغییر کرد" : "Language switched to English");
    });
  }

  /* =======================================================
     داده‌های جستجو - بر اساس زبان
     ======================================================= */

  function getSearchData() {
    return searchDataByLang[currentLang] || searchDataByLang.fa;
  }

  /* =======================================================
     جستجو
     ======================================================= */

  function normalizeSearch(value) {
    return String(value)
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
      .replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  }

  function showSuggestions(query) {
    const normalized = normalizeSearch(query);

    if (!normalized) {
      searchSuggestions.classList.remove("show");
      searchSuggestions.innerHTML = "";
      return;
    }

    const searchData = getSearchData();

    const matches = searchData
      .filter(item => {
        return (
          item.keyword.includes(normalized) ||
          normalizeSearch(item.title).includes(normalized)
        );
      })
      .slice(0, 5);

    if (!matches.length) {
      searchSuggestions.innerHTML = `
        <div class="suggestion">
          <span class="suggestion-icon">⌕</span>
          <span>${escapeHTML(t("search_for", { query: query }))}</span>
        </div>
      `;
      searchSuggestions.classList.add("show");
      return;
    }

    searchSuggestions.innerHTML = matches
      .map(item => {
        return `
          <div
            class="suggestion"
            data-section="${item.section}"
            data-title="${escapeHTML(item.title)}"
          >
            <span class="suggestion-icon">⌕</span>
            <span>${escapeHTML(item.title)}</span>
          </div>
        `;
      })
      .join("");

    searchSuggestions.classList.add("show");
  }

  function performSearch(query) {
    const normalized = normalizeSearch(query);

    if (!normalized) {
      setActiveSection("all");
      return;
    }

    const searchData = getSearchData();

    const match = searchData.find(item => {
      return (
        normalized.includes(item.keyword) ||
        item.keyword.includes(normalized)
      );
    });

    if (match) {
      setActiveSection(match.section);
      scrollToSection(match.section);
      showToast(t("toast_show", { title: match.title }));
    } else {
      setActiveSection("all");
      showToast(t("toast_no_result", { query: query }));
    }

    searchSuggestions.classList.remove("show");
  }

  searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0) {
      clearSearch.classList.add("visible");
    } else {
      clearSearch.classList.remove("visible");
    }
    showSuggestions(searchInput.value);
  });

  searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      performSearch(searchInput.value);
    }
    if (event.key === "Escape") {
      searchSuggestions.classList.remove("show");
    }
  });

  searchButton.addEventListener("click", () => {
    performSearch(searchInput.value);
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.classList.remove("visible");
    searchSuggestions.classList.remove("show");
    searchInput.focus();
    setActiveSection("all");
  });

  searchSuggestions.addEventListener("click", event => {
    const suggestion = event.target.closest(".suggestion");
    if (!suggestion) return;
    const section = suggestion.dataset.section;
    if (!section) return;
    setActiveSection(section);
    scrollToSection(section);
    searchSuggestions.classList.remove("show");
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".search-wrapper")) {
      searchSuggestions.classList.remove("show");
    }
  });

  /* =======================================================
     فیلترهای ناوبری
     ======================================================= */

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const section = link.dataset.section;
      setActiveSection(section);
      if (section === "all") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        requestAnimationFrame(() => scrollToSection(section));
      }
    });
  });

  function setActiveSection(section) {
    knowledgePanel.classList.toggle(
      "mobile-hidden",
      section !== "all" && section !== "about"
    );

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.section === section
      );
    });

    if (section === "all") {
      sections.forEach(element => {
        element.classList.remove("hidden");
      });
      return;
    }

    sections.forEach(element => {
      const content = element.dataset.content;
      if (content === section) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  }

  function scrollToSection(section) {
    const element = document.getElementById(section);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* =======================================================
     منوی موبایل
     ======================================================= */

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  mobileMenuClose.addEventListener("click", closeMobileMenu);

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href") || "";
      const section = href.replace("#", "");
      if (["about", "music", "videos", "events", "gallery"].includes(section)) {
        event.preventDefault();
        setActiveSection(section);
        closeMobileMenu();
        requestAnimationFrame(() => scrollToSection(section));
      } else {
        closeMobileMenu();
      }
    });
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* =======================================================
     تغییر تم (روشن / تیره) + تشخیص خودکار + ذخیره در localStorage
     ======================================================= */

  // اگر کاربر قبلاً تم را دستی انتخاب نکرده، تغییرات تم سیستم را دنبال کن
  try {
    const savedTheme = localStorage.getItem("aligator-theme");
    if (!savedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = (e) => {
        // فقط وقتی کاربر دستی انتخاب نکرده، خودکار تغییر بده
        try {
          if (!localStorage.getItem("aligator-theme")) {
            const newTheme = e.matches ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            console.log(`Auto theme switched to: ${newTheme} (browser preference)`);
          }
        } catch (err) {}
      };
      // پشتیبانی از مرورگرهای جدید و قدیم
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleThemeChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleThemeChange);
      }
    }
  } catch (e) {}

  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("aligator-theme", next);
    } catch (e) {}
  });

  /* =======================================================
     دکمهٔ اطلاعات بیشتر
     ======================================================= */

  moreInfoButton.addEventListener("click", () => {
    setActiveSection("about");
    scrollToSection("about");
  });

  /* =======================================================
     پخش‌کنندهٔ موسیقی
     ======================================================= */

  const audioElement = document.getElementById("audioElement");
  audioElement.loop = false;

  const tracks = [
    { title: "Bang That Drum", src: "audio/bang-that-drum.mp3" },
    { title: "Beshkan (Snap Your Dirty Fingaz)", src: "audio/beshkan.mp3" },
    { title: "Drop The Bass", src: "audio/drop-the-bass.mp3" },
    { title: "Follow Me 2020", src: "audio/follow-me-2020.mp3" }
  ];

  const trackElements = Array.from(document.querySelectorAll(".track"));

  let currentTrackIndex = 0;
  let isPlaying = false;

  tracks.forEach((track, index) => {
    const probe = new Audio();
    probe.preload = "metadata";
    probe.src = track.src;
    probe.addEventListener("loadedmetadata", () => {
      track.seconds = Math.round(probe.duration);
      const element = trackElements[index];
      if (element) {
        const durationCell = element.querySelector(".track-duration");
        if (durationCell) {
          durationCell.textContent = formatTime(track.seconds);
        }
      }
      if (index === currentTrackIndex && !Number.isNaN(probe.duration)) {
        totalTimeElement.textContent = formatTime(track.seconds);
      }
    });
  });

  function markPlayingRow() {
    trackElements.forEach((item, index) => {
      item.classList.toggle("playing", index === currentTrackIndex && isPlaying);
      item.classList.toggle(
        "is-playing-row",
        index === currentTrackIndex && isPlaying
      );
    });
  }

  function loadTrack(index) {
    if (index < 0) index = tracks.length - 1;
    if (index >= tracks.length) index = 0;
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    audioElement.src = track.src;
    playerTitle.textContent = track.title;
    currentTimeElement.textContent = formatTime(0);
    totalTimeElement.textContent =
      track.seconds ? formatTime(track.seconds) : formatTime(0);
    progressValue.style.width = "0%";
  }

  function openPlayer(index) {
    loadTrack(index);
    musicPlayer.classList.add("visible");
    startPlaying();
  }

  function startPlaying() {
    if (!audioElement.src) {
      loadTrack(currentTrackIndex);
    }
    const attempt = audioElement.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        showToast(t("toast_play_click"));
      });
    }
  }

  function pausePlaying() {
    audioElement.pause();
  }

  audioElement.addEventListener("play", () => {
    isPlaying = true;
    mainPlayButton.classList.add("is-playing");
    markPlayingRow();
  });

  audioElement.addEventListener("pause", () => {
    isPlaying = false;
    mainPlayButton.classList.remove("is-playing");
    markPlayingRow();
  });

  audioElement.addEventListener("loadedmetadata", () => {
    const seconds = Math.round(audioElement.duration);
    if (!Number.isNaN(seconds)) {
      tracks[currentTrackIndex].seconds = seconds;
      totalTimeElement.textContent = formatTime(seconds);
    }
  });

  audioElement.addEventListener("timeupdate", () => {
    const total = audioElement.duration;
    if (!total || Number.isNaN(total)) return;
    progressValue.style.width =
      `${Math.min((audioElement.currentTime / total) * 100, 100)}%`;
    currentTimeElement.textContent =
      formatTime(Math.floor(audioElement.currentTime));
  });

  audioElement.addEventListener("ended", () => {
    isPlaying = false;
    mainPlayButton.classList.remove("is-playing");
    markPlayingRow();
    progressValue.style.width = "100%";
    currentTimeElement.textContent = totalTimeElement.textContent;
  });

  audioElement.addEventListener("error", () => {
    showToast(t("toast_audio_error"));
  });

  mainPlayButton.addEventListener("click", () => {
    if (isPlaying) {
      pausePlaying();
    } else {
      musicPlayer.classList.add("visible");
      startPlaying();
    }
  });

  previousTrack.addEventListener("click", () => {
    openPlayer(currentTrackIndex - 1);
  });

  nextTrack.addEventListener("click", () => {
    openPlayer(currentTrackIndex + 1);
  });

  closePlayer.addEventListener("click", () => {
    pausePlaying();
    audioElement.currentTime = 0;
    musicPlayer.classList.remove("visible");
  });

  const progressBar = document.querySelector(".music-player .progress-bar");
  if (progressBar) {
    progressBar.addEventListener("click", event => {
      const total = audioElement.duration;
      if (!total || Number.isNaN(total)) return;
      const rect = progressBar.getBoundingClientRect();
      let ratio = (event.clientX - rect.left) / rect.width;
      if (document.dir === "rtl" || document.documentElement.dir === "rtl") {
        ratio = 1 - ratio;
      }
      audioElement.currentTime =
        Math.max(0, Math.min(1, ratio)) * total;
    });
  }

  trackElements.forEach((trackElement, index) => {
    const playButton = trackElement.querySelector(".play-track");
    playButton.addEventListener("click", () => {
      if (index === currentTrackIndex && isPlaying) {
        pausePlaying();
        return;
      }
      if (index === currentTrackIndex && audioElement.src) {
        musicPlayer.classList.add("visible");
        startPlaying();
        return;
      }
      openPlayer(index);
    });
  });

  loadTrack(0);

  /* =======================================================
     گالری و لایت‌باکس
     ======================================================= */

  let currentImageIndex = 0;

  function openLightbox(index) {
    currentImageIndex = (index + galleryItems.length) % galleryItems.length;
    updateLightbox();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function updateLightbox() {
    const item = galleryItems[currentImageIndex];
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";
    lightboxCaption.textContent = item.getAttribute("data-caption") || item.dataset.caption || "";
  }

  function closeLightbox() {
    lightbox.classList.remove("open", "standalone");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  if (artistCollage) {
    let pointerStartX = 0;
    let lastPointerX = 0;
    let collageWasDragged = false;
    let activePointerId = null;

    artistCollage.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse") return;
      activePointerId = event.pointerId;
      pointerStartX = event.clientX;
      lastPointerX = event.clientX;
      collageWasDragged = false;
      artistCollage.setPointerCapture(event.pointerId);
      artistCollage.classList.add("is-dragging");
    });

    artistCollage.addEventListener("pointermove", event => {
      if (event.pointerType === "mouse") return;
      if (activePointerId !== event.pointerId) return;
      const distance = event.clientX - pointerStartX;
      if (Math.abs(distance) > 8) {
        collageWasDragged = true;
        artistCollage.scrollLeft += lastPointerX - event.clientX;
        lastPointerX = event.clientX;
        event.preventDefault();
      }
    }, { passive: false });

    function endCollageDrag(event) {
      if (event.pointerType === "mouse") return;
      if (activePointerId !== event.pointerId) return;
      activePointerId = null;
      artistCollage.classList.remove("is-dragging");
      window.setTimeout(() => { collageWasDragged = false; }, 80);
    }

    artistCollage.addEventListener("pointerup", endCollageDrag);
    artistCollage.addEventListener("pointercancel", endCollageDrag);

    let touchLastX = 0;
    artistCollage.addEventListener("touchstart", event => {
      if (event.touches.length !== 1) return;
      touchLastX = event.touches[0].clientX;
      collageWasDragged = false;
    }, { passive: true });

    artistCollage.addEventListener("touchmove", event => {
      if (event.touches.length !== 1) return;
      const currentX = event.touches[0].clientX;
      const delta = touchLastX - currentX;
      if (Math.abs(delta) > 1) {
        artistCollage.scrollLeft += delta;
        touchLastX = currentX;
        collageWasDragged = true;
        event.preventDefault();
      }
    }, { passive: false });

    artistCollage.addEventListener("touchend", () => {
      window.setTimeout(() => { collageWasDragged = false; }, 120);
    }, { passive: true });

    let mouseDragging = false;
    let mouseStartX = 0;
    let mouseStartScroll = 0;

    artistCollage.addEventListener("mousedown", event => {
      if (event.button !== 0) return;
      mouseDragging = true;
      mouseStartX = event.clientX;
      mouseStartScroll = artistCollage.scrollLeft;
      artistCollage.classList.add("is-dragging");
      event.preventDefault();
    });

    artistCollage.addEventListener("mousemove", event => {
      if (!mouseDragging) return;
      const distance = event.clientX - mouseStartX;
      if (Math.abs(distance) > 5) collageWasDragged = true;
      artistCollage.scrollLeft = mouseStartScroll - distance;
      event.preventDefault();
    });

    const stopMouseDrag = () => {
      if (!mouseDragging) return;
      mouseDragging = false;
      artistCollage.classList.remove("is-dragging");
      window.setTimeout(() => { collageWasDragged = false; }, 120);
    };

    artistCollage.addEventListener("mouseup", stopMouseDrag);
    artistCollage.addEventListener("mouseleave", stopMouseDrag);

    artistCollage.querySelectorAll("img").forEach(img => {
      img.addEventListener("click", event => {
        if (collageWasDragged) {
          event.preventDefault();
          return;
        }
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "";
        lightboxCaption.textContent = img.alt || "";
        lightbox.classList.add("standalone");
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => {
    openLightbox(currentImageIndex - 1);
  });
  lightboxNext.addEventListener("click", () => {
    openLightbox(currentImageIndex + 1);
  });
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") openLightbox(currentImageIndex - 1);
    if (event.key === "ArrowLeft") openLightbox(currentImageIndex + 1);
  });

  /* =======================================================
     دکمه‌های ویدیو
     ======================================================= */

  const videoModal = document.getElementById("videoModal");
  const videoModalPlayer = document.getElementById("videoModalPlayer");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoModalClose = document.getElementById("videoModalClose");

  function closeVideoModal() {
    videoModalPlayer.pause();
    videoModalPlayer.removeAttribute("src");
    videoModalPlayer.load();
    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".video-card").forEach(card => {
    const source = card.dataset.video;
    const title = card.dataset.title || "";
    const preview = card.querySelector(".video-preview");
    const durationLabel = card.querySelector(".video-duration");

    if (preview && durationLabel) {
      preview.addEventListener("loadedmetadata", () => {
        const seconds = Math.round(preview.duration);
        if (!Number.isNaN(seconds)) {
          durationLabel.textContent = formatTime(seconds);
        }
      });
    }

    const openHandler = () => {
      if (!source) return;
      if (isPlaying) pausePlaying();
      videoModalPlayer.src = source;
      videoModalTitle.textContent = title;
      videoModal.classList.add("open");
      videoModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      const attempt = videoModalPlayer.play();
      if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
    };

    card.querySelector(".video-play").addEventListener("click", openHandler);
    const thumbnail = card.querySelector(".video-thumbnail");
    if (thumbnail) {
      thumbnail.addEventListener("click", event => {
        if (event.target.closest(".video-play")) return;
        openHandler();
      });
    }
  });

  videoModalClose.addEventListener("click", closeVideoModal);
  videoModal.addEventListener("click", event => {
    if (event.target === videoModal) closeVideoModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && videoModal.classList.contains("open")) {
      closeVideoModal();
    }
  });

  /* =======================================================
     دکمه‌های بلیت
     ======================================================= */

  document.querySelectorAll(".event-button").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      showToast(t("toast_ticket_soon"));
    });
  });

  /* =======================================================
     لینک‌های شبکه‌های اجتماعی
     ======================================================= */

  document.querySelectorAll(".social-links a").forEach(link => {
    link.addEventListener("click", event => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        const name = link.getAttribute("aria-label") || link.textContent.trim();
        showToast(t("toast_link_soon", { name: name }));
      }
    });
  });

  /* =======================================================
     دکمهٔ «بیشتر» هر آهنگ
     ======================================================= */

  document.querySelectorAll(".track-more").forEach(button => {
    button.addEventListener("click", () => {
      showToast(t("toast_track_options"));
    });
  });

  /* =======================================================
     توابع کمکی
     ======================================================= */

  function showToast(message) {
    toastText.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =======================================================
     میان‌بر صفحه‌کلید
     ======================================================= */

  document.addEventListener("keydown", event => {
    if (
      event.key === "/" &&
      document.activeElement !== searchInput &&
      !lightbox.classList.contains("open")
    ) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  /* =======================================================
     وضعیت اولیه - اعمال زبان ذخیره شده
     ======================================================= */

  // اعمال اولیه زبان
  applyLanguage(currentLang);

  if (searchInput.value.length > 0) {
    clearSearch.classList.add("visible");
  }

  console.log(
    "%cAligator Project / علیگیتور پروجکت",
    "font-size: 20px; font-weight: bold;"
  );
  console.log(
    currentLang === "fa" ? "وب‌سایت با موفقیت راه‌اندازی شد." : "Website launched successfully."
  );

});
