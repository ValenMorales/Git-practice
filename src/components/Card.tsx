import '../styles/Content_section.css'

export default function Card(props){
    return(
        <div className="card">
            <img className="card-img" src={props.img} alt="Car" />
        </div>
    );
}