import React from 'react'
import DropDown from './DropDown/DropDown'
import "./DataInput.css";
class DataInput extends React.Component {

    render() {
        return (
        <section className = "di">
            <DropDown nome="Ano" lista={[2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]} />
            <DropDown nome="Mes" lista={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
            <DropDown nome="Tipo" lista={["icms", "ipi", "ipva"]} />
            <DropDown nome="Municipio" lista={["Russas", "Morada Nova", "Ocara"]} />
        </section>)
    }
}
export default DataInput;