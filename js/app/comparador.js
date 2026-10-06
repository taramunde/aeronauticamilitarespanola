// Sección Comparador

function drawCompare(){
  const a=byId(+$("#cA").value),b=byId(+$("#cB").value);
  const M=[["maxSpeed","Velocidad máxima","km/h"],["range","Alcance","km"],["ceiling","Techo de servicio","m"],["maxWeight","Peso máximo al despegue","kg"],["length","Longitud","m"],["wingspan","Envergadura o rotor","m"]];
  $("#cmp").innerHTML=M.map(([k,l,u])=>{const mx=Math.max(a[k],b[k])||1;return `<div class="metric"><h3>${l}</h3>
    <div class="bar a"><div class="lab"><span>${esc(a.name)}</span><span>${fmt(a[k])} ${u}</span></div><div class="trk"><div class="fill" style="width:${a[k]/mx*100}%"></div></div></div>
    <div class="bar b"><div class="lab"><span>${esc(b.name)}</span><span>${fmt(b[k])} ${u}</span></div><div class="trk"><div class="fill" style="width:${b[k]/mx*100}%"></div></div></div></div>`}).join("")+
    `<p class="intro">Separación en el tiempo: ${Math.abs(a.year-b.year)} años. ${a.maxSpeed>b.maxSpeed?esc(a.name)+" es "+(a.maxSpeed/b.maxSpeed).toFixed(1).replace(".",",")+" veces más rápido.":esc(b.name)+" es "+(b.maxSpeed/a.maxSpeed).toFixed(1).replace(".",",")+" veces más rápido."}</p>`;
}
function initCompare(){
  const o=aircraftData.map(a=>`<option value="${a.id}">${esc(a.name)} (${a.year})</option>`).join("");
  $("#cA").innerHTML=o;$("#cB").innerHTML=o;$("#cA").value=10;$("#cB").value=14;
  $("#cA").addEventListener("change",drawCompare);$("#cB").addEventListener("change",drawCompare);
  drawCompare();
}
