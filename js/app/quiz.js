// Sección Quiz

let qi=0,qs=0,qOrder=[];
function startQuiz(){qi=0;qs=0;qOrder=QUIZ.map((_,i)=>i).sort(()=>Math.random()-.5);drawQ()}
function drawQ(){
  const box=$("#quizbox");
  if(qi>=qOrder.length){
    const msg=qs>=11?"Nivel general del aire.":qs>=8?"Piloto de caza.":qs>=5?"Alumno aventajado de San Javier.":"Repasa la cronología y vuelve a intentarlo.";
    box.innerHTML=`<div class="score">${qs}/${QUIZ.length}</div><p class="qtext">${msg}</p><button class="primary" id="qr">Repetir el quiz</button>`;
    $("#qr").addEventListener("click",startQuiz);return;
  }
  const Q=QUIZ[qOrder[qi]];
  box.innerHTML=`<div class="qprog">Pregunta ${qi+1} de ${QUIZ.length}, aciertos: ${qs}</div><p class="qtext">${esc(Q.q)}</p>
    <div class="opts">${Q.o.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>
    <p class="qexp" id="qexp" aria-live="polite"></p><button class="primary" id="qn" hidden>Siguiente pregunta</button>`;
  box.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
    const i=+b.dataset.i;box.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(+x.dataset.i===Q.a)x.classList.add("ok")});
    if(i===Q.a){qs++;$("#qexp").textContent="Correcto. "+Q.e}else{b.classList.add("ko");$("#qexp").textContent="No. "+Q.e}
    $("#qn").hidden=false;$("#qn").focus();
  }));
  $("#qn").addEventListener("click",()=>{qi++;drawQ()});
}
