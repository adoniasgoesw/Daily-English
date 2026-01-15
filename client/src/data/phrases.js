/**
 * Banco de dados de frases organizadas por categoria
 * Cada categoria tem 5 frases mais comuns e usadas
 * Cada frase contém: phrase (inglês), translation (português), size (small/medium/large)
 */

export const phrasesByCategory = {
    'Common Words': [
        { phrase: 'I am happy', translation: 'Eu estou feliz', size: 'small' },
        { phrase: 'How are you today?', translation: 'Como você está hoje?', size: 'medium' },
        { phrase: 'I want to learn English because it is very important', translation: 'Eu quero aprender inglês porque é muito importante', size: 'large' },
        { phrase: 'Can you help me with this, please?', translation: 'Você pode me ajudar com isso, por favor?', size: 'large' },
        { phrase: 'Thank you very much for your help and support', translation: 'Muito obrigado pela sua ajuda e apoio', size: 'large' }
    ],
    'Family and Friends': [
        { phrase: 'I love my family', translation: 'Eu amo minha família', size: 'small' },
        { phrase: 'We are visiting my grandparents this weekend', translation: 'Vamos visitar meus avós neste fim de semana', size: 'medium' },
        { phrase: 'Happy birthday to my best friend!', translation: 'Feliz aniversário para meu melhor amigo!', size: 'medium' },
        { phrase: 'Family is the foundation of our lives and provides us with love, support, and guidance', translation: 'Família é a base de nossas vidas e nos fornece amor, apoio e orientação', size: 'large' },
        { phrase: 'We are planning a big celebration for our parents\' anniversary next month', translation: 'Estamos planejando uma grande celebração para o aniversário dos nossos pais no próximo mês', size: 'large' }
    ],
    'Home and Housing': [
        { phrase: 'This is my house', translation: 'Esta é minha casa', size: 'small' },
        { phrase: 'I need to clean my room today', translation: 'Preciso limpar meu quarto hoje', size: 'medium' },
        { phrase: 'The kitchen is the heart of the home', translation: 'A cozinha é o coração da casa', size: 'medium' },
        { phrase: 'We are renovating our house this summer to make it more comfortable', translation: 'Estamos reformando nossa casa neste verão para torná-la mais confortável', size: 'large' },
        { phrase: 'I feel safe and comfortable in my own house where I can relax and be myself', translation: 'Eu me sinto seguro e confortável na minha própria casa onde posso relaxar e ser eu mesmo', size: 'large' }
    ],
    'Shopping': [
        { phrase: 'I need to go shopping', translation: 'Preciso ir às compras', size: 'small' },
        { phrase: 'How much does this cost?', translation: 'Quanto custa isso?', size: 'medium' },
        { phrase: 'I am looking for a gift for my friend', translation: 'Estou procurando um presente para minha amiga', size: 'medium' },
        { phrase: 'Can I pay with credit card or do you only accept cash?', translation: 'Posso pagar com cartão de crédito ou vocês só aceitam dinheiro?', size: 'large' },
        { phrase: 'I found a great sale at the department store and bought several items at discounted prices', translation: 'Encontrei uma ótima promoção na loja de departamentos e comprei vários itens com preços reduzidos', size: 'large' }
    ],
    'Travel': [
        { phrase: 'I love to travel', translation: 'Eu amo viajar', size: 'small' },
        { phrase: 'We are going on vacation next month', translation: 'Vamos de férias no próximo mês', size: 'medium' },
        { phrase: 'I need to check in at the airport two hours before my flight', translation: 'Preciso fazer check-in no aeroporto duas horas antes do meu voo', size: 'large' },
        { phrase: 'The hotel has a beautiful view of the ocean and excellent service', translation: 'O hotel tem uma vista linda do oceano e um serviço excelente', size: 'large' },
        { phrase: 'Traveling allows us to experience different cultures and create unforgettable memories', translation: 'Viajar nos permite experimentar culturas diferentes e criar memórias inesquecíveis', size: 'large' }
    ],
    'Restaurant': [
        { phrase: 'I am hungry', translation: 'Estou com fome', size: 'small' },
        { phrase: 'Can I see the menu, please?', translation: 'Posso ver o cardápio, por favor?', size: 'medium' },
        { phrase: 'I would like to order the chicken with rice', translation: 'Gostaria de pedir o frango com arroz', size: 'medium' },
        { phrase: 'The food was delicious and the service was excellent', translation: 'A comida estava deliciosa e o atendimento foi excelente', size: 'large' },
        { phrase: 'Could we have the bill, please? We are ready to pay', translation: 'Podemos ter a conta, por favor? Estamos prontos para pagar', size: 'large' }
    ],
    'Food': [
        { phrase: 'I am hungry', translation: 'Estou com fome', size: 'small' },
        { phrase: 'The food is delicious', translation: 'A comida está deliciosa', size: 'medium' },
        { phrase: 'I love Italian food, especially pasta and pizza', translation: 'Eu amo comida italiana, especialmente macarrão e pizza', size: 'large' },
        { phrase: 'Healthy food is important for maintaining a balanced diet and good health', translation: 'Comida saudável é importante para manter uma dieta equilibrada e boa saúde', size: 'large' },
        { phrase: 'We ordered food from our favorite restaurant and it arrived hot and fresh', translation: 'Pedimos comida do nosso restaurante favorito e chegou quente e fresca', size: 'large' }
    ],
    'Work': [
        { phrase: 'I go to work', translation: 'Eu vou ao trabalho', size: 'small' },
        { phrase: 'I have a meeting at three o\'clock', translation: 'Tenho uma reunião às três horas', size: 'medium' },
        { phrase: 'My boss is very understanding and supportive', translation: 'Meu chefe é muito compreensivo e apoiador', size: 'medium' },
        { phrase: 'I enjoy working with my colleagues because we have a great team environment', translation: 'Gosto de trabalhar com meus colegas porque temos um ótimo ambiente de equipe', size: 'large' },
        { phrase: 'A good work-life balance is essential for maintaining productivity and personal happiness', translation: 'Um bom equilíbrio entre trabalho e vida pessoal é essencial para manter produtividade e felicidade pessoal', size: 'large' }
    ],
    'Animals': [
        { phrase: 'I have a dog', translation: 'Eu tenho um cachorro', size: 'small' },
        { phrase: 'My cat is very friendly', translation: 'Meu gato é muito amigável', size: 'medium' },
        { phrase: 'I walk my dog every morning in the park', translation: 'Eu passeio com meu cachorro toda manhã no parque', size: 'large' },
        { phrase: 'Animals are wonderful companions and bring joy to our lives', translation: 'Animais são companheiros maravilhosos e trazem alegria para nossas vidas', size: 'large' },
        { phrase: 'Taking care of pets teaches us responsibility and compassion', translation: 'Cuidar de animais de estimação nos ensina responsabilidade e compaixão', size: 'large' }
    ],
    'Numbers': [
        { phrase: 'I have one apple', translation: 'Eu tenho uma maçã', size: 'small' },
        { phrase: 'There are five people in my family', translation: 'Há cinco pessoas na minha família', size: 'medium' },
        { phrase: 'I need to count from one to ten', translation: 'Preciso contar de um a dez', size: 'medium' },
        { phrase: 'Numbers are essential for everyday life, from shopping to telling time', translation: 'Números são essenciais para a vida cotidiana, desde compras até dizer as horas', size: 'large' },
        { phrase: 'Learning numbers in English helps with communication and daily activities', translation: 'Aprender números em inglês ajuda com comunicação e atividades diárias', size: 'large' }
    ],
    'Colors': [
        { phrase: 'I like the color blue', translation: 'Eu gosto da cor azul', size: 'small' },
        { phrase: 'The sky is blue today', translation: 'O céu está azul hoje', size: 'medium' },
        { phrase: 'Red is my favorite color because it represents passion and energy', translation: 'Vermelho é minha cor favorita porque representa paixão e energia', size: 'large' },
        { phrase: 'Colors can affect our mood and emotions in different ways', translation: 'Cores podem afetar nosso humor e emoções de diferentes formas', size: 'large' },
        { phrase: 'I painted my room yellow to make it feel brighter and more cheerful', translation: 'Pintei meu quarto de amarelo para deixá-lo mais claro e alegre', size: 'large' }
    ],
    'Weather': [
        { phrase: 'It is sunny today', translation: 'Está ensolarado hoje', size: 'small' },
        { phrase: 'It is raining outside', translation: 'Está chovendo lá fora', size: 'medium' },
        { phrase: 'The weather is perfect for a picnic in the park', translation: 'O tempo está perfeito para um piquenique no parque', size: 'large' },
        { phrase: 'I love sunny days because I can go to the beach and enjoy the warm weather', translation: 'Eu amo dias ensolarados porque posso ir à praia e aproveitar o clima quente', size: 'large' },
        { phrase: 'The weather forecast says it will be cloudy with a chance of rain tomorrow', translation: 'A previsão do tempo diz que estará nublado com chance de chuva amanhã', size: 'large' }
    ],
    'Nature': [
        { phrase: 'I love nature', translation: 'Eu amo a natureza', size: 'small' },
        { phrase: 'The trees are beautiful in autumn', translation: 'As árvores estão lindas no outono', size: 'medium' },
        { phrase: 'We went hiking in the mountains and saw amazing views', translation: 'Fizemos trilha nas montanhas e vimos vistas incríveis', size: 'large' },
        { phrase: 'Nature provides us with peace, beauty, and a sense of connection to the world', translation: 'A natureza nos fornece paz, beleza e uma sensação de conexão com o mundo', size: 'large' },
        { phrase: 'Protecting nature is important for future generations to enjoy the same beautiful landscapes', translation: 'Proteger a natureza é importante para que as futuras gerações possam desfrutar das mesmas paisagens lindas', size: 'large' }
    ],
    'Sports': [
        { phrase: 'I play soccer', translation: 'Eu jogo futebol', size: 'small' },
        { phrase: 'We are going to watch the basketball game tonight', translation: 'Vamos assistir ao jogo de basquete esta noite', size: 'medium' },
        { phrase: 'Playing sports is a great way to stay healthy and have fun', translation: 'Praticar esportes é uma ótima forma de se manter saudável e se divertir', size: 'large' },
        { phrase: 'I enjoy swimming because it exercises my whole body and helps me relax', translation: 'Gosto de nadar porque exercita todo o meu corpo e me ajuda a relaxar', size: 'large' },
        { phrase: 'Sports teach us teamwork, discipline, and how to handle both victory and defeat', translation: 'Esportes nos ensinam trabalho em equipe, disciplina e como lidar com vitória e derrota', size: 'large' }
    ],
    'Health': [
        { phrase: 'I feel sick', translation: 'Estou me sentindo doente', size: 'small' },
        { phrase: 'I need to see a doctor', translation: 'Preciso ver um médico', size: 'medium' },
        { phrase: 'Taking care of your health is very important for a happy life', translation: 'Cuidar da sua saúde é muito importante para uma vida feliz', size: 'large' },
        { phrase: 'I go to the hospital for regular check-ups to make sure I am healthy', translation: 'Vou ao hospital para exames regulares para garantir que estou saudável', size: 'large' },
        { phrase: 'Prevention is better than cure, so I try to maintain a healthy lifestyle with exercise and good nutrition', translation: 'Prevenção é melhor que cura, então tento manter um estilo de vida saudável com exercícios e boa nutrição', size: 'large' }
    ],
    'Education': [
        { phrase: 'I go to school', translation: 'Eu vou à escola', size: 'small' },
        { phrase: 'I am studying English', translation: 'Estou estudando inglês', size: 'medium' },
        { phrase: 'Education is the key to success and personal development', translation: 'Educação é a chave para o sucesso e desenvolvimento pessoal', size: 'large' },
        { phrase: 'My teacher is very patient and always helps me understand difficult concepts', translation: 'Minha professora é muito paciente e sempre me ajuda a entender conceitos difíceis', size: 'large' },
        { phrase: 'Reading books is one of the best ways to learn new things and expand your knowledge', translation: 'Ler livros é uma das melhores formas de aprender coisas novas e expandir seu conhecimento', size: 'large' }
    ],
    'Technology': [
        { phrase: 'I use my computer every day', translation: 'Eu uso meu computador todos os dias', size: 'small' },
        { phrase: 'Can I use your phone to make a call?', translation: 'Posso usar seu telefone para fazer uma ligação?', size: 'medium' },
        { phrase: 'Technology has changed the way we communicate and work in modern society', translation: 'A tecnologia mudou a forma como nos comunicamos e trabalhamos na sociedade moderna', size: 'large' },
        { phrase: 'I check my email every morning to stay updated with important messages', translation: 'Verifico meu e-mail toda manhã para me manter atualizado com mensagens importantes', size: 'large' },
        { phrase: 'The internet has made it possible to connect with people from all over the world instantly', translation: 'A internet tornou possível conectar-se com pessoas de todo o mundo instantaneamente', size: 'large' }
    ],
    'Entertainment': [
        { phrase: 'I love movies', translation: 'Eu amo filmes', size: 'small' },
        { phrase: 'We are going to the theater tonight', translation: 'Vamos ao teatro esta noite', size: 'medium' },
        { phrase: 'Music is a universal language that brings people together', translation: 'Música é uma linguagem universal que une as pessoas', size: 'large' },
        { phrase: 'I enjoy watching movies on weekends as a way to relax and have fun', translation: 'Gosto de assistir filmes nos fins de semana como forma de relaxar e me divertir', size: 'large' },
        { phrase: 'Entertainment helps us escape from daily stress and provides joy and laughter in our lives', translation: 'Entretenimento nos ajuda a escapar do estresse diário e proporciona alegria e risos em nossas vidas', size: 'large' }
    ],
    'Transportation': [
        { phrase: 'I drive a car', translation: 'Eu dirijo um carro', size: 'small' },
        { phrase: 'I take the bus to work every day', translation: 'Eu pego o ônibus para o trabalho todos os dias', size: 'medium' },
        { phrase: 'Public transportation is convenient and helps reduce traffic in the city', translation: 'Transporte público é conveniente e ajuda a reduzir o trânsito na cidade', size: 'large' },
        { phrase: 'I prefer riding my bicycle to work because it is healthy and environmentally friendly', translation: 'Prefiro andar de bicicleta para o trabalho porque é saudável e ecologicamente correto', size: 'large' },
        { phrase: 'Modern transportation systems have made it easier to travel long distances in a short amount of time', translation: 'Sistemas modernos de transporte tornaram mais fácil viajar longas distâncias em pouco tempo', size: 'large' }
    ],
    'Clothing': [
        { phrase: 'I need new clothes', translation: 'Preciso de roupas novas', size: 'small' },
        { phrase: 'This shirt is too small for me', translation: 'Esta camisa é muito pequena para mim', size: 'medium' },
        { phrase: 'I am going to buy a new dress for the party', translation: 'Vou comprar um vestido novo para a festa', size: 'medium' },
        { phrase: 'Choosing the right clothes for different occasions is important for looking professional and appropriate', translation: 'Escolher as roupas certas para diferentes ocasiões é importante para parecer profissional e apropriado', size: 'large' },
        { phrase: 'I always check the weather before choosing what to wear to make sure I am comfortable', translation: 'Sempre verifico o tempo antes de escolher o que vestir para garantir que estou confortável', size: 'large' }
    ],
    'Body Parts': [
        { phrase: 'I have two hands', translation: 'Eu tenho duas mãos', size: 'small' },
        { phrase: 'My head hurts', translation: 'Minha cabeça dói', size: 'medium' },
        { phrase: 'I use my eyes to see and my ears to hear', translation: 'Eu uso meus olhos para ver e meus ouvidos para ouvir', size: 'large' },
        { phrase: 'Taking care of your body parts through exercise and healthy habits is essential for overall well-being', translation: 'Cuidar das partes do seu corpo através de exercícios e hábitos saudáveis é essencial para o bem-estar geral', size: 'large' },
        { phrase: 'Our body is an amazing machine where each part works together to keep us alive and functioning', translation: 'Nosso corpo é uma máquina incrível onde cada parte trabalha junto para nos manter vivos e funcionando', size: 'large' }
    ],
    'Time': [
        { phrase: 'What time is it?', translation: 'Que horas são?', size: 'small' },
        { phrase: 'I wake up at seven o\'clock every morning', translation: 'Eu acordo às sete horas toda manhã', size: 'medium' },
        { phrase: 'Time management is important for being productive and achieving your goals', translation: 'Gerenciamento de tempo é importante para ser produtivo e alcançar seus objetivos', size: 'large' },
        { phrase: 'I spend an hour every day studying English to improve my language skills', translation: 'Passo uma hora todos os dias estudando inglês para melhorar minhas habilidades no idioma', size: 'large' },
        { phrase: 'Time flies when you are having fun, but it seems to slow down when you are waiting for something important', translation: 'O tempo voa quando você está se divertindo, mas parece desacelerar quando você está esperando por algo importante', size: 'large' }
    ],
    'Emotions': [
        { phrase: 'I am happy', translation: 'Eu estou feliz', size: 'small' },
        { phrase: 'She looks sad today', translation: 'Ela parece triste hoje', size: 'medium' },
        { phrase: 'I feel happy when I spend time with my family and friends', translation: 'Eu me sinto feliz quando passo tempo com minha família e amigos', size: 'large' },
        { phrase: 'Understanding and expressing emotions is important for mental health and building relationships', translation: 'Entender e expressar emoções é importante para a saúde mental e construir relacionamentos', size: 'large' },
        { phrase: 'Love is one of the most powerful emotions that can bring people together and create lasting bonds', translation: 'Amor é uma das emoções mais poderosas que pode unir pessoas e criar laços duradouros', size: 'large' }
    ],
    'Verbs': [
        { phrase: 'I want to learn English', translation: 'Eu quero aprender inglês', size: 'small' },
        { phrase: 'Can you help me with this?', translation: 'Você pode me ajudar com isso?', size: 'medium' },
        { phrase: 'I need to go to the store to buy some groceries', translation: 'Preciso ir à loja para comprar algumas coisas', size: 'large' },
        { phrase: 'Learning to use verbs correctly is essential for speaking English fluently and clearly', translation: 'Aprender a usar verbos corretamente é essencial para falar inglês fluentemente e claramente', size: 'large' },
        { phrase: 'I try to practice speaking English every day to improve my communication skills', translation: 'Tento praticar falar inglês todos os dias para melhorar minhas habilidades de comunicação', size: 'large' }
    ]
}

// Mantém compatibilidade com código antigo (frases por palavra)
// Retorna frases da categoria da palavra atual
export const phrasesByWord = {}
