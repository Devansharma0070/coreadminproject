import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function BasicDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                { 
                    label: 'Total Spendings',
                    data: [340, 725, 500, 620, 480, 1000],
                    backgroundColor: [
                        'rgba(255, 143, 31, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(111, 32, 185, 0.2)',
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(8, 136, 221, 0.2)',
                        'rgba(0, 238, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(86, 70, 160)',
                        'rgba(207, 70, 70, 0.91)',
                        
                        'rgb(54, 162, 235)',
                        'rgb(23, 219, 98)'
                    ],
                    borderWidth: 2
                }
            ]
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration: 1500, 
                easing: 'easeInOutQuad', 
                onComplete: () => {
                    console.log('Animation Complete');
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    const goToReports = () => {
        navigate('/Reports');
    };

    return (
        <div className="card">
            <Chart style={{ marginLeft: -200, width: 420 }} type="bar" data={chartData} options={chartOptions} />
            <Button
                style={{
                    color: "#1f7ef2",
                    width: 40,
                    border: "solid",
                    borderColor: "whitesmoke",
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    marginTop: -260,
                    marginLeft: 195,
                    overflow: "hidden",
                    backgroundColor: "white",
                }}
                onClick={goToReports}
            >
                <img
                    src="src/Images/image.png"
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }}
                />
            </Button>
        </div>
    );
}
