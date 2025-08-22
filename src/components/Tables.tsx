import { Outlet } from "react-router-dom";
import "../css/Tables.css";
import ButtonCustom from "./ButtonCustom";

/**
 * This component renders the tables section of the application.
 * @returns Tables component.
 */
function Tables() {
  return (
    <>
      <div className="tables-container">
        <ButtonCustom link="/create-table">Abrir Mesa</ButtonCustom>
      </div>
      <Outlet />
    </>
  );
}
export default Tables;
