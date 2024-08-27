import '../styles/Card.css'

export default function Card(props: {img: string}) {
    return(
        <div className="card">
            <img className="card-img" src={props.img} alt="Car" />
        </div>
    );
}