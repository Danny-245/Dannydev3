(function () {
    "use strict";

    if (window.__dannydevModernDarkLoaded) {
        return;
    }
    window.__dannydevModernDarkLoaded = true;

    var STORAGE_KEY = "dannydev-motion-profile";
    var PROFILES = {
        subtle: { revealStep: 55, tiltMax: 4.5 },
        balanced: { revealStep: 80, tiltMax: 7.5 },
        "high-energy": { revealStep: 105, tiltMax: 11.5 }
    };

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var smallScreen = window.matchMedia("(max-width: 991px)").matches;
    document.documentElement.classList.add("theme-dark");

    var normalizeProfile = function (value) {
        if (!value) {
            return "balanced";
        }

        var profile = String(value).toLowerCase().trim();
        if (profile === "high" || profile === "highenergy" || profile === "high_energy") {
            profile = "high-energy";
        }

        return Object.prototype.hasOwnProperty.call(PROFILES, profile) ? profile : "balanced";
    };

    var readStoredProfile = function () {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    };

    var writeStoredProfile = function (value) {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch (error) {
            return;
        }
    };

    var urlParams = new URLSearchParams(window.location.search);
    var requestedProfile = normalizeProfile(
        document.body.getAttribute("data-motion-profile") ||
        urlParams.get("motion") ||
        readStoredProfile() ||
        "balanced"
    );

    var activeProfile = prefersReducedMotion ? "subtle" : requestedProfile;
    var applyProfileClass = function (profile) {
        document.body.classList.remove("motion-subtle", "motion-balanced", "motion-high-energy");
        document.body.classList.add("motion-" + profile);
    };
    applyProfileClass(activeProfile);

    var getProfileConfig = function () {
        return PROFILES[activeProfile] || PROFILES.balanced;
    };

    window.DannydevMotionProfile = {
        available: Object.keys(PROFILES),
        get: function () {
            return activeProfile;
        },
        set: function (profile) {
            var normalized = normalizeProfile(profile);
            if (prefersReducedMotion) {
                activeProfile = "subtle";
            } else {
                activeProfile = normalized;
                writeStoredProfile(normalized);
            }
            applyProfileClass(activeProfile);
        }
    };

    var toggleScrolledState = function () {
        document.body.classList.toggle("scrolled", window.scrollY > 24);
    };
    toggleScrolledState();
    window.addEventListener("scroll", toggleScrolledState, { passive: true });

    var revealTargets = [
        "header",
        "main",
        "section",
        "footer",
        ".card-box",
        ".content-box",
        ".why-choose-us",
        ".devo-con",
        ".about-con",
        ".rec-con",
        ".service-box",
        ".con-box",
        ".warn",
        ".slider-container",
        ".main",
        ".chat",
        ".exposure-chat",
        ".exposure-chat-box"
    ];

    var heroSelectors = ["header", ".head", ".about-con", ".devo-con"];
    var softSelectors = [".rec-con", ".warn", ".chat", ".exposure-chat", ".exposure-chat-box"];
    var floatSelectors = [".img-head img", ".about-img", ".project-img img", ".image-mail img", ".img-typed img", ".santa"];
    var tiltSelectors = [".card-box", ".why-choose-us", ".content-box", ".rec-con", ".warn", ".service-box", ".con-box", ".chat", ".exposure-chat", ".exposure-chat-box"];

    var revealNodes = new Set();
    revealTargets.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (node) {
            if (!node.classList.contains("nav-sec") && !node.closest("nav")) {
                revealNodes.add(node);
            }
        });
    });

    var hasClosestMatch = function (node, selectorList) {
        return selectorList.some(function (selector) {
            return node.matches(selector) || node.closest(selector);
        });
    };

    var revealIndex = 0;
    var revealStep = getProfileConfig().revealStep;
    revealNodes.forEach(function (node) {
        node.classList.add("reveal-animate");
        node.style.setProperty("--reveal-delay", Math.min(revealIndex, 14) * revealStep + "ms");

        if (hasClosestMatch(node, heroSelectors)) {
            node.classList.add("reveal-hero");
        } else if (hasClosestMatch(node, softSelectors)) {
            node.classList.add("reveal-soft");
        }

        revealIndex += 1;
    });

    floatSelectors.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (node) {
            node.classList.add("float-ambient");
        });
    });

    var showAllReveals = function () {
        revealNodes.forEach(function (node) {
            node.classList.add("is-visible");
        });
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        showAllReveals();
    } else {
        var observer = new IntersectionObserver(function (entries, localObserver) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    localObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px -8% 0px"
        });

        revealNodes.forEach(function (node) {
            observer.observe(node);
        });
    }

    var interactiveNodes = document.querySelectorAll("button, .btn, .card-box, .why-choose-us, .content-box, .rec-con, .warn, .service-box, .con-box, .chat, .exposure-chat, .exposure-chat-box");
    interactiveNodes.forEach(function (node) {
        node.addEventListener("pointerenter", function () {
            node.classList.add("lifted");
        }, { passive: true });

        node.addEventListener("pointerleave", function () {
            node.classList.remove("lifted");
        }, { passive: true });
    });

    if (prefersReducedMotion || smallScreen) {
        return;
    }

    var tiltNodes = document.querySelectorAll(tiltSelectors.join(", "));
    tiltNodes.forEach(function (node) {
        node.classList.add("motion-tilt");

        node.addEventListener("pointermove", function (event) {
            var rect = node.getBoundingClientRect();
            var percentX = (event.clientX - rect.left) / rect.width;
            var percentY = (event.clientY - rect.top) / rect.height;
            var tiltMax = getProfileConfig().tiltMax;

            var rotateY = (percentX - 0.5) * tiltMax;
            var rotateX = (0.5 - percentY) * tiltMax;

            node.style.setProperty("--tilt-x", rotateX.toFixed(2) + "deg");
            node.style.setProperty("--tilt-y", rotateY.toFixed(2) + "deg");
        });

        node.addEventListener("pointerleave", function () {
            node.style.setProperty("--tilt-x", "0deg");
            node.style.setProperty("--tilt-y", "0deg");
        }, { passive: true });
    });
})();
