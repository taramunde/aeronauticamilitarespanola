// Ventana de ficha técnica

function openFicha(id){
  const a=byId(id);if(!a)return;
  const sp=[["Entrada en servicio",years(a)],["Tripulación",a.crew],["Velocidad máx.",fmt(a.maxSpeed)+" km/h"],["Alcance",fmt(a.range)+" km"],["Techo",fmt(a.ceiling)+" m"],["Peso máx.",fmt(a.maxWeight)+" kg"],[a.type==="helicoptero"?"Diámetro rotor":"Envergadura",fmt(a.wingspan)+" m"],["Longitud",fmt(a.length)+" m"]];
  $("#fichaBody").innerHTML=`
    <header><div><div class="desig">${esc(a.designation)}</div><h3>${esc(a.name)}</h3>${a.nick?`<div class="nick">«${esc(a.nick)}»</div>`:""}
      <div class="tagrow"><span class="tag">${TYPES[a.type]}</span><span class="tag" style="border-color:${BRANCHES[a.branch].color}">${BRANCHES[a.branch].label}</span><span class="tag">${ERAS[a.era].label}</span></div></div>
      <button class="close" aria-label="Cerrar ficha" onclick="document.getElementById('ficha').close()">×</button></header>
    <p>${esc(a.description)}</p>
    <dl class="specs">${sp.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    <h4>Planta motriz</h4><p>${esc(a.engine)}</p>
    <h4>Armamento</h4><p>${esc(a.armament)}</p>
    <h4>Unidades</h4><p>${esc(a.units)}</p>
    <h4>Historia en España</h4><p>${esc(a.history)}</p>
    <p style="margin-top:1rem"><button class="linkbtn" data-cmp="${a.id}">Comparar con otra aeronave</button></p>`;
  const d=$("#ficha");if(!d.open)d.showModal();d.scrollTop=0;
}
$("#ficha").addEventListener("click",e=>{if(e.target.id==="ficha")e.target.close()});
