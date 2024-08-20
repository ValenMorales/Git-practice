import "../styles/Main.css";

export default function Main() {
  return (
    <main className="main">
      <aside className="main__aside">
        <h2 className="categories-title">Select your favorite category</h2>
        <ul className="categories-list">
          <li className="item-list">Mazda</li>
          <li className="item-list">Susuki</li>
          <li className="item-list">Chevrolet</li>
          <li className="item-list">Ford</li>
          <li className="item-list">Honda</li>
          <li className="item-list">Toyota</li>
        </ul>
      </aside>
      <section className="main__products">content for section</section>
    </main>
  );
}
