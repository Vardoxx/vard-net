import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../ui/CustomInput";
import CustomBtn from "../../ui/CustomBtn";
import { GiBeastEye, GiEyelashes } from "react-icons/gi";
import { useState } from "react";
import { InputType } from "../../types/customInput";
import { emailRegex } from "../../helpers/regexes/email";
import { useLoginUserMutation } from "../../store/services/auth.service";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setRole,
  setToken,
  setUserName,
} from "../../store/slices/auth.slice";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispath = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [showPass, setShowPass] = useState<InputType>("password");
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: IFormInput) => {
    const email = data.email;
    const password = data.password;
    if (!isValid) {
      return;
    }
    try {
      const { token, userName, role } = await loginUser({
        email,
        password,
      }).unwrap();
      dispath(setToken(token));
      dispath(setEmail(email));
      dispath(setUserName(userName));
      dispath(setRole(role));
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPass = () => {
    if (showPass === "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }
  };

  return (
    <form
      className="flex flex-col w-6/12 min-h-40 border-2 border-gray-400 p-6 rounded-2xl gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="min-h-6">
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Поле обязательно!",
            maxLength: {
              value: 255,
              message: "Превышено максимальное кол-во символов: 255!",
            },
            pattern: { value: emailRegex, message: "Почта не корректна!" },
          }}
          render={({ field }) => (
            <CustomInput
              {...field}
              placeholder="Почта"
              type="text"
              dirty={errors.email === undefined ? "none" : "2px solid red"}
            />
          )}
        />
      </div>

      <div className="mb-6 relative">
        <div className="min-h-6">
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Поле обязательно!",
            maxLength: {
              value: 255,
              message: "Превышено максимальное кол-во символов: 255!",
            },
          }}
          render={({ field }) => (
            <CustomInput
              {...field}
              placeholder="Пароль"
              type={showPass}
              dirty={errors.password === undefined ? "none" : "2px solid red"}
            />
          )}
        />
        {showPass === "password" ? (
          <GiBeastEye onClick={handleShowPass} className="password-eye" />
        ) : (
          <GiEyelashes onClick={handleShowPass} className="password-eye" />
        )}
      </div>

      <CustomBtn title="Войти" type="submit" />
    </form>
  );
};

export default LoginForm;
