import { Link } from 'react-router-dom';

export default function Concept(props) {
    return (
        <li key={props.id} className='concept'>
            <img src={props.image} alt={props.title} />
            <div>
                <Link to={props.target} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>{props.title}</h2>
                </Link>
                <p>{props.description}</p>
            </div>
        </li>
    )
}