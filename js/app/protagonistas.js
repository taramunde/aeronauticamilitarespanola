// Secciones Protagonistas y Grandes vuelos

function drawPeople(){
  $("#people").innerHTML=PEOPLE.map(p=>`<div class="person"><h3>${esc(p.n)}</h3><div class="life">${esc(p.l)}</div><p>${esc(p.d)}</p></div>`).join("");
}
function drawRaids(){
  $("#raids").innerHTML=RAIDS.map(r=>`<article class="raid">
    <div><div class="big">${r.y}</div><div class="route">${esc(r.km)}</div></div>
    <div><h3>${esc(r.n)}</h3><div class="route">${esc(r.r)}</div>
      <svg class="routesvg" viewBox="0 0 400 46" preserveAspectRatio="none" aria-hidden="true"><path d="M8 38 Q200 -14 392 38" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 5"/><circle cx="8" cy="38" r="5" fill="var(--ink)"/><circle cx="392" cy="38" r="5" fill="var(--gold)" stroke="var(--ink)"/></svg>
      <p><strong>Avión:</strong> ${esc(r.a)}. <strong>Tripulación:</strong> ${esc(r.c)}.</p><p>${esc(r.d)}</p>
      <p><button class="linkbtn" data-open="${r.id}">Ficha: ${esc(byId(r.id).name)}</button></p></div></article>`).join("");
}
