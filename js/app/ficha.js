// Ventana de ficha técnica

// Hueco de foto: si la imagen no existe todavía, muestra la ruta donde debe ir
function fotoHTML(a){
  if(!a.image) return "";
  return `<figure class="foto">
    <img src="${esc(a.image)}" alt="${esc(a.name)}" loading="lazy"
      onerror="this.parentNode.classList.add('vacia');this.remove()">
    <div class="hueco"><strong>Foto pendiente</strong><span>${esc(a.image)}</span></div>
    ${a.imageCredit?`<figcaption>${esc(a.imageCredit)}</figcaption>`:""}
  </figure>`;
}

function variantesHTML(a){
  if(!a.variants||!a.variants.length) return "";
  return `<h4>Variantes en servicio español</h4><ul class="variantes">${a.variants.map(v=>`
    <li><div class="vtop"><strong>${esc(v.name)}</strong>${v.year?`<span>${v.year}</span>`:""}</div>
    ${v.engine?`<div class="vmot">${esc(v.engine)}</div>`:""}${v.desc?`<p>${esc(v.desc)}</p>`:""}</li>`).join("")}</ul>`;
}

function openFicha(id){
  const a=byId(id);if(!a)return;
  const helo=a.type==="helicoptero";
  const sp=[["Entrada en servicio",years(a)],["Tripulación",a.crew],
    ["Velocidad máx.",fmt(a.maxSpeed)+" km/h"],["Alcance",fmt(a.range)+" km"],["Techo",fmt(a.ceiling)+" m"],
    ["Peso vacío",fmt(a.emptyWeight)+" kg"],["Peso máx.",fmt(a.maxWeight)+" kg"],
    [helo?"Diámetro rotor":"Envergadura",fmt(a.wingspan)+" m"],["Longitud",fmt(a.length)+" m"],["Altura",fmt(a.height)+" m"]];
  $("#fichaBody").innerHTML=`
    <header><div><div class="desig">${esc(a.designation)}</div><h3>${esc(a.name)}</h3>${a.nick?`<div class="nick">«${esc(a.nick)}»</div>`:""}
      <div class="tagrow"><span class="tag">${esc(a.typeLabel||TYPES[a.type])}</span><span class="tag" style="border-color:${BRANCHES[a.branch].color}">${BRANCHES[a.branch].label}</span><span class="tag">${ERAS[a.era].label}</span></div></div>
      <button class="close" aria-label="Cerrar ficha" onclick="document.getElementById('ficha').close()">×</button></header>
    ${fotoHTML(a)}
    <p>${esc(a.description)}</p>
    <dl class="specs">${sp.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    <h4>Planta motriz</h4><p>${esc(a.engine)}</p>
    <h4>Armamento</h4><p>${esc(a.armament)}</p>
    <h4>Unidades</h4><p>${esc(a.units)}</p>
    <h4>Historia en España</h4><p>${esc(a.history)}</p>
    ${variantesHTML(a)}
    <p style="margin-top:1rem"><button class="linkbtn" data-cmp="${a.id}">Comparar con otra aeronave</button></p>`;
  const d=$("#ficha");if(!d.open)d.showModal();d.scrollTop=0;
}
$("#ficha").addEventListener("click",e=>{if(e.target.id==="ficha")e.target.close()});
