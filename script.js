document.addEventListener('DOMContentLoaded', function() {
    // Language translation object
    const translations = {
        en: {
            home: "Home",
            about: "About",
            speciality: "Speciality",
            projects: "Projects",
            portfolio: "Portfolio",
            contact: "Contact",
            title: "TRANSFORMING IDEAS INTO DIGITAL REALITY",
            intro1: "Creativity and innovation go hand in hand. With a unique combination of impactful design, intuitive functionality, and results-driven optimization, I am ready to create the online presence of your dreams.",
            intro2: "My name is <strong>Albert</strong>, and I am a <strong>Web Developer</strong>. I specialize in creating websites that are not only visually appealing but also user-friendly and optimized for performance.",
            linkUp: "Link up",
            specialitiesTitle: "MY <span>SPECIALITIES.</span>",
            webDesign: "Web Design",
            webDesignDesc: "Creating visually appealing and user-friendly websites that enhance the user experience.",
            webDev: "Web Development",
            webDevDesc: "Building robust and scalable web applications using the latest technologies and frameworks.",
            seo: "SEO Optimization",
            seoDesc: "Improving website visibility and ranking on search engines through effective SEO strategies.",
            aboutTitle: "ABOUT <span>ME.</span>",
            aboutText1: "As a web developer, I am passionate about creating websites that are not only visually appealing but also user-friendly and optimized for performance. I have a strong foundation in HTML, CSS, and JavaScript, and I am constantly learning new technologies and frameworks to stay up-to-date with the latest trends in web development.",
            aboutText2: "I believe that a website should be a reflection of the brand it represents, and I work closely with my clients to understand their vision and goals. My attention to detail and commitment to quality ensure that every project I undertake is completed to the highest standard.",
            projectsTitle: "MY <span>PROJECTS.</span>",
            portfolioTitle: "MY <span>PORTFOLIO</span>",
            contactTitle: "CONTACT <span>ME</span>",
            formName: "Name",
            formPhone: "Phone",
            formEmail: "Email",
            formMessage: "Message",
            send: "Send",
            copyright: "&copy;2025 Albert Johnson Technology. All rights reserved."
        },
        pt: {
            home: "Início",
            about: "Sobre",
            speciality: "Especialidade",
            projects: "Projetos",
            portfolio: "Portfólio",
            contact: "Contato",
            title: "TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL",
            intro1: "Criatividade e inovação andam de mãos dadas. Com uma combinação única de design impactante, funcionalidade intuitiva e otimização orientada a resultados, estou pronto para criar a presença online dos seus sonhos.",
            intro2: "Meu nome é <strong>Albert</strong>, e eu sou um <strong>Desenvolvedor Web</strong>. Eu me especializo em criar sites que não são apenas visualmente atraentes, mas também fáceis de usar e otimizados para desempenho.",
            linkUp: "Conectar",
            specialitiesTitle: "MINHAS <span>ESPECIALIDADES.</span>",
            webDesign: "Design Web",
            webDesignDesc: "Criação de sites visualmente atraentes e fáceis de usar que melhoram a experiência do usuário.",
            webDev: "Desenvolvimento Web",
            webDevDesc: "Construção de aplicações web robustas e escaláveis usando as mais recentes tecnologias e frameworks.",
            seo: "Otimização SEO",
            seoDesc: "Melhorando a visibilidade e classificação do site nos mecanismos de busca através de estratégias eficazes de SEO.",
            aboutTitle: "SOBRE <span>MIM.</span>",
            aboutText1: "Como desenvolvedor web, sou apaixonado por criar sites que não são apenas visualmente atraentes, mas também fáceis de usar e otimizados para desempenho. Tenho uma base sólida em HTML, CSS e JavaScript, e estou constantemente aprendendo novas tecnologias e frameworks para me manter atualizado com as últimas tendências em desenvolvimento web.",
            aboutText2: "Acredito que um site deve ser um reflexo da marca que representa, e trabalho em estreita colaboração com meus clientes para entender sua visão e objetivos. Minha atenção aos detalhes e compromisso com a qualidade garantem que cada projeto que realizo seja concluído no mais alto padrão.",
            projectsTitle: "MEUS <span>PROJETOS.</span>",
            portfolioTitle: "MEU <span>PORTFÓLIO</span>",
            contactTitle: "ENTRE EM <span>CONTATO</span>",
            formName: "Nome",
            formPhone: "Telefone",
            formEmail: "Email",
            formMessage: "Mensagem",
            send: "Enviar",
            copyright: "&copy;2025 Albert Johnson Technology. Todos os direitos reservados."
        },
        es: {
            home: "Inicio",
            about: "Sobre mí",
            speciality: "Especialidad",
            projects: "Proyectos",
            portfolio: "Portafolio",
            contact: "Contacto",
            title: "TRANSFORMANDO IDEAS EN REALIDAD DIGITAL",
            intro1: "La creatividad y la innovación van de la mano. Con una combinación única de diseño impactante, funcionalidad intuitiva y optimización orientada a resultados, estoy listo para crear la presencia en línea de tus sueños.",
            intro2: "Mi nombre es <strong>Albert</strong>, y soy un <strong>Desarrollador Web</strong>. Me especializo en crear sitios web que no solo son visualmente atractivos, sino también fáciles de usar y optimizados para el rendimiento.",
            linkUp: "Conectar",
            specialitiesTitle: "MIS <span>ESPECIALIDADES.</span>",
            webDesign: "Diseño Web",
            webDesignDesc: "Creación de sitios web visualmente atractivos y fáciles de usar que mejoran la experiencia del usuario.",
            webDev: "Desarrollo Web",
            webDevDesc: "Construcción de aplicaciones web robustas y escalables utilizando las últimas tecnologías y frameworks.",
            seo: "Optimización SEO",
            seoDesc: "Mejorando la visibilidad y el ranking del sitio web en los motores de búsqueda a través de estrategias efectivas de SEO.",
            aboutTitle: "SOBRE <span>MÍ.</span>",
            aboutText1: "Como desarrollador web, me apasiona crear sitios web que no solo sean visualmente atractivos, sino también fáciles de usar y optimizados para el rendimiento. Tengo una base sólida en HTML, CSS y JavaScript, y estoy constantemente aprendiendo nuevas tecnologías y frameworks para mantenerme actualizado con las últimas tendencias en desarrollo web.",
            aboutText2: "Creo que un sitio web debe ser un reflejo de la marca que representa, y trabajo en estrecha colaboración con mis clientes para comprender su visión y objetivos. Mi atención al detalle y compromiso con la calidad aseguran que cada proyecto que emprendo se complete con los más altos estándares.",
            projectsTitle: "MIS <span>PROYECTOS.</span>",
            portfolioTitle: "MI <span>PORTAFOLIO</span>",
            contactTitle: "CONTÁC<span>TAME</span>",
            formName: "Nombre",
            formPhone: "Teléfono",
            formEmail: "Correo electrónico",
            formMessage: "Mensaje",
            send: "Enviar",
            copyright: "&copy;2025 Albert Johnson Technology. Todos los derechos reservados."
        }
    };

    // Function to change language
    function changeLanguage(lang) {
        // Set all language buttons to inactive
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) btn.classList.add('active');
        });
        
        // Set current language button to active
        const activeBtn = document.querySelector(`.language-btn[data-lang="${lang}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
       //Get all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            } else {
                console.warn(`Missing translation for key: "${key}" in "${lang}"`);
            }
        });
        
        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);
    }

    // Initialize language on page load
    function initLanguage() {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('selectedLanguage') || 
                             (navigator.language.startsWith('pt') ? 'pt' : 
                              navigator.language.startsWith('es') ? 'es' : 'en');
        changeLanguage(savedLanguage);
    }

    // Mobile menu functionality
    function setupMobileMenu() {
        const btnMenu = document.getElementById('btn-menu');
        const menuMobile = document.getElementById('menu-mobile');
        const overlayMenu = document.getElementById('overlay-menu');
        
        if (btnMenu && menuMobile && overlayMenu) {
            btnMenu.addEventListener('click', function() {
                menuMobile.classList.add('abrir-menu');
                overlayMenu.classList.add('abrir-menu');
            });
            
            menuMobile.querySelector('.btn-fechar').addEventListener('click', function() {
                menuMobile.classList.remove('abrir-menu');
                overlayMenu.classList.remove('abrir-menu');
            });
            
            overlayMenu.addEventListener('click', function() {
                menuMobile.classList.remove('abrir-menu');
                overlayMenu.classList.remove('abrir-menu');
            });
        }
    }

    // Smooth scrolling for anchor links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const menuMobile = document.getElementById('menu-mobile');
                    const overlayMenu = document.getElementById('overlay-menu');
                    if (menuMobile && overlayMenu) {
                        menuMobile.classList.remove('abrir-menu');
                        overlayMenu.classList.remove('abrir-menu');
                    }
                }
            });
        });
    }

    // Initialize all functionality
    function init() {
        initLanguage();
        
        // Add event listeners to language buttons
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });
        
        setupMobileMenu();
        setupSmoothScrolling();
    }

    // Start the application
    init();
});