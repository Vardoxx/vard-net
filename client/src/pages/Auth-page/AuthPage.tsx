import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LoginForm from "../../modules/Auth/LoginForm";
import RegistrationForm from "../../modules/Auth/RegistrationForm";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

const AuthPage = () => {
  const [formSwap, setFormSwap] = useState<string>("login");
  const navigate = useNavigate();

  const suppToken = useSelector((state: RootState) => state.getApiValues.token);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token || suppToken) {
      return navigate("/news");
    }
  }, [suppToken, navigate]);

  const handleFormSwap = () => {
    if (formSwap === "login") {
      setFormSwap("register");
    } else {
      setFormSwap("login");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <h1 className="text-5xl mb-5 title-shadow text-gray-200">
          {formSwap === "login" ? "ВХОД" : "РЕГИСТРАЦИЯ"}
        </h1>
        {formSwap === "login" ? <LoginForm /> : <RegistrationForm />}
        <p className="mt-4">
          {formSwap === "login" ? "Ещё нет аккаунта?" : "Уже есть аккаунт?"}
          <a
            onClick={handleFormSwap}
            className="cursor-pointer border-b-2 border-gray-800 text-black ml-2 font-black "
          >
            {formSwap === "login" ? "Зарегистрироваться" : "Войти"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
