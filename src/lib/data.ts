// Conteúdo real: site antigo (colegiodavilohn.com.br), Instagram @colegio_davilohn e Google Maps (coletado em out/2026).

export const school = {
  name: "Colégio Dávilohn",
  slogan: "Mais que uma escola, uma família",
  founded: 2001,
  instagram: "https://www.instagram.com/colegio_davilohn/",
  instagramHandle: "@colegio_davilohn",
  facebook: "https://www.facebook.com/davilohn",
  phone: "(11) 4964-2810",
  phoneHref: "tel:+551149642810",
  whatsapp: "5511947477080",
  whatsappLabel: "(11) 94747-7080",
  address: "R. Santo Valotto, 21 - Jardim Adriana I",
  city: "Guarulhos - SP, 07135-280",
  mapsUrl:
    "https://www.google.com/maps/place/Col%C3%A9gio+Davilohn+-+Escola+Particular+em+Guarulhos/@-23.4255891,-46.5275643,17z/data=!4m6!3m5!1s0x94cef4dacb50606b:0x91ad9f54f70a349e!8m2!3d-23.4255891!4d-46.5275643!16s%2Fg%2F1tsbn7wh",
  rating: "4,8",
  reviewCount: 48,
};

export function whatsappLink(msg = "Olá! Vim pelo site do Colégio Dávilohn e gostaria de mais informações.") {
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { label: "O Colégio", href: "#colegio" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Vivências", href: "#vivencias" },
  { label: "Famílias", href: "#familias" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const partners = ["Sistema Anglo de Ensino", "ClassApp", "BNCC", "Olimpíada Canguru de Matemática"];

export const hashtags = ["#somosdávilohn", "#somoscidadania", "#somosresponsabilidade", "#somosconhecimento"];

export type Segment = {
  key: string;
  title: string;
  short: string;
  ages: string;
  text: string;
  quote: string;
  schedule: { label: string; time: string }[];
  image: string;
};

export const segments: Segment[] = [
  {
    key: "infantil",
    title: "Educação Infantil",
    short: "A partir de 2 anos",
    ages: "Minimaternal ao Pré",
    text: "A primeira etapa escolar, onde a criança aprende por meio de desafios em um ambiente atrativo e organizado. Cada criança é única: respeitamos o seu tempo e as suas necessidades, com os pilares Cuidar, Educar e Brincar.",
    quote: "Cuidar, educar e brincar.",
    schedule: [
      { label: "Matutino", time: "7h30 às 11h30" },
      { label: "Vespertino", time: "13h30 às 17h30" },
    ],
    image: "/img/infantil-leitura.webp",
  },
  {
    key: "fund1",
    title: "Fundamental I",
    short: "1º ao 5º ano",
    ages: "Anos Iniciais",
    text: "A fase que marca a saída da Educação Infantil. As habilidades fundamentais são construídas através da leitura, da escrita, do raciocínio lógico e de situações-problema do cotidiano.",
    quote: "Ler, escrever e pensar o mundo.",
    schedule: [
      { label: "Matutino", time: "7h30 às 12h" },
      { label: "Vespertino", time: "13h30 às 18h" },
    ],
    image: "/img/fundamental-jogos.webp",
  },
  {
    key: "fund2",
    title: "Fundamental II",
    short: "6º ao 9º ano",
    ages: "Anos Finais",
    text: "O aluno já solidificou seu processo de aprendizado e passa a conteúdos mais complexos. Além do olhar pedagógico, a equipe desenvolve talentos e estimula o pensamento crítico, o diálogo e a reflexão.",
    quote: "Base sólida para o Ensino Médio.",
    schedule: [
      { label: "Matutino", time: "7h às 12h20" },
      { label: "Vespertino", time: "13h às 18h20" },
    ],
    image: "/img/medio-quadra.webp",
  },
  {
    key: "medio",
    title: "Ensino Médio",
    short: "1ª à 3ª série",
    ages: "Projeto de Vida",
    text: "Etapa final dos nossos jovens, em busca dos seus sonhos e do seu Projeto de Vida. Com o Sistema Anglo de Ensino, simulados e aulas práticas, preparamos os alunos para a realização universitária e profissional.",
    quote: "Rumo às melhores universidades.",
    schedule: [{ label: "Manhã", time: "7h às 13h10" }],
    image: "/img/medio-laboratorio.webp",
  },
];

export const experiences = [
  {
    title: "Roda de leitura",
    place: "Minimaternal · Projeto Emoções",
    text: "Sentadas em círculo, num ambiente tranquilo e seguro, as crianças ouviram uma história e falaram sobre o medo.",
    image: "/img/infantil-roda.webp",
  },
  {
    title: "Química na prática",
    place: "Ensino Médio",
    text: "Com a professora Vitória, os alunos transformaram óleo de cozinha usado em sabão ecológico.",
    image: "/img/medio-laboratorio.webp",
  },
  {
    title: "Jogos e raciocínio",
    place: "Fundamental",
    text: "Jogos de tabuleiro no deck do colégio: estratégia, convivência e diversão no mesmo lugar.",
    image: "/img/fundamental-jogos.webp",
  },
];

export const pillars = [
  {
    tag: "Desde 2001",
    title: "Educação Infantil ao Ensino Médio",
    text: "Fundado por dois sócios idealistas, o colégio acompanha a formação dos alunos do primeiro dia de escola até a universidade.",
    image: "/img/infantil-abraco.webp",
    tone: "cream",
  },
  {
    tag: "Aprovações",
    title: "Projeto de Vida no Ensino Médio",
    text: "Planejar, organizar, estabelecer metas e lidar com frustrações. Alunos do Ensino Médio comemoram aprovações, como o 5º lugar na FATEC Guarulhos.",
    image: "/img/turma-medio.webp",
    tone: "sky",
  },
  {
    tag: "Inclusão",
    title: "Um olhar acolhedor e respeitoso",
    text: "Palestra sobre neurodiversidade, Mês da Conscientização do Autismo e o Dia da Síndrome de Down: respeito, compreensão e conhecimento.",
    image: "/img/infantil-musica.webp",
    tone: "sun",
  },
];

export const moments = [
  { src: "/img/festival-literario.webp", caption: "Festival Literário" },
  { src: "/img/infantil-musica.webp", caption: "Música no Infantil" },
  { src: "/img/feira-cultural.webp", caption: "Feira Cultural" },
  { src: "/img/medio-amigas.webp", caption: "Amizades que ficam" },
  { src: "/img/infantil-parquinho.webp", caption: "Hora do parquinho" },
  { src: "/img/fundamental-mostra.webp", caption: "Mostra Cultural" },
  { src: "/img/infantil-tapete.webp", caption: "Aprender brincando" },
  { src: "/img/medio-quadra.webp", caption: "Esporte e convivência" },
];

// Avaliações reais do Google Maps (5 estrelas). Onde o Google corta o texto, encerramos na última frase completa.
export const testimonials = [
  {
    name: "Silvana Aparecida Queiroz",
    role: "Mãe de ex-aluno",
    text: "Meu filho estudou por 10 anos nesse colégio, o mesmo é incomparável a qualquer outro, satisfação total, equipe incrível, direção, coordenação, enfim todo corpo docente. Família Dávilohn, vocês estão de parabéns!",
  },
  {
    name: "Patrick Campos",
    role: "Ex-aluno",
    text: "Estudei no colégio Dávilohn desde o primeiro ano do ensino fundamental I até o terceiro ano do ensino médio. Foi uma experiência fantástica, os professores são maravilhosos.",
  },
  {
    name: "Bethania Lia Martins",
    role: "Google Maps",
    text: "O colégio Davilohn é incrível! Ele se destaca dos outros de Guarulhos por ter um ambiente extremamente impecável, muito agradável e acolhedor.",
  },
  {
    name: "Maria Eduarda Domingos Tapetti",
    role: "Ex-aluna",
    text: "Minha experiência na escola Davilohn foi muito positiva e marcou minha trajetória de forma especial. É uma instituição que se preocupa de verdade com os alunos.",
  },
  {
    name: "Angelica Alves",
    role: "Google Maps",
    text: "Colégio Dávilohn amor eterno, uma escola comprometida com ensino diferenciado, usa uma didática criativa e consegue transformar sonhos em realidade.",
  },
  {
    name: "JP Alves",
    role: "Aluno",
    text: "Sempre estudei no Dávilohn, adoro os professores, o coordenador e a auxiliar da coordenação, sempre foram atenciosos. Todos os funcionários são excelentes pessoas.",
  },
];

export const documents = [
  "RG do aluno",
  "Certidão de nascimento",
  "Foto 3x4",
  "Histórico escolar",
  "RG e CPF dos responsáveis",
  "Comprovante de endereço",
  "Declaração de escolaridade / transferência",
  "Declaração de quitação do colégio anterior",
];

export const faqs = [
  {
    q: "A partir de qual idade o colégio recebe alunos?",
    a: "A Educação Infantil recebe crianças a partir de 2 anos, no Minimaternal. O colégio acompanha o aluno até a 3ª série do Ensino Médio.",
  },
  {
    q: "Quais são os horários de cada segmento?",
    a: "Educação Infantil: 7h30 às 11h30 ou 13h30 às 17h30. Fundamental I: 7h30 às 12h ou 13h30 às 18h. Fundamental II: 7h às 12h20 ou 13h às 18h20. Ensino Médio: 7h às 13h10.",
  },
  {
    q: "Qual é o sistema de ensino?",
    a: "O colégio trabalha com o Sistema Anglo de Ensino, com simulados e avaliações ao longo do ano, alinhado à Base Nacional Comum Curricular (BNCC).",
  },
  {
    q: "Quais documentos preciso para a matrícula?",
    a: "RG e certidão de nascimento do aluno, foto 3x4, histórico escolar, RG e CPF dos responsáveis, comprovante de endereço, declaração de escolaridade/transferência e declaração de quitação do colégio anterior.",
  },
  {
    q: "Posso visitar o colégio antes de matricular?",
    a: "Pode e deve! Escolha o melhor dia e horário no formulário de agendamento ou fale com a gente pelo WhatsApp.",
  },
];
