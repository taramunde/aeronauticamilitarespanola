// Navegación por pestañas

const tabs=[...document.querySelectorAll(".tab")];
function showTab(name,push=true){
  tabs.forEach(t=>t.setAttribute("aria-selected",t.dataset.tab===name));
  document.querySelectorAll("main section").forEach(s=>s.hidden=s.id!==name);
  if(push){try{history.replaceState(null,"","#"+name)}catch(e){}}
  const nav=document.querySelector("nav.tabs");
  if(window.scrollY>nav.offsetTop) window.scrollTo({top:nav.offsetTop,behavior:"smooth"});
}
tabs.forEach(t=>t.addEventListener("click",()=>showTab(t.dataset.tab)));
