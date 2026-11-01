
const verses = [
  {
    id: "romans8",
    topic: "Forgiveness",
    ref: "Romans 8:1",
    text: "So now there is no condemnation for those who belong to Christ Jesus.",
    hi: "इसलिए अब जो मसीह यीशु में हैं, उन पर दण्ड की आज्ञा नहीं है।",
    or: "ଏଣୁ ଯେଉଁମାନେ ଖ୍ରୀଷ୍ଟ ଯୀଶୁଙ୍କଠାରେ ଅଛନ୍ତି, ସେମାନଙ୍କ ପାଇଁ ଏବେ କୌଣସି ଦଣ୍ଡାଜ୍ଞା ନାହିଁ।"
  },
  {
    id: "psalm103",
    topic: "Forgiveness",
    ref: "Psalm 103:12",
    text: "He has removed our sins as far from us as the east is from the west.",
    hi: "उसने हमारे अपराधों को हमसे उतनी दूर कर दिया है, जितनी दूर पूर्व पश्चिम से है।",
    or: "ସେ ଆମ୍ଭମାନଙ୍କ ଅପରାଧକୁ ଆମ୍ଭମାନଙ୍କଠାରୁ ପୂର୍ବ ଓ ପଶ୍ଚିମ ଯେତେ ଦୂର, ସେତେ ଦୂର କରିଦେଇଛନ୍ତି।"
  },
  {
    id: "john1",
    topic: "Forgiveness",
    ref: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
    hi: "यदि हम अपने पापों को मान लें, तो वह विश्वासयोग्य और धर्मी है, और हमारे पापों को क्षमा करके हमें सब अधर्म से शुद्ध करेगा।",
    or: "ଯଦି ଆମ୍ଭେମାନେ ଆପଣା ପାପ ସ୍ୱୀକାର କରୁ, ତେବେ ସେ ବିଶ୍ୱସ୍ତ ଓ ଧାର୍ମିକ ଅଟନ୍ତି; ସେ ଆମ୍ଭମାନଙ୍କ ପାପ କ୍ଷମା କରି ଆମ୍ଭମାନଙ୍କୁ ସମସ୍ତ ଅଧର୍ମରୁ ଶୁଦ୍ଧ କରିବେ।"
  },
  {
    id: "james4",
    topic: "Temptation",
    ref: "James 4:7",
    text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
    hi: "इसलिए अपने आप को परमेश्वर के अधीन कर दो। शैतान का विरोध करो, और वह तुम्हारे पास से भाग जाएगा।",
    or: "ଏଣୁ ତୁମ୍ଭେମାନେ ଈଶ୍ୱରଙ୍କର ବଶୀଭୂତ ହୁଅ। ଶୟତାନକୁ ପ୍ରତିରୋଧ କର, ତେବେ ସେ ତୁମ୍ଭମାନଙ୍କଠାରୁ ପଳାଇଯିବ।"
  },
  {
    id: "phil3",
    topic: "Moving Forward",
    ref: "Philippians 3:13–14",
    text: "Forgetting what is behind and straining toward what is ahead, I press on toward the goal.",
    hi: "पीछे की बातों को भूलकर और आगे की बातों की ओर बढ़ते हुए, मैं लक्ष्य की ओर दौड़ा चला जाता हूँ।",
    or: "ପଛରେ ଥିବା ବିଷୟସବୁ ଭୁଲିଯାଇ ଆଗରେ ଥିବା ବିଷୟସବୁ ପ୍ରତି ଅଗ୍ରସର ହୋଇ, ମୁଁ ଲକ୍ଷ୍ୟ ଆଡ଼କୁ ଦୌଡ଼ୁଛି।"
  },
  {
    id: "isaiah43",
    topic: "New Beginning",
    ref: "Isaiah 43:18–19",
    text: "Forget the former things; do not dwell on the past. See, I am doing a new thing!",
    hi: "पहली बातों को भूल जाओ; बीती बातों पर ध्यान मत दो। देखो, मैं एक नई बात करने जा रहा हूँ!",
    or: "ପୂର୍ବ କଥାସବୁ ଭୁଲିଯାଅ; ଅତୀତ ବିଷୟରେ ଚିନ୍ତା କର ନାହିଁ। ଦେଖ, ମୁଁ ଏକ ନୂଆ କାର୍ଯ୍ୟ କରୁଅଛି!"
  },
  {
    id: "psalm23",
    topic: "Strength",
    ref: "Psalm 23:1",
    text: "The Lord is my shepherd; I shall not want.",
    hi: "यहोवा मेरा चरवाहा है; मुझे कुछ घटी न होगी।",
    or: "ସଦାପ୍ରଭୁ ମୋର ପାଳକ; ମୋର ଅଭାବ ହେବ ନାହିଁ।"
  },
  {
    id: "phil4",
    topic: "Peace",
    ref: "Philippians 4:6–7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.",
    hi: "किसी भी बात की चिंता मत करो, बल्कि हर परिस्थिति में प्रार्थना और विनती के द्वारा अपनी माँगें परमेश्वर के सामने रखो।",
    or: "କୌଣସି ବିଷୟରେ ଚିନ୍ତିତ ହୁଅ ନାହିଁ; ବରଂ ପ୍ରତ୍ୟେକ ପରିସ୍ଥିତିରେ ପ୍ରାର୍ଥନା ଓ ନିବେଦନ ଦ୍ୱାରା ତୁମ୍ଭମାନଙ୍କ ଅନୁରୋଧ ଈଶ୍ୱରଙ୍କ ନିକଟରେ ଜଣାଅ।"
  }
];

const prayers = [
  {
    title: "When temptation feels strong",
    text: "Lord God, I feel weak right now and the urge is strong. I don't want to fall into this. Give me Your strength. Help me to stand up, move my feet, and walk away from this temptation. Fill my mind with Your peace instead of this desire. In Jesus' name, Amen.",
    hiTitle: "जब प्रलोभन बहुत मजबूत लगे",
    hi: "हे प्रभु परमेश्वर, इस समय मैं कमजोर महसूस कर रहा हूँ और प्रलोभन बहुत मजबूत है। मैं इसमें गिरना नहीं चाहता। मुझे अपनी शक्ति दीजिए। मुझे इससे दूर जाने में मदद कीजिए। मेरे मन को इस इच्छा के बजाय अपनी शांति से भर दीजिए। यीशु के नाम में, आमीन।",
    orTitle: "ଯେତେବେଳେ ପ୍ରଲୋଭନ ଅଧିକ ଶକ୍ତିଶାଳୀ ଲାଗେ",
    or: "ହେ ପ୍ରଭୁ ପରମେଶ୍ୱର, ଏହି ସମୟରେ ମୁଁ ଦୁର୍ବଳ ଅନୁଭବ କରୁଛି ଏବଂ ପ୍ରଲୋଭନ ଅଧିକ ଶକ୍ତିଶାଳୀ। ମୁଁ ଏଥିରେ ପଡ଼ିବାକୁ ଚାହେଁ ନାହିଁ। ମୋତେ ଆପଣଙ୍କ ଶକ୍ତି ଦିଅନ୍ତୁ। ଏହାଠାରୁ ଦୂରେଇ ଯିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ। ଯୀଶୁଙ୍କ ନାମରେ, ଆମେନ।"
  },
  {
    title: "For a fresh start",
    text: "Father, I bring You my past without hiding anything. Thank You for Your mercy. Help me leave yesterday where it belongs and walk forward in the new life You have given me. In Jesus' name, Amen.",
    hiTitle: "एक नई शुरुआत के लिए",
    hi: "हे पिता, मैं अपना अतीत आपके सामने बिना कुछ छिपाए रखता हूँ। आपकी दया के लिए धन्यवाद। मेरी मदद कीजिए कि मैं बीते कल को पीछे छोड़कर आपके दिए नए जीवन में आगे बढ़ूँ। यीशु के नाम में, आमीन।",
    orTitle: "ଏକ ନୂତନ ଆରମ୍ଭ ପାଇଁ",
    or: "ହେ ପିତା, ମୁଁ ମୋର ଅତୀତକୁ କିଛି ଲୁଚାଇ ନ ରଖି ଆପଣଙ୍କ ନିକଟରେ ରଖୁଛି। ଆପଣଙ୍କ ଦୟା ପାଇଁ ଧନ୍ୟବାଦ। ଗତକାଲିକୁ ପଛରେ ଛାଡ଼ି ଆପଣ ଦେଇଥିବା ନୂତନ ଜୀବନରେ ଆଗକୁ ବଢ଼ିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ। ଯୀଶୁଙ୍କ ନାମରେ, ଆମେନ।"
  },
  {
    title: "For strength today",
    text: "Lord, when I feel weak, remind me that I do not have to fight alone. Give me courage for the next step, peace for this moment, and strength to choose what is right. Amen.",
    hiTitle: "आज के लिए शक्ति",
    hi: "हे प्रभु, जब मैं कमजोर महसूस करूँ, तो मुझे याद दिलाइए कि मुझे अकेले संघर्ष नहीं करना है। अगले कदम के लिए साहस, इस पल के लिए शांति और सही चुनाव करने की शक्ति दीजिए। आमीन।",
    orTitle: "ଆଜି ପାଇଁ ଶକ୍ତି",
    or: "ହେ ପ୍ରଭୁ, ଯେତେବେଳେ ମୁଁ ଦୁର୍ବଳ ଅନୁଭବ କରେ, ମୋତେ ମନେ ପକାଇଦିଅନ୍ତୁ ଯେ ମୋତେ ଏକାକୀ ସଂଘର୍ଷ କରିବାକୁ ପଡ଼ିବ ନାହିଁ। ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ପାଇଁ ସାହସ, ଏହି ମୁହୂର୍ତ୍ତ ପାଇଁ ଶାନ୍ତି ଏବଂ ସଠିକ୍ ବାଛିବା ପାଇଁ ଶକ୍ତି ଦିଅନ୍ତୁ। ଆମେନ।"
  }
];

const translations = {
  en: {
    all: "All",
    empty: "No verses found. Try another word or topic.",
    savedEmpty: "Your saved verses will appear here.",
    save: "Saved to your favorites",
    remove: "Removed from favorites",
    removeBtn: "Remove",
    prayer: "Prayer",
    searchPlaceholder: "Search verses, topics, or prayers..."
  },
  hi: {
    all: "सभी",
    empty: "कोई वचन नहीं मिला। दूसरा शब्द या विषय खोजें।",
    savedEmpty: "आपके सहेजे गए वचन यहाँ दिखाई देंगे।",
    save: "पसंदीदा वचनों में सहेजा गया",
    remove: "पसंदीदा वचनों से हटाया गया",
    removeBtn: "हटाएँ",
    prayer: "प्रार्थना",
    searchPlaceholder: "वचन, विषय या प्रार्थना खोजें..."
  },
  or: {
    all: "ସମସ୍ତ",
    empty: "କୌଣସି ପଦ ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ଶବ୍ଦ କିମ୍ବା ବିଷୟ ଖୋଜନ୍ତୁ।",
    savedEmpty: "ଆପଣଙ୍କ ସଞ୍ଚିତ ପଦଗୁଡ଼ିକ ଏଠାରେ ଦେଖାଯିବ।",
    save: "ପ୍ରିୟ ପଦରେ ସଞ୍ଚୟ ହେଲା",
    remove: "ପ୍ରିୟ ପଦରୁ ହଟାଗଲା",
    removeBtn: "ହଟାନ୍ତୁ",
    prayer: "ପ୍ରାର୍ଥନା",
    searchPlaceholder: "ପଦ, ବିଷୟ କିମ୍ବା ପ୍ରାର୍ଥନା ଖୋଜନ୍ତୁ..."
  }
};

const grid = document.querySelector("#verseGrid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const languageSelect = document.querySelector("#languageSelect");
const favKey = "graceWordFavorites";

let active = "All";
let language = localStorage.getItem("gloryNestLanguage") || "en";

if (languageSelect) languageSelect.value = language;

const saved = () => JSON.parse(localStorage.getItem(favKey) || "[]");
const setSaved = a => {
  localStorage.setItem(favKey, JSON.stringify(a));
  renderFavorites();
  updateCount();
};

const t = () => translations[language] || translations.en;
const verseText = v => v[language] || v.text;
const prayerTitle = p => p[language + "Title"] || p.title;
const prayerText = p => p[language] || p.text;

function updateCount() {
  document.querySelector("#favCount").textContent = saved().length;
}

function toast(message) {
  const box = document.querySelector("#toast");
  if (!box) return;
  box.textContent = message;
  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), 1800);
}

function renderFilters() {
  const categories = ["All", ...new Set(verses.map(v => v.topic))];

  filters.innerHTML = categories.map(category => {
    const label = category === "All" ? t().all : category;
    return `<button class="filter ${category === active ? "active" : ""}"
      data-filter="${category}">${label}</button>`;
  }).join("");

  filters.querySelectorAll(".filter").forEach(button => {
    button.onclick = () => {
      active = button.dataset.filter;
      renderFilters();
      renderVerses();
    };
  });
}

function renderVerses() {
  const query = search.value.toLowerCase().trim();
  const favorites = saved();

  const data = verses.filter(v =>
    (active === "All" || v.topic === active) &&
    (!query || `${v.text} ${v.hi} ${v.or} ${v.ref} ${v.topic}`
      .toLowerCase().includes(query))
  );

  grid.innerHTML = data.length ? data.map(v => `
    <article class="verse-card">
      <button class="save" data-save="${v.id}" aria-label="Save verse">
        ${favorites.includes(v.id) ? "♥" : "♡"}
      </button>
      <span class="topic">${v.topic}</span>
      <blockquote>“${verseText(v)}”</blockquote>
      <span class="ref">${v.ref}</span>
    </article>
  `).join("") : `<p class="empty">${t().empty}</p>`;

  grid.querySelectorAll("[data-save]").forEach(button => {
    button.onclick = () => toggleFavorite(button.dataset.save);
  });
}

function toggleFavorite(id) {
  let favorites = saved();

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    toast(t().remove);
  } else {
    favorites.push(id);
    toast(t().save);
  }

  setSaved(favorites);
  renderVerses();
}

function renderFavorites() {
  const box = document.querySelector("#favoritesList");
  const favorites = saved();

  if (!favorites.length) {
    box.innerHTML = `<p class="empty">${t().savedEmpty}</p>`;
    return;
  }

  box.innerHTML = favorites.map(id => {
    const verse = verses.find(v => v.id === id);
    if (!verse) return "";

    return `
      <div class="favorite-row">
        <div>
          <blockquote>“${verseText(verse)}”</blockquote>
          <small>${verse.ref} · ${verse.topic}</small>
        </div>
        <button class="remove" data-remove="${id}">${t().removeBtn}</button>
      </div>
    `;
  }).join("");

  box.querySelectorAll("[data-remove]").forEach(button => {
    button.onclick = () => toggleFavorite(button.dataset.remove);
  });
}

function renderPrayers() {
  document.querySelector("#prayerGrid").innerHTML = prayers.map(p => `
    <article class="prayer">
      <p class="eyebrow">${t().prayer}</p>
      <h3>${prayerTitle(p)}</h3>
      <p>${prayerText(p)}</p>
    </article>
  `).join("");
}

function showDailyVerse(verse) {
  document.querySelector("#dailyVerse").textContent = `“${verseText(verse)}”`;
  document.querySelector("#dailyRef").textContent = verse.ref;
  document.querySelector("#dailyVerse").dataset.id = verse.id;
}

function daily() {
  const verse = verses[new Date().getDate() % verses.length];
  showDailyVerse(verse);
}

document.querySelector("#randomBtn").onclick = () => {
  const verse = verses[Math.floor(Math.random() * verses.length)];
  showDailyVerse(verse);
  toast(language === "hi" ? "आज के लिए एक वचन" :
        language === "or" ? "ଏହି ମୁହୂର୍ତ୍ତ ପାଇଁ ଏକ ପଦ" :
        "A verse for this moment");
};

document.querySelector(".heart-btn").onclick = () => {
  const id = document.querySelector("#dailyVerse").dataset.id;
  if (id) toggleFavorite(id);
};

document.querySelector(".menu-btn").onclick = () => {
  document.querySelector(".site-header nav").classList.toggle("open");
};

document.querySelectorAll(".download-poster").forEach(button => {
  button.onclick = () => toast(`Poster ready: ${button.dataset.title}`);
});

search.oninput = renderVerses;

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    language = languageSelect.value;
    localStorage.setItem("gloryNestLanguage", language);

    search.placeholder = t().searchPlaceholder;

    renderFilters();
    renderVerses();
    renderPrayers();
    renderFavorites();
    daily();
  });
}

search.placeholder = t().searchPlaceholder;

renderFilters();
renderVerses();
renderPrayers();
renderFavorites();
updateCount();
daily();
