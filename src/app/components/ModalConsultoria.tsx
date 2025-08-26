'use client';

import styles from './modalconsultoria.style.module.scss'

export default function ModalConsultoria() {
const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
e.preventDefault();
const data = new FormData(e.currentTarget);
const payload = Object.fromEntries(data.entries());
console.log('Lead consultoria', payload);
alert('Recebemos seus dados! Entraremos em contato.');
(document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.close();
};
return (
<dialog id="modal-consultoria" className={`card ${styles.dialog}`}>
<form method="dialog" style={{ margin: 0 }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
<h3 style={{ margin: 0 }}>Agendar consultoria gratuita</h3>
<button className="btn btn-ghost" value="close">Fechar</button>
</div>
</form>
<form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
<div className={`grid ${styles.grid}`}>
<label>Nome<input required className="input" name="nome" placeholder="Seu nome" /></label>
<label>E-mail<input required type="email" className="input" name="email" placeholder="seu@email.com" /></label>
<label>Telefone<input className="input" name="telefone" type="number" placeholder="(DDD) 9 9999-9999" /></label>
<label>Instituição<input className="input" name="instituicao" placeholder="Nome da IES" /></label>
<label>Data preferida<input className="input" type="date" name="data" /></label>
<label>Horário<input className="input" type="time" name="hora" /></label>
<label style={{ gridColumn: '1/-1' }}>Objetivo principal<select className="select" name="objetivo"><option>Captação</option><option>Retenção</option><option>Portfólio & Pricing</option><option>Outro</option></select></label>
<label style={{ gridColumn: '1/-1' }}>Mensagem<textarea className="input" name="mensagem" maxLength={300} rows={4} placeholder="Conte-nos brevemente sobre seus desafios." /></label>
</div>
<div className="cta-row" style={{ marginTop: 12 }}>
<button className="btn btn-primary" type="submit">Enviar</button>
<button className="btn btn-ghost" type="button" onClick={() => (document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.close()}>Cancelar</button>
</div>
<small className="muted">Ao enviar, você concorda em receber contato da EduPrime.</small>
</form>
</dialog>
);
}