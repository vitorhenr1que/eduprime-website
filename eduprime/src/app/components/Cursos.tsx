 'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CURSOS } from '@/data/cursos';
import { makeDragScroll } from '@/lib/dragScroll';
import Image from 'next/image';


export default function Cursos() {
const [area, setArea] = useState('');
const [modalidade, setModalidade] = useState('');
const [duracao, setDuracao] = useState('');
const [q, setQ] = useState('');
const wrapRef = useRef<HTMLDivElement | null>(null);


useEffect(() => { if (wrapRef.current) makeDragScroll(wrapRef.current); }, []);


const cursosFiltrados = useMemo(() => CURSOS.filter(c => (
(!area || c.area === (area as any)) &&
(!modalidade || c.modalidade === (modalidade as any)) &&
(!duracao || c.duracao <= Number(duracao)) &&
(!q || c.nome.toLowerCase().includes(q.toLowerCase()))
)), [area, modalidade, duracao, q]);


const [preco, setPreco] = useState(699);
const [desc, setDesc] = useState(15);
const [parc, setParc] = useState(12);
const comDesc = useMemo(() => preco * (1 - desc / 100), [preco, desc]);
const parcela = useMemo(() => (comDesc / parc).toFixed(2), [comDesc, parc]);
return (
<section id="cursos" className="section container">
<h2>Pós-graduação</h2>
<p className="muted">Catálogo com foco em empregabilidade e formatos flexíveis. Aulas: <b>Sextas-feiras (19h às 22h)</b> • <b>Sábados (8h às 17h)</b>.</p>


<div className="filters" aria-label="Filtros de cursos">
<select className="select" value={area} onChange={(e) => setArea(e.target.value)} aria-label="Filtrar por área">
<option value="">Todas as áreas</option>
<option>Gestão</option>
<option>Tecnologia</option>
<option>Saúde</option>
<option>Educação</option>
<option>Engenharia</option>
</select>
<select className="select" value={modalidade} onChange={(e) => setModalidade(e.target.value)} aria-label="Filtrar por modalidade">
<option value="">Todas as modalidades</option>
<option>EAD</option>
<option>Presencial</option>
<option>Híbrido</option>
</select>
<select className="select" value={duracao} onChange={(e) => setDuracao(e.target.value)} aria-label="Filtrar por duração">
<option value="">Qualquer duração</option>
<option value="12">Até 12 meses</option>
<option value="18">Até 18 meses</option>
</select>
<input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nome" aria-label="Buscar cursos" />
</div>


<div id="courses" className="hscroll" ref={wrapRef}>
{cursosFiltrados.map((c) => (
<article key={c.id} className="card course sr-curso" style={{ minWidth: 280 }}>
<Image src={`${typeof c.image !== 'string' ? c.image.src : c.image}`} width={300} height={100} alt={`Imagem do curso ${c.nome}`} loading="lazy" />
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 8 }}>
<h3>{c.nome}</h3>
<span className="tag">{c.modalidade}</span>
</div>
<p className="muted" style={{ margin: 0 }}>Área: <b>{c.area}</b> • Duração: <b>{c.duracao} meses</b></p>
<p className="muted" style={{ margin: 0 }}>Aulas: Sextas-feiras (19h às 22h) • Sábados (8h às 17h)</p>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginTop: 6 }}>
<span className="price">Mensalidade: <b>R$ {c.preco.toLocaleString('pt-BR')}</b></span>
<div className="cta-row">
<button className="btn btn-ghost" onClick={() => alert(`${c.nome}\n\nModalidade: ${c.modalidade}\nInstituição: ${c.instituicao.toLocaleUpperCase()}\nDuração: ${c.duracao} meses\nAulas: Sextas-feiras (19h às 22h) • Sábados (8h às 17h)\n\nConteúdos, matriz curricular e diferenciais podem ser exibidos aqui.`)}>Detalhes</button>
<button className="btn btn-primary" onClick={() => alert(`Pré-inscrição registrada em ${c.nome}. Entraremos em contato!`)}>Inscreva-se</button>
</div>
</div>
</article>
))}
</div>

</section>
);
}