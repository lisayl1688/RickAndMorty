import { Link } from "react-router-dom";
import { Result } from "../../Interfaces/IRickMorty";
interface rickMortyProps {
    person: Result;
}

const SingleRickMorty: React.FC<rickMortyProps> = (props) => {

    return ( 

        <div className="item">
        <Link to={`/products/${props.person.id}`}>
            <h1>{props.person.name}</h1>
            <img src={props.person.image} alt="" />
            <p>{props.person.species}</p>
            

        </Link>

    </div>
    );
 
}
 
export default SingleRickMorty;