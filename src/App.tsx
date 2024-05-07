import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import ProtectedRoute from "./components/atoms/authentication/ProtectedRoute";
import { ToastContainer } from "react-toastify";

const App = () => {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <BrowserRouter>
      <ToastContainer limit={1} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <NewsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
