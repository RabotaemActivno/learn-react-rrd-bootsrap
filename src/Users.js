import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.css'

export function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch (
                    'https://jsonplaceholder.typicode.com/users'
                )
            ).json();

            setUsers(data);
        };

        dataFetch();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(json => setUsers(json))
        //     .catch(error => console.error(error, 'ошибка fetch-запроса'))
    }, [])

    return (
        <div className='users__wrapper'>
            <h1>Users</h1>
            <ul className="list-group">
                {
                    users.map(user => {
                        return (
                            <li className="list-group-item" key={user.id}><a href={`/users/${user.id}`} className="nav-link">{user.username}</a></li>
                        )
                    })
                }
                <li className="list-group-item"><a href='/users/ivanov' className="nav-link">Ivanov</a></li>
                <li className="list-group-item"><a href='/users/petrov' className="nav-link">Petrov</a></li>
            </ul>
        </div>
    )
}