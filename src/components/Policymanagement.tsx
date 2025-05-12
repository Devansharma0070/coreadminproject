import { Card } from "primereact/card";
import Layout from "./Layout/Layout";
import { TabView, TabPanel } from 'primereact/tabview';
import "./Policymanagement.css";
import { Panel } from 'primereact/panel';
import { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Paginator } from 'primereact/paginator';
import { InputNumber } from "primereact/inputnumber";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Divider } from "primereact/divider";

export default function Policymanagement() {
  const [visible, setVisible] = useState(false); 
  const [tagsPanel1, setTagsPanel1] = useState<string[]>([]); 
  const [tagsPanel2, setTagsPanel2] = useState<string[]>([]); 
  const [tagsPanel3, setTagsPanel3] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const options: string[] = ['No', 'Yes'];
  const [value, setValue] = useState<string>(options[1]);
  const options1: string[] = ['No', 'Yes'];
  const [value1, setValue1] = useState<string>(options1[1]);
  const options2: string[] = ['No', 'Yes'];
const [value2, setValue2] = useState<string>(options[0]);
  const options3: string[] = ['No', 'Yes'];
  const [value3, setValue3] = useState<string>(options[0]);
  const options4: string[] = ['No', 'Yes'];
  const [value4, setValue4] = useState<string>(options[0]);
  const items: MenuItem[] = [{ label: 'Policy Management' }];
  const home: MenuItem = { icon: 'pi pi-receipt' }
  const toast = useRef<Toast>(null);
  const [activePanel, setActivePanel] = useState<number | null>(null); 
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [deletePanel, setDeletePanel] = useState<number | null>(null);

  const onPageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
  };

  const addTag = () => {
    if (newTag.trim()) {
      if (activePanel === 1) {
        setTagsPanel1([...tagsPanel1, newTag]);
      } else if (activePanel === 2) {
        setTagsPanel2([...tagsPanel2, newTag]);
      } else if (activePanel === 3) {
        setTagsPanel3([...tagsPanel3, newTag]);
      }
      setNewTag("");
      setVisible(false);
    }
  };

  const confirmDeleteTag = (index: number, panel: number) => {
    setDeleteIndex(index);
    setDeletePanel(panel);
    confirmDialog({
      message: 'Are you sure you want to delete this tag?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => deleteTag(index, panel),
      reject: () => {
        setDeleteIndex(null);
        setDeletePanel(null);
      },
    });
  };

  const deleteTag = (index: number, panel: number) => {
    if (panel === 1) {
      setTagsPanel1(tagsPanel1.filter((_, i) => i !== index));
    } else if (panel === 2) {
      setTagsPanel2(tagsPanel2.filter((_, i) => i !== index));
    } else if (panel === 3) {
      setTagsPanel3(tagsPanel3.filter((_, i) => i !== index));
    }
    setDeleteIndex(null);
    setDeletePanel(null);
  };

  const confirmAction = () => {
    toast.current?.show({
      severity: 'info',
      summary: 'Confirmed',
      detail: 'You selected No',
      life: 3000,
    });
  };

  const rejectAction = () => {
    toast.current?.show({
      severity: 'warn',
      summary: 'Rejected',
      detail: 'Action canceled',
      life: 3000,
    });
  };

  const showConfirmDialog = () => {
    confirmDialog({
      message: 'The Show Expense Rules To Card Holder flag will be updated. Do you wish to go ahead?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: confirmAction,
      reject: rejectAction,
    });
  };

  const handleSelectChange = (e: SelectButtonChangeEvent) => {
    setValue(e.value);
    if (e.value === 'No') {
      showConfirmDialog();
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <ConfirmDialog />
      <BreadCrumb style={{position:"absolute",top:95,left:350,width:"100%"}} model={items} home={home} />
      <Layout />
      <Card id="cardcontainerpolicy">
       
        <Card id="cardpolicy">
          <TabView style={{position:"absolute",top:2}}>
        
            <TabPanel  header={<span style={{ color: 'black' }}>Expense Rules</span>}>

            <Accordion style={{ marginTop: 70, width: 1100 }} activeIndex={null}>
                <AccordionTab style={{ textAlign: "left",position:"sticky" }} header={<span style={{ color: 'black' }}>Spending Limit</span>}>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                        <p>Card Single Transaction Limit:</p>
                        <div style={{ marginLeft: 243, marginTop: -42 }} id="pricebtn" className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">$</span>
                            <InputNumber />
                        </div>
                        <p>Card Monthly Spend Limit:</p>
                        <div style={{ marginLeft: 243, marginTop: -42 }} id="pricebtn" className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">$</span>
                            <InputNumber />
                        </div>
                        <p>Business Monthly Spend Limit</p>
                        <div style={{ marginLeft: 243, marginTop: -42 }} id="pricebtn" className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">$</span>
                            <InputNumber />
                        </div>
                        <div>
                            <p style={{ marginTop: -130, marginLeft: 500 }}>Card Daily Spend Limit:</p>
                            <div style={{ marginLeft: 710, marginTop: -42 }} id="pricebtn" className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">$</span>
                                <InputNumber />
                            </div>
                            <p style={{ marginTop: 15, marginLeft: 500 }}>Business Daily Spend Limit:</p>
                            <div style={{ marginLeft: 710, marginTop: -42 }} id="pricebtn" className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">$</span>
                                <InputNumber />
                            </div>
                            <div className="card flex justify-content-center" ></div>
                            <Button id="btn" style={{ marginTop: 20, marginLeft: 900 }}
    label="Submit" 
    className="p-button-primary" 
  
/>
                        </div>
                    </div>
                    <br></br><br></br>
               <Divider/>
                    <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0px 29px" 
}}>
<div style={{ display: "flex", alignItems: "center" }}>
    <p>Show Expense Rules To Card Holder:</p> <div className="card flex justify-content-center">
      
            <SelectButton 
                value={value} 
                onChange={handleSelectChange} 
                options={options} 
               
            />
        </div>
    
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>International Use Allowed:</p>
    <div className="card flex justify-content-center">
      <SelectButton
        value={value1}
        onChange={(e: SelectButtonChangeEvent) => {
          setValue1(e.value);
          if (e.value === "No") {
            showConfirmDialog(); 
          }
        }}
        options={options1}
      />
    </div>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Cash Access Allowed:</p>
    <div className="card flex justify-content-center">
        <SelectButton
            style={{ marginLeft: 112 }}
            value={value2}
            onChange={(e: SelectButtonChangeEvent) => setValue2(e.value)}
            options={options2}
            disabled={value2 === "No"} 
        />
    </div>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>PIN Purchase Allowed:</p>
    <div className="card flex justify-content-center">
        <SelectButton
            style={{ marginLeft: 27 }}
            value={value3}
            onChange={(e: SelectButtonChangeEvent) => setValue3(e.value)}
            options={options3}
            disabled={value3 === "No"}
        />
    </div>
  </div>

  </div>
                  
                </AccordionTab>
            </Accordion>
            <Accordion activeIndex={null}>
                <AccordionTab style={{ textAlign: "left",position:"sticky" }} header={<span style={{ color: 'black' }}>Merchant category Restrictions And Limits</span>}>
                <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0px 29px" 
}}>
<div style={{ display: "flex", alignItems: "center" }}>
    <p>Miscellanous:</p> <div className="card flex justify-content-center">
      
            <SelectButton 
                value={value4} 
                onChange={handleSelectChange} 
                options={options4} 
                onChange={(e: SelectButtonChangeEvent) => setValue4(e.value)}
            />
        </div>
    
  </div>
  <div style={{ display: "flex", alignItems: "center" }}> </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <b><p>Daily Limit:</p></b>
    <div id="pricebtn" className="p-inputgroup flex-1" style={{ marginLeft: "10px" }}>
      <span className="p-inputgroup-addon">$</span>
      <InputNumber />
    </div>
    <div style={{ display: "flex", alignItems: "center", marginLeft: "160px" }}>
    <b><p>Monthly Limit:</p></b>
    <div id="pricebtn" className="p-inputgroup flex-1" style={{ marginLeft: "10px" }}>
      <span className="p-inputgroup-addon">$</span>
      <InputNumber />
      </div>
    
      </div>
    
  </div>
  <br></br>
  <p>Miscellaneous: categories not classified above</p>
  <br></br>
  <b><p>* All transactions that breach these limits will be declined unless the checks are bypassed at individual card level.</p></b>

  </div>
                </AccordionTab>
            </Accordion>
            </TabPanel>

             
            <TabPanel  header={<span style={{ color: 'black',position:"sticky"}}>Expense Categories</span>}>
              <Panel style={{ position: "absolute", top: 100, marginLeft: -30 }} id="expensetypepanel" header="Expense Type" toggleable>
                <Panel header="Tag">
                  {tagsPanel1.map((tag, index) => (
                    <div
                      style={{ textAlign: "left", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      key={index}
                      className="tag-item"
                    >
                      <span>{tag}</span>
                      <Button
                        icon="pi pi-trash"
                        className="p-button-danger p-button-rounded p-button-outlined"
                        onClick={() => confirmDeleteTag(index, 1)} // Pass the index and panel number
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                  ))}
                  <Button
                    id="btn1"
                    icon="pi pi-plus"
                    onClick={() => {
                      setActivePanel(1);
                      setVisible(true);
                    }}
                  />
                </Panel>
              </Panel>

              <Panel style={{ position: "absolute", top: 100, marginLeft: 360 }} id="expensetypepanel" header="Expense Type" toggleable>
                <Panel header="Tag">
                  {tagsPanel2.map((tag, index) => (
                    <div
                      style={{ textAlign: "left", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      key={index}
                      className="tag-item"
                    >
                      <span>{tag}</span>
                      <Button
                        icon="pi pi-trash"
                        className="p-button-danger p-button-rounded p-button-outlined"
                        onClick={() => confirmDeleteTag(index, 2)}
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                  ))}
                  <Button
                    id="btn1"
                    icon="pi pi-plus"
                    onClick={() => {
                      setActivePanel(2);
                      setVisible(true);
                    }}
                  />
                </Panel>
              </Panel>

              <Panel style={{ position: "absolute", top: 100, marginLeft: 750 }} id="expensetypepanel" header="Expense Type" toggleable>
                <Panel header="Tag">
                  {tagsPanel3.map((tag, index) => (
                    <div
                      style={{ textAlign: "left", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      key={index}
                      className="tag-item"
                    >
                      <span>{tag}</span>
                      <Button
                        icon="pi pi-trash"
                        className="p-button-danger p-button-rounded p-button-outlined"
                        onClick={() => confirmDeleteTag(index, 3)}
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                  ))}
                  <Button
                    id="btn1"
                    icon="pi pi-plus"
                    onClick={() => {
                      setActivePanel(3);
                      setVisible(true);
                    }}
                  />
                </Panel>
              </Panel>

              <Dialog
                visible={visible}
                modal
                header={<h4>Add NEW Tag</h4>}
                footer={
                  <div>
                    <Button id="btn" label="Save" onClick={addTag} />
                    <Button
                      id="btn"
                      label="Cancel"
                      onClick={() => setVisible(false)}
                      autoFocus
                    />
                  </div>
                }
                style={{ width: "50rem" }}
                onHide={() => setVisible(false)}
              >
                <InputText
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Enter tag name"
                />
              </Dialog>
            </TabPanel>
                

            <TabPanel style={{position:"unset"}} header={<span style={{ color: 'black' }}>Alerts Thresholds</span>}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px 10px", 
                  marginTop: 50,
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "60px" }}>Low Business Threshold Amount:</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "20px" }}>Low Card Balance Threshold Amount:</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "10px" }}>Number of Card Transactions (Per Day):</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "70px" }}>Number of Failed PIN Attempts:</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "80px" }}>Business Spend Threshold (%):</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "100px" }}>Card Spend Threshold (%):</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "10px" }}>Minimum Authorization Count Threshold:</p>
                  <InputText />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "100px" }}>Declined Authorization (%):</p>
                  <InputText />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
               <b> <p>* An alert will be generated when spending reaches this '%' of defined limit. </p></b>
              
</div>
              <Button
                style={{
                  marginTop: "-40px",
                  marginLeft: "1000px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "9px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  transition: "background-color 0.3s ease",
                }}
                 label="Submit"
              />
            </TabPanel>
          </TabView>
        </Card>
      </Card>
    </div>
  );
}
