import { StaticImageData } from "next/image";
import tea from "../../public/tea.png";
import nutricaoClinica from "../../public/nutricao-clinica.png";
import engenhariaSeguranca from "../../public/engenharia-de-seguranca.png";
import psicologiaOrganizacional from "../../public/psicologia-organizacional.png";
import psicopedagogiaFazag from "../../public/psicopedagogia.png";
import psicopedagogiaFarvalle from "../../public/psicopedagogia-farvalle.png";
import saudePublica from "../../public/saude-publica-farvalle.png";
import farmaciaClinica from "../../public/farmacia-clinica.png";

export type Curso = {
id: number;
nome: string;
area: 'Gestão' | 'Tecnologia' | 'Saúde' | 'Educação' | 'Engenharia';
modalidade: 'EAD' | 'Presencial' | 'Híbrido';
duracao: number;
preco: number;
image: StaticImageData | string;
instituicao: string;
};


export const CURSOS: Curso[] = [
{ id: 1, nome: 'Psicopedagogia Clínica e Institucional', area: 'Educação', modalidade: 'Presencial', duracao: 12, preco: 699, image: psicopedagogiaFazag, instituicao: 'fazag' },
{ id: 2, nome: 'Transtorno do Espectro Autista (TEA) e Deficiência Intelectual (DI)', area: 'Educação', modalidade: 'Presencial', duracao: 18, preco: 799, image: tea, instituicao: 'fazag' },
{ id: 3, nome: 'Nutrição Clínica', area: 'Saúde', modalidade: 'Presencial', duracao: 12, preco: 549, image: nutricaoClinica, instituicao: 'fazag' },
{ id: 4, nome: 'Engenharia de Segurança no Trabalho', area: 'Engenharia', modalidade: 'Presencial', duracao: 12, preco: 629, image: engenhariaSeguranca, instituicao: 'fazag'  },
{ id: 5, nome: 'Psicologia Organizacional', area: 'Saúde', modalidade: 'Presencial', duracao: 18, preco: 829, image: psicologiaOrganizacional, instituicao: 'fazag'  },
{ id: 6, nome: 'Psicologia Organizacional', area: 'Saúde', modalidade: 'Presencial', duracao: 18, preco: 829, image: psicopedagogiaFarvalle, instituicao: 'farvalle'  },
{ id: 7, nome: 'Farmácia Clínica e Hospitalar', area: 'Saúde', modalidade: 'Presencial', duracao: 18, preco: 759, image: farmaciaClinica, instituicao: 'fazag'  },
{ id: 8, nome: 'Transtorno do Espectro Autista: Inclusão Social e Escolar', area: 'Educação', modalidade: 'Presencial', duracao: 18, preco: 759, image: tea, instituicao: 'farvalle'  },
{ id: 9, nome: 'Saúde Pública e Coletiva com Habilitação para Sanitarista', area: 'Saúde', modalidade: 'Presencial', duracao: 18, preco: 759, image: saudePublica, instituicao: 'farvalle'  },
{ id: 10, nome: 'Psicopedagogia Clínica e Institucional', area: 'Educação', modalidade: 'Presencial', duracao: 12, preco: 699, image: psicopedagogiaFarvalle, instituicao: 'farvalle' },
{ id: 11, nome: 'Educação Especial na Perspectiva Inclusiva', area: 'Educação', modalidade: 'Presencial', duracao: 12, preco: 699, image: tea, instituicao: 'farvalle' },
];