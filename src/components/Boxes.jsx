import { useState } from "react"
import { useEffect } from "react";
import  axios  from "axios";
import Popup from "reactjs-popup";
import'../styles/img.css'
function Boxes() {
    const [boxes, setBoxes] = useState()
    useEffect(()=>{
   axios
    .get("https://teste-igjg.onrender.com/boxes")
    .then((result) =>{
        console.log(result)
        setBoxes(result.data) })
    .catch((erro) => {console.error(erro)});
 })
    return (
        <div className='content product-grid'>
        {boxes?.map((box) => (<div key={box.id} className="global"><img src={box.img} alt="myimage" className="myimage"/><br/>
                <Popup trigger={<button class="text-white"> {box.nome}<br/>R$:{box.preco}</button>} modal nested>{close => (<div class="bg-info text-white"><p>{box.descricao}</p> <br/><button onClick={close}>Fechar</button></div>)}
                </Popup></div>
        ))}
        </div>
        );
        
}
export default Boxes