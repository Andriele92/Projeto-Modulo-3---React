import Style from "../styles/Sobre.css";
import Sobre2 from "../Pages/Sobre2";

function Sobre() {
  return (
    <div>
      <h2>Livraria React</h2>

      <p>
        <h4>
          Inaugurada em novembro 2022 com sede no rio de janeiro nossa livraria
          tem como principal <br></br> a qualidade em seus livros e revistas.
          Possuímos a uma entrega eficiente e com agilidade.
        </h4>

        <p>
          <h4>
            Se você está procurando um livro que ainda está em versão impressa e
            tem sido <br></br> difícil de encontrar, basta-nos enviar um email e
            vamos tentar localizar este para você. <br></br> Como a loja, o site
            é atualizado com freqüência, se você adicionar-se à nossa <br></br>
            mailing list você será avisado por e-mail sobre novas publicações de
            seu interesse
          </h4>
        </p>
        <br />
        <p>
          <h4> Sejam bem vindos! Esperamos sempre atendê-los. </h4>
        </p>
      </p>
      <Sobre2 />
    </div>
  );
}
export default Sobre;
