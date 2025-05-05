import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import * as XLSX from 'xlsx';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';
import './svndetails.css';
             
ChartJS.register(...registerables);

export default function ExcelDisplay() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const fileInputRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChartView, setIsChartView] = useState(false);                                                                                                        
    const [selectedChartType, setSelectedChartType] = useState('bar');

    const options = [
        { label: 'All', value: 'all' },
        { label: 'Machine Type', value: 'machineType' },
        { label: 'File', value: 'file' },
    ];

    const chartTypes = [
        { label: 'Bar Chart', value: 'bar' },
        { label: 'Line Chart', value: 'line' },
        { label: 'Pie Chart (Apex)', value: 'apexpie' },
    ];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];

            const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

            const cols = jsonData[0].map((header) => ({
                field: header,
                header: header,
            }));
            setColumns(cols);

            const rowData = jsonData.slice(1).map((row) => {
                const rowObj = {};
                cols.forEach((col, idx) => {
                    rowObj[col.field] = row[idx] || '';
                });
                return rowObj;
            });
            setData(rowData);
        };
        reader.readAsBinaryString(file);
    };

    const handleDropdownChange = (e) => {
        setSelectedOption(e.value);
    };

    const 
    
    handleToggleView = () => {
        setIsChartView(!isChartView);
    };

    const chartData = {
        labels: data.map(row => row[columns[0]?.field] || `Row ${data.indexOf(row) + 1}`),
        datasets: columns.slice(1).map((col, index) => ({
            label: col.header,
            data: data.map(row => parseFloat(row[col.field]) || 0),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ][index % 6],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ][index % 6],
            borderWidth: 2,
            barThickness: 25,
        })),
    };

    const chartOptions = {
        responsive: true,
        interaction: {
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rows',
                    font: { size: 16 },
                },
                ticks: {
                    font: { size: 12 },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Values',
                    font: { size: 16 },
                },
                ticks: {
                    font: { size: 12 },
                },
            }
        }
    };

    const apexPieChart = {
        series: data.map(row => Number(row[columns[1]?.field]) || 0),
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: data.map(row => String(row[columns[0]?.field])),
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: { width: 200 },
                        legend: { position: 'bottom' }
                    }
                }
            ],
            legend: {
                position: 'bottom'
            }
        }
    };

    return (
        <div>
            <h2 style={{ fontFamily: "inherit", fontSize: "xx-large", color: "#1282c7", marginLeft: -900 }}>SVN Details</h2>

            <Card id="svncard">
                <div className="flex align-items-center">
                    <input
                        type="file"
                        accept=".xlsx,.xls"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <Tooltip target="#svnbutton" content="Choose" position="bottom" />
                    <Button
                        id="svnbutton"
                        icon="pi pi-fw pi-file-excel"
                        label="Choose File"
                        className="p-button-rounded p-button-outlined"
                        onClick={() => fileInputRef.current.click()}
                    />
                    <Dropdown
                        id="svndropdown"
                        value={selectedOption}
                        options={options}
                        onChange={handleDropdownChange}
                        placeholder="Select an Option"
                        className="p-button-rounded p-button-outlined"
                        style={{ marginLeft: '1rem' }}
                    />
                    <Dropdown
                        id="chartTypeDropdown"
                        value={selectedChartType}
                        options={chartTypes}
                        onChange={(e) => setSelectedChartType(e.value)}
                        placeholder="Select Chart Type"
                        className="p-button-rounded p-button-outlined"
                        style={{ marginLeft: '1rem' }}
                    />
                    <Button
                        id="svntogglebutton"
                        label={isChartView ? 'Display Table' : 'Display Chart'}
                        className="p-button-rounded p-button-outlined"
                        style={{ marginLeft: '1rem' }}
                        onClick={handleToggleView}
                    />
                </div>

                {data.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        Please select an Excel file to view data.
                    </div>
                )}

                {!isChartView && data.length > 0 && (
                    <div id="svndatatable">
                        <DataTable value={data} paginator rows={5} responsiveLayout="scroll" sortMode="multiple">
                            {columns.map((col, idx) => (
                                <Column key={idx} field={col.field} header={col.header} sortable></Column>
                            ))}
                        </DataTable>
                    </div>
                )}

                {isChartView && data.length > 0 && (
                    <div style={{ width: "100%", height: '500px', margin: '20px 0' }}>
                        {selectedChartType === 'bar' && (
                            <Bar data={chartData} options={chartOptions} />
                        )}
                        {selectedChartType === 'line' && (
                            <Line data={chartData} options={chartOptions} />
                        )}
                        {selectedChartType === 'apexpie' && (
                            <ReactApexChart
                                options={apexPieChart.options}
                                series={apexPieChart.series}
                                type="pie"
                                width={600}
                            />
                        )}
                    </div>
                )}
            </Card>
        </div>
    );
}
