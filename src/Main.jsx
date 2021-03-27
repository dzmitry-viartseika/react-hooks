import React from 'react';

export default function Main({toggle, test}) {
    return (
        <>
            <h1>Привет в примере с Context props={ test }</h1>
            <button
                className="btn btn-success"
                onClick={toggle}
            >
                Показать alert
            </button>
        </>
    )
}
