import React from 'react'
import Chart from "chart.js"

//import "./Grafico.css"


function createConfig(name, type, ChartData) {
    console.log(ChartData)
    return (
        {
            type: type,
            options: {
                scales: { yAxes: [{ ticks: { min: 0 } }] },
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Valores totais: ' + name
                },
                // tooltips: {
                //     position: position,
                //     mode: 'index',
                //     intersect: false,
                // }
            },
            data: {
                labels: ChartData[0].data.map(d => d.label),
                datasets: [
                    {
                        label: ChartData[0].title,
                        data: ChartData[0].data.map(d => d.value),
                        backgroundColor: "#717"
                    },
                    {
                        label: ChartData[1].title,
                        data: ChartData[1].data.map(d => d.value),
                        backgroundColor: "#205"
                    }
                ]
            }
        }
    )
}

class Grafico extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {

        async function getData({ api, url }) {
            const response = await api.get(url)

            return response.data
        }
        getData(this.props).then(
            (ChartData) => {

                this.setState({ ChartData })

                const config = createConfig(this.props.name, this.props.type, this.state.ChartData)
                this.myChart = new Chart(this.chartRef.current,config );

            }
        );

    }

    render() {
        return (<canvas ref={this.chartRef} ></canvas>)
    }

}

export default Grafico;
