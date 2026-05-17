// ==================== CONFIG & DATA ====================
let SECTION_CONFIG = [
  {
    id: "counter",
    type: "counter",
    visible: true,
  },
  {
    id: "breathing",
    type: "breathing",
    visible: true,
  },
  {
    id: "ausloeser",
    type: "default",
    visible: true,
  },
  {
    id: "gruende",
    type: "default",
    visible: true,
  },
  {
    id: "kontakte",
    type: "contacts",
    visible: true,
  },
  {
    id: "skills",
    type: "default",
    visible: true,
  },
  {
    id: "staerken",
    type: "default",
    visible: true,
  },
  {
    id: "mottos",
    type: "default",
    visible: true,
  },
  {
    id: "angenehmes",
    type: "default",
    visible: true,
  },
];

let DATA = {
  startDate: "",
  ausloeser: "",
  gruende: "",
  skills: "",
  staerken: "",
  mottos: "",
  angenehmes:
    `- Spazieren gehen in der Natur\n` +
    `- Einen längeren Wald- oder Parkspaziergang machen\n` +
    `- Am Wasser sitzen (See, Fluss, Meer)\n` +
    `- Mit dem Fahrrad fahren\n` +
    `- Joggen oder Walken\n` +
    `- Yoga oder Dehnübungen zu Hause\n` +
    `- Krafttraining oder leichte Gymnastik\n` +
    `- Tanzen (alleine oder in der Gruppe)\n` +
    `- Schwimmen gehen\n` +
    `- Sauna oder Dampfbad besuchen\n` +
    `- Ein warmes Vollbad mit Badezusatz nehmen\n` +
    `- Eine ausgiebige Dusche mit Lieblings-Duschgel\n` +
    `- Die Haare waschen und pflegen\n` +
    `- Sich selbst massieren oder eine Massage gönnen\n` +
    `- Gesichtsmaske oder Maniküre/Pediküre machen\n` +
    `- Lieblingsmusik hören\n` +
    `- Ein Konzert oder Live-Musik-Video anschauen\n` +
    `- Ein Instrument spielen oder dazu singen\n` +
    `- Podcasts oder Hörbücher hören\n` +
    `- Ein gutes Buch lesen\n` +
    `- In Zeitschriften oder Comics blättern\n` +
    `- Einen Film oder eine Serie schauen\n` +
    `- Alte Fotos anschauen oder digitalisieren\n` +
    `- Ein Fotoalbum oder Scrapbook basteln\n` +
    `- Mit Freunden treffen oder telefonieren\n` +
    `- Mit der Familie Zeit verbringen\n` +
    `- Jemandem einen Besuch abstatten\n` +
    `- Einen Brief oder eine Karte schreiben\n` +
    `- Etwas Leckeres kochen\n` +
    `- Backen (Kuchen, Plätzchen, Brot)\n` +
    `- Ein neues Rezept ausprobieren\n` +
    `- Kaffee oder Tee in Ruhe genießen\n` +
    `- Etwas Schönes essen (z. B. Schokolade, Eis, Obst)\n` +
    `- Im Café sitzen und Leute beobachten\n` +
    `- Einkaufen gehen (nur Schaufenster oder gezielt etwas Schönes)\n` +
    `- Blumen kaufen und in die Vase stellen\n` +
    `- Zimmerpflanzen pflegen oder umtopfen\n` +
    `- Gartenarbeit oder Balkon pflegen\n` +
    `- Etwas basteln oder handwerken\n` +
    `- Malen, zeichnen oder kritzeln\n` +
    `- Mandalas ausmalen\n` +
    `- Fotografieren (mit dem Handy reicht)\n` +
    `- Ein Puzzle legen\n` +
    `- Brett- oder Kartenspiele spielen\n` +
    `- Sudoku, Kreuzworträtsel oder andere Rätsel lösen\n` +
    `- Einen Kurs oder Workshop besuchen (online oder offline)\n` +
    `- Etwas Neues lernen (Sprache, Handwerk, Skill)\n` +
    `- Einen Vortrag oder TED-Talk anschauen\n` +
    `- Meditation oder Achtsamkeitsübung\n` +
    `- Progressive Muskelentspannung\n` +
    `- Geführte Entspannung per App oder YouTube\n` +
    `- In der Sonne sitzen oder ein Sonnenbad nehmen\n` +
    `- Frische Luft am offenen Fenster genießen\n` +
    `- Kerzen anzünden und den Duft genießen\n` +
    `- Aromatherapie oder Duftöl verwenden\n` +
    `- Ein Haustier streicheln, füttern oder spielen\n` +
    `- Mit Kindern spielen oder toben\n` +
    `- Etwas für andere tun (kleine Hilfe, Geschenk)\n` +
    `- Etwas spenden oder Gutes tun\n` +
    `- Eine schöne Serie oder Dokumentation schauen\n` +
    `- Ein warmes Getränk mit Zimt oder Gewürzen trinken\n` +
    `- Einen Kaminfeuer-Videoclip anschauen (bei schlechtem Wetter)\n` +
    `- Frische Bettwäsche aufziehen\n` +
    `- Die Wohnung aufräumen und das Ergebnis genießen\n` +
    `- Eine To-do-Liste abhaken und Erfolge feiern\n` +
    `- Etwas wegwerfen oder aussortieren, das erleichtert\n` +
    `- Eine schöne Duftkerze oder Räucherstäbchen anzünden\n` +
    `- Einen Spaziergang bei Regen mit Regenschirm machen\n` +
    `- Sterne oder Wolken beobachten\n` +
    `- Einen Aussichtspunkt besuchen\n` +
    `- Mit öffentlichen Verkehrsmitteln irgendwo hinfahren, nur zum Spaß\n` +
    `- Einen Markt oder Flohmarkt besuchen\n` +
    `- In eine Buchhandlung oder Bibliothek gehen\n` +
    `- Etwas Schönes online bestellen und sich darauf freuen\n` +
    `- Ein Badewannen-Leseabend\n` +
    `- Die Lieblingsspeise von früher kochen\n` +
    `- Alte Briefe oder Erinnerungsstücke durchschauen\n` +
    `- Eine Dankbarkeitsliste schreiben\n` +
    `- Sich selbst etwas Schönes sagen oder affirmieren\n` +
    `- Eine Power-Nap machen (kurzer Mittagsschlaf)\n` +
    `- Die Beine hochlegen und einfach nichts tun\n` +
    `- Ein entspannendes Hörspiel hören\n` +
    `- Comedy oder lustige Videos schauen\n` +
    `- Mit jemandem lachen oder Witze erzählen`,
};

let KONTAKTE = [];
let CUSTOM_SECTIONS = [];
let selectedCustomIcon = "bolt";

const SVGs = {
  wind: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 96C352 113.7 366.3 128 384 128L424 128C437.3 128 448 138.7 448 152C448 165.3 437.3 176 424 176L96 176C78.3 176 64 190.3 64 208C64 225.7 78.3 240 96 240L424 240C472.6 240 512 200.6 512 152C512 103.4 472.6 64 424 64L384 64C366.3 64 352 78.3 352 96zM416 448C416 465.7 430.3 480 448 480L480 480C533 480 576 437 576 384C576 331 533 288 480 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L480 352C497.7 352 512 366.3 512 384C512 401.7 497.7 416 480 416L448 416C430.3 416 416 430.3 416 448zM192 576L232 576C280.6 576 320 536.6 320 488C320 439.4 280.6 400 232 400L96 400C78.3 400 64 414.3 64 432C64 449.7 78.3 464 96 464L232 464C245.3 464 256 474.7 256 488C256 501.3 245.3 512 232 512L192 512C174.3 512 160 526.3 160 544C160 561.7 174.3 576 192 576z"/></svg>`,
  bolt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 320L156.5 92C158.5 76 172.1 64 188.3 64L356.9 64C371.9 64 384 76.1 384 91.1C384 94.3 383.4 97.6 382.3 100.6L336 224L475.3 224C495.5 224 512 240.4 512 260.7C512 268.1 509.8 275.3 505.6 281.4L313.4 562.4C307.5 571 297.8 576.1 287.5 576.1L284.6 576.1C268.9 576.1 256.1 563.3 256.1 547.6C256.1 545.3 256.4 543 257 540.7L304 352L160 352C142.3 352 128 337.7 128 320z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M415.8 89C423.6 70.2 444.2 60.1 463.9 65.5L469.4 67C534 84.6 589.2 147.2 573.1 223.4C536 398.4 398.3 536.1 223.3 573.2C147 589.4 84.5 534.1 66.9 469.5L65.4 464C60 444.3 70.1 423.7 88.9 415.9L186.2 375.4C202.7 368.5 221.8 373.3 233.2 387.2L271.8 434.4C342.1 399.5 398.6 341.1 431.1 269.5L387 233.4C373.1 222.1 368.4 203 375.2 186.4L415.8 89z"/></svg>`,
  phonebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M160 64C124.7 64 96 92.7 96 128L96 512C96 547.3 124.7 576 160 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L160 64zM272 352L336 352C380.2 352 416 387.8 416 432C416 440.8 408.8 448 400 448L208 448C199.2 448 192 440.8 192 432C192 387.8 227.8 352 272 352zM248 256C248 225.1 273.1 200 304 200C334.9 200 360 225.1 360 256C360 286.9 334.9 312 304 312C273.1 312 248 286.9 248 256zM576 144C576 135.2 568.8 128 560 128C551.2 128 544 135.2 544 144L544 208C544 216.8 551.2 224 560 224C568.8 224 576 216.8 576 208L576 144zM576 272C576 263.2 568.8 256 560 256C551.2 256 544 263.2 544 272L544 336C544 344.8 551.2 352 560 352C568.8 352 576 344.8 576 336L576 272zM560 384C551.2 384 544 391.2 544 400L544 464C544 472.8 551.2 480 560 480C568.8 480 576 472.8 576 464L576 400C576 391.2 568.8 384 560 384z"/></svg>`,
  toolbox: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M240 120L240 160L400 160L400 120C400 115.6 396.4 112 392 112L248 112C243.6 112 240 115.6 240 120zM192 160L192 120C192 89.1 217.1 64 248 64L392 64C422.9 64 448 89.1 448 120L448 160L476.1 160C488.8 160 501 165.1 510 174.1L561.9 226C570.9 235 576 247.2 576 259.9L576 336L440 336L440 320C440 306.7 429.3 296 416 296C402.7 296 392 306.7 392 320L392 336L248 336L248 320C248 306.7 237.3 296 224 296C210.7 296 200 306.7 200 320L200 336L64 336L64 259.9C64 247.2 69.1 235 78.1 226L130 174.1C139 165.1 151.2 160 163.9 160L192 160zM64 480L64 384L200 384L200 400C200 413.3 210.7 424 224 424C237.3 424 248 413.3 248 400L248 384L392 384L392 400C392 413.3 402.7 424 416 424C429.3 424 440 413.3 440 400L440 384L576 384L576 480C576 515.3 547.3 544 512 544L128 544C92.7 544 64 515.3 64 480z"/></svg>`,
  dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M96 176C96 149.5 117.5 128 144 128C170.5 128 192 149.5 192 176L192 288L448 288L448 176C448 149.5 469.5 128 496 128C522.5 128 544 149.5 544 176L544 192L560 192C586.5 192 608 213.5 608 240L608 288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352L608 400C608 426.5 586.5 448 560 448L544 448L544 464C544 490.5 522.5 512 496 512C469.5 512 448 490.5 448 464L448 352L192 352L192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464L96 448L80 448C53.5 448 32 426.5 32 400L32 352C14.3 352 0 337.7 0 320C0 302.3 14.3 288 32 288L32 240C32 213.5 53.5 192 80 192L96 192L96 176z"/></svg>`,
  quote: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"/></svg>`,
  gear: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,
  pill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 176C128 149.5 149.5 128 176 128C202.5 128 224 149.5 224 176L224 288L128 288L128 176zM240 432C240 383.3 258.1 338.8 288 305L288 176C288 114.1 237.9 64 176 64C114.1 64 64 114.1 64 176L64 464C64 525.9 114.1 576 176 576C213.3 576 246.3 557.8 266.7 529.7C249.7 501.1 240 467.7 240 432zM304.7 499.4C309.3 508.1 321 509.1 328 502.1L502.1 328C509.1 321 508.1 309.3 499.4 304.7C479.3 294 456.4 288 432 288C352.5 288 288 352.5 288 432C288 456.3 294 479.3 304.7 499.4zM361.9 536C354.9 543 355.9 554.7 364.6 559.3C384.7 570 407.6 576 432 576C511.5 576 576 511.5 576 432C576 407.7 570 384.7 559.3 364.6C554.7 355.9 543 354.9 536 361.9L361.9 536z"/></svg>`,
  medicalbook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 576L512 576C529.7 576 544 561.7 544 544C544 526.3 529.7 512 512 512L512 445.3C530.6 438.7 544 420.9 544 400L544 112C544 85.5 522.5 64 496 64L192 64C139 64 96 107 96 160L96 480C96 533 139 576 192 576zM160 480C160 462.3 174.3 448 192 448L448 448L448 512L192 512C174.3 512 160 497.7 160 480zM288 184C288 175.2 295.2 168 304 168L336 168C344.8 168 352 175.2 352 184L352 224L392 224C400.8 224 408 231.2 408 240L408 272C408 280.8 400.8 288 392 288L352 288L352 328C352 336.8 344.8 344 336 344L304 344C295.2 344 288 336.8 288 328L288 288L248 288C239.2 288 232 280.8 232 272L232 240C232 231.2 239.2 224 248 224L288 224L288 184z"/></svg>`,
  hospital: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M160 128C160 92.7 188.7 64 224 64L416 64C451.3 64 480 92.7 480 128L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256C32 220.7 60.7 192 96 192L160 192L160 128zM304 416C286.3 416 272 430.3 272 448L272 528L368 528L368 448C368 430.3 353.7 416 336 416L304 416zM160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448C152.8 448 160 440.8 160 432zM144 320C152.8 320 160 312.8 160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320zM544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448C536.8 448 544 440.8 544 432zM528 320C536.8 320 544 312.8 544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320zM296 168L296 200L264 200C255.2 200 248 207.2 248 216L248 232C248 240.8 255.2 248 264 248L296 248L296 280C296 288.8 303.2 296 312 296L328 296C336.8 296 344 288.8 344 280L344 248L376 248C384.8 248 392 240.8 392 232L392 216C392 207.2 384.8 200 376 200L344 200L344 168C344 159.2 336.8 152 328 152L312 152C303.2 152 296 159.2 296 168z"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z"/></svg>`,
  hands: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M300.9 117.2L184.3 246.8C179.7 251.9 179.9 259.8 184.8 264.7C215.3 295.2 264.8 295.2 295.3 264.7L327.1 232.9C331.3 228.7 336.6 226.4 342 226C348.8 225.4 355.8 227.7 361 232.9L537.6 408L608 352L608 64L496 128L472.2 112.1C456.4 101.6 437.9 96 418.9 96L348.5 96C347.4 96 346.2 96 345.1 96.1C328.2 97 312.3 104.6 300.9 117.2zM148.6 214.7L255.4 96L215.8 96C190.3 96 165.9 106.1 147.9 124.1L32 256L32 608L176 472L188.4 482.3C211.4 501.5 240.4 512 270.3 512L286 512L279 505C269.6 495.6 269.6 480.4 279 471.1C288.4 461.8 303.6 461.7 312.9 471.1L353.9 512.1L362.9 512.1C382 512.1 400.7 507.8 417.7 499.8L391 473C381.6 463.6 381.6 448.4 391 439.1C400.4 429.8 415.6 429.7 424.9 439.1L456.9 471.1L474.4 453.6C483.3 444.7 485.9 431.8 482 420.5L344.1 283.7L329.2 298.6C279.9 347.9 200.1 347.9 150.8 298.6C127.8 275.6 126.9 238.7 148.6 214.6z"/></svg>`,
  group: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z"/></svg>`,
  parachute: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 288C192 216.2 208.3 152.4 233.5 107.4C259.1 61.6 290.6 40 320 40C349.4 40 380.9 61.6 406.5 107.4C431.7 152.4 448 216.2 448 288L344 288L344 384L352 384C361.3 384 370.1 386 378 389.5L496.4 288L495.9 288C495.9 209.6 478.2 137.4 448.3 84C442.2 73 435.4 62.7 428 53.1C514.5 89 575.8 168.2 575.8 272C575.8 279 572.7 285.7 567.4 290.2L411.4 424.1C414.4 431.5 416 439.5 416 448L416 512C416 547.3 387.3 576 352 576L288 576C252.7 576 224 547.3 224 512L224 448C224 439.6 225.6 431.5 228.6 424.1L72.4 290.2C67.1 285.7 64 279 64 272C64 168.2 125.3 88.9 211.8 53.1C204.5 62.6 197.7 73 191.6 84C161.7 137.4 144 209.6 144 288L143.5 288L261.9 389.5C269.9 386 278.7 384 287.9 384L295.9 384L295.9 288L191.9 288z"/></svg>`,
  gauge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM320 480C355.3 480 384 451.3 384 416C384 399.8 378 384.9 368 373.7L437.5 234.8C443.4 222.9 438.6 208.5 426.8 202.6C415 196.7 400.5 201.5 394.6 213.3L325.1 352.2C323.4 352.1 321.7 352 320 352C284.7 352 256 380.7 256 416C256 451.3 284.7 480 320 480zM240 208C240 190.3 225.7 176 208 176C190.3 176 176 190.3 176 208C176 225.7 190.3 240 208 240C225.7 240 240 225.7 240 208zM160 352C177.7 352 192 337.7 192 320C192 302.3 177.7 288 160 288C142.3 288 128 302.3 128 320C128 337.7 142.3 352 160 352zM512 320C512 302.3 497.7 288 480 288C462.3 288 448 302.3 448 320C448 337.7 462.3 352 480 352C497.7 352 512 337.7 512 320z"/></svg>`,
  bandage: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M496 480L544 480C579.3 480 608 451.3 608 416L608 224C608 188.7 579.3 160 544 160L496 160L496 480zM448 160L192 160L192 480L448 480L448 160zM96 160C60.7 160 32 188.7 32 224L32 416C32 451.3 60.7 480 96 480L144 480L144 160L96 160zM248 272C248 258.7 258.7 248 272 248C285.3 248 296 258.7 296 272C296 285.3 285.3 296 272 296C258.7 296 248 285.3 248 272zM368 248C381.3 248 392 258.7 392 272C392 285.3 381.3 296 368 296C354.7 296 344 285.3 344 272C344 258.7 354.7 248 368 248zM248 368C248 354.7 258.7 344 272 344C285.3 344 296 354.7 296 368C296 381.3 285.3 392 272 392C258.7 392 248 381.3 248 368zM368 344C381.3 344 392 354.7 392 368C392 381.3 381.3 392 368 392C354.7 392 344 381.3 344 368C344 354.7 354.7 344 368 344z"/></svg>`,
  carrot: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M453.1 27.3L440.9 39.4C409.7 70.6 409.7 121.3 440.9 152.5C456.5 168.1 472.1 183.7 487.8 199.4C519 230.6 569.7 230.6 600.9 199.4L613 187.3C619.2 181.1 619.2 170.9 613 164.7L600.9 152.6C569.7 121.4 519 121.4 487.8 152.6C519 121.4 519 70.7 487.8 39.5L475.7 27.3C469.5 21.1 459.3 21.1 453.1 27.3zM331.6 160C286.4 160 244.5 180.4 216.6 214.3L273.3 271C282.7 280.4 282.7 295.6 273.3 304.9C263.9 314.2 248.7 314.3 239.4 304.9L191.6 257.2L67.2 530.8C61.7 542.9 64.3 557.2 73.7 566.7C83.1 576.2 97.4 578.7 109.6 573.2L251.2 508.8L207.4 465C198 455.6 198 440.4 207.4 431.1C216.8 421.8 232 421.7 241.3 431.1L297.8 487.6L393.1 444.3C446.2 420.2 480.3 367.2 480.3 308.8C480.3 226.6 413.7 160 331.5 160z"/></svg>`,
  chili: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M577 129C586.4 119.6 586.4 104.4 577 95.1C567.6 85.8 552.4 85.7 543.1 95.1L510.9 127.2C484.3 107.6 451.5 96 416 96C380.9 96 348.5 107.3 322.1 126.4C306.1 138.1 316.2 160 336 160L360 160C373.3 160 384 170.7 384 184L384 264C384 277.3 394.7 288 408 288L488 288C501.3 288 512 298.7 512 312L512 336C512 355.8 533.9 365.9 545.6 349.9C564.7 323.5 576 291.1 576 256C576 220.5 564.4 187.7 544.8 161.1L577 129zM302 199.5L142.4 427.5C133.3 440.4 118.7 448 103 448L96 448C69.5 448 48 469.5 48 496C48 522.5 69.5 544 96 544L123.1 544C188.8 544 252.8 523.8 306.6 486.2L472.5 370.1C467 359.9 464 348.2 464 336L408 336C368.2 336 336 303.8 336 264L336 208C323.8 208 312.1 205 302 199.5z"/></svg>`,
  doctor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72zM380 384.8C374.6 384.3 369 384 363.4 384L276.5 384C270.9 384 265.4 384.3 259.9 384.8L259.9 452.3C276.4 459.9 287.9 476.6 287.9 495.9C287.9 522.4 266.4 543.9 239.9 543.9C213.4 543.9 191.9 522.4 191.9 495.9C191.9 476.5 203.4 459.8 219.9 452.3L219.9 393.9C157 417 112 477.6 112 548.6C112 563.7 124.3 576 139.4 576L500.5 576C515.6 576 527.9 563.7 527.9 548.6C527.9 477.6 482.9 417.1 419.9 394L419.9 431.4C443.2 439.6 459.9 461.9 459.9 488L459.9 520C459.9 531 450.9 540 439.9 540C428.9 540 419.9 531 419.9 520L419.9 488C419.9 477 410.9 468 399.9 468C388.9 468 379.9 477 379.9 488L379.9 520C379.9 531 370.9 540 359.9 540C348.9 540 339.9 531 339.9 520L339.9 488C339.9 461.9 356.6 439.7 379.9 431.4L379.9 384.8z"/></svg>`,
  masks: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M27 182L55.5 343.7C69.5 423.2 131.8 485.5 211.3 499.5L224 501.7C207.5 473.1 196.9 441 193.4 407.2L169.3 411.5C159.6 413.2 150.5 405.7 152.4 396C157.2 371.3 171.5 349.4 192.1 335.1L192.1 260.5C190.7 261.3 189.1 261.8 187.4 262.1L124.4 273.2C115.7 274.7 107.1 268.8 108.5 260.1C111.6 240.5 126.9 224.1 147.6 220.4C164.8 217.4 181.5 223.9 192.2 236.2L192.2 213.5C192.2 191 199.1 161.1 224.5 140.1C250.5 118.6 292.2 96.2 349.4 85.9C318.9 69.6 263.1 53.9 185.6 67.5C105.3 81.7 57.6 117.6 35.5 143.6C26.5 154.1 24.7 168.5 27.1 182.1zM240 202.7L240 377.5C240 458.2 290.5 530.4 366.4 557.9L394.1 568C408.2 573.1 423.7 573.1 437.8 568L465.6 558C541.5 530.4 592 458.3 592 377.5L592 202.7C592 195.8 589.9 188.9 585 184.1C562.4 161.6 506.8 128.1 416 128.1C325.2 128.1 269.6 161.7 247 184.1C242.1 189 240 195.8 240 202.7zM306.1 389.8C304.7 382.8 313.1 378.8 318.8 383.2C345.7 403.8 379.4 416.1 416 416.1C452.6 416.1 486.2 403.8 513.2 383.2C518.9 378.8 527.3 382.8 525.9 389.8C515.8 441.2 470.4 480.1 416 480.1C361.6 480.1 316.2 441.3 306.1 389.8zM306.6 288.3C313.2 269.5 331 256 352 256C373 256 390.9 269.5 397.4 288.3C400.3 296.7 392.9 304 384 304L320 304C311.2 304 303.7 296.6 306.6 288.3zM512 304L448 304C439.2 304 431.7 296.6 434.6 288.3C441.1 269.5 459 256 480 256C501 256 518.9 269.5 525.4 288.3C528.3 296.7 520.9 304 512 304z"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"/></svg>`,
  pen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640 "width="16" height="16"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg>`,
  burger: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>`,
  lang: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"/></svg>`,
  import: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 368L310.1 368L279.1 337C269.7 327.6 269.7 312.4 279.1 303.1C288.5 293.8 303.7 293.7 313 303.1L385 375.1C394.4 384.5 394.4 399.7 385 409L313 481C303.6 490.4 288.4 490.4 279.1 481C269.8 471.6 269.7 456.4 279.1 447.1L310.1 416.1L128 416.1L128 512.1C128 547.4 156.7 576.1 192 576.1L448 576.1C483.3 576.1 512 547.4 512 512.1L512 234.6C512 217.6 505.3 201.3 493.3 189.3L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,
};

// Icons shown in the custom section icon picker
const PICKABLE_ICONS = [
  "bolt",
  "heart",
  "phonebook",
  "toolbox",
  "dumbbell",
  "quote",
  "pill",
  "medicalbook",
  "hospital",
  "brain",
  "hands",
  "group",
  "shield",
  "parachute",
  "gauge",
  "bandage",
  "chili",
  "carrot",
  "doctor",
  "masks",
];
