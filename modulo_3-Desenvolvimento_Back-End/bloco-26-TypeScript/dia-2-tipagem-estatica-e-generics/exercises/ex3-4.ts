//  Ex 3

type fatias = 4 | 6 | 8

interface Pizza {
  flavor: string;
  slices: fatias;
}

const Calabreza: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

const Marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}

const Nutela: Pizza = {
  flavor: "Nutela",
  slices: 4
}

// Ex 4

type TypePizzaComum  =  "Calabresa" | "Frango" | "Pepperoni"
type TypePizzaVegetariana  =  "Marguerita" | "Palmito" | "Cogumelo"
type TypePizzaDoce  =  "Nutela" | "Goiabada com Queijo" | "Marshmallow"

interface PizzaComum extends Pizza {
  flavor: TypePizzaComum
}

interface PizzaVegetariana  extends Pizza {
  flavor: TypePizzaVegetariana
}

interface PizzaDoce extends Pizza {
  flavor: TypePizzaDoce,
  slices: 4
}
