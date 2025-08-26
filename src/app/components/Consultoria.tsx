export default function Consultoria() {
return (
<section id="consultoria" className="section container">
<h2>Consultoria para Instituições de Ensino Superior</h2>
<p className="muted">Soluções sob medida para seus desafios: captação, retenção, gestão acadêmica e diferenciação do portfólio.</p>
<div className="cards">
<article className="card sr-consultoria">
<span className="badge">Retenção</span>
<h3>Risco de evasão e engajamento</h3>
<p>Modelos de risco e campanhas de relacionamento para reduzir a evasão e elevar o NPS.</p>
<ul className="list">
<li>• Análise de evasão</li>
<li>• Gestão de relacionamento</li>
<li>• Programas de sucesso do aluno</li>
</ul>
</article>
<article className="card sr-consultoria">
<span className="badge">Portfólio</span>
<h3>Desenho de cursos e precificação</h3>
<p>Pesquisa de mercado, proposta de valor e pricing por sensibilidade.</p>
<ul className="list">
<li>• Benchmark e diferenciais</li>
<li>• Canais e jornadas</li>
<li>• Indicadores e metas</li>
</ul>
</article>
<article className="card sr-consultoria">
<span className="badge">Captação</span>
<h3>Funil de leads e conversão</h3>
<p>Implantamos procedimentos práticos de mídia de performance, CRM educacional e cadências que aumentam a taxa de conversão.</p>
<ul className="list">
<li>• SEO e mídia paga</li>
<li>• Landing pages e testes A/B</li>
<li>• Estratégia de conteúdo</li>
</ul>
</article>
</div>
<div className="card" style={{ marginTop: 16, padding: 18 }}>
<div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' as const }}>
<div style={{ flex: '1 1 380px' }}>
<h3 style={{ margin: '0 0 6px' }}>Agende uma consultoria gratuita</h3>
<p className="muted" style={{ margin: 0 }}>Converse com um especialista e receba um plano de 30 dias.</p>
</div>
<button className="btn btn-primary" onClick={() => (document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.showModal()}>Agendar agora</button>
</div>
</div>
</section>
);
}