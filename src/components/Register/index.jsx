import React from 'react';
import PasswordIcon from '../../img/passwordIcon.svg';
import './index.css';

function RegisterPage() {
  return (
    <form className="form">
      <h1 className="formTitle">Регистрация</h1>
      <div className="formFields">
        <input id="email" className="formField" placeholder="Адрес электронной почты" />
        <input id="password" className="formField formFieldPassword" type="password" placeholder="Пароль" />
        <input type="submit" className="formButton" value="Создать учетную запись" />
      </div>
    </form>
  );
}

export default RegisterPage;