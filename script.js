const projects = [
  {
    title: "Milo Jelly Corporate Website",
    category: "Web Design",
    client: "Nestlé Indonesia",
    eventDate: "10 March 2023 · Launch",
    duration: "7 working days · 2 revisions",
    description: "A responsive landing page built for an F&B brand, showcasing product catalogs and company profiles with a modern, appealing design.",
    tools: ["HTML", "CSS", "JavaScript", "Java", "PHP"],
    stats: {
      rating: "4.8", ratingLabel: "↑ Top 10%",
      views: "3.2k", viewsLabel: "↑ +410 this week",
      saved: "102", savedLabel: "↑ +18 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Fore Coffee Web",
    category: "Web Design",
    client: "Fore Coffee",
    eventDate: "20 June 2023 · Launch",
    duration: "6 working days · 2 revisions",
    description: "A clean digital platform helping users explore coffee menus and discover daily promotions easily.",
    tools: ["HTML", "Tailwind", "JavaScript", "Go"],
    stats: {
      rating: "4.7", ratingLabel: "↑ Top 15%",
      views: "2.8k", viewsLabel: "↑ +380 this week",
      saved: "95", savedLabel: "↑ +14 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Tesla Web",
    category: "Web Design",
    client: "Tesla Inc.",
    eventDate: "5 August 2023 · Launch",
    duration: "8 working days · 3 revisions",
    description: "An immersive digital showroom allowing users to explore car models and customize their purchase.",
    tools: ["HTML", "Tailwind", "JavaScript", "PHP"],
    stats: {
      rating: "5.0", ratingLabel: "↑ Top 1%",
      views: "5.1k", viewsLabel: "↑ +620 this week",
      saved: "210", savedLabel: "↑ +35 this month",
      revisions: "3", revisionsLabel: "Premium package"
    }
  },
  {
    title: "Shangrila Hotel Web",
    category: "Web Design",
    client: "Shangri-La Group",
    eventDate: "12 September 2023 · Launch",
    duration: "7 working days · 2 revisions",
    description: "An elegant hotel website offering a seamless booking experience and showcasing exclusive memberships.",
    tools: ["HTML", "CSS", "JavaScript", "Python", "PostgreSQL"],
    stats: {
      rating: "4.9", ratingLabel: "↑ Top 5%",
      views: "3.7k", viewsLabel: "↑ +450 this week",
      saved: "143", savedLabel: "↑ +22 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Traveloka",
    category: "Web Design",
    client: "Traveloka",
    eventDate: "1 October 2023 · Launch",
    duration: "9 working days · 3 revisions",
    description: "Your ultimate travel companion for discovering top-rated hotels and managing reservations across all devices.",
    tools: ["HTML", "Tailwind", "JavaScript", "Java", "PHP"],
    stats: {
      rating: "4.8", ratingLabel: "↑ Top 10%",
      views: "4.4k", viewsLabel: "↑ +530 this week",
      saved: "178", savedLabel: "↑ +28 this month",
      revisions: "3", revisionsLabel: "Premium package"
    }
  },
  {
    title: "Greenly Web",
    category: "Web Design",
    client: "Whole Foods Market",
    eventDate: "18 October 2023 · Launch",
    duration: "6 working days · 2 revisions",
    description: "An engaging platform helping users discover delicious and nutritious meals across all devices.",
    tools: ["HTML", "Tailwind", "JavaScript", "Go", "PostgreSQL"],
    stats: {
      rating: "4.7", ratingLabel: "↑ Top 15%",
      views: "2.5k", viewsLabel: "↑ +290 this week",
      saved: "88", savedLabel: "↑ +11 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Interactive Event Space Concept for ISTTS Auditorium",
    category: "Editing",
    client: "Institut Sains dan Teknologi Terpadu Surabaya",
    eventDate: "3 November 2023 · Launch",
    duration: "4 working days · 2 revisions",
    description: "This design blends an ISTTS Auditorium photo with 3D graphics. Floating posters create a lively space.",
    tools: ["Photoshop", "Canva"],
    stats: {
      rating: "4.6", ratingLabel: "↑ Top 20%",
      views: "1.8k", viewsLabel: "↑ +210 this week",
      saved: "64", savedLabel: "↑ +9 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Cute Cactus Character Illustration",
    category: "Editing",
    client: "Adobe Inc.",
    eventDate: "9 November 2023 · Launch",
    duration: "3 working days · 1 revision",
    description: "A green cactus smiles in a blue pot. A bright yellow glow brings the character to life.",
    tools: ["Photoshop", "Canva", "Figma"],
    stats: {
      rating: "4.8", ratingLabel: "↑ Top 10%",
      views: "2.2k", viewsLabel: "↑ +270 this week",
      saved: "91", savedLabel: "↑ +13 this month",
      revisions: "1", revisionsLabel: "Basic package"
    }
  },
  {
    title: "Cosmic Culinary Festival Poster",
    category: "Editing",
    client: "Tunjungan Plaza Surabaya",
    eventDate: "15 – 17 November 2023 · 10:00–22:00 WIB",
    duration: "5 working days · 3 revisions",
    description: "This vibrant poster mixes food and space themes. Rockets and an astronaut highlight your layout skills.",
    tools: ["Photoshop", "Figma"],
    stats: {
      rating: "4.9", ratingLabel: "↑ Top 5%",
      views: "2.1k", viewsLabel: "↑ +320 this week",
      saved: "87", savedLabel: "↑ +12 this month",
      revisions: "3", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Japan Culture & Sports Stamps",
    category: "Editing",
    client: "Japan Tourism Agency",
    eventDate: "25 November 2023 · Launch",
    duration: "4 working days · 2 revisions",
    description: "This collection displays five vector stamps. Japanese cultural icons show your illustration skills.",
    tools: ["Figma"],
    stats: {
      rating: "4.7", ratingLabel: "↑ Top 15%",
      views: "1.9k", viewsLabel: "↑ +240 this week",
      saved: "73", savedLabel: "↑ +10 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  },
  {
    title: "Aesthetic Music Photocard",
    category: "Editing",
    client: "Spotify",
    eventDate: "2 December 2023 · Launch",
    duration: "3 working days · 1 revision",
    description: "This vintage photocard combines photography with UI elements. Spotify lyrics and text bubbles build a neat layout.",
    tools: ["Canva"],
    stats: {
      rating: "4.8", ratingLabel: "↑ Top 10%",
      views: "3.0k", viewsLabel: "↑ +360 this week",
      saved: "120", savedLabel: "↑ +19 this month",
      revisions: "1", revisionsLabel: "Basic package"
    }
  },
  {
    title: "Casual Portrait Photocard",
    category: "Editing",
    client: "Apple Music",
    eventDate: "10 December 2023 · Launch",
    duration: "3 working days · 1 revision",
    description: "This minimalist design places a portrait against a night sky. A virtual vinyl record adds a unique touch.",
    tools: ["Photoshop", "Figma"],
    stats: {
      rating: "4.9", ratingLabel: "↑ Top 5%",
      views: "2.6k", viewsLabel: "↑ +310 this week",
      saved: "105", savedLabel: "↑ +16 this month",
      revisions: "1", revisionsLabel: "Basic package"
    }
  },
  {
    title: "Monochrome Melodies",
    category: "Editing",
    client: "Sony Music Entertainment",
    eventDate: "20 December 2023 · Launch",
    duration: "4 working days · 2 revisions",
    description: "A striking monochrome shot captures a live musical performance. The dramatic stage lighting highlights the artist's intense focus.",
    tools: ["Photoshop", "Canva"],
    stats: {
      rating: "5.0", ratingLabel: "↑ Top 1%",
      views: "3.5k", viewsLabel: "↑ +480 this week",
      saved: "138", savedLabel: "↑ +24 this month",
      revisions: "2", revisionsLabel: "Standard package"
    }
  }
];

function filter(category) {
    document.querySelectorAll('#kotakbody31').forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function gantiMode() {
    let ambil = document.querySelector('.btngantiMode');
    var github = document.querySelector('.iconGithub');

    if (document.body.classList.contains('lightMode')) {
        document.body.classList.remove('lightMode');
        github.src = 'github-white-icon.webp';
        ambil.textContent = '🌙 Dark';
    } else {
        document.body.classList.add('lightMode');
        github.src = 'github-black.png';
        ambil.textContent = '☀️ Light';
    }
}

function openPopup(index) {
    let ambilTempat = document.querySelector('.hasilPopup');
    ambilTempat.classList.add('blur')

    let toolsHTML = '';
    for (let i = 0; i < projects[index].tools.length; i++) {
        toolsHTML += `<p>- ${projects[index].tools[i]}</p>`;
    }
    ambilTempat.innerHTML = `
        <div class="Popup" style="min-height: 120px; border-radius: 10px; margin-top: 50px; padding-top: 20px; padding-bottom: 20px;">
            <div class="containerPopup" id="jarak1">
                <div class="item">
                    <p style="color: #10B981;">Project Detail</p>
                    <h5>${projects[index].title}</h5>
                </div>
                <div class="item">
                    <img onclick="closePopup()" style="cursor: pointer;" src="x (1).svg" alt="">
                </div>
            </div>
            <div class="containerPopup" style="justify-content: space-around; margin-top: 10px;">
                <p class="gantiTampilan" onclick="gantimode('info')">Info</p>
                <p class="gantiTampilan" onclick="gantimode('statistic')">Statistic</p>
            </div>

            <!-- Untuk Info -->
            <section class="info">
                <div class="containerPopup" style="gap: 20px; margin-top: 30px;">
                    <img src="user (1).svg" alt="" style="background-color: black; padding: 10px; border-radius: 10px; width: 50px; height: 50px;">
                    <div class="item">
                        <p>Client</p>
                        <p>${projects[index].client}</p>
                    </div>
                </div>
                <hr style="margin: 10px;">
                <div class="containerPopup" style="gap: 20px;">
                    <img src="calendar.svg" alt="" style="background-color: black; padding: 10px; border-radius: 10px; width: 50px; height: 50px;">
                    <div class="item">
                        <p>Event Date</p>
                        <p>${projects[index].eventDate}</p>
                    </div>
                </div>
                <hr style="margin: 10px;">
                <div class="containerPopup" style="gap: 20px;">
                    <img src="clock.svg" alt="" style="background-color: black; padding: 10px; border-radius: 10px; width: 50px; height: 50px;">
                    <div class="item">
                        <p>Duration</p>
                        <p>${projects[index].duration}</p>
                    </div>
                </div>
                <hr style="margin: 10px;">
                <div class="containerPopup" style="gap: 20px; padding-bottom: 20px;">
                    <img src="book-open.svg" alt="" style="background-color: black; padding: 10px; border-radius: 10px; width: 50px; height: 50px;">
                    <div class="item">
                        <p>Description</p>
                        <p>${projects[index].description}</p>
                    </div>
                </div>
                <hr style="margin: 10px;">
                <div class="containerPopup" style="gap: 20px;">
                    <img src="tool.svg" alt="" style="background-color: black; padding: 10px; border-radius: 10px; width: 50px; height: 50px;">
                    <div class="item">
                        <p>Tools</p>
                        ${toolsHTML}
                    </div>
                </div>
            </section>

            <!-- Untuk Statistic -->
            <section class="statistic">
                <div class="containerPopup" style="justify-content: space-around; text-align: center; flex-wrap: wrap;">
                    <div class="item" style="background-color: black; padding: 10px; margin-top: 20px; width: 45%; border-radius: 10px;">
                        <h3 style="color: #10B981;">${projects[index].stats.rating}</h3>
                        <p>Client Rating</p>
                        <p style="color: #10B981;">${projects[index].stats.ratingLabel}</p>
                    </div>
                    <div class="item" style="background-color: black; padding: 10px; margin-top: 20px; width: 45%; border-radius: 10px;">
                        <h3 style="color: #10B981;">${projects[index].stats.views}</h3>
                        <p>Total views</p>
                        <p style="color: #10B981;">${projects[index].stats.viewsLabel}</p>
                    </div>
                    <div class="item" style="background-color: black; padding: 10px; margin-top: 20px; width: 45%; border-radius: 10px;">
                        <h3 style="color: #10B981;">${projects[index].stats.saved}</h3>
                        <p>Saved</p>
                        <p style="color: #10B981;">${projects[index].stats.savedLabel}</p>
                    </div>
                    <div class="item" style="background-color: black; padding: 10px; margin-top: 20px; width: 45%; border-radius: 10px;">
                        <h3 style="color: #10B981;">${projects[index].stats.revisions}</h3>
                        <p>Revisions</p>
                        <p style="color: #10B981;">${projects[index].stats.revisionsLabel}</p>
                    </div>
                </div>
            </section>
        </div>
    `

    gantimode('info');
}

function gantimode(detail) {
    let ambilInfo = document.querySelector('.info');
    let ambilStatistic = document.querySelector('.statistic');

    if (detail === 'info') {
        ambilStatistic.classList.add('hilangkan');
        ambilInfo.classList.remove('hilangkan');

    } else if (detail === 'statistic'){
        ambilStatistic.classList.remove('hilangkan');
        ambilInfo.classList.add('hilangkan');
    }
}

function closePopup() {
    let ambilbtn = document.querySelector('.Popup');
    ambilbtn.classList.add('hilangkan');

    let ambilTempat = document.querySelector('.hasilPopup');
    ambilTempat.classList.remove('blur')
}

function buttonMusic() {
  const btn = document.querySelector('#gbrButton');
  const audio = document.querySelector('#suara');

  if (audio.paused) {
    audio.play();
    btn.src = 'pause.svg';
  } else {
    audio.pause();
    btn.src = 'music (1).svg';
  }
}