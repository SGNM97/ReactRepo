import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {
        const [state, setState] = useState(false);
   
    
    useEffect(() => {
        console.log("estoy")
        return () =>{
            console.log("Componente desmontado");
        };
    },[]);

    useEffect(() => {
        console.log("estoy")
    },[state]);

  return (
    <div>
        <p>{state ? "Es true" : "Es False"}</p>
        <button onClick={()=> {
            setState(!state);
        }}>
            Cambiar State
        </button>
    </div>
  )
}
