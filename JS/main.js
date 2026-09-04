const yearEl = document.getElementById("year");
const mobileMenu = document.getElementById("mobileMenu");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");
const ctaBtn = document.getElementById("ctaBtn");
const heading = document.getElementById("heroHeading");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const featureGrid = document.getElementById("featureGrid");

const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");

const services = [
  {
    id: 1,
    title: "Classic Haircut",
    description: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/Images/feature-1.jpg",
    alt: "Classic haircut",
    price: 25,
    popular: true,
    details: [
      "Consultation with your barber before the cut begins.",
      "Hair sectioning and shape-up based on your preferred style.",
      "Professional clippers, trimmers, and shears used for precision.",
      "Neckline cleanup and finishing touches included.",
      "Light styling product applied for a clean final look.",
    ],
  },
  {
    id: 2,
    title: "Beard Trim",
    description: "Shape and line-up your beard for a clean, sharp finish.",
    image: "assets/Images/feature-2.jpg",
    alt: "Beard trim",
    price: 15,
    popular: false,
    details: [
      "Beard assessment and shaping based on face structure.",
      "Line-up around cheeks, jawline, and neckline.",
      "Trimmers and detail tools used for crisp edges.",
      "Conditioning beard product may be applied for softness.",
      "Final symmetry check for a polished finish.",
    ],
  },
  {
    id: 3,
    title: "Straight Razor Shave",
    description: "Hot towel treatment with a smooth traditional shave.",
    image: "assets/Images/feature-3.jpg",
    alt: "Straight razor shave",
    price: 30,
    popular: true,
    details: [
      "Hot towel prep to soften facial hair and open pores.",
      "Premium shaving cream or lather applied to protect the skin.",
      "Straight razor shave performed with careful detailing.",
      "Second hot towel may be used for comfort and cleanup.",
      "Aftershave or soothing skin product applied after service.",
    ],
  },
  {
    id: 4,
    title: "Fade & Style",
    description: "A clean fade with finishing detail for a sharp, modern look.",
    image: "assets/Images/feature-4.jpeg",
    alt: "Fade haircut",
    price: 35,
    popular: false,
    details: [
      "Style consultation before clipper work begins.",
      "Fade blended to your preferred level and finish.",
      "Detailing around temples, neckline, and beard area if needed.",
      "Scissors and clipper-over-comb may be used for texture.",
      "Styling product added to complete the final look.",
    ],
  },
  {
    id: 5,
    title: "Kids Cut",
    description: "Clean, comfortable haircut service for younger clients.",
    image: "assets/Images/kids cut.jpg",
    alt: "Kids haircut",
    price: 20,
    popular: false,
    details: [
      "Simple consultation with child and parent if needed.",
      "Age-appropriate haircut with comfort in mind.",
      "Careful clipper and scissor work for a clean finish.",
      "Light cleanup around the neckline and ears.",
      "Styled neatly before leaving the chair.",
    ],
  },
  {
    id: 6,
    title: "Head Shave",
    description: "Smooth head shave with classic barbershop treatment.",
    image: "assets/Images/head shave.jpg",
    alt: "Head shave",
    price: 28,
    popular: true,
    details: [
      "Scalp prep with warm towel treatment.",
      "Protective shave product applied before razor work.",
      "Close shave performed for a smooth finish.",
      "Scalp cleaned and checked for even consistency.",
      "Moisturizing scalp product applied after the shave.",
    ],
  },
];

const navLinks = [
  { label: "home", href: "#hero" },
  { label: "services", href: "#features" },
  { label: "book", href: "#cta" },
  { label: "contact", href: "#footer" },
];

const closeServiceModal = () => {
  if (!serviceModal) return;
  serviceModal.classList.remove("is-open");
  serviceModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const openServiceModal = (serviceId) => {
  if (!serviceModal || !serviceModalTitle || !serviceModalPrice || !serviceModalList) {
    return;
  }

  const selectedService = services.find((service) => service.id === Number(serviceId));

  if (!selectedService) return;

  serviceModalTitle.textContent = selectedService.title;
  serviceModalPrice.textContent = `$${selectedService.price}`;
  serviceModalList.innerHTML = selectedService.details.map((detail) => `<li>${detail}</li>`).join("");

  serviceModal.classList.add("is-open");
  serviceModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const renderNavigation = () => {
  try {
    if (nav) {
      const navHTML = navLinks
        .map((link) => `<a href="${link.href}" class="nav-link">${link.label}</a>`)
        .join("");
      nav.innerHTML = navHTML;
    }

    if (mobileMenu) {
      const mobileHTML = navLinks
        .map((link) => `<a href="${link.href}" class="mobile-link">${link.label}</a>`)
        .join("");
      mobileMenu.innerHTML = mobileHTML;
    }
  } catch (error) {
    console.log(error);
  }
};

renderNavigation();

const handleHeaderOnScroll = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 10);
};

const renderFeatures = () => {
  if (!featureGrid) return;

  const cardsHTML = services
    .map((service) => {
      const badgeHTML = service.popular
        ? '<p class="service-badge">Popular Choice</p>'
        : '<p class="service-badge alt-badge">Barber Favorite</p>';

      return `
        <article class="feature-card">
          <img src="${service.image}" alt="${service.alt}" class="feature-img" />
          <h3 class="feature-title">${service.title}</h3>
          <p class="feature-text">${service.description}</p>
          ${badgeHTML}
          <p class="service-price">$${service.price}</p>
          <div class="service-actions">
            <button class="service-details-btn" type="button" data-service-id="${service.id}">View Details</button>
          </div>
        </article>
      `;
    })
    .join("");

  featureGrid.innerHTML = cardsHTML;
};

renderFeatures();

const setCurrentYear = () => {
  if (!yearEl) return;
  const now = new Date();
  yearEl.textContent = now.getFullYear();
};

setCurrentYear();

let isMenuOpen = false;

const toggleMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.toggle("is-open");
  isMenuOpen = !isMenuOpen;
};

const closedMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};

const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};

if (menuBtn) {
  menuBtn.addEventListener("click", toggleMobileMenu);
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closedMobileMenu();
    }
  });
}

if (featureGrid) {
  featureGrid.addEventListener("click", (event) => {
    const clickedButton = event.target.closest(".service-details-btn");
    if (!clickedButton) return;

    const serviceId = clickedButton.dataset.serviceId;
    openServiceModal(serviceId);
  });
}

if (serviceModalClose) {
  serviceModalClose.addEventListener("click", closeServiceModal);
}

if (serviceModalOverlay) {
  serviceModalOverlay.addEventListener("click", closeServiceModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeServiceModal();
  }
});

if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    updateHeadingText("Booking coming next --- great choice!");
  });
}

if (callBtn) {
  callBtn.addEventListener("click", () => {
    if (phoneLink) {
      updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
      updateHeadingText("call feature is coming soon!");
    }
  });
}

window.addEventListener("scroll", handleHeaderOnScroll);
