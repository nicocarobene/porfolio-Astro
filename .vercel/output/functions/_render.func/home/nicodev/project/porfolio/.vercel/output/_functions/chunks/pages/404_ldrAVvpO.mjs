/* empty css                              */
import 'html-escaper';
import 'cssesc';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderSlot, g as renderHead, m as maybeRenderHead, h as renderComponent, s as spreadAttributes } from '../astro_ovZbvY4O.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */
/* empty css                          */

const $$Astro$e = createAstro();
const $$Error404Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Error404Layout;
  const { description, title } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="robots" content="nofollow, noindex"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Onest:wght@100;300;500;700&display=swap" rel="stylesheet"><title>${title}</title>${renderSlot($$result, $$slots["preload"])}${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main>  </body></html>`;
}, "/home/nicodev/project/porfolio/src/layouts/Error404Layout.astro", void 0);

const SEO_TITLE_1$1 = "Porfolio - Nicodev 💻";
const SEO_DESCRIPTION$1 = "Welcome to my professional full stack developer portfolio. Explore my profile, projects, and experience. Feel free to reach out for collaborations and web development opportunities.";
const SEO$1 = {
	ERROR_404_TITLE: "Page not found 😭",
	ERROR_404_DESCRIPTION: "Sorry, we couldn't find the page you were looking for.",
	ERROR_404_BACK: "Go back to home"
};
const HEADER$1 = {
	LOGO: "Return to home"
};
const HEADER_EXPERIENCE$1 = "Expirience";
const HEADER_PROJECT$1 = "Projects";
const HEADER_ABOUTME$1 = "About me";
const HEADER_CONTACT$1 = "Contact";
const PRESENTATION_SECCION$1 = {
	TITLE: "Hi Human"
};
const PROJECTS$1 = {
	TITLE: "Projects",
	MOBILE: {
		EXTENSION: {
			TITLE: "Extension",
			DESCRIPTION: "Visual Studio Code extension to improve your productivity and streamline your routine work"
		},
		PROJECTS: {
			TITLE: "Projects",
			DESCRIPTION: "List of projects I have worked on"
		},
		VIDEOGAME: {
			TITLE: "Videogames",
			DESCRIPTION: "Videogame created with HTML, CSS and JavaScript"
		}
	},
	DESKTOP: {
		WORDLE: {
			TITLE: "Wordle",
			DESCRIPTION: "Wordle game created with HTML, CSS and JavaScript"
		},
		FERIALIBRO: {
			TITLE: "Feria libro",
			DESCRIPTION: "Feria libro created with HTML, CSS and JavaScript"
		},
		EXTENSION: {
			TITLE: "Extension",
			DESCRIPTION: "Visual Studio Code extension to improve your productivity and streamline your routine work"
		},
		SKILLSTEST: {
			TITLE: "Skills Test",
			DESCRIPTION: "Test skills created with HTML, CSS and JavaScript"
		},
		PROJECTS: {
			TITLE: "Projects",
			DESCRIPTION: "List of projects I have worked on"
		},
		MINESWEEPER: {
			TITLE: "Minesweeper",
			DESCRIPTION: "Minesweeper game created with HTML, CSS and JavaScript"
		},
		SHOPPINGCARD: {
			TITLE: "Shopping Card",
			DESCRIPTION: "Shopping Card created with HTML, CSS and JavaScript"
		},
		SIMONSAY: {
			TITLE: "Simon Say",
			DESCRIPTION: "Simon Say game created with HTML, CSS and JavaScript"
		}
	}
};
const ABOUTME$1 = {
	TITLE: "About me",
	DESCRIPTION: "A little bit about me",
	MOBILE: {
		FIRST: {
			PARRAFO_1_BEGIN: "I love",
			SPAN_1: "building modern and scalable web applications,",
			PARRAFO_1_END: "that provide an excellent user experience."
		},
		SECOND: {
			PARRAFO_BEGIN: "On the frontend, I work with technologies such as",
			SPAN_1: "TypeScript",
			PARRAFO_CONECTOR: "and",
			SPAN_2: "JavaScript",
			PARRAFO_MIDDLE: ", using frameworks like",
			SPAN_3: "Next.js",
			SPAN_4: "Angular",
			SPAN_5: "Web Components",
			PARRAFO_END: ". Additionally, I have experience with",
			SPAN_6: "Astro",
			PARRAFO_END2: ", an exciting new way to create ultra-fast websites and universal components."
		},
		THREE: {
			PARRAFO_BEGIN: "On the backend, I have worked with",
			SPAN_1: "Node.js",
			PARRAFO_CONECTOR: "and",
			SPAN_2: "Java",
			PARRAFO_1_END: ", using frameworks like",
			SPAN_3: "Express",
			SPAN_4: "Spring Boot",
			PARRAFO_2_END: "to build APIs. I also specialize in designing and developing databases using",
			SPAN_5: "SQL",
			SPAN_6: "NoSQL",
			PARRAFO_3_END: ", such as MySQL and MongoDB, and I am familiar with object-relational mapping (ORM) tools like",
			SPAN_7: "Hibernate"
		}
	},
	DESKTOP: {
		FIRST: {
			PARRAFO_1: "Hi there! I'm",
			SPAN: "Nicolás Carobene",
			PARRAFO_2: "but my friends call me Nico 😎.",
			PARRAFO_3: "I am an Argentine living in Madrid, Spain."
		},
		SECOND: {
			PARRAFO_1: "I'm dentist but I also developer.",
			PARRAFO_2: "My journey into programming began when I decided to create a website for my dental clinic. From that moment on, I was hooked.",
			SPAN: "I love it!"
		},
		THREE: {
			PARRAFO_BEGIN: "The excitement of",
			SPAN: "creating elegant solutions for complex problems",
			PARRAFO_END: "captured my imagination, and I haven't looked back since."
		},
		FOURTH: {
			PARRAFO_BEGIN: "Beyond my technical skills, I take pride in my ability to",
			SPAN: "communicate effectively and collaborate seamlessly with teams of all sizes",
			PARRAFO_END: "My dedication to continuous learning and growth ensures that I stay abreast of trends in an ever-evolving industry."
		}
	}
};
const CONTACT$1 = {
	NAME_FIELD: {
		LABEL: "Name",
		PLACEHOLDER: "Bonnie Green"
	},
	EMAIL_FIELD: {
		LABEL: "Email",
		PLACEHOLDER: "Bonnie@example.com"
	},
	TEXTAREA_FIELD: {
		LABEL: "Your message",
		PLACEHOLDER: "Hey Nico, I'm interested in your projects"
	},
	BUTTON_SUBMIT: "Submit",
	ALERT_SUCCESS: {
		SPAN: "Success!",
		PARRAFO: "Your message has been sent"
	},
	ALERT_ERROR: {
		SPAN: "Error!",
		PARRAFO: "Failed to send message."
	}
};
const FOOTER$1 = {
	TITLE: "Made width ❤️ by",
	TITLE_LINK: "Nicodev"
};
const PAGES$1 = {
	EXTENSION: {
		TITLE: "Extension",
		SEO_DESCRIPTION: "Extension for Visual Studio Code to enhance your development speed and streamline your routine tasks.",
		PARRAFO_BEGIN: "Quick Selector is a",
		SPAN_1: " Visual Studio Code extension",
		PARRAFO_MIDDLE: "that provides tools to ease your programming workflow. Simply select the code for which you want to",
		SPAN_2: " generate CSS selectors in your HTML file.",
		PARRAFO_END: "Then, access the class creator using Ctrl + Shift + P, type 'Generate CSS', and voila! You'll have",
		SPAN_3: " all your CSS selectors in the clipboard",
		PARRAFO_END_2: "ready to paste into your .css file."
	},
	WORDLE: {
		SEO_DESCRIPTION: "Extension for Visual Studio Code to enhance your development speed and streamline your routine tasks.",
		PARRAFO: "Wordle is a",
		SPAN_1: " simple",
		PARRAFO_MIDDLE_1: "and",
		SPAN_2: " entertaining",
		PARRAFO_MIDDLE_2: "word game that",
		SPAN_3: " challenges",
		PARRAFO_MIDDLE_3: "your ability to",
		SPAN_4: " guess",
		PARRAFO_MIDDLE_4: "the secret word in just six attempts. Test your",
		SPAN_5: " vocabulary and deductive skills",
		PARRAFO_MIDDLE_5: "as you try to decipher the",
		SPAN_6: " hidden word",
		PARRAFO_END: "before",
		SPAN_7: " time runs out.",
		PARRAFO_END_2: "Have fun playing and improving your",
		SPAN_8: " language skills",
		PARRAFO_END_3: "with Wordle!"
	},
	LAFERIADELLIBRO: {
		SEO_DESCRIPTION: "A web application where you can find all your favorite books and comics to read them in the format you prefer, whenever you want..",
		PARRAFO_BEGIN: "Discover your next favorite read with our book application! Our app provides you with an",
		SPAN_1: " intuitive",
		PARRAFO_MIDDLE_1: "and",
		SPAN_2: " exciting",
		PARRAFO_MIDDLE_2: "browsing experience, designed to meet all your reading needs. With a",
		SPAN_3: " wide selection",
		PARRAFO_END: "of books from various genres and authors, you'll find exactly what you're looking for."
	},
	TEST: {
		SEO_DESCRIPTION: "tecnical test skills for software development",
		PARRAFO_BEGIN: "This project is a",
		SPAN_1: " technical test",
		PARRAFO_MIDDLE_1: "focused on creating a",
		SPAN_2: " simple and fast web application",
		PARRAFO_MIDDLE_2: "for user convenience. To achieve this goal, we have chosen to use two frameworks that will help us ensure",
		SPAN_3: " speed",
		PARRAFO_MIDDLE_3: "and ease of use without compromising the",
		SPAN_4: " security",
		PARRAFO_MIDDLE_4: "and",
		SPAN_5: " robustness",
		PARRAFO_MIDDLE_5: "of the application. To do this, we have chosen Astro for the static parts of the application, allowing us to achieve more efficient loading. To do this, we have chosen",
		SPAN_6: " Astro",
		PARRAFO_MIDDLE_6: "for the static parts of the application, allowing us to achieve more efficient loading, and",
		SPAN_7: " Preact",
		PARRAFO_MIDDLE_7: "for implementing",
		SPAN_8: " Hooks",
		PARRAFO_MIDDLE_8: "and other development tools from the",
		SPAN_9: " React",
		PARRAFO_END: "library, but in a more compressed and lightweight form."
	},
	SHOPPING_CARD: {
		SEO_DESCRIPTION: "Buy everything you want at the best price online, from the comfort of your home.",
		PARRAFO_BEGIN: "Discover 'The Shopping Cart', the perfect application for online shopping! Designed to pass a technical test, this application offers an interface",
		SPAN_1: " intuitive",
		PARRAFO_MIDDLE_1: "and",
		SPAN_2: " attractive",
		PARRAFO_MIDDLE_2: ", making your shopping experience easy and exciting. With features of",
		SPAN_3: " global state",
		PARRAFO_MIDDLE_3: "and options for",
		SPAN_4: " dynamic filtering",
		PARRAFO_END: "by categories and prices, finding and purchasing your desired products has never been easier. Elevate your online shopping experience with 'The Shopping Cart': where convenience meets elegance."
	},
	SIMON_SAY: {
		SEO_DESCRIPTION: "'Simon Say' is an application where you can test your pattern memorization skills of colors...",
		PARRAFO_BEGIN: "Welcome to 'Simon Say'! Dive into nostalgia with this classic memory and skill game. Designed to challenge your cognitive abilities, this game offers an",
		SPAN_1: " addictive",
		PARRAFO_MIDDLE_1: "and",
		SPAN_2: " fun",
		PARRAFO_MIDDLE_2: "gaming experience. Test your ability to remember sequences of lights and sounds, unlock increasingly challenging levels, and compete for the highest score. With a",
		SPAN_3: " colorful",
		PARRAFO_MIDDLE_3: "and",
		SPAN_4: " immersive",
		PARRAFO_END: "interface, transports you back to the era of classic board games, but this time in the palm of your hand! Get ready to test your mind and push your limits with 'Simon Say'."
	},
	MINESWEEPER: {
		SEO_DESCRIPTION: "Minesweeper is a classic game where you have to find all the mines.",
		PARRAFO_BEGIN: "Welcome to our Minesweeper game project, where we aim to deliver an immersive gaming experience that challenges players of all skill levels. Leveraging",
		SPAN_1: " LitElement",
		PARRAFO_MIDDLE_1: "and",
		SPAN_2: " Web Components",
		PARRAFO_MIDDLE_2: ", alongside HTML5 and JavaScript, our game ensures",
		SPAN_3: " cross-platform compatibility",
		PARRAFO_MIDDLE_3: "for seamless gameplay. Featuring",
		SPAN_4: " intuitive controls, and captivating graphics,",
		PARRAFO_END: "players can enjoy hours of entertainment while testing their strategic thinking skills. Join us in the thrilling adventure of",
		SPAN_5: " minesweeping!"
	}
};
const english = {
	SEO_TITLE_1: SEO_TITLE_1$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	SEO: SEO$1,
	HEADER: HEADER$1,
	HEADER_EXPERIENCE: HEADER_EXPERIENCE$1,
	HEADER_PROJECT: HEADER_PROJECT$1,
	HEADER_ABOUTME: HEADER_ABOUTME$1,
	HEADER_CONTACT: HEADER_CONTACT$1,
	PRESENTATION_SECCION: PRESENTATION_SECCION$1,
	PROJECTS: PROJECTS$1,
	ABOUTME: ABOUTME$1,
	CONTACT: CONTACT$1,
	FOOTER: FOOTER$1,
	PAGES: PAGES$1
};

const SEO_TITLE_1 = "Portafolio - Nicodev 💻";
const SEO_DESCRIPTION = "Bienvenido a mi portafolio profesional de desarrollador full stack. Explora mi perfil, proyectos y experiencia. No dudes en contactarme para colaboraciones y oportunidades de desarrollo web.";
const SEO = {
	ERROR_404_TITLE: "Página no encontrada 😭",
	ERROR_404_DESCRIPTION: "Lo siento, no pudimos encontrar la página que estabas buscando.",
	ERROR_404_BACK: "Volver al inicio"
};
const HEADER = {
	LOGO: "Volver al inicio"
};
const HEADER_EXPERIENCE = "Experiencia";
const HEADER_PROJECT = "Proyectos";
const HEADER_ABOUTME = "Sobre mí";
const HEADER_CONTACT = "Contacto";
const PRESENTATION_SECCION = {
	TITLE: "Hola humano"
};
const PROJECTS = {
	TITLE: "Proyectos",
	MOBILE: {
		EXTENSION: {
			TITLE: "Extensión",
			DESCRIPTION: "Extensión de Visual Studio Code para mejorar tu productividad y simplificar tu trabajo diario"
		},
		PROJECTS: {
			TITLE: "Proyectos",
			DESCRIPTION: "Lista de proyectos en los que he trabajado"
		},
		VIDEOGAME: {
			TITLE: "Videojuegos",
			DESCRIPTION: "Videojuego creado con HTML, CSS y JavaScript"
		}
	},
	DESKTOP: {
		WORDLE: {
			TITLE: "Wordle",
			DESCRIPTION: "Juego de Wordle creado con HTML, CSS y JavaScript"
		},
		FERIALIBRO: {
			TITLE: "Feria del libro",
			DESCRIPTION: "Feria del libro creada con HTML, CSS y JavaScript"
		},
		EXTENSION: {
			TITLE: "Extensión",
			DESCRIPTION: "Extensión de Visual Studio Code para mejorar tu productividad y simplificar tu trabajo diario"
		},
		SKILLSTEST: {
			TITLE: "Prueba de habilidades",
			DESCRIPTION: "Prueba de habilidades creada con HTML, CSS y JavaScript"
		},
		PROJECTS: {
			TITLE: "Proyectos",
			DESCRIPTION: "Lista de proyectos en los que he trabajado"
		},
		MINESWEEPER: {
			TITLE: "Buscaminas",
			DESCRIPTION: "Juego de Buscaminas creado con HTML, CSS y JavaScript"
		},
		SHOPPINGCARD: {
			TITLE: "Carrito de compras",
			DESCRIPTION: "Carrito de compras creado con HTML, CSS y JavaScript"
		},
		SIMONSAY: {
			TITLE: "Simon Say",
			DESCRIPTION: "Juego de Simon Say creado con HTML, CSS y JavaScript"
		}
	}
};
const ABOUTME = {
	TITLE: "Sobre mí",
	DESCRIPTION: "Un poco sobre mí",
	MOBILE: {
		FIRST: {
			PARRAFO_1_BEGIN: "Me encanta",
			SPAN_1: "construir aplicaciones web modernas y escalables,",
			PARRAFO_1_END: "que brinden una excelente experiencia de usuario."
		},
		SECOND: {
			PARRAFO_BEGIN: "En el frontend, trabajo con tecnologías como",
			SPAN_1: "TypeScript",
			PARRAFO_CONECTOR: "y",
			SPAN_2: "JavaScript",
			PARRAFO_MIDDLE: ", utilizando frameworks como",
			SPAN_3: "Next.js",
			SPAN_4: "Angular",
			SPAN_5: "Web Components",
			PARRAFO_END: ". Además, tengo experiencia con",
			SPAN_6: "Astro",
			PARRAFO_END2: ", una emocionante forma nueva de crear sitios web ultrarrápidos y componentes universales."
		},
		THREE: {
			PARRAFO_BEGIN: "En el backend, he trabajado con",
			SPAN_1: "Node.js",
			PARRAFO_CONECTOR: "y",
			SPAN_2: "Java",
			PARRAFO_1_END: ", utilizando frameworks como",
			SPAN_3: "Express",
			SPAN_4: "Spring Boot",
			PARRAFO_2_END: "para construir APIs. También me especializo en diseñar y desarrollar bases de datos utilizando",
			SPAN_5: "SQL",
			SPAN_6: "NoSQL",
			PARRAFO_3_END: ", como MySQL y MongoDB, y estoy familiarizado con herramientas de mapeo objeto-relacional (ORM) como",
			SPAN_7: "Hibernate"
		}
	},
	DESKTOP: {
		FIRST: {
			PARRAFO_1: "¡Hola! Soy",
			SPAN: "Nicolás Carobene",
			PARRAFO_2: "pero mis amigos me llaman Nico 😎.",
			PARRAFO_3: "Soy argentino viviendo en Madrid, España."
		},
		SECOND: {
			PARRAFO_1: "Soy dentista pero también soy desarrollador.",
			PARRAFO_2: "Mi viaje hacia la programación comenzó cuando decidí crear un sitio web para mi clínica dental. Desde ese momento, quedé enganchado.",
			SPAN: "¡Me encanta!"
		},
		THREE: {
			PARRAFO_BEGIN: "La emoción de",
			SPAN: "crear soluciones elegantes para problemas complejos",
			PARRAFO_END: "capturó mi imaginación, y desde entonces no he mirado atrás."
		},
		FOURTH: {
			PARRAFO_BEGIN: "Más allá de mis habilidades técnicas, me enorgullezco de mi habilidad para",
			SPAN: "comunicarme de manera efectiva y colaborar sin problemas con equipos de todos los tamaños",
			PARRAFO_END: "Mi dedicación al aprendizaje continuo y al crecimiento asegura que me mantenga al tanto de las tendencias en una industria en constante evolución."
		}
	}
};
const CONTACT = {
	NAME_FIELD: {
		LABEL: "Nombre",
		PLACEHOLDER: "Bonnie Green"
	},
	EMAIL_FIELD: {
		LABEL: "Correo electrónico",
		PLACEHOLDER: "Bonnie@example.com"
	},
	TEXTAREA_FIELD: {
		LABEL: "Tu mensaje",
		PLACEHOLDER: "Hola Nico, estoy interesado en tus proyectos"
	},
	BUTTON_SUBMIT: "Enviar",
	ALERT_SUCCESS: {
		SPAN: "¡Éxito!",
		PARRAFO: "Tu mensaje ha sido enviado"
	},
	ALERT_ERROR: {
		SPAN: "Error",
		PARRAFO: "No se pudo enviar el mensaje."
	}
};
const FOOTER = {
	TITLE: "Hecho con ❤️ por",
	TITLE_LINK: "Nicodev"
};
const PAGES = {
	EXTENSION: {
		TITLE: "Extensión",
		SEO_DESCRIPTION: "Extensión para Visual Studio Code para mejorar tu velocidad de desarrollo y simplificar tus tareas rutinarias.",
		PARRAFO_BEGIN: "Quick Selector es una",
		SPAN_1: " extensión de Visual Studio Code",
		PARRAFO_MIDDLE: "que proporciona herramientas para facilitar tu flujo de trabajo de programación. Simplemente selecciona el código para el cual deseas",
		SPAN_2: " generar selectores CSS en tu archivo HTML.",
		PARRAFO_END: "Luego, accede al creador de clases usando Ctrl + Shift + P, escribe 'Generar CSS', ¡y listo! Tendrás",
		SPAN_3: " todos tus selectores CSS en el portapapeles",
		PARRAFO_END_2: "listos para pegar en tu archivo .css."
	},
	WORDLE: {
		SEO_DESCRIPTION: "Extensión para Visual Studio Code para mejorar tu velocidad de desarrollo y simplificar tus tareas rutinarias.",
		PARRAFO: "Wordle es un",
		SPAN_1: " juego de palabras",
		PARRAFO_MIDDLE_1: "simple y",
		SPAN_2: " entretenido",
		PARRAFO_MIDDLE_2: "que",
		SPAN_3: " desafía",
		PARRAFO_MIDDLE_3: "tu habilidad para",
		SPAN_4: " adivinar",
		PARRAFO_MIDDLE_4: "la palabra secreta en solo seis intentos. Pon a prueba tu",
		SPAN_5: " vocabulario y habilidades deductivas",
		PARRAFO_MIDDLE_5: "mientras intentas descifrar la",
		SPAN_6: " palabra oculta",
		PARRAFO_END: "antes de que",
		SPAN_7: " se acabe el tiempo.",
		PARRAFO_END_2: "¡Diviértete jugando y mejorando tus",
		SPAN_8: " habilidades lingüísticas",
		PARRAFO_END_3: "con Wordle!"
	},
	LAFERIADELLIBRO: {
		SEO_DESCRIPTION: "Una aplicación web donde puedes encontrar todos tus libros y cómics favoritos para leerlos en el formato que prefieras, cuando quieras.",
		PARRAFO_BEGIN: "¡Descubre tu próxima lectura favorita con nuestra aplicación de libros! Nuestra aplicación te ofrece una experiencia de navegación",
		SPAN_1: " intuitiva",
		PARRAFO_MIDDLE_1: "y",
		SPAN_2: " emocionante",
		PARRAFO_MIDDLE_2: ", diseñada para satisfacer todas tus necesidades de lectura. Con una",
		SPAN_3: " amplia selección",
		PARRAFO_END: "de libros de diversos géneros y autores, encontrarás exactamente lo que buscas."
	},
	TEST: {
		SEO_DESCRIPTION: "Prueba técnica de habilidades para el desarrollo de software",
		PARRAFO_BEGIN: "Este proyecto es una",
		SPAN_1: " prueba técnica",
		PARRAFO_MIDDLE_1: "centrada en la creación de una",
		SPAN_2: " aplicación web simple y rápida",
		PARRAFO_MIDDLE_2: "para la conveniencia del usuario. Para lograr este objetivo, hemos elegido utilizar dos frameworks que nos ayudarán a garantizar",
		SPAN_3: " velocidad",
		PARRAFO_MIDDLE_3: "y facilidad de uso sin comprometer la",
		SPAN_4: " seguridad",
		PARRAFO_MIDDLE_4: "y",
		SPAN_5: " robustez",
		PARRAFO_MIDDLE_5: "de la aplicación. Para hacer esto, hemos elegido Astro para las partes estáticas de la aplicación, lo que nos permite lograr una carga más eficiente. Para hacer esto, hemos elegido",
		SPAN_6: " Astro",
		PARRAFO_MIDDLE_6: "para las partes estáticas de la aplicación, lo que nos permite lograr una carga más eficiente, y",
		SPAN_7: " Preact",
		PARRAFO_MIDDLE_7: "para implementar",
		SPAN_8: " Hooks",
		PARRAFO_MIDDLE_8: "y otras herramientas de desarrollo de la",
		SPAN_9: " biblioteca React",
		PARRAFO_END: "library, pero en una forma más comprimida y ligera."
	},
	SHOPPING_CARD: {
		SEO_DESCRIPTION: "Compra todo lo que quieras al mejor precio en línea, desde la comodidad de tu hogar.",
		PARRAFO_BEGIN: "¡Descubre 'The Shopping Cart', la aplicación perfecta para compras en línea! Diseñada para pasar una prueba técnica, esta aplicación ofrece una interfaz",
		SPAN_1: " intuitiva",
		PARRAFO_MIDDLE_1: "y",
		SPAN_2: " atractiva",
		PARRAFO_MIDDLE_2: ", haciendo que tu experiencia de compra sea fácil y emocionante. Con características de",
		SPAN_3: " estado global",
		PARRAFO_MIDDLE_3: "y opciones para",
		SPAN_4: " filtrado dinámico",
		PARRAFO_END: "por categorías y precios, encontrar y comprar tus productos deseados nunca ha sido tan fácil. Eleva tu experiencia de compra en línea con 'The Shopping Cart': donde la conveniencia se encuentra con la elegancia."
	},
	SIMON_SAY: {
		SEO_DESCRIPTION: "'Simon Say' es una aplicación donde puedes poner a prueba tus habilidades de memorización de patrones de colores...",
		PARRAFO_BEGIN: "¡Bienvenido a 'Simon Say'! Sumérgete en la nostalgia con este clásico juego de memoria y habilidad. Diseñado para desafiar tus habilidades cognitivas, este juego ofrece una experiencia de juego",
		SPAN_1: " adictiva",
		PARRAFO_MIDDLE_1: "y",
		SPAN_2: " divertida",
		PARRAFO_MIDDLE_2: ". Pon a prueba tu habilidad para recordar secuencias de luces y sonidos, desbloquea niveles cada vez más desafiantes y compite por la puntuación más alta. Con una",
		SPAN_3: " colorida",
		PARRAFO_MIDDLE_3: "e",
		SPAN_4: " inmersiva",
		PARRAFO_END: "interfaz, te transporta de vuelta a la era de los juegos de mesa clásicos, ¡pero esta vez en la palma de tu mano! Prepárate para poner a prueba tu mente y superar tus límites con 'Simon Say'."
	},
	MINESWEEPER: {
		SEO_DESCRIPTION: "El Buscaminas es un juego clásico donde tienes que encontrar todas las minas.",
		PARRAFO_BEGIN: "Bienvenido a nuestro proyecto de juego del Buscaminas, donde nuestro objetivo es ofrecer una experiencia de juego inmersiva que desafíe a jugadores de todos los niveles de habilidad. Aprovechando",
		SPAN_1: " LitElement",
		PARRAFO_MIDDLE_1: "y",
		SPAN_2: " Componentes Web",
		PARRAFO_MIDDLE_2: ", junto con HTML5 y JavaScript, nuestro juego garantiza",
		SPAN_3: " compatibilidad multiplataforma",
		PARRAFO_MIDDLE_3: "para un juego sin problemas. Con",
		SPAN_4: " controles intuitivos y gráficos cautivadores,",
		PARRAFO_END: "los jugadores pueden disfrutar de horas de entretenimiento mientras ponen a prueba sus habilidades de pensamiento estratégico. Únete a nosotros en la emocionante aventura del",
		SPAN_5: " Buscaminas!"
	}
};
const spanish = {
	SEO_TITLE_1: SEO_TITLE_1,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	SEO: SEO,
	HEADER: HEADER,
	HEADER_EXPERIENCE: HEADER_EXPERIENCE,
	HEADER_PROJECT: HEADER_PROJECT,
	HEADER_ABOUTME: HEADER_ABOUTME,
	HEADER_CONTACT: HEADER_CONTACT,
	PRESENTATION_SECCION: PRESENTATION_SECCION,
	PROJECTS: PROJECTS,
	ABOUTME: ABOUTME,
	CONTACT: CONTACT,
	FOOTER: FOOTER,
	PAGES: PAGES
};

const LANG = {
  ENGLISH: "en",
  SPANISH: "es"
};
const getI18N = ({
  currentLocale = "en"
}) => {
  if (currentLocale === LANG.SPANISH)
    return spanish;
  return english;
};

const $$Astro$d = createAstro();
const $$UnitedState = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$UnitedState;
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg>`;
}, "/home/nicodev/project/porfolio/src/components/flags/UnitedState.astro", void 0);

const $$Astro$c = createAstro();
const $$Spain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Spain;
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="750" height="500" viewBox="0 0 750 500"> <rect width="750" height="500" fill="#c60b1e"></rect> <rect width="750" height="250" fill="#ffc400" y="125"></rect> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/flags/Spain.astro", void 0);

const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    flag: $$UnitedState
  },
  es: {
    code: "es",
    name: "Español",
    flag: $$Spain
  }
};
const ui = {
  en: {
    "nav.projects": "Projects",
    "nav.aboutMe": "About Me",
    "nav.contact": "Contact"
  },
  es: {
    "nav.projects": "Proyectos",
    "nav.aboutMe": "Sobre Mi",
    "nav.contact": "Contacto"
  }
};
const routes = {
  es: {
    projects: "proyectos",
    aboutMe: "sobre-mi",
    contact: "contacto",
    extension: "extension",
    feriaLibro: "feriaLibro",
    minesweeper: "minesweeper",
    shoppingCard: "shoppingCard",
    simonSay: "simonSay",
    test: "test",
    wordle: "wordle"
  },
  en: {
    projects: "projects",
    aboutMe: "about me",
    contact: "contact",
    extension: "extension",
    feriaLibro: "feriaLibro",
    minesweeper: "minesweeper",
    shoppingCard: "shoppingCard",
    simonSay: "simonSay",
    test: "test",
    wordle: "wordle"
  }
};
const defaultLang = "en";

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation = defaultLang !== l && routes[l][pathName] !== void 0;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    return l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}
function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();
  if (path === void 0) {
    return void 0;
  }
  const currentLang = getLangFromUrl(url);
  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== void 0 ? route[path] : void 0;
  }
  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };
  const reversedKey = getKeyByValue(routes[currentLang], path);
  if (reversedKey !== void 0) {
    return reversedKey;
  }
  return void 0;
}

const $$Astro$b = createAstro();
const $$Error404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Error404;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  return renderTemplate`${renderComponent($$result, "Error404Layout", $$Error404Layout, { "title": `${i18n.SEO.ERROR_404_TITLE}\xA0${(/* @__PURE__ */ new Date()).getFullYear()}`, "description": i18n.SEO.ERROR_404_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex relative pb-24 min-h-screen">
this page is not found
<a class="absolute bottom-10 right-10"${addAttribute(translatePath("/", currentLocale), "href")}> ${i18n.SEO.ERROR_404_BACK} </a> </section> ` })}`;
}, "/home/nicodev/project/porfolio/src/components/pages/Error404.astro", void 0);

const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/nicodev/project/porfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$9 = createAstro();
const $$Sun = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Sun.astro", void 0);

const $$Astro$8 = createAstro();
const $$Moon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Moon.astro", void 0);

const $$Astro$7 = createAstro();
const $$System = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/System.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 left-32 -top-1 md:top-8 md:left-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3> <ul class="dark:text-gray-200" data-astro-cid-x3pjskd3> ', ' </ul> </div> </div>  <script>\n  document.addEventListener("astro:page-load", () => {\n    let remove = null;\n    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");\n    const themesMenu = document.getElementById("themes-menu");\n\n    const getThemePreference = () => {\n      if (typeof localStorage !== "undefined") {\n        return localStorage.getItem("theme") ?? "system";\n      }\n\n      return window.matchMedia("(prefers-color-scheme: dark)").matches\n        ? "dark"\n        : "light";\n    };\n\n    const updateIcon = (themePreference) => {\n      document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n        element.style.scale = element.id === themePreference ? "1" : "0";\n      });\n    };\n\n    const updateTheme = () => {\n      if (remove != null) {\n        remove();\n      }\n      matchMedia.addEventListener("change", updateTheme);\n      remove = () => {\n        matchMedia.removeEventListener("change", updateTheme);\n      };\n\n      const themePreference = getThemePreference();\n      const isDark =\n        themePreference === "dark" ||\n        (themePreference === "system" && matchMedia.matches);\n\n      updateIcon(themePreference);\n      document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n    };\n\n    updateTheme();\n\n    document.addEventListener("click", () =>\n      themesMenu.classList.remove("open")\n    );\n\n    document\n      .getElementById("theme-toggle-btn")\n      .addEventListener("click", (e) => {\n        e.stopPropagation();\n        const isClosed = !themesMenu.classList.contains("open");\n        themesMenu.classList[isClosed ? "add" : "remove"]("open");\n      });\n\n    document.querySelectorAll(".themes-menu-option").forEach((element) => {\n      element.addEventListener("click", (e) => {\n        localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());\n        updateTheme();\n      });\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-[scale,opacity]", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-[scale,opacity]", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-[scale,opacity]", "data-astro-cid-x3pjskd3": true }), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm dark:text-" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/home/nicodev/project/porfolio/src/components/ThemeToggle.astro", void 0);

const $$Astro$5 = createAstro();
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const {
    href,
    class: className,
    checkActive = true,
    ...restOfProps
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isActive = currentPath === href && checkActive;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, isActive ? "border-white" : "border-transparent"], "class:list")}${spreadAttributes(restOfProps)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/nicodev/project/porfolio/src/components/HeaderLink.astro", void 0);

const $$Astro$4 = createAstro();
const $$Chevron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Chevron;
  return renderTemplate`${maybeRenderHead()}<svg class="-mr-1 h-5 w-5 text-white group-hover:rotate-180 transition-all duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg>`;
}, "/home/nicodev/project/porfolio/src/components/icons/Chevron.astro", void 0);

const $$Astro$3 = createAstro();
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const route = getRouteFromUrl(Astro2.url);
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const currentLocaleData = LANGUAGES[lang];
  const otherLocales = Object.values(LANGUAGES).filter(
    (locale) => locale.code !== lang
  );
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block text-left"> <div class="group text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all"> <button type="button" class="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2" aria-expanded="true" aria-haspopup="true"> ${renderComponent($$result, "currentLocaleData.flag", currentLocaleData.flag, {})} ${currentLocaleData.name} ${renderComponent($$result, "ChevronIcon", $$Chevron, {})} </button> <ul class="group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5 absolute w-full"> ${otherLocales.map((locale) => renderTemplate`<li class="py-[2px]"> <a class="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"${addAttribute(translatePath(`/${route ? route : ""}`, locale.code), "href")}> ${renderComponent($$result, "locale.flag", locale.flag, {})} ${locale.name} </a> </li>`)} </ul> </div> </div>`;
}, "/home/nicodev/project/porfolio/src/components/LanguageSelector.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  return renderTemplate(_a || (_a = __template(["", '<header class="fixed top-2 left-2 z-20 flex items-start justify-start md:justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <button id="menuToggle" class="mt-1 md:hidden md:invisible flex flex-col gap-1 select-none ml-2 size-8 *:rounded-lg *:w-7 *:h-1 *:bg-[#b9fd4b]" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> <nav id="navigator" class="dark:text-gray-200 z-30 hidden md:flex md:px-3 text-sm font-medium rounded-md -mt-1 ml-1 md:ml-0 md:mt-0 md:rounded-full px-3 md:bg-transparent py-2 md:py-0 backdrop-blur-sm" data-astro-cid-3ef6ksr2> <ul class="flex md:flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-start md:items-center" data-astro-cid-3ef6ksr2> <!-- <HeaderLink class="text__glowing" href="#">\n        {t("nav.expirience")}\n      </HeaderLink> --> ', " ", " ", " ", " ", ' </ul> </nav> </header> <script>\n  const $button = document.getElementById("menuToggle");\n  const $nav = document.getElementById("navigator");\n  let navOpen = false;\n  if ($button && $nav) {\n    $button.addEventListener("click", () => {\n      const widthDevice = window.matchMedia("(max-width: 768px)");\n      widthDevice.matches ? $nav.classList.toggle("hidden") : null;\n      $button.classList.toggle("open");\n    });\n  }\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": translatePath("/#projects"), "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.projects")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": translatePath("/#aboutMe"), "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.aboutMe")}` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text__glowing", "href": translatePath("/#contact"), "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.contact")}` }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "data-astro-cid-3ef6ksr2": true }));
}, "/home/nicodev/project/porfolio/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="robots" content="nofollow, noindex"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Onest:wght@100;500;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><meta name="robots" content="nofollow, noindex"><link rel="preload" href="/fonts/CascadiaCode.woff2" as="font" type="font/woff2" crossorigin>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/home/nicodev/project/porfolio/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | Nicodev | Porfolio", "description": "Pa\u0301gina no encontrada" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Error404", $$Error404, {})} ` })}`;
}, "/home/nicodev/project/porfolio/src/pages/404.astro", void 0);

const $$file = "/home/nicodev/project/porfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, getI18N as g };
