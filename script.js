    const mostrar_resposta1 = document.getElementById("botão1");
    const resposta1 = document.getElementById("resposta1");
    const resposta2 = document.getElementById("resposta2");
    const resposta2dois = document.getElementById("resposta2.2");
    const resposta2tres = document.getElementById("resposta2.3");
    const mostrar_resposta2 = document.getElementById("botão2");
    // Primeira resposta
    mostrar_resposta1.addEventListener("click", function() {
        if (mostrar_resposta1.textContent === "Ver resposta") {
            resposta1.textContent = "Cidades inteligentes são cidades que conseguem alinhar o desenvolvimento tecnológico com qualidade de vida (social e ambiental), com inovações, sejam digitais ou não. Têm como objetivo proporcionar aos cidadãos melhor conforto e bem-estar.";
            mostrar_resposta1.textContent = "Ocultar";
        } else {
            resposta1.textContent = "";
            mostrar_resposta1.textContent = "Ver resposta";
        }
    });
    // Segunda resposta
    mostrar_resposta2.addEventListener("click", function() {
        if (mostrar_resposta2.textContent === "Ver resposta") {
            resposta2.textContent = "Mobilidade mais inteligente - usam tecnologias e sensores para monitorar e organizar o transporte público, analisando dados como fluxo de veículos, número de passageiros e tempo de espera nos semáforos.";
            resposta2dois.textContent = "Iluminação pública moderna - usam iluminação pública automatizada, integrando monitoramento e manutenção de forma eficiente.";
            resposta2tres.textContent = "Práticas de sustentabilidade - utilizam materiais recicláveis e promovem o reaproveitamento e descarte adequado de resíduos de construção e industriais.";
            mostrar_resposta2.textContent = "Ocultar";
        } else {
            resposta2.textContent = "";
            resposta2dois.textContent = "";
            resposta2tres.textContent = "";
            mostrar_resposta2.textContent = "Ver resposta";
        }
    });
    // Terceira resposta
    document.getElementById("botão3").addEventListener("click", function() {
        if (document.getElementById("botão3").textContent === "Ver resposta") {
            document.getElementById("resposta3").textContent = "Demanda um alto custo, além de poder causar uma dependência na tecnologia e ocasionar vulnerabilidades, como ataques cibernéticos. Em alguns casos, a população reclama da falta de privacidade. Também são necessárias manutenções constantes, e pode ocorrer exclusão social para as pessoas que não têm acesso à internet.";
            document.getElementById("botão3").textContent = "Ocultar";
        } else {
            document.getElementById("resposta3").textContent = "";
            document.getElementById("botão3").textContent = "Ver resposta";
        }
    });
    // Quarta resposta
    document.getElementById("botão4").addEventListener("click", function() {
        if (document.getElementById("botão4").textContent === "Ver resposta") {
            document.getElementById("resposta4").textContent = "Ela é capaz de ter diversos benefícios para a população, como a disponibilidade de WI-FI público até integração de sistemas de controle e monitoramento da iluminação pública.";
            document.getElementById("resposta4.2").textContent = "Além das características mencionadas, outras vantagens de uma cidade inteligente são:";
            document.getElementById("resposta4.3").textContent = "Modernização do transporte público;";
            document.getElementById("resposta4.4").textContent = "Agilidade nos serviços de emergência;";
            document.getElementById("resposta4.5").textContent = "Aumento na eficiência do uso de recursos naturais;";
            document.getElementById("resposta4.6").textContent = "Melhoria nos meios de comunicação;";
            document.getElementById("resposta4.7").textContent = "Redução do uso de papéis.";
            document.getElementById("botão4").textContent = "Ocultar";
        } else {
            document.getElementById("resposta4").textContent = "";
            document.getElementById("resposta4.2").textContent = "";
            document.getElementById("resposta4.3").textContent = "";
            document.getElementById("resposta4.4").textContent = "";
            document.getElementById("resposta4.5").textContent = "";
            document.getElementById("resposta4.6").textContent = "";
            document.getElementById("resposta4.7").textContent = "";
            document.getElementById("botão4").textContent = "Ver resposta";
        }
    });
    // Função para as novas perguntas
    function configurarPergunta(botaoId, respostaId, texto) {
        const botao = document.getElementById(botaoId);
        const resposta = document.getElementById(respostaId);
        botao.addEventListener("click", function() {
            if (botao.textContent === "Ver resposta") {
                resposta.textContent = texto;
                botao.textContent = "Ocultar";
            } else {
                resposta.textContent = "";
                botao.textContent = "Ver resposta";
            }
        });
    }
    // Quinta resposta
    configurarPergunta(
        "botão5",
        "resposta5",
        "São Carlos possui diversas iniciativas de cidade inteligente, mas ainda está em processo de desenvolvimento e modernização. A cidade investe em tecnologia, inovação e melhoria dos serviços públicos."
    );
    // Sexta resposta
    configurarPergunta(
        "botão6",
        "resposta6",
        "São Carlos possui acesso gratuito à internet em alguns espaços públicos, uma rede de fibra óptica chamada RedeSanca, serviços digitais da Prefeitura e projetos para integrar dados de diferentes setores, como saúde e educação."
    );
    // Sétima resposta
    configurarPergunta(
        "botão7",
        "resposta7",
        "A cidade considerada mais inteligente depende do ranking utilizado e do ano da avaliação. No IMD Smart City Index 2026, Zurique, na Suíça, ocupa o primeiro lugar entre as cidades avaliadas."
    );
    // Oitava resposta
    configurarPergunta(
        "botão8",
        "resposta8",
        "Não necessariamente. Uma cidade inteligente pode oferecer serviços mais eficientes, mas isso não significa que todos os seus moradores tenham boas condições de vida. Uma cidade comum também pode ter boas condições de moradia, segurança e qualidade de vida. O importante é atender às necessidades da população, e não apenas possuir tecnologia."
    );
    // Nona resposta
    configurarPergunta(
        "botão9",
        "resposta9",
        "Não é fácil. Transformar uma cidade exige investimentos financeiros, planejamento, infraestrutura tecnológica, profissionais capacitados e manutenção constante. Além disso, é necessário garantir que toda a população tenha acesso às melhorias."
    );