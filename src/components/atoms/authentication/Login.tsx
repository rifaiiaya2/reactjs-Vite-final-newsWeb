import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputText from "../InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GradientText from "../GradientText";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbLogin2, TbPasswordUser } from "react-icons/tb";
import { loginUser } from "../../../services/authServices";
import { setAuthToken } from "../../../redux/slices/authSlice";

interface ILoginProps {
  onToggle: () => void;
}
interface ILoginValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = ({ onToggle }: ILoginProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (
    values: ILoginValues,
    { setSubmitting }: FormikHelpers<ILoginValues>
  ) => {
    try {
      const response = await loginUser(values);
      dispatch(
        setAuthToken({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
      navigate("/news");
      setSubmitting(false);
    } catch (error) {
      console.error("Login error:", error);

      setSubmitting(false);
    }
  };
  return (
    <div className="auth-container">
      <div className="formik-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="form-style">
              <GradientText
                text="Sign in to your account"
                className="gradient-text-style"
              ></GradientText>
              <InputText
                name="email"
                type="email"
                placeholder="Enter your Email"
                Icon={MdOutlineAttachEmail}
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
                {isSubmitting ? "Sign In..." : "Sign In"}
                <TbLogin2 size={22} className="ml-1" />
              </button>
              <p className="text-style">
                Don't Have an Account?
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onToggle();
                  }}
                  className="toggle-btn"
                >
                  Sign-Up
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
