function makeChoice(choice) {
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices");
    const imageContainer = document.getElementById("image-container");

    imageContainer.innerHTML = ""; // Limpa a imagem anterior
    choicesContainer.innerHTML = ""; // Limpa as opções anteriores

    if (choice === 'explorar') {
        storyText.innerHTML = "Max decidiu explorar o mapa e logo se deparou com uma floresta encantada. Ele pode seguir para o norte ou para o sul. Qual direção ele deve escolher?";
        choicesContainer.innerHTML += '<button onclick="makeChoice(\'norte\')">Ir para o norte</button>';
        choicesContainer.innerHTML += '<button onclick="makeChoice(\'sul\')">Ir para o sul</button>';
        imageContainer.innerHTML = '<img src="/img/floresta_encantada.png" alt="Floresta Encantada">';
    } else if (choice === 'voltar') {
        storyText.innerHTML = "Max voltou para casa, mas sentiu que a aventura o aguardava. Ele decidiu voltar e explorar mais tarde. Fim!";
    } else if (choice === 'norte') {
        storyText.innerHTML = "Ao seguir para o norte, Max encontrou um lago mágico. Ele viu peixes coloridos e borboletas. O que Max deve fazer agora?";
        choicesContainer.innerHTML += '<button onclick="makeChoice(\'brincar\')">Brincar com os peixes</button>';
        choicesContainer.innerHTML += '<button onclick="makeChoice(\'explorar-lago\')">Explorar o lago</button>';
        imageContainer.innerHTML = '<img src="/img/lago_magico.png" alt="Lago Mágico">';
    } else if (choice === 'sul') {
        storyText.innerHTML = "Seguindo para o sul, Max encontrou um campo cheio de flores. Ele pode descansar ou procurar mais aventuras.";
        choicesContainer.innerHTML += '<button onclick="makeChoice(\'descansar\')">Descansar</button>';
        choicesContainer.innerHTML += '<button onclick="makeChoice(\'procurar\')">Procurar aventuras</button>';
        imageContainer.innerHTML = '<img src="/img/campo_flores.png" alt="Campo de Flores">';
    } else if (choice === 'brincar') {
        storyText.innerHTML = "Max brincou com os peixes e fez muitos amigos novos! Ele teve um dia incrível e voltou para casa feliz. Fim!";
    } else if (choice === 'explorar-lago') {
        storyText.innerHTML = "Enquanto explorava o lago, Max encontrou uma joia brilhante! Ele ficou famoso na floresta por suas aventuras. Fim!";
    } else if (choice === 'descansar') {
        storyText.innerHTML = "Max decidiu descansar e aproveitar a beleza do campo. Ele voltou para casa satisfeito. Fim!";
    } else if (choice === 'procurar') {
        storyText.innerHTML = "Max continuou sua aventura e encontrou muitos amigos pelo caminho, tornando-se um herói na floresta! Fim!";
    }
}
