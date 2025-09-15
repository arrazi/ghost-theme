// BBC Indonesia Inspired Ghost Theme JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle (overlay ala BBC)
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileOverlay = document.querySelector(".mobile-overlay");

  if (mobileMenuToggle && mobileOverlay) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileOverlay.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });

    // close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        mobileOverlay.classList.contains("active") &&
        !mobileOverlay.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mobileOverlay.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });

    // close with ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileOverlay.classList.contains("active")) {
        mobileOverlay.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ==============================
  // Search toggle functionality
  // ==============================
  const searchToggle = document.querySelector(".search-toggle");
  if (searchToggle) {
    searchToggle.addEventListener("click", function () {
      console.log("Search clicked");
      // tambahkan fungsi search overlay di sini
    });
  }

  // ==============================
  // Smooth scroll for in-article anchor links
  // ==============================
  const anchorLinks = document.querySelectorAll('.post-content a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ==============================
  // Image lazy loading
  // ==============================
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    images.forEach(function (img) {
      imageObserver.observe(img);
    });
  }

  // ==============================
  // Newsletter form submission
  // ==============================
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        console.log("Newsletter subscription:", email);
        const button = this.querySelector("button");
        const originalText = button.textContent;
        button.textContent = "Berhasil!";
        button.style.background = "#28a745";
        setTimeout(function () {
          button.textContent = originalText;
          button.style.background = "";
        }, 3000);
      }
    });
  }

  // ==============================
  // Enhanced article hover effects
  // ==============================
  const articles = document.querySelectorAll(
    ".news-article, .breaking-article, .related-article"
  );
  articles.forEach(function (article) {
    article.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
    });
    article.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // ==============================
  // Back to top button
  // ==============================
  function createBackToTopButton() {
    const button = document.createElement("button");
    button.className = "back-to-top";
    button.innerHTML = "↑";
    button.setAttribute("aria-label", "Kembali ke atas");
    button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            background: var(--color-primary);
            color: white;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(button);
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        button.style.opacity = "1";
        button.style.transform = "scale(1)";
      } else {
        button.style.opacity = "0";
        button.style.transform = "scale(0)";
      }
    });
  }
  createBackToTopButton();

  // ==============================
  // Table of contents
  // ==============================
  function createTableOfContents() {
    const content = document.querySelector(".post-content");
    if (!content) return;
    const headings = content.querySelectorAll("h2, h3");
    if (headings.length < 3) return;

    const toc = document.createElement("div");
    toc.className = "table-of-contents";
    toc.innerHTML = "<h4>Daftar Isi</h4>";
    const list = document.createElement("ul");
    headings.forEach(function (heading, index) {
      const id = "heading-" + index;
      heading.id = id;
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#" + id;
      link.textContent = heading.textContent;
      link.className = heading.tagName.toLowerCase();
      listItem.appendChild(link);
      list.appendChild(listItem);
    });
    toc.appendChild(list);
    const firstParagraph = content.querySelector("p");
    if (firstParagraph) {
      firstParagraph.parentNode.insertBefore(toc, firstParagraph.nextSibling);
    }
    toc.style.cssText = `
            background: var(--color-accent);
            padding: 2rem;
            border-radius: 0.8rem;
            margin: 3rem 0;
            border-left: 4px solid var(--color-primary);
        `;
  }
  createTableOfContents();

  // ==============================
  // Typography improvements
  // ==============================
  function improveTypography() {
    const textNodes = document.querySelectorAll(
      ".post-content p, .post-content blockquote"
    );
    textNodes.forEach(function (node) {
      if (node.textContent) {
        node.innerHTML = node.innerHTML.replace(/--/g, "—");
      }
    });
  }
  improveTypography();
});
