import { useState } from "react";
import "../css/Form.css";
import type { FormModel } from "../model/FormModel";
import ButtonCustom from "./ButtonCustom";

/**
 * This component renders the form for creating a new table.
 * @param data - A callback function that receives the form data upon submission.
 * @param values - Initial values for the form fields, if any.
 * @returns Form component.
 */
function Form({
  data,
  values,
}: {
  data: (data: FormModel) => void;
  values: FormModel | null;
}) {
  const [count, setCount] = useState(0);
  const [tableName, setTableName] = useState(values?.tableName || undefined);
  const [orders, setOrders] = useState<string[]>(values?.orders || []);
  console.log(tableName);
  return (
    <div id="create-table-container">
      <form
        id="create-table-form"
        method="post"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();

          for (let i = 1; i < 6; i++) {
            const input = document.getElementById(`order${i}`);
            input?.setAttribute("hidden", "true");
          }
          if (orders.length > 0) {
            for (let i = 1; i < orders.length; i++) {
              const input = document.getElementById(`order${i}`);
              input?.removeAttribute("hidden");
            }
          }
          if (!tableName) return;
          data({ tableName, orders });
          setCount(0);
          setTableName(undefined);
          setOrders([]);
        }}
      >
        <input
          type="number"
          id="tableName"
          name="tableName"
          placeholder="Número da mesa"
          required
          onChange={(e) =>
            setTableName(e.target.value ? parseInt(e.target.value) : undefined)
          }
          value={tableName ? tableName : ""}
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
