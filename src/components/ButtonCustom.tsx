import { Link } from "react-router-dom";
import "../css/ButtonCustom.css";

/**
 * This component renders a custom button.
 * @returns ButtonCustom component.
 */
function ButtonCustom({
  children,
  link,
  type,
  onClick,
  style,
}: {
  children: String;
  link?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}) {
  return (
    <button type={type} onClick={onClick} style={style}>
      {link ? (
        <Link to={link} className="button-link">
          {children}
        </Link>
      ) : (
        <p className="button-link">{children}</p>
      )}
    </button>
  );
}

export default ButtonCustom;
