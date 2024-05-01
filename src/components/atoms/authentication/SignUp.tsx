import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputText from "../InputText";
import GradientText from "../GradientText";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbLogin2, TbPasswordUser } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import "./authentication.css";
import { signupUser } from "../../../services/authServices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../../redux/slices/authSlice";

interface ISignUpProps {
  onToggle: () => void;
}
interface ISIgnUpValues {
  username: string;
  email: string;
  password: string;
}
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const SignUp = ({ onToggle }: ISignUpProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = async (
    values: ISIgnUpValues,
    { setSubmitting }: FormikHelpers<ISIgnUpValues>
  ) => {
    try {
      const response = await signupUser(values);
      dispatch(
        setAuthToken({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
      navigate("/news");
      setSubmitting(false);
    } catch (error) {
      console.error("SignUp error:", error);

      setSubmitting(false);
    }
  };
  return (
    <div className="auth-container">
      <div className="formik-container">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({ isSubmitting }) => (
            <Form className="form-style">
              <GradientText
                text="Create an account"
                className="gradient-text-style"
              ></GradientText>
              <InputText
                name="email"
                type="email"
                placeholder="Enter your Email"
                Icon={MdOutlineAttachEmail}
              />
              <InputText
                name="username"
                type="name"
                placeholder="Username"
                Icon={FaUserEdit}
              />

              <InputText
                name="password"
                type="password"
                placeholder="Enter Your Password"
                Icon={TbPasswordUser}
              />
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SignUp..." : "SignUp"}

                <TbLogin2 size={22} />
              </button>
              <p className="text-style">
                Already Have an Account?
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onToggle();
                  }}
                  className="toggle-btn"
                >
                  Sign-In
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
