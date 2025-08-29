import { useState } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../css/createTable.css";
import type { FormModel } from "../model/FormModel";

/**
 * This component renders the create table page.
 * @returns CreateTable component.
 */
function CreateTable() {
  const [data, setFormData] = useState<FormModel[]>([]);
  const handleFormSubmit = (form: FormData) => {
    const dataFromForm = Object.fromEntries(form);
    const cleanData: FormModel = {
      tableName: dataFromForm.tableName as string,
      orders: [],
    };
    dataFromForm.order && cleanData.orders.push(dataFromForm.order as string);
    for (let i = 0; i < 8; i++) {
      const orderKey = `order${i}`;
      if (dataFromForm[orderKey]) {
        cleanData.orders.push(dataFromForm[orderKey] as string);
      }
    }
    data.push(cleanData);
    console.log("Form submitted:", data);
  };

  return (
    <>
      <NavBar />
      <Form dados={handleFormSubmit} />
    </>
  );
}
export default CreateTable;
