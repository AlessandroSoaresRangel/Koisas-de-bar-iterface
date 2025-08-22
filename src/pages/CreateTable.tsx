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
  const [formData, setFormData] = useState<FormModel | null>(null);
  const handleFormSubmit = (form: FormData) => {
    const data = Object.fromEntries(form);
    const cleanData: FormModel = {
      tableName: data.tableName as string,
      orders: [],
    };
    data.order && cleanData.orders.push(data.order as string);
    for (let i = 0; i < 8; i++) {
      const orderKey = `order${i}`;
      if (data[orderKey]) {
        cleanData.orders.push(data[orderKey] as string);
      }
    }
    setFormData(cleanData);
    console.log("Form submitted:", cleanData);
  };
  return (
    <>
      <NavBar />
      <Form dados={handleFormSubmit} />
    </>
  );
}
export default CreateTable;
