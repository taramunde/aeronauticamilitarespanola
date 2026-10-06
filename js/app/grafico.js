// Gráfico de velocidad de la portada

function drawSpeed(){
  const svg=$("#speedChart");const W=800,H=300,L=52,R=14,T=14,B=34;
  const x0=1908,x1=2028,y1=2600;
  const X=y=>L+(y-x0)/(x1-x0)*(W-L-R), Y=v=>T+(1-v/y1)*(H-T-B);
  let g="";
  for(let v=0;v<=2500;v+=500){g+=`<line x1="${L}" x2="${W-R}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)" stroke-width="1"/><text x="${L-8}" y="${Y(v)+4}" text-anchor="end" font-family="Saira Condensed" font-size="13" fill="var(--muted)">${fmt(v)}</text>`}
  for(let y=1910;y<=2020;y+=10){g+=`<text x="${X(y)}" y="${H-10}" text-anchor="middle" font-family="Saira Condensed" font-size="13" fill="var(--muted)">${y}</text>`}
  // sombreado Guerra Civil
  g+=`<rect x="${X(1936)}" y="${T}" width="${X(1939)-X(1936)}" height="${H-T-B}" fill="var(--red)" opacity=".08"/>`;
  // envolvente de récord
  let best=0,pts=[];
  aircraftData.forEach(a=>{if(a.maxSpeed>best){if(pts.length)pts.push([X(a.year),Y(best)]);best=a.maxSpeed;pts.push([X(a.year),Y(best)])}});
  pts.push([X(2026),Y(best)]);
  g+=`<polyline points="${pts.map(p=>p.join(",")).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-linejoin="round"/>`;
  aircraftData.forEach(a=>{
    g+=`<circle class="dot" data-id="${a.id}" cx="${X(a.year)}" cy="${Y(a.maxSpeed)}" r="6" fill="${BRANCHES[a.branch].color}" stroke="var(--panel)" stroke-width="1.5" tabindex="0" role="button" aria-label="${esc(a.name)}, ${a.year}, ${fmt(a.maxSpeed)} km/h"/>`;
  });
  g+=`<text x="${L+4}" y="${T+14}" font-family="Saira Condensed" font-size="13" fill="var(--muted)">km/h</text>`;
  svg.innerHTML=g;
  const ro=$("#readout");
  const show=a=>{ro.innerHTML=`<b>${esc(a.name)}${a.nick?" «"+esc(a.nick)+"»":""}</b><span>${a.year}</span><span>${fmt(a.maxSpeed)} km/h</span><span>${BRANCHES[a.branch].short}</span>`};
  svg.querySelectorAll(".dot").forEach(d=>{
    const a=byId(+d.dataset.id);
    d.addEventListener("mouseenter",()=>show(a));
    d.addEventListener("focus",()=>show(a));
    d.addEventListener("click",()=>openFicha(a.id));
    d.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openFicha(a.id)}});
  });
  // arrastrar para explorar en móvil
  svg.addEventListener("pointermove",e=>{
    const r=svg.getBoundingClientRect();const px=(e.clientX-r.left)/r.width*W;const py=(e.clientY-r.top)/r.height*H;
    let bestA=null,bd=1e9;aircraftData.forEach(a=>{const dx=X(a.year)-px,dy=Y(a.maxSpeed)-py;const d=dx*dx+dy*dy*.4;if(d<bd){bd=d;bestA=a}});
    if(bestA&&bd<2500)show(bestA);
  });
  $("#legend").innerHTML=Object.values(BRANCHES).map(b=>`<span><i style="background:${b.color}"></i>${b.short}</span>`).join("")+`<span><i style="background:var(--red);border-radius:0;height:3px;vertical-align:3px"></i>Récord de la flota</span>`;
}
