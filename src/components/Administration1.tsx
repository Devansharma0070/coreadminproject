import { Card } from "primereact/card";
import Layout from "./Layout/Layout";

import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useState } from "react";
import DummyReport from "./Dummyreport";
import { Button } from 'primereact/button';

interface names {
  name: string;
}

interface currency {
  currencies: string;
}

interface institution {
  institute: string;
}

interface tech {
  technology: string;
}

export default function Administration1() {
  const [Adcgroupname, setAdcgroupname] = useState<names | null>(null);
  const name: names[] = [
    { name: 'ANB Gift Card' },
    { name: 'ANB Payroll Card' },
    { name: 'CNB Payroll ADC Group' },
    { name: 'CPP ADC Group' },
    { name: 'CPP adc Group EMV 1' },
    { name: 'CPP adc Group EMV 2' },
    { name: 'CPP adc Group EMV 3' },
    { name: 'CPP adc Group EMV 4' },
    { name: 'CPP adc Group EMV 5' },
    { name: 'Chess Financial' },
    { name: 'Choctaw Nation Prepaid ADC' },
    { name: ' Conv Govt Assistance - CN ADC Group' },
    { name: '  Conv Govt Assistance - MCN ADC Group' },
    { name: '  Conveneient  Visa TravelMoney Card' },
    { name: ' Conveneint Visa Gift Card ' },
    { name: '  Convenient Visa Payroll ADC' },
    { name: '  CoreCard ADC Group' },
    { name: '  Demo Prepaid ADC Group' },
    { name: '  EMV4.0_MC' },
  ];

  const [Primarycurrency, setPrimarycurrency] = useState<currency | null>(null);
  const currencies: currency[] = [
    { currencies: 'rupees' },
    { currencies: 'Albanian Lek' },
    { currencies: 'Argentine Peso' },
    { currencies: 'Australian Dollar' },
    { currencies: 'Austrian Schilling' },
    { currencies: 'Bahraini Dinar' },
    { currencies: 'Belarussian Ruble' },
    { currencies: 'Belgian Franc' },
    { currencies: 'Belize Dollar' },
    { currencies: 'Bolivian Boliviano' },
    { currencies: 'Brazilian Real' },
    { currencies: 'Canadian Dollar' },
    { currencies: 'Chinese Yuan Renminbi' },
    { currencies: 'Costa Rican Colon' },
    { currencies: 'Danish Krone' },
    { currencies: 'Ecuador Sucre' },
    { currencies: 'Estonian Kroon' },
    { currencies: 'Finnish Markka' },
    { currencies: 'Guatemalan Quetzal' },
    { currencies: 'Hungarian Forint' },
    { currencies: 'Irish Pound' },
  ];

  const [Institution, setInstitution] = useState<institution | null>(null);
  const institute: institution[] = [
    { institute: 'Amarillo National Bank' },
    { institute: 'Australia and New Zealand Bank' },
    { institute: 'CFS' },
    { institute: 'CFS Bank' },
    { institute: 'CPP Card' },
    { institute: 'Community Federal Savings Bank - GRIT' },
    { institute: 'Demo institution' },
    { institute: 'First Century Bank' },
    { institute: 'First Century Bank-Praxell' },
    { institute: 'First Covenant Bank' },
    { institute: 'Northwest Federal Credit Union' },
    { institute: 'Test Inst' },
    { institute: 'Test Institute' },
    { institute: 'Test Institution' },
    { institute: 'US Connect' },
    { institute: 'First Century Bank-Praxell' },
  ];

  const [Cardtech, setCardtech] = useState<tech | null>(null);
  const technology: tech[] = [
    { technology: 'M/Chip 2.1 Lite' },
    { technology: 'M/Chip 2.1 Select' },
    { technology: 'M/Chip 4 Lite' },
    { technology: 'M/Chip 4 Select' },
    { technology: 'VSDC 1.4.0' },
    { technology: 'Magnetic Stripe' },
  ];

  const [showReport, setShowReport] = useState(false);

  const handleGoClick = () => {
    
      setShowReport(true);
   
  };

  return (
    <div>
      <Layout></Layout>

      <Card style={{ position: "absolute", left: 350, top: 122, width: 1400, height: 2000 }}>
            <h1 style={{textAlign:"left",fontFamily:"serif"}}>ADC Group</h1>
        <TabView>
          <TabPanel header="ADC">

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5px 69px"
            }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b><p>ADC Group Name</p></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown id="inputtext" value={Adcgroupname} onChange={(e: DropdownChangeEvent) => setAdcgroupname(e.value)} options={name} optionLabel="name"
                  placeholder="Select" className="w-full md:w-14rem" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b><p>Primary Currency Code</p></b> &nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown id="inputtext" value={Primarycurrency} onChange={(e: DropdownChangeEvent) => setPrimarycurrency(e.value)} options={currencies} optionLabel="currencies"
                  placeholder="Select" className="w-full md:w-14rem" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b><p>Institution</p></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown id="inputtext" value={Institution} onChange={(e: DropdownChangeEvent) => setInstitution(e.value)} options={institute} optionLabel="institute"
                  placeholder="Select" className="w-full md:w-14rem" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b><p>Card Technology</p></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown id="inputtext" value={Cardtech} onChange={(e: DropdownChangeEvent) => setCardtech(e.value)} options={technology} optionLabel="technology"
                  placeholder="Select" className="w-full md:w-14rem" />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button style={{position:"absolute",top:360,left:1100}} id="gobtn" label="Go" onClick={handleGoClick} className="p-button-primary" />
              </div>

            </div>
            {showReport && (
              <div>
                <br></br><br></br><br></br>
                <DummyReport></DummyReport>
              </div>
            )}
          </TabPanel>
          <TabPanel header="Product"></TabPanel>
        </TabView>

      </Card>

    </div>
  )
}
