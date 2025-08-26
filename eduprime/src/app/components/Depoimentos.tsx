'use client';
import { useEffect, useRef } from 'react';
import { makeDragScroll } from '@/lib/dragScroll';


export default function Depoimentos() {
const ref = useRef<HTMLDivElement | null>(null);
useEffect(() => { if (ref.current) makeDragScroll(ref.current); }, []);
return (
<section id="depoimentos" className="section container">
<h2>Depoimentos</h2>
<div className="testimonials hscroll" ref={ref}>
{[1,2,3].map((i) => (
<article key={i} className="card sr-depo" style={{ padding: 18, flex: '0 0 320px' }}>
<blockquote>
<p>{i===1 && '“A EduPrime nos ajudou a estruturar o funil de captação e reduzir o custo por matrícula em 32%.”'}{i===2 && '“O programa de retenção com dados foi um divisor de águas. Evasão caiu de forma significativa.”'}{i===3 && '“A pós em Psicologia Organizacional abriu portas no mercado. Professores e projeto final incríveis.”'}</p>
<footer><span className="avatar" aria-hidden="true"></span> <b>{i===1?'Vera Suzart':i===2?'Aiandra Bruno':'Ana Beatriz'}</b>, <span className="muted">{i===1?'Mantenedora — Faculdade Regional do Valle':i===2?'Diretora Geral — FAZAG':'Egressa — Turma 2024'}</span></footer>
</blockquote>
</article>
))}
</div>
</section>
);
}