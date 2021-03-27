import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import ItemList from "./ItemList";
import './assets/scss/style.scss';

function App() {

    // useCallback аналог useMemo оборачивает в каллбек но и его полностью и возвращает сам колбек


    const [ number, setNumber ] = useState(1);
    const [ colored, setColor ] = useState(false);

    const generateItemsFromAPI = useCallback(() => {
        return new Array(number).fill('').map((_, index) => `Элемент ${index + 1}`)
    }, [number])


    const styles = {
        color: colored ? 'red' : 'black'
    }


    return (
        <div className="App">
            <h1 style={styles}>
                number { number }
            </h1>
            <hr/>
            <ItemList getItems={generateItemsFromAPI}/>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => setNumber(prev => prev + 1)}
            >Добавить</button>
            <button
                className="btn btn-success"
                onClick={() => setColor(prev => !prev)}
            >Поменять цвет</button>
        </div>
    );
}

export default App;
