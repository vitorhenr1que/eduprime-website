'use client';
import Header from '@/app/components/Header';
import Banner from '@/app/components/Banner';
import Hero from '@/app/components/Hero';
import Consultoria from '@/app/components/Consultoria';
import Cursos from '@/app/components/Cursos';
import Depoimentos from '@/app/components/Depoimentos';
import Conteudos from '@/app/components/Conteudos';
import CtaFinal from '@/app/components/CtaFinal';
import Footer from '@/app/components/Footer';
import ModalConsultoria from '@/app/components/ModalConsultoria';
import { useEffect } from 'react';


export default function Page() {
useEffect(() => {
(async () => {
try {
const ScrollReveal = (await import('scrollreveal')).default;
const sr = ScrollReveal({
distance: '32px',
duration: 900,
easing: 'cubic-bezier(0.2,0.7,0.2,1)',
viewFactor: 0.15,
reset: false
});
sr.reveal('.sr-banner', { origin: 'bottom' });
sr.reveal('.sr-hero', { interval: 120, origin: 'bottom' });
sr.reveal('.sr-consultoria', { interval: 120, origin: 'bottom' });
sr.reveal('.hscroll', { interval: 100, origin: 'bottom' });
sr.reveal('.sr-depo', { interval: 100, origin: 'bottom' });
sr.reveal('.sr-conteudo', { interval: 100, origin: 'bottom' });
sr.reveal('footer', { origin: 'bottom' });
} catch {}
})();
}, []);


return (
<>
<Header />
<main>
<Banner />
<Hero />
<Consultoria />
<Cursos />
<Depoimentos />
<Conteudos />
<CtaFinal />
</main>
<Footer />
<ModalConsultoria />
</>
);
}