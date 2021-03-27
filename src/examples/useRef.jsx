import React, { useState, useEffect, useRef } from 'react'
import './assets/scss/style.scss';

function App() {

    // useRef похож на useState
    // создает состояние и сохраняет его, но сам рендер не вызывает

    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');

    useEffect(() => {
        renderCount.current++
        console.log('inputRef', inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => {
        inputRef.current.focus()
    }

    console.log('renderCount', renderCount.current)

    return (
        <div className="App">
            <h1>
                Количество рендеров: { renderCount.current }
            </h1>
            <h2>Прошлое состояние: { prevValue.current }</h2>
            <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
