'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { CURSOS } from '@/data/cursos';
import { makeDragScroll } from '@/lib/dragScroll';

type Area = '' | 'Gestão' | 'Tecnologia' | 'Saúde' | 'Educação' | 'Engenharia';
type Modalidade = '' | 'EAD' | 'Presencial' | 'Híbrido';

type Curso = {
  id: string | number;
  nome: string;
  area: Exclude<Area, ''>;
  modalidade: Exclude<Modalidade, ''>;
  duracao: number; // em meses
  preco: number;
  instituicao: string;
  image: string | StaticImageData;
};

export default function Cursos() {
  const [area, setArea] = useState<Area>('');
  const [modalidade, setModalidade] = useState<Modalidade>('');
  const [duracao, setDuracao] = useState<string>(''); // manter string porque vem do <select>
  const [q, setQ] = useState('');
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapRef.current) makeDragScroll(wrapRef.current);
  }, []);

  const cursosFiltrados = useMemo(() => {
    return (CURSOS as Curso[]).filter((c) => {
      const byArea = !area || c.area === area;
      const byMod  = !modalidade || c.modalidade === modalidade;
      const byDur  = !duracao || c.duracao <= Number(duracao);
      const byText = !q || c.nome.toLowerCase().includes(q.toLowerCase());
      return byArea && byMod && byDur && byText;
    });
  }, [area, modalidade, duracao, q]);

  return (
    <section id="cursos" className="section container">
      <h2>Pós-graduação</h2>
      <p className="muted">
        Catálogo com foco em empregabilidade e formatos flexíveis. Aulas:{' '}
        <b>Sextas-feiras (19h às 22h)</b> • <b>Sábados (8h às 17h)</b>.
      </p>

      <div className="filters" aria-label="Filtros de cursos">
        <select
          className="select"
          value={area}
          onChange={(e) => setArea(e.currentTarget.value as Area)}
          aria-label="Filtrar por área"
        >
          <option value="">Todas as áreas</option>
          <option>Gestão</option>
          <option>Tecnologia</option>
          <option>Saúde</option>
          <option>Educação</option>
          <option>Engenharia</option>
        </select>

        <select
          className="select"
          value={modalidade}
          onChange={(e) => setModalidade(e.currentTarget.value as Modalidade)}
          aria-label="Filtrar por modalidade"
        >
          <option value="">Todas as modalidades</option>
          <option>EAD</option>
          <option>Presencial</option>
          <option>Híbrido</option>
        </select>

        <select
          className="select"
          value={duracao}
          onChange={(e) => setDuracao(e.currentTarget.value)}
          aria-label="Filtrar por duração"
        >
          <option value="">Qualquer duração</option>
          <option value="12">Até 12 meses</option>
          <option value="18">Até 18 meses</option>
        </select>

        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nome"
          aria-label="Buscar cursos"
        />
      </div>

      <div id="courses" className="hscroll" ref={wrapRef}>
        {cursosFiltrados.map((c) => (
          <article key={c.id} className="card course sr-curso" style={{ minWidth: 280 }}>
            <Image
              src={typeof c.image !== 'string' ? c.image.src : c.image}
              width={300}
              height={100}
              alt={`Imagem do curso ${c.nome}`}
              loading="lazy"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 8 }}>
              <h3>{c.nome}</h3>
              <span className="tag">{c.modalidade}</span>
            </div>
            <p className="muted" style={{ margin: 0 }}>
              Área: <b>{c.area}</b> • Duração: <b>{c.duracao} meses</b>
            </p>
            <p className="muted" style={{ margin: 0 }}>
              Aulas: Sextas-feiras (19h às 22h) • Sábados (8h às 17h)
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                marginTop: 6,
              }}
            >
              <span className="price">
                Mensalidade: <b>R$ {c.preco.toLocaleString('pt-BR')}</b>
              </span>
              <div className="cta-row">
                <button
                  className="btn btn-ghost"
                  onClick={() =>
                    alert(
                      `${c.nome}\n\nModalidade: ${c.modalidade}\nInstituição: ${c.instituicao.toLocaleUpperCase()}\nDuração: ${c.duracao} meses\nAulas: Sextas-feiras (19h às 22h) • Sábados (8h às 17h)\n\nConteúdos, matriz curricular e diferenciais podem ser exibidos aqui.`
                    )
                  }
                >
                  Detalhes
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => alert(`Pré-inscrição registrada em ${c.nome}. Entraremos em contato!`)}
                >
                  Inscreva-se
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
