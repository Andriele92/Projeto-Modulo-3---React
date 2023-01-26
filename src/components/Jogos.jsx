import { useState } from "react"
import { useEffect } from "react";
import  axios  from "axios";
function Jogos() {
    const [jogos, setJogos] = useState()
    useEffect(()=>{
   axios
    .get("https://individual-work.onrender.com/jogos")
    .then((result) =>{
        console.log(result)
        setJogos(result.data) })
    .catch((erro) => {console.error(erro)});
 })
    return (
        <div className='content product-grid'>
        {jogos?.map((jogo) => (
       <button key={jogo.id}> {jogo.nome}<br/>R$:{jogo.preco}</button>
        ))}
        </div>
        );
        
}
export default Jogos