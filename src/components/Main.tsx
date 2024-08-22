import "../styles/Main.css";
import '../styles/Content_section.css'
import Card from './Card'

export default function Main() {
  return (
    <main className="main">
      <aside className="main__aside">aside</aside>
      <section className="main__products">
        <Card img="src/assets/pexels-introspectivedsgn-5158198.jpg"/>
        <Card img="src/assets/pexels-bertellifotografia-10182908.jpg"/>
      </section>
    </main>
  );
}
