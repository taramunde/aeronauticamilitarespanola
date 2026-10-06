// Sección Catálogo

function fillSelect(el,all,obj){el.innerHTML=`<option value="">${all}</option>`+Object.entries(obj).map(([k,v])=>`<option value="${k}">${typeof v==="string"?v:v.label}</option>`).join("")}
function drawCatalog(){
  const q=$("#q").value.trim().toLowerCase(), e=$("#fEra").value, b=$("#fBranch").value, t=$("#fType").value;
  const list=aircraftData.filter(a=>(!e||a.era===e)&&(!b||a.branch===b)&&(!t||a.type===t)&&
    (!q||[a.name,a.nick,a.designation,a.units,TYPES[a.type]].join(" ").toLowerCase().includes(q)));
  $("#count").textContent=list.length===1?"1 aeronave":list.length+" aeronaves";
  $("#reg").innerHTML=list.length?list.map(a=>`<li><button data-open="${a.id}">
    <span class="desig">${esc(a.designation)}</span>
    <span><span class="nm">${esc(a.name)}${a.nick?" «"+esc(a.nick)+"»":""}</span>
    <span class="meta"><span class="stripe" style="background:${BRANCHES[a.branch].color}"></span>${TYPES[a.type]}, ${BRANCHES[a.branch].short}</span></span>
    <span class="yrs">${years(a)}</span></button></li>`).join("")
    :`<li style="padding:1rem 0">Ninguna aeronave coincide. Quita algún filtro o prueba otra búsqueda, como «Mirage» o «HT».</li>`;
}
