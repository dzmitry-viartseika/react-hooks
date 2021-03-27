import React, { useState, useEffect, useRef, useMemo } from 'react'
import './assets/scss/style.scss';

function complexComplete(num) {
    let i  = 0;
    while (i < 100000000) i++
    return num * 2
}

function App() {

    const [ number, setNumber ] = useState(42);
    const [ colored, setColor ] = useState(false);


    // useMemo для кеширования данных и deps указываем свойство какое именно

    const computed = useMemo(() => complexComplete(number), [number]);

    // работа с объектами чтобы лишний раз не вызывался

    const styles = useMemo(() => ({
        color: colored ? 'red' : 'black'
    }), [colored])
    useEffect(() => {
        console.log('styles changed')
    }, [styles])


    console.log('styles', styles)

    return (
        <div className="App">
            <h1 style={styles}>
                number { computed }
            </h1>
            <button
                className="btn btn-primary"
                onClick={() => setNumber(prev => prev + 1)}
            >Добавить</button>
            <button
                className="btn btn-primary"
                onClick={() => setNumber(prev => prev - 1)}
            >Убавить</button>
            <button
                className="btn btn-success"
                onClick={() => setColor(prev => !prev)}
            >Поменять цвет</button>
        </div>
    );
}

export default App;
