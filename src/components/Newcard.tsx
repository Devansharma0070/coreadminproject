import Layout from "./Layout/Layout";
import "./Newcard.css";
import { TabView, TabPanel } from 'primereact/tabview';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dropdown } from 'primereact/dropdown';
import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputOtp } from 'primereact/inputotp';
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";

export default function Newcard() {
  const items: MenuItem[] = [{ label: 'New Card' }];
  const home: MenuItem = { icon: '' };

  const [token, setTokens] = useState();
  const [selectedCity, setSelectedCity] = useState(null);
  const [address, setaddress] = useState(null);
  const toast = useRef<Toast>(null);

  const handleSubmit = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Form submitted successfully.",
    });
  };

  const handleLoadCards = () => {
    toast.current?.show({
      severity: "info",
      summary: "Info",
      detail: "Loading cards is currently disabled.",
    });
  };

  const states = [
    { name: 'Andhra Pradesh', code: 'AP' },
    { name: 'Arunachal Pradesh', code: 'AR' },
    { name: 'Assam', code: 'AS' },
    { name: 'Bihar', code: 'BR' },
    { name: 'Chhattisgarh', code: 'CG' },
    { name: 'Goa', code: 'GA' },
    { name: 'Gujarat', code: 'GJ' },
    { name: 'Haryana', code: 'HR' },
  ];

  const add = [
    { name: 'Cardholder Address' },
    { name: 'Office Address' },
    { name: 'Other Address' },
  ];

  return (
    <div>
      <Toast ref={toast} />
      <Layout />

      <div id="Tabview">
        <Card>
          <BreadCrumb id="Breadcrumb" model={items} home={home} />
          <TabView style={{ marginTop: -48 }}>
            <TabPanel header={<span style={{ color: 'black' }}>Personalized</span>}>
              <Accordion activeIndex={0}>
                <AccordionTab
                  style={{ textAlign: "left", fontSize: "large", tableLayout: "fixed" }}
                  header="Personalized"
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Title:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Middle Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Name on Card:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Address:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>State:</p><Dropdown style={{ marginLeft: 208, marginTop: -45 }} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={states} optionLabel="name"
                      placeholder="Select a State" id="inputtext" />
                    <p>country:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Name on Card:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Secondary email:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Work phone no:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Mobile no:</p><br></br><InputText id="it1" style={{ marginLeft: 208, marginTop: -70 }}></InputText>
                    <b> <p>Shipping Details:</p></b>
                    <p>Shipping Address:</p><Dropdown style={{ marginLeft: 208, marginTop: -50 }} value={address} onChange={(e) => setaddress(e.value)} options={add} optionLabel="name"
                      placeholder="Select a address" id="inputtext" />
                    <p>Middle Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Shipping Address Line 1:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>City:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Zipcode:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", marginLeft: 500, marginTop: -940 }} >
                    <p>First Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Last Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Address:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>City:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Zipcode:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Primary Email Address:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Date Of Birth:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Home Phone Number</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Card Type Details:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <br></br>
                    <b><p>Social Security Number:</p></b><InputOtp style={{ marginLeft: 244, marginTop: -47 }} id="inputtext" value={token} onChange={(e) => setTokens(e.value)} />
                    <br></br>
                    <p>First Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Last Name</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Shipping Address line 2:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>State:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>country:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                  </div>

                  <div className="card flex justify-content-center">
                    <Button id="sumbitbtn" label="Submit" onClick={handleSubmit}></Button>
                  </div>

                  <div className="card flex justify-content-center">
                    <Button id="Loadbtn" label="Load Cards" disabled onClick={handleLoadCards} />
                  </div>
                </AccordionTab>
              </Accordion>
            </TabPanel>

            <TabPanel header={<span style={{ color: 'black' }}>Instant</span>}>
              <Accordion activeIndex={0}>
                <AccordionTab
                  style={{ textAlign: "left", color: "black", fontSize: "large" }}
                  header="Instant"
                >
                  <div style={{ display: "flex", flexDirection: "column" }} >
                    <p>Full Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Bulk Ship Address 1:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Country:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Quantity:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", marginLeft: 500, marginTop: -235, }}>
                    <p>Company Name:</p> <InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Bulk Ship Address 2</p>  <InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>State:</p> <InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Zip Code:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                  </div>
                </AccordionTab>
              </Accordion>
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </div>
  );
}
