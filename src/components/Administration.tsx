import { Card } from "primereact/card";
import Layout from "./Layout/Layout";
import "./Administration.css"
import { TabPanel, TabView } from "primereact/tabview";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { SetStateAction, useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import DummyReportusermanagement from "./Dummyreportusermanagement";
import { Password } from "primereact/password";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from "primereact/toast";

export default function Administration() {
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [value, setValue] = useState<string>('');
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const [securityAnswer, setSecurityAnswer] = useState<string>('');
  const [confirmSecurityAnswer, setConfirmSecurityAnswer] = useState<string>('');
  const items: MenuItem[] = [{ label: 'Administration' }];
  const home: MenuItem = { icon: 'pi pi-users',  }
  const [selectedquestion, setSelectedquestion] = useState(null);
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isSecurityAnswerValid, setIsSecurityAnswerValid] = useState(true);
  const [isConfirmSecurityAnswerValid, setIsConfirmSecurityAnswerValid] = useState(true);
  const [isSelectedQuestionValid, setIsSelectedQuestionValid] = useState(true);
  const toast = useRef<Toast>(null);

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
  const Country = [
    { name: 'America' },
    { name: 'China' },
    { name: 'India' },
    { name: 'Brazil' },
    { name: 'Germany' },
    { name: 'Russia' },
    { name: 'England' },
    { name: 'Spain' },
  ];
  const question = [
    { name: 'What is your pet name?' },
  ];

  const handleSubmit = () => {
    // Validate passwords
    setIsCurrentPasswordValid(value.trim() !== '');
    setIsNewPasswordValid(value1.trim() !== '');
    setIsConfirmPasswordValid(value2.trim() !== '');

    if (!value.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Current Password is required.",
      });
      return;
    }
    if (!value1.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "New Password is required.",
      });
      return;
    }
    if (!value2.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Confirm New Password is required.",
      });
      return;
    }
    if (value1 !== value2) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "New Password and Confirm New Password do not match.",
      });
      return;
    }

    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Password updated successfully.",
    });
  };

  const handleSecuritySubmit = () => {
    // Validate inputs
    setIsSelectedQuestionValid(!!selectedquestion);
    setIsSecurityAnswerValid(securityAnswer.trim() !== '');
    setIsConfirmSecurityAnswerValid(confirmSecurityAnswer.trim() !== '');

    if (!selectedquestion) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select a security question.",
      });
      return;
    }
    if (!securityAnswer.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Security Answer is required.",
      });
      return;
    }
    if (!confirmSecurityAnswer.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Confirm Security Answer is required.",
      });
      return;
    }
    if (securityAnswer !== confirmSecurityAnswer) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Security Answer and Confirm Security Answer do not match.",
      });
      return;
    }

    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Security Question and Answer updated successfully.",
    });
  };

  return (
    <div>
      <Toast ref={toast} />
      <BreadCrumb style={{ position: "absolute", top: 99, left: 345, width: "71%" }} model={items} home={home} />
      <Layout></Layout>
      <Card id="Administrationcardcontainer">
        <Card id="Administrationcard">
          <TabView>
            <TabPanel header={<span style={{ color: 'black' }}>Create User</span>} >
              <Accordion >
                <AccordionTab style={{ textAlign: "left", position: "sticky", height: "620px" }} header="Create User">
                  <div style={{ height: '100px', marginTop: -550 }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '40px' }}>Business Name</p>&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '74px' }}>First Name</p>&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '50px' }}>Email Address</p>&nbsp;&nbsp;
                      <InputText type="email" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '50px' }}>Address Line 1</p>&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '129px' }}>City</p>&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '90px' }}>Zip Code</p>&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '10px' }}>Single Load Limit</p>&nbsp;&nbsp;
                      <div id="pricebtn" className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>  <InputNumber /> </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '-px' }}>Monthly Load Limit</p>&nbsp;
                      <div id="pricebtn" className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>  <InputNumber /> </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '14px' }}>Bypass Load Limits</p>&nbsp;&nbsp;
                      <InputText type="checkbox" id="inputtext" />
                    </div>
                  </div>
                  <div id="Adminrhs" style={{ marginLeft: '460px', marginTop: '-100px', height: '100px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '72px' }}>User name</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '74px' }}>Last Name</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '58px' }}>Date Of Birth</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div style={{ position: 'relative', width: 'fit-content' }}>
                        <Calendar
                          id="inputtext"
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon={false}
                          style={{ paddingRight: '2rem' }}
                        />
                        <i className="pi pi-calendar" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#03b6fc', fontSize: '1.5rem' }}></i>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '45px' }}>Address Line 2</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <InputText type="text" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '96px' }}>Country</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Dropdown value={selectedCountry} onChange={(e: { value: SetStateAction<null>; }) => setSelectedCountry(e.value)} options={Country} optionLabel="name"
                        placeholder="Select a country" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '118px' }}>State</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Dropdown value={selectedCity} onChange={(e: { value: SetStateAction<null>; }) => setSelectedCity(e.value)} options={states} optionLabel="name"
                        placeholder="Select a State" id="inputtext" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '38px' }}>Daily Load Limit</p>
                      <div id="pricebtn" className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>  <InputNumber /> </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '' }}>
                      <p style={{ marginRight: '10px' }}>Lock After Inactivity<br></br> (Days)</p>
                      <div id="pricebtn" className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">$</span>  <InputNumber /> </div>
                    </div>
                  </div>
                </AccordionTab>
              </Accordion>
            </TabPanel>
            <TabPanel header={<span style={{ color: 'black',position:"sticky" }}>User Management</span>}>
              <Accordion>
                <AccordionTab style={{ textAlign: "left",position:"sticky" }} header="User Management">
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "5px 189px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>Username</p>&nbsp;&nbsp;&nbsp;
                      <InputText id="inputtext" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>Status</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <InputText id="inputtext" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>First Name</p>&nbsp;&nbsp;&nbsp;
                      <InputText id="inputtext" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>Last Name</p>&nbsp;&nbsp;
                      <InputText id="inputtext" />
                    </div>
                  </div>
                  <div>
                    <Button id="searchbtn">Search</Button>
                  </div>
                  <br></br>
                  <div>
                    <DummyReportusermanagement></DummyReportusermanagement>
                  </div>
                </AccordionTab>
              </Accordion>
            </TabPanel>
            <TabPanel header={<span style={{ color: 'black',position:"sticky" }}>Update Profile</span>}>
              <Accordion>
                <AccordionTab style={{ textAlign: "left",position:"sticky" }} header="Change Password">
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "5px 69px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>Current Password</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Password className="password" value={value} onChange={(e) => setValue(e.target.value)} style={{ border: isCurrentPasswordValid ? '1px solid #ced4da' : '1px solid red' }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>New Password</p>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Password className="password" value={value1} onChange={(e) => setValue1(e.target.value)} style={{ border: isNewPasswordValid ? '1px solid #ced4da' : '1px solid red' }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>Confirm New Password</p>&nbsp;
                      <Password className="password" value={value2} onChange={(e) => setValue2(e.target.value)} style={{ border: isConfirmPasswordValid ? '1px solid #ced4da' : '1px solid red' }} />
                    </div>
                    <div style={{ marginLeft: 270 }}> <Button id="sumbitbtnn" label="Submit" onClick={handleSubmit} /></div>
                  </div>
                </AccordionTab>
                <AccordionTab style={{ textAlign: "left" }} header="Change Security Question And Answer">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "5px 69px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <b>
                        <p>Security Question:</p>
                      </b>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Dropdown
                        value={selectedquestion}
                        onChange={(e: { value: SetStateAction<null> }) =>
                          setSelectedquestion(e.value)
                        }
                        options={question}
                        optionLabel="name"
                        placeholder="Select a question"
                        style={{
                          border: isSelectedQuestionValid ? '1px solid #ced4da' : '1px solid red',
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <b>
                        <p>Security Answer:</p>
                      </b>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <InputText
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        style={{
                          border: isSecurityAnswerValid ? '1px solid #ced4da' : '1px solid red',
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}></div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <b>
                        <p>Confirm Security Answer:</p>
                      </b>
                      <InputText
                        value={confirmSecurityAnswer}
                        onChange={(e) => setConfirmSecurityAnswer(e.target.value)}
                        style={{
                          border: isConfirmSecurityAnswerValid ? '1px solid #ced4da' : '1px solid red',
                        }}
                      />
                    </div>

                  </div>
                  <div><Button id="sumbitbtnn" label="Submit" style={{marginLeft:800}} onClick={handleSecuritySubmit} /></div>
                </AccordionTab>
              </Accordion>
            </TabPanel>
          </TabView>
        </Card>
      </Card>
    </div>
  )
}
