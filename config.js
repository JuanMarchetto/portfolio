const config = {
    name: 'Juan Patricio Marchetto',
    img: 'juan.jpeg',
    darkTheme: false,
    sections: {
      en: [
        {
          type: 'description',
          title: 'About me',
          content: "I'm a developer with 7 years of experience, mainly in Front End development with JavaScript, HTML5 y CSS3 and ReactJs. I also have knolledge of Node and Python, and I like too learn new technologies all the time. I'am very passionate about technology and science in general.",
          maxHeight: '7rem',
        },
        {
          type: 'carrusel',
          title: 'Some Projects I Worked On:',
          childs: [{
            slideTitle: 'Matrix Component',
            img: 'matrix.jpg',
            description: 'A React Component to render grid like views.',
            url: 'https://www.npmjs.com/package/matrix-component',
          },
          {
            slideTitle: 'Memo Game',
            img: 'memo.png',
            description: 'a Memo Game made with react and de Matrix Component.',
            url: 'https://memofran.netlify.app/',
          },
          {
            slideTitle: 'Litle games', img: 'litle-games.png', description: 'Litle games created whit javascript', url: 'https://juanmarchetto.github.io/little-games/',
          },
          {
            slideTitle: 'Planner', img: 'planner.png', description: 'callendar like planner', url: 'https://csb-td2zw.netlify.app/',
          },
          ],
        },
        {
          type: 'work-experience',
          title: 'Work Experience',
          jobs: [
            {
              jobTitle: 'Front End',
              enterprise: 'Intive',
              startDate: '2019',
              endDate: 'Current',
              description: 'Developing sites in ReactJs taking special attention to accessibility.',
              technologies: [
                'JavaScript',
                'ReactJS',
                'Next JS',
                'Redux',
                'Sagas',
                'TypeScript',
                'TDD',
                'HTML5',
                'CSS3',
                'SASS',
                'LESS',
                'Bootstrap',
                'material-ui',
              ],
            },
            {
              jobTitle: 'Full Stack Engineer',
              enterprise: 'Clar??n',
              startDate: '2019',
              endDate: '',
              description: `
                Developer in Ole and Clarin, these two products are a newspaper and a sports paper.
                Tasks: migration of widgets provided by a provider, some functionalities based on
                an old CMS written in PHP, developing our own applications based on the MERN stack.
                and Next JS for Server-Side Rendering.
              `,
              technologies: [
                'JavaScript',
                'ReactJS',
                'Next JS',
                'Redux',
                'jQuery',
                'HTML5',
                'CSS3',
                'SASS',
                'LESS',
                'Bootstrap',
                'PHP',
                'Symphony',
                'Twig',
              ],
            },
            {
              jobTitle: 'Front End Engineer',
              enterprise: 'Keepcon',
              startDate: '2017',
              endDate: '2019',
              description: `
              Responsible for the development of the Front-End layer for the main product of the company, which is an application for monitoring social media and managing automatic replies in networks and chats, as well as brand and competitor???s analysis. Responsible for the design and implementation of the new views, as well as implementing new functionalities that aim to enrich User Experience with responsive criteria, material design and mobile first as premises.
              `,
              technologies: [
                'JavaScript',
                'jQuery',
                'HTML5',
                'CSS3',
                'SASS',
                'CoffeeScript',
                'Bootstrap',
                'BackboneJS',
              ],
            },
            {
              jobTitle: 'Front End Engineer',
              enterprise: 'UTN',
              startDate: '2015',
              endDate: '2017',
              description: `
              In charge of the Front-End development for several projects, which were administrative tools internally used by the institution, among those: a web application and a form that were used to register the student body, as well the web for managing the internal work requirements. Responsible for developing the Front-end layer from scratch and in charge of updating it in legacy webs while implementing responsive criteria and cross-browser compatibility.
              `,
              technologies: [
                'JavaScript',
                'jQuery',
                'HTML5',
                'CSS3',
                'Bootstrap',
                'PHP',
                'Symphony',
                'Twig',
              ],
            },
            {
              jobTitle: 'Consultant',
              enterprise: 'Ministry of Education',
              startDate: '2013',
              endDate: '2015',
              description: `
              Responsible for Technical and IT Support for the Education Ministry within the country and for the University policies area. responsible for gathering, analyzing and consolidating information inherent to programs and areas from the Secretariat of University Policies for the preparation of the Annual Action Plan.             `,
              technologies: [
                'Software and Hardware support',
                'Active Directory',
                'Exchange',
                'Microsoft Office',
              ],
            },
            {
              jobTitle: 'Technical Support Manager',
              enterprise: 'Accounting Buffet',
              startDate: '2010',
              endDate: '2013',
              description: `
              Responsible for Technical Support and Server Administration for the company. In charge of giving support for the infrastructure, specifically on Active Directory, Exchange, ISA Server, SQL Server. Responsible for repairing equipment and support hardware and software such as Bejerman or Microsoft Office.
              `,
              technologies: [
                'Software and Hardware support',
                'Active Directory',
                'Exchange',
                'Microsoft Office',
                'ISA Server',
                'SQL Server',
                'Bejerman',
              ],
            },
            {
              jobTitle: 'Support Exchange',
              enterprise: 'IBM',
              startDate: '2007',
              endDate: '2009',
              description: `
              Responsible for supporting the migration of the email service for the internal users. In charge of performing the migration from Lotus Notes to Microsoft Office application.            `,
              technologies: [
                'Software support',
                'Lotus Notes',
                'Outlook',
              ],
            },
            {
              jobTitle: 'Level 2 Support',
              enterprise: 'HP',
              startDate: '2007',
              endDate: '2009',
              description: `
              Responsible for Technical Support, authorization of service centers and for part validation, which consisted in providing authorization to deliver parts by insurance of desktops, Pocket PCs and Servers.
              `,
              technologies: [
                'Hardware diagnostics',
              ],
            },
            {
              jobTitle: 'Technical Support',
              enterprise: 'Ciber Socket',
              startDate: '2003',
              endDate: '2005',
              description: `
              Responsible for Cyber Caf?? management and Technical Support.
              `,
              technologies: [
                'Software and Hardware support',
              ],
            },
          ],
        },
      ],
      es: [
        {
          type: 'description',
          title: 'Un poco sobre m??',
          content: 'Soy desarrollador con 7 a??os de experiencia, mayormente realizando trabajos de Front End con JavaScript, HTML5 y CSS3, aunque mis trabajos m??s recientes estuvieron basados en ReactJs. Tambi??n tengo conocimientos de Node y Python. Me interesa mucho la tecnolog??a, me gusta estar en procesos de aprendizaje continuo y me apasiona el impacto social potencial que tiene la tecnolog??a y en particular la inteligencia artificial.',
          maxHeight: '7rem',
        },
        {
          type: 'carrusel',
          title: 'Algunos Proyectos Que He Desarrollado:',
          childs: [{
            slideTitle: 'Matrix Component',
            img: 'matrix.jpg',
            description: 'A React Component to render grid like views.',
            url: 'https://www.npmjs.com/package/matrix-component',
          },
          {
            slideTitle: 'Memo Game',
            img: 'memo.png',
            description: 'a Memo Game made with react and de Matrix Component.',
            url: 'https://memofran.netlify.app/',
          },
          {
            slideTitle: 'Litle games', img: 'litle-games.png', description: 'Litle games created whit javascript', url: 'https://juanmarchetto.github.io/little-games/',
          },
          {
            slideTitle: 'Planner', img: 'planner.png', description: 'callendar like planner', url: 'https://csb-td2zw.netlify.app/',
          },
          ],
        },
        {
          type: 'work-experience',
          title: 'Work Experience',
          jobs: [
            {
              jobTitle: 'Front End',
              enterprise: 'Intive',
              startDate: '2019',
              endDate: 'Current',
              description: 'Desarrollo de aplicaciones webs con React. Adem??s, dentro de mis resposabilidades, est??n el desarrollo de tests unitarios, tests de integraci??n, tests end to end automatizados y code reviews.',
              technologies: [
                'JavaScript',
                'ReactJS',
                'Next JS',
                'Redux',
                'Sagas',
                'TypeScript',
                'TDD',
                'HTML5',
                'CSS3',
                'SASS',
                'LESS',
                'Bootstrap',
                'material-ui',
              ],
            },
            {
              jobTitle: 'Full Stack Engineer',
              enterprise: 'Clar??n',
              startDate: '2019',
              endDate: '',
              description: `
              Desarrollo web de los diarios Clar??n y Ol??, migraci??n del antiguo CMS monol??tico realizado en PHP a un esquema de microservicios basado en el MERN stack, implementaci??n de NextJs para Server-Side Rendering.
              `,
              technologies: [
                'JavaScript',
                'ReactJS',
                'Next JS',
                'Redux',
                'jQuery',
                'HTML5',
                'CSS3',
                'SASS',
                'LESS',
                'Bootstrap',
                'PHP',
                'Symphony',
                'Twig',
              ],
            },
            {
              jobTitle: 'Front End Engineer',
              enterprise: 'Keepcon',
              startDate: '2017',
              endDate: '2019',
              description: `
              Desarrollo del Front End del producto principal de la compa????a, teniendo en cuenta criterios tales como mobile first y material design.
              `,
              technologies: [
                'JavaScript',
                'jQuery',
                'HTML5',
                'CSS3',
                'SASS',
                'CoffeeScript',
                'Bootstrap',
                'BackboneJS',
              ],
            },
            {
              jobTitle: 'Front End Engineer',
              enterprise: 'UTN',
              startDate: '2015',
              endDate: '2017',
              description: `
              Realizaci??n y mantenimiento del Front End de varios sitios administrativos internos con JavaScript, HTML5, CSS y SASS.            `,
              technologies: [
                'JavaScript',
                'jQuery',
                'HTML5',
                'CSS3',
                'Bootstrap',
                'PHP',
                'Symphony',
                'Twig',
              ],
            },
            {
              jobTitle: 'Consultor',
              enterprise: 'Ministerio de Educaci??n',
              startDate: '2013',
              endDate: '2015',
              description: `
              Mis tareas fueron variadas, inicialmente realizaba tareas de soporte y reparaci??n de computadoras.            `,
              technologies: [
                'Software and Hardware support',
                'Active Directory',
                'Exchange',
                'Microsoft Office',
              ],
            },
            {
              jobTitle: 'Technical Support Manager',
              enterprise: 'Estudio Contable',
              startDate: '2010',
              endDate: '2013',
              description: `
              Responsable del soporte t??cnico y administraci??n de servidores. A cargo del mantenimiento de la infraestructura, especificamente de Active Directory, Exchange, ISA Server, SQL Server y Bejerman.            `,
              technologies: [
                'Software and Hardware support',
                'Active Directory',
                'Exchange',
                'Microsoft Office',
                'ISA Server',
                'SQL Server',
                'Bejerman',
              ],
            },
            {
              jobTitle: 'Support Exchange',
              enterprise: 'IBM',
              startDate: '2007',
              endDate: '2009',
              description: `
              Responsable del soporte a la migraci??n del sistema de mails para los usuarios internos.
              `,
              technologies: [
                'Software support',
                'Lotus Notes',
                'Outlook',
              ],
            },
            {
              jobTitle: 'Level 2 Support',
              enterprise: 'HP',
              startDate: '2007',
              endDate: '2009',
              description: `
              Responsable de soporte tecnico, validaci??n y autorizaci??n del envio de respuestos a los centros de atenci??n (verificaci??n de la relaci??n entre el diagnostico tecnico y las partes solicitadas por garantia).
              `,
              technologies: [
                'Hardware diagnostics',
              ],
            },
            {
              jobTitle: 'Technical Support',
              enterprise: 'Ciber Socket',
              startDate: '2003',
              endDate: '2005',
              description: `
              Responsable de la administraci??n y atencion publica del ciber, soporte de software y hardware de los equipos
              `,
              technologies: [
                'Software and Hardware support',
              ],
            },
          ],
        },
      ],
    },
    footer: {
      social: [
        {
          icon: 'github.png',
          link: 'https://github.com/JuanMarchetto',
          alt: 'Github Repo',
        },
        {
          icon: 'linkedin.png',
          link: 'https://www.linkedin.com/in/marchettojuan/',
          alt: 'Linkedin Profile',
        },
      ],
    },
  };
  
  export default config;
  