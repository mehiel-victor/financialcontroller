import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Fone de ouvido</td>
            <td className="deposit">R$200.00</td>
            <td>Venda</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Fita led</td>
            <td className="withdraw">- R$90.00</td>
            <td>Compra</td>
            <td>21/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
} 