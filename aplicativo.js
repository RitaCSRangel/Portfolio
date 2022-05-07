//--------- CONSTANTES ---------

const parentContainerBody = document.querySelectorAll('.main-content'); //Listar seção com classe main-content
const sections = document.querySelectorAll('.section'); //Listar seções com classe section

const parentContainerButtons = document.querySelectorAll('.main-controls'); //Listar seção com classe main-controls
const buttons = document.querySelectorAll('.control'); //Listar seções com classe control

const themeButton = document.querySelector('.botao-tema'); //Obter o botão do tema

const langButton = document.querySelector('.botao-idioma'); //Obter o botão de idioma
const curriculoButton = document.querySelector('.botao-curriculo'); //Obter o botão de curriculo

const engText = document.querySelectorAll('[lang="en"]');
const portText = document.querySelectorAll('[lang="pt-br"]');

//--------- CHAMADAS ---------

PageTransition();
ToggleTheme();
ToggleLanguage();
BotaoCurriculo();

//--------- FUNÇÕES ---------

//No clique do botão -> Aplicar a classe de botão ativo e ativar a seção correspondente
function PageTransition() {

    //Aplicar a classe de botão ativo
    for (let i = 0; i < buttons.length; i++) {
        //Event Listener que vai ouvir cada um dos botões (click) e executar a arrow funtion 
        buttons[i].addEventListener('click', function () {
            //Listar botões com classe botao-ativo
            let currentSelectedButton = document.querySelectorAll('.botao-ativo');
            //Remover a classe botao-ativo do botão que estiver com essa classe
            currentSelectedButton[0].classList.remove('botao-ativo');
            //O botão cujo listener ouviu o click recebe a classe botao-ativo
            this.classList.add('botao-ativo');
        })
    }

    //Ativar a seção correspondente ao botão
    parentContainerBody[0].addEventListener('click', function (e) {
        const id = e.target.dataset.id;
        if (id != null) {
            /*
            //Para cada botão
            buttons.forEach((btn) =>{
                btn.classList.remove('section-ativa'); //Remover a classe section-ativa
            })
            e.target.classList.add('section-ativa'); //Adicionar a classe section-ativa no botão que recebeu o clique
            */
            //Para cada seção
            sections.forEach((section) => {
                section.classList.remove('section-ativa'); //Remover a classe section-ativa
            })

            //Obter somente a seção que possui o id igual ao id obtido no clique do botão
            const element = document.getElementById(id);
            //Deixar essa seção guardada no element como ativa
            element.classList.add('section-ativa')
        }
    })
}

function ToggleTheme() {
    themeButton.addEventListener('click', () => {

        let element = document.body; //Guarda a referência do body do html
        element.classList.toggle('modo-claro'); //Adiciona a classe de modo claro ao body caso não esteja ativada e remove caso esteja ativada

    })
}

function ToggleLanguage() {
    var idioma = "";
    langButton.addEventListener('click', () => {

        if (document.getElementById("idiomaAtual").getAttribute("lang") == "pt-br") {

            idioma = "english";
            document.getElementById("idiomaAtual").setAttribute("lang", "en");

        }else if (document.getElementById("idiomaAtual").getAttribute("lang") == "en") {

            idioma = "portugues"
            document.getElementById("idiomaAtual").setAttribute("lang", "pt-br");
        }

        document.getElementById("header_nome").innerHTML = data[idioma].header_nome;
        document.getElementById("header_nome_titulo").innerHTML = data[idioma].header_nome_titulo;
        document.getElementById("header_descricao").innerHTML = data[idioma].header_descricao;
        document.getElementById("header_botaocurriculo").innerHTML = data[idioma].header_botaocurriculo;
        document.getElementById("sobremim_titulo").innerHTML = data[idioma].sobremim_titulo;
        document.getElementById("sobremim_jornadaprofissional_titulo").innerHTML = data[idioma].sobremim_jornadaprofissional_titulo;
        document.getElementById("sobremim_jornadaprofissional_descricao").innerHTML = data[idioma].sobremim_jornadaprofissional_descricao;
        document.getElementById("idiomas_titulo").innerHTML = data[idioma].idiomas_titulo;
        document.getElementById("idioma_pt").innerHTML = data[idioma].idioma_pt;
        document.getElementById("idioma_pt_nivel").innerHTML = data[idioma].idioma_pt_nivel;
        document.getElementById("idioma_en").innerHTML = data[idioma].idioma_en;
        document.getElementById("idioma_en_nivel").innerHTML = data[idioma].idioma_en_nivel;
        document.getElementById("idioma_es").innerHTML = data[idioma].idioma_es;
        document.getElementById("idioma_es_nivel").innerHTML = data[idioma].idioma_es_nivel;
        document.getElementById("sk1").innerHTML = data[idioma].sk1;
        document.getElementById("sk2").innerHTML = data[idioma].sk2;
        document.getElementById("sk3").innerHTML = data[idioma].sk3;
        document.getElementById("sk4").innerHTML = data[idioma].sk4;
        document.getElementById("sk5").innerHTML = data[idioma].sk5;
        document.getElementById("sk6").innerHTML = data[idioma].sk6;
        document.getElementById("sk7").innerHTML = data[idioma].sk7;
        document.getElementById("sk8").innerHTML = data[idioma].sk8;
        document.getElementById("timeline_titulo").innerHTML = data[idioma].timeline_titulo;
        document.getElementById("timeline1_duracao").innerHTML = data[idioma].timeline1_duracao;
        document.getElementById("timeline1_titulo").innerHTML = data[idioma].timeline1_titulo;
        document.getElementById("timeline1_descricao").innerHTML = data[idioma].timeline1_descricao;
        document.getElementById("timeline2_duracao").innerHTML = data[idioma].timeline2_duracao;
        document.getElementById("timeline2_titulo").innerHTML = data[idioma].timeline2_titulo;
        document.getElementById("timeline2_descricao").innerHTML = data[idioma].timeline2_descricao;
        document.getElementById("portfolios_titulo").innerHTML = data[idioma].portfolios_titulo;
        document.getElementById("portfolio1_titulo").innerHTML = data[idioma].portfolio1_titulo;
        document.getElementById("portfolio1_descricao").innerHTML = data[idioma].portfolio1_descricao;
        document.getElementById("portfolio2_titulo").innerHTML = data[idioma].portfolio2_titulo;
        document.getElementById("portfolio2_descricao").innerHTML = data[idioma].portfolio2_descricao;
        document.getElementById("portfolio3_titulo").innerHTML = data[idioma].portfolio3_titulo;
        document.getElementById("portfolio3_descricao").innerHTML = data[idioma].portfolio3_descricao;
        document.getElementById("contato_titulo").innerHTML = data[idioma].contato_titulo;
        document.getElementById("contato_subtitulo").innerHTML = data[idioma].contato_subtitulo;
        document.getElementById("contato_descricao").innerHTML = data[idioma].contato_descricao;
        document.getElementById("contato_endereco_titulo").innerHTML = data[idioma].contato_endereco_titulo;
        document.getElementById("contato_endereco").innerHTML = data[idioma].contato_endereco;
        document.getElementById("contato_email_titulo").innerHTML = data[idioma].contato_email_titulo;
        document.getElementById("contato_email").innerHTML = data[idioma].contato_email;
        document.getElementById("contato_formacao_titulo").innerHTML = data[idioma].contato_formacao_titulo;
        document.getElementById("contato_formacao").innerHTML = data[idioma].contato_formacao;
        document.getElementById("contato_telefone_titulo").innerHTML = data[idioma].contato_telefone_titulo;
        document.getElementById("contato_telefone").innerHTML = data[idioma].contato_telefone;
        document.getElementById("contato_idiomas_titulo").innerHTML = data[idioma].contato_idiomas_titulo;
        document.getElementById("contato_idiomas").innerHTML = data[idioma].contato_idiomas;
    })
}

function BotaoCurriculo() {
    curriculoButton.addEventListener('click', () => {

        if (document.getElementById("idiomaAtual").getAttribute("lang") == "pt-br") {

            window.open('cvs/curriculo_ptbr.pdf','popUpWindow', '', true);

        }else if (document.getElementById("idiomaAtual").getAttribute("lang") == "en") {

            window.open('cvs/curriculo_en.pdf','popUpWindow','', true);
        }

    })
}

var data = {
    "english":
    {
        "header_nome":"Hello, my name is <span>Rita</span>. <br>",
        "header_nome_titulo":"And I'm a senior analyst and fullstack developer.",
        "header_descricao":`
        <span>I am passionate about technology and innovation.</span>
        <br>
        Since I was a child I've always had a great interest in studying about new topics
        to learn more about everything that interested me. My favorite subject has always been
        technology which I could easily define as my passion and ambition.
        <br><br>
        As early as <span>10 years old</span> I started my journey in robotics classes and free
        computer courses. At <span>16 years old</span> I discovered a world of online studies at
        video course platforms, these were the biggest responsible for introducing me into a more
        professional programming world. At <span>18 years old</span> I enrolled into a Digital Games 
        bachelor's dregree course using Unity3D which served as something to settle my interest
        for developing smart solutions and to show me how important it would be
        to deepen my knowledge and expand my tools. At <span>21 years</span> I changed my bachelor
        to Software Engineering in order to focus my abilities even more. As a developer, I have a lot to add 
        and learn from the IT world for my journey is just beginning.`,
        "header_botaocurriculo":"Download CV",
        "sobremim_titulo":`About <span>me</span><span class="texto-bg">Skills</span>`,
        "sobremim_jornadaprofissional_titulo":"My Career Journey",
        "sobremim_jornadaprofissional_descricao":`
        My first professional opportunity came through a response to the many resumes I sent
        right in my second semester of university. I was excited to put everything I learned into practice and
        absorb everything that the day-to-day work could offer both in hard and soft skills.
        I started as an intern in a company responsible for installing sensors into our customers' factories to 
        measure productivity, formulate forecasts through data analysis and create complex dashboards. 
        It was a great challenge that instigated me immensely to dive into this professional life.`,
        "idiomas_titulo":"Languages",
        "idioma_pt":"Portuguese",
        "idioma_pt_nivel": "Native",
        "idioma_en":"English",
        "idioma_en_nivel": "Proficient (C2+)",
        "idioma_es":"Spanish",
        "idioma_es_nivel": "Beginner",
        "sk1":"Time Management",
        "sk2":"Adaptability",
        "sk3":"Teamwork",
        "sk4":"Proactivity",
        "sk5":"Communication",
        "sk6":"Troubleshooting",
        "sk7":"Leadership",
        "sk8":"Patience",
        "timeline_titulo":"Timeline",
        "timeline1_duracao":"From october 2020 until april 2021",
        "timeline1_titulo":"Backend Developer at COGNI",
        "timeline1_descricao":`As an intern in the development section of COGNI I had the
        opportunity to learn about the process of developing from
        beginning to end. As a company focused on developing solutions
        through IoT, artificial intelligence and complex dashboards, I had contact
        with the development of desktop applications on .Net platform,
        Custom AI solutions, VPN authentication processes, PostgreSQL database connection, API usage
        and AWS Bucket connections. I was responsible
        for all stages of this internal project that ended up being called 
        "Auditing of Corporate Energy Invoices Programm",
        from requirements gathering, planning and modeling to implementation and
        presentation. In addition to this project, I also worked with the development
        skills for Alexa and had extensive contact with Amazon Web Services.`,
        "timeline2_duracao":"From april 2021 until now",
        "timeline2_titulo":"Senior Analyst at Accenture Song",
        "timeline2_descricao":`Here I got in touch for the first time with Microsoft's CRM solutions.
        During this time I learned to develop complete CRM systems, both in functional and
        technical aspects. I had the opportunity to use tools such as the standard Dynamics API,
        custom Dynamics APIs, consume external APIs for Dynamics,
        Canvas App, Plug-ins, JavaScript customizations and Power Automate. With my team I developed a variety
        of environments for customers, from Sales solutions to Marketing and Field Services.
        During this time I learned to develop systems along with small and large teams,
        participate in meetings directly with clients for project's kick-off, solutions design and
        SCRUM ceremonies. I also had the chance to work my code in parallel with my team using Git
        through DevOps and Github platforms while also managing sprint's tasks using tools such as
        DevOps and Jira. Finally, I also learned how to use Azure Data Factory for data integration and
        many more integrations. In short, I got the opportunity
        to learn more about amazing CRM solutions offered by Microsoft through Dynamics 365.`,
        "portfolios_titulo":`My <span>portfolio</span><span class="texto-bg">PROJECTS</span>`,
        "portfolio1_titulo":"Maple Bear Project",
        "portfolio1_descricao":`Maple Bear Canadian School needed a CRM system combined with an application 
        that could be used daily by their educational advisors. The app should perform
        as a portable CRM system, connected to Dynamics CRM system so both could work
        together. The solution should encompass: the separation of school systems according to
        several Maple Bear units in order to each school being able to visualize and work with
        their customers, prospects and students within the system; the reception
        of prospects from a landing page; a space for educational advisers to organize their schedules
        by creating tasks, appointment reminders, and phone call reminders which should generate a customer 
        contact history and ultimately the submission of contracts for signature through Adobe Sign. 
        To archieve this, me and my team developed a CRM system using Dynamics 365 together with a Canvas App 
        while taking advantage of system functions like business units, lead management system, creation
        of business opportunities from warm leads, creation of orders with chosen products and 
        redirection of Adobe Sign signature documents through Power Automate so we could finally build a 
        360º view of the entire process.`,
        "portfolio2_titulo":"RTM Project",
        "portfolio2_descricao":`RTM company has several sectors that contribute to a quality service, so they needed
        a CRM system capable of offering clear and organized steps for each team involved in the operation.
        A suitable area was needed for sales team to work with their potential customers, another area
        containing sales opportunity available only to salespeople of appropriate teams, dynamic fields
        for filling in data according to the type of demand and project, configured sales products,
        exclusive stage steps within the sales opportunity, elaboration phase
        for business proposal, fields for process control and contractual management. To meet the demands, the
        development relied on customized forms, a customized pipeline for business process,
        access permissions assigned to custom forms, form automations and plugins for more complex customizations.`,
        "portfolio3_titulo": "MDC Energia Project",
        "portfolio3_descricao":`The analysis of energy sources is a subject that MDC Energia takes very 
        seriously so in order to atend to their needs me and my team raised all the requirements that MDC 
        Energia would need. MDC needed a CRM system capable of separating their energy sectors in 3 similar 
        CRM systems, each with some particular characteristics: The systems should have the same customer 
        database, but with independent diagnostics and opportunities, complex and automated forms for the 
        insertion of countless data involved in the business process and a complex system of approvals 
        sent and monitored automatically by the system. In addition to the systematic needs, there were 
        also usability requisites since the path to be followed by MDC Energia users process involves a 
        strict order of information and approvals at each step of the process, so the system should
        guide the user through. To archieve this, a large customized system was created, counting
        with 3 different applications, independent forms, shared customer base, redirection
        of records between the 3 applications, document storage system, an automation for sending of
        documents for approvers determined by system administrators and messages that guide
        users throughout the stages and approvals that, in particular, were developed with a robust 
        logic capable of detecting which document is sent and to which approvers it should go.
        `,
        "contato_titulo":`My <span>Contact</span><span class="texto-bg">FORM</span>`,
        "contato_subtitulo":"Contact Me",
        "contato_descricao":`Below are my general information and contact details. To get in touch
        please use one of the medias informed.` ,
        "contato_endereco_titulo":"Address:",
        "contato_endereco":"Indaiatuba, São Paulo, Brazil.",
        "contato_email_titulo":"E-mail:",
        "contato_email":"ritasantosrangeldev@gmail.com",
        "contato_formacao_titulo":"Bachelor Degree:",
        "contato_formacao":"Software Engineer (2022)",
        "contato_telefone_titulo":"Phone:",
        "contato_telefone":"+55 (19) 99681-2648",
        "contato_idiomas_titulo":"Languages:",
        "contato_idiomas":"Portuguese and English.",
        "curriculo":`window.open('cvs/curriculo_en.pdf','popUpWindow','height=600,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;`
    },

    "portugues":
    {
        "header_nome":"Olá, meu nome é <span >Rita</span>. <br>",
        "header_nome_titulo": "Sou uma analista sênior desenvolvedora fullstack.",
        "header_descricao":`
        <span>Sou apaixonada por tecnologia e inovação.</span>
        <br> 
        Desde criança sempre tive um grande interesse por estudar novos tópicos 
        e aprender mais sobre tudo o que me interessava, sendo o desenvolvimento 
        tecnológico minha paixão e ambição. 
        <br><br>
        Aos <span>10 anos</span> iniciei minha jornada em aulas de robótica e cursos
        gratuitos de informática. Aos <span>16 anos</span> conheci um mundo de plataformas 
        de estudo online que foram as maiores responsáveis por me introduzir de uma maneira mais 
        profissional ao mundo da programação. Aos <span>18 anos</span> ingressei no ensino 
        superior de Jogos Digitais com Unity3D, responsável por consolidar meu interesse 
        pelo desenvolvimento de soluções inteligentes, por me mostrar o quão importante seria 
        aprofundar meus conhecimentos e ampliar minhas ferramentas. Aos <span>21 anos</span> fiz minha 
        transferência para o curso de Engenharia de Software afim de focar ainda mais os meus estudos. 
        Como uma desenvolvedora, tenho muito a acrescentar e aprender com o mundo de T.I
        pois minha jornada está apenas começando.`,
        "header_botaocurriculo":"Baixar Currículo",
        "sobremim_titulo":`Sobre <span>mim</span><span class="texto-bg">HABILIDADES</span>`,
        "sobremim_jornadaprofissional_titulo":"Minha Jornada Profissional",
        "sobremim_jornadaprofissional_descricao":`
        Minha primeira oportunidade profissional veio através de uma resposta para os muitos currículos que enviei 
        logo em meu segundo semestre de faculdade. Eu estava empolgada para por em prática tudo o que aprendi e 
        absorver tudo o que o dia a dia de trabalho poderia me oferecer, tanto em hard quanto em soft skills.
        Comecei como estagiária em uma empresa responsável por, através de sensores instalados nas fábricas de 
        nossos clientes, medir a produtividade, formular previsões através da análise de dados e criar 
        painéis complexos. Foi um grande desafio que me instigou imensamente a entrar de cabeça nessa 
        vida profissional.`,
        "idiomas_titulo":"Idiomas",
        "idioma_pt":"Português",
        "idioma_pt_nivel": "Nativo",
        "idioma_en":"Inglês",
        "idioma_en_nivel": "Proficiente (C2+)",
        "idioma_es":"Espanhol",
        "idioma_es_nivel": "Iniciante",
        "sk1":"Manejamento de Tempo",
        "sk2":"Adaptabilidade",
        "sk3":"Trabalho em Equipe",
        "sk4":"Proatividade",
        "sk5":"Comunicação",
        "sk6":"Resolução de Problemas",
        "sk7":"Liderança",
        "sk8":"Paciência",
        "timeline_titulo":"Linha do Tempo",
        "timeline1_duracao":"De outubro de 2020 até abril de 2021",
        "timeline1_titulo":"Desenvolvedora Backend na COGNI",
        "timeline1_descricao":`Como estagiária no setor de desenvolvimento da empresa COGNI tive a
        oportunidade de aprender o processo de desenvolvimento de uma aplicação do
        começo ao fim. Por ser uma empresa focada no desenvolvimento de soluções
        através de IoT, inteligência artificial e dashboards complexos, tive contato
        com o desenvolvimento de aplicações desktop na plataforma .Net, soluções de
        IA customizadas, processos de autenticação de VPN, conexão com o banco de
        dados PostgreSQL, utilização de APIs e conexões com o Bucket AWS. Fui responsável 
        por todas as etapas do projeto interno de Auditoria de Faturas Energéticas Empresariais, 
        desde o levantamento de requisitos, planejamento e modelagem até a implementação e 
        apresentação. Além do projeto de auditoria também trabalhei com o desenvolvimento 
        de skills para a Alexa e tive extenso contato com a Amazon Web Services.`,
        "timeline2_duracao":"De abril de 2021 até o momento",
        "timeline2_titulo":"Analista Sênior na Accenture Song",
        "timeline2_descricao":`Aqui entrei em contato pela primeira vez com as soluções CRM da Microsoft.
        Neste tempo aprendi a desenvolver sistemas CRM completos, tanto em âmbito funcional quanto
        técnico. Tive a oportunidade de utilizar ferramentas como a API padrão do Dynamics, 
        confecção de APIs customizadas do Dynamics, consumo de APIs externas para o Dynamics, 
        Canvas App, Plug-ins, customizações em JavaScript e Power Automate. Eu e meu time desenvolvemos os mais 
        diversos ambientes para os clientes, desde soluções de Vendas até Marketing e Field Services. 
        Ao longo deste tempo aprendi a desenvolver sistemas em conjunto com pequenos e grandes times,
        participar de reuniões diretamente com o cliente para o kick-off de projetos, desenho de soluções e 
        cerimônias SCRUM. Tive a chance também de trabalhar no código paralelamente com meu time através do uso de Git 
        na plataforma DevOps e Github além de manejar as tarefas das sprints utilizando ferramentas como o 
        próprio DevOps e Jira. Por fim, aprendi também a utilizar o Azure Data Factory para integração
        de bancos externos ao Dynamics e trabalhar com diversas integrações. Em suma, recebi a oportunidade 
        de aprender mais sobre as grandes soluções CRM oferecidas pela Microsoft através do Dynamics 365.`,
        "portfolios_titulo":`Meu <span>portfólio</span><span class="texto-bg">PROJETOS</span>`,
        "portfolio1_titulo":"Projeto Maple Bear",
        "portfolio1_descricao":`A escola Maple Bear precisava de um sistema CRM aliado a um aplicativo que pudesse
        ser usado diariamente por seus consultores educacionais. O aplicativo deveria performar
        como um sistema CRM portátil, conectado ao sistema CRM Dynamics para que ambos trabalhassem
        em conjunto. A solução deveria englobar a separação dos sistemas escolares de acordo com as
        várias unidades da Maple Bear do Brasil de modo que cada escola visualizasse 
        seus clientes, clientes potenciais e alunos para trabalhá-los dentro do sistema; a recepção 
        de clientes potenciais a partir de uma página de aterrissagem; um espaço que permitisse a 
        organização do consultor educacional através da criação de tarefas, lembretes de compromisso,
        e lembretes de telefonema que formassem um histórico de contato com o cliente e por fim o
        envio de contratos para assinatura através do Adobe Sign. Para isso, o time desenvolveu um CRM 
        utilizando o Dynamics 365 em conjunto de um Canvas App utilizando funções oferecidas pelo sistema
        como a separação de unidades de negócio, gerenciamento de clientes potenciais, criação de oportunidades
        de negócio a partir de clientes potenciais aquecidos, criação de pedidos com os produtos escolhidos e 
        envio de assinatura Adobe Sign através do Power Automate para então oferecer uma visão 360º 
        de todo o processo.`,
        "portfolio2_titulo":"Projeto RTM",
        "portfolio2_descricao":`A empresa RTM conta com vários setores que contribuem para um serviço de qualidade, logo precisava
        de um sistema CRM capaz de oferecer etapas claras e organizadas para cada equipe envolvida na operação.
        Fazia-se necessária uma área adequada para a equipe de vendas trabalhar seus clientes em potencial, uma área
        de oportunidade de vendas disponível somente para os vendedores das equipes adequadas, campos dinâmicos 
        para o preenchimento de dados de acordo com o tipo da demanda e do projeto, produtos de venda configurados,
        etapa exclusiva para a operação das equipes técnicas dentro da oportunidade de vendas, fase de elaboração 
        da proposta, campos para controle do processo e manejamento contratual. Para atender às demandas o time de 
        desenvolvimento contou com formulários customizados, um pipeline customizado para o processo de negócio, 
        permissões de acesso aos formulários customizadas, automações de formulários e plug-ins para customizações 
        processuais.`,
        "portfolio3_titulo": "Projeto MDC Energia",
        "portfolio3_descricao":`
        A análise de fontes energéticas é um assunto que a MDC Energia leva muito a sério e, para performar 
        sua proposta com organização e dedicação de ponta a ponta seria necessário um sistema CRM capaz de separar 
        seus setores energéticos em 3 sistemas CRM semelhantes, porém com algumas características particulares: 
        Os sistemas deveriam possuir a mesma base de dados de clientes, porém com diagnósticos e oportunidades 
        independentes, formulários complexos e automatizados para a inserção dos inúmeros dados envolvidos no 
        processo de negócio e um sistema complexo sistema de aprovações enviadas e monitoradas automaticamente 
        pelo sistema. Além das necessidades sistemáticas, existiam também as necessidades de usabilidade pois 
        o caminho a ser seguido no processo da MDC Energia envolve uma rígida ordem de informações e aprovações 
        que devem acontecer para que novas etapas do processo possam ser atingidas, logo o sistema deveria 
        guiar o usuário ao longo do processo. Para isso, um grande sistema customizado foi criado, contando 
        com 3 aplicativos diferentes, formulários independentes, base de clientes compartilhada, redirecionamentos 
        de registros entre as 3 aplicações, sistema de armazenamento de documentos e envio dos 
        documentos para os aprovadores determinados pelos administradores do sistema e mensagens que guiam 
        os usuários ao longo das etapas e aprovações que, em específico, foram desenvolvidos com uma lógica 
        robusta e inteligente que detecta qual é o documento enviado e para quais aprovadores deve seguir.
        `,
        "contato_titulo":`Meu <span>Contato</span><span class="texto-bg">FORMULÁRIO</span>`,
        "contato_subtitulo":"Entre em contato",
        "contato_descricao":`Abaixo encontram-se minhas informações gerais e dados de contato. 
        Para entrar em contato por favor utilize um dos meios listados.` ,
        "contato_endereco_titulo":"Endereço:",
        "contato_endereco":"Indaiatuba, São Paulo, Brasil.",
        "contato_email_titulo":"E-mail:",
        "contato_email":"ritasantosrangeldev@gmail.com",
        "contato_formacao_titulo":"Formação:",
        "contato_formacao":"Software Engineer (2022)",
        "contato_telefone_titulo":"Telefone:",
        "contato_telefone":"+55 (19) 99681-2648",
        "contato_idiomas_titulo":"Idiomas:",
        "contato_idiomas":"Português e Inglês.",
        "curriculo":`window.open('cvs/curriculo_ptbr.pdf','popUpWindow','height=600,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;`
    }
}