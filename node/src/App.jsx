import { Componente } from "./Components/Componente"
import { FuncaoCoisa } from "./Components/FuncaoCoisa"


export function App(){
  return (
    <main>
      <Componente information={"aleatorio"} number={25} />
      <FuncaoCoisa coisa={"teste"} numeroDaCoisa={99} />
    </main>
  )
}
