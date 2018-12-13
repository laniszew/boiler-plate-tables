import React from 'react';
import Table from './Table/TableContainer';
import './App.scss';
import 'react-table/react-table.css'

const App = () => (
    <div className="App">
        <header className="App-header">        
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <Table />
    </div>
);

export default App;
