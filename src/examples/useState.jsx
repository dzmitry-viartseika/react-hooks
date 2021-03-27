import React, { useState } from 'react'
import './assets/scss/style.scss';

function computeUnitialCounter() {
    return Math.trunc(Math.random() * 20)
}

function App() {

    // useState не работает в условиях хук асинхронный

    // const [ counter, setCounter ] = useState(0); // array состояние [0] и вторая [1] функция позволяет изменять состояние
    const [counter, setCounter] = useState(() => {
        return computeUnitialCounter();
    })

    const [state, setState] = useState({
        title: 'Счётчик',
        date: Date.now()
    })

    function increment() {
        // сработает один раз
        setCounter(counter + 1)
        setCounter(counter + 1)
        // так сработает несколько раз увеличит на 2
        setCounter(prevCounter => prevCounter + 1)
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'Wertey',
                test: 101
            }
        })
    }

    function decrement() {
        counter <= 0 ? setCounter(0) : setCounter(counter - 1);
    }

    return (
        <div className="App">
            <h1>
                Счётчик { counter }
            </h1>
            <button
                onClick={increment}
                className="btn btn-success">
                Добавить
            </button>
            <button
                onClick={decrement  }
                className="btn btn-danger">
                Убавить
            </button>
            <button
                onClick={updateTitle}
                className="btn btn-primary">
                Изменить название
            </button>
            <hr/>
            <pre>{JSON.stringify(state)}</pre>
        </div>
    );
}

export default App;
