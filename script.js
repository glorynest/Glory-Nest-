```javascript
const verses = [
  {
    id: "romans8",
    topic: "Forgiveness",
    ref: "Romans 8:1",
    text: "So now there is no condemnation for those who belong to Christ Jesus.",
    hindi: "इसलिए अब जो मसीह यीशु में हैं, उन पर दण्ड की आज्ञा नहीं।",
    odia: "ଏଣୁ ଯେଉଁମାନେ ଖ୍ରୀଷ୍ଟ ଯୀଶୁଙ୍କଠାରେ ଅଛନ୍ତି, ସେମାନଙ୍କ ପାଇଁ ଆଉ ଦଣ୍ଡାଜ୍ଞା ନାହିଁ।"
  },
  {
    id: "psalm103",
    topic: "Forgiveness",
    ref: "Psalm 103:12",
    text: "He has removed our sins as far from us as the east is from the west.",
    hindi: "उसने हमारे अपराधों को हमसे उतनी दूर कर दिया है, जितनी दूर पूर्व पश्चिम से है।",
    odia: "ପୂର୍ବଠାରୁ ପଶ୍ଚିମ ଯେତେ ଦୂର, ସେ ଆମ୍ଭମାନଙ୍କଠାରୁ ଆମ୍ଭମାନଙ୍କ ଅପରାଧ ସେତେ ଦୂର କରିଅଛନ୍ତି।"
  },
  {
    id: "john1",
    topic: "Forgiveness",
    ref: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
    hindi: "यदि हम अपने पापों को मान लें, तो वह हमारे पापों को क्षमा करने और हमें सब अधर्म से शुद्ध करने में विश्वासयोग्य और धर्मी है।",
    odia: "ଯଦି ଆମ୍ଭେମାନେ ଆପଣା ପାପ ସ୍ୱୀକାର କରୁ, ତେବେ ସେ ଆମ୍ଭମାନଙ୍କ ପାପ କ୍ଷମା କରିବାକୁ ଓ ସମସ୍ତ ଅଧର୍ମରୁ ଶୁଦ୍ଧ କରିବାକୁ ବିଶ୍ୱସ୍ତ ଓ ଧାର୍ମିକ ଅଟନ୍ତି।"
  },
  {
    id: "james4",
    topic: "Temptation",
    ref: "James 4:7",
    text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
    hindi: "इसलिए परमेश्वर के अधीन हो जाओ; शैतान का सामना करो, तो वह तुम्हारे पास से भाग जाएगा।",
    odia: "ଅତଏବ ତୁମ୍ଭେମାନେ ଈଶ୍ୱରଙ୍କର ବଶୀଭୂତ ହୁଅ; ଶୟତାନର ପ୍ରତିରୋଧ କର, ତାହାହେଲେ ସେ ତୁମ୍ଭମାନଙ୍କଠାରୁ ପଳାଇଯିବ।"
  },
  {
    id: "phil3",
    topic: "Moving Forward",
    ref: "Philippians 3:13–14",
    text: "Forgetting what is behind and straining toward what is ahead, I press on toward the goal.",
    hindi: "पीछे की बातें भूलकर और आगे की बातों की ओर बढ़कर, मैं लक्ष्य की ओर दौड़ा चला जाता हूँ।",
    odia: "ପଛରେ ଥିବା ବିଷୟସବୁ ଭୁଲି ଆଗରେ ଥିବା ବିଷୟସବୁ ଆଡ଼କୁ ଅଗ୍ରସର ହୋଇ, ମୁଁ ଲକ୍ଷ୍ୟ ଆଡ଼କୁ ଦୌଡ଼ୁଅଛି।"
  },
  {
    id: "isaiah43",
    topic: "New Beginning",
    ref: "Isaiah 43:18–19",
    text: "Forget the former things; do not dwell on the past. See, I am doing a new thing!",
    hindi: "पहिली बातों को स्मरण मत करो, और पुरानी बातों पर मन मत लगाओ। देखो, मैं एक नई बात करता हूँ!",
    odia: "ପୂର୍ବ କଥାସବୁ ସ୍ମରଣ କର ନାହିଁ, ପୁରାତନ ବିଷୟସବୁ ମନେ ରଖ ନାହିଁ। ଦେଖ, ମୁଁ ଏକ ନୂତନ କାର୍ଯ୍ୟ କରୁଅଛି!"
  },
  {
    id: "psalm23",
    topic: "Strength",
    ref: "Psalm 23:1",
    text: "The Lord is my shepherd; I shall not want.",
    hindi: "यहोवा मेरा चरवाहा है; मुझे किसी बात की घटी न होगी।",
    odia: "ସଦାପ୍ରଭୁ ମୋହର ମେଷପାଳକ; ମୋହର ଅଭାବ ହେବ ନାହିଁ।"
  },
  {
    id: "phil4",
    topic: "Peace",
    ref: "Philippians 4:6–7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.",
    hindi: "किसी भी बात की चिन्ता मत करो; परन्तु हर बात में प्रार्थना और विनती के द्वारा अपने निवेदन परमेश्वर के सम्मुख उपस्थित करो।",
    odia: "କୌଣସି ବିଷୟରେ ଚିନ୍ତିତ ହୁଅ ନାହିଁ; କିନ୍ତୁ ସବୁ ବିଷୟରେ ପ୍ରାର୍ଥନା ଓ ନିବେଦନ ଦ୍ୱାରା ତୁମ୍ଭମାନଙ୍କର ଅନୁରୋଧ ଈଶ୍ୱରଙ୍କ ନିକଟରେ ଜଣାଅ।"
  }
];

const prayers = [
  {
    title: "When temptation feels strong",
    text: "Lord God, I feel weak right now and the urge is strong. I don't want to fall into this. Give me Your strength. Help me to stand up, move my feet, and walk away from this temptation. Fill my mind with Your peace instead of this desire. In Jesus' name, Amen."
  },
  {
    title: "For a fresh start",
    text: "Father, I bring You my past without hiding anything. Thank You for Your mercy. Help me leave yesterday where it belongs and walk forward in the new life You have given me. In Jesus' name, Amen."
  },
  {
    title: "For strength today",
    text: "Lord, when I feel weak, remind me that I do not have to fight alone. Give me courage for the next step, peace for this moment, and strength to choose what is right. Amen."
  }
];

const hindiPrayers = [
  {
    title: "जब प्रलोभन कठिन लगे",
    text: "हे प्रभु परमेश्वर, इस समय मैं स्वयं को कमजोर महसूस करता हूँ और प्रलोभन बहुत प्रबल है। मैं इसमें गिरना नहीं चाहता। मुझे अपनी सामर्थ्य दे। मेरी सहायता कर कि मैं उठकर इस प्रलोभन से दूर चला जाऊँ। इस इच्छा के स्थान पर मेरे मन को अपनी शांति से भर दे। यीशु के नाम में, आमीन।"
  },
  {
    title: "एक नई शुरुआत के लिए",
    text: "हे पिता, मैं अपना अतीत आपके सामने लाता हूँ और कुछ भी नहीं छिपाता। आपकी दया के लिए धन्यवाद। मेरी सहायता कर कि मैं बीते हुए कल को वहीं छोड़ दूँ और उस नए जीवन में आगे बढ़ूँ जो आपने मुझे दिया है। यीशु के नाम में, आमीन।"
  },
  {
    title: "आज के लिए सामर्थ्य",
    text: "हे प्रभु, जब मैं कमजोर महसूस करूँ, तो मुझे याद दिला कि मुझे अकेले संघर्ष नहीं करना है। अगले कदम के लिए साहस, इस पल के लिए शांति और सही चुनाव करने की सामर्थ्य दे। आमीन।"
  }
];

const odiaPrayers = [
  {
    title: "ଯେତେବେଳେ ପ୍ରଲୋଭନ ଶକ୍ତିଶାଳୀ ଲାଗେ",
    text: "ହେ ପ୍ରଭୁ ପରମେଶ୍ୱର, ଏହି ସମୟରେ ମୁଁ ଦୁର୍ବଳ ଅନୁଭବ କରୁଛି ଏବଂ ପ୍ରଲୋଭନ ବହୁତ ଶକ୍ତିଶାଳୀ। ମୁଁ ଏଥିରେ ପଡ଼ିବାକୁ ଚାହେଁ ନାହିଁ। ମୋତେ ତୁମ୍ଭର ଶକ୍ତି ଦିଅ। ଏହି ପ୍ରଲୋଭନଠାରୁ ଦୂରେଇ ଯିବାକୁ ମୋତେ ସାହାଯ୍ୟ କର। ଯୀଶୁଙ୍କ ନାମରେ, ଆମେନ୍।"
  },
  {
    title: "ଏକ ନୂତନ ଆରମ୍ଭ ପାଇଁ",
    text: "ହେ ପିତା, ମୁଁ ମୋର ଅତୀତକୁ ତୁମ୍ଭଙ୍କ ନିକଟରେ ଆଣୁଛି, କିଛି ଲୁଚାଉ ନାହିଁ। ତୁମ୍ଭର ଦୟା ପାଇଁ ଧନ୍ୟବାଦ। ଗତକାଲିକୁ ପଛରେ ଛାଡ଼ି ତୁମ୍ଭେ ମୋତେ ଦେଇଥିବା ନୂତନ ଜୀବନରେ ଆଗକୁ ବଢ଼ିବାକୁ ସାହାଯ୍ୟ କର। ଯୀଶୁଙ୍କ ନାମରେ, ଆମେନ୍।"
  },
  {
    title: "ଆଜି ପାଇଁ ଶକ୍ତି",
    text: "ହେ ପ୍ରଭୁ, ଯେତେବେଳେ ମୁଁ ଦୁର୍ବଳ ଅନୁଭବ କରେ, ମୋତେ ମନେ ପକାଇଦିଅ ଯେ ମୋତେ ଏକାକୀ ସଂଘର୍ଷ କରିବାକୁ ପଡ଼ିବ ନାହିଁ। ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ପାଇଁ ସାହସ, ଏହି ମୁହୂର୍ତ୍ତ ପାଇଁ ଶାନ୍ତି ଏବଂ ସଠିକ୍ ନିଷ୍ପତ୍ତି ନେବାକୁ ଶକ୍ତି ଦିଅ। ଆମେନ୍।"
  }
];

const grid = document.querySelector("#verseGrid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const languageSelect = document.querySelector("#languageSelect");

const favKey = "graceWordFavorites";
const languageKey = "gloryNestLanguage";

let active = "All";
let currentLanguage = localStorage.getItem(languageKey) || "en";

if (!["en", "hi", "or"].includes(currentLanguage)) {
  currentLanguage = "en";
}

languageSelect.value = currentLanguage;

const isHindi = () => currentLanguage === "hi";
const isOdia = () => currentLanguage === "or";

const verseText = v => {
  if (isHindi()) return v.hindi;
  if (isOdia()) return v.odia;
  return v.text;
};

const saved = () => JSON.parse(localStorage.getItem(favKey) || "[]");

const setSaved = a => {
  localStorage.setItem(favKey, JSON.stringify(a));
  renderFavorites();
  updateCount();
};

function updateCount() {
  document.querySelector("#favCount").textContent = saved().length;
}

function toast(t) {
  const x = document.querySelector("#toast");
  x.textContent = t;
  x.classList.add("show");
  setTimeout(() => x.classList.remove("show"), 1800);
}

function updateLanguageHeadings() {
  document.documentElement.lang = currentLanguage;

  const headings = {
    "Explore Scripture": {
      hi: "बाइबल के वचन पढ़ें",
      or: "ବାଇବଲର ବାକ୍ୟ ପଢ଼ନ୍ତୁ"
    },
    "Prayers for the moment": {
      hi: "इस पल के लिए प्रार्थनाएँ",
      or: "ଏହି ମୁହୂର୍ତ୍ତ ପାଇଁ ପ୍ରାର୍ଥନା"
    },
    "Saved verses": {
      hi: "सहेजे गए वचन",
      or: "ସଞ୍ଚିତ ବାକ୍ୟ"
    }
  };

  document.querySelectorAll("h2").forEach(heading => {
    const englishText =
      heading.dataset.englishText || heading.textContent.trim();

    heading.dataset.englishText = englishText;

    if (headings[englishText]) {
      heading.textContent =
        headings[englishText][currentLanguage] || englishText;
    }
  });
}

function renderFilters() {
  const cats = ["All", ...new Set(verses.map(v => v.topic))];

  filters.innerHTML = cats.map(c =>
    `<button class="filter ${c === active ? "active" : ""}" data-filter="${c}">${c}</button>`
  ).join("");

  filters.querySelectorAll(".filter").forEach(b => {
    b.onclick = () => {
      active = b.dataset.filter;
      renderFilters();
      renderVerses();
    };
  });
}

function renderVerses() {
  const q = search.value.toLowerCase().trim();
  const fav = saved();

  const data = verses.filter(v =>
    (active === "All" || v.topic === active) &&
    (!q || `${v.text} ${v.hindi} ${v.odia} ${v.ref} ${v.topic}`
      .toLowerCase().includes(q))
  );

  grid.innerHTML = data.length
    ? data.map(v => `
      <article class="verse-card">
        <button class="save" data-save="${v.id}" aria-label="Save verse">
          ${fav.includes(v.id) ? "♥" : "♡"}
        </button>
        <span class="topic">${v.topic}</span>
        <blockquote>“${verseText(v)}”</blockquote>
        <span class="ref">${v.ref}</span>
      </article>
    `).join("")
    : `<p class="empty">${
        isHindi()
          ? "कोई वचन नहीं मिला। कोई दूसरा शब्द या विषय खोजें।"
          : isOdia()
            ? "କୌଣସି ବାକ୍ୟ ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ଶବ୍ଦ କିମ୍ବା ବିଷୟ ଖୋଜନ୍ତୁ।"
            : "No verses found. Try another word or topic."
      }</p>`;

  grid.querySelectorAll("[data-save]").forEach(b => {
    b.onclick = () => toggleFavorite(b.dataset.save);
  });
}

function toggleFavorite(id) {
  let f = saved();

  if (f.includes(id)) {
    f = f.filter(x => x !== id);

    toast(
      isHindi()
        ? "सहेजे गए वचनों से हटाया गया"
        : isOdia()
          ? "ସଞ୍ଚିତ ବାକ୍ୟରୁ ହଟାଗଲା"
          : "Removed from favorites"
    );
  } else {
    f.push(id);

    toast(
      isHindi()
        ? "वचन सहेज लिया गया"
        : isOdia()
          ? "ବାକ୍ୟ ସଞ୍ଚୟ ହେଲା"
          : "Saved to your favorites"
    );
  }

  setSaved(f);
  renderVerses();
}

function renderFavorites() {
  const box = document.querySelector("#favoritesList");
  const f = saved();

  if (!f.length) {
    box.innerHTML = `<p class="empty">${
      isHindi()
        ? "आपके सहेजे गए वचन यहाँ दिखाई देंगे।"
        : isOdia()
          ? "ଆପଣଙ୍କର ସଞ୍ଚିତ ବାକ୍ୟ ଏଠାରେ ଦେଖାଯିବ।"
          : "Your saved verses will appear here."
    }</p>`;
    return;
  }

  box.innerHTML = f.map(id => {
    const v = verses.find(x => x.id === id);
    if (!v) return "";

    return `
      <div class="favorite-row">
        <div>
          <blockquote>“${verseText(v)}”</blockquote>
          <small>${v.ref} · ${v.topic}</small>
        </div>
        <button class="remove" data-remove="${id}">
          ${isHindi() ? "हटाएँ" : isOdia() ? "ହଟାନ୍ତୁ" : "Remove"}
        </button>
      </div>
    `;
  }).join("");

  box.querySelectorAll("[data-remove]").forEach(b => {
    b.onclick = () => toggleFavorite(b.dataset.remove);
  });
}

function renderPrayers() {
  const prayerList = isHindi()
    ? hindiPrayers
    : isOdia()
      ? odiaPrayers
      : prayers;

  const prayerLabel = isHindi()
    ? "प्रार्थना"
    : isOdia()
      ? "ପ୍ରାର୍ଥନା"
      : "Prayer";

  document.querySelector("#prayerGrid").innerHTML = prayerList.map(p => `
    <article class="prayer">
      <p class="eyebrow">${prayerLabel}</p>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </article>
  `).join("");
}

function showDailyVerse(v) {
  document.querySelector("#dailyVerse").textContent = `“${verseText(v)}”`;
  document.querySelector("#dailyRef").textContent = v.ref;
  document.querySelector("#dailyVerse").dataset.id = v.id;
}

function daily() {
  const v = verses[new Date().getDate() % verses.length];
  showDailyVerse(v);
}

languageSelect.onchange = () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem(languageKey, currentLanguage);

  updateLanguageHeadings();
  renderVerses();
  renderPrayers();
  renderFavorites();
  daily();
};

document.querySelector("#randomBtn").onclick = () => {
  const v = verses[Math.floor(Math.random() * verses.length)];
  showDailyVerse(v);

  toast(
    isHindi()
      ? "इस पल के लिए एक वचन"
      : isOdia()
        ? "ଏହି ମୁହୂର୍ତ୍ତ ପାଇଁ ଏକ ବାକ୍ୟ"
        : "A verse for this moment"
  );
};

document.querySelector(".heart-btn").onclick = () => {
  const id = document.querySelector("#dailyVerse").dataset.id;
  if (id) toggleFavorite(id);
};

document.querySelector(".menu-btn").onclick = () =>
  document.querySelector(".site-header nav").classList.toggle("open");

document.querySelectorAll(".download-poster").forEach(b =>
  b.onclick = () => toast(`Poster ready: ${b.dataset.title}`)
);

search.oninput = renderVerses;

updateLanguageHeadings();
renderFilters();
renderVerses();
renderPrayers();
renderFavorites();
updateCount();
daily();
```
