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
import { Instantdummydata } from "./Instantdummydata";


export default function Newcard() {
  const items: MenuItem[] = [{ label: 'New Card' }];
const home: MenuItem = { icon: 'pi pi-credit-card' };
  const [fullName, setFullName] = useState('');
  const [address1, setAddress1] = useState('');
  const [country, setCountry] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [address2, setAddress2] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [token, setTokens] = useState();
  const [selectedCity, setSelectedCity] = useState(null);
  const [address, setaddress] = useState(null);
  const toast = useRef<Toast>(null);
  const [showInstantData, setShowInstantData] = useState(false);


  const handleCreateAndDownload = () => {

    const data = {
      fullName,
      address1,
      country,
      quantity,
      CompanyName,
      address2,
      state,
      zipcode,

    };


    const fileContent = JSON.stringify(data, null, 2);


    const file = new Blob([fileContent], { type: 'application/json' });


    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = `instant-data-${Date.now()}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
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

  const handleSearchClick = () => {
    setShowInstantData(true);
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
     
      <Layout />

      <div id="Tabview">
        <Card>
          <BreadCrumb id="Breadcrumb" model={items} home={home} />
          
          <TabView style={{ marginTop: -48 }}>
            <TabPanel header={<span style={{ color: 'black' }}>Personalized</span>}>
              <Accordion activeIndex={0}>
                <AccordionTab
                  style={{ textAlign: "left", fontSize: "large", tableLayout: "fixed", position: "sticky" }}
                  header={<span style={{ color: 'black' }}>Personalized</span>}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Title:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Middle Name:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Name on Card:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Address:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>State:</p><Dropdown style={{ marginLeft: 208, marginTop: -45, width: 250 }} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={states} optionLabel="name"
                      placeholder="Select a State" id="inputtext" />
                    <p>country:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Name on Card:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Secondary email:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Work phone no:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }}></InputText>
                    <p>Mobile no:</p><br></br><InputText id="it1" style={{ marginLeft: 208, marginTop: -70 }}></InputText>
                    <b> <p>Shipping Details:</p></b>
                    <p>Shipping Address:</p><Dropdown style={{ marginLeft: 208, marginTop: -50, width: 250 }} value={address} onChange={(e) => setaddress(e.value)} options={add} optionLabel="name"
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: 60 }}>
                    <Button style={{ position: "unset", marginLeft: 710 }} id="sumbitbtn" label="Submit" onClick={handleSubmit}></Button>
                    <Button style={{ position: "unset", borderRadius: "7px", height: "42px", width: "110px" }} id="Loadbtn" label="Load Cards" disabled onClick={handleLoadCards} />
                  </div>
                </AccordionTab>
              </Accordion>
            </TabPanel>

            <TabPanel header={<span style={{ color: 'black' }}>Instant</span>}>
              <Accordion activeIndex={0}>
                <AccordionTab
                  style={{ textAlign: "left", color: "black", fontSize: "large" }}
                  header={<span style={{ color: 'black' }}>Instant</span>}
                >
                  {!showInstantData && (
                    <>
                      <div style={{ display: "flex", flexDirection: "column" }} >
                        <p>Full Name: </p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={fullName} onChange={e => setFullName(e.target.value)} />
                        <p>Bulk Ship Address 1:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={address1} onChange={e => setAddress1(e.target.value)} />
                        <p>Country:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={country} onChange={e => setCountry(e.target.value)} />
                        <p>Quantity:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={quantity} onChange={e => setQuantity(e.target.value)} />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", marginLeft: 500, marginTop: -235, }}>
                        <p>Company Name:</p> <InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={CompanyName} onChange={e => setCompanyName(e.target.value)} />
                        <p>Bulk Ship Address 2</p> <InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={address2} onChange={e => setAddress2(e.target.value)} />
                        <p>State:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={state} onChange={e => setState(e.target.value)} />
                        <p>Zip Code:</p><InputText id="it1" style={{ marginLeft: 208, marginTop: -45 }} value={zipcode} onChange={e => setZipcode(e.target.value)} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: 20 }}>
                        <br></br>
                        <Button style={{ marginLeft: 693, position: "unset" }} id="sumbitbtn" label="Create" onClick={handleCreateAndDownload} />
                        <Button style={{ marginLeft: 7, position: "unset" }} id="sumbitbtn" label="Search" onClick={handleSearchClick} />
                      </div>
                    </>
                  )}
                  {showInstantData && (
                    <div>
                      <Instantdummydata />
                    </div>
                  )}
                </AccordionTab>
              </Accordion>
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </div>
  );
}
