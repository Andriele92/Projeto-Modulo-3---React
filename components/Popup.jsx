import React from "react";
import axios from "axios";
import popup from "../styles/Popup.css"
const Popup = () => {
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
          <div key={box.id}>{box.descricao}</div>
        ))}
        <button onClick={close}>close popup</button>
        </div>
        );
};
export default Popup