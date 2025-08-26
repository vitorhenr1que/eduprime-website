export default function CtaFinal() {
return (
<section className="section container">
<div className="card" style={{ padding: 24, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
<div>
<h3 style={{ margin: '0 0 6px' }}>Pronto para dar o próximo passo?</h3>
<p className="muted" style={{ margin: 0 }}>Fale com a EduPrime ou inscreva-se em um curso de pós-graduação.</p>
</div>
<div className="cta-row">
<button className="btn btn-ghost" onClick={() => (document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.showModal()}>Falar com especialista</button>
<a className="btn btn-primary" href="#cursos">Ver catálogo</a>
</div>
</div>
</section>
);
}