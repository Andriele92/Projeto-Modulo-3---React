import { useState } from "react"
import { useEffect } from "react";
import  axios  from "axios";
function Livros() {
    const [livros, setLivro] = useState()
    useEffect(()=>{
   axios
    .get("https://individual-work.onrender.com/livros")
    .then((result) =>{
        console.log(result)
        setLivro(result.data) })
    .catch((erro) => {console.error(erro)});
 })
    return (
        <div className='content product-grid'>
        <h2>Livros</h2><br/>
        {livros?.map((livro) => (
       <button key={livro.id}> {livro.nome}<br/>R$:{livro.preco}</button>
        ))}
        </div>
        );
        
}
export default Livros