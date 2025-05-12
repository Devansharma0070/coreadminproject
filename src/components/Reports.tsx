import { Card } from "primereact/card";
import Layout from "./Layout/Layout";
import './Report.css';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from "primereact/dropdown";
import { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import DummyReport from "./Dummyreport";
import Dummychart from "./Dummychart";
import Dummypiechart from "./Dummypiechart";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from "primereact/toast";

export default function Reports() {
    const [report, setReport] = useState(null);
    const [range, setRange] = useState(null);
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [date1, setDate1] = useState(null);
    const [showReport, setShowReport] = useState(false);
    const [showgraph, setShowgraph] = useState(false);
    const [showpie, setshowpie] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef<Toast>(null);

    const items: MenuItem[] = [{ label: 'Reports' }];
    const home: MenuItem = { icon: 'pi pi-file' };

    const type = [
        { name: 'Business Funding' },
        { name: 'Employee Report' }
    ];

    const ranges = [
        { name: "Today" },
        { name: "This Week" },
        { name: "Last Week" },
        { name: "Last Month" },
        { name: "Last Quarter" }
    ];

    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    const handleGoButtonClick = () => {
        if (!report || !range) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "Please select both a report and a range.",
            });
            return;
        }
        setShowReport(true);
        setShowgraph(false);
        setshowpie(false);
      
    };

    const handlegraph = () => {
        if (!report || !range) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "Please select both a report and a range.",
            });
            return;
        }
        setShowgraph(true);
        setShowReport(false);
        setshowpie(false);
    
    };

    const handlepie = () => {
        if (!report || !range) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "Please select both a report and a range.",
            });
            return;
        }
        setshowpie(true);
        setShowReport(false);
   
    };

    const handleTabChange = (e) => {
        setActiveIndex(e.index);
        setShowReport(false);
        setShowgraph(false);
        setshowpie(false);
        setReport(null);
        setRange(null);
    };

    const handleDialogSubmit = () => {
        if (!date || !date1) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "Please select both From Date and To Date.",
            });
            return;
        }
       
      
        hideDialog();
    };

    return (
        <div id="Tabview2">
            <Toast ref={toast} />
            <BreadCrumb style={{ position: "absolute", top: -55, left: 1, width: "108%" }} model={items} home={home} />
            <Layout />
            <Card id="cardcontainer">
                <TabView style={{ marginTop: -43 }} activeIndex={activeIndex} onTabChange={handleTabChange}>
                    <TabPanel header={<span style={{ color: 'black' }}>Buisness Account</span>}>
                        <Card className="cardreport">
                            <h4 style={{ textAlign: "left", position: "absolute", top: 135 }}>Select A Report</h4>
                            <Dropdown
                                style={{ position: "absolute", left: 220, top: 150 }}
                                value={report}
                                onChange={(e) => setReport(e.value)}
                                options={type}
                                optionLabel="name"
                                placeholder="Select a Report"
                                id="inputtextdropdown"
                            />

                            <h4 style={{ position: "absolute", left: 650, top: 135 }}>Select A Range</h4>
                            <Dropdown
                                style={{ position: "absolute", left: 790, top: 150 }}
                                value={range}
                                onChange={(e) => setRange(e.value)}
                                options={ranges}
                                optionLabel="name"
                                placeholder="Select Date Range"
                                id="inputtextdropdown"
                            />

                            <Button id="periodbtn" label="Period" onClick={showDialog} />
                            <Button id="gobtn" label="Go" onClick={handleGoButtonClick} />
                        </Card>
                        <br /><br />
                        <Card style={{ height: 300, marginLeft: -40 }} id="reportcard">
                            {showReport && <DummyReport />}
                        </Card>
                    </TabPanel>

                    <TabPanel header={<span style={{ color: 'black' }}>Card Management</span>}>
                        <Card className="cardreport1">
                            <h4 style={{ textAlign: "left", position: "absolute", top: 135 }}>Select A Report</h4>
                            <Dropdown
                                style={{ position: "absolute", left: 220, top: 150 }}
                                value={report}
                                onChange={(e) => setReport(e.value)}
                                options={type}
                                optionLabel="name"
                                placeholder="Select a Report"
                                id="inputtextdropdown"
                            />

                            <h4 style={{ position: "absolute", left: 650, top: 135 }}>Select A Range</h4>
                            <Dropdown
                                style={{ position: "absolute", left: 790, top: 150 }}
                                value={range}
                                onChange={(e) => setRange(e.value)}
                                options={ranges}
                                optionLabel="name"
                                placeholder="Select Date Range"
                                id="inputtextdropdown"
                            />

                            <Button id="periodbtn" label="Period" onClick={showDialog} />
                            <Button id="gobtn" label="Go" onClick={handlepie} />
                        </Card>

                        <Card style={{ height: 300, marginLeft: -40 }} id="piecard">
                            {showpie && <Dummypiechart />}
                        </Card>
                    </TabPanel>

                    <TabPanel header={<span style={{ color: 'black' }}>Expense Analysis</span>}>
                        <Card className="cardreport2">
                            <h4 style={{ textAlign: "left", position: "absolute", top: 135 }}>Select A Report</h4>
                            <Dropdown
                                style={{ position: "absolute", left: 220, top: 150 }}
                                value={report}
                                onChange={(e) => setReport(e.value)}
                                options={type}
                                optionLabel="name"
                                placeholder="Select a Report"
                                id="inputtextdropdown"
                            />

                            <h4 style={{ position: "absolute", left: 650, top: 135 }}>Select A Range</h4>
                            <Dropdown
                                style={{ position: "absolute", left: 790, top: 150 }}
                                value={range}
                                onChange={(e) => setRange(e.value)}
                                options={ranges}
                                optionLabel="name"
                                placeholder="Select Date Range"
                                id="inputtextdropdown"
                            />

                            <Button id="periodbtn" label="Period" onClick={showDialog} />
                            <Button id="gobtn" label="Go" onClick={handlegraph} />
                        </Card>
                        <br />
                        <Card style={{ height: 300, marginLeft: -40 }}>
                            {showgraph && (
                                <div id="graphcard">
                                    <Dummychart />
                                </div>
                            )}
                        </Card>
                    </TabPanel>
                </TabView>

                <Dialog
                    style={{ width: '30vw', height: '20vw' }}
                    header="Select Date Range"
                    visible={visible}
                    onHide={hideDialog}
                >
                    <p>From Date</p>
                    <Calendar id="inputtextdropdown" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
                    <p>To Date</p>
                    <Calendar id="inputtextdropdown" value={date1} onChange={(e) => setDate1(e.value)} view="month" dateFormat="mm/yy" />
                    <Button id="sumbitbtn1" label="Submit" onClick={handleDialogSubmit} />
                    <Button id="Closebtn" label="Close" onClick={hideDialog} />
                </Dialog>
            </Card>
        </div>
    );
}