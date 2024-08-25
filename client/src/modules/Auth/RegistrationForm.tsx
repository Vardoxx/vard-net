import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../ui/CustomInput";
import CustomBtn from "../../ui/CustomBtn";
import { GiBeastEye, GiEyelashes } from "react-icons/gi";
import { useState } from "react";
import { InputType } from "../../types/customInput";
import { emailRegex } from "../../helpers/regexes/email";
import { useRegisterUserMutation } from "../../store/services/auth.service";

interface IFormInput {
  email: string;
  password: string;
  repeatPassword: string;
}

const RegistrationForm = () => {
  const [registerUser] = useRegisterUserMutation();
  const [showPass, setShowPass] = useState<InputType>("password");
  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: IFormInput) => {
    const email = data.email;
    const password = data.password;
    const repeatPassword = data.repeatPassword;

    if (password !== repeatPassword) {
      setError("repeatPassword", {
        message: "Пароли не совпадают",
      });
    } else if (!isValid) {
      return;
    } else {
      try {
        await registerUser({ email, password }).unwrap();
      } catch (error) {
        console.error(error);
      }
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

      <div className="relative">
        <div className="min-h-6">
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Поле обязательно!",
            minLength: { value: 6, message: "Минимальное кол-во символов: 6" },
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

      <div className="mb-6">
        <div className="min-h-6">
          {errors.repeatPassword && (
            <p className="text-red-600">{errors.repeatPassword.message}</p>
          )}
        </div>
        <Controller
          name="repeatPassword"
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
              placeholder="Повторите пароль"
              type="password"
              dirty={
                errors.repeatPassword === undefined ? "none" : "2px solid red"
              }
            />
          )}
        />
      </div>

      <CustomBtn title="Зарегистрироваться" type="submit" />
    </form>
  );
};

export default RegistrationForm;
