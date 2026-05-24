// Data des villes
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

// Villes avec page dédiée
const clickMap = { 'merzouga': true, 'ifrane': true, 'ouarzazate': true, 'chefchaouen': true, 'marrakech': true, 'agadir': true, 'fes': true, 'essaouira': true, 'dakhla': true , 'casablanca': true, 'rabat': true, 'tanger': true};

// Rendu des villes dans la grille
const container = document.getElementById('villes-container');
cities.forEach(city => {
    const clickAction = clickMap[city.id]
        ? `openCity('${city.id}')`
        : `openCityModal('${city.id}')`;

    container.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 fade-in">
            <div class="city-grid-card" onclick="${clickAction}">
                <div class="city-img-top">
                    <img src="${city.img}" alt="${city.name}">
                    <span class="city-cat-badge">${city.tag}</span>
                </div>
                <div class="city-card-body">
                    <h3 class="city-card-title">${city.name}</h3>
                    <p class="city-card-text">${city.desc.substring(0, 80)}...</p>
                    <div class="city-card-footer">
                        <span class="city-rating"><i class="fas fa-star"></i> 4.9</span>
                        <div class="city-buttons-wrapper">
                            <button class="btn-city" onclick="event.stopPropagation(); ${clickAction}">Explorer <i class="fas fa-arrow-right ms-1"></i></button>
                            <button class="btn-city btn-hotel" onclick="event.stopPropagation(); openHotelsModal('${city.id}')">Hôtels <i class="fas fa-hotel ms-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Gestion du Scroll (Navbar & Fade-in)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer pour les animations au scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Particules Hero
const particlesContainer = document.getElementById('particles-container');
for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 10 + 5 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Logic Modal (villes sans page dédiée)
const cityModal = new bootstrap.Modal(document.getElementById('cityModal'));
function openCityModal(id) {
    const city = cities.find(c => c.id === id);
    document.getElementById('modalCityTitle').innerText = city.name;
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="tab-content" id="cityTabContent">
            <div class="tab-pane fade show active" id="pres">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="fw-bold mb-3">L'Essence de ${city.name}</h4>
                        <p>${city.desc}</p>
                        <div class="mt-4 p-3 bg-light rounded-3">
                            <p class="mb-1"><i class="fas fa-temperature-high text-danger me-2"></i> <strong>Climat :</strong> Méditerranéen (24°C moy.)</p>
                            <p class="mb-0"><i class="fas fa-sun text-warning me-2"></i> <strong>Ensoleillement :</strong> 300 jours/an</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="${city.img}" class="img-fluid rounded-4 shadow" alt="${city.name}">
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="lieux">
                <h4 class="fw-bold mb-4">Lieux Incontournables</h4>
                <ul class="list-unstyled">
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-3"></i> La Médina historique et ses labyrinthes secrets.</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-3"></i> Les palais royaux et jardins botaniques.</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-3"></i> Les souks traditionnels et artisanat local.</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="gastro">
                <h4 class="fw-bold mb-4">Saveurs de ${city.name}</h4>
                <p>Dégustez les spécialités locales uniques de la région, du tajine traditionnel aux pâtisseries fines à la fleur d'oranger.</p>
            </div>
            <div class="tab-pane fade" id="art">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <h4 class="fw-bold mb-4">Artisanat & Shopping</h4>
                        <p>Rencontrez les maîtres artisans dans leurs ateliers : maroquinerie, poterie, tissage et travail du cuivre.</p>
                    </div>
                    <div class="col-md-5">
                        <img src="artisanat_zellige_detail_1778374904012.png" class="img-fluid rounded-4 shadow" alt="Artisanat">
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="fest">
                <h4 class="fw-bold mb-4">Festivals & Événements</h4>
                <p>Agenda culturel riche tout au long de l'année. Ne manquez pas les festivals de musique et les fêtes populaires locales.</p>
            </div>
            <div class="tab-pane fade" id="cult">
                <h4 class="fw-bold mb-4">Culture & Traditions</h4>
                <p>Plongez dans l'histoire de la cité, ses coutumes ancestrales et l'hospitalité légendaire de ses habitants.</p>
            </div>
            <div class="tab-pane fade" id="nat">
                <h4 class="fw-bold mb-4">Nature & Activités</h4>
                <p>Des excursions dans l'Atlas aux moments de détente sur les plages vierges de la région.</p>
            </div>
            <div class="tab-pane fade" id="inf">
                <h4 class="fw-bold mb-4">Infos Pratiques</h4>
                <p><strong>Accès :</strong> Aéroport International à 15 min du centre.<br>
                <strong>Transport :</strong> Taxis, bus et calèches traditionnelles.<br>
                <strong>Hébergement :</strong> Large choix du riad authentique au palace 5 étoiles.</p>
            </div>
        </div>
    `;
    cityModal.show();
}

// Fonctions pages dédiées (Merzouga, Ifrane, Ouarzazate, Chefchaouen, Marrakech, Agadir, Fès, Essaouira, Dakhla)
function openCity(id) {
    const page = document.getElementById('city-' + id);
    if (page) {
        page.classList.add('open');
        document.body.style.overflow = 'hidden';
        page.scrollTop = 0;
    }
}

function closeCity() {
    document.querySelectorAll('.city-page').forEach(p => p.classList.remove('open'));
    document.body.style.overflow = '';
}

// Fermeture avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCity();
});

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .city-grid-card, .theme-card, .transport-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// Parallax Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Données des hôtels et riads prestigieux par ville
const hotelsData = {
    marrakech: [
        { name: "La Mamounia", type: "Palace historique 5★", rating: "4.9", desc: "Un havre de paix mythique alliant artisanat marocain d'exception et élégance moderne.", img: "images/marrakech/La Mamounia.jpg" },
        { name: "Royal Mansour Marrakech", type: "Luxe absolu 5★", rating: "5.0", desc: "Un chef-d'œuvre architectural composé de riads privés d'exception avec majordome.", img: "images/marrakech/The Royal Mansour in Marrakech.jpg" },
        { name: "Kenzi Menara Palace", type: "Riad historique de prestige", rating: "4.8", desc: "Une demeure du XVIIIe siècle restaurée dans les règles de l'art par un antiquaire réputé.", img: "images/accueil/Kenzi Menara Palace, Marrakech.jpg" }
    ],
    agadir: [
        { name: "Sofitel Agadir Royal Bay Resort", type: "Luxe & Bien-être 5★", rating: "4.7", desc: "Hôtel d'exception face à l'océan, alliant soins thalasso et design contemporain épuré.", img: "images/agadir/Sofitel Agadir Royal Bay Resort.jpg" },
        { name: "Hyatt Place Taghazout Bay", type: "Resort & Surf 5★", rating: "4.8", desc: "Niché sur les hauteurs de Taghazout, offrant une vue imprenable sur la baie et l'océan.", img: "images/accueil/Hyatt Place Taghazout Bay.jpg" },
        { name: "Riad Villa Blanche", type: "Boutique Hôtel de charme", rating: "4.6", desc: "Une oasis de calme et de raffinement à quelques pas de la magnifique plage d'Agadir.", img: "images/accueil/Riad .jpg" }
    ],
    fes: [
        { name: "Riad Fès - Relais & Châteaux", type: "Splendeur arabo-andalouse", rating: "4.9", desc: "Un palais prestigieux au cœur de la médina, alliant modernité et architecture traditionnelle.", img: "images/accueil/Riad Fès Hotel, Fez 5 Star Hotel Fez.jpg" },
        { name: "Barceló Fès Medina", type: "Boutique Riad intime", rating: "4.8", desc: "Un joyau de design mariant la noblesse des matériaux traditionnels et le confort moderne.", img: "images/accueil/Barceló Fès Medina.jpg" },
        { name: "Palais Faraj Suites & Spa", type: "Palace de charme 5★", rating: "4.7", desc: "Offre une vue panoramique époustouflante sur la plus grande médina médiévale du monde.", img: "images/fes/Palais Faraj Suites & Spa.jpg" }
    ],
    chefchaouen: [
        { name: "Lina Ryad & Spa", type: "Havre de paix au cœur de la médina", rating: "4.8", desc: "Un riad d'exception avec piscine intérieure chauffée et spa, tout en nuances de bleu.", img: "images/chefchaouen/LINA RYAD & SPA r.jpg" },
        { name: "Dar Echchaouen", type: "Charme & Tradition", rating: "4.7", desc: "Idéalement situé, offrant une décoration raffinée et un magnifique patio avec piscine.", img: "images/chefchaouen/Dar Echchaouen.jpg" },
        { name: "Casa Hassan", type: "Riad historique familial", rating: "4.5", desc: "Une demeure traditionnelle chaleureuse réputée pour sa table d'hôtes et son accueil unique.", img: "images/accueil/Riad .jpg" }
    ],
    essaouira: [
        { name: "Heure Bleue Palais", type: "Demeure historique 5★", rating: "4.8", desc: "Ancien palais d'un caïd, ce riad luxueux offre une magnifique piscine chauffée sur le toit.", img: "images/accueil/Heure Bleue Palais.jpg" },
        { name: "Atlas Essaouira & Spa", type: "Oasis de sérénité", rating: "4.9", desc: "Un ksar de charme niché au cœur d'un jardin luxuriant, idéal pour déconnecter.", img: "images/essaouira/Atlas Essaouira & Spa .jpg" },
        { name: "Villa Quieta", type: "Riad face à l'océan", rating: "4.6", desc: "Bâtie sur la falaise de la médina, cette demeure offre un panorama grandiose sur les vagues.", img: "images/accueil/Villa Quieta.jpg" }
    ],
    casablanca: [
        { name: "Four Seasons Hotel Casablanca", type: "Luxe en bord de mer 5★", rating: "4.8", desc: "Hôtel contemporain prestigieux offrant une vue panoramique sur l'océan Atlantique.", img: "images/accueil/Four seasons hotel.jpg" },
        { name: "Barceló Anfa Casablanca", type: "Palace mythique 5★", rating: "4.9", desc: "Le renouveau d'une icône de la ville, incarnant le luxe ultime et l'art de recevoir.", img: "images/accueil/Hotel Barcelo Anfa Casablanca .jpg" },
        { name: "ONOMO Airport Casablanca", type: "Design moderne 5★", rating: "4.6", desc: "Situé sur le boulevard d'Anfa, mariant style Art déco et prestations haut de gamme.", img: "images/accueil/ONOMO Airport Casablanca.jpg" }
    ],
    rabat: [
        { name: "Fairmont Marina Rabat", type: "Oasis de verdure", rating: "4.8", desc: "Une ancienne demeure entourée d'un immense jardin d'orangers, de fleurs et de calme.", img: "images/accueil/Fairmont Marina Rabat .jpg" },
        { name: "Sofitel Rabat Jardin des Roses", type: "Palace luxueux 5★", rating: "4.7", desc: "Niché dans un parc de 8 hectares, célèbre pour ses jardins de roses et son confort ultime.", img: "images/rabat/SOFITEL RABAT JARDIN DES ROSES.jpg" },
        { name: "Riad Kalaa", type: "Demeure du XVIIe siècle", rating: "4.6", desc: "Niché au cœur de la médina, un riad fortifié offrant calme historique et élégance.", img: "images/accueil/Riad .jpg" }
    ],
    tanger: [
        { name: "Marina Bay Tangier", type: "Hôtel légendaire 5★", rating: "4.6", desc: "Établissement mythique de style hispano-mauresque ayant accueilli les plus grandes stars.", img: "images/accueil/HOTEL MARINA BAY ANGIER CITY.jpg" },
        { name: "Fairmont Tazi Palace Tanger", type: "Luxe souverain 5★", rating: "4.9", desc: "Niché sur les collines, un palais majestueux offrant une vue unique sur la vieille ville.", img: "images/accueil/Fairmont Tazi Palace Tangier.jpg" },
        { name: "Hilton Tangier Al Houara", type: "Maison d'hôtes de charme", rating: "4.7", desc: "Un havre de paix culturel au cœur de la Kasbah, décoré d'œuvres d'art locales.", img: "images/accueil/Hilton Tangier Al Houara Resort & Spa.jpg" }
    ],
    ouarzazate: [
        { name: "Le Berbère Palace", type: "Luxe saharien 5★", rating: "4.7", desc: "L'hôtel de prédilection des stars du cinéma mondial lors des tournages à Ouarzazate.", img: "images/ouarzazate/Le Berbère Palace _ Accueil _ Hôtel Ouarzazate.jpg" },
        { name: "Oscar Hotel by Atlas Studios", type: "Riad historique au Ksar", rating: "4.6", desc: "Ancienne maison du pacha du XVIIe siècle, au cœur de la Kasbah de Taourirt.", img: "images/accueil/Oscar Hotel by Atlas Studios.jpg" },
        { name: "Temple des Arts", type: "Boutique Hôtel Cinéma 5★", rating: "4.8", desc: "Chaque suite est une œuvre d'art inspirée des grands chefs-d'œuvre du cinéma.", img: "images/accueil/Le Temple Des Arts, Ouarzazate .jpg" }
    ],
    merzouga: [
        { name: "Merzouga Luxury Desert Camp", type: "Bivouac de luxe absolu", rating: "4.9", desc: "Vivez la magie du Sahara sous des tentes impériales tout confort au milieu des dunes.", img: "images/accueil/Merzouga desert 🇲🇦.jpg" },
        { name: "Kasbah Mohayut", type: "Hôtel traditionnel en pisé", rating: "4.7", desc: "Détendez-vous au bord de la piscine face aux dunes dorées de l'Erg Chebbi.", img: "images/accueil/Riad .jpg" },
        { name: "Riad Madu", type: "Élégance & Authenticité", rating: "4.8", desc: "Un riad d'exception aux portes du désert offrant des chambres spacieuses et raffinées.", img: "images/accueil/sahara.jpg" }
    ],
    ifrane: [
        { name: "Michlifen Resort & Golf", type: "Chalet de luxe alpin 5★", rating: "4.9", desc: "Un resort thermal d'exception digne des plus grands chalets suisses dans le Moyen-Atlas.", img: "images/accueil/Ifrane city.jpg" },
        { name: "Hôtel Farah Inn Ifrane", type: "Résidence confortable", rating: "4.3", desc: "Idéal pour les familles, offrant des chalets équipés au cœur de la forêt de cèdres.", img: "images/accueil/Amazigh Atlas.jpg" },
        { name: "Hôtel Chamonix", type: "Style chalet montagnard", rating: "4.2", desc: "Un hôtel historique et accueillant en plein cœur de la ville d'Ifrane.", img: "images/accueil/Atlas Mountains.jpg" }
    ],
    dakhla: [
        { name: "La Crique Nature & Spa", type: "Éco-lodge d'exception 5★", rating: "4.8", desc: "Des suites prestigieuses nichées entre falaise et lagune pour une déconnexion totale.", img: "images/accueil/Dakhla.jpg" },
        { name: "Dakhla PK25", type: "Spot légendaire de glisse", rating: "4.7", desc: "La référence mondiale pour les amateurs de kitesurf et de planche à voile.", img: "images/accueil/DAKHLA PK 25.jpg" },
        { name: "Dakhla Club Hotel & Spa", type: "Éco-charme & Glisse", rating: "4.6", desc: "Un camp haut de gamme dans un jardin verdoyant de la lagune, à l'esprit bohème.", img: "images/accueil/Dakhla Club Hotel & Spa.jpg" }
    ]
};

// Instance du modal pour les hôtels
let hotelsModal;
document.addEventListener('DOMContentLoaded', () => {
    hotelsModal = new bootstrap.Modal(document.getElementById('hotelsModal'));
});

// Fonction pour ouvrir le modal des hôtels d'une ville
function openHotelsModal(cityId) {
    const city = cities.find(c => c.id === cityId);
    if (!city) return;

    document.getElementById('modalHotelsTitle').innerHTML = `Hôtels & Riads de Prestige — <span style="color: var(--dore);">${city.name}</span>`;
    
    const modalBody = document.getElementById('modalHotelsBody');
    const hotels = hotelsData[cityId] || [];
    
    if (hotels.length === 0) {
        modalBody.innerHTML = `
            <div class="text-center p-5">
                <i class="fas fa-hotel fa-3x text-muted mb-3"></i>
                <p class="text-muted">Aucun hôtel n'est actuellement répertorié pour cette ville.</p>
            </div>
        `;
    } else {
        let html = '<div class="hotels-list">';
        hotels.forEach(hotel => {
            const bookingUrl = `https://www.booking.com/searchresults.fr.html?ss=${encodeURIComponent(hotel.name + ' ' + city.name)}`;
            html += `
                <div class="hotel-card">
                    <div class="hotel-img-wrap" style="padding: 0; overflow: hidden;">
                        <img src="${hotel.img}" alt="${hotel.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
                    </div>
                    <div class="hotel-details">
                        <div class="hotel-header">
                            <div>
                                <h4 class="hotel-name">${hotel.name}</h4>
                                <p class="hotel-type">${hotel.type}</p>
                            </div>
                            <span class="hotel-rating-badge">
                                <i class="fas fa-star text-warning me-1"></i> ${hotel.rating}
                            </span>
                        </div>
                        <p class="hotel-desc">${hotel.desc}</p>
                        <div class="hotel-footer">
                            <a href="${bookingUrl}" target="_blank" class="btn-hotel-book">
                                Réserver <i class="fas fa-external-link-alt ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        modalBody.innerHTML = html;
    }
    
    if (hotelsModal) {
        hotelsModal.show();
    }
}

// ==================== LOGIQUE DU CONVERTISSEUR DE DEVISES ====================

// Taux de change par rapport au Dirham Marocain (MAD)
const exchangeRates = {
    EUR: 10.80,
    USD: 10.05,
    GBP: 12.75,
    CAD: 7.35,
    CHF: 11.10
};

// Initialisation des éléments du convertisseur après chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    const foreignSelect = document.getElementById('foreignCurrencySelect');
    const foreignInput = document.getElementById('foreignAmountInput');
    const madInput = document.getElementById('madAmountInput');
    const rateText = document.getElementById('exchangeRateText');
    const swapBtn = document.getElementById('swapCurrencyBtn');

    if (!foreignSelect || !foreignInput || !madInput || !rateText || !swapBtn) return;

    // Met à jour l'affichage du taux indicatif
    function updateRateDisplay() {
        const currency = foreignSelect.value;
        const rate = exchangeRates[currency];
        rateText.innerText = `1 ${currency} = ${rate.toFixed(2)} MAD`;
    }

    // Effectue la conversion Devise Étrangère -> MAD
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

    // Effectue la conversion MAD -> Devise Étrangère
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

    // Écouteurs d'événements
    foreignInput.addEventListener('input', convertForeignToMad);
    madInput.addEventListener('input', convertMadToForeign);

    foreignSelect.addEventListener('change', () => {
        updateRateDisplay();
        // Recalcule la conversion avec le nouveau taux
        convertForeignToMad();
    });

    // Inversion des montants lors du clic sur le bouton d'échange
    swapBtn.addEventListener('click', () => {
        const foreignVal = foreignInput.value;
        const madVal = madInput.value;
        
        foreignInput.value = madVal;
        convertForeignToMad();
    });

    // Initialiser les valeurs par défaut
    foreignInput.value = '10';
    convertForeignToMad();
    updateRateDisplay();
});

// ==================== INITIALISATION DE LA CARTE INTERACTIVE LEAFLET ====================
document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('interactive-map');
    if (!mapElement) return;

    // Coordonnées réelles de chaque ville pour le positionnement géographique sur la carte
    const cityCoords = {
        marrakech: [31.6295, -7.9811],
        agadir: [30.4278, -9.5981],
        fes: [34.0181, -5.0078],
        chefchaouen: [35.1688, -5.2636],
        essaouira: [31.5085, -9.7595],
        casablanca: [33.5731, -7.5898],
        rabat: [34.0209, -6.8416],
        tanger: [35.7595, -5.8340],
        ouarzazate: [30.9189, -6.9118],
        merzouga: [31.0802, -4.0033],
        ifrane: [33.5273, -5.1094],
        dakhla: [23.6848, -15.9580]
    };

    // Initialiser la carte Leaflet centrée sur le Maroc
    // [28.5, -9.5] et zoom 5.5 est l'échelle idéale pour tout voir du nord jusqu'à Dakhla au sud
    const map = L.map('interactive-map', {
        scrollWheelZoom: false // Désactivé pour que la molette ne gêne pas le défilement de la page
    }).setView([29.0, -8.8], 5.5);

    // Charger le fond de carte CartoDB Voyager
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
    }).addTo(map);

    // Créer l'icône personnalisée (point doré par défaut, épingle rouge au survol gérée en CSS)
    const customIcon = L.divIcon({
        html: '<div class="map-dot"></div><i class="fas fa-map-marker-alt text-danger pin-icon"></i>',
        className: 'custom-pin',
        iconSize: [26, 26],
        iconAnchor: [13, 13] // Centré sur la coordonnée géographique
    });

    // Ajouter les épingles géographiques pour toutes les villes
    cities.forEach(city => {
        const coords = cityCoords[city.id];
        if (coords) {
            const marker = L.marker(coords, { icon: customIcon }).addTo(map);
            
            // Tooltip stylisé au survol affichant uniquement le nom de la ville
            marker.bindTooltip(`<strong>${city.name}</strong>`, {
                permanent: false,
                direction: 'top',
                className: 'map-tooltip',
                offset: [0, -15]
            });
        }
    });
});

// Données pour la modal de transport
const transportData = {
    aérien: {
        title: "Transport Aérien ✈️",
        iconClass: "bg-aérien",
        icon: "fa-plane",
        items: [
            {
                name: "Royal Air Maroc",
                desc: "Compagnie nationale du Maroc proposant des vols nationaux et internationaux.",
                url: "https://www.royalairmaroc.com",
                img: "images/transport/avion royal air maroc.jpeg"
            },
            {
                name: "Air Arabia Maroc",
                desc: "Compagnie low-cost reliant le Maroc à plusieurs destinations.",
                url: "https://www.airarabia.com/fr/morocco",
                img: "images/transport/avion air arabia.jpeg"
            },
            {
                name: "Ryanair",
                desc: "Compagnie aérienne économique desservant plusieurs villes marocaines.",
                url: "https://www.ryanair.com",
                img: "images/transport/avion rayan air.jpeg"
            }
        ]
    },
    maritime: {
        title: "Transport Maritime ⛴️",
        iconClass: "bg-maritime",
        icon: "fa-ship",
        items: [
            {
                name: "Balearia",
                desc: "Compagnie maritime reliant le Maroc à l’Espagne.",
                url: "https://www.balearia.com",
                img: "images/transport/Balearia.jpeg"
            },
            {
                name: "AML – Africa Morocco Link",
                desc: "Service ferry entre Tanger Med et l’Espagne.",
                url: "https://www.aml.ma",
                img: "images/transport/AML – Africa Morocco Link.jpeg"
            },
            {
                name: "FRS Ferry",
                desc: "Transport maritime rapide Maroc–Espagne.",
                url: "https://www.frs.es",
                img: "images/transport/FRS ferry.jpeg"
            }
        ]
    },
    terrestre: {
        title: "Transport Terrestre 🚆🚌",
        iconClass: "bg-terrestre",
        icon: "fa-train-subway",
        items: [
            {
                name: "ONCF",
                desc: "Réseau ferroviaire national du Maroc.",
                url: "https://www.oncf-voyages.ma",
                img: "images/transport/oncf.jpeg"
            },
            {
                name: "Al Boraq",
                desc: "TGV marocain reliant Tanger, Rabat et Casablanca.",
                url: "https://www.oncf-voyages.ma",
                img: "images/transport/tgv.jpeg"
            },
            {
                name: "CTM",
                desc: "Transport interurbain entre les grandes villes.",
                url: "https://www.ctm.ma",
                img: "images/transport/ctm.jpeg"
            },
            {
                name: "Supratours",
                desc: "Autocars connectés au réseau ferroviaire ONCF.",
                url: "https://www.supratours.ma",
                img: "images/transport/supratour.jpeg"
            }
        ]
    },
    local: {
        title: "Transport Local & Touristique 🚲🐎",
        iconClass: "bg-local",
        icon: "fa-bicycle",
        items: [
            {
                name: "Bus Touristique Tanger",
                desc: "Découverte des monuments et attractions de la ville.",
                url: "#",
                img: "images/transport/bus touristique de tanger.jpeg"
            },
            {
                name: "Bus Touristique Marrakech",
                desc: "Circuit touristique Hop-On Hop-Off.",
                url: "https://www.alsa.ma",
                img: "images/transport/Bus Touristique Marrakech.jpeg"
            },
            {
                name: "Calèches – Marrakech",
                desc: "Transport touristique traditionnel dans la médina et Jemaa el-Fna.",
                url: "",
                img: "images/transport/Calèches – Marrakech.jpeg"
            }
        ]
    }
};

// Instance de la modal transport
let transportModal;
document.addEventListener('DOMContentLoaded', () => {
    transportModal = new bootstrap.Modal(document.getElementById('transportModal'));
});

// Fonction pour ouvrir la modal de transport
function openTransportModal(categoryId) {
    const category = transportData[categoryId];
    if (!category) return;

    document.getElementById('modalTransportTitle').innerHTML = `Moyens de Transport — <span style="color: var(--dore);">${category.title}</span>`;
    
    const modalBody = document.getElementById('modalTransportBody');
    let html = '<div class="hotels-list">';
    
    category.items.forEach(item => {
        let buttonHtml = '';
        if (item.url && item.url !== "#" && item.url !== "") {
            buttonHtml = `
                <a href="${item.url}" target="_blank" class="btn-hotel-book" style="background: var(--vert); border: none;">
                    Réserver <i class="fas fa-external-link-alt ms-1"></i>
                </a>
            `;
        } else if (item.url === "#") {
            buttonHtml = `
                <span class="btn-hotel-book" style="background: var(--gris); cursor: default; border: none; color: #fff !important;">
                    Sur Place / En Ligne <i class="fas fa-info-circle ms-1"></i>
                </span>
            `;
        } else {
            buttonHtml = `
                <span class="btn-hotel-book" style="background: var(--gris); cursor: default; border: none; color: #fff !important;">
                    Sur Place <i class="fas fa-map-marker-alt ms-1"></i>
                </span>
            `;
        }

        html += `
            <div class="hotel-card">
                <div class="hotel-img-wrap transport-modal-icon-wrap" style="padding: 0; overflow: hidden; background: transparent;">
                    <img src="${item.img}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
                </div>
                <div class="hotel-details">
                    <div class="hotel-header">
                        <div>
                            <h4 class="hotel-name">${item.name}</h4>
                        </div>
                    </div>
                    <p class="hotel-desc">${item.desc}</p>
                    <div class="hotel-footer">
                        ${buttonHtml}
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    modalBody.innerHTML = html;
    
    if (transportModal) {
        transportModal.show();
    }
}

/* ==================== FORMULAIRE TEMOIGNAGES ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // Gestion des étoiles
    const stars = document.querySelectorAll('#star-rating i');
    const noteInput = document.getElementById('t-note');

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });

        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            noteInput.value = value;
            document.getElementById('note-error').style.display = 'none';
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

    // Validation et Soumission
    const form = document.getElementById('temoignage-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validation basique Bootstrap
            if (!this.checkValidity()) {
                isValid = false;
            }
            this.classList.add('was-validated');

            // Validation note
            if (noteInput.value === "0") {
                document.getElementById('note-error').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Simulation d'envoi
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
                btn.disabled = true;

                setTimeout(() => {
                    form.style.display = 'none';
                    document.getElementById('temoignage-success').classList.remove('d-none');
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    this.classList.remove('was-validated');
                    alert("Votre formulaire a bien été soumis !");
                }, 1000);
            }
        });
    }
});

function resetTemoignageForm() {
    const form = document.getElementById('temoignage-form');
    form.reset();
    form.style.display = 'block';
    
    // Reset stars
    document.getElementById('t-note').value = '0';
    document.querySelectorAll('#star-rating i').forEach(s => {
        s.classList.remove('active');
        s.classList.add('far');
        s.classList.remove('fas');
    });
    
    document.getElementById('temoignage-success').classList.add('d-none');
}





