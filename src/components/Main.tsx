import "../styles/Main.css";
import Card from './Card'

export default function Main() {
  return (
    <main className="main">
      <aside className="main__aside">aside</aside>
      <section className="main__products">
        <div className="title-container">
          <span className="title">Our sports line</span>
        </div>
        <div className="cars">
          <Card className="car-img" img="src/assets/pexels-bob-ronald-334686276-14832852.jpg"/>
          <Card className="car-img" img="src/assets/pexels-bertellifotografia-3007436.jpg"/>
        </div>
      </section>
    </main>
  );
}
