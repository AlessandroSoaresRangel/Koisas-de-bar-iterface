import Card from "../components/Card";
import NavBar from "../components/NavBar";
import type { FormModel } from "../model/FormModel";
function Cards() {
  const data: FormModel[] = [
    {
      tableName: 1,
      orders: ["Order 1", "Order 2", "Order 3"],
    },
    {
      tableName: 2,
      orders: ["Order 4", "Order 5"],
    },
    {
      tableName: 3,
      orders: ["Order 6", "Order 7", "Order 8", "Order 9"],
    },
    {
      tableName: 4,
      orders: ["Order 10", "Order 11", "Order 12", "Order 13"],
    },
    {
      tableName: 5,
      orders: ["Order 14", "Order 15"],
    },
    {
      tableName: 6,
      orders: ["Order 16", "Order 17", "Order 18"],
    },
    {
      tableName: 7,
      orders: ["Order 19", "Order 20", "Order 21", "Order 22"],
    },
    {
      tableName: 8,
      orders: ["Order 23"],
    },
    {
      tableName: 9,
      orders: ["Order 24", "Order 25", "Order 26"],
    },
    {
      tableName: 10,
      orders: ["Order 27", "Order 28", "Order 29", "Order 30"],
    },

    {
      tableName: 11,
      orders: ["Order 31", "Order 32"],
    },
    {
      tableName: 12,
      orders: ["Order 33", "Order 34", "Order 35"],
    },

    {
      tableName: 13,
      orders: ["Order 36", "Order 37", "Order 38", "Order 39"],
    },

    {
      tableName: 14,
      orders: ["Order 40", "Order 41"],
    },
    {
      tableName: 15,
      orders: ["Order 42", "Order 43", "Order 44"],
    },
    {
      tableName: 16,
      orders: ["Order 45", "Order 46", "Order 47", "Order 48"],
    },
    {
      tableName: 17,
      orders: ["Order 49"],
    },
    {
      tableName: 18,
      orders: ["Order 50", "Order 51"],
    },
    {
      tableName: 19,
      orders: ["Order 52", "Order 53", "Order 54"],
    },
    {
      tableName: 20,
      orders: ["Order 55", "Order 56", "Order 57", "Order 58"],
    },
  ];
  return (
    <>
      <NavBar />
      <Card data={data} />
    </>
  );
}

export default Cards;
