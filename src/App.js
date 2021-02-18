import { defaults } from "lodash";
import React from "react";
import Button from "./Button";

const buttonA = <button onClick={btnClickConsole}>Primeiro botão</button>
const buttonB = <button onClick={btnClickAlert}>Segundo botão</button>
const buttonC = <button>Terceiro botão</button>
const buttonD = <button>Quarto botão</button>
const buttonE = <button>Quinto botão</button>
const hasCustomer = true
const ifelseButton = true
const ifelseRender = true
const showName = true

const btnClickAlert = () => {
    alert("Clique no botão A");
}

const btnClickConsole = () => {
    console.log('Botão Clicado...');
}

const listNames = [
    {
        id:1,
        name: 'Renato Soares',
        skils: ['VB6','Java','Mysql','JS']
    },
    {
        id:2,
        name: 'Bruno Ciclano',
        skils: ['VB6','Java','JS']
    },
    {
        id:3,
        name: 'João Fulano',
        skils: ['Fazer merda','Java']
    }
]

const renderButtonD = () =>(
    <div>
        <br/>
        Usar o botão D <br/>
        {buttonD}    
    </div>
);
const renderButtonE = () =>(
    <div>
        <br/>
        Usar o botão E <br/>
        {buttonE}    
    </div>
);
const showMyName = ()=>{
    let comp = null
    if(showName){
        comp = (
        <div>
            <h2>Renato Soares</h2>
        </div>
        );
    return comp;
    }   
}

const renderNames = (listNames,index) => {
    return (
        <div>
            <li key={'listNames-'+listNames.id}>{listNames.name}</li>
            {listNames.skils.map(renderSkils)}
        </div>
    );
}

const renderSkils = (skils,index) => {
    return(               
        <div key={'skil-' + index} style={{paddingLeft: '30px'}} >
            <li>{skils}</li>
        </div>
    );
}

const handleChange = (e) => {
    let {value} = e.target
    console.log(value)
}
const App = () =>{
    return(
        <div>
            <p>Digital innovation one</p>
            <p>Bem vindo ....</p>
            <Button onClick={() => {
                alert("Botão clicado");
            } } name= "Clique aqui" />
            <p>Mostra ai hot reaload</p>      
            /*utilizando o operador && para exibir um botaõ */      
            {hasCustomer && (
                <div>
                    <br/>
                    Usar o botão A <br/>
                    {buttonA}    
                </div>
            )}          
            <br/>           
            /*utilizando o operador ? como if else para exibir um ou outro botão */      
            {ifelseButton ?(
                <div>
                    <br/>
                    Usar o botão B <br/>
                    {buttonB}    
                </div>
            ):(
                <div>
                    <br/>
                    Usar o botão C <br/>
                    {buttonC}    
                </div>
            )}        
            <br/>
            /**Uma forma mais limpa de escrever o mesmo compartamento acima seria criando as funções de render
            * como são mostradas abaixo utilizando as funções render declaradas acima..
            */    
            {ifelseRender ? (renderButtonD()):(renderButtonE())}
            <br/>
            /**Evitando que um componente seja renderizado showMyName utiliza showName */
            {showMyName()}
            <br/>
            /**Exibindo uma lista de componentes */
            <div>
                <ul>
                    {listNames.map(renderNames)}
                </ul>
            </div>
            <input onChange={handleChange}></input>
        </div>        
    );
};

export default App;