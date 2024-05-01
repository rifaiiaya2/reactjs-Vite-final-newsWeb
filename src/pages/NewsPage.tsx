import useAuthLogout from "../services/logoutServices";

const NewsPage = () => {
  const authLogout = useAuthLogout();
  return (
    <div className="flex justify-center">
      <div>News Page</div>
      <button
        type="button"
        onClick={authLogout}
        className=" w-40 bg-blue-500 text-white"
      >
        Logout
      </button>
    </div>
  );
};
export default NewsPage;
