import { useState } from "react"
import { useEffect } from "react";
import  axios  from "axios";
function Boxes() {
    const [boxes, setBoxes] = useState()
    useEffect(()=>{
   axios
    .get("https://individual-work.onrender.com/boxes")
    .then((result) =>{
        console.log(result)
        setBoxes(result.data) })
    .catch((erro) => {console.error(erro)});
 })
    return (
        <div className='content product-grid'>
        {boxes?.map((box) => (
       <button key={box.id}> {box.nome}<br/>R$:{box.preco}</button>
        ))}
        </div>
        );
        
}
export default Boxes