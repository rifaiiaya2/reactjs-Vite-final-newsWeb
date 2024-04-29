import { LinearGradient } from "react-text-gradients";

interface IGradientTextProps extends React.HTMLAttributes<HTMLHeadElement> {
  text: string;
}
const GradientText = ({ text, ...props }: IGradientTextProps) => {
  return (
    <h1 {...props}>
      <LinearGradient gradient={["to left", "#ff68f0 ,#e9be27, #d68270"]}>
        {text}
      </LinearGradient>
    </h1>
  );
};
export default GradientText;
