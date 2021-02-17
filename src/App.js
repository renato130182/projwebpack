import { defaults } from "lodash";
import React from "react";
import Button from "./Button";
const App = () =>{
    return(
        <div>
            <p>Digital innovation one</p>
            <p>Bem vindo ....</p>
            <Button onClick={() => {
                alert("Botão clicado");
            } } name= "Clique aqui" />
            <p>Mostra ai hot reaload</p>
        </div>
    );
};

export default App;