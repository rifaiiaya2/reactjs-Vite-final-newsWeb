import { FaWindowClose } from "react-icons/fa";
import Login from "../../atoms/authentication/Login";
import SignUp from "../../atoms/authentication/SignUp";
import { useState } from "react";

type AuthFormType = "login" | "signup";

interface IAuthModal {
  closeModal: () => void;
  formType: AuthFormType;
}

const AuthenticationModal = ({
  closeModal,
  formType: initialFormType,
}: IAuthModal) => {
  const [currentFormType, setCurrentFormType] = useState(initialFormType);

  const toggleForm = () => {
    setCurrentFormType(currentFormType === "login" ? "signup" : "login");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        {currentFormType === "login" ? (
          <Login onToggle={toggleForm} />
        ) : (
          <SignUp onToggle={toggleForm} />
        )}
        <button
          className="w-24 font-bold text-lg flex justify-center bg-red-600 text-white p-2 rounded-lg hover:bg-brightColor"
          onClick={closeModal}
        >
          <FaWindowClose size={24} className="mr-2" />
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthenticationModal;
