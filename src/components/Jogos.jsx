import { useState } from "react"
import { useEffect } from "react";
import  axios  from "axios";
function Jogos() {
    const [jogos, setJogos] = useState()
    useEffect(()=>{
   axios
    .get("https://teste-igjg.onrender.com/jogos")
    .then((result) =>{
        console.log(result)
        setJogos(result.data) })
    .catch((erro) => {console.error(erro)});
 })
    return (
        <div className='content product-grid'>
        {jogos?.map((jogo) => (
       <div key={jogo.id} className="global"><img src={jogo.img} alt="myimage" className="myimage"/><br/>
       <br/><button class="bg-dark text-white">{jogo.nome}<br/>{jogo.jogadores}<br/>R$:{jogo.preco}</button> </div>
        ))}
        </div>
        );
        
}
export default Jogos
