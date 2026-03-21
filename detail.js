// Banco de dados dos seus projetos
const projectsData = {
aura: {
        title: "Aura Analytics",
        // Note o uso da crase (`) no começo e no fim da descrição
        description: `
            <div style="font-size: 15px; line-height: 1.8;">
                <b>Preservação de Dados:</b> Este dashboard é uma versão espelho de uma solução real de Business Intelligence. Por questões éticas e de privacidade, os dados financeiros e cadastrais foram mascarados. As métricas de performance e as visualizações de inteligência de mercado, porém, refletem fielmente a complexidade e os resultados gerados pela ferramenta.<br><br>

                <b>Objetivo:</b> Esta solução de BI foi desenvolvida para integrar toda a jornada do cliente desde o investimento em tráfego (Marketing) até a conversão final no CRM (Vendas). O foco é transformar dados fragmentados em uma central de decisões estratégica, focada em ROI e otimização de funil.<br><br>

                <h5 style="color: var(--accent); margin-top: 1rem; font-size: 1.1rem;">➡️ VISÃO: VENDAS (Overview Comercial)</h5>
                O painel de vendas não é apenas um relatório de números, mas uma ferramenta de diagnóstico.<br><br>

                <b>- KPIs com Narrativas Dinâmicas:</b> Cada indicador principal (Faturamento, Ticket Médio, Conversão...) é acompanhado por uma variação percentual comparativa e uma narrativa inteligente. Isso elimina a necessidade de interpretação subjetiva, entregando o insight pronto: <b>"Crescimento impulsionado pelo volume"</b> ou <b>"Alerta crítico no descarte de oportunidades"</b>.<br>
                <b>- Funil de Conversão:</b> Uma visualização clara da eficiência entre as etapas, desde a chegada do Lead até o fechamento. Acompanhar a quebra entre "1ª Mensagem" e "Negociação" permite identificar se o problema está na abordagem inicial ou na maturação do lead.<br>
                <b>- Análise de Sazonalidade e Metas:</b> O gráfico de barras central utiliza uma linha de média dinâmica, permitindo visualizar instantaneamente quais meses performaram acima da expectativa e a tendência de crescimento para o período atual.<br>
                <b>- Diagnóstico de Perdas (Churn de Funil):</b> Um dos maiores diferenciais deste painel é o detalhamento dos Motivos de Perda. Em vez de apenas saber que perdeu, o gestor identifica que "Parou de responder" é o principal ofensor, podendo disparar campanhas de re-engajamento automatizadas.<br>
                <b>- Performance por Consultor (Ranking Dinâmico):</b> Permite o acompanhamento individual da produtividade, incentivando a cultura de meritocracia e identificando melhores práticas entre os consultores que mais convertem.<br>
                <b>- Segmentação de Público (Escolaridade e Perfil):</b> Gráficos que revelam o perfil demográfico do cliente ideal, auxiliando o marketing a refinar o público-alvo para as próximas campanhas.<br><br>

                <h5 style="color: var(--accent); margin-top: 1rem; font-size: 1.1rem;">- Diferenciais Técnicos desse Painel:</h5>
                <b>- UX/UI Design:</b> Interface em modo escuro com alto contraste, projetada para reduzir a fadiga visual e destacar o que é acionável (os alertas em verde e vermelho).<br>
                <b>- Filtros de Contexto:</b> Navegação fluida entre "Fechamento (Caixa)" e "Safra (Criação)", permitindo análises financeiras e operacionais no mesmo ambiente.<br>
                <b>- Inteligência de Dados:</b> Uso de DAX avançado para cálculos de períodos anteriores (Time Intelligence) e indicadores de variação (YoY/MoM).<br><br>

                <h5 style="color: var(--accent); margin-top: 1rem; font-size: 1.1rem;">➡️ VISÃO: CAMPANHAS (Marketing Analytics)</h5>
                Nesta visão, o painel deixa de ser apenas contábil e passa a ser uma ferramenta de otimização de orçamento, permitindo identificar quais canais e anúncios estão trazendo o melhor retorno sobre o capital investido.<br><br>

                <b>- Controle de Performance de Mídia (KPIs):</b> Monitoramento em tempo real de métricas críticas como Investimento, CPL (Custo por Lead) e ROAS (Retorno sobre Gasto em Anúncio). A comparação com o período anterior permite ao gestor entender se o aumento de leads veio acompanhado de eficiência ou se o custo de aquisição está subindo de forma descontrolada.<br>
                <b>- Funil de Eficiência de Tráfego:</b> Uma visualização linear que conecta o topo do funil (Impressões e Cliques) ao fundo do funil (Leads). O painel destaca métricas intermediárias de eficiência, como CTR (Taxa de Clique) e CPC (Custo por Clique), importantes para diagnosticar a qualidade dos criativos e das segmentações.<br>
                <b>- Mix de Canais (Google Ads vs. Meta Ads):</b> Um gráfico de distribuição que revela onde o orçamento está concentrado. Essa visão é crucial para estratégias de cross-channel, permitindo equilibrar o investimento entre rede de pesquisa (demanda existente) e redes sociais (geração de demanda).<br>
                <b>- Análise Tática por Campanha (Matriz de Dados):</b> Uma tabela detalhada que ranqueia cada campanha por performance. Aqui, o gestor pode tomar decisões táticas imediatas: pausar campanhas com CPL alto ou escalar aquelas que apresentam o melhor CTR e volume de leads.<br>
                <b>- Seletor de KPI Dinâmico:</b> Uma funcionalidade avançada de UX que permite ao usuário alterar a métrica do gráfico de barras (como CPV, Leads ou Cliques) sem mudar de página. Isso proporciona uma análise mais completa do histórico mensal.<br><br>

                <h5 style="color: var(--accent); margin-top: 1rem; font-size: 1.1rem;">- Diferenciais Técnicos desse Painel:</h5>
                <b>- Métricas de Comparação (MoM):</b> Implementação de cálculos de variação percentual para identificar tendências de mercado e sazonalidades.<br>
                <b>- Hierarquia de Informação:</b> O layout guia o usuário do macro (Investimento Total) para o micro (Performance por Campanha), facilitando o processo de drill-down mental.<br>
                <b>- Foco em ROI:</b> Diferente de dashboards comuns que focam apenas em "likes" ou "cliques", este painel é orientado a resultados financeiros, conectando o esforço de marketing ao faturamento.<br>
            </div>
        `,
        powerbi: "https://app.powerbi.com/view?r=eyJrIjoiOTI5MDgxMDItOWYzOS00NzQzLTllODctZjgxNDk5N2IyM2M5IiwidCI6ImEyYTE1ZTA1LWY2MjYtNDVhZi05MTkyLThlNDM2OTk2MjljZiJ9",
        image: "https://i.ibb.co/Nnj61zKb/Captura-de-tela-2026-03-20-200621.png",
        tags: ["Power BI", "DAX", "ETL", "Marketing"]
    },
spotify: {
        title: "Spotify Analytics",
        description: `
                  <div style="font-size: 15px;">
                    Esse projeto desenvolvi através de uma integração via API com o Spotify, importei os dados e tratei o que foi necessário.<br><br>
                    Observações gerais:<br>
                    <b>1)</b> A análise foi feita baseada na última semana e ela ficará atualizando conforme o tempo, não fiz com toda base existente do Spotify, porque meu note poderia pegar fogo com milhões de milhões de linhas. 😅<br>
                    <b>2)</b> Os códigos podem ser clicado ou escaneados pelo app do Spotify e você terá acesso às musicas e também aos artistas.<br>
                    <b>3)</b> Cores: verde claro (músicas), verde escuro (artistas)<br><br>

                    ➡️ VISÃO: GERAL<br>
                    🔶 Características gerais: Contagem de músicas, países, artistas e álbuns<br>
                    🔶 Qtd músicas na última semana: Gráfico de linhas que mostra através da semana a quantidade de músicas identificadas no período.<br>
                    🔶 Músicas explícitas: Análise em gráfico de barras sobre a quantidade de músicas explícitas em relação as demais. E é nítido que comporta mais da metade das demais.<br>
                    🔶 Tabelas de Rank: No Spotify tem rank dos artistas, eu somei as notas de cada um nos países, gerando um total e fazendo comparativo a nível Global e Brasil.<br><br>

                    ➡️ VISÃO: Análise músicas<br>
                    🔶 Músicas populares: Fiz uma soma das notas de cada música e organizei em um gráfico de barras para ter o TOP 10.<br>
                    🔶 Rank diário e Semanal: No Spotify tem um rank que pode ser diário ou semanal, informando o quanto a música ou artista ficou em determinada posição.<br>
                    🔶 Qtd músicas mensal: Gráfico de linhas que mostra a quantidade de músicas mensal, conseguimos assim tirar insights valiosos.<br><br>

                    ➡️ VISÃO: Análise artistas<br>
                    🔶 Qtd álbuns / artista: Em gráfico de barras organizei (a nível global) os artistas com mais álbuns identificados.<br>
                    🔶 Rank diário e Semanal: No Spotify tem um rank que pode ser diário ou semanal, informando o quanto a música ou artista fica em determinada posição.<br>
                    🔶 Artistas mais populares: A nível global organizei os artistas mais populares, através das notas que eles receberam no período.<br>
                    🔶 Variação semanal: Um artista e música tem variação de suas posições, com isso criei um gráfico para saber os que flutuam mais e comparar depois com os populares e ter ideia se eles tem alguma relação ou não.<br><br>

                    ➡️ VISÃO: Variação artistas<br>
                    🔶 Variação rank Global, EUA e Brasil: Reuni todos artistas que mais tem flutuação separando por Global, EUA e Brasil fazendo comparação em relação ao total de cada localidade para ter percentual.<br><br>

                    ➡️ VISÃO: Popularidade músicas<br>
                    🔶 Popularidade Global, EUA e Brasil: Reuni todas músicas que mais tem popularidade separando por Global, EUA e Brasil.<br>
                    🔶 Mapa: A base tem muitos países e como muitos não seriam relevantes para a análise, coloquei esse mapa para mostrar os países envolvidos nessa base de dados.<br><br>
                    
                </div>
        `,
        powerbi: "https://app.powerbi.com/view?r=eyJrIjoiNGVjOTM0NDQtZjA0ZC00MzJhLTk2ZDMtNjEzOWM1MjRlZjg3IiwidCI6ImEyYTE1ZTA1LWY2MjYtNDVhZi05MTkyLThlNDM2OTk2MjljZiJ9",
        image: "https://i.ibb.co/ymtwKwK3/Captura-de-tela-2026-03-21-135511.png",
        tags: ["Power BI", "Python", "API"]
    },
    engenex: {
        title: "Engenex Solutions",
        description: `<div style="font-size: 15px;">
                    Esse é uma projeto desenvolvido para construções em geral, ele tem três páginas principais. Características, Financeiro e Gantt, o painel está destinado a projetos de engenharia para acompanhar como está a evolução de cada etapa.<br><br> 
                    
                    ➡️ VISÃO: GERAL<br>
                    
                    🔶 Características gerais: tipo da obra, altura de cada construção, quantidade de andares, quantidade de elevadores.
                    <br>
                    🔶 Planejado x Realizado: Gráfico de colunas com um comparativo entre custo realizado e custo planejado, podendo analisar como está sendo investido o valor aplicado e se está de acordo com o que foi planejado, caso não esteja conseguimos verificar e reverter para não ser tão discrepante do custo planejado.
                    <br>
                    🔶 Curva S: Graficamente a curva S representa o acúmulo das distribuições de determinado fator da produção como: mão de obra, equipamentos e materiais. Temos um comparativo geral dos custos planejado, realizado e o total acumulado de cada um deles podendo verificar a distância entre os acúmulos e identificar uma situação negativa, podendo reverter antes que se concretize ou perdure por muito tempo.
                    <br><br>
                    
                    ➡️ VISÃO: Financeiro<br>
                    
                    🔶 Características financeiras: tipo da obra, orçamento total para a obra e total realizado.
                    <br>
                    🔶 Indicador KPI: são os Indicadores-Chave de Desempenho observados por um negócio. São valores quantitativos fundamentais que medem os seus principais processos internos. Nesse caso é um comparativo entre o custo planejado e o realizado, tendo como objetivo o custo planejado, caso fique acima disso será algo negativa (teve custo acima do esperado), se ficar abaixo será positivo (teve custo abaixo do esperado) e também informa a porcentagem de diferença.
                    <br>
                    🔶 Etapas realizadas: conseguimos ver as etapas da obra e os respectivos custos, podendo assim verificar onde teve maior custo e se teve tal necessidade ou poderia ter diminuido e investido em outra etapa.
                    <br>
                    🔶 Etapas detalhamento: verificamos cada etapa com o total planejado, realizado e se a porcentagem de custo realizado em relação ao planejado ficou acima (ruim) ou abaixo (bom), outro mmodo para verificar se os custos estão acima do esperado e onde exatamente teve maior custo ou menor.
                    <br>
                    🔶 Localização: um mapa navegável que ilustra onde a construção está localizada.
                    <br><br>
                    
                    ➡️ VISÃO: Gantt<br>
                    
                    🔶 Gantt: O diagrama de Gantt é uma representação gráfica do progresso de um projeto, similar às metodologias Kanban e Scrum. Ele destaca a priorização das tarefas e permite identificar a duração de cada etapa, ajudando a controlar o tempo e evitar custos adicionais.<br><br>
                    
                </div>
        `,
        powerbi: "https://app.powerbi.com/view?r=eyJrIjoiYjFjMzEzZjktYmRjNC00ZWY4LWFjMzItNzNlYzkwODNiN2RiIiwidCI6ImEyYTE1ZTA1LWY2MjYtNDVhZi05MTkyLThlNDM2OTk2MjljZiJ9&pageName=ReportSection85b51dda1b1be5f5612e", // Substitua pelo link real
        image: "https://i.ibb.co/v45fDvDw/Captura-de-tela-2026-03-21-141219.png",
        tags: ["Power BI", "Gantt", "Curva S"]
    },
    bemcoberto: {
        title: "Bem Coberto",
        description: "Análise de conversão do setor de saúde. Monitoramento de Leads até a venda final, focado em ROI de Canais e Eficiência de Marketing.",
        powerbi: "LINK_DO_SEU_POWER_BI_AQUI", // Substitua pelo link real
        tags: ["Power BI", "ROI", "Saúde"]
    },
    importcars: {
        title: "ImportCars",
        description: "Análise automotiva para acompanhamento de faturamento, localização de clientes em mapa e análise de Meta vs Realizado com Drill Down.",
        powerbi: "LINK_DO_SEU_POWER_BI_AQUI", // Substitua pelo link real
        tags: ["Power BI", "Mapas", "Vendas"]
    },
    techsafe: {
        title: "TechSafe HR",
        description: "Painel de People Analytics focado em Retenção, TurnOver e Absenteísmo com forte apelo em Storytelling de dados.",
        powerbi: "LINK_DO_SEU_POWER_BI_AQUI", // Substitua pelo link real
        tags: ["Power BI", "HR Analytics", "Storytelling"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Pega o parâmetro da URL (ex: ?project=aura)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    const project = projectsData[projectId];

    if (project) {
        // 2. Preenche os dados na tela
        document.getElementById('detail-title').innerHTML = project.title;
        document.getElementById('detail-description').innerHTML = project.description;
        document.getElementById('detail-iframe').src = project.powerbi;
        
        // 3. Preenche as tags
        const tagsContainer = document.getElementById('detail-tags');
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });

        // 4. Gera a lista de "Outros Projetos"
        renderOtherProjects(projectId);
    } else {
        document.getElementById('detail-title').textContent = "Projeto não encontrado";
        document.getElementById('detail-description').textContent = "Não foi possível carregar os detalhes deste projeto.";
    }

    // Opcional: Reaproveita as partículas do seu site
    if (typeof Particles !== 'undefined') {
        new Particles();
    }
});

function renderOtherProjects(currentId) {
    const container = document.getElementById('other-projects-list');
    
    // Pega todos os projetos, exceto o atual
    const others = Object.keys(projectsData).filter(key => key !== currentId);
    
    others.forEach(id => {
        const item = projectsData[id];
        const link = document.createElement('a');
        link.href = `project-detail.html?project=${id}`;
        link.className = 'other-project-card';
        
        // Agora incluímos a imagem na estrutura do HTML do card
        link.innerHTML = `
            <div class="other-project-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="other-project-content">
                <h3>${item.title}</h3>
                <p>${item.tags.join(' • ')}</p>
            </div>
        `;
        container.appendChild(link);
    });
}