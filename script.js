
const daftarKata = [
    // ENGLISH ABBREVIATIONS (1-10)
    {
        kata: "LOL",
        arti: "Laughing Out Loud",
        indonesia: "Tertawa terbahak-bahak.",
        kategori: "Abbreviations",
        contoh: "That meme is so funny, LOL!"
    },
    {
        kata: "OMG",
        arti: "Oh My God",
        indonesia: "Ya ampun! Ungkapan terkejut.",
        kategori: "Abbreviations",
        contoh: "OMG! You look amazing!"
    },
    {
        kata: "BTW",
        arti: "By The Way",
        indonesia: "Ngomong-ngomong.",
        kategori: "Abbreviations",
        contoh: "BTW, are you coming tonight?"
    },
    {
        kata: "IDK",
        arti: "I Don't Know",
        indonesia: "Aku tidak tahu.",
        kategori: "Abbreviations",
        contoh: "IDK what happened yesterday."
    },
    {
        kata: "TBH",
        arti: "To Be Honest",
        indonesia: "Sejujurnya.",
        kategori: "Abbreviations",
        contoh: "TBH, I don't really like it."
    },
    {
        kata: "NGL",
        arti: "Not Gonna Lie",
        indonesia: "Jujur saja.",
        kategori: "Abbreviations",
        contoh: "NGL, that movie was amazing."
    },
    {
        kata: "FR",
        arti: "For Real",
        indonesia: "Serius atau benar-benar.",
        kategori: "Abbreviations",
        contoh: "You did that? FR?"
    },
    {
        kata: "IMO",
        arti: "In My Opinion",
        indonesia: "Menurut pendapatku.",
        kategori: "Abbreviations",
        contoh: "IMO, this song is better."
    },
    {
        kata: "IYKYK",
        arti: "If You Know, You Know",
        indonesia: "Kalau kamu tahu, kamu pasti paham.",
        kategori: "Abbreviations",
        contoh: "That place is special, IYKYK."
    },
    {
        kata: "GOAT",
        arti: "Greatest Of All Time",
        indonesia: "Yang terbaik sepanjang masa.",
        kategori: "Abbreviations",
        contoh: "He's the GOAT!"
    },

    // ENGLISH SLANG (11-25)
    {
        kata: "Slay",
        arti: "To do something exceptionally well.",
        indonesia: "Melakukan sesuatu dengan sangat keren.",
        kategori: "English Slang",
        contoh: "You slayed that outfit!"
    },
    {
        kata: "Rizz",
        arti: "Charisma or romantic appeal.",
        indonesia: "Pesona atau kemampuan menarik perhatian seseorang.",
        kategori: "English Slang",
        contoh: "He has so much rizz."
    },
    {
        kata: "Sus",
        arti: "Suspicious.",
        indonesia: "Mencurigakan.",
        kategori: "English Slang",
        contoh: "That guy seems kinda sus."
    },
    {
        kata: "Bet",
        arti: "Okay, sure, or agreed.",
        indonesia: "Oke, setuju, atau siap.",
        kategori: "English Slang",
        contoh: "Meet me at 7? Bet!"
    },
    {
        kata: "Cap",
        arti: "A lie or something untrue.",
        indonesia: "Bohong atau tidak benar.",
        kategori: "English Slang",
        contoh: "That's cap!"
    },
    {
        kata: "No Cap",
        arti: "No lie; telling the truth.",
        indonesia: "Tidak bohong atau serius.",
        kategori: "English Slang",
        contoh: "This food is amazing, no cap."
    },
    {
        kata: "Lowkey",
        arti: "Somewhat, secretly, or subtly.",
        indonesia: "Diam-diam atau agak.",
        kategori: "English Slang",
        contoh: "I lowkey miss him."
    },
    {
        kata: "Highkey",
        arti: "Openly or very strongly.",
        indonesia: "Secara terang-terangan atau sangat.",
        kategori: "English Slang",
        contoh: "I highkey love this song."
    },
    {
        kata: "Cringe",
        arti: "Awkward or embarrassing.",
        indonesia: "Canggung atau memalukan.",
        kategori: "English Slang",
        contoh: "That video is so cringe."
    },
    {
        kata: "Delulu",
        arti: "Delusional.",
        indonesia: "Berharap atau berkhayal secara tidak realistis.",
        kategori: "English Slang",
        contoh: "I'm delulu enough to think he likes me."
    },
    {
        kata: "Ate",
        arti: "Did something extremely well.",
        indonesia: "Melakukan sesuatu dengan sangat keren.",
        kategori: "English Slang",
        contoh: "She ate that performance!"
    },
    {
        kata: "Mid",
        arti: "Mediocre or average.",
        indonesia: "Biasa saja atau tidak terlalu bagus.",
        kategori: "English Slang",
        contoh: "The movie was kinda mid."
    },
    {
        kata: "Ghosting",
        arti: "Suddenly stopping communication with someone.",
        indonesia: "Tiba-tiba menghilang tanpa penjelasan.",
        kategori: "English Slang",
        contoh: "He ghosted me after our date."
    },
    {
        kata: "Flexing",
        arti: "Showing off wealth or achievements.",
        indonesia: "Memamerkan kekayaan atau pencapaian.",
        kategori: "English Slang",
        contoh: "Stop flexing your new phone!"
    },
    {
        kata: "Vibe",
        arti: "A feeling or atmosphere.",
        indonesia: "Suasana atau kesan yang dirasakan.",
        kategori: "English Slang",
        contoh: "I love the vibe here."
    },

    // RELATIONSHIPS & SOCIAL MEDIA (26-35)
    {
        kata: "Bestie",
        arti: "Best Friend.",
        indonesia: "Sahabat atau teman dekat.",
        kategori: "Social Media",
        contoh: "Hey bestie, how are you?"
    },
    {
        kata: "FOMO",
        arti: "Fear Of Missing Out.",
        indonesia: "Takut ketinggalan tren atau pengalaman.",
        kategori: "Social Media",
        contoh: "I bought it because of FOMO."
    },
    {
        kata: "POV",
        arti: "Point Of View.",
        indonesia: "Sudut pandang seseorang.",
        kategori: "Social Media",
        contoh: "POV: You wake up late for class."
    },
    {
        kata: "Red Flag",
        arti: "A warning sign of a potential problem.",
        indonesia: "Tanda adanya sifat atau perilaku bermasalah.",
        kategori: "Relationships",
        contoh: "Lying all the time is a red flag."
    },
    {
        kata: "Green Flag",
        arti: "A positive sign or good quality.",
        indonesia: "Tanda positif atau sifat yang baik.",
        kategori: "Relationships",
        contoh: "He respects you. Green flag!"
    },
    {
        kata: "Soft Spot",
        arti: "A particular fondness for someone or something.",
        indonesia: "Rasa suka atau sayang khusus terhadap seseorang atau sesuatu.",
        kategori: "Relationships",
        contoh: "I have a soft spot for cats."
    },
    {
        kata: "Situationship",
        arti: "A romantic relationship without a clear label.",
        indonesia: "Hubungan romantis tanpa status yang jelas.",
        kategori: "Relationships",
        contoh: "We're in a situationship."
    },
    {
        kata: "Main Character",
        arti: "Someone who sees themselves as the main person in their story.",
        indonesia: "Merasa menjadi tokoh utama dalam kehidupan sendiri.",
        kategori: "Social Media",
        contoh: "I'm having my main character moment."
    },
    {
        kata: "It's Giving",
        arti: "It gives off a particular vibe or impression.",
        indonesia: "Memberikan kesan atau nuansa tertentu.",
        kategori: "Social Media",
        contoh: "It's giving summer vibes!"
    },
    {
        kata: "Era",
        arti: "A particular phase or period of life.",
        indonesia: "Fase atau periode tertentu dalam kehidupan.",
        kategori: "Social Media",
        contoh: "I'm in my healing era."
    },

    // INDONESIAN-ENGLISH MIXED SLANG (36-50)
    {
        kata: "Orang Have",
        arti: "Have means to own or possess something.",
        indonesia: "Candaan untuk orang yang punya sesuatu atau memiliki kelebihan tertentu.",
        kategori: "Indo-English",
        contoh: "Dia orang have, semua barang branded punya."
    },
    {
        kata: "Orang Haven't",
        arti: "Haven't means have not or not yet.",
        indonesia: "Candaan untuk orang yang belum punya sesuatu atau belum mengalami hal tertentu.",
        kategori: "Indo-English",
        contoh: "Aku orang haven't, belum punya kendaraan."
    },
    {
        kata: "Valid No Debat",
        arti: "Valid means acceptable or well-founded.",
        indonesia: "Pendapat yang dianggap benar dan tidak perlu diperdebatkan.",
        kategori: "Indo-English",
        contoh: "Makan seblak pas hujan, valid no debat!"
    },
    {
        kata: "Relate Banget",
        arti: "Relate means to identify with an experience.",
        indonesia: "Sangat merasa terhubung dengan pengalaman atau cerita seseorang.",
        kategori: "Indo-English",
        contoh: "Cerita kamu relate banget sama hidupku."
    },
    {
        kata: "Overthinking",
        arti: "Thinking about something too much.",
        indonesia: "Terlalu banyak memikirkan sesuatu.",
        kategori: "Indo-English",
        contoh: "Jangan overthinking, belum tentu dia marah."
    },
    {
        kata: "Feeling Blue",
        arti: "Feeling sad or down.",
        indonesia: "Sedang merasa sedih atau galau.",
        kategori: "Indo-English",
        contoh: "I'm feeling blue hari ini."
    },
    {
        kata: "Auto Salting",
        arti: "Automatically feeling shy or flustered.",
        indonesia: "Langsung merasa malu atau salah tingkah.",
        kategori: "Indo-English",
        contoh: "Dipuji crush auto salting."
    },
    {
        kata: "No Effort",
        arti: "Without making an effort.",
        indonesia: "Tidak ada usaha atau kurang berupaya.",
        kategori: "Indo-English",
        contoh: "Dia mau hasil bagus tapi no effort."
    },
    {
        kata: "Keep It Lowkey",
        arti: "Keep something private or discreet.",
        indonesia: "Menjaga sesuatu agar tidak diketahui banyak orang.",
        kategori: "Indo-English",
        contoh: "Hubungan kita keep it lowkey dulu."
    },
    {
        kata: "Too Much",
        arti: "Excessive or more than necessary.",
        indonesia: "Berlebihan atau terlalu berlebihan.",
        kategori: "Indo-English",
        contoh: "Drama kamu too much banget."
    },
    {
        kata: "Make Sense",
        arti: "To be logical or understandable.",
        indonesia: "Masuk akal atau dapat dipahami.",
        kategori: "Indo-English",
        contoh: "Penjelasan dosen tadi make sense."
    },
    {
        kata: "On Point",
        arti: "Exactly right or very good.",
        indonesia: "Sangat tepat atau sesuai.",
        kategori: "Indo-English",
        contoh: "Outfit kamu hari ini on point!"
    },
    {
        kata: "My Bad",
        arti: "My mistake or my fault.",
        indonesia: "Salahku atau maaf atas kesalahanku.",
        kategori: "Indo-English",
        contoh: "My bad, aku lupa bawa bukunya."
    },
    {
        kata: "Trust The Process",
        arti: "Have faith in the process of achieving something.",
        indonesia: "Percaya pada proses untuk mencapai tujuan.",
        kategori: "Indo-English",
        contoh: "Belajar pelan-pelan, trust the process."
    },
    {
        kata: "It Is What It Is",
        arti: "Accepting a situation that cannot be changed.",
        indonesia: "Menerima keadaan yang memang sudah terjadi.",
        kategori: "Indo-English",
        contoh: "Nilai belum sesuai harapan, it is what it is."
    }
];

// ELEMENT WEBSITE
const kamusGrid = document.getElementById("kamusGrid");
const searchInput = document.getElementById("searchInput");
const hasilInfo = document.getElementById("hasilInfo");

let kategoriAktif = "All";

// MENAMPILKAN KATA
function tampilkanKata(data) {
    kamusGrid.innerHTML = "";

    hasilInfo.textContent =
        `Found ${data.length} slang words.`;

    if (data.length === 0) {
        kamusGrid.innerHTML = `
            <div class="kosong">
                <h3>Slang not found! 😅</h3>
                <p>Try searching for another word.</p>
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const kartu = document.createElement("article");
        kartu.className = "kamus-card";

        const bagianAtas = document.createElement("div");
        bagianAtas.className = "card-top";

        const judul = document.createElement("h3");
        judul.textContent = item.kata;

        const kategori = document.createElement("span");
        kategori.className = "kategori";
        kategori.textContent = item.kategori;

        const arti = document.createElement("p");
        arti.textContent = item.arti;

        const indonesia = document.createElement("p");
        indonesia.textContent = "🇮🇩 " + item.indonesia;

        const contoh = document.createElement("div");
        contoh.className = "contoh";
        contoh.textContent = "Example: " + item.contoh;

        bagianAtas.append(judul, kategori);
        kartu.append(bagianAtas, arti, indonesia, contoh);

        kamusGrid.appendChild(kartu);
    });
}

// FITUR PENCARIAN
function cariKata() {
    const keyword = searchInput.value.toLowerCase().trim();

    const hasil = daftarKata.filter(item => {
        const cocokKategori =
            kategoriAktif === "All" ||
            item.kategori === kategoriAktif;

        const cocokKata =
            item.kata.toLowerCase().includes(keyword) ||
            item.arti.toLowerCase().includes(keyword) ||
            item.indonesia.toLowerCase().includes(keyword);

        return cocokKategori && cocokKata;
    });

    tampilkanKata(hasil);
}

searchInput.addEventListener("input", cariKata);

// FITUR FILTER KATEGORI
document.querySelectorAll(".filter").forEach(tombol => {
    tombol.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(btn => {
            btn.classList.remove("active");
        });

        tombol.classList.add("active");
        kategoriAktif = tombol.dataset.kategori;

        cariKata();
    });
});

// FITUR KATA ACAK
function kataAcak() {
    const pilihan = daftarKata.filter(item =>
        kategoriAktif === "All" ||
        item.kategori === kategoriAktif
    );

    if (pilihan.length === 0) return;

    const acak = pilihan[
        Math.floor(Math.random() * pilihan.length)
    ];

    searchInput.value = acak.kata;
    tampilkanKata([acak]);
}

// MENAMPILKAN SEMUA KATA SAAT WEBSITE DIBUKA
tampilkanKata(daftarKata);
