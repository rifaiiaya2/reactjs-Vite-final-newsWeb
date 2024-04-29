import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import GradientText from "../GradientText";
import LoginModal from "../../molecules/authModals/LoginModal";
import SignUpModal from "../../molecules/authModals/SignUpModal";
import "./Navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMobileLogin = () => {
    setMenu(false);
    setShowLoginModal(true);
  };
  const handleMobileSignUp = () => {
    setMenu(false);
    setShowSignUpModal(true);
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
            <button onClick={toggleLoginModal} className="btn-sign-up-in">
              Sign-In
            </button>
            <button onClick={toggleSignUpModal} className="btn-sign-up-in">
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
          <button onClick={handleMobileLogin} className=" btn-sign-up-in">
            Sign-In
          </button>
          <hr className="mobile-separate-line" />
          <button onClick={handleMobileSignUp} className=" btn-sign-up-in">
            Sign-Up
          </button>
        </div>
      </div>
      {showLoginModal && <LoginModal closeModal={toggleLoginModal} />}
      {showSignUpModal && <SignUpModal closeModal={toggleSignUpModal} />}
    </div>
  );
};

export default Navbar;
