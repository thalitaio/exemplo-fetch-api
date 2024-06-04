// Adiciona um listener para o evento 'DOMContentLoaded', que é disparado quando o HTML inicial é completamente carregado e analisado
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o elemento HTML com ID 'pokemon-container'
    const pokemonContainer = document.getElementById('pokemon-container');
    // Define a URL base da API do Pokémon
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    // Função assíncrona para buscar os dados de um Pokémon pelo seu ID
    async function fetchPokemon(pokemonId) {
        // Faz uma requisição à API do Pokémon usando o ID fornecido
        const response = await fetch(`${apiUrl}${pokemonId}`);
        // Converte a resposta para um objeto JSON
        const data = await response.json();
        // Retorna os dados do Pokémon
        return data;
    }

    // Função para criar um card de Pokémon e adicioná-lo ao container
    function createPokemonCard(pokemon) {
        // Cria um elemento 'div' para o card do Pokémon
        const card = document.createElement('div');
        // Adiciona a classe 'pokemon-card' ao elemento 'div'
        card.classList.add('pokemon-card');

        // Obtém o nome do Pokémon
        const pokemonName = pokemon.name;
        // Obtém a URL da imagem do Pokémon
        const pokemonImg = pokemon.sprites.front_default;

        // Define o conteúdo HTML do card com o nome e a imagem do Pokémon
        card.innerHTML = `
            <h3>${pokemonName}</h3>
            <img src="${pokemonImg}" alt="${pokemonName}">
        `;

        // Adiciona o card ao container de Pokémon
        pokemonContainer.appendChild(card);
    }

    // Função assíncrona para buscar e exibir os primeiros 151 Pokémon (primeira geração)
    async function displayFirstGenerationPokemon() {
        // Loop para iterar sobre os IDs dos primeiros 151 Pokémon
        for (let i = 1; i <= 151; i++) {
            // Busca os dados do Pokémon pelo seu ID
            const pokemon = await fetchPokemon(i);
            // Cria e exibe o card do Pokémon
            createPokemonCard(pokemon);
        }
    }

    // Chama a função para exibir os primeiros 151 Pokémon quando o DOM estiver carregado
    displayFirstGenerationPokemon();
});
