//Dom Elements
const yearEl = document.getElementById("year");
const mobileMenu = document.getElementById("mobileMenu");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav")

const ctaBtn = document.getElementById("ctaBtn");
const heading = document.getElementById("heroHeading");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const featureGrid = document.getElementById("featureGrid");

//update footer year

const navLinks = [
    {
        label: "home",
        href: '#hero'
    },
    {
        label: "services",
        href: '#features'
    },
    {
        label: "book",
        href: '#cta'
    },
    {
        label: "contact",
        href: '#footer'
    },

]

const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored for your style.",
        image: "assets/Images/feature-1.jpg"
    },
    {
        title: "Beard Shape-Up",
        text: "Shape and line-up your beard for a clean, sharp finish.",
        image: "assets/Images/feature-2.jpg"
    },
    {
        title: "Hot Towel Shave",
        text: "Hot towel treatment with a smooth shave.",
        image: "assets/Images/feature-3.jpg"
    }
];

// create a function that renders our links to or nav tag and mobileNav tag

const renderNavigation = () => {
    try {
        //destop nav
        if (nav) {
            const navHTML = navLinks.map(link => {
                return `
                <a href="${link.href}" class= nav-link">
                    ${link.label}
                    </a>
            `;
            }).join("");
            nav.innerHTML = navHTML;
        }
        //mobile Menu
        if (mobileMenu) {
            const mobileHTML = navLinks.map(link => {
                return `
                <a href="${link.href}" class ="mobile-link">
                    ${link.label}
                    </a>
            `;
            }).join("");
            mobileMenu.innerHTML = mobileHTML;
        }
    } catch (error) {
        console.log(error)

    };
}
renderNavigation()
//create a function that renders our futurees to the featureGrid

const renderFeatures = () => {

    if (!featureGrid) return;

    //map--> creates a new array --> loops through array and runs elements through a function 
    const cardsHTML = services.map(service => {
        return `
         <article class="feature-card">
            <img src= "${service.image}" alt="${service.title}" class="feature-img"/>
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">
              ${service.text}
            </p>
        </article>

         `
    }).join("");
    featureGrid.innerHTML = cardsHTML;
};
renderFeatures()

const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
};

setCurrentYear();

//Toggle mobile menu open/close
let isMenuOpen = false;

const toggleMobileMenu = () => {
    if (!mobileMenu) return;

    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    };

};

//close mobile menu when a link is clicked
const closedMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};


const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

//event Listener

//Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => toggleMobileMenu())
};

//close mobile menu when a mobile link is clicked
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        //if they clicked an <a> tag, close the menu

        if (event.target.tagName === "A") {
            closedMobileMenu();
        };

    });
};

//cta button: "Book Now"

if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        //create a function that updates the heading
        updateHeadingText("Booking coming soon.... - great choice!");
    });
};

// posssible errors 
// create an eventlistener 
if (callBtn) {
    callBtn.addEventListener("click", () => {
        if (phoneLink) {
            //update the header witht the phoneNumber when the callBtn Is pressed
            updateHeadingText("Call us at" + phoneLink.textContent);
        } else {
            updateHeadingText("call feature is coming soon!")
        };
    });
};


