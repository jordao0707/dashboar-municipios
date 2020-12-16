import React from 'react';
import './Tabela.css'
import DataTable, { defaultThemes } from 'react-data-table-component';


const customStyles = {
    responsive:true,
    header: {
        style: {
            minHeight: '56px',
        },
    },
    headRow: {
        style: {
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: defaultThemes.default.divider.default,
        },
    },
    headCells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#F0F',
            },
        },
    },
    cells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
            },
        },
    },
};

const columns = [
    {
        name: 'Nome',
        selector: 'municipio'
    },
    {
        name: "icms",
        selector: "icms_liquido"
    },
    {
        name: 'ipi',
        selector: 'ipi_liquido'
    },
    {
        name: 'ipva',
        selector: 'ipva_liquido'
    }
];
class Tabela extends React.Component {
    state = {}
    
    componentDidMount() {
        async function getData({api, url}) {
            return await api.get(url)
        }
        getData(this.props).then(
           ({data})=>{
            this.setState({ data })
        } 
        );
    };
    render() {
        return (
            <DataTable
                className="test"
                title="Movie List"
                columns={columns}
                customStyles={customStyles}

                data={
                    this.state.data
                }
            />
        )

    }
}

export default Tabela;