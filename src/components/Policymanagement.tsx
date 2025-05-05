import { Card } from "primereact/card";
import Layout from "./Layout/Layout";
import { TabView, TabPanel } from 'primereact/tabview';
import "./Policymanagement.css";
import { Panel } from 'primereact/panel';
import { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Paginator } from 'primereact/paginator';
import { InputNumber } from "primereact/inputnumber";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
export default function Policymanagement() {
  const [visible, setVisible] = useState(false); 
  const [tags, setTags] = useState([]); 
  const [newTag, setNewTag] = useState("");
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const items: MenuItem[] = [{ label: 'Policy Management' }];
  const home: MenuItem = { icon: 'pi pi-receipt' }
  const onPageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
  };
  const addTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag]); 
      setNewTag("");
      setVisible(false);
    }
  };
  const deleteTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index)); 
  };

  return (
    <div>
      <BreadCrumb style={{position:"absolute",top:95,left:350,width:"100%"}} model={items} home={home} />
      <Layout />
      <Card id="cardcontainerpolicy">
        <Card id="cardpolicy">
          <TabView style={{position:"absolute",top:2}}>
        
            <TabPanel  header={<span style={{ color: 'black' }}>Expense Rules</span>}>

            <Accordion style={{ marginTop: 70, width: 1100 }} activeIndex={null}>
                <AccordionTab style={{ textAlign: "left" }} header={<span style={{ color: 'black' }}>Spending Limit</span>}>
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
                            <div className="card flex justify-content-center"></div>
                            <Button
                                style={{
                                    marginTop: "20px", 
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "6px", 
                                    padding: "15px 30px", 
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                                    transition: "background-color 0.3s ease",
                                }}
                                id="sumbitbtn"
                                label="Submit"
                            />
                        </div>
                    </div>
                    <br></br><br></br>
                    <hr></hr>
                    <p>Show expense Rules to card Holder</p>
                    <Paginator first={first} rows={rows} totalRecords={120} onPageChange={onPageChange} />
                </AccordionTab>
            </Accordion>
            <Accordion activeIndex={null}>
                <AccordionTab style={{ textAlign: "left" }} header={<span style={{ color: 'black' }}>Merchant category Restrictions And Limits</span>}>
                </AccordionTab>
            </Accordion>
            </TabPanel>


            <TabPanel  header={<span style={{ color: 'black' }}>Expense Categories</span>}>
              <Panel style={{position:"absolute",top:100}} id="expensetypepanel" header="Expense Type" toggleable>
                <Panel header="Tag">
            
                  {tags.map((tag, index) => (
                    <div 
                      style={{  textAlign: "left", marginBottom: "10px", display: "flex",justifyContent: "space-between",  alignItems: "center"  }}
                      key={index} 
                      className="tag-item"
                    >
                      <span>{tag}</span>
                      <Button
                        icon="pi pi-trash"
                        className="p-button-danger p-button-rounded p-button-outlined"
                        onClick={() => deleteTag(index)}
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                  ))}
                  <Button
                    id="btn1"
                    icon="pi pi-plus"
                    onClick={() => setVisible(true)}
                  />
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
                </Panel>
              </Panel>

            </TabPanel>
                

            <TabPanel header={<span style={{ color: 'black' }}>Alerts Thresholds</span>}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px 10px", // Space between rows and columns
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
