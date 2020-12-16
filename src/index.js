import React from 'react';
import ReactDOM from 'react-dom';
import DataInput from "./Components/Entradas/DataInput";
import DataShow from "./Components/Saidas/DataShow";

ReactDOM.render(
    <div>
        <DataInput/>
        <DataShow/>
    </div>
    , document.getElementById('root')
);