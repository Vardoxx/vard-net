import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LoginForm from "../../modules/Auth/LoginForm";
import RegistrationForm from "../../modules/Auth/RegistrationForm";
import { useSelector } from "react-redux";
import { Token } from "../../types/tokenState";

const AuthPage = () => {
  const [formSwap, setFormSwap] = useState<string>("login");
  const navigate = useNavigate();

  const suppToken = useSelector((state: Token) => state.token.token);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token || suppToken) {
      return navigate("/popular");
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
        <h1 className="glitch text-5xl mb-5">
          {formSwap === "login" ? "ВХОД" : "РЕГИСТРАЦИЯ"}
        </h1>
        {formSwap === "login" ? <LoginForm /> : <RegistrationForm />}
        <p className="mt-4">
          {formSwap === "login" ? "Ещё нет аккаунта?" : "Уже есть аккаунт?"}
          <a
            onClick={handleFormSwap}
            className="cursor-pointer glitch border-b-2 ml-2"
          >
            {formSwap === "login" ? "Зарегистрироваться" : "Войти"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
