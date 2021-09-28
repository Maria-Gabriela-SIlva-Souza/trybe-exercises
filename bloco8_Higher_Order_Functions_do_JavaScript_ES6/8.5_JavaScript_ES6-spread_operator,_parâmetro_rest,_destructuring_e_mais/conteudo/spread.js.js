// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Mexerica', 'Maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Nutella', 'Leite condensado', 'Fondue'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));