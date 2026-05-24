// =========================
// DATA PRINCIPALE DES VILLES
// =========================
// Chaque objet représente une ville touristique marocaine
// avec son identifiant, son nom, son image et une description courte.
const cities = [
    { id: 'marrakech', name: 'Marrakech', tag: 'Impériale', img: 'images/accueil/Marrakech.jpg', desc: 'La cité ocre, joyau des Almohades, où le luxe des palais côtoie l\'effervescence des souks.' },
    { id: 'agadir', name: 'Agadir', tag: 'Solaire', img: 'images/accueil/Agadir , Morocco.jpg', desc: 'La première station balnéaire du pays avec sa baie s\'étendant à perte de vue et son ensoleillement permanent.' },
    { id: 'fes', name: 'Fès', tag: 'Spirituelle', img: 'images/accueil/Fès, Morocco 🇲🇦.jpg', desc: 'Le centre intellectuel du Maroc, abritant la plus ancienne université au monde, la Quaraouiyine.' },
    { id: 'chefchaouen', name: 'Chefchaouen', tag: 'Azurée', img: 'images/accueil/Chefchaouen, Morocco 🇲🇦.jpg', desc: 'Un havre de paix azuré niché dans le Rif, célèbre pour son atmosphère poétique et sereine.' },
    { id: 'essaouira', name: 'Essaouira', tag: 'Bohème', img: 'images/accueil/essaouira.jpg', desc: 'L\'ancienne Mogador, port de pêche fortifié où les vents alizés soufflent un air de liberté.' },
    { id: 'casablanca', name: 'Casablanca', tag: 'Moderne', img: 'images/accueil/Casa.jpg', desc: 'Une métropole tournée vers l\'avenir, symbole du dynamisme économique et architectural.' },
    { id: 'rabat', name: 'Rabat', tag: 'Lumière', img: 'images/accueil/Rabat.jpg', desc: 'La capitale administrative, une ville verte et élégante riche en monuments impériaux.' },
    { id: 'tanger', name: 'Tanger', tag: 'Mythique', img: 'images/accueil/Tanger, Morocco.jpg', desc: 'Carrefour des civilisations au seuil du Détroit, muse éternelle des artistes et écrivains.' },
    { id: 'ouarzazate', name: 'Ouarzazate', tag: 'Cinéma', img: 'images/accueil/Ouarzazate.jpg', desc: 'La porte du grand Sud et le Hollywood africain, célèbre pour ses kasbahs majestueuses.' },
    { id: 'merzouga', name: 'Merzouga', tag: 'Sahara', img: 'images/accueil/Merzouga desert 🇲🇦.jpg', desc: 'Les dunes géantes de l\'Erg Chebbi, pour une immersion totale dans la magie du désert.' },
    { id: 'ifrane', name: 'Ifrane', tag: 'Nature', img: 'images/accueil/Ifrane city.jpg', desc: 'Un paysage alpin au cœur du Moyen-Atlas, entouré de forêts de cèdres millénaires.' },
    { id: 'dakhla', name: 'Dakhla', tag: 'Lagune', img: 'images/accueil/Dakhla.jpg', desc: 'Une perle rare entre désert et océan, paradis mondial pour les sports de glisse.' }
];

// =========================
// VILLES AYANT UNE PAGE DÉDIÉE
// =========================
// Si la ville existe dans cette liste,
// alors un clic ouvrira directement sa page personnalisée.
const clickMap = {
    'merzouga': true,
    'ifrane': true,
    'ouarzazate': true,
    'chefchaouen': true,
    'marrakech': true,
    'agadir': true,
    'fes': true,
    'essaouira': true,
    'dakhla': true,
    'casablanca': true,
    'rabat': true,
    'tanger': true
};

// =========================
// AFFICHAGE DES CARTES VILLES
// =========================
// Cette partie génère dynamiquement toutes les cartes des villes
// dans la grille principale de la page.
const container = document.getElementById('villes-container');

cities.forEach(city => {

    // Selon la ville, on décide si on ouvre une page complète
    // ou juste une fenêtre modal.
    const clickAction = clickMap[city.id]
        ? `openCity('${city.id}')`
        : `openCityModal('${city.id}')`;

    // Ajout du HTML directement dans le container
    container.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 fade-in">

            <!-- Carte d'une ville -->
            <div class="city-grid-card" onclick="${clickAction}">

                <!-- Image de la ville -->
                <div class="city-img-top">
                    <img src="${city.img}" alt="${city.name}">

                    <!-- Badge catégorie -->
                    <span class="city-cat-badge">${city.tag}</span>
                </div>

                <!-- Corps de la carte -->
                <div class="city-card-body">

                    <!-- Nom de la ville -->
                    <h3 class="city-card-title">${city.name}</h3>

                    <!-- Petite description -->
                    <p class="city-card-text">${city.desc.substring(0, 80)}...</p>

                    <!-- Footer -->
                    <div class="city-card-footer">

                        <!-- Note fictive -->
                        <span class="city-rating">
                            <i class="fas fa-star"></i> 4.9
                        </span>

                        <!-- Boutons -->
                        <div class="city-buttons-wrapper">

                            <!-- Bouton explorer -->
                            <button class="btn-city"
                                onclick="event.stopPropagation(); ${clickAction}">
                                Explorer
                                <i class="fas fa-arrow-right ms-1"></i>
                            </button>

                            <!-- Bouton hôtels -->
                            <button class="btn-city btn-hotel"
                                onclick="event.stopPropagation(); openHotelsModal('${city.id}')">
                                Hôtels
                                <i class="fas fa-hotel ms-1"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});


// =========================
// GESTION DU SCROLL NAVBAR
// =========================
// Lorsque l'utilisateur descend dans la page,
// la navbar change d'apparence.
window.addEventListener('scroll', () => {

    const nav = document.getElementById('mainNav');

    // Si on dépasse 100px de scroll
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// =========================
// ANIMATIONS AU SCROLL
// =========================
// IntersectionObserver permet d'animer les éléments
// lorsqu'ils deviennent visibles à l'écran.
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        // Dès qu'un élément apparaît
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });

}, observerOptions);

// On applique l'observer à tous les éléments fade-in
document.querySelectorAll('.fade-in')
    .forEach(el => observer.observe(el));


// =========================
// PARTICULES DU HERO
// =========================
// Création automatique des petites particules animées
// dans le header principal.
const particlesContainer = document.getElementById('particles-container');

for (let i = 0; i < 25; i++) {

    const particle = document.createElement('div');

    particle.className = 'particle';

    // Taille aléatoire
    const size = Math.random() * 10 + 5 + 'px';

    particle.style.width = size;
    particle.style.height = size;

    // Position aléatoire
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    // Animation aléatoire pour éviter un effet répétitif
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

    particlesContainer.appendChild(particle);
}


// =========================
// MODAL DES VILLES
// =========================
// Cette fonction ouvre une fenêtre modal
// pour les villes sans page dédiée.
const cityModal = new bootstrap.Modal(document.getElementById('cityModal'));

function openCityModal(id) {

    // Recherche de la ville correspondante
    const city = cities.find(c => c.id === id);

    // Titre du modal
    document.getElementById('modalCityTitle').innerText = city.name;

    const modalBody = document.getElementById('modalBody');

    // Contenu HTML dynamique du modal
    modalBody.innerHTML = `
        <div class="tab-content" id="cityTabContent">

            <!-- Onglet présentation -->
            <div class="tab-pane fade show active" id="pres">

                <div class="row">

                    <div class="col-md-6">

                        <h4 class="fw-bold mb-3">
                            L'Essence de ${city.name}
                        </h4>

                        <p>${city.desc}</p>

                        <!-- Infos météo -->
                        <div class="mt-4 p-3 bg-light rounded-3">

                            <p class="mb-1">
                                <i class="fas fa-temperature-high text-danger me-2"></i>
                                <strong>Climat :</strong>
                                Méditerranéen (24°C moy.)
                            </p>

                            <p class="mb-0">
                                <i class="fas fa-sun text-warning me-2"></i>
                                <strong>Ensoleillement :</strong>
                                300 jours/an
                            </p>

                        </div>
                    </div>

                    <!-- Image -->
                    <div class="col-md-6">
                        <img src="${city.img}"
                             class="img-fluid rounded-4 shadow"
                             alt="${city.name}">
                    </div>

                </div>
            </div>
        </div>
    `;

    // Affichage du modal Bootstrap
    cityModal.show();
}


// =========================
// OUVERTURE DES PAGES VILLES
// =========================
// Utilisé pour les villes ayant une page complète.
function openCity(id) {

    const page = document.getElementById('city-' + id);

    if (page) {

        // Affichage de la page
        page.classList.add('open');

        // Empêche le scroll derrière
        document.body.style.overflow = 'hidden';

        // Remonte la page en haut
        page.scrollTop = 0;
    }
}


// =========================
// FERMETURE DES PAGES
// =========================
function closeCity() {

    document.querySelectorAll('.city-page')
        .forEach(p => p.classList.remove('open'));

    document.body.style.overflow = '';
}


// =========================
// FERMETURE AVEC ECHAP
// =========================
// L'utilisateur peut fermer les pages ouvertes
// en appuyant sur la touche Echap.
document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        closeCity();
    }
});


// =========================
// CURSEUR PERSONNALISÉ
// =========================
// Le petit cercle suit la souris.
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


// Effet hover du curseur sur certains éléments interactifs
document.querySelectorAll('a, button, .city-grid-card, .theme-card, .transport-card')
    .forEach(el => {

        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });


// =========================
// EFFET PARALLAX HERO
// =========================
// L'image du hero se déplace légèrement
// pendant le scroll pour donner un effet dynamique.
window.addEventListener('scroll', () => {

    const scrolled = window.pageYOffset;

    const hero = document.querySelector('.hero');

    if (scrolled < window.innerHeight) {

        hero.style.backgroundPositionY =
            (scrolled * 0.5) + 'px';
    }
});


// =========================
// SMOOTH SCROLL
// =========================
// Défilement fluide entre les sections.
document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const targetId = this.getAttribute('href');

            // Ignore si href="#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


// =========================
// DONNÉES DES HÔTELS
// =========================
// Chaque ville possède une liste d'hôtels prestigieux.
const hotelsData = {

    marrakech: [
        {
            name: "La Mamounia",
            type: "Palace historique 5★",
            rating: "4.9",
            desc: "Un havre de paix mythique alliant artisanat marocain d'exception et élégance moderne.",
            img: "images/marrakech/La Mamounia.jpg"
        }
    ]

    // etc...
};


// =========================
// INITIALISATION MODAL HOTELS
// =========================
let hotelsModal;

document.addEventListener('DOMContentLoaded', () => {

    hotelsModal =
        new bootstrap.Modal(
            document.getElementById('hotelsModal')
        );
});


// =========================
// OUVERTURE MODAL HOTELS
// =========================
// Affiche les hôtels de la ville sélectionnée.
function openHotelsModal(cityId) {

    // Recherche ville
    const city = cities.find(c => c.id === cityId);

    if (!city) return;

    // Titre dynamique
    document.getElementById('modalHotelsTitle').innerHTML =
        `Hôtels & Riads de Prestige —
        <span style="color: var(--dore);">
            ${city.name}
        </span>`;

    const modalBody =
        document.getElementById('modalHotelsBody');

    const hotels = hotelsData[cityId] || [];

    // Si aucun hôtel
    if (hotels.length === 0) {

        modalBody.innerHTML = `
            <div class="text-center p-5">

                <i class="fas fa-hotel fa-3x text-muted mb-3"></i>

                <p class="text-muted">
                    Aucun hôtel n'est actuellement répertorié pour cette ville.
                </p>

            </div>
        `;

    } else {

        let html = '<div class="hotels-list">';

        hotels.forEach(hotel => {

            // Génération automatique du lien Booking
            const bookingUrl =
                `https://www.booking.com/searchresults.fr.html?ss=${
                    encodeURIComponent(hotel.name + ' ' + city.name)
                }`;

            html += `
                <div class="hotel-card">

                    <!-- Image hôtel -->
                    <div class="hotel-img-wrap"
                         style="padding: 0; overflow: hidden;">

                        <img src="${hotel.img}"
                             alt="${hotel.name}"
                             style="width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    border-radius: 12px;">
                    </div>

                    <!-- Infos hôtel -->
                    <div class="hotel-details">

                        <div class="hotel-header">

                            <div>
                                <h4 class="hotel-name">${hotel.name}</h4>
                                <p class="hotel-type">${hotel.type}</p>
                            </div>

                            <!-- Note -->
                            <span class="hotel-rating-badge">
                                <i class="fas fa-star text-warning me-1"></i>
                                ${hotel.rating}
                            </span>

                        </div>

                        <!-- Description -->
                        <p class="hotel-desc">${hotel.desc}</p>

                        <!-- Bouton réservation -->
                        <div class="hotel-footer">

                            <a href="${bookingUrl}"
                               target="_blank"
                               class="btn-hotel-book">

                                Réserver
                                <i class="fas fa-external-link-alt ms-1"></i>

                            </a>

                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div>';

        modalBody.innerHTML = html;
    }

    // Affichage modal
    if (hotelsModal) {
        hotelsModal.show();
    }
}


// =========================
// CONVERTISSEUR DE DEVISES
// =========================
// Taux approximatifs par rapport au MAD.
const exchangeRates = {
    EUR: 10.80,
    USD: 10.05,
    GBP: 12.75,
    CAD: 7.35,
    CHF: 11.10
};


// =========================
// INITIALISATION DU CONVERTISSEUR
// =========================
document.addEventListener('DOMContentLoaded', () => {

    const foreignSelect =
        document.getElementById('foreignCurrencySelect');

    const foreignInput =
        document.getElementById('foreignAmountInput');

    const madInput =
        document.getElementById('madAmountInput');

    const rateText =
        document.getElementById('exchangeRateText');

    const swapBtn =
        document.getElementById('swapCurrencyBtn');

    // Vérifie que les éléments existent
    if (!foreignSelect || !foreignInput ||
        !madInput || !rateText || !swapBtn) return;


    // Mise à jour du texte du taux
    function updateRateDisplay() {

        const currency = foreignSelect.value;

        const rate = exchangeRates[currency];

        rateText.innerText =
            `1 ${currency} = ${rate.toFixed(2)} MAD`;
    }


    // Conversion devise étrangère vers MAD
    function convertForeignToMad() {

        const currency = foreignSelect.value;

        const rate = exchangeRates[currency];

        const amount = parseFloat(foreignInput.value);

        if (isNaN(amount) || amount < 0) {

            madInput.value = '';

            return;
        }

        madInput.value = (amount * rate).toFixed(2);
    }


    // Conversion MAD vers devise étrangère
    function convertMadToForeign() {

        const currency = foreignSelect.value;

        const rate = exchangeRates[currency];

        const amount = parseFloat(madInput.value);

        if (isNaN(amount) || amount < 0) {

            foreignInput.value = '';

            return;
        }

        foreignInput.value = (amount / rate).toFixed(2);
    }


    // Événement lorsqu'on tape dans le champ devise
    foreignInput.addEventListener('input', convertForeignToMad);

    // Événement lorsqu'on tape dans le champ MAD
    madInput.addEventListener('input', convertMadToForeign);

    // Changement devise
    foreignSelect.addEventListener('change', () => {

        updateRateDisplay();

        convertForeignToMad();
    });


    // Bouton échange des montants
    swapBtn.addEventListener('click', () => {

        const foreignVal = foreignInput.value;

        const madVal = madInput.value;

        foreignInput.value = madVal;

        convertForeignToMad();
    });


    // Valeurs par défaut au chargement
    foreignInput.value = '10';

    convertForeignToMad();

    updateRateDisplay();
});


// =========================
// CARTE INTERACTIVE LEAFLET
// =========================
// Affiche toutes les villes du projet sur une carte du Maroc.
document.addEventListener('DOMContentLoaded', () => {

    const mapElement =
        document.getElementById('interactive-map');

    if (!mapElement) return;


    // Coordonnées géographiques des villes
    const cityCoords = {

        marrakech: [31.6295, -7.9811],
        agadir: [30.4278, -9.5981],
        fes: [34.0181, -5.0078]

        // etc...
    };


    // Création de la carte
    const map = L.map('interactive-map', {

        scrollWheelZoom: false

    }).setView([29.0, -8.8], 5.5);


    // Fond de carte
    L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
            maxZoom: 18,
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
        }
    ).addTo(map);


    // Icône personnalisée
    const customIcon = L.divIcon({

        html: `
            <div class="map-dot"></div>
            <i class="fas fa-map-marker-alt text-danger pin-icon"></i>
        `,

        className: 'custom-pin',

        iconSize: [26, 26],

        iconAnchor: [13, 13]
    });


    // Ajout des marqueurs villes
    cities.forEach(city => {

        const coords = cityCoords[city.id];

        if (coords) {

            const marker =
                L.marker(coords, { icon: customIcon })
                    .addTo(map);

            // Tooltip au survol
            marker.bindTooltip(
                `<strong>${city.name}</strong>`,
                {
                    permanent: false,
                    direction: 'top',
                    className: 'map-tooltip',
                    offset: [0, -15]
                }
            );
        }
    });
});


// =========================
// FORMULAIRE TEMOIGNAGES
// =========================
document.addEventListener('DOMContentLoaded', () => {

    // Sélection des étoiles
    const stars =
        document.querySelectorAll('#star-rating i');

    const noteInput =
        document.getElementById('t-note');


    // Gestion du hover et du clic des étoiles
    stars.forEach(star => {

        // Hover
        star.addEventListener('mouseover', function () {

            const value =
                this.getAttribute('data-value');

            stars.forEach(s => {

                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });


        // Sortie souris
        star.addEventListener('mouseout', function () {

            stars.forEach(s =>
                s.classList.remove('hover'));
        });


        // Sélection note
        star.addEventListener('click', function () {

            const value =
                this.getAttribute('data-value');

            noteInput.value = value;

            document.getElementById('note-error')
                .style.display = 'none';

            stars.forEach(s => {

                if (s.getAttribute('data-value') <= value) {

                    s.classList.add('active');

                    s.classList.remove('far');

                    s.classList.add('fas');

                } else {

                    s.classList.remove('active');

                    s.classList.add('far');

                    s.classList.remove('fas');
                }
            });
        });
    });


    // Validation du formulaire
    const form =
        document.getElementById('temoignage-form');

    if (form) {

        form.addEventListener('submit', function (e) {

            e.preventDefault();

            let isValid = true;

            // Validation Bootstrap
            if (!this.checkValidity()) {
                isValid = false;
            }

            this.classList.add('was-validated');


            // Vérifie si la note existe
            if (noteInput.value === "0") {

                document.getElementById('note-error')
                    .style.display = 'block';

                isValid = false;
            }


            // Si tout est valide
            if (isValid) {

                const btn =
                    this.querySelector('button[type="submit"]');

                const originalText = btn.innerHTML;

                // Animation chargement
                btn.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Envoi...';

                btn.disabled = true;


                // Simulation envoi serveur
                setTimeout(() => {

                    form.style.display = 'none';

                    document.getElementById('temoignage-success')
                        .classList.remove('d-none');

                    btn.innerHTML = originalText;

                    btn.disabled = false;

                    this.classList.remove('was-validated');

                    alert("Votre formulaire a bien été soumis !");

                }, 1000);
            }
        });
    }
});


// =========================
// RESET FORMULAIRE
// =========================
// Réinitialise complètement le formulaire témoignage.
function resetTemoignageForm() {

    const form =
        document.getElementById('temoignage-form');

    form.reset();

    form.style.display = 'block';


    // Reset note
    document.getElementById('t-note').value = '0';


    // Reset étoiles
    document.querySelectorAll('#star-rating i')
        .forEach(s => {

            s.classList.remove('active');

            s.classList.add('far');

            s.classList.remove('fas');
        });


    // Cache le message succès
    document.getElementById('temoignage-success')
        .classList.add('d-none');
}