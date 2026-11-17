body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    background:
        linear-gradient(rgba(16, 24, 32, .80), rgba(16, 24, 32, .93)),
        url("fond_1.avif") center / cover no-repeat;
    pointer-events: none;
}

section:not(.hero) {
    background: transparent;
}

.section-soft {
    position: relative;
    background: rgba(19, 30, 39, .80);
}

.section-soft::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background: url("fond.webp") center / 380px repeat;
    filter: invert(1);
    opacity: .045;
    pointer-events: none;
}

.section-soft > .container {
    position: relative;
    z-index: 1;
}

.contact-section {
    background: radial-gradient(ellipse at top, rgba(32, 59, 59, .75) 0%, transparent 65%);
}

.hero-overlay {
    background:
        linear-gradient(0deg, rgba(16, 24, 32, .9), transparent 30%),
        linear-gradient(180deg, rgba(16, 24, 32, .15), transparent);
}
