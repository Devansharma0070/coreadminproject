import Layout from "./Layout/Layout";
import './Businessloadtransfer.css'
import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { useState, useEffect, useRef } from "react";
import { BreadCrumb } from 'primereact/breadcrumb';
import { Calendar } from "primereact/calendar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { MenuItem } from "primereact/menuitem";
import { Accordion, AccordionTab } from "primereact/accordion";
import DummyReportusermanagement from "./Dummyreportusermanagement";
import { Toast } from 'primereact/toast';

//we need to define the datatypes 
interface Product {
  BankName: string;
  Accountowner: string;
  AbaNumber: string;
  Accountnumber: string;
  status: string;
}
//we need to define the datatypes 
interface TransferRecord { 
  BankName: string;
  Accountowner: string;
  Frequency: string;
  SelectedDay: string;
  Amount: number;
  CreatedBy: string;
  CreatedDateTime: string;
  LastUpdatedBy: string;
  LastUpdatedWhen: string;
  ScheduledStatus: string;
  Accountnumber: string;
}
//create a array list for the first datatable 
const mockProducts: Product[] = [
  {
    BankName: 'SBI',
    Accountowner: 'Devansh',
    AbaNumber: '534535356',
    Accountnumber: '53463635',
    status: 'Validated'
  },
  {
    BankName: 'HDFC',
    Accountowner: 'Anjali',
    AbaNumber: '123456789',
    Accountnumber: '98765432',
    status: 'Pending'
  },
  {
    BankName: 'ICICI',
    Accountowner: 'Rahul',
    AbaNumber: '987654321',
    Accountnumber: '12345678',
    status: 'Validated'
  },
  {
    BankName: 'Axis Bank',
    Accountowner: 'Sneha',
    AbaNumber: '456789123',
    Accountnumber: '87654321',
    status: 'Rejected'
  }
];

export default function Businessloadtransfer() {

  const [selectedWhen, setWhen] = useState(null);// usestate for the dropdowns
  const when = [
    { name: 'Now' },
    { name: 'Scheduled' }
  ];
   const items: MenuItem[] = [{ label: 'Business Load Transfer' }];
    const home: MenuItem = { icon: 'pi pi-warehouse' };
  

  const [selectedDay, setDay] = useState(null);// usestate for the dropdowns
  const day = [
    { name: 'Monday' },
    { name: 'Tuesday' },
    { name: 'Wednesday' },
    { name: 'Thursday' },
    { name: 'Friday' },
    { name: 'Saturday' },
    { name: 'Sunday' }
  ];
// usestate for the dropdowns
  const [selectedMonth, setMonth] = useState(null);
  const month = [
    { name: 'Monthly' },
    { name: 'Weekly' }
  ];

  const [transferAmount, setTransferAmount] = useState<number | null>(null);
  const [requestDate, setRequestDate] = useState<Date | null>(null);


  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [transferRecords, setTransferRecords] = useState<TransferRecord[]>([]);
const[selectedbusinessname,setbusinessname]=useState(null);
const businessname=[
  {name:'Amazon'},
  {name:'Flipkart'},
  {name:'Relaince'}
]
;
const [selectedstatus,setstatus]=useState();
const status=[
  {name:'Active '},
  {name:'Inactive'}

];

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 500);
  }, []);

  const toast = useRef<Toast>(null); // Create a Toast reference

 //conditions for the sumbit button all the feilds should be filled
  const handleSubmit = () => {
    if (!selectedProducts.length) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please select at least one product.', life: 3000 });
      return;
    }
    if (!selectedMonth || !selectedDay || !transferAmount) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please select Frequency, Day and enter Amount.', life: 3000 });
      return;
    }

     //mapping of the functions  from table 1 to table 2 by using map function here we are also storing the value of newtransferrecords in the settransferrecords
    const newTransferRecords: TransferRecord[] = selectedProducts.map(product => ({
      BankName: product.BankName,
      Accountowner: product.Accountowner,
      Frequency: selectedMonth.name,
      SelectedDay: selectedDay.name,
      Amount: transferAmount,
      CreatedBy: 'System',
      CreatedDateTime: new Date().toLocaleString(),
      LastUpdatedBy: 'System',
      LastUpdatedWhen: new Date().toLocaleString(),
      ScheduledStatus: selectedWhen ? selectedWhen.name : 'Now',
      Accountnumber: product.Accountnumber
    }));

    setTransferRecords(newTransferRecords);
    toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Transfer records submitted successfully.', life: 3000 });
  };
  

    const deleteProduct = (accountNumber: string) => {
        setTransferRecords(transferRecords.filter(product => product.Accountnumber !== accountNumber));
        toast.current?.show({ severity: 'info', summary: 'Deleted', detail: 'Record deleted successfully.', life: 3000 });
    };
    const actionBodyTemplate = (rowData: TransferRecord) => {
        return (
            <>
          
                <Button style={{backgroundColor:"red"}}
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-warning"
                    onClick={() => deleteProduct(rowData.Accountnumber)}
                />
            </>
        );
    };

  return (
    <div>
      <Toast ref={toast} /> 
       <BreadCrumb style={{ position: "absolute", top: 80, left: 350, width: "100%" }} model={items} home={home} />
              <Layout />
      <Layout />
      <Card id="businesscontainer">
        <TabView style={{marginTop:-40}} >
          <TabPanel style={{position:"unset"}}   header={<span style={{ color: 'black' }}>External Transfer</span>} >
          <div>
            <p style={{textAlign:"left"}}>Account Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>300$</b></p>
            <b><p style={{textAlign:"left"}}>*Initiate Transfers Between External Bank Account And Business Account</p></b>
          
          </div>
          
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3px 99px"
            }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <p>Transfer Amount:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <InputNumber 
                  value={transferAmount ?? null} 
                  onValueChange={e => setTransferAmount(e.value ?? null)} 
                  mode="currency" currency="USD" locale="en-US"
                />
                </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Request Date:</p>&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar value={requestDate} onChange={(e) => setRequestDate(e.value)} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>When:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown 
                  value={selectedWhen} 
                  onChange={e => setWhen(e.value)} 
                  options={when} 
                  optionLabel="name" 
                  placeholder="Scheduled" 
                  id="inputtext" 
                  className="w-full md:w-14rem" 
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Frequency:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown 
                  value={selectedMonth} 
                  onChange={e => setMonth(e.value)} 
                  options={month} 
                  optionLabel="name" 
                  placeholder="Monthly" 
                  id="inputtext" 
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Day:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown 
                  value={selectedDay} 
                  onChange={e => setDay(e.value)} 
                  options={day} 
                  optionLabel="name" 
                  placeholder="Monday" 
                  id="inputtext" 
                />
              </div>
            </div>
               
                    
            <DataTable 
              value={products} 
              selection={selectedProducts} 
            l
              dataKey="Accountnumber"
              paginator
              rows={2}
              rowsPerPageOptions={[2, 4, 8]}
              tableStyle={{ minWidth: '50rem', marginTop: '1rem' }}
            >
              <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
              <Column field="BankName" header="Bank Name" sortable style={{ width: '20%' }}></Column>
              <Column field="Accountowner" header="Account Owner" sortable style={{ width: '20%' }}></Column>
              <Column field="AbaNumber" header="Aba Number" sortable style={{ width: '20%' }}></Column>
              <Column field="Accountnumber" header="Account Number" sortable style={{ width: '20%' }}></Column>
              <Column field="status" header="Status" sortable style={{ width: '20%' }}></Column>
            </DataTable>

            <div style={{ marginTop: '1rem' }}>
              <Button className="sumbitbtn" label="Submit" onClick={handleSubmit} />
            </div>

            {transferRecords.length > 0 && (
              <>
                 
                 <Card style={{marginLeft:"-41px",marginTop:"-22px"}}><DataTable 
                  value={transferRecords} 
                  paginator 
            
                      rows={5} 
                  rowsPerPageOptions={[5, 10, 20]} 
                  tableStyle={{ minWidth: '100%' }}
                  dataKey="Accountnumber"
                 
                >
                  <Column field="BankName" header="Bank Name" sortable style={{ minWidth: '150px' }}></Column>
                  <Column field="Accountowner" header="Account Owner" sortable style={{ minWidth: '150px' }}></Column>
                  <Column field="Frequency" header="Frequency" sortable style={{ minWidth: '120px' }}></Column>
                  <Column field="SelectedDay" header="Selected Day" sortable style={{ minWidth: '120px' }}></Column>
                  <Column field="Amount" header="Amount" sortable style={{ minWidth: '100px' }}></Column>
                  <Column field="CreatedBy" header="Created By" sortable style={{ minWidth: '120px' }}></Column>
                  <Column field="CreatedDateTime" header="Created Date/Time" sortable style={{ minWidth: '180px' }}></Column>
                  <Column field="LastUpdatedBy" header="Last Updated By" sortable style={{ minWidth: '150px' }}></Column>
                  <Column field="LastUpdatedWhen" header="Last Updated When" sortable style={{ minWidth: '180px' }}></Column>
                  <Column field="ScheduledStatus" header="Scheduled Status" sortable style={{ minWidth: '150px' }}></Column>
                   <Column
                        body={actionBodyTemplate}
                        header="Actions"
                        style={{ width: '8rem', textAlign: 'center' }}
                    />
                </DataTable></Card>
                
              </>
            )}
          </TabPanel>
          <TabPanel  header={<span style={{ color: 'black' }}>B2B</span>} >
            <Accordion>
              <AccordionTab style={{textAlign:"left"}} header={<span style={{ color: 'black' }}>Senders Business Account</span>}>
             <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "5px 69px" 
}}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Account Balance:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$405.00</b>
    
    
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Account Number:</p>&nbsp;&nbsp;&nbsp;&nbsp;<b>234352525365</b>
   
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Status:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Dropdown id="inputtext"value={selectedstatus} 
                  onChange={e => setstatus(e.value)} 
                  options={status} 
                  optionLabel="name" 
                  placeholder="select" 
                  ></Dropdown>
             
  </div>
  </div>


              </AccordionTab>

              <AccordionTab style={{textAlign:"left"}} header={<span style={{ color: 'black' }}>Recipient Business Account</span>}>
              <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "5px 69px" 
}}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Business Name:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Dropdown id="inputtext"value={selectedbusinessname} 
                  onChange={e => setbusinessname(e.value)} 
                  options={businessname} 
                  optionLabel="name" 
                  placeholder="select"  ></Dropdown>
    
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Status:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Dropdown id="inputtext"value={selectedstatus} 
                  onChange={e => setstatus(e.value)} 
                  options={status} 
                  optionLabel="name" 
                  placeholder="select" 
                  ></Dropdown>
    
   
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Ammount OF Transfer:</p>&nbsp;
    <InputNumber 
                  value={transferAmount} 
                  onValueChange={e => setTransferAmount(e.value)} 
                  mode="currency" currency="USD" locale="en-US"
                />
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Account Number:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
  </div>
  </div>
  <div>  <Button className="sumbitbtn1" label="Sumbit"></Button></div>

              </AccordionTab>
            
            </Accordion>
          </TabPanel>
          <TabPanel style={{position:"sticky"}}  header={<span style={{ color: 'black' }}>View Transfer</span>}>
            <Card>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5px 69px"
              }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Available Business Account Balance:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$405.51</b>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Account Status:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Open</b>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Total Load:</p>&nbsp;<b>$0.00</b>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Total Withdrawal:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$0.00</b>
                </div>
              </div>

              {transferRecords.length > 0 ? (
                <DataTable
                  value={transferRecords}
                  paginator
                  rows={5}
                  rowsPerPageOptions={[5, 10, 20]}
                  tableStyle={{ minWidth: '100%', marginTop: '1rem' }}
                  dataKey="Accountnumber"
                >
                  <Column field="BankName" header="Bank Name" sortable style={{ minWidth: '150px' }}></Column>
                  <Column field="Accountowner" header="Account Owner" sortable style={{ minWidth: '150px' }}></Column>
                  <Column field="Frequency" header="Frequency" sortable style={{ minWidth: '120px' }}></Column>
                  <Column field="SelectedDay" header="Selected Day" sortable style={{ minWidth: '120px' }}></Column>
                  <Column field="Amount" header="Amount" sortable style={{ minWidth: '100px' }}></Column>
                  <Column field="CreatedBy" header="Created By" sortable style={{ minWidth: '120px' }}></Column>
                  <Column field="CreatedDateTime" header="Created Date/Time" sortable style={{ minWidth: '180px' }}></Column>
                  <Column field="LastUpdatedBy" header="Last Updated By" sortable style={{ minWidth: '150px' }}></Column>
                  <Column field="LastUpdatedWhen" header="Last Updated When" sortable style={{ minWidth: '180px' }}></Column>
                  <Column field="ScheduledStatus" header="Scheduled Status" sortable style={{ minWidth: '150px' }}></Column>
                </DataTable>
              ) : (
                <p style={{ marginTop: '1rem', textAlign: 'center' }}>No transfer records available.</p>
              )}
            </Card>
          </TabPanel>
        </TabView>
      </Card>
    </div>
  );
}
