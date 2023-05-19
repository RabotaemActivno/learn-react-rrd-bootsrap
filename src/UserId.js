import { useParams, Link } from "react-router-dom";
import { Users } from "./Users";

export function UserId(props) {
    let {userName} = useParams();
    return (
        <div>
            <h1>User: {props.userNamee}</h1>
            <Link to='/users'>назад</Link>
        </div>
    )
}