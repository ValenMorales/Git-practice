import '../styles/Brand.css';

export default function Brand(props: {
    img: string;
    name: string;
}){
    return (
        <div className="brand">
            <img className="brand__img" src={props.img} alt="logo"/>
            <span className="brand__name">{props.name}</span>
        </div>
    )
}