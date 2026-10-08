const verses = [
  {id:"romans8",topic:"Forgiveness",ref:"Romans 8:1",text:"So now there is no condemnation for those who belong to Christ Jesus."},
  {id:"psalm103",topic:"Forgiveness",ref:"Psalm 103:12",text:"He has removed our sins as far from us as the east is from the west."},
  {id:"john1",topic:"Forgiveness",ref:"1 John 1:9",text:"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."},
  {id:"james4",topic:"Temptation",ref:"James 4:7",text:"Submit yourselves therefore to God. Resist the devil, and he will flee from you."},
  {id:"phil3",topic:"Moving Forward",ref:"Philippians 3:13–14",text:"Forgetting what is behind and straining toward what is ahead, I press on toward the goal."},
  {id:"isaiah43",topic:"New Beginning",ref:"Isaiah 43:18–19",text:"Forget the former things; do not dwell on the past. See, I am doing a new thing!"},
  {id:"psalm23",topic:"Strength",ref:"Psalm 23:1",text:"The Lord is my shepherd; I shall not want."},
  {id:"phil4",topic:"Peace",ref:"Philippians 4:6–7",text:"Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God."}
];

const prayers = [
  {title:"When temptation feels strong",text:"Lord God, I feel weak right now and the urge is strong. I don't want to fall into this. Give me Your strength. Help me to stand up, move my feet, and walk away from this temptation. Fill my mind with Your peace instead of this desire. In Jesus' name, Amen."},
  {title:"For a fresh start",text:"Father, I bring You my past without hiding anything. Thank You for Your mercy. Help me leave yesterday where it belongs and walk forward in the new life You have given me. In Jesus' name, Amen."},
  {title:"For strength today",text:"Lord, when I feel weak, remind me that I do not have to fight alone. Give me courage for the next step, peace for this moment, and strength to choose what is right. Amen."}
];

const grid=document.querySelector("#verseGrid"), filters=document.querySelector("#filters"), search=document.querySelector("#search");
const favKey="graceWordFavorites";
let active="All";
const saved=()=>JSON.parse(localStorage.getItem(favKey)||"[]");
const setSaved=a=>{localStorage.setItem(favKey,JSON.stringify(a));renderFavorites();updateCount()};
function updateCount(){document.querySelector("#favCount").textContent=saved().length}
function toast(t){const x=document.querySelector("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1800)}
function renderFilters(){
  const cats=["All",...new Set(verses.map(v=>v.topic))];
  filters.innerHTML=cats.map(c=>`<button class="filter ${c===active?"active":""}" data-filter="${c}">${c}</button>`).join("");
  filters.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{active=b.dataset.filter;renderFilters();renderVerses()});
}
function renderVerses(){
  const q=search.value.toLowerCase().trim();
  const fav=saved();
  const data=verses.filter(v=>(active==="All"||v.topic===active)&&(!q||`${v.text} ${v.ref} ${v.topic}`.toLowerCase().includes(q)));
  grid.innerHTML=data.length?data.map(v=>`<article class="verse-card"><button class="save" data-save="${v.id}" aria-label="Save verse">${fav.includes(v.id)?"♥":"♡"}</button><span class="topic">${v.topic}</span><blockquote>“${v.text}”</blockquote><span class="ref">${v.ref}</span></article>`).join(""):`<p class="empty">No verses found. Try another word or topic.</p>`;
  grid.querySelectorAll("[data-save]").forEach(b=>b.onclick=()=>toggleFavorite(b.dataset.save));
}
function toggleFavorite(id){
  let f=saved(); const v=verses.find(x=>x.id===id);
  if(f.includes(id)){f=f.filter(x=>x!==id);toast("Removed from favorites");}
  else{f.push(id);toast("Saved to your favorites");}
  setSaved(f);renderVerses();
}
function renderFavorites(){
  const box=document.querySelector("#favoritesList"), f=saved();
  if(!f.length){box.innerHTML='<p class="empty">Your saved verses will appear here.</p>';return}
  box.innerHTML=f.map(id=>{const v=verses.find(x=>x.id===id);return `<div class="favorite-row"><div><blockquote>“${v.text}”</blockquote><small>${v.ref} · ${v.topic}</small></div><button class="remove" data-remove="${id}">Remove</button></div>`}).join("");
  box.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>toggleFavorite(b.dataset.remove));
}
function renderPrayers(){
  document.querySelector("#prayerGrid").innerHTML=prayers.map(p=>`<article class="prayer"><p class="eyebrow">Prayer</p><h3>${p.title}</h3><p>${p.text}</p></article>`).join("");
}
function daily(){
  const v=verses[new Date().getDate()%verses.length];
  document.querySelector("#dailyVerse").textContent=`“${v.text}”`;
  document.querySelector("#dailyRef").textContent=v.ref;
  document.querySelector("#dailyVerse").dataset.id=v.id;
}
document.querySelector("#randomBtn").onclick=()=>{
  const v=verses[Math.floor(Math.random()*verses.length)];
  document.querySelector("#dailyVerse").textContent=`“${v.text}”`;
  document.querySelector("#dailyRef").textContent=v.ref;
  toast("A verse for this moment");
};
document.querySelector(".heart-btn").onclick=()=>{
  const id=document.querySelector("#dailyVerse").dataset.id;
  if(id) toggleFavorite(id);
};
document.querySelector(".menu-btn").onclick=()=>document.querySelector(".site-header nav").classList.toggle("open");
document.querySelectorAll(".download-poster").forEach(b=>b.onclick=()=>toast(`Poster ready: ${b.dataset.title}`));
search.oninput=renderVerses;
renderFilters();renderVerses();renderPrayers();renderFavorites();updateCount();daily();
