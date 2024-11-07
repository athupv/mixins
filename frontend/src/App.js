import React from 'react';
import './App.css';
// import ItemList from './ItemList';
import ItemList from "./components/ItemList";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>My Django-React App</h2>
            </header>
            <ItemList />
        </div>
    );
}

export default App;
