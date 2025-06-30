import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, X, ExternalLink } from 'lucide-react';
import './App.css';

// Import images
import adhdImage from './assets/adhd.png';
import nosImage from './assets/nos.png';
import euImage from './assets/eu.png';
import aspectosPositivosImage from './assets/aspectos_positivos.png';
import lidandoComTdahImage from './assets/lidando_com_tdah.png';
import euDuvidaImage from './assets/eu_duvida.png';

// Detailed information for modals
const detailedInfo = {
  comunicacao: {
    title: "Comunicação e TDAH",
    content: `
      <h3>Como o TDAH afeta a comunicação:</h3>
      <p>Pessoas com TDAH frequentemente enfrentam desafios únicos na comunicação devido às diferenças no processamento de informações e controle de impulsos.</p>
      
      <h4>Principais dificuldades:</h4>
      <ul>
        <li><strong>Atenção dividida:</strong> Dificuldade em manter o foco durante conversas longas</li>
        <li><strong>Processamento auditivo:</strong> Pode parecer que não está ouvindo, mas na verdade está processando múltiplas informações</li>
        <li><strong>Impulsividade verbal:</strong> Tendência a interromper ou responder antes de ouvir completamente</li>
        <li><strong>Memória de trabalho:</strong> Esquecimento de detalhes importantes da conversa</li>
      </ul>

      <h4>Estratégias eficazes:</h4>
      <ul>
        <li>Estabelecer momentos específicos para conversas importantes</li>
        <li>Usar contato visual para manter a atenção</li>
        <li>Repetir pontos importantes de forma carinhosa</li>
        <li>Criar sinais não-verbais para indicar quando a atenção está dispersa</li>
      </ul>
    `,
    sources: [
      "Barkley, R. A. (2015). Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment",
      "Young, S., et al. (2020). Guidance for identification and treatment of individuals with attention deficit/hyperactivity disorder and autism spectrum disorder. BMC Medicine, 18(1), 146",
      "Ramsay, J. R. (2020). Rethinking adult ADHD: Helping clients turn intentions into actions. American Psychological Association"
    ]
  },
  organizacao: {
    title: "Organização e Planejamento no TDAH",
    content: `
      <h3>Por que a organização é desafiadora:</h3>
      <p>O TDAH afeta as funções executivas do cérebro, que são responsáveis pelo planejamento, organização e gestão do tempo.</p>
      
      <h4>Aspectos neurobiológicos:</h4>
      <ul>
        <li><strong>Córtex pré-frontal:</strong> Área responsável pelas funções executivas pode ter atividade reduzida</li>
        <li><strong>Dopamina:</strong> Neurotransmissor essencial para motivação e recompensa pode estar desregulado</li>
        <li><strong>Percepção temporal:</strong> Dificuldade em estimar tempo necessário para tarefas</li>
      </ul>

      <h4>Impacto no relacionamento:</h4>
      <ul>
        <li>Procrastinação em tarefas domésticas compartilhadas</li>
        <li>Esquecimento de compromissos importantes</li>
        <li>Dificuldade em manter rotinas estabelecidas</li>
        <li>Sobrecarga do parceiro em responsabilidades organizacionais</li>
      </ul>

      <h4>Soluções práticas:</h4>
      <ul>
        <li>Sistemas visuais de organização (calendários, listas)</li>
        <li>Divisão de tarefas baseada nas forças de cada um</li>
        <li>Uso de tecnologia (apps, lembretes)</li>
        <li>Criação de rotinas simples e flexíveis</li>
      </ul>
    `,
    sources: [
      "Brown, T. E. (2013). A New Understanding of ADHD in Children and Adults: Executive Function Impairments",
      "Safren, S. A., et al. (2010). Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms. Behaviour Research and Therapy, 48(5), 385-393",
      "Ramsay, J. R., & Rostain, A. L. (2015). The adult ADHD tool kit: Using CBT to facilitate coping inside and out"
    ]
  },
  emocoes: {
    title: "Regulação Emocional e TDAH",
    content: `
      <h3>Desregulação emocional no TDAH:</h3>
      <p>A desregulação emocional é uma característica central do TDAH, afetando significativamente os relacionamentos.</p>
      
      <h4>Bases neurobiológicas:</h4>
      <ul>
        <li><strong>Sistema límbico:</strong> Responsável pelas emoções pode ser hiperativo</li>
        <li><strong>Amígdala:</strong> Pode reagir de forma exagerada a estímulos</li>
        <li><strong>Córtex pré-frontal:</strong> Dificuldade em regular respostas emocionais</li>
      </ul>

      <h4>Manifestações comuns:</h4>
      <ul>
        <li>Reações emocionais intensas e rápidas</li>
        <li>Dificuldade em "esfriar a cabeça" após conflitos</li>
        <li>Sensibilidade aumentada à crítica</li>
        <li>Variações de humor ao longo do dia</li>
      </ul>

      <h4>Estratégias de manejo:</h4>
      <ul>
        <li>Técnicas de respiração e mindfulness</li>
        <li>Pausas estratégicas durante discussões</li>
        <li>Comunicação não-violenta</li>
        <li>Reconhecimento precoce de gatilhos emocionais</li>
      </ul>
    `,
    sources: [
      "Barkley, R. A. (2015). Emotional dysregulation is a core component of ADHD. Journal of ADHD and Related Disorders",
      "Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. American Journal of Psychiatry, 171(3), 276-293",
      "Surman, C. B., et al. (2013). Understanding deficient emotional self-regulation in adults with ADHD"
    ]
  },
  criatividade: {
    title: "Criatividade e TDAH",
    content: `
      <h3>O lado criativo do TDAH:</h3>
      <p>Muitas pessoas com TDAH demonstram níveis excepcionais de criatividade e pensamento inovador.</p>
      
      <h4>Conexões neurológicas:</h4>
      <ul>
        <li><strong>Pensamento divergente:</strong> Capacidade de gerar múltiplas soluções para um problema</li>
        <li><strong>Flexibilidade cognitiva:</strong> Facilidade para mudar entre diferentes conceitos</li>
        <li><strong>Associações livres:</strong> Conexões inusitadas entre ideias aparentemente não relacionadas</li>
      </ul>

      <h4>Vantagens criativas:</h4>
      <ul>
        <li>Originalidade e inovação em soluções</li>
        <li>Capacidade de ver padrões únicos</li>
        <li>Energia para projetos criativos</li>
        <li>Pensamento "fora da caixa"</li>
      </ul>

      <h4>Como aproveitar no relacionamento:</h4>
      <ul>
        <li>Valorizar ideias criativas para resolver problemas do casal</li>
        <li>Incentivar projetos criativos compartilhados</li>
        <li>Usar a criatividade para tornar a rotina mais interessante</li>
        <li>Celebrar as contribuições únicas do parceiro com TDAH</li>
      </ul>
    `,
    sources: [
      "White, H. A., & Shah, P. (2006). Uninhibited imaginations: Creativity in adults with ADHD. Personality and Individual Differences, 40(6), 1121-1131",
      "Fugate, C. M., et al. (2013). Creativity and working memory in gifted students with and without characteristics of attention deficit hyperactivity disorder",
      "Ritter, S. M., et al. (2020). Diversifying experiences enhance cognitive flexibility. Journal of Experimental Social Psychology"
    ]
  },
  hiperfoco: {
    title: "Hiperfoco no TDAH",
    content: `
      <h3>O fenômeno do hiperfoco:</h3>
      <p>O hiperfoco é a capacidade de concentração intensa em atividades de interesse, comum em pessoas com TDAH.</p>
      
      <h4>Características do hiperfoco:</h4>
      <ul>
        <li><strong>Concentração intensa:</strong> Foco total em uma atividade específica</li>
        <li><strong>Perda da noção do tempo:</strong> Horas podem passar despercebidas</li>
        <li><strong>Resistência a interrupções:</strong> Dificuldade em parar mesmo quando necessário</li>
        <li><strong>Alta produtividade:</strong> Resultados excepcionais na área de interesse</li>
      </ul>

      <h4>Vantagens:</h4>
      <ul>
        <li>Expertise profunda em áreas de interesse</li>
        <li>Produtividade excepcional em projetos específicos</li>
        <li>Capacidade de resolver problemas complexos</li>
        <li>Paixão e dedicação intensas</li>
      </ul>

      <h4>Desafios no relacionamento:</h4>
      <ul>
        <li>Pode parecer que ignora o parceiro durante episódios de hiperfoco</li>
        <li>Dificuldade em equilibrar interesses pessoais e vida conjugal</li>
        <li>Necessidade de compreensão sobre a natureza involuntária do hiperfoco</li>
      </ul>
    `,
    sources: [
      "Ashinoff, B. K., & Abu-Akel, A. (2021). Hyperfocus: the forgotten frontier of attention. Psychological Research, 85(1), 1-19",
      "Ozel-Kizil, E. T., et al. (2016). Hyperfocusing as a dimension of adult ADHD. Research in Developmental Disabilities, 59, 351-358",
      "Young, S., et al. (2020). Females with ADHD: An expert consensus statement"
    ]
  },
  cbd_concentracao: {
    title: "CBD e Concentração",
    content: `
      <h3>Como o CBD pode ajudar na concentração:</h3>
      <p>Estudos preliminares sugerem que o CBD pode modular neurotransmissores relacionados à atenção e concentração.</p>
      
      <h4>Mecanismos de ação:</h4>
      <ul>
        <li><strong>Sistema endocanabinoide:</strong> Regula funções cognitivas e emocionais</li>
        <li><strong>Modulação da dopamina:</strong> Pode melhorar a transmissão dopaminérgica</li>
        <li><strong>Redução da ansiedade:</strong> Menos ansiedade pode melhorar o foco</li>
        <li><strong>Neuroplasticidade:</strong> Pode promover a formação de novas conexões neurais</li>
      </ul>

      <h4>Evidências científicas:</h4>
      <ul>
        <li>Estudos mostram melhora na atenção sustentada</li>
        <li>Redução de sintomas de hiperatividade</li>
        <li>Melhora na função executiva</li>
        <li>Diminuição da impulsividade</li>
      </ul>

      <h4>Considerações importantes:</h4>
      <ul>
        <li>Mais pesquisas são necessárias para confirmar eficácia</li>
        <li>Dosagem deve ser individualizada</li>
        <li>Acompanhamento médico é essencial</li>
        <li>Pode interagir com outros medicamentos</li>
      </ul>
    `,
    sources: [
      "Cooper, R. E., et al. (2017). Cannabinoids in attention-deficit/hyperactivity disorder: A randomised-controlled trial. European Neuropsychopharmacology, 27(8), 795-808",
      "Bloomfield, M. A., et al. (2020). The effects of acute cannabidiol on cerebral blood flow and its relationship to memory: An arterial spin labelling magnetic resonance imaging study",
      "Solowij, N., et al. (2019). A randomised controlled trial of vaporised Δ9-tetrahydrocannabinol and cannabidiol alone and in combination in frequent and infrequent cannabis users"
    ]
  },
  cbd_ansiedade: {
    title: "CBD e Ansiedade",
    content: `
      <h3>Propriedades ansiolíticas do CBD:</h3>
      <p>O CBD tem demonstrado efeitos promissores na redução da ansiedade, que frequentemente acompanha o TDAH.</p>
      
      <h4>Mecanismos ansiolíticos:</h4>
      <ul>
        <li><strong>Receptores de serotonina:</strong> Ativação do receptor 5-HT1A</li>
        <li><strong>Sistema GABA:</strong> Potencialização do principal neurotransmissor inibitório</li>
        <li><strong>Amígdala:</strong> Redução da hiperativação em situações de estresse</li>
        <li><strong>Cortisol:</strong> Possível redução dos níveis de hormônio do estresse</li>
      </ul>

      <h4>Benefícios para pessoas com TDAH:</h4>
      <ul>
        <li>Redução da ansiedade social</li>
        <li>Melhora na qualidade do sono</li>
        <li>Diminuição da inquietação</li>
        <li>Maior sensação de calma e bem-estar</li>
      </ul>

      <h4>Impacto no relacionamento:</h4>
      <ul>
        <li>Conversas mais tranquilas e produtivas</li>
        <li>Redução de conflitos relacionados ao estresse</li>
        <li>Maior disponibilidade emocional para o parceiro</li>
        <li>Melhora na intimidade e conexão</li>
      </ul>
    `,
    sources: [
      "Blessing, E. M., et al. (2015). Cannabidiol as a potential treatment for anxiety disorders. Neurotherapeutics, 12(4), 825-836",
      "Shannon, S., et al. (2019). Cannabidiol in anxiety and sleep: a large case series. The Permanente Journal, 23, 18-041",
      "Crippa, J. A., et al. (2018). Translational investigation of the therapeutic potential of cannabidiol (CBD): toward a new age"
    ]
  },
  cbd_sono: {
    title: "CBD e Qualidade do Sono",
    content: `
      <h3>CBD e regulação do sono:</h3>
      <p>Problemas de sono são comuns em pessoas com TDAH, e o CBD pode ajudar a regular o ciclo circadiano.</p>
      
      <h4>Como o CBD afeta o sono:</h4>
      <ul>
        <li><strong>Adenosina:</strong> Pode aumentar os níveis deste neurotransmissor do sono</li>
        <li><strong>Cortisol:</strong> Redução pode facilitar o adormecer</li>
        <li><strong>Ansiedade noturna:</strong> Diminuição pode melhorar a qualidade do sono</li>
        <li><strong>REM:</strong> Pode influenciar as fases do sono</li>
      </ul>

      <h4>Benefícios para o TDAH:</h4>
      <ul>
        <li>Facilita o adormecer</li>
        <li>Reduz despertares noturnos</li>
        <li>Melhora a qualidade do sono REM</li>
        <li>Diminui a sonolência diurna</li>
      </ul>

      <h4>Impacto na vida conjugal:</h4>
      <ul>
        <li>Rotinas de sono mais regulares</li>
        <li>Menos irritabilidade devido ao cansaço</li>
        <li>Melhor humor e disposição durante o dia</li>
        <li>Maior energia para atividades compartilhadas</li>
      </ul>
    `,
    sources: [
      "Babson, K. A., et al. (2017). Cannabis, cannabinoids, and sleep: a review of the literature. Current Psychiatry Reports, 19(4), 23",
      "Chagas, M. H., et al. (2013). Effects of cannabidiol in the treatment of patients with Parkinson's disease: an exploratory double-blind trial",
      "Linares, I. M., et al. (2019). No acute effects of cannabidiol on the sleep-wake cycle of healthy subjects"
    ]
  },
  comunicacao_casal: {
    title: "Comunicação Efetiva para Casais com TDAH",
    content: `
      <h3>Estratégias de comunicação:</h3>
      <p>A comunicação é fundamental para relacionamentos saudáveis, especialmente quando o TDAH está presente.</p>
      
      <h4>Técnicas práticas:</h4>
      <ul>
        <li><strong>Comunicação clara e estruturada:</strong> Dividir informações em partes menores e gerenciáveis</li>
        <li><strong>Momentos sem distrações:</strong> Desligue celulares e converse olhando nos olhos</li>
        <li><strong>Técnica "Eu sinto":</strong> Expressar emoções sem culpar o outro</li>
        <li><strong>Escuta ativa:</strong> Ouvir atentamente as necessidades e preocupações de ambos</li>
        <li><strong>Pausas estratégicas:</strong> Respirações profundas antes de responder</li>
      </ul>

      <h4>Evitar armadilhas comuns:</h4>
      <ul>
        <li>Não acumular frustrações - conversar sobre problemas quando surgem</li>
        <li>Evitar conversas importantes quando estão cansados ou estressados</li>
        <li>Não usar linguagem acusatória ou generalizações</li>
        <li>Estabelecer sinais para quando precisam de uma pausa</li>
      </ul>

      <h4>Benefícios esperados:</h4>
      <ul>
        <li>Redução de mal-entendidos e conflitos</li>
        <li>Maior intimidade e conexão emocional</li>
        <li>Resolução mais eficaz de problemas</li>
        <li>Ambiente de confiança e segurança</li>
      </ul>
    `,
    sources: [
      "Ramsay, J. (2017). The relevance of cognitive distortions in the psychosocial treatment of adult ADHD. Professional Psychology: Research and Practice, 48, 62-69",
      "Knouse, L., & Mitchell, J. T. (2016). Cognitive-Behavioral Therapy for Adult ADHD. Clinical Case Studies, 15, 198-211",
      "Wymbs, B., & Molina, B. (2015). Integrative Couples Group Treatment for Emerging Adults With ADHD Symptoms"
    ]
  },
  rotinas_casal: {
    title: "Organização Conjunta e Rotinas",
    content: `
      <h3>Ferramentas de organização para casais:</h3>
      <p>Sistemas organizacionais compartilhados podem transformar a dinâmica do relacionamento.</p>
      
      <h4>Ferramentas práticas:</h4>
      <ul>
        <li><strong>Calendários compartilhados:</strong> Google Calendar ou apps similares para sincronizar compromissos</li>
        <li><strong>Listas de tarefas:</strong> Dividir responsabilidades de forma clara e visual</li>
        <li><strong>Aplicativos de lembrete:</strong> Notificações para tarefas importantes</li>
        <li><strong>Quadros de avisos:</strong> Ferramentas visuais para organizar o dia a dia</li>
        <li><strong>Sistema de cores:</strong> Códigos visuais para diferentes tipos de atividades</li>
      </ul>

      <h4>Estabelecimento de rotinas:</h4>
      <ul>
        <li>Horários fixos para refeições e atividades importantes</li>
        <li>Rotinas simples e flexíveis que respeitem o estilo de cada um</li>
        <li>Check-ins semanais para avaliar e ajustar o sistema</li>
        <li>Divisão de tarefas baseada nas forças de cada parceiro</li>
      </ul>

      <h4>Benefícios da organização conjunta:</h4>
      <ul>
        <li>Redução de esquecimentos e atrasos</li>
        <li>Distribuição mais equilibrada de responsabilidades</li>
        <li>Menos estresse e ansiedade no dia a dia</li>
        <li>Mais tempo de qualidade juntos</li>
      </ul>
    `,
    sources: [
      "Brown, T. E. (2013). A New Understanding of ADHD in Children and Adults: Executive Function Impairments",
      "Safren, S. A., et al. (2010). Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms",
      "Ramsay, J. R., & Rostain, A. L. (2015). The adult ADHD tool kit: Using CBT to facilitate coping inside and out"
    ]
  },
  apoio_emocional: {
    title: "Apoio Emocional e Compreensão Mútua",
    content: `
      <h3>Construindo um ambiente de apoio:</h3>
      <p>O apoio emocional é fundamental para relacionamentos onde o TDAH está presente.</p>
      
      <h4>Estratégias de apoio:</h4>
      <ul>
        <li><strong>Praticar paciência:</strong> Entender que nem toda distração é falta de interesse</li>
        <li><strong>Acolher as crises:</strong> Reconhecer momentos de sobrecarga sem julgamento</li>
        <li><strong>Apoio sem críticas:</strong> Ajudar a identificar barreiras e encontrar soluções juntos</li>
        <li><strong>Validação emocional:</strong> Reconhecer e validar os sentimentos do parceiro</li>
        <li><strong>Celebrar conquistas:</strong> Reconhecer progressos, mesmo os pequenos</li>
      </ul>

      <h4>Desenvolvendo empatia:</h4>
      <ul>
        <li>Aprender sobre o TDAH e seus impactos</li>
        <li>Reconhecer que comportamentos não são intencionais</li>
        <li>Compreender as dificuldades neurobiológicas</li>
        <li>Valorizar as qualidades únicas do parceiro com TDAH</li>
      </ul>

      <h4>Cuidando de si mesmo:</h4>
      <ul>
        <li>Estabelecer limites saudáveis</li>
        <li>Buscar apoio quando necessário</li>
        <li>Manter atividades e interesses próprios</li>
        <li>Praticar autocuidado regularmente</li>
      </ul>
    `,
    sources: [
      "Ramsay, J. (2017). The relevance of cognitive distortions in the psychosocial treatment of adult ADHD",
      "Associação Brasileira do Déficit de Atenção (ABDA). Estratégias para relacionamentos com TDAH",
      "Wymbs, B., & Molina, B. (2015). Integrative Couples Group Treatment for Emerging Adults With ADHD Symptoms"
    ]
  },
  gestao_conflitos: {
    title: "Gestão de Conflitos em Relacionamentos com TDAH",
    content: `
      <h3>Técnicas para resolver conflitos:</h3>
      <p>Conflitos são normais, mas casais com TDAH podem se beneficiar de estratégias específicas.</p>
      
      <h4>Estratégias durante conflitos:</h4>
      <ul>
        <li><strong>Pausas estratégicas:</strong> Tempo para se acalmar antes de continuar a discussão</li>
        <li><strong>Foco no problema:</strong> Atacar o problema, não a pessoa</li>
        <li><strong>Linguagem não violenta:</strong> Expressar necessidades sem atacar</li>
        <li><strong>Escuta ativa:</strong> Realmente ouvir o ponto de vista do outro</li>
        <li><strong>Buscar soluções:</strong> Focar em como resolver, não em quem tem razão</li>
      </ul>

      <h4>Prevenção de conflitos:</h4>
      <ul>
        <li>Comunicação regular sobre necessidades e expectativas</li>
        <li>Estabelecer acordos claros sobre responsabilidades</li>
        <li>Check-ins regulares sobre o relacionamento</li>
        <li>Identificar gatilhos e padrões problemáticos</li>
      </ul>

      <h4>Após o conflito:</h4>
      <ul>
        <li>Responsabilização sem culpar o TDAH</li>
        <li>Pedidos de desculpa sinceros quando apropriado</li>
        <li>Planos concretos para evitar problemas similares</li>
        <li>Reafirmação do amor e compromisso mútuo</li>
      </ul>
    `,
    sources: [
      "Canú, W., & Wymbs, B. (2015). Novel Approaches to Cognitive-Behavioral Therapy for Adult ADHD. Cognitive and Behavioral Practice, 22, 111-115",
      "Knouse, L., & Mitchell, J. T. (2016). Cognitive-Behavioral Therapy for Adult ADHD. Clinical Case Studies",
      "Ramsay, J. (2017). The relevance of cognitive distortions in the psychosocial treatment of adult ADHD"
    ]
  }
};

const slides = [
  {
    id: 'intro',
    title: 'Minha História com o TDAH e Nós',
    subtitle: 'Um olhar carinhoso sobre nossa vida juntos',
    content: (
      <div className="intro-content">
        <div className="intro-image">
          <img src={euImage} alt="Vinícius" className="slide-image" />
        </div>
        <div className="intro-text">
          <div className="hand-drawn">
            <p>
              Olá, meu amor! Preparei esta apresentação com muito carinho para compartilharmos 
              um pouco mais sobre como o TDAH faz parte de mim e da nossa vida juntos.
            </p>
          </div>
          <div className="hand-drawn">
            <p>
              A ideia é que, ao final, a gente se entenda ainda melhor e encontre caminhos 
              para fortalecer nossa união.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'what-is-tdah',
    title: 'O que é TDAH?',
    subtitle: 'É como um superpoder... com um manual diferente!',
    content: (
      <div className="content-grid">
        <div className="text-container">
          <div className="hand-drawn">
            <h3>É como um superpoder... com um manual diferente!</h3>
            <p>
              O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é uma condição neurobiológica 
              que afeta a forma como o cérebro processa informações.
            </p>
            <p>
              Não é falta de vontade, nem preguiça. É uma diferença na forma como a atenção, 
              o controle de impulsos e a regulação da atividade funcionam.
            </p>
          </div>
          
          <div className="hand-drawn">
            <h3>Principais Características:</h3>
            <ul>
              <li>Dificuldade em manter a atenção e o foco</li>
              <li>Impulsividade (agir sem pensar)</li>
              <li>Hiperatividade (inquietude, energia extra)</li>
              <li>Dificuldade em organizar e planejar</li>
            </ul>
          </div>
        </div>
        
        <div className="content-single">
          <img src={adhdImage} alt="Cérebro com TDAH" className="slide-image" />
        </div>
      </div>
    )
  },
  {
    id: 'challenges',
    title: 'TDAH e Nossa Vida Juntos: Desafios',
    subtitle: 'Às vezes parece que estou em outro planeta, mas prometo que estou tentando ficar aqui com você.',
    content: (
      <div className="content-grid">
        <div className="content-single">
          <div className="animated-container">
            <img src={euDuvidaImage} alt="Desafios do TDAH" className="slide-image" />
            <div className="animated-object object-1">💭</div>
            <div className="animated-object object-2">⚡</div>
            <div className="animated-object object-3">❓</div>
            <div className="animated-object object-4">⏰</div>
            <div className="animated-object object-5">🧠</div>
          </div>
          <div className="hand-drawn" style={{marginTop: '15px', textAlign: 'center'}}>
            <p style={{fontStyle: 'italic', fontSize: '1rem'}}>
              "Às vezes parece que estou em outro planeta, mas prometo que estou tentando ficar aqui com você."
            </p>
          </div>
        </div>
        
        <div className="text-container">
          <div className="hand-drawn clickable-info" data-info="comunicacao">
            <h3>👥 Comunicação</h3>
            <ul>
              <li>Dificuldade em manter o foco nas conversas</li>
              <li>Interrupções frequentes</li>
              <li>Esquecimento de detalhes importantes</li>
            </ul>
            <div className="click-hint">Clique para saber mais</div>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="organizacao">
            <h3>📅 Organização e Planejamento</h3>
            <ul>
              <li>Procrastinação e deixar as coisas para última hora</li>
              <li>Dificuldade em planejar atividades juntos</li>
              <li>Desorganização no ambiente compartilhado</li>
            </ul>
            <div className="click-hint">Clique para saber mais</div>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="emocoes">
            <h3>❤️ Impulsividade e Emoções</h3>
            <ul>
              <li>Decisões rápidas sem pensar nas consequências</li>
              <li>Variações de humor e sensibilidade à crítica</li>
              <li>Reações exageradas ou falas sem filtro</li>
            </ul>
            <div className="click-hint">Clique para saber mais</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'positive-aspects',
    title: 'Nem Tudo é Desafio!',
    subtitle: 'O TDAH também traz características incríveis',
    content: (
      <div className="content-grid">
        <div className="content-single">
          <img src={aspectosPositivosImage} alt="Aspectos positivos do TDAH" className="slide-image" />
        </div>
        
        <div className="text-container">
          <div className="hand-drawn clickable-info" data-info="criatividade">
            <h3>🎨 Criatividade</h3>
            <p>Penso fora da caixa e encontro soluções inovadoras</p>
            <div className="click-hint">Clique para saber mais</div>
          </div>
          
          <div className="hand-drawn">
            <h3>⚡ Energia e Entusiasmo</h3>
            <p>Quando algo me interessa, mergulho de cabeça</p>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="hiperfoco">
            <h3>🔍 Hiperfoco</h3>
            <p>Posso me concentrar intensamente em projetos que amo</p>
            <div className="click-hint">Clique para saber mais</div>
          </div>
          
          <div className="hand-drawn">
            <h3>💡 Espontaneidade</h3>
            <p>Trago aventura e surpresas para nossa vida</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'cbd-tdah',
    title: 'CBD e TDAH: Uma Nova Perspectiva',
    subtitle: 'Explorando alternativas naturais para o bem-estar',
    content: (
      <div className="content-grid">
        <div className="text-container">
          <div className="hand-drawn">
            <h3>🌿 O que é CBD?</h3>
            <p>
              O Canabidiol (CBD) é um composto natural da cannabis que não causa efeitos psicoativos. 
              Estudos recentes mostram potencial terapêutico para várias condições, incluindo TDAH.
            </p>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="cbd_concentracao">
            <h3>🧠 Benefícios Potenciais</h3>
            <ul>
              <li><strong>Concentração:</strong> Modula neurotransmissores da atenção</li>
              <li><strong>Ansiedade:</strong> Propriedades ansiolíticas</li>
              <li><strong>Sono:</strong> Regula o ciclo do sono</li>
              <li><strong>Impulsividade:</strong> Ajuda na regulação de impulsos</li>
            </ul>
            <div className="click-hint">Clique para saber mais</div>
          </div>
          
          <div className="cbd-highlight">
            <h4>⚠️ Importante!</h4>
            <p>
              O CBD deve ser sempre usado sob orientação médica. Cada pessoa responde de forma diferente.
            </p>
          </div>
        </div>
        
        <div className="text-container">
          <div className="hand-drawn">
            <h3>✅ O que Dizem os Estudos</h3>
            <ul>
              <li>Melhora na transmissão de dopamina</li>
              <li>Redução de tiques e hiperatividade</li>
              <li>Melhora nos processos cognitivos</li>
              <li>Alternativa aos estimulantes tradicionais</li>
            </ul>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="cbd_ansiedade">
            <h3>Como Pode Ajudar no Nosso Dia a Dia:</h3>
            <ul>
              <li>Maior tranquilidade nas conversas</li>
              <li>Melhor qualidade do sono</li>
              <li>Redução da ansiedade</li>
              <li>Facilidade para manter rotinas</li>
              <li>Menos irritabilidade e mais paciência</li>
            </ul>
            <div className="click-hint">Clique para saber mais</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'solutions',
    title: 'Nossas Soluções',
    subtitle: 'Com pequenos ajustes e muito amor, podemos transformar os desafios em oportunidades',
    content: (
      <div className="content-grid">
        <div className="content-single">
          <img src={lidandoComTdahImage} alt="Lidando com o TDAH" className="slide-image" />
        </div>
        
        <div className="text-container">
          <div className="hand-drawn">
            <h3>👥 Para a Comunicação</h3>
            <ul>
              <li>Momentos específicos para conversas importantes</li>
              <li>Usar lembretes visuais e anotações</li>
              <li>Praticar a escuta ativa com paciência</li>
            </ul>
          </div>
          
          <div className="hand-drawn">
            <h3>📅 Para a Organização</h3>
            <ul>
              <li>Criar rotinas simples e flexíveis</li>
              <li>Usar calendários compartilhados</li>
              <li>Dividir tarefas grandes em passos menores</li>
            </ul>
          </div>
          
          <div className="hand-drawn">
            <h3>❤️ Para o Relacionamento</h3>
            <ul>
              <li>Celebrar as pequenas vitórias juntos</li>
              <li>Ter conversas abertas sobre necessidades</li>
              <li>Praticar a compreensão e o perdão</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Ações Práticas para Nós Dois',
    subtitle: 'Estratégias para fortalecer nosso relacionamento',
    content: (
      <div className="content-grid">
        <div className="text-container">
          <div className="hand-drawn clickable-info" data-info="comunicacao_casal">
            <h3>💬 Comunicação Efetiva</h3>
            <p>Momentos sem distrações e escuta ativa</p>
            <div className="click-hint">Clique para detalhes</div>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="rotinas_casal">
            <h3>📅 Organização Conjunta</h3>
            <p>Calendários compartilhados e divisão de tarefas</p>
            <div className="click-hint">Clique para detalhes</div>
          </div>
          
          <div className="hand-drawn clickable-info" data-info="apoio_emocional">
            <h3>❤️ Apoio Emocional</h3>
            <p>Paciência, empatia e compreensão mútua</p>
            <div className="click-hint">Clique para detalhes</div>
          </div>
        </div>
        
        <div className="text-container">
          <div className="hand-drawn clickable-info" data-info="gestao_conflitos">
            <h3>🤝 Gestão de Conflitos</h3>
            <p>Técnicas para resolver desentendimentos</p>
            <div className="click-hint">Clique para detalhes</div>
          </div>
          
          <div className="hand-drawn">
            <h3>🏃‍♂️ Atividades Juntos</h3>
            <p>Exercícios, hobbies e momentos de qualidade</p>
          </div>
          
          <div className="hand-drawn">
            <h3>👨‍⚕️ Buscar Ajuda</h3>
            <p>Terapia de casal e acompanhamento profissional</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Juntos Somos Mais Fortes',
    subtitle: 'O TDAH faz parte de mim, mas não me define',
    content: (
      <div className="intro-content">
        <div className="intro-image">
          <img src={nosImage} alt="Casal feliz" className="slide-image" />
        </div>
        <div className="intro-text">
          <div className="hand-drawn">
            <p>
              O TDAH faz parte de mim, mas não me define. É apenas uma das muitas características que formam quem eu sou.
            </p>
          </div>
          
          <div className="hand-drawn">
            <p>
              Com sua compreensão, paciência e amor, posso ser a melhor versão de mim mesmo. 
              E juntos, podemos construir uma vida ainda mais rica e cheia de significado.
            </p>
          </div>
          
          <div className="hand-drawn" style={{textAlign: 'center'}}>
            <p style={{fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
              <Heart style={{color: '#e74c3c'}} size={20} />
              Obrigado por me amar como eu sou!
              <Heart style={{color: '#e74c3c'}} size={20} />
            </p>
          </div>
        </div>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalInfo, setModalInfo] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum distance for swipe detection
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openModal = (infoKey) => {
    setModalInfo(detailedInfo[infoKey]);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  // Touch event handlers for swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  // Handle clicks on clickable info elements
  React.useEffect(() => {
    const handleClick = (e) => {
      const clickableElement = e.target.closest('.clickable-info');
      if (clickableElement) {
        const infoKey = clickableElement.getAttribute('data-info');
        if (infoKey && detailedInfo[infoKey]) {
          openModal(infoKey);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="app-container inter-font">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <h1 className="nav-title">Minha História com o TDAH e Nós</h1>
          <div className="nav-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main 
        className="main-content"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="slide-container fade-in">
          {/* Slide Header */}
          <div className="slide-header">
            <h1 className="slide-title">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="slide-subtitle">
                {slide.subtitle}
              </p>
            )}
          </div>

          {/* Slide Content */}
          <div className="slide-content">
            {slide.content}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="nav-controls">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="nav-button"
          >
            <ChevronLeft size={16} style={{marginRight: '4px'}} />
            Anterior
          </button>

          <div className="slide-counter">
            {currentSlide + 1} de {slides.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="nav-button"
          >
            Próximo
            <ChevronRight size={16} style={{marginLeft: '4px'}} />
          </button>
        </div>
      </main>

      {/* Modal */}
      {modalInfo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{modalInfo.title}</h2>
              <button onClick={closeModal} className="modal-close">
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div dangerouslySetInnerHTML={{ __html: modalInfo.content }} />
              
              {modalInfo.sources && (
                <div className="modal-sources">
                  <h4>📚 Fontes Científicas:</h4>
                  <ul>
                    {modalInfo.sources.map((source, index) => (
                      <li key={index}>
                        <ExternalLink size={14} style={{marginRight: '8px'}} />
                        <a 
                          href={`https://scholar.google.com/scholar?q=${encodeURIComponent(source)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="source-link"
                        >
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

