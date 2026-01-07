/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

/* =========================
   SCROLL SUAVE (NAVBAR)
========================= */
const internalLinks = document.querySelectorAll('.navbar a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);

    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const positionToScroll = sectionTop + window.scrollY - 100;

    window.scroll({
        top: positionToScroll,
        behavior: 'smooth'
    });
}

internalLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* =========================
   INTERNACIONALIZAÇÃO (i18n)
========================= */
const translations = {
    "pt-br": {
        nav_home: "INÍCIO",
        nav_about: "SOBRE MIM",
        nav_experiences: "EXPERIÊNCIAS",
        nav_skills: "HABILIDADES",
        nav_projects: "PROJETOS",

        home_hello: "Olá",
        home_intro: "Me chamo",
        home_role: "Analista de",
        home_role2: "Dados",
        home_subtitle: "Apaixonado em criar insights que geram resultados.",
        home_projects: "Veja meus projetos",

        about_title: "SOBRE MIM",
        about_text:
            "Sempre tive facilidade com números. Ao conhecer a área de dados e entender seu impacto nas decisões e nos resultados, encontrei um campo com o qual me identifiquei naturalmente.",

        exp_title: "EXPERIÊNCIAS",
        exp_subtitle: "Minha trajetória profissional",
        exp_heineken_desc:
            "Atuação com análise de dados voltada ao suporte de decisões estratégicas, desenvolvimento de relatórios em Power BI, tratamento de dados em Excel e acompanhamento de indicadores de desempenho, com envolvimento em projetos de análise de mercado, acompanhamento de vendas e análise de desempenho de produtos.",

        skills_title: "HABILIDADES",
        skills_subtitle: "No que sou bom",

        projects_title: "PROJETOS",
        proj_tit1: "Análise de Vendas",
        proj_tex1: "O relatório analisa a quantidade de vendas e o status de atingimento de meta de uma loja de tênis.",
        proj_tit2: "Análise de Presença e Volume",
        proj_tex2: "Esse dashboard compara a presença de SKU's e seu volume vendido em diversas regiões.",
        proj_tit3: "Análise de desempenho SKU",
        proj_tex3: "Essa análise tem como objetivo evidenciar os resultados de vendas, custo e lucro que cada produto gera para a empresa.",

        footer_text:
            "© Copyright João Vitor Franco Geraldo. All Rights Reserved"
    },

    "en-us": {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_experiences: "EXPERIENCE",
        nav_skills: "SKILLS",
        nav_projects: "PROJECTS",

        home_hello: "Hello",
        home_intro: "My name is",
        home_role: "Data",
        home_role2: "Analyst",
        home_subtitle:
            "Passionate about creating insights that drive results.",
        home_projects: "View my projects",

        about_title: "ABOUT ME",
        about_text:
            "I have always had an affinity with numbers. When I discovered the data field and understood its impact on decision-making and results, I naturally identified with it.",

        exp_title: "EXPERIENCE",
        exp_subtitle: "My professional journey",
        exp_heineken_desc:
            "Worked with data analysis to support strategic decision-making, developing Power BI reports, handling data in Excel, monitoring performance indicators, and participating in market analysis, sales tracking, and product performance analysis projects.",

        skills_title: "SKILLS",
        skills_subtitle: "What I'm good at",

        projects_title: "PROJECTS",
        proj_tit1: "Sales Analysis",
        proj_tex1: "The report analyzes the sales volume and target achievement status of a sneaker store.",
        proj_tit2: "Analysis of Presence and Volume",
        proj_tex2: "This dashboard compares the presence of SKUs and their sales volume across various regions.",
        proj_tit3: "SKU Performance Analysis",
        proj_tex3: "This analysis aims to highlight the sales, cost, and profit results that each product generates for the company.",

        footer_text:
            "© Copyright João Vitor Franco Geraldo. All Rights Reserved"
    }
};

/* =========================
   CONTROLE DE IDIOMA
========================= */
let currentLanguage = "pt-br";
const languageToggle = document.getElementById("languageToggle");

function translatePage(language) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.documentElement.lang = language;
    languageToggle.textContent = language === "pt-br" ? "TRADUZIR PARA O INGLES" : "TRANSLATE TO PORTUGUESE";
}

languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt-br" ? "en-us" : "pt-br";
    translatePage(currentLanguage);
});

/* =========================
   INICIALIZAÇÃO
========================= */
translatePage(currentLanguage);
