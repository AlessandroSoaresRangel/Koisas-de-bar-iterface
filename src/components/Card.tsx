import { Link } from "react-router-dom";
import "../css/Card.css";
import type { FormModel } from "../model/FormModel";

/**
 * Card component to display table information and orders
 *
 * @Params data - Array of FormModel objects used to show table details and orders.
 * @returns Card component.
 */
function Card({ data }: { data: FormModel[] }) {
  let orders: string[] = [];
  data.forEach((item) => {
    if (item.orders.length > 2) {
      orders = item.orders.slice(0, 2);
    }
  });
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div key={index} className="card-item">
          <Link
            to={`/update-order?tableName=${
              item.tableName
            }&orders=${JSON.stringify(item.orders)}`}
            key={index}
            className="card-link"
          >
            <h3>Table {item.tableName}</h3>
          </Link>
          {orders.map((order, orderIndex) => (
            <p key={orderIndex}>{order}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Card;
