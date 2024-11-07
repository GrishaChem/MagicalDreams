import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "../Header/Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const headerRef = useRef(null);

  // Стейт для контролю видимості хедера
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const header = headerRef.current; // Доступ до елемента через реф

    // Функція, яка буде обчислювати процент прокрутки
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Поточна прокрутка в пікселях
      const documentHeight = document.documentElement.scrollHeight; // Висота всієї сторінки
      const windowHeight = window.innerHeight; // Висота вікна браузера

      // Відсоток прокрутки сторінки
      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Якщо прокручено більше ніж 50% сторінки, приховуємо хедер
      if (scrollPercentage > 50) {
        setIsVisible(false); // Змінюємо стейт, щоб хедер зник
      } else {
        setIsVisible(true); // Якщо менше 50%, хедер знову з'являється
      }
    };

    // Додаємо обробник події прокрутки
    window.addEventListener("scroll", handleScroll);

    // Очистка при демонтажі компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      ref={headerRef} // Прив'язуємо реф до хедера
      className={`flex justify-between items-center p-4 bg-gray-800 text-white fixed top-0 w-full left-0 z-10 transition-all ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <NavLink to="/" className="text-xl font-semibold">
        Home
      </NavLink>
      {isLoggedIn && (
        <div>
          <p>Welcome {user.name}</p>
        </div>
      )}
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/dreamList" className="hover:text-gray-400 transition">
            Dream-List
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink
                to="/register"
                className="hover:text-gray-400 transition"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-gray-400 transition">
                Log in
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className="text-gray-400 hover:text-gray-200"
          >
            Exit
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
