export const metadata = {
title: 'EduPrime — Consultoria para IES & Pós-graduação',
description:
'Consultoria estratégica para IES e catálogo de pós-graduações. Agende uma conversa ou inscreva-se em um curso.',
openGraph: {
title: 'EduPrime — Consultoria para IES & Pós-graduação',
description:
'Consultoria estratégica para IES e cursos de pós. Resultados em captação, retenção e qualidade acadêmica.',
type: 'website',
images: ['http://picsum.photos/2000/500']
},
themeColor: '#ffffff'
};


import './globals.scss';
import type { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="pt-br">
<body>{children}</body>
</html>
);
}
