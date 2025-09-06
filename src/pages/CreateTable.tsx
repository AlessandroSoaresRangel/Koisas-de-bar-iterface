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
  const handleFormSubmit = (form: FormModel) => {
    console.log(form);
    const cleanData: FormModel = {
      tableName: form.tableName,
      orders: [],
    };
    for (let i = 0; i < 8; i++) {
      if (form.orders[i]) {
        cleanData.orders.push(form.orders[i]);
      }
    }
    data.push(cleanData);
    console.log("Form submitted:", data);
  };

  return (
    <>
      <NavBar />
      <Form data={handleFormSubmit} values={null} />
    </>
  );
}
export default CreateTable;
