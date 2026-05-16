// ==================== TRANSLATIONS ====================

const TRANSLATIONS = {
  de: {
    "app.title": "Mein Notfallplan",

    "counter.label": "TAGE ABSTINENT",
    "counter.since": "seit",

    "action.manage": "Sektionen verwalten",
    "action.add_section": "Neue Sektion hinzufügen",
    "action.info": "Infos zum Datenschutz",
    "action.export": "Notfallplan exportieren",
    "action.language": "Sprache",

    "contacts.empty": "Noch keine Notfallkontakte hinzugefügt.",
    "contacts.add": "+ Neuen Kontakt hinzufügen",
    "contacts.invalid_number":
      "Das sieht nicht wie eine gültige Telefonnummer aus.",
    "contacts.modal_title": "Neuen Kontakt hinzufügen",
    "contacts.name_placeholder": "Name",
    "contacts.tel_placeholder": "Telefonnummer",
    "contacts.add_btn": "Hinzufügen",
    "contacts.call_title": "Anrufen",
    "contacts.delete_title": "Kontakt löschen",

    "editor.title_default": "Bearbeiten",
    "editor.bold_placeholder": "fett",
    "editor.italic_placeholder": "kursiv",
    "editor.underline_placeholder": "unterstrichen",
    "editor.save_status_saved": "\u2713",
    "editor.save_status_unsaved": "\u25CF",
    "editor.format_bullet": "\u2022 Aufzählung",
    "editor.format_numbered": "1. Nummeriert",
    "editor.format_bold": "B",
    "editor.format_italic": "I",
    "editor.format_underline": "U",
    "editor.format_link": "\uD83D\uDD17 Link",
    "editor.done": "Fertig",
    "editor.link_title": "Link einfügen",
    "editor.link_url_placeholder": "https://example.com",
    "editor.link_text_placeholder": "Link-Text (optional)",
    "editor.link_insert": "Einfügen",
    "editor.link_cancel": "Abbrechen",

    "section.counter": "Abstinenzzähler",
    "section.breathing": "Boxatmung",
    "section.ausloeser": "Auslöser & Stressoren",
    "section.gruende": "Gute Gründe, abstinent zu bleiben",
    "section.kontakte": "Meine Notfallkontakte",
    "section.skills": "Bewältigungsmechanismen, Skills & Ablenkung",
    "section.staerken": "Meine Stärken",
    "section.mottos": "Hilfreiche Gedanken & Mottos",
    "section.angenehmes": "Angenehme Aktivitäten",

    "manage.title": "Sektionen verwalten",
    "manage.new_section": "+ Neue Sektion",
    "manage.done": "Fertig",
    "manage.move_up": "Nach oben verschieben",
    "manage.move_down": "Nach unten verschieben",
    "manage.delete_section_tooltip": "Sektion löschen",
    "manage.edit_content_tooltip": "Inhalt bearbeiten",

    "custom_section.title": "Neue Sektion erstellen",
    "custom_section.name_placeholder": "Titel der Sektion",
    "custom_section.icon_label": "Icon auswählen:",
    "custom_section.collapsible_label": "Als aufklappbare Sektion",
    "custom_section.cancel": "Abbrechen",
    "custom_section.create": "Erstellen",
    "custom_section.empty_title_error":
      "Bitte gib einen Titel für die neue Sektion ein.",

    "confirm.delete": "Löschen",
    "confirm.cancel": "Abbrechen",
    "confirm.delete_section": 'Sektion "{0}" wirklich löschen?',

    "breathing.choose": "Atemübung wählen",
    "breathing.box.title": "Boxatmung",
    "breathing.box.desc": "4s ein · 4s halten · 4s aus · 4s halten",
    "breathing.478.title": "4-7-8 Atmung",
    "breathing.478.desc": "4s ein · 7s halten · 8s aus",
    "breathing.coherent.title": "Kohärentes Atmen",
    "breathing.coherent.desc": "5.5s ein · 5.5s aus",
    "breathing.phases.in": "Einatmen...",
    "breathing.phases.hold": "Halten...",
    "breathing.phases.out": "Ausatmen...",
    "breathing.phases.long_out": "Lange ausatmen...",

    "export.success_title": "✓ Notfallplan erfolgreich exportiert!",
    "export.success_desc":
      'Die Datei "Mein-Notfallplan.html" wurde heruntergeladen.',
    "export.success_tip":
      "Speichere diese Datei an einem sicheren Ort, wo du schnell darauf zugreifen kannst!",
    "export.pc_title": "💻 Auf dem PC",
    "export.pc_save":
      'Speichern: Die Datei ist in deinem "Downloads"-Ordner. Verschiebe sie z.B. auf den Desktop oder in einen "Notfallplan"-Ordner.',
    "export.pc_open":
      "Öffnen: Doppelklick auf die Datei → öffnet sich automatisch im Browser.",
    "export.pc_bookmark":
      "Lesezeichen: Im Browser (Strg+D oder Cmd+D): Speichere sie als Lesezeichen für schnellen Zugriff.",
    "export.mobile_title": "📱 Auf dem Smartphone",
    "export.ios_title": "iOS (iPhone/iPad):",
    "export.ios_1": "1. Öffne die Dateien-App",
    "export.ios_2":
      '2. Gehe zu "Downloads" und tippe auf deine Notfallplan-Datei',
    "export.ios_3":
      "3. Tippe oben rechts auf das Share-Symbol (Quadrat mit Pfeil)",
    "export.ios_4": '4. Wähle "Zu Home-Bildschirm hinzufügen"',
    "export.ios_5": '5. Gib den Namen "Notfallplan" ein → Hinzufügen',
    "export.android_title": "Android:",
    "export.android_1": '1. Öffne die Dateien-App oder "Downloads"',
    "export.android_2": '2. Tippe auf die Datei "Mein-Notfallplan.html"',
    "export.android_3":
      '3. Tippe auf die drei Punkte (⋮) → "Zum Startbildschirm hinzufügen" oder "Shortcut erstellen"',
    "export.android_4":
      'Oder: Datei in Chrome öffnen → Drei-Punkte-Menü → "Zum Startbildschirm hinzufügen"',
    "export.tip_title": "💡 Tipp:",
    "export.tip_desc": "Speichere die Datei auch:",
    "export.tip_cloud":
      "In der Cloud (Google Drive, OneDrive, Dropbox) - so hast du Zugriff überall",
    "export.tip_email": "Als E-Mail an dich selbst als Backup",
    "export.tip_private": "An einem sicheren, privaten Ort den nur du kennst",
    "export.warning_title": "⚠️ Wichtig:",
    "export.warning_desc":
      "Wenn du deine Daten aktualisierst (neue Kontakte, Inhalte ändern), musst du die Datei neu exportieren, damit die Änderungen gespeichert werden.",
    "export.got_it": "Verstanden",

    "info.title": "🔒 Deine Daten bleiben bei dir!",
    "info.emphasis": "Keine Sorge – deine Privatsphäre ist geschützt.",
    "info.data_stored":
      "Alle Daten, die du hier eingibst, werden ausschließlich in deinem Browser gespeichert – genauer gesagt im localStorage deines Geräts.",
    "info.no_server":
      "Es werden keinerlei Daten an einen Server übermittelt, nicht analysiert und nicht an Dritte weitergegeben.",
    "info.clear_data":
      "Du kannst jederzeit alle gespeicherten Daten löschen, indem du in deinen Browsereinstellungen die Daten dieser Seite entfernst.",
    "info.how_it_works": "💡 Wie es funktioniert:",
    "info.how_1":
      "Deine Texte, Kontakte und Einstellungen bleiben auf deinem Gerät",
    "info.how_2":
      "Beim Export entsteht eine eigenständige HTML-Datei – ohne Verbindung zu irgendeinem Server",
    "info.how_3":
      "Die App funktioniert komplett offline (nach dem ersten Laden)",
    "info.how_4":
      "Es wird keine Internetverbindung benötigt, um deine Daten zu speichern oder zu nutzen",
    "info.summary_title": "📌 Kurz gesagt:",
    "info.summary":
      "Was du hier schreibst, bleibt deins. Es verlässt nie deinen Browser – versprochen!",
    "info.got_it": "Verstanden",

    "move.up": "Nach oben verschieben",
    "move.down": "Nach unten verschieben",

    "icon.bolt": "Blitz",
    "icon.heart": "Herz",
    "icon.phonebook": "Telefonbuch",
    "icon.toolbox": "Werkzeug",
    "icon.dumbbell": "Hantel",
    "icon.quote": "Zitat",
    "icon.pill": "Tablette",
    "icon.medicalbook": "Medizinbuch",
    "icon.hospital": "Krankenhaus",
    "icon.brain": "Gehirn",
    "icon.hands": "Hände",
    "icon.group": "Gruppe",
    "icon.shield": "Schild",
    "icon.parachute": "Fallschirm",
    "icon.gauge": "Messer",
    "icon.bandage": "Verband",
    "icon.pepper": "Pfeffer",
    "icon.carrot": "Karotte",
    "icon.doctor": "Arzt",
    "icon.masks": "Masken",

    "data.angenehmes_default":
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
  },

  en: {
    "app.title": "My Emergency Plan",

    "counter.label": "DAYS SOBER",
    "counter.since": "since",

    "action.manage": "Manage Sections",
    "action.add_section": "Add New Section",
    "action.info": "Privacy Information",
    "action.export": "Export Emergency Plan",
    "action.language": "Language",

    "contacts.empty": "No emergency contacts added yet.",
    "contacts.add": "+ Add New Contact",
    "contacts.invalid_number": "That doesn't look like a valid phone number.",
    "contacts.modal_title": "Add New Contact",
    "contacts.name_placeholder": "Name",
    "contacts.tel_placeholder": "Phone Number",
    "contacts.add_btn": "Add",
    "contacts.call_title": "Call",
    "contacts.delete_title": "Delete Contact",

    "editor.title_default": "Edit",
    "editor.bold_placeholder": "bold",
    "editor.italic_placeholder": "italic",
    "editor.underline_placeholder": "underline",
    "editor.save_status_saved": "\u2713",
    "editor.save_status_unsaved": "\u25CF",
    "editor.format_bullet": "\u2022 Bullet List",
    "editor.format_numbered": "1. Numbered",
    "editor.format_bold": "B",
    "editor.format_italic": "I",
    "editor.format_underline": "U",
    "editor.format_link": "\uD83D\uDD17 Link",
    "editor.done": "Done",
    "editor.link_title": "Insert Link",
    "editor.link_url_placeholder": "https://example.com",
    "editor.link_text_placeholder": "Link Text (optional)",
    "editor.link_insert": "Insert",
    "editor.link_cancel": "Cancel",

    "section.counter": "Sobriety Counter",
    "section.breathing": "Box Breathing",
    "section.ausloeser": "Triggers & Stressors",
    "section.gruende": "Good Reasons to Stay Sober",
    "section.kontakte": "My Emergency Contacts",
    "section.skills": "Coping Mechanisms, Skills & Distraction",
    "section.staerken": "My Strengths",
    "section.mottos": "Helpful Thoughts & Mottos",
    "section.angenehmes": "Pleasant Activities",

    "manage.title": "Manage Sections",
    "manage.new_section": "+ New Section",
    "manage.done": "Done",
    "manage.move_up": "Move up",
    "manage.move_down": "Move down",
    "manage.delete_section_tooltip": "Delete Section",
    "manage.edit_content_tooltip": "Edit Content",

    "custom_section.title": "Create New Section",
    "custom_section.name_placeholder": "Section Title",
    "custom_section.icon_label": "Choose icon:",
    "custom_section.collapsible_label": "As collapsible section",
    "custom_section.cancel": "Cancel",
    "custom_section.create": "Create",
    "custom_section.empty_title_error":
      "Please enter a title for the new section.",

    "confirm.delete": "Delete",
    "confirm.cancel": "Cancel",
    "confirm.delete_section": 'Really delete section "{0}"?',

    "breathing.choose": "Choose Exercise",
    "breathing.box.title": "Box Breathing",
    "breathing.box.desc": "4s in · 4s hold · 4s out · 4s hold",
    "breathing.478.title": "4-7-8 Breathing",
    "breathing.478.desc": "4s in · 7s hold · 8s out",
    "breathing.coherent.title": "Coherent Breathing",
    "breathing.coherent.desc": "5.5s in · 5.5s out",
    "breathing.phases.in": "Breathe in...",
    "breathing.phases.hold": "Hold...",
    "breathing.phases.out": "Breathe out...",
    "breathing.phases.long_out": "Breathe out long...",

    "export.success_title": "✓ Emergency Plan exported successfully!",
    "export.success_desc":
      'The file "My-Emergency-Plan.html" has been downloaded.',
    "export.success_tip":
      "Save this file in a safe place where you can access it quickly!",
    "export.pc_title": "💻 On your Computer",
    "export.pc_save":
      "Save: The file is in your Downloads folder. Move it to your desktop or an 'Emergency Plan' folder.",
    "export.pc_open":
      "Open: Double-click the file → it opens automatically in your browser.",
    "export.pc_bookmark":
      "Bookmark: In your browser (Ctrl+D or Cmd+D): Save as a bookmark for quick access.",
    "export.mobile_title": "📱 On your Smartphone",
    "export.ios_title": "iOS (iPhone/iPad):",
    "export.ios_1": "1. Open the Files app",
    "export.ios_2": "2. Go to Downloads and tap your emergency plan file",
    "export.ios_3":
      "3. Tap the Share icon (square with arrow) in the top right",
    "export.ios_4": "4. Choose 'Add to Home Screen'",
    "export.ios_5": "5. Enter the name 'Emergency Plan' → Add",
    "export.android_title": "Android:",
    "export.android_1": "1. Open the Files app or 'Downloads'",
    "export.android_2": "2. Tap the file 'My-Emergency-Plan.html'",
    "export.android_3":
      "3. Tap the three dots (⋮) → 'Add to Home Screen' or 'Create Shortcut'",
    "export.android_4":
      "Or: Open file in Chrome → Three-dot menu → 'Add to Home Screen'",
    "export.tip_title": "💡 Tip:",
    "export.tip_desc": "Also save the file:",
    "export.tip_cloud":
      "In the cloud (Google Drive, OneDrive, Dropbox) - so you have access everywhere",
    "export.tip_email": "As an email to yourself as backup",
    "export.tip_private": "In a safe, private place that only you know",
    "export.warning_title": "⚠️ Important:",
    "export.warning_desc":
      "If you update your data (new contacts, content changes), you must re-export the file for the changes to be saved.",
    "export.got_it": "Got it",

    "info.title": "🔒 Your data stays with you!",
    "info.emphasis": "Don't worry – your privacy is protected.",
    "info.data_stored":
      "All data you enter here is stored exclusively in your browser – specifically in your device's localStorage.",
    "info.no_server":
      "No data whatsoever is sent to a server, analyzed, or shared with third parties.",
    "info.clear_data":
      "You can delete all stored data at any time by removing this site's data in your browser settings.",
    "info.how_it_works": "💡 How it works:",
    "info.how_1": "Your texts, contacts and settings stay on your device",
    "info.how_2":
      "When exporting, a standalone HTML file is created – without any server connection",
    "info.how_3": "The app works completely offline (after the first load)",
    "info.how_4": "No internet connection is needed to save or use your data",
    "info.summary_title": "📌 In short:",
    "info.summary":
      "What you write here stays yours. It never leaves your browser – promised!",
    "info.got_it": "Got it",

    "move.up": "Move up",
    "move.down": "Move down",

    "icon.bolt": "Lightning",
    "icon.heart": "Heart",
    "icon.phonebook": "Phone Book",
    "icon.toolbox": "Toolbox",
    "icon.dumbbell": "Dumbbell",
    "icon.quote": "Quote",
    "icon.pill": "Pill",
    "icon.medicalbook": "Medical Book",
    "icon.hospital": "Hospital",
    "icon.brain": "Brain",
    "icon.hands": "Hands",
    "icon.group": "Group",
    "icon.shield": "Shield",
    "icon.parachute": "Parachute",
    "icon.gauge": "Gauge",
    "icon.bandage": "Bandage",
    "icon.pepper": "Pepper",
    "icon.carrot": "Carrot",
    "icon.doctor": "Doctor",
    "icon.masks": "Masks",

    "data.angenehmes_default":
      `- Going for a walk in nature\n` +
      `- Taking a longer walk in the woods or park\n` +
      `- Sitting by the water (lake, river, sea)\n` +
      `- Riding a bike\n` +
      `- Jogging or walking\n` +
      `- Yoga or stretching exercises at home\n` +
      `- Strength training or light gymnastics\n` +
      `- Dancing (alone or in a group)\n` +
      `- Going swimming\n` +
      `- Visiting a sauna or steam bath\n` +
      `- Taking a warm bath with bath salts\n` +
      `- Having a long shower with your favorite shower gel\n` +
      `- Washing and caring for your hair\n` +
      `- Giving yourself a massage or treating yourself to one\n` +
      `- Doing a face mask or manicure/pedicure\n` +
      `- Listening to your favorite music\n` +
      `- Watching a concert or live music video\n` +
      `- Playing an instrument or singing along\n` +
      `- Listening to podcasts or audiobooks\n` +
      `- Reading a good book\n` +
      `- Flipping through magazines or comics\n` +
      `- Watching a movie or a series\n` +
      `- Looking at old photos or digitizing them\n` +
      `- Making a photo album or scrapbook\n` +
      `- Meeting or calling friends\n` +
      `- Spending time with family\n` +
      `- Visiting someone\n` +
      `- Writing a letter or a card\n` +
      `- Cooking something delicious\n` +
      `- Baking (cake, cookies, bread)\n` +
      `- Trying a new recipe\n` +
      `- Enjoying coffee or tea in peace\n` +
      `- Eating something nice (e.g. chocolate, ice cream, fruit)\n` +
      `- Sitting in a café and people watching\n` +
      `- Going shopping (window shopping or buying something nice)\n` +
      `- Buying flowers and putting them in a vase\n` +
      `- Caring for or repotting houseplants\n` +
      `- Gardening or tending to the balcony\n` +
      `- Doing some crafting or DIY\n` +
      `- Painting, drawing or doodling\n` +
      `- Coloring mandalas\n` +
      `- Taking photos (your phone is enough)\n` +
      `- Doing a jigsaw puzzle\n` +
      `- Playing board or card games\n` +
      `- Solving sudoku, crosswords or other puzzles\n` +
      `- Attending a course or workshop (online or offline)\n` +
      `- Learning something new (language, craft, skill)\n` +
      `- Watching a lecture or TED talk\n` +
      `- Meditation or mindfulness exercise\n` +
      `- Progressive muscle relaxation\n` +
      `- Guided relaxation via app or YouTube\n` +
      `- Sitting in the sun or sunbathing\n` +
      `- Enjoying fresh air at an open window\n` +
      `- Lighting candles and enjoying the scent\n` +
      `- Using aromatherapy or essential oils\n` +
      `- Petting, feeding or playing with a pet\n` +
      `- Playing or romping with children\n` +
      `- Doing something for others (small help, gift)\n` +
      `- Donating or doing something good\n` +
      `- Watching a nice series or documentary\n` +
      `- Drinking a warm beverage with cinnamon or spices\n` +
      `- Watching a fireplace video (in bad weather)\n` +
      `- Putting on fresh bed sheets\n` +
      `- Tidying up the apartment and enjoying the result\n` +
      `- Checking off a to-do list and celebrating successes\n` +
      `- Throwing away or sorting out things that feel liberating\n` +
      `- Lighting a nice scented candle or incense stick\n` +
      `- Taking a walk in the rain with an umbrella\n` +
      `- Stargazing or cloud watching\n` +
      `- Visiting a viewpoint\n` +
      `- Taking public transport somewhere just for fun\n` +
      `- Visiting a market or flea market\n` +
      `- Going to a bookstore or library\n` +
      `- Ordering something nice online and looking forward to it\n` +
      `- A bath-time reading evening\n` +
      `- Cooking your favorite meal from the past\n` +
      `- Going through old letters or memorabilia\n` +
      `- Writing a gratitude list\n` +
      `- Saying or affirming something nice to yourself\n` +
      `- Taking a power nap (short afternoon nap)\n` +
      `- Putting your feet up and doing nothing\n` +
      `- Listening to a relaxing radio play\n` +
      `- Watching comedy or funny videos\n` +
      `- Laughing with someone or telling jokes`,
  },
};

// ==================== LANGUAGE MANAGEMENT ====================

let currentLang = "de";

/**
 * Translates a key using the current language.
 * Falls back to German if the key is missing for the current language,
 * then falls back to the key itself if nothing is found.
 * Supports placeholder replacement: {0}, {1}, etc.
 *
 * @param {string} key - The translation key.
 * @param {...string} args - Values to replace {0}, {1}, etc. in the translated string.
 * @returns {string} The translated string with placeholders replaced.
 */
function t(key, ...args) {
  const lang = currentLang;
  let str = TRANSLATIONS[lang]?.[key];

  if (str === undefined) {
    // Fallback to German
    str = TRANSLATIONS.de?.[key];
  }

  if (str === undefined) {
    // Ultimate fallback: return the key itself
    return key;
  }

  // Replace {0}, {1}, {2}, ... with the provided arguments
  if (args.length > 0) {
    args.forEach((arg, i) => {
      str = str.replace(new RegExp(`\\{${i}\\}`, "g"), arg);
    });
  }

  return str;
}

/**
 * Changes the current language, updates the page, and persists the choice.
 *
 * @param {string} lang - Language code ('de' or 'en').
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("notfallplan-lang", lang);
  translatePage();
}

/**
 * Translates all elements on the page with data-i18n, data-i18n-placeholder,
 * and data-i18n-title attributes.
 * Also re-renders sections and contacts if those functions exist.
 */
function translatePage() {
  // Update document title
  const titleKey = "app.title";
  const titleStr = t(titleKey);
  if (document.title !== titleStr) {
    document.title = titleStr;
  }

  // Update static elements with data-i18n (textContent)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Update breathing exercises with translated values
  if (typeof BREATHING_EXERCISES !== "undefined") {
    var exercises = getTranslatedBreathingExercises();
    // Copy translated values into the existing BREATHING_EXERCISES array
    exercises.forEach(function (ex) {
      var existing = BREATHING_EXERCISES.find(function (e) {
        return e.id === ex.id;
      });
      if (existing) {
        existing.title = ex.title;
        existing.desc = ex.desc;
        existing.phases = ex.phases;
      }
    });
  }

  // Re-render sections (creates dynamic elements with data-i18n-* attributes)
  if (typeof renderAllSections === "function") {
    renderAllSections();
  }

  // Re-render contacts if available
  if (typeof renderContacts === "function") {
    renderContacts();
  }

  // Apply translations to dynamic elements (placeholders & titles)
  applyDynamicTranslations();
}

/**
 * Re-applies translations to data-i18n-placeholder and data-i18n-title elements.
 * Call this after any DOM manipulation that creates new elements with
 * these attributes (e.g. after renderAllSections() outside of translatePage()).
 */
function applyDynamicTranslations() {
  // Update elements with data-i18n-placeholder (placeholder attribute)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  // Update elements with data-i18n-title (title attribute)
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    el.title = t(key);
  });
}

/**
 * Returns translated breathing exercises based on current language.
 */
function getTranslatedBreathingExercises() {
  return [
    {
      id: "box",
      title: t("breathing.box.title"),
      desc: t("breathing.box.desc"),
      phases: [
        t("breathing.phases.in"),
        t("breathing.phases.hold"),
        t("breathing.phases.out"),
        t("breathing.phases.hold"),
      ],
      durations: [4000, 4000, 4000, 4000],
    },
    {
      id: "478",
      title: t("breathing.478.title"),
      desc: t("breathing.478.desc"),
      phases: [
        t("breathing.phases.in"),
        t("breathing.phases.hold"),
        t("breathing.phases.long_out"),
      ],
      durations: [4000, 7000, 8000],
    },
    {
      id: "coherent",
      title: t("breathing.coherent.title"),
      desc: t("breathing.coherent.desc"),
      phases: [t("breathing.phases.in"), t("breathing.phases.out")],
      durations: [5500, 5500],
    },
  ];
}

/**
 * Toggles between 'de' and 'en' languages.
 * Called by the language button in the action bar.
 */
function toggleLanguage() {
  var newLang = currentLang === "de" ? "en" : "de";
  setLanguage(newLang);
}

/**
 * Detects the preferred language with the following priority:
 * 1. Saved language in localStorage
 * 2. Browser's navigator.language
 * 3. Default fallback 'de'
 *
 * @returns {string} Detected language code ('de' or 'en').
 */
function detectLanguage() {
  // 1. Check localStorage
  const saved = localStorage.getItem("notfallplan-lang");
  if (saved && TRANSLATIONS[saved]) {
    return saved;
  }

  // 2. Check browser language
  if (navigator.language) {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (TRANSLATIONS[browserLang]) {
      return browserLang;
    }
  }

  // 3. Default fallback
  return "de";
}
