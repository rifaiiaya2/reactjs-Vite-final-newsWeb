import Login from "../../atoms/Login";

interface ICloseModal {
  closeModal: () => void;
}

const LoginModal = ({ closeModal }: ICloseModal) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg">
      <Login />
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
);

export default LoginModal;
