import { useState } from "react";
import "../css/Form.css";
import ButtonCustom from "./ButtonCustom";

/**
 * This component renders the form for creating a new table.
 * @returns Form component.
 */
function Form({ dados }: { dados: (data: FormData) => void }) {
  const [count, setCount] = useState(0);
  const [tableName, setTableName] = useState("");
  const [orders, setOrders] = useState<string[]>([]);
  return (
    <div id="create-table-container">
      <form
        id="create-table-form"
        method="post"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          console.log(tableName);
          setTableName("");
          setOrders([]);
          for (let i = 1; i < 6; i++) {
            const input = document.getElementById(`order${i}`);
            input?.setAttribute("hidden", "true");
          }
          setCount(0);
          dados(formData);
        }}
      >
        <input
          type="number"
          id="tableName"
          name="tableName"
          placeholder="Número da mesa"
          required
          onChange={(e) => setTableName(e.target.value)}
          value={tableName}
        />
        <input
          type="text"
          id="order"
          className="order-input"
          name="order"
          placeholder="pedido"
          required
          onChange={(e) => {
            const newOrders = [...orders];
            newOrders[0] = e.target.value;
            setOrders(newOrders);
          }}
          value={orders[0] || ""}
        />
        <input
          type="text"
          id="order1"
          className="order-input"
          name="order"
          placeholder="pedido"
          onChange={(e) => {
            const newOrders = [...orders];
            newOrders[1] = e.target.value;
            setOrders(newOrders);
          }}
          value={orders[1] || ""}
          hidden
        />
        <input
          type="text"
          id="order2"
          className="order-input"
          name="order"
          placeholder="pedido"
          onChange={(e) => {
            const newOrders = [...orders];
            newOrders[2] = e.target.value;
            setOrders(newOrders);
          }}
          value={orders[2] || ""}
          hidden
        />
        <input
          type="text"
          id="order3"
          className="order-input"
          name="order"
          placeholder="pedido"
          onChange={(e) => {
            const newOrders = [...orders];
            newOrders[3] = e.target.value;
            setOrders(newOrders);
          }}
          value={orders[3] || ""}
          hidden
        />
        <input
          type="text"
          id="order4"
          className="order-input"
          name="order"
          placeholder="pedido"
          onChange={(e) => {
            const newOrders = [...orders];
            newOrders[4] = e.target.value;
            setOrders(newOrders);
          }}
          value={orders[4] || ""}
          hidden
        />
        <input
          type="text"
          id="order5"
          className="order-input"
          name="order"
          placeholder="pedido"
          onChange={(e) => {
            const newOrders = [...orders];
            newOrders[5] = e.target.value;
            setOrders(newOrders);
          }}
          value={orders[5] || ""}
          hidden
        />

        <div className="form-buttons">
          <input type="submit" value="Criar Mesa" className="submit-button" />
          <ButtonCustom
            type="reset"
            onClick={(e) => {
              if (!e) return;
              e.preventDefault();
              setCount(count + 1);
              if (count < 6) {
                const input = document.getElementById(`order${count}`);
                input?.removeAttribute("hidden");
              }
            }}
            style={{
              padding: "0rem 1rem 0.5rem 0.5rem",
              width: "50%",
              height: "80%",
            }}
          >
            adicionar outro pedido
          </ButtonCustom>
        </div>
      </form>
    </div>
  );
}

export default Form;
