import React from "react";
import { useNavigate } from "react-router-dom";

import "@/assets/styles/Register.scss";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchRegistrationWithEmail } from "@/redux/authSlice";

import Button from "@/components/UI/Button";
import Field from "@/components/UI/Field";

const Register = (): React.ReactNode => {
  const [email, setEmail] = React.useState("test123@gmail.com");
  const [password, setPassword] = React.useState("12345678");
  const [rep_password, setRep_Password] = React.useState("12345678");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userSliceData = useAppSelector((state) => state.userSlice);
  console.log(userSliceData);

  // TODO: Сделать обработчик ошибок для каждого поля с помощью хука useDebounce

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  async function onClick() {
    const userData = { email, password };

    const result = await dispatch(fetchRegistrationWithEmail(userData));

    if (result.payload === "@fetchLoginWithEmail") {
      console.log("ты черт картавый (регистрация)");
    }

    navigate("/");
  }

  return (
    <div className="register">
      <h2 className="register__title">Sign up</h2>
      <form onSubmit={onSubmit} className="register__form">
        <Field
          variant="auth"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="register__input"
          type="text"
          placeholder="Your login"
          name="email"
        />
        <Field
          variant="auth"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="register__input"
          type="password"
          placeholder="Your password"
          name="password"
        />
        <Field
          variant="auth"
          onChange={(e) => setRep_Password(e.target.value)}
          value={rep_password}
          className="register__input"
          type="password"
          placeholder="Your password"
          name="password"
        />
        <Button variant="auth" onClick={onClick}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
