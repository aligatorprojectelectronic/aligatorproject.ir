/* =========================================================
   آلیگیتور پروجکت
   جاوااسکریپت تعاملی — فارسی و RTL
   ========================================================= */

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


  /* =======================================================
     داده‌های جستجو
     ======================================================= */

  const searchData = [
    {
      keyword: "آلیگیتور",
      title: "آلیگیتور پروجکت — دیجی و تهیه‌کننده",
      section: "about"
    },
    {
      keyword: "درباره",
      title: "دربارهٔ آلیگیتور پروجکت",
      section: "about"
    },
    {
      keyword: "دیجی",
      title: "آلیگیتور پروجکت — دیجی و تهیه‌کننده",
      section: "about"
    },
    {
      keyword: "موسیقی",
      title: "موسیقی — آلیگیتور پروجکت",
      section: "music"
    },
    {
      keyword: "آهنگ",
      title: "موسیقی — آلیگیتور پروجکت",
      section: "music"
    },
    {
      keyword: "ترک",
      title: "موسیقی — آلیگیتور پروجکت",
      section: "music"
    },
    {
      keyword: "ویدیو",
      title: "ویدیوها — آلیگیتور پروجکت",
      section: "videos"
    },
    {
      keyword: "رویداد",
      title: "رویدادهای پیش‌رو — آلیگیتور پروجکت",
      section: "events"
    },
    {
      keyword: "کنسرت",
      title: "رویدادهای پیش‌رو — آلیگیتور پروجکت",
      section: "events"
    },
    {
      keyword: "اجرا",
      title: "رویدادهای پیش‌رو — آلیگیتور پروجکت",
      section: "events"
    },
    {
      keyword: "گالری",
      title: "گالری — آلیگیتور پروجکت",
      section: "gallery"
    },
    {
      keyword: "عکس",
      title: "گالری — آلیگیتور پروجکت",
      section: "gallery"
    },
    {
      keyword: "تصویر",
      title: "گالری — آلیگیتور پروجکت",
      section: "gallery"
    },
    {
      keyword: "اسپاتیفای",
      title: "آلیگیتور پروجکت در اسپاتیفای",
      section: "music"
    },
    {
      keyword: "یوتیوب",
      title: "آلیگیتور پروجکت در یوتیوب",
      section: "videos"
    },
    {
      keyword: "اینستاگرام",
      title: "آلیگیتور پروجکت در اینستاگرام",
      section: "about"
    }
  ];


  /* =======================================================
     جستجو
     ======================================================= */

  function normalizeSearch(value) {
    return String(value)
      .replace(/ي/g, "ی")          // ی عربی → ی فارسی
      .replace(/ك/g, "ک")          // ک عربی → ک فارسی
      .replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d))) // ارقام عربی → لاتین
      .replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))) // ارقام فارسی → لاتین
      .replace(/[\u064B-\u065F\u0670]/g, "")                  // حذف اعراب
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
          <span>جستجو برای «${escapeHTML(query)}»</span>
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

    const match = searchData.find(item => {
      return (
        normalized.includes(item.keyword) ||
        item.keyword.includes(normalized)
      );
    });

    if (match) {

      setActiveSection(match.section);

      scrollToSection(match.section);

      showToast(`نمایش «${match.title}»`);

    } else {

      setActiveSection("all");

      showToast(
        `نتیجه‌ای برای «${query}» یافت نشد.`
      );
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

    if (!suggestion) {
      return;
    }

    const section = suggestion.dataset.section;

    if (!section) {
      return;
    }

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

      // ابتدا فیلتر را اعمال می‌کنیم تا سکشن هدف از حالت مخفی خارج شود،
      // سپس در موبایل و دسکتاپ به همان سکشن اسکرول می‌کنیم.
      setActiveSection(section);

      if (section === "all") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // یک فریم صبر می‌کنیم تا مرورگر چیدمان جدید را محاسبه کند.
        requestAnimationFrame(() => scrollToSection(section));
      }

    });

  });


  function setActiveSection(section) {

    // پنل معرفی در موبایل فقط در صفحهٔ اصلی و بخش «درباره» نمایش داده شود.
    // در دسکتاپ این کلاس اثری ندارد و پنل همچنان در ستون کناری باقی می‌ماند.
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

    if (!element) {
      return;
    }

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
      const section = link.getAttribute("href").replace("#", "");

      // لینک‌های منوی موبایل هم باید همان رفتار فیلترهای بالای صفحه را داشته باشند.
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
     تغییر تم (روشن / تیره) + ذخیره در localStorage
     ======================================================= */

  themeToggle.addEventListener("click", () => {

    const root = document.documentElement;

    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);

    try {
      localStorage.setItem("aligator-theme", next);
    } catch (e) {
      /* localStorage در دسترس نیست */
    }

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

  const tracks = [
    {
      title: "پس از نیمه‌شب",
      duration: "۰۴:۳۸",
      seconds: 278
    },
    {
      title: "آب تاریک",
      duration: "۰۵:۱۲",
      seconds: 312
    },
    {
      title: "حرکت عمیق",
      duration: "۰۶:۰۲",
      seconds: 362
    },
    {
      title: "رویاهای نئونی",
      duration: "۰۴:۵۱",
      seconds: 291
    }
  ];


  let currentTrackIndex = 0;

  let isPlaying = false;

  let currentSeconds = 0;

  let progressInterval = null;


  function openPlayer(index) {

    if (index < 0) {
      index = tracks.length - 1;
    }

    if (index >= tracks.length) {
      index = 0;
    }

    currentTrackIndex = index;

    currentSeconds = 0;

    const track = tracks[currentTrackIndex];

    playerTitle.textContent = track.title;

    totalTimeElement.textContent = track.duration;

    currentTimeElement.textContent = toFa("0:00");

    progressValue.style.width = "0%";

    musicPlayer.classList.add("visible");

    startPlaying();

  }


  function startPlaying() {

    isPlaying = true;

    mainPlayButton.textContent = "Ⅱ";

    clearInterval(progressInterval);

    progressInterval = setInterval(() => {

      currentSeconds++;

      const track = tracks[currentTrackIndex];

      const percentage =
        (currentSeconds / track.seconds) * 100;

      progressValue.style.width =
        `${Math.min(percentage, 100)}%`;

      currentTimeElement.textContent =
        formatTime(currentSeconds);

      if (currentSeconds >= track.seconds) {
        nextTrack.click();
      }

    }, 1000);

  }


  function pausePlaying() {

    isPlaying = false;

    mainPlayButton.textContent = "▶";

    clearInterval(progressInterval);

  }


  mainPlayButton.addEventListener("click", () => {

    if (isPlaying) {
      pausePlaying();
    } else {
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

    musicPlayer.classList.remove("visible");

  });


  document.querySelectorAll(".track").forEach((trackElement, index) => {

    const playButton =
      trackElement.querySelector(".play-track");

    playButton.addEventListener("click", () => {

      document.querySelectorAll(".track").forEach(item => {
        item.classList.remove("playing");
      });

      trackElement.classList.add("playing");

      openPlayer(index);

    });

  });


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

    lightboxCaption.textContent = item.dataset.caption || "";

  }


  function closeLightbox() {

    lightbox.classList.remove("open");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

  }


  galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => openLightbox(index));

  });


  lightboxClose.addEventListener("click", closeLightbox);


  // در RTL: قبلی → سمت راست، بعدی → سمت چپ
  lightboxPrev.addEventListener("click", () => {
    openLightbox(currentImageIndex - 1);
  });


  lightboxNext.addEventListener("click", () => {
    openLightbox(currentImageIndex + 1);
  });


  lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    // در RTL: جهت «بعدی» به چپ و «قبلی» به راست است
    if (event.key === "ArrowRight") {
      openLightbox(currentImageIndex - 1);
    }

    if (event.key === "ArrowLeft") {
      openLightbox(currentImageIndex + 1);
    }

  });


  /* =======================================================
     دکمه‌های ویدیو
     ======================================================= */

  document.querySelectorAll(".video-play").forEach(button => {

    button.addEventListener("click", () => {

      showToast("پخش‌کنندهٔ ویدیو به‌زودی اینجا اضافه می‌شود.");

    });

  });


  /* =======================================================
     دکمه‌های بلیت
     ======================================================= */

  document.querySelectorAll(".event-button").forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();

      showToast("لینک خرید بلیت به‌زودی اضافه می‌شود.");

    });

  });


  /* =======================================================
     لینک‌های شبکه‌های اجتماعی
     ======================================================= */

  document.querySelectorAll(".social-links a").forEach(link => {

    link.addEventListener("click", event => {

      if (link.getAttribute("href") === "#") {

        event.preventDefault();

        const name =
          link.getAttribute("aria-label") || link.textContent.trim();

        showToast(`لینک ${name} به‌زودی اضافه می‌شود.`);

      }

    });

  });


  /* =======================================================
     دکمهٔ «بیشتر» هر آهنگ
     ======================================================= */

  document.querySelectorAll(".track-more").forEach(button => {

    button.addEventListener("click", () => {

      showToast("گزینه‌های این آهنگ به‌زودی اضافه می‌شود.");

    });

  });


  /* =======================================================
     توابع کمکی
     ======================================================= */

  function toFa(value) {

    return String(value).replace(
      /\d/g,
      d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]
    );

  }


  function formatTime(seconds) {

    const minutes =
      Math.floor(seconds / 60);

    const remaining =
      seconds % 60;

    return toFa(`${minutes}:${String(remaining).padStart(2, "0")}`);

  }


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
     وضعیت اولیه
     ======================================================= */

  if (searchInput.value.length > 0) {
    clearSearch.classList.add("visible");
  }


  console.log(
    "%cآلیگیتور پروجکت",
    "font-size: 20px; font-weight: bold;"
  );

  console.log(
    "وب‌سایت با موفقیت راه‌اندازی شد."
  );

});
