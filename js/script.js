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
        exp_valecard_role: "Analista de Inteligência",
        exp_valecard_date: "06/2026 - Atual",
        exp_valecard_b1: "Desenvolvo dashboards em Power BI e aplicações web em HTML, CSS e JavaScript que monitoram os indicadores comerciais, de marketing e de desempenho da operação.",
        exp_valecard_b2: "Estruturei a solução de BI da operação de Inside Sales, cobrindo campanhas, funil de leads e oportunidades e agenda dos SDRs, com modelagem de dados, tabela calendário e relacionamentos que garantem filtros e análises temporais consistentes.",
        exp_valecard_b3: "Consulto o Oracle Database com SQL e integro planilhas Excel, padronizando e validando as bases que sustentam as análises de inteligência.",
        exp_valecard_b4: "Defino e acompanho as métricas do pipeline comercial, da geração de leads à conversão em oportunidades, apoiando a estratégia de vendas e a gestão do time.",
        exp_valecard_b5: "Conduzo estudos de mercado e análises de Marketing Analytics que direcionam campanhas e ações comerciais no mercado de benefícios.",
        exp_valecard_b6: "Apresento resultados às lideranças com Data Storytelling, apoiando o planejamento estratégico da área comercial.",
        exp_valecard_r1_label: "Crescimento comercial",
        exp_valecard_r1: "Leitura de mercado e do pipeline que apoia o planejamento comercial e revela novas oportunidades de crescimento.",
        exp_valecard_r2_label: "Gestão à vista",
        exp_valecard_r2: "Indicadores comerciais e de marketing reunidos em dashboards, dando à liderança visibilidade contínua dos resultados.",
        exp_valecard_r3_label: "Funil de Inside Sales",
        exp_valecard_r3: "Acompanhamento estruturado de campanhas, leads e oportunidades, apoiando a otimização da rotina dos SDRs e do funil comercial.",
        exp_valecard_r4_label: "Campanhas mais assertivas",
        exp_valecard_r4: "Insights de Marketing Analytics que refinam o público e o direcionamento das campanhas.",
        exp_valecard_r5_label: "Decisões mais ágeis",
        exp_valecard_r5: "Bases confiáveis e organizadas que agilizam o acesso à informação e trazem mais assertividade às decisões.",

        exp_heineken_role: "Analista de Dados",
        exp_heineken_b1: "Desenvolvi e mantive painéis em Power BI para acompanhar o desempenho de vendas do portfólio de produtos, com visão de volume, SKUs e metas comerciais.",
        exp_heineken_b2: "Extraí e integrei dados de múltiplas fontes com SQL e Python, consolidando bases de vendas estruturadas para análises e relatórios gerenciais.",
        exp_heineken_b3: "Conduzi processos de ETL (Extract, Transform, Load), com limpeza, transformação e organização dos dados que alimentavam os painéis comerciais.",
        exp_heineken_b4: "Criei e monitorei indicadores de performance comercial, como volume vendido e atingimento de metas, para apoiar as áreas de negócio.",
        exp_heineken_b5: "Usei Excel avançado (PROCX/XLOOKUP, tabelas dinâmicas e fórmulas) para cruzar bases e auditar a qualidade dos dados de vendas.",
        exp_heineken_b6: "Transformei análises em recomendações claras por meio de Data Storytelling, aproximando os dados das decisões das áreas comerciais.",
        exp_results_title: "Resultados",
        exp_heineken_r1_label: "Vendas e metas",
        exp_heineken_r1: "Análises de performance que orientaram estratégias comerciais e contribuíram para o aumento do volume vendido e o atingimento das metas.",
        exp_heineken_r2_label: "Aproveitamento de equipamentos",
        exp_heineken_r2: "Mapeamento, a partir dos dados, de equipamentos ociosos ou de baixa produtividade, embasando decisões para o melhor uso dos recursos disponíveis.",
        exp_heineken_r3_label: "Indicadores acessíveis",
        exp_heineken_r3: "Painéis em Power BI que centralizaram os indicadores comerciais e simplificaram o acesso à informação pelas áreas de negócio.",

        skills_title: "HARD SKILLS",
        skills_subtitle: "Ferramentas dominadas",
        skills_group_bi: "Business Intelligence",
        skills_group_db: "Bancos de Dados",
        skills_group_py: "Python e Análise de Dados",
        skills_group_web: "Desenvolvimento Web",

        projects_title: "PROJETOS",
        proj_tit1: "Análise de Vendas",
        proj_tex1: "O relatório analisa a quantidade de vendas e o status de atingimento de meta de uma loja de tênis.",
        proj_tit2: "Análise de Presença e Volume",
        proj_tex2: "Esse dashboard compara a presença de SKU's e seu volume vendido em diversas regiões.",
        proj_tit3: "Análise Eletronic Company",
        proj_tex3: "Varejo de eletrônicos: faturamento, lucro, margem, clientes e taxa de devolução por produto, loja e país.",
        proj_tit4: "Análise Mineiradora",
        proj_tex4: "Essa análise tem como objetivo evidenciar os resultados de cada minério em distintas regiões do Brasil e seus respectivos custos e preços.",

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
        exp_valecard_role: "Intelligence Analyst",
        exp_valecard_date: "06/2026 - Present",
        exp_valecard_b1: "Develop Power BI dashboards and web applications in HTML, CSS and JavaScript that monitor the operation's sales, marketing and performance indicators.",
        exp_valecard_b2: "Designed the BI solution for the Inside Sales operation, covering campaigns, the lead and opportunity funnel and SDR schedules, with data modeling, a calendar table and relationships that ensure consistent filters and time-based analyses.",
        exp_valecard_b3: "Query Oracle Database with SQL and integrate Excel spreadsheets, standardizing and validating the datasets behind the intelligence analyses.",
        exp_valecard_b4: "Define and track sales pipeline metrics, from lead generation to opportunity conversion, supporting sales strategy and team management.",
        exp_valecard_b5: "Conduct market studies and Marketing Analytics analyses that steer campaigns and sales initiatives in the employee benefits market.",
        exp_valecard_b6: "Present results to leadership through Data Storytelling, supporting the strategic planning of the sales area.",
        exp_valecard_r1_label: "Business growth",
        exp_valecard_r1: "Market and pipeline insights that support sales planning and uncover new growth opportunities.",
        exp_valecard_r2_label: "Visual management",
        exp_valecard_r2: "Sales and marketing indicators gathered in dashboards, giving leadership ongoing visibility into results.",
        exp_valecard_r3_label: "Inside Sales funnel",
        exp_valecard_r3: "Structured tracking of campaigns, leads and opportunities, supporting the optimization of SDR routines and the sales funnel.",
        exp_valecard_r4_label: "Sharper campaigns",
        exp_valecard_r4: "Marketing Analytics insights that refine campaign audiences and targeting.",
        exp_valecard_r5_label: "Faster decisions",
        exp_valecard_r5: "Reliable, well-organized datasets that speed up access to information and make decisions more accurate.",

        exp_heineken_role: "Data Analyst",
        exp_heineken_b1: "Built and maintained Power BI reports to track the sales performance of the product portfolio, covering volume, SKUs and sales targets.",
        exp_heineken_b2: "Extracted and integrated data from multiple sources with SQL and Python, consolidating structured sales datasets for analyses and management reports.",
        exp_heineken_b3: "Ran ETL (Extract, Transform, Load) processes, cleaning, transforming and organizing the data that fed the sales reports.",
        exp_heineken_b4: "Created and monitored sales performance indicators, such as volume sold and target achievement, to support business areas.",
        exp_heineken_b5: "Used advanced Excel (XLOOKUP, pivot tables and formulas) to cross-reference datasets and audit the quality of sales data.",
        exp_heineken_b6: "Turned analyses into clear recommendations through Data Storytelling, bringing data closer to the decisions of the commercial teams.",
        exp_results_title: "Key results",
        exp_heineken_r1_label: "Sales and targets",
        exp_heineken_r1: "Performance analyses that guided sales strategies and contributed to higher volume sold and target achievement.",
        exp_heineken_r2_label: "Equipment utilization",
        exp_heineken_r2: "Data-driven mapping of idle or low-productivity equipment, backing decisions to make better use of available resources.",
        exp_heineken_r3_label: "Accessible indicators",
        exp_heineken_r3: "Power BI reports that centralized sales indicators and made information easier to access for business areas.",

        skills_title: "HARD SKILLS",
        skills_subtitle: "Tools I master",
        skills_group_bi: "Business Intelligence",
        skills_group_db: "Databases",
        skills_group_py: "Python & Data Analysis",
        skills_group_web: "Web Development",

        projects_title: "PROJECTS",
        proj_tit1: "Sales Analysis",
        proj_tex1: "The report analyzes the sales volume and target achievement status of a sneaker store.",
        proj_tit2: "Analysis of Presence and Volume",
        proj_tex2: "This dashboard compares the presence of SKUs and their sales volume across various regions.",
        proj_tit3: "Eletronic Company Analysis",
        proj_tex3: "Electronics retail: revenue, profit, margin, customers and return rate by product, store and country.",
        proj_tit4: "Mining Analysis",
        proj_tex4: "This analysis aims to highlight the results of each mineral in different regions of Brazil, along with their respective costs and prices.",

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
    languageToggle.textContent = language === "pt-br" ? "TRANSLATE TO ENGLISH" : "TRADUZIR PARA O PORTUGUÊS";
}

languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt-br" ? "en-us" : "pt-br";
    translatePage(currentLanguage);
});

/* =========================
   INICIALIZAÇÃO
========================= */
translatePage(currentLanguage);
