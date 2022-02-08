// Criar um componente só para esse context

// PASSO 1 - Importação para criar um context
import { createContext } from "react"; 

// PASSO 2 - Criar uma constante para guardar o createContext
const MyContext = createContext()

// OBS - Na documentação ele aconseçha colocar dentro do createContext um defaultValue, que seria um valor padrão caso não tenha nenhum provedor (Provider)

// PASSO 3 - Exportar o context
export default MyContext;