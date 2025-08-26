export default function Hero() {
return (
<section className="hero container">
<div className="hero-grid">
<div className="card sr-hero">
<span className="pill">Consultoria para IES • Pós-graduação</span>
<h2>Resultados em captação, retenção e qualidade acadêmica</h2>
<p className="muted">Unimos consultoria estratégica para Instituições de Ensino Superior e um portfólio de cursos de pós-graduação alinhado às demandas do mercado.</p>
<div className="cta-row" style={{ marginTop: 'auto' }}>
<button className="btn btn-primary" onClick={() => (document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.showModal()}>Agendar conversa gratuita</button>
<a className="btn btn-ghost" href="#cursos">Explorar pós-graduação</a>
</div>
</div>
<div className="card sr-hero" aria-label="Destaques">
<ul className="list" style={{ marginBottom: 'auto' }}>
<li>✅ <b>Diagnóstico 360º</b> (Marketing, CRM, pricing, jornada do aluno)</li>
<li>✅ <b>Ambiente Virtual de Aprendizagem</b> Implantação</li>
<li>✅ <b>Treinamento de times</b> (comercial, atendimento, coordenações)</li>
<li>✅ <b>Projetos de retenção</b> com dados e campanhas preditivas</li>
<li>✅ <b>Portfólio de pós-graduação</b> com alto valor percebido</li>
</ul>
</div>
</div>
</section>
);
}