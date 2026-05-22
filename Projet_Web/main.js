// Data des villes
const cities = [
    { id: 'marrakech', name: 'Marrakech', tag: 'Impériale', img: 'Acceuil/Marrakech.jpg', desc: 'La cité ocre, joyau des Almohades, où le luxe des palais côtoie l\'effervescence des souks.' },
    { id: 'agadir', name: 'Agadir', tag: 'Solaire', img: 'Acceuil/Agadir , Morocco.jpg', desc: 'La première station balnéaire du pays avec sa baie s\'étendant à perte de vue et son ensoleillement permanent.' },
    { id: 'fes', name: 'Fès', tag: 'Spirituelle', img: 'Acceuil/Fès, Morocco 🇲🇦.jpg', desc: 'Le centre intellectuel du Maroc, abritant la plus ancienne université au monde, la Quaraouiyine.' },
    { id: 'chefchaouen', name: 'Chefchaouen', tag: 'Azurée', img: 'Acceuil/Chefchaouen, Morocco 🇲🇦.jpg', desc: 'Un havre de paix azuré niché dans le Rif, célèbre pour son atmosphère poétique et sereine.' },
    { id: 'essaouira', name: 'Essaouira', tag: 'Bohème', img: 'Acceuil/essaouira.jpg', desc: 'L\'ancienne Mogador, port de pêche fortifié où les vents alizés soufflent un air de liberté.' },
    { id: 'casablanca', name: 'Casablanca', tag: 'Moderne', img: 'Acceuil/Casa.jpg', desc: 'Une métropole tournée vers l\'avenir, symbole du dynamisme économique et architectural.' },
    { id: 'rabat', name: 'Rabat', tag: 'Lumière', img: 'Acceuil/Rabat.jpg', desc: 'La capitale administrative, une ville verte et élégante riche en monuments impériaux.' },
    { id: 'tanger', name: 'Tanger', tag: 'Mythique', img: 'Acceuil/Tanger, Morocco.jpg', desc: 'Carrefour des civilisations au seuil du Détroit, muse éternelle des artistes et écrivains.' },
    { id: 'ouarzazate', name: 'Ouarzazate', tag: 'Cinéma', img: 'Acceuil/Ouarzazate.jpg', desc: 'La porte du grand Sud et le Hollywood africain, célèbre pour ses kasbahs majestueuses.' },
    { id: 'merzouga', name: 'Merzouga', tag: 'Sahara', img: 'Acceuil/Merzouga desert 🇲🇦.jpg', desc: 'Les dunes géantes de l\'Erg Chebbi, pour une immersion totale dans la magie du désert.' },
    { id: 'ifrane', name: 'Ifrane', tag: 'Nature', img: 'Acceuil/Ifrane city.jpg', desc: 'Un paysage alpin au cœur du Moyen-Atlas, entouré de forêts de cèdres millénaires.' },
    { id: 'dakhla', name: 'Dakhla', tag: 'Lagune', img: 'Acceuil/Dakhla.jpg', desc: 'Une perle rare entre désert et océan, paradis mondial pour les sports de glisse.' }
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
                        <button class="btn-city">Explorer <i class="fas fa-arrow-right ms-1"></i></button>
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

document.querySelectorAll('a, button, .city-grid-card, .theme-card').forEach(el => {
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