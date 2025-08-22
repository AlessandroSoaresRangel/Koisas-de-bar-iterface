import { useState } from "react";
import "../css/Form.css";
import ButtonCustom from "./ButtonCustom";

/**
 * This component renders the form for creating a new table.
 * @returns Form component.
 */
function Form({ dados }: { dados: (data: FormData) => void }) {
  const [count, setCount] = useState(0);
  return (
    <div id="create-table-container">
      <form
        id="create-table-form"
        method="post"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          dados(formData);
        }}
      >
        <input
          type="number"
          id="tableName"
          name="tableName"
          placeholder="Número da mesa"
          required
        />
        <input
          type="text"
          id="order"
          className="order-input"
          name="order"
          placeholder="pedido"
          required
        />
        <div className="form-buttons">
          <input type="submit" value="Criar Mesa" className="submit-button" />
          <ButtonCustom
            type="reset"
            onClick={(e) => {
              if (!e) return;
              e.preventDefault();
              setCount(count + 1);
              if (count < 8) {
                const input = document.createElement("input");
                input.type = "text";
                input.name = `order${count}`;
                input.placeholder = "pedido";
                input.required = true;
                input.className = "order-input";
                document
                  .getElementById("create-table-form")
                  ?.insertBefore(input, document.getElementById("order"));
              }
            }}
            style={{
              padding: "0.3rem 1rem",
              width: "50%",
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
