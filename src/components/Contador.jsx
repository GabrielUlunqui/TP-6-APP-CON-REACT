import { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(0);

return(

    <div>
        <h1>CONTADOR</h1>
        <p>{contador}</p>


        <div>
         <button
            onClick={() => setContador(contador - 1)}
            disabled={contador === 0}
            >
            -1    
            </button>
        <button 
            onClick={() => setContador(0)}
            >
            RESET
        </button>
         <button
            onClick={() => setContador(contador + 1)}
            >
            +1
        </button>
         
        </div>
    </div>
);
}
export default Contador
