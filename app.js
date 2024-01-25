import React from 'react';

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my MyApp</h1>
            <MyButton />
        </div>
    )
}