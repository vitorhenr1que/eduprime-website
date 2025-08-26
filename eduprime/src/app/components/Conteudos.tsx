export default function Conteudos() {
return (
<section id="conteudos" className="section container">
<h2>Conteúdos</h2>
<p className="muted">Artigos, guias e estudos para gestores e profissionais da educação.</p>
<div className="blog">
{[
{ tag: 'Guia', t: 'Playbook de captação para 2025', d: 'Do SEO à régua de relacionamento: como montar um funil que converte.' },
{ tag: 'Estudo', t: 'Preço e valor percebido na pós', d: 'Como usar pesquisas de sensibilidade e diferenciais de portfólio.' },
{ tag: 'Tendências', t: 'IA na jornada do aluno', d: 'Casos práticos de automação para captação e retenção.' }
].map((p, i) => (
<article key={i} className="card sr-conteudo" style={{ padding: 16 }}>
<span className="badge">{p.tag}</span>
<h3>{p.t}</h3>
<p className="muted">{p.d}</p>
<a href="#" aria-disabled="true">Ler mais</a>
</article>
))}
</div>
</section>
);
}