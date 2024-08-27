import { useState } from "react";
import RouteLabel from "./RouteLabel";
import "../styles/Header.css";

type Route = {
  key: number;
  content: string;
};

const routes: Route[] = [
  { key: 1, content: "Inicio" },
  { key: 2, content: "Nuestros vehiculos" },
  { key: 3, content: "Contacto" },
];

export default function Header() {
  const [activeKey, setActiveKey] = useState<number>(1);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Cars-Shop</h1>
        <ul className="header-action-buttons">
          <li className="header-action-button">
            <a href="#">Iniciar Sesion</a>
          </li>
          <li className="header-action-button">
            <a href="#">Registrarse</a>
          </li>
        </ul>
      </div>
      <section className="nav-bar">
        <ul className="nb-routes">
          {routes.map((route) => (
            <RouteLabel
              key={route.key}
              content={route.content}
              isActive={route.key === activeKey}
              changeActiveKey={() => setActiveKey(route.key)}
            />
          ))}
        </ul>
      </section>
    </header>
  );
}
