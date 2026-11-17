(function(){
  var reduz=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var temGsap=!!(window.gsap&&window.ScrollTrigger);

  /* Fallback sem GSAP (ou movimento reduzido): conteúdo sempre visível */
  if(!temGsap){
    if(reduz)return;
    document.documentElement.classList.add('js');
    var els=[].slice.call(document.querySelectorAll('.rv'));
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(e){io.observe(e)});
    return;
  }
  if(reduz)return;

  gsap.registerPlugin(ScrollTrigger);
  var ease='power3.out';

  /* Cada grupo: seletor, estado inicial e animação. Anima ao entrar na tela. */
  function reveal(sel,from,to,stagger){
    var els=gsap.utils.toArray(sel);
    if(!els.length)return;
    gsap.set(els,from);
    ScrollTrigger.batch(els,{
      start:'top 88%',once:true,
      onEnter:function(b){gsap.to(b,Object.assign({stagger:stagger||.14,overwrite:true},to))}
    });
  }
  var base={duration:1,ease:ease,opacity:1,y:0,x:0,scale:1,rotate:0,scaleX:1,clearProps:'transform'};

  reveal('.orn i',{scaleX:0,opacity:0},{scaleX:1,opacity:1,duration:1.2,ease:'power2.inOut',clearProps:'none'},.05);
  reveal('.orn .fl',{scale:0,rotate:-90,opacity:0},Object.assign({},base,{duration:1.1,ease:'back.out(1.7)'}));
  reveal('.sheet:not(.capa) .ttl',{y:36,opacity:0},base,.2);
  reveal('.sheet:not(.capa) p, .h3, .lista li',{y:28,opacity:0},base,.12);
  reveal('.fig, .trio > *',{y:44,opacity:0,scale:.96},Object.assign({},base,{duration:1.2}),.18);
  reveal('.dia',{scale:0,opacity:0},Object.assign({},base,{duration:.7,ease:'back.out(2)'}),.15);
  reveal('.btn, .cue',{y:20,opacity:0},base,.1);

  /* Contracapa verde */
  reveal('.capa .mono',{y:30,opacity:0,scale:.94},Object.assign({},base,{duration:1.3}));
  reveal('.capa .nomes, .capa .manual',{y:20,opacity:0},base,.2);

  window.addEventListener('load',function(){ScrollTrigger.refresh()});
})();
