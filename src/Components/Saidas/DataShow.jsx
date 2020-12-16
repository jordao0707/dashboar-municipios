import React from 'react';

import api from "../../Services/api"

import Mapa from './Mapa/Mapa';
import Numerico from "./Numerico/Numerico";
import Grafico from "./Graficos/Grafico";
import Tabela from "./Tabela/Tabela";
import "./DataShow.css";
const urlChartImpost = "http://localhost:3001/ChartDataImposto"

const urlChartAno = "http://localhost:3001/ChartDataAno"
const urlMap = "http://localhost:3001/CearaGeo"
const urlTable = "http://localhost:3001/CearaMunicipios"


class DataShow extends React.Component {
    render() {
        return (
            <div className="cotainer">
                <section className="dsn">
                    <Numerico nome="Valor Bruto" valor="333.335.35" />
                    <Numerico nome="Valor Líquido" valor="52.452" />
                    <Numerico nome="Percentual" valor="80.00" />
                </section>
                <section>
                    <div className="dsg">
                        <Grafico name="Imposto" type='horizontalBar' api={api} url={urlChartImpost} />
                    </div>
                    <div className="dsg">
                        <Grafico name="Ano" type='bar' api={api} url={urlChartAno} />
                    </div>
                </section>
                <section className ="dsr">
    
                    <div className="dsm">
                        <Mapa url={urlMap} />
                    </div>
                    <div className="dst">
                        <Tabela api={api} url={urlTable} />
                    </div>
                </section>
            </div>
        );
    }
}
export default DataShow;