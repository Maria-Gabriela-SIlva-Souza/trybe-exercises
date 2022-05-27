import Pizza from './ex3-InterfacePizza'
import { TypePizzaDoce } from './ex4-TiposDePizza'

interface PizzaDoce extends Pizza {
  flavor: TypePizzaDoce
}

export default PizzaDoce;