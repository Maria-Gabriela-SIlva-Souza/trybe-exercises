import Pizza from './ex3-InterfacePizza'
import { TypePizzaVegetariana } from './ex4-TiposDePizza'

interface PizzaVegetariana extends Pizza {
  flavor: TypePizzaVegetariana
}

export default PizzaVegetariana;