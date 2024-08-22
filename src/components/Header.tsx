import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <span>
          HotWheels 🛞🔥
        </span>
        <ul className="action-buttons">
          <li>Iniciar Sesión</li>
          <li>Registrarse</li>
        </ul>
      </div>
      <section className="nav-bar">
        <ul>
          <li className="route">Inicio</li>
          <li className="route">Nuestros vehiculos</li>
          <li className="route">Tu carrito</li>
        </ul>
      </section>
    </header>
  );
}
