import { useState } from "react";
import AuthenticationModal from "../../molecules/authModal/AuthenticationModal";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import GradientText from "../GradientText";
import "./Navbar.css";

type AuthFormType = "login" | "signup";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authForm, setAuthForm] = useState<AuthFormType>("login");

  const toggleModal = (formType: AuthFormType) => {
    setShowModal(!showModal);
    setAuthForm(formType);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMobileAuth = (formType: AuthFormType) => {
    setMenu(false);
    toggleModal(formType);
  };
  return (
    <div className="nav-container">
      <div>
        <div className="nav-window-container">
          <div className="gradient-nav-text-container">
            <GradientText
              text="Latest Word News"
              className="gradient-nav-text"
            ></GradientText>
          </div>
          <nav className="nav-sign-container">
            <button
              onClick={() => toggleModal("login")}
              className="btn-sign-up-in"
            >
              Sign-In
            </button>
            <button
              onClick={() => toggleModal("signup")}
              className="btn-sign-up-in"
            >
              {" "}
              Sign-Up
            </button>
          </nav>
          <div className="menu-container">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleMenu} />
            ) : (
              <HiOutlineMenuAlt1 size={28} onClick={handleMenu} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "translate-x-full"
          } mobile-menu-container`}
        >
          <button
            onClick={() => handleMobileAuth("login")}
            className=" btn-sign-up-in"
          >
            Sign-In
          </button>
          <hr className="mobile-separate-line" />
          <button
            onClick={() => handleMobileAuth("signup")}
            className=" btn-sign-up-in"
          >
            Sign-Up
          </button>
        </div>
      </div>
      {showModal && (
        <AuthenticationModal
          formType={authForm}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
