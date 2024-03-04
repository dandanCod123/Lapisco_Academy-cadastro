import "./styles.css";
import jpIMG2 from '../assets/image 5.png';
export const LayoutComponents = (props) => {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">{props.children}</div>
      </div>
       
    </div>
  );
};