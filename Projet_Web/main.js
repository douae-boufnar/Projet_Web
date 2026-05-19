/* ===== ACCUEIL — Données & rendu ===== */
const IMG = 'images/Acceuil/';

const cities = [
    {
        id: 'marrakech',
        name: 'Marrakech',
        tag: 'Impériale',
        page: 'marrakech.html',
        img: IMG + 'Marrakech.jpg',
        desc: 'La cité ocre, joyau des Almohades, où le luxe des palais côtoie l\'effervescence des souks et la magie de la place Jemaa el-Fna.'
    },
    {
        id: 'fes',
        name: 'Fès',
        tag: 'Spirituelle',
        page: 'fes.html',
        img: IMG + 'Fès, Morocco 🇲🇦.jpg',
        desc: 'Capitale spirituelle et intellectuelle, médina classée UNESCO et plus ancienne université du monde : la Quaraouiyine.'
    },
    {
        id: 'chefchaouen',
        name: 'Chefchaouen',
        tag: 'Azurée',
        page: 'chefchaouen.html',
        img: IMG + 'Chefchaouen, Morocco 🇲🇦.jpg',
        desc: 'Perle bleue du Rif, ruelles paisibles et atmosphère bohème entre montagnes et artisanat local.'
    },
    {
        id: 'rabat',
        name: 'Rabat',
        tag: 'Capitale',
        page: 'rabat.html',
        img: IMG + 'Rabat.jpg',
        desc: 'Capitale élégante et moderne, entre océan Atlantique, médina historique et architecture contemporaine.'
    },
    {
        id: 'tanger',
        name: 'Tanger',
        tag: 'Mythique',
        page: 'tanger.html',
        img: IMG + 'Tanger, Morocco.jpg',
        desc: 'Carrefour des civilisations au détroit de Gibraltar, entre médina vibrante, plages et légende littéraire.'
    },
    {
        id: 'essaouira',
        name: 'Essaouira',
        tag: 'Bohème',
        page: 'essaouira.html',
        img: IMG + 'essaouira.jpg',
        desc: 'Ancienne Mogador, cité des vents et du bois de thuya, port fortifié face à l\'Atlantique.'
    },
    {
        id: 'agadir',
        name: 'Agadir',
        tag: 'Solaire',
        page: 'agadir.html',
        img: IMG + 'Agadir , Morocco.jpg',
        desc: 'Station balnéaire ensoleillée du Souss, baie immaculée et douceur de vivre atlantique toute l\'année.'
    },
    {
        id: 'ouarzazate',
        name: 'Ouarzazate',
        tag: 'Cinéma',
        page: 'ouarzazate.html',
        img: IMG + 'Ouarzazate.jpg',
        desc: 'Porte du désert et Hollywood marocain, kasbahs majestueuses et studios de cinéma légendaires.'
    },
    {
        id: 'dakhla',
        name: 'Dakhla',
        tag: 'Lagune',
        page: 'dakhla.html',
        img: IMG + 'Dakhla.jpg',
        desc: 'Entre désert et océan, lagune paradisiaque et spot mondial pour le kitesurf et les sports nautiques.'
    },
    {
        id: 'casablanca',
        name: 'Casablanca',
        tag: 'Moderne',
        page: 'casablanca.html',
        img: IMG + 'Casa.jpg',
        desc: 'Métropole dynamique, art déco, corniche atlantique et majestueuse mosquée Hassan II.'
    }
];

const landscapes = [
    {
        title: 'Atlas Mountains',
        img: IMG + 'Atlas Mountains.jpg',
        desc: 'Chaînes majestueuses, villages berbères et sommets enneigés : le toit du Maghreb.'
    },
    {
        title: 'Merzouga Desert',
        img: IMG + 'Merzouga desert 🇲🇦.jpg',
        desc: 'Dunes dorées de l\'Erg Chebbi, nuits étoilées et silence infini du Sahara.'
    },
    {
        title: 'Ouzoud Waterfalls',
        img: IMG + 'The waterfalls of ouzoud.jpg',
        desc: 'Cascades spectaculaires au cœur de l\'Atlas moyen, arc-en-ciel et oliviers centenaires.'
    },
    {
        title: 'Atlantic Ocean Morocco',
        img: IMG + 'Atlantic Ocean  Morocco.jpg',
        desc: 'Côtes sauvages, falaises, plages infinies et couchers de soleil sur l\'Atlantique.'
    },
    {
        title: 'Kingdom of Morocco',
        img: IMG + 'Rabat.jpg',
        desc: 'Un royaume aux mille visages, de la Méditerranée au Sahara, patrimoine et modernité.'
    }
];

const dishes = [
    { title: 'Couscous', img: IMG + 'Couscous.jpg', desc: 'Plat festif du vendredi, semoule vapeur et légumes de saison.' },
    { title: 'Tagine', img: IMG + 'Tagine.jpg', desc: 'Mijoté lent dans l\'argile, saveurs fondantes et épices parfumées.' },
    { title: 'Pastila', img: IMG + 'Pastila.jpg', desc: 'Feuille de brick croustillante, alliance sucré-salé typiquement fassie.' },
    { title: 'Rfissa', img: IMG + 'Rfissa-moroccan .jpg', desc: 'Tradition célébrée au poulet, lentilles et msemen parfumés au safran.' },
    { title: 'Harira', img: IMG + 'Moroccan Harira 🇲🇦.jpg', desc: 'Soupe généreuse aux tomates et légumineuses, incontournable du Ramadan.' },
    { title: 'Chebakia', img: IMG + 'moroccan chebakia🇲🇦.jpg', desc: 'Fleur de miel et sésame, douceur parfumée à l\'eau de rose.' },
    { title: 'Msemen', img: IMG + 'Msemen marocain .jpg', desc: 'Crêpe feuilletée croustillante, parfaite au petit-déjeuner ou au thé.' },
    { title: 'Harcha', img: IMG + 'Harcha-Moroccan .jpg', desc: 'Galette de semoule dorée, moelleuse et généreusement beurrée.' },
    { title: 'Baghrir', img: IMG + 'Beghrir.jpg', desc: 'Crêpe aux mille trous, légère et moelleuse, servie avec miel ou beurre.' },
    { title: 'Djaj Daghmira', img: IMG + '(djaj daghmira) .jpg', desc: 'Poulet confit aux olives et citron confit, spécialité savoureuse du Nord.' },
    { title: 'Thé à la menthe', img: IMG + 'The a la menthe.jpg', desc: 'Rituel d\'hospitalité par excellence, servi à trois hauteurs avec art.' },
    { title: 'Apricots Tajine', img: IMG + 'apricots tajin.jpg', desc: 'Tajine sucré-salé aux abricots secs, amandes et cannelle.' }
];

const cultureItems = [
    {
        title: 'Musique Gnawa',
        img: IMG + 'Gnaoua Heritage.jpg',
        text: "Patrimoine de l'UNESCO, une musique de transe spirituelle aux racines africaines profondes."
    },
    {
        title: 'Artisanat Ancestral',
        img: IMG + 'Zellij.jpg',
        text: 'De la finesse du zellige à la noblesse du tapis, un savoir-faire transmis de maître en apprenti.'
    },
    {
        title: 'Culture Amazighe',
        img: IMG + 'Amazigh Atlas.jpg',
        text: "L'âme berbère du Maroc, avec sa langue Tamazight et ses traditions millénaires préservées."
    },
    {
        title: 'Architecture Mauresque',
        img: IMG + 'Riad .jpg',
        text: "L'art de vivre entre patios secrets des Riads et kasbahs majestueuses aux portes du désert."
    },
    {
        title: 'Caftan Marocain',
        img: IMG + 'Canftan.jpg',
        text: "Symbole d'élégance et de raffinement, le caftan marocain reflète la richesse culturelle et artisanale du Royaume à travers ses broderies et ses tissus traditionnels."
    }
];

const activities = [
    { title: 'Surf', img: IMG + 'Morocco Surf.jpg', desc: 'Vagues atlantiques de Taghazout à Dakhla, spots mondiaux pour tous niveaux.' },
    { title: 'Randonnées', img: IMG + 'Rendonnes.jpg', desc: 'Sentiers de l\'Atlas, gorges du Todra et villages berbères hors des sentiers battus.' },
    { title: 'Balades à cheval', img: IMG + 'Horse riding.jpg', desc: 'Promenades sur la plage ou dans la palmeraie au rythme des chevaux barbes.' },
    { title: 'Quad', img: IMG + 'Quad.jpg', desc: 'Aventure en dunes et pistes désertiques, sensations fortes garanties.' },
    { title: 'Activités aquatiques', img: IMG + 'aquapark .jpg', desc: 'Jet-ski, paddle, plongée et parcs aquatiques le long des côtes marocaines.' },
    { title: 'Chute libre / parachute', img: IMG + 'Chute libre.jpg', desc: 'Survol spectaculaire des paysages marocains, adrénaline et panoramas inoubliables.' }
];

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderCities() {
    const container = document.getElementById('villes-container');
    if (!container) return;

    container.innerHTML = cities.map(city => `
        <div class="col-xl-4 col-lg-4 col-md-6 fade-in">
            <a href="${escapeHtml(city.page)}" class="city-grid-card city-card-link" aria-label="Découvrir ${escapeHtml(city.name)}">
                <div class="city-img-top">
                    <img src="${city.img}" alt="${escapeHtml(city.name)}" loading="lazy">
                    <span class="city-cat-badge">${escapeHtml(city.tag)}</span>
                </div>
                <div class="city-card-body">
                    <h3 class="city-card-title">${escapeHtml(city.name)}</h3>
                    <p class="city-card-text">${escapeHtml(city.desc)}</p>
                    <div class="city-card-footer">
                        <span class="city-rating"><i class="fas fa-star"></i> 4.9</span>
                        <span class="btn-city">Explorer <i class="fas fa-arrow-right ms-1"></i></span>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

function renderLandscapes() {
    const container = document.getElementById('nature-container');
    if (!container) return;

    container.innerHTML = landscapes.map(item => `
        <div class="col-lg-4 col-md-6 fade-in">
            <article class="nature-landscape-card">
                <div class="nature-landscape-img">
                    <img src="${item.img}" alt="${escapeHtml(item.title)}" loading="lazy">
                </div>
                <div class="nature-landscape-body">
                    <h4>${escapeHtml(item.title)}</h4>
                    <p>${escapeHtml(item.desc)}</p>
                </div>
            </article>
        </div>
    `).join('');
}

function renderCuisine() {
    const container = document.getElementById('cuisine-container');
    if (!container) return;

    container.innerHTML = dishes.map(dish => `
        <div class="col-lg-3 col-md-4 col-sm-6 fade-in">
            <article class="cuisine-premium-card">
                <div class="cuisine-premium-img">
                    <img src="${dish.img}" alt="${escapeHtml(dish.title)}" loading="lazy">
                </div>
                <div class="cuisine-premium-body">
                    <h4>${escapeHtml(dish.title)}</h4>
                    <p>${escapeHtml(dish.desc)}</p>
                </div>
            </article>
        </div>
    `).join('');
}

function renderCulture() {
    const container = document.getElementById('culture-container');
    if (!container) return;

    container.innerHTML = cultureItems.map(item => `
        <div class="col-lg-4 col-md-6 fade-in">
            <article class="culture-premium-card">
                <div class="culture-premium-img">
                    <img src="${item.img}" alt="${escapeHtml(item.title)}" loading="lazy">
                </div>
                <div class="culture-premium-body">
                    <h4>${escapeHtml(item.title)}</h4>
                    <p>${escapeHtml(item.text)}</p>
                </div>
            </article>
        </div>
    `).join('');
}

function renderActivities() {
    const container = document.getElementById('activities-container');
    if (!container) return;

    container.innerHTML = activities.map(act => `
        <div class="col-lg-4 col-md-6 fade-in">
            <article class="activity-card">
                <div class="activity-card-img">
                    <img src="${act.img}" alt="${escapeHtml(act.title)}" loading="lazy">
                </div>
                <div class="activity-card-body">
                    <h4>${escapeHtml(act.title)}</h4>
                    <p>${escapeHtml(act.desc)}</p>
                </div>
            </article>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderCities();
    renderLandscapes();
    renderCuisine();
    renderCulture();
    renderActivities();
    observeFadeElements();
    initCursorHover();
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

function observeFadeElements() {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

const particlesContainer = document.getElementById('particles-container');
if (particlesContainer) {
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
}

function initCursorHover() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverSelector = 'a, button, .city-card-link, .cuisine-premium-card, .culture-premium-card, .activity-card, .nature-landscape-card';
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverSelector)) cursor.classList.add('cursor-hover');
    });
    document.body.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverSelector)) cursor.classList.remove('cursor-hover');
    });
}

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

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCity();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
