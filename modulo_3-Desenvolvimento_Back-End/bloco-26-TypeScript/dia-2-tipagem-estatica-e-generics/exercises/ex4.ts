import PizzaVegetariana from "./ex4-PizzaVegetariana";
import PizzaComum from "./ex4-PizzaComum";
import PizzaDoce from "./ex4-PizzaDoce";

const calabresa: PizzaComum = {
    flavor: "Calabresa",
    slices: 6
}

const frango: PizzaComum = {
    flavor: "Frango",
    slices: 8
}

const pepperoni: PizzaComum = {
    flavor: "Pepperoni",
    slices: 6
}

console.log(calabresa);
console.log(pepperoni);
console.log(frango);

const marguerita: PizzaVegetariana = {
    flavor: "Marguerita",
    slices: 8
}

const palmito: PizzaVegetariana = {
    flavor: "Palmito",
    slices: 8
}

console.log(palmito);
console.log(marguerita);

const goiabadaEQueijo: PizzaDoce = {
    flavor: "Goiabada com Queijo",
    slices: 4
}

console.log(goiabadaEQueijo);