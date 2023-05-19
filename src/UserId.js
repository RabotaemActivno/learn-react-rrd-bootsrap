import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'


export function UserId() {
    let {id} = useParams();
    const [data, setData] =useState()
    useEffect(async ()=>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(json => setData(json))
    })

    return (
        <div>
            <h1>User: {data.name}</h1>
            <p>City: {data.city}</p>
            <Link to='/users'>назад</Link>
        </div>
    )
}