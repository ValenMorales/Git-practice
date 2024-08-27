import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contacto</h3>
          <div className="contact-option">
            <img src="src/assets/icons/email.svg" />
            <p>Email: <a href="mailto:someemail@gmail.com">contacto-carsstore@gmail.com</a></p>
          </div>
          <div className="contact-option">
            <img src="src/assets/icons/phone.svg" />
            <p>+57 300 0000000</p>
          </div>
          <div className="contact-option">
          <img src="src/assets/icons/loc.svg" />
            <p>Car 21 #45-52, Manizales, Colombia</p>
          </div>
        </div>

        <div className="footer-media">
          <div className="footer-about">
            <h2>CarsStore</h2>
            <p>CarsStore es una tienda imaginaria usada como ejemplo para un proyecto de clase de dispositivos mobiles.</p>
          </div>
          
          <div className="footer-social">
            <a rel="noopener noreferrer">
              <img src="src/assets/icons/fb.svg" alt="Facebook" />
            </a>
            <a rel="noopener noreferrer">
              <img src="src/assets/icons/x.svg" alt="Twitter" />
            </a>
            <a rel="noopener noreferrer">
              <img src="src/assets/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Todos los derechos reservados &copy; 2024 - CarsStore 💙</p>
      </div>
    </footer>
  );
}
