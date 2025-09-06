import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import type { FormModel } from "../model/FormModel";

function UpdateOrder() {
  const [data, setFormData] = useState<FormModel[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const tableName = searchParams.get("tableName");
  const orders = searchParams.get("orders")
    ? JSON.parse(searchParams.get("orders")!)
    : [];

  console.log(tableName, orders);

  const handleFormSubmit = (form: FormModel) => {
    const cleanData: FormModel = {
      tableName: form.tableName,
      orders: [],
    };
    for (let i = 0; i < 8; i++) {
      if (form.orders[i]) {
        cleanData.orders.push(form.orders[i] as string);
      }
    }
    data.push(cleanData);
    console.log("Form submitted:", data);
  };
  const values: FormModel = {
    tableName: tableName ? parseInt(tableName) : 0,
    orders: orders || [],
  };
  return (
    <>
      <NavBar />
      <Form data={handleFormSubmit} values={values} />
    </>
  );
}
export default UpdateOrder;
