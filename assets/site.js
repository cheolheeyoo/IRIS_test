(() => {
  const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
  toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');nav?.classList.toggle('is-open',open)});
  document.querySelectorAll('[data-carousel]').forEach(carousel=>{
    const slides=[...carousel.querySelectorAll(':scope > .carousel-viewport > .carousel-slide')];
    const dots=[...carousel.querySelectorAll(':scope > .carousel-controls .carousel-dot')];
    if(!slides.length)return;
    let index=0,paused=false;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const show=i=>{index=(i+slides.length)%slides.length;slides.forEach((s,j)=>{s.hidden=j!==index;s.setAttribute('aria-hidden',String(j!==index))});dots.forEach((d,j)=>{d.classList.toggle('active',j===index);d.setAttribute('aria-selected',String(j===index))});const count=carousel.querySelector('.carousel-count');if(count)count.textContent=`${index+1} / ${slides.length}`;};
    carousel.querySelector('.carousel-prev')?.addEventListener('click',()=>show(index-1));carousel.querySelector('.carousel-next')?.addEventListener('click',()=>show(index+1));dots.forEach((d,j)=>d.addEventListener('click',()=>show(j)));
    carousel.addEventListener('mouseenter',()=>paused=true);carousel.addEventListener('mouseleave',()=>paused=false);carousel.addEventListener('focusin',()=>paused=true);carousel.addEventListener('focusout',()=>paused=false);
    carousel.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(index+1)}else if(e.key==='ArrowLeft'){e.preventDefault();show(index-1)}});
    let touchX;carousel.addEventListener('touchstart',e=>touchX=e.touches[0].clientX,{passive:true});carousel.addEventListener('touchend',e=>{if(touchX!==undefined){const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>65)show(index+(dx<0?1:-1));touchX=undefined}},{passive:true});
    const pauseButton=carousel.querySelector('.carousel-pause');let manuallyPaused=false;pauseButton?.addEventListener('click',()=>{manuallyPaused=!manuallyPaused;pauseButton.setAttribute('aria-pressed',String(manuallyPaused));pauseButton.textContent=manuallyPaused?'Play':'Pause'});
    show(0);if(!reduced)setInterval(()=>{if(!paused&&!manuallyPaused&&!document.hidden)show(index+1)},5000);
  });
  document.querySelectorAll('[data-lightbox]').forEach(trigger=>trigger.addEventListener('click',e=>{
    e.preventDefault();const im=trigger.querySelector('img');if(!im)return;const dialog=document.createElement('dialog');dialog.className='image-dialog';const img=document.createElement('img');img.src=trigger.href||im.src;img.alt=im.alt;const button=document.createElement('button');button.textContent='×';button.setAttribute('aria-label','Close image');button.addEventListener('click',()=>dialog.close());dialog.append(img,button);document.body.append(dialog);dialog.addEventListener('click',ev=>{if(ev.target===dialog)dialog.close()});dialog.addEventListener('close',()=>{dialog.remove();trigger.focus()});dialog.showModal();
  }));
})();
