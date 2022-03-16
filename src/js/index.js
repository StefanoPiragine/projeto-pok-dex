/*
Trocar o cartão visível pelo que foi selecionado no menu da pokédex

Pra isso vou manipular dois elementos:
1-- o cartão;
2-- o menu;

Inputs:
-Evento de clique feito pelo usuário

Outputs:
-Remover a classe 'aberto' do cartão e adicionar ao cartão selecionado
-Pescar o id do pokémon para identificar os cartões
-Remover classe 'ativo' do menu de navegação e adicionar ao pokémon selecionado
*/ 
// Criar constante Nomear constante = Arquivo 'index.html'.Função realizada('seleção') --> Query de seleção
const menuPokemon = document.querySelectorAll('.pokemon-menu')

menuPokemon.forEach(pokemon => {
    // Input de clique feito pelo usuário
    pokemon.addEventListener('click', () => {
        // Remover classe 'aberto' do cartão 
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Pegar o id ao clickar na seleção de pokemon
        const idPokemonSelecionado = pokemon.attributes.id.value

        // Adicionar 'aberto' no cartao selecionado
        const cartaoPokemonParaAbrir = document.getElementById('card-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const menuPokemonAtivo = document.querySelector('.ativo')
        menuPokemonAtivo.classList.remove('ativo')

        const menuPokemonParaAtivar = document.getElementById(idPokemonSelecionado)
        menuPokemonParaAtivar.classList.add('ativo')

    })
})
