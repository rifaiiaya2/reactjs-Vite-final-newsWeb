import SignUp from "../../atoms/SignUp";

interface ICloseModal {
  closeModal: () => void;
}

const SignUpModal = ({ closeModal }: ICloseModal) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg">
      <SignUp />
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
);

export default SignUpModal;
