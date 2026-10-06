// Funciones auxiliares compartidas

const $=s=>document.querySelector(s);
const fmt=n=>n==null?"—":Number(n).toLocaleString("es-ES",{useGrouping:true,maximumFractionDigits:2});
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const byId=id=>aircraftData.find(a=>a.id===id);
const years=a=>a.year+"–"+(a.yearEnd??"hoy");
const NS="http://www.w3.org/2000/svg";
