import { useState } from "react"
import { useEffect } from "react";
import  axios  from "axios";
import Popup from "reactjs-popup";
function Livros() {
    const [livros, setLivro] = useState()
    useEffect(()=>{
   axios
    .get("https://teste-igjg.onrender.com/livros")
    .then((result) =>{
        console.log(result)
        setLivro(result.data) })
    .catch((erro) => {console.error(erro)});
 })
    return (
        <div className='content product-grid'>
        {livros?.map((livro) => {
            return (
                <div key={livro.id} className="global"> <img src={livro.img} alt="myimage" className="myimage" /><br/>
                  <Popup trigger={<button class="text-white">{livro.nome}<br/>R$:{livro.preco}</button>} modal nested>
                    {close => (<div class="bg-info text-white"><p>{livro.sinopse}</p><br/><button onClick={close}>Fechar</button></div>)}</Popup></div>
            );
        })}
        </div>
        );
        
}
export default Livros