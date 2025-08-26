'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/Logo.png'

export default function Header() {
const [open, setOpen] = useState(false);
return (
<header>
<div className="container nav">
<div className="brand">
<div className="logo" aria-hidden="true"><Image src={logo} alt='logo' width={38}/> </div>
<h1 aria-label="EduPrime">EduPrime</h1>
</div>
<button className="menu-btn btn btn-ghost" aria-label="Abrir menu" onClick={() => setOpen(!open)}>☰</button>
<nav aria-label="Principal" className={open ? 'open' : `${undefined} ocultar-principal`}>
<ul>
<li><a href="#consultoria">Consultoria</a></li>
<li><a href="#cursos">Pós-graduação</a></li>
<li><a href="#depoimentos">Depoimentos</a></li>
<li><a href="#conteudos">Conteúdos</a></li>
<li><a href="#contato">Contato</a></li>
</ul>
</nav>
<div className="cta-row">
<button className="btn btn-ghost" onClick={() => (document.getElementById('modal-consultoria') as HTMLDialogElement | null)?.showModal()}>Agendar consultoria</button>
<a className="btn btn-primary" href="#cursos">Ver cursos</a>
</div>
</div>
</header>
);
}