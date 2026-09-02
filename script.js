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
  const artistCollage = document.querySelector(".artist-collage");


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

  const audioElement = document.getElementById("audioElement");

  const tracks = [
    { title: "Bang That Drum", src: "audio/bang-that-drum.mp3" },
    { title: "بشکن (Snap Your Dirty Fingaz)", src: "audio/beshkan.mp3" },
    { title: "Drop The Bass", src: "audio/drop-the-bass.mp3" },
    { title: "Follow Me 2020", src: "audio/follow-me-2020.mp3" }
  ];

  const trackElements = Array.from(document.querySelectorAll(".track"));

  let currentTrackIndex = 0;
  let isPlaying = false;


  // نمایش مدت‌زمان واقعی هر آهنگ روی لیست
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

    if (index < 0) {
      index = tracks.length - 1;
    }

    if (index >= tracks.length) {
      index = 0;
    }

    currentTrackIndex = index;

    const track = tracks[currentTrackIndex];

    audioElement.src = track.src;

    playerTitle.textContent = track.title;

    currentTimeElement.textContent = toFa("0:00");

    totalTimeElement.textContent =
      track.seconds ? formatTime(track.seconds) : toFa("0:00");

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
        showToast("برای پخش، یک‌بار روی صفحه کلیک کنید.");
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

    if (!total || Number.isNaN(total)) {
      return;
    }

    progressValue.style.width =
      `${Math.min((audioElement.currentTime / total) * 100, 100)}%`;

    currentTimeElement.textContent =
      formatTime(Math.floor(audioElement.currentTime));

  });


  audioElement.addEventListener("ended", () => {

    openPlayer(currentTrackIndex + 1);

  });


  audioElement.addEventListener("error", () => {

    showToast("پخش این فایل صوتی ممکن نشد.");

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


  // کلیک روی نوار پیشرفت برای جابه‌جایی در آهنگ
  const progressBar = document.querySelector(".music-player .progress-bar");

  if (progressBar) {

    progressBar.addEventListener("click", event => {

      const total = audioElement.duration;

      if (!total || Number.isNaN(total)) {
        return;
      }

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

    lightboxCaption.textContent = item.dataset.caption || "";

  }


  function closeLightbox() {

    lightbox.classList.remove("open", "standalone");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

  }


  galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => openLightbox(index));

  });


  // تصاویر کارت معرفی: کشیدن افقی + زوم با کلیک
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
        // اسکرول افقی دستی؛ روی موبایل و دسکتاپ هر دو کار می‌کند.
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
      // اجازه می‌دهیم کلیکِ واقعی زوم کند، اما کلیکِ بعد از درگ نه.
      window.setTimeout(() => { collageWasDragged = false; }, 80);
    }

    artistCollage.addEventListener("pointerup", endCollageDrag);
    artistCollage.addEventListener("pointercancel", endCollageDrag);

    // پشتیبانی مستقیم از لمس موبایل برای سوایپ افقی تصاویر
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

    // درگ با کلیک و حرکت ماوس روی خود تصاویر
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

    // مدت‌زمان واقعی ویدیو
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

      if (!source) {
        return;
      }

      // توقف موسیقی هنگام پخش ویدیو
      if (isPlaying) {
        pausePlaying();
      }

      videoModalPlayer.src = source;
      videoModalTitle.textContent = title;

      videoModal.classList.add("open");
      videoModal.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";

      const attempt = videoModalPlayer.play();

      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => {});
      }

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

    if (event.target === videoModal) {
      closeVideoModal();
    }

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
