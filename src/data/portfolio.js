import { getUniqueId } from "../utils/get-unique-id"

export const portfolioData = [
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'reel.png',
        title: 'Reel de gráficos animados',
        description: [
            'Disfruto del proceso de animación y todo el flujo de trabajo que conlleva, creo que con una fuerte base de habilidades para la animación y un buen gusto por el diseño es posible resolver practicamente cualquier problema.',
            'He trabajado en Gráficos animados desde 2010 (dos canales de televisión y una agencia multimedia). Este reel representa todos esos años de trabajo.'
        ],

        tools: ['After Effects', 'Universe Studio', 'Particle', 'Optical flares', 'Cinema4D', 'Element3D', 'Illustrator', 'Photoshop', 'Premiere Pro', 'GIMP'],
        projectIcon: 'fab fa-vimeo-v',
        projectLinkText: 'Ver en Vimeo',
        projectLink: 'https://vimeo.com/757842746'
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'javascript',
        src: 'csv-to-ae.jpg',
        title: 'Automatizar CSV a render (Script After Effects)',
        description: [
            'Parte de mi trabajo en TV es postproducir grandes cantidades de videos para su emisión en remates en vivo. La tarea en After Effects consiste en copiar datos de un archivo excel, pegarlos en la composición y renderizar, para luego repetir este proceso por cada video. El problema es cuando la cantidad de datos a mostrar es demasiada y los videos son muchos (más de 100 videos en un día).',
            'Este script automatiza todo el proceso: Por cada fila del archivo CSV, copia los datos, los setea en las capas de texto de la composición y renderiza en el formato de video deseado. De esta manera, un trabajo de horas se reduce a minutos.'
        ],
        tools: ['JavaScript', 'After Effects'],
        projectLinksList: [
            { projectIcon: 'fab fa-github', projectLinkText: 'Código', projectLink: 'https://github.com/lopezrunco/csv-to-ae-script' },
        ]
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'javascript',
        src: 'currencies-script.jpg',
        title: 'Scrap & render (Script After Effects)',
        description: [
            'Con este script se automatiza parte del trabajo de postproducción de un programa de emisión diaria.',
            'Este script para After Effects analiza la web del Banco Central del Uruguay, obtiene los datos de la cotización de la moneda en formato JSON, setea los datos en After Effects y renderiza un gráfico de cotización de la moneda.'
        ],
        items: ['After Effects project', 'Scraper script', 'Render script'],
        tools: ['After Effects', 'JavaScript', 'Node.js', 'Axios', 'Cheerio'],
        projectLinksList: [
            { projectIcon: 'fab fa-github', projectLinkText: 'Código', projectLink: 'https://github.com/lopezrunco/ae-script-render-web-currencies' },
        ]
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'amasvagro.png',
        title: 'Paquete gráfico A+V Agropecuario',
        description: [
            '"A+V Agropecuario" es un programa de TV emitido en los canales uruguayos Canal 10 y A+V, en donde me desempeñé como Editor de video y Diseñador de gráficos animados. En este proyecto, trabajé mano a mano con la directiva del canal, ya que era muy importante desarrollar la gráfica como una extensión de la imagen institucional del canal. Además de la gráfica animada, diseñé el logo y los fondos para la escenografía.'
        ],
        items: ['Intro', 'Closing Credits', 'Bumper in', 'Bumper out', 'Transitions', 'Lower Thirds', 'Animated logo', 'Information screens', 'Opening titles screen', 'Loop', 'Studio background'],
        tools: ['After Effects', 'Particle', 'Optical flares', 'Cinema4D', 'Element3D', 'Illustrator'],
        projectIcon: 'fab fa-vimeo-v',
        projectLinkText: 'Ver en Vimeo',
        projectLink: 'https://vimeo.com/768882955'
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'chelir.png',
        title: 'Paquete gráfico Chelir',
        description: [
            'Chelir es una empresa uruguaya dedicada a la venta de maquinaria rural e industrial. En 2014 la empresa decidió poner en marcha una campaña de relanzamiento de marca, cubriendo redes sociales, radio web y televisión. Desarrollé la gráfica institucional para su utilización en videos institucionales, testimoniales, avisos y promociones a emitir en los canales 10 y A+V. Además del desarrollo de la gráfica, trabajé en la edición de video y el guión audiovisual.',
        ],
        items: ['Intro', 'Credits', 'Bumpers', 'Transitions', 'Lower Thirds', 'Animated logo', 'Information screens', 'Loop'],
        tools: ['After Effects', 'Particle', 'Optical flares', 'Cinema4D'],
        projectIcon: 'fab fa-vimeo-v',
        projectLinkText: 'Ver en Vimeo',
        projectLink: 'https://vimeo.com/768881852'
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'mtb.png',
        title: 'Promoción de evento de Mountain bike',
        description: [
            'Realicé promocionales para un evento de Mountain bike. En este proyecto participé en todas las etapas de la producción: rodaje de video, edición y gráficos animados.',
            'El objetivo de dichos promocionales fué la viralización en redes sociales y Whatsapp.',
        ],
        items: ['Social media promotional', 'TV promotional'],
        tools: ['After Effects', 'Photoshop'],
        projectIcon: 'fab fa-vimeo-v',
        projectLinkText: 'Ver en Vimeo',
        projectLink: 'https://vimeo.com/761328200'
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'splf.png',
        title: 'Paquete gráfico SPLF',
        description: [
            'La Sociedad de Productores de Leche de Florida (SPLF) es una de las gremiales más importantes de Uruguay, fundada en 1976. En su 40 aniversario, la directiva confió en nuestro equipo para el relanzamiento de la marca a través de radio, redes sociales, web y televisión. Trabajé en la edición de video y en el desarrollo de la gráfica para su uso en videos institucionales, testimoniales y avisos.'
        ],
        items: ['Bumper in', 'Bumper out', 'Transitions', 'Lower Thirds', 'Information screens', 'Organigrams', 'Charts'],
        tools: ['After Effects', 'Optical flares', 'Illustrator', 'Photoshop'],
        projectIcon: 'fab fa-youtube',
        projectLinkText: 'Ver en YouTube',
        projectLink: 'https://youtu.be/uyRGWiO0rk0'
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'delgrossi.png',
        title: 'Promo de programa radial',
        description: [
            '"Delgrossi alquila" fué un programa radial emitido en Radio Carve (850 AM de Montevideo, Uruguay). En este programa, un comediante realizaba parodias de políticos, empresarios y figuras públicas de Uruguay.',
            'El flujo de trabajo en este proyecto consistió en el registro de las parodias, realizadas por el comediante siguiendo un guión. Con esa base, realicé las caricaturas, que pasaron por un proceso de selección por parte de la directiva de la radio. Una vez aprobadas, procedí a la animación de las mismas en After Effects, siguiendo una estética de historieta.',
        ],
        items: ['Promo'],
        tools: ['After Effects', 'Universe Studio', 'Photoshop'],
        projectIcon: 'fab fa-vimeo-v',
        projectLinkText: 'Ver en Vimeo',
        projectLink: 'https://vimeo.com/779868699'
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'motion-design',
        src: 'amasv.png',
        title: 'Paquete gráfico Canal A+V',
        description: [
            'A+V es un canal de cable de Uruguay cuya programación se compone 100% de producciones locales, como eventos culturales y deportivos, arte y turismo. Desde 2010 a 2017, trabajé mano a mano con el dueño y director de la empresa, desarrollando productos enfocados en la visión y misión de la misma. Por esos años de experiencia y confianza, se me encargó la tarea de desarrollar la gráfica institucional del canal.',
        ],
        items: ['Main promo', 'Transitions', 'Advert box', 'Comming up', 'Credits', 'Daily Corner', 'Later', 'Logo bumper', 'Main schedule', 'Next show', 'Now watching', 'Now & Next', 'Social media', 'Sponsor box', 'Tonight', 'Lower Thirds', 'Slideshows'],
        tools: ['After Effects', 'Particle', 'Optical flares', 'Cinema4D', 'Illustrator', 'Photoshop']
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'javascript',
        src: 'convertext.jpg',
        title: 'Formateador de texto (Electron.js)',
        description: [
            'Esta app fué desarrollada para facilitar el trabajo del día a día en el mantenimiento de proyectos. A menudo, los clientes envían contenido en múltiples formatos de texto, lo que lleva a mucho trabajo manual formateando el texto. Esta app automatiza gran parte de ese proceso.',
            'Convertext es una web app simple y funcional que permite pasar el texto de mayúsculas a minúsculas o viceversa, capitalizar por completo o capitalizar despúes de signos de puntuación.'
        ],
        tools: ['JavaScript', 'Electron.js'],
        projectLinksList: [
            { projectIcon: 'fab fa-github', projectLinkText: 'Código', projectLink: 'https://github.com/lopezrunco/Convertext-electron-js' },
        ]
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'javascript',
        src: 'qr-generator.jpg',
        title: 'Generador de QR (Vanilla JS)',
        description: [
            'Desarrollé este proyecto para ofrecer una solución común a los requerimientos de varios clientes. Esta app genera códigos QR desde cualquier URL (web, imágenes, videos, pdf) y permite descargarlos en varios tamaños.'
        ],
        tools: ['JavaScript', 'SASS', 'HTML', 'Photoshop'],
        projectLinksList: [
            { projectIcon: 'fab fa-github', projectLinkText: 'Código', projectLink: 'https://github.com/lopezrunco/qr-generator-vanilla-js' },
        ]
    },
    {
        id: getUniqueId(),
        published: true,
        category: 'javascript',
        src: 'label-remove-script.jpg',
        title: 'Etiquetado y eliminación de recursos (Script After Effects)',
        description: [
            'Este script permite etiquetar recursos usados y no usados en composiciones de After Effects, eliminar todos los archivos sin usar y eliminar recursos por tipo de archivo (imagen, video o audio).'
        ],
        tools: [ 'JavaScript',],
        projectLinksList: [
            { projectIcon: 'fab fa-github', projectLinkText: 'Código', projectLink: 'https://github.com/lopezrunco/label-and-remove-unused-footage-ae-script' },
        ]
    },
]