import React from 'react';
import Table from './WibeleApp/Table/TableContainer';
import './App.scss';
import 'react-table/react-table.css'

const App = () => (
    <div className="App">
        <header className="App-header">        
            <h1 className="App-title">Welcome to WibeleApp</h1>
        </header>
        <Table />
    </div>
);

export default App;
