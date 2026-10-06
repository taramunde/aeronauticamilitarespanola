// Arranque de la aplicación (se carga el último)

aircraftData.sort((a,b)=>a.year-b.year||a.id-b.id);

document.addEventListener("click",e=>{
  const o=e.target.closest("[data-open]");if(o){openFicha(+o.dataset.open);return}
  const c=e.target.closest("[data-cmp]");if(c){$("#ficha").close();$("#cA").value=c.dataset.cmp;if($("#cB").value===c.dataset.cmp)$("#cB").value=37;drawCompare();showTab("comparar")}
});

fillSelect($("#fEra"),"Todas las épocas",ERAS);
fillSelect($("#fBranch"),"Todas las ramas",BRANCHES);
fillSelect($("#fType"),"Todos los tipos",TYPES);
["#q","#fEra","#fBranch","#fType"].forEach(s=>$(s).addEventListener("input",drawCatalog));
drawSpeed();drawChips();drawTimeline();drawCatalog();initCompare();initBases();drawPeople();drawRaids();startQuiz();
const h=(location.hash||"").slice(1);if(h&&document.getElementById(h)&&tabs.some(t=>t.dataset.tab===h))showTab(h,false);
