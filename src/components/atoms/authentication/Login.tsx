import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../InputText";
import GradientText from "../GradientText";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbLogin2, TbPasswordUser } from "react-icons/tb";

interface ILoginProps {
  onToggle: () => void;
}
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = ({ onToggle }: ILoginProps) => {
  return (
    <div className="auth-container">
      <div className="formik-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
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
            <button type="submit" className="submit-btn">
              Sign In
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
        </Formik>
      </div>
    </div>
  );
};

export default Login;
