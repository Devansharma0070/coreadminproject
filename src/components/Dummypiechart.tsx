
import  { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PieChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    data: [340, 725, 500, 620, 480, 1000],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--red-500'), 
                        documentStyle.getPropertyValue('--orange-500'), 
                        documentStyle.getPropertyValue('--pink-500')
                        
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--red-500'), 
                        documentStyle.getPropertyValue('--orange-500'), 
                        documentStyle.getPropertyValue('--pink-500')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart style={{width:300,marginTop:"-76px"}} type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        