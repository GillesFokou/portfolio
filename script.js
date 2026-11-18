"use strict";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

const DICT = [
["Moi", "About me", "Über mich"],
["Ce que je sais faire", "Skills", "Fähigkeiten"],
["Projets", "Projects", "Projekte"],
["Parcours", "Background", "Werdegang"],
["Études", "Studies", "Studium"],
["Contact", "Contact", "Kontakt"],
["Bonjour et bienvenue !", "Hello and welcome!", "Hallo und willkommen!"],
["Étudiant en 4ème année de cycle ingénieur en informatique et réseaux", "4th-year engineering student in computer science and networks", "Ingenieurstudent im 4. Jahr in Informatik und Netzwerken"],
["J'aime comprendre comment les choses marchent : les réseaux, la sécurité, les systèmes et le code. J'apprends en essayant, en cassant parfois, puis en construisant des projets qui servent à quelque chose.", "I like to understand how things work: networks, security, systems and code. I learn by trying, sometimes by breaking things, and then by building projects that are actually useful.", "Ich möchte verstehen, wie Dinge funktionieren: Netzwerke, Sicherheit, Systeme und Code. Ich lerne durch Ausprobieren, manchmal durch Kaputtmachen, und dann durch Projekte, die wirklich nützlich sind."],
["Voir mes projets", "See my projects", "Meine Projekte ansehen"],
["Télécharger mon CV", "Download my CV", "Lebenslauf herunterladen"],
["Réseaux et cybersécurité", "Networks and cybersecurity", "Netzwerke und Cybersicherheit"],
["Découvrir mon parcours", "Discover my background", "Meinen Werdegang entdecken"],
["QUI SUIS-JE ?", "WHO AM I?", "WER BIN ICH?"],
["À propos de moi", "About me", "Über mich"],
["Derrière ce site, il y a quelqu'un de curieux, qui veut toujours savoir « comment ça marche ».", "Behind this site there is a curious person who always wants to know how things work.", "Hinter dieser Seite steckt ein neugieriger Mensch, der immer wissen will, wie etwas funktioniert."],
["Moi, c'est", "My name is", "Ich heiße"],
[". Je suis en cycle ingénieur à l'ESAIP, à Angers, en informatique et réseaux.", ". I'm in the engineering program at ESAIP in Angers, studying computer science and networks.", ". Ich studiere im Ingenieurzyklus an der ESAIP in Angers, Fachrichtung Informatik und Netzwerke."],
["Tout a commencé au lycée, au Cameroun. J'étais vice-responsable du club informatique. Avec l'équipe, nous avons monté un serveur Linux local pour que les élèves puissent lire des cours et refaire des exercices corrigés.", "It all started in high school in Cameroon. I was deputy head of the computer club. With the team, we set up a local Linux server so students could read lessons and redo corrected exercises.", "Alles begann in der Schule in Kamerun. Ich war stellvertretender Leiter des Informatikclubs. Mit dem Team richteten wir einen lokalen Linux-Server ein, damit die Schüler Kurse lesen und korrigierte Übungen wiederholen konnten."],
["Un jour, une attaque a détruit une partie de notre installation. Ça m'a marqué : un système ne sert à rien s'il n'est pas protégé. C'est là que la sécurité est devenue ma passion.", "One day, an attack destroyed part of our setup. It stayed with me: a system is useless if it is not protected. That is when security became my passion.", "Eines Tages zerstörte ein Angriff einen Teil unserer Anlage. Das hat mich geprägt: Ein System nützt nichts, wenn es nicht geschützt ist. Seitdem ist Sicherheit meine Leidenschaft."],
["Depuis, j'apprends surtout en pratiquant : je teste, je me trompe, je recommence et je construis des projets.", "Since then, I mostly learn by doing: I test, I make mistakes, I start again and I build projects.", "Seitdem lerne ich vor allem durch Praxis: Ich teste, mache Fehler, beginne neu und baue Projekte."],
["Hors écran, j'aime les rencontres, le travail en équipe et les gens qui voient les choses autrement que moi.", "Away from the screen, I enjoy meeting people, teamwork and people who see things differently from me.", "Abseits des Bildschirms mag ich Begegnungen, Teamarbeit und Menschen, die die Dinge anders sehen als ich."],
["Infos", "Info", "Infos"],
["École", "School", "Hochschule"],
["Domaine", "Field", "Fachgebiet"],
["Ce qui me plaît", "What I enjoy", "Was mir gefällt"],
["À l'étranger", "Abroad", "Im Ausland"],
["Cycle ingénieur", "Engineering program", "Ingenieurstudium"],
["ESAIP, Angers", "ESAIP, Angers", "ESAIP, Angers"],
["Informatique et réseaux", "Computer science and networks", "Informatik und Netzwerke"],
["Cybersécurité, Linux, réseaux, administration de systèmes", "Cybersecurity, Linux, networks, system administration", "Cybersicherheit, Linux, Netzwerke, Systemadministration"],
["Erasmus en République tchèque", "Erasmus in the Czech Republic", "Erasmus in Tschechien"],
["CE QUE JE SAIS FAIRE", "WHAT I CAN DO", "WAS ICH KANN"],
["Mes compétences", "My skills", "Meine Fähigkeiten"],
["Je les ai apprises en cours, en travaux pratiques et dans mes projets perso.", "I learned them in class, in practical work and in my personal projects.", "Ich habe sie im Unterricht, in Praktika und in eigenen Projekten gelernt."],
["Cybersécurité", "Cybersecurity", "Cybersicherheit"],
["Repérer les risques et comprendre ce qui protège vraiment un système.", "Spotting risks and understanding what really protects a system.", "Risiken erkennen und verstehen, was ein System wirklich schützt."],
["Protocoles", "Protocols", "Protokolle"],
["Sécurité réseau", "Network security", "Netzwerksicherheit"],
["Réseaux", "Networks", "Netzwerke"],
["Comprendre comment les machines se parlent et comment on gère un réseau.", "Understanding how machines talk to each other and how a network is managed.", "Verstehen, wie Maschinen miteinander kommunizieren und wie man ein Netzwerk verwaltet."],
["Adressage IP", "IP addressing", "IP-Adressierung"],
["Systèmes", "Systems", "Systeme"],
["À l'aise sous Linux, et en route vers l'administration de systèmes.", "Comfortable with Linux, and on my way to system administration.", "Sicher unter Linux und auf dem Weg zur Systemadministration."],
["Terminal", "Terminal", "Terminal"],
["Virtualisation", "Virtualization", "Virtualisierung"],
["Développement", "Development", "Entwicklung"],
["Créer des programmes et des applications, sur le web comme sur mobile.", "Building programs and applications, on the web and on mobile.", "Programme und Anwendungen entwickeln, für das Web und für Mobilgeräte."],
["Simulation", "Simulation", "Simulation"],
["Simuler un phénomène, puis lire et analyser les résultats.", "Simulating a phenomenon, then reading and analyzing the results.", "Ein Phänomen simulieren, dann die Ergebnisse lesen und analysieren."],
["Traitement du signal", "Signal processing", "Signalverarbeitung"],
["Intelligence artificielle", "Artificial intelligence", "Künstliche Intelligenz"],
["Découvrir comment une machine apprend, et l'essayer sur de vrais exemples.", "Discovering how a machine learns, and trying it on real examples.", "Entdecken, wie eine Maschine lernt, und es an echten Beispielen ausprobieren."],
["Modèles", "Models", "Modelle"],
["Expériences", "Experiments", "Experimente"],
["CE QUE JE CONSTRUIS", "WHAT I BUILD", "WAS ICH BAUE"],
["Mes projets", "My projects", "Meine Projekte"],
["Chaque projet m'apprend quelque chose, surtout quand ça ne marche pas du premier coup.", "Every project teaches me something, especially when it doesn't work the first time.", "Jedes Projekt lehrt mich etwas, vor allem wenn es nicht auf Anhieb klappt."],
["C++ · Algorithmes", "C++ · Algorithms", "C++ · Algorithmen"],
["Un programme en C++ qui trouve la sortie d'un labyrinthe. Je l'ai réalisé pendant mon Erasmus à VSB-TUO, en République tchèque.", "A C++ program that finds the exit of a maze. I made it during my Erasmus at VSB-TUO in the Czech Republic.", "Ein C++-Programm, das den Ausgang eines Labyrinths findet. Ich habe es während meines Erasmus an der VSB-TUO in Tschechien gebaut."],
["Algorithmes", "Algorithms", "Algorithmen"],
["Projet de cours", "Course project", "Kursprojekt"],
["MATLAB · Signal", "MATLAB · Signal", "MATLAB · Signal"],
["Analyse radio", "Radio analysis", "Funkanalyse"],
["Une étude du brouillage radio (jamming) : je simule les signaux, puis j'observe ce que le brouillage change.", "A study of radio jamming: I simulate the signals, then observe what the jamming changes.", "Eine Studie über Funkstörungen (Jamming): Ich simuliere die Signale und beobachte, was die Störung verändert."],
["Signal", "Signal", "Signal"],
["Application · Code", "Application · Code", "Anwendung · Code"],
["Une application autour de la musique. J'y ai appris à réfléchir à la logique d'une appli, puis à la construire.", "An app about music. I learned to think through an app's logic, then build it.", "Eine App rund um Musik. Dabei habe ich gelernt, die Logik einer App zu durchdenken und sie zu bauen."],
["Application", "Application", "Anwendung"],
["Programmation", "Programming", "Programmierung"],
["Projet perso", "Personal project", "Eigenes Projekt"],
["Cycle de vie", "Life cycle", "Lebenszyklus"],
["Un projet pour apprendre les outils et les méthodes qu'on utilise pour développer un logiciel.", "A project to learn the tools and methods used to develop software.", "Ein Projekt, um die Werkzeuge und Methoden der Softwareentwicklung zu lernen."],
["Projet d'apprentissage", "Learning project", "Lernprojekt"],
["MON PARCOURS", "MY BACKGROUND", "MEIN WERDEGANG"],
["Mon chemin jusqu'ici", "My path so far", "Mein bisheriger Weg"],
["Des études, des jobs et des aventures qui m'ont fait grandir.", "Studies, jobs and adventures that helped me grow.", "Studium, Jobs und Abenteuer, die mich haben wachsen lassen."],
["AUJOURD'HUI", "TODAY", "HEUTE"],
["Cycle ingénieur, informatique et réseaux", "Engineering program, computer science and networks", "Ingenieurstudium, Informatik und Netzwerke"],
["J'approfondis l'informatique, les réseaux, les systèmes et la cybersécurité.", "I'm going deeper into computer science, networks, systems and cybersecurity.", "Ich vertiefe Informatik, Netzwerke, Systeme und Cybersicherheit."],
["À L'ÉTRANGER", "ABROAD", "IM AUSLAND"],
["Mobilité Erasmus", "Erasmus exchange", "Erasmus-Austausch"],
["VSB, Université technique d'Ostrava · République tchèque", "VSB, Technical University of Ostrava · Czech Republic", "VSB, Technische Universität Ostrava · Tschechien"],
["Une nouvelle université, de nouvelles rencontres et des projets techniques à construire.", "A new university, new people and technical projects to build.", "Eine neue Universität, neue Begegnungen und technische Projekte, die gebaut werden wollten."],
["SUR LE TERRAIN", "IN THE FIELD", "IN DER PRAXIS"],
["Expériences professionnelles", "Work experience", "Berufserfahrung"],
["ADAPEI et Terra Botanica", "ADAPEI and Terra Botanica", "ADAPEI und Terra Botanica"],
["Des jobs où j'ai appris le sérieux, l'adaptation et la vie d'équipe.", "Jobs where I learned reliability, adaptability and teamwork.", "Jobs, in denen ich Zuverlässigkeit, Anpassungsfähigkeit und Teamarbeit gelernt habe."],
["LES DÉBUTS", "THE BEGINNING", "DIE ANFÄNGE"],
["Vice-responsable du club informatique", "Deputy head of the computer club", "Stellvertretender Leiter des Informatikclubs"],
["Lycée · Cameroun", "High school · Cameroon", "Schule · Kamerun"],
["Avec le club, j'ai monté un serveur Linux local pour donner aux élèves accès aux cours.", "With the club, I set up a local Linux server to give students access to lessons.", "Mit dem Club habe ich einen lokalen Linux-Server eingerichtet, damit die Schüler Zugang zu den Kursen haben."],
["APPRENDRE", "LEARNING", "LERNEN"],
["Mes études", "My studies", "Mein Studium"],
["Spécialité : cybersécurité et systèmes", "Specialty: cybersecurity and systems", "Schwerpunkt: Cybersicherheit und Systeme"],
["En cours", "Ongoing", "Laufend"],
["PREUVES À L'APPUI", "PROOF", "NACHWEISE"],
["Certificats et documents", "Certificates and documents", "Zertifikate und Dokumente"],
["Quelques documents qui montrent ce que j'ai appris.", "A few documents that show what I have learned.", "Einige Dokumente, die zeigen, was ich gelernt habe."],
["Certificat de formation", "Training certificate", "Schulungszertifikat"],
["Secourisme", "First aid", "Erste Hilfe"],
["Attestation de secouriste", "First aid certificate", "Erste-Hilfe-Bescheinigung"],
["Bases des réseaux", "Networking basics", "Netzwerkgrundlagen"],
["Networking Basics · Certificat", "Networking Basics · Certificate", "Networking Basics · Zertifikat"],
["Mon CV", "My CV", "Mein Lebenslauf"],
["Parcours et expériences", "Background and experience", "Werdegang und Erfahrung"],
["AU-DELÀ DU CODE", "BEYOND CODE", "JENSEITS DES CODES"],
["Vie d'école et engagements", "School life and commitments", "Hochschulleben und Engagement"],
["Les rencontres comptent autant que les compétences techniques.", "Meeting people matters as much as technical skills.", "Begegnungen zählen genauso viel wie technische Fähigkeiten."],
["Les associations de l'ESAIP", "ESAIP student associations", "Studentische Vereine der ESAIP"],
["Je suis membre du bureau de SAFE Angers et très actif au BDI et au BDS.", "I'm a board member of SAFE Angers and very active in the BDI and the BDS.", "Ich bin Vorstandsmitglied von SAFE Angers und sehr aktiv im BDI und im BDS."],
["Camp Mayanette, Cameroun", "Camp Mayanette, Cameroon", "Camp Mayanette, Kamerun"],
["J'ai animé et encadré des jeunes : jeux, activités et vie de groupe.", "I led and supervised young people: games, activities and group life.", "Ich habe Jugendliche betreut und angeleitet: Spiele, Aktivitäten und Gruppenleben."],
["PARLONS-EN", "LET'S TALK", "LASS UNS REDEN"],
["Restons en contact", "Let's stay in touch", "Bleiben wir in Kontakt"],
["Une question, une idée, une opportunité ? Ou juste l'envie de parler d'informatique ? Écrivez-moi, je réponds avec plaisir.", "A question, an idea, an opportunity? Or just want to talk about computing? Write to me, I'm happy to reply.", "Eine Frage, eine Idee, eine Gelegenheit? Oder einfach Lust, über Informatik zu sprechen? Schreib mir, ich antworte gern."],
["Me contacter", "Contact me", "Kontakt aufnehmen"],
["Envoyez-moi un e-mail pour parler d'un projet ou d'une opportunité.", "Send me an email to talk about a project or an opportunity.", "Schick mir eine E-Mail, um über ein Projekt oder eine Gelegenheit zu sprechen."],
["Me contacter →", "Contact me →", "Kontakt aufnehmen →"],
["Fait avec curiosité et passion par Gilles Adrien FOKOU TOUO.", "Made with curiosity and passion by Gilles Adrien FOKOU TOUO.", "Mit Neugier und Leidenschaft gemacht von Gilles Adrien FOKOU TOUO."],
["Retour en haut", "Back to top", "Nach oben"]
];

const TEXTS = new Map(DICT.map(([fr, en, de]) => [fr, { fr, en, de }]));
const norm = s => s.replace(/\s+/g, " ").trim();
const items = [];

const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (n.parentElement.closest("script")) continue;
    const key = norm(n.nodeValue);
    if (TEXTS.has(key)) {
        items.push({
            node: n, key,
            lead: /^\s/.test(n.nodeValue) ? " " : "",
            trail: /\s$/.test(n.nodeValue) ? " " : ""
        });
    }
}

const ARIA = { fr: "Ouvrir le menu", en: "Open menu", de: "Menü öffnen" };

function setLang(lang) {
    items.forEach(i => { i.node.nodeValue = i.lead + TEXTS.get(i.key)[lang] + i.trail; });
    document.documentElement.lang = lang;
    if (menuToggle) menuToggle.setAttribute("aria-label", ARIA[lang]);
    document.querySelectorAll(".lang-switch button").forEach(b => {
        b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignoré */ }
}

document.querySelectorAll(".lang-switch button").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
});

let startLang = "fr";
try {
    const saved = localStorage.getItem("lang");
    if (saved) startLang = saved;
    else if ((navigator.language || "").startsWith("de")) startLang = "de";
    else if ((navigator.language || "").startsWith("en")) startLang = "en";
} catch (e) { /* ignoré */ }
if (startLang !== "fr") setLang(startLang);
else setLang("fr");
