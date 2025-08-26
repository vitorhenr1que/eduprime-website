import Image from "next/image";
import logo from '../../../public/Logo.png'

export default function Footer() {
return (
<footer id="contato">
<div className="container footer-grid">
<div>
<div className="brand" style={{ marginBottom: 8 }}>
<div className="logo" aria-hidden="true"><Image src={logo} width={38} alt="logo"/></div>
<h3 style={{ margin: 0 }}>EduPrime</h3>
</div>
<p className="muted">Consultoria estratégica para IES e pós-graduação orientada a resultados.</p>
<div className="social" style={{ display: 'flex', gap: 12, marginTop: 8 }}>
<a href="https://www.instagram.com/eduprimeseja/" target="_blank" rel="noopener"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm6.5-1.8a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/></svg> Instagram</a>
<a href="#" aria-disabled title="Substituir pelo WhatsApp da EduPrime"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3.5A10.5 10.5 0 0 0 4.2 17.6L3 21l3.5-1.1A10.5 10.5 0 1 0 20 3.5zM7.9 18l-.2.1-1.2.4.4-1.2.1-.2a8.5 8.5 0 1 1 1 1zM8 7.5c.2-.5.6-.5.8-.5h.7c.2 0 .5 0 .7.6.2.5.8 1.6.9 1.7.1.2.1.3 0 .5-.1.2-.2.3-.4.5s-.4.4-.6.6c-.2.2-.4.4-.2.7.2.2.9 1.4 2.1 2 .9.5 1.3.6 1.5.5.2-.1.8-.3 1-.7.2-.3.5-.6.8-.5.3.1 1.7.8 2 1 .3.2.5.2.6.3s.3.1.2.6c-.1.5-.7 1.6-1.5 1.8-.7.2-1.3.2-2.2-.1-1-.3-2.3-1-3.3-1.8-.9-.7-2-2.1-2.2-2.4-.2-.3-.5-.7-.5-1.2 0-.6.3-.9.5-1.1.2-.2.5-.6.6-.8.2-.2.3-.3.4-.5z"/></svg> WhatsApp</a>
<a href="#" aria-disabled title="Substituir pelo LinkedIn da EduPrime"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.2 2.5-2.5 5.1-2.5 5.5 0 6.5 3.6 6.5 8.2V24h-5V16c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24h-5V8z"/></svg> LinkedIn</a>
</div>
<small className="muted">© {new Date().getFullYear()} EduPrime. Todos os direitos reservados.</small>
</div>
<div>
<h4>Consultoria</h4>
<ul className="list">
<li>Diagnóstico 360º</li>
<li>Captação & CRM</li>
<li>Retenção & NPS</li>
<li>Portfólio & Pricing</li>
</ul>
</div>
<div>
<h4>Cursos</h4>
<ul className="list">
<li>Gestão</li>
<li>Tecnologia</li>
<li>Saúde</li>
<li>Educação</li>
</ul>
</div>
<div>
<h4>Contato</h4>
<ul className="list">
<li><a href="#" onClick={() => (document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.showModal()}><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h2v2h8V2h2v2h2v16H4V4h2V2zm14 6H6v10h14V8z"/></svg> Agendar consultoria</a></li>
<li><a href="mailto:contato@eduprime.example"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6h20v12H2V6zm10 7L3.5 8.5l-.9 1.4L12 15l9.4-5.1-.9-1.4L12 13z"/></svg> contato@eduprime.com.br</a></li>
<li><a href="https://www.instagram.com/eduprimeseja/" target="_blank" rel="noopener"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm6.5-1.8a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/></svg> @eduprimeseja</a></li>
</ul>
</div>
</div>
</footer>
);
}