import Pizza from './ex3-InterfacePizza'
import { TypePizzaComum } from './ex4-TiposDePizza'

interface PizzaComum extends Pizza {
  flavor: TypePizzaComum
}

export default PizzaComum;