import "../styles/Main.css";
import Card from './Card'
import Brand from './Brand'

export default function Main() {
  return (
    <main className="main">
      <section className="main_section">
        <aside className="main__aside">aside</aside>
        <section className="main__products">
          <div className="title-container">
            <span className="title">Our luxury line</span>
          </div>
          <div className="cars">
            <Card className="car-img" img="src/assets/pexels-bob-ronald-334686276-14832852.jpg"/>
            <Card className="car-img" img="src/assets/pexels-bertellifotografia-3007436.jpg"/>
          </div>
        </section>
      </section>
      <section className="brand-section">
        <Brand img="src/assets/peugeot-300x211.png" name="Peugeot"></Brand>
        <Brand img="src/assets/Renault-300x300.png" name="Renault"></Brand>
        <Brand img="src/assets/Seat-300x243.png" name="Seat"></Brand>
        <Brand img="src/assets/Ferrari-300x300.png" name="Ferrari"></Brand>
        <Brand img="src/assets/Lamborghini-263x300.png" name="Lamborghini"></Brand>
        <Brand img="src/assets/Subaru-300x175.png" name="Subaru"></Brand>
      </section>
    </main>
  );
}
