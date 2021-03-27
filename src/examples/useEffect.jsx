import React, { useState, useEffect } from 'react'
import './assets/scss/style.scss';

function App() {

    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [ poss, setPos ] = useState({
        x: 0,
        y: 0
    })

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }

    console.log('data', data)

    // useEffect срабатывает каждый раз при рендере компонента + можно эмулировать хуки жизненные
    // deps от чего зависит useEffect если type изменился, то вызывается

    useEffect(() => {
        console.log('type change', type);
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type')
        }
    }, [type])

    useEffect(() => {
        console.log('componentDidMount')
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div className="App">
            <h1>Ресурс: { type }</h1>
            <button className="btn btn-primary" onClick={() => setType('users')}>Пользователи</button>
            <button className="btn btn-success" onClick={() => setType('todos')}>Туду</button>
            <button className="btn btn-danger" onClick={() => setType('posts')}>Посты</button>
            <hr/>
            { JSON.stringify(poss) }
            {/*<pre>{ JSON.stringify(data, null, 2) }</pre>*/}
        </div>
    );
}

export default App;
