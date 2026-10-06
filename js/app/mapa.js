// Sección Bases (mapa)

let selBase=0;
function drawMap(){
  const poly=pts=>pts.map(([la,lo])=>P(la,lo).join(",")).join(" ");
  let g=`<polygon class="land" points="${poly(SPAIN)}"/>`;
  BAL.forEach(p=>g+=`<polygon class="land" points="${poly(p)}"/>`);
  g+=`<rect x="455" y="385" width="215" height="105" fill="none" stroke="var(--line)" stroke-dasharray="4 3"/><text x="462" y="402">Canarias</text>`;
  CAN.forEach(([la,lo,rx,ry])=>{const[x,y]=PC(la,lo);g+=`<ellipse class="land" cx="${x}" cy="${y}" rx="${rx*36}" ry="${ry*45}"/>`});
  BASES.forEach((b,i)=>{const[x,y]=b.can?PC(b.lat,b.lon):P(b.lat,b.lon);
    g+=`<g class="base${i===selBase?" on":""}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(b.n)}"><circle cx="${x}" cy="${y}" r="${i===selBase?9:7}" fill="var(--red)"/></g>`});
  $("#map").innerHTML=g;
  $("#map").querySelectorAll(".base").forEach(el=>{const i=+el.dataset.i;el.addEventListener("click",()=>pickBase(i));el.addEventListener("keydown",e=>{if(e.key==="Enter")pickBase(i)})});
  const b=BASES[selBase];
  $("#basecard").innerHTML=`<h3>${esc(b.n)}</h3><p><strong>Unidades:</strong> ${esc(b.u)}</p><p>${esc(b.d)}</p>`;
}
function pickBase(i){selBase=i;drawMap()}
function initBases(){
  $("#baselist").innerHTML=BASES.map((b,i)=>`<li><button data-i="${i}">${esc(b.n)}</button></li>`).join("");
  $("#baselist").querySelectorAll("button").forEach(bt=>bt.addEventListener("click",()=>pickBase(+bt.dataset.i)));
  drawMap();
}
