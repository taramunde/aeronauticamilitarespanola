// Sección Cronología

let tlEra="all";
function drawChips(){
  const opts=[["all","Todo"],...Object.entries(ERAS).map(([k,v])=>[k,v.label])];
  $("#eraChips").innerHTML=opts.map(([k,l])=>`<button class="chip" data-era="${k}" aria-pressed="${k===tlEra}">${l}</button>`).join("");
  $("#eraChips").querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{tlEra=c.dataset.era;drawChips();drawTimeline()}));
}
function drawTimeline(){
  $("#timeline").innerHTML=TIMELINE.filter(t=>tlEra==="all"||t.era===tlEra).map(t=>`
    <li class="${t.k?"k":""}"><div class="yr">${t.y}</div><div>
      <h3>${esc(t.t)}</h3><p>${esc(t.d)}</p>
      ${t.rel?`<div class="rel">${t.rel.map(id=>{const a=byId(id);return a?`<button class="linkbtn" data-open="${id}">Ficha: ${esc(a.name)}</button>`:""}).join("")}</div>`:""}
    </div></li>`).join("");
}
