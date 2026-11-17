body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    background: url("fond_1.avif") center / 420px repeat;
    filter: invert(1);
    opacity: .05;
    pointer-events: none;
}

section:not(.hero) { background: transparent; }

.section-soft { background: rgba(19, 30, 39, .82); }
