export function makeDragScroll(el: HTMLElement) {
let isDown = false;
let startX = 0;
let scrollLeft = 0;
const start = (x: number) => { isDown = true; startX = x - el.offsetLeft; scrollLeft = el.scrollLeft; el.classList.add('dragging'); };
const move = (x: number) => { if (!isDown) return; const walk = x - el.offsetLeft - startX; el.scrollLeft = scrollLeft - walk; };
const end = () => { isDown = false; el.classList.remove('dragging'); };
el.addEventListener('mousedown', (e) => start((e as MouseEvent).pageX));
el.addEventListener('mousemove', (e) => move((e as MouseEvent).pageX));
el.addEventListener('mouseleave', end);
el.addEventListener('mouseup', end);
el.addEventListener('touchstart', (e) => start((e as TouchEvent).touches[0].pageX), { passive: true });
el.addEventListener('touchmove', (e) => move((e as TouchEvent).touches[0].pageX), { passive: true });
el.addEventListener('touchend', end);
}