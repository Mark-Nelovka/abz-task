import { Buttons } from "../../General/";
import Logo from "../../assets/images/abz-logo.png";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <span>
            <img src={Logo} alt="Logo" width={38} height={26} />
          </span>
          <span>TESTTASK</span>
          <div className="buttons-container">
            <Buttons text={"Users"} />
            <Buttons text={"Sign up"} />
          </div>
        </div>
      </div>
    </header>
  );
};
