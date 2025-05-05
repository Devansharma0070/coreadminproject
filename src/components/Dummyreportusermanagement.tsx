import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


interface DataRow {
  Bankname: string;
  Accountnumber: string;
  requestdate: string;
  transfertype: string;
  Ammounttotransfer:number;
  DateFundsAffected:Date;
 Scheduled:Date;
 user:string;
 Status:string;
        

}


const data: DataRow[] = [

];

const DummyReportusermanagement: React.FC = () => {
  return (
    <div>
    
      <DataTable value={data} paginator rows={5} className="p-datatable-gridlines">
        <Column field="Bankname" header="Bank Name:" sortable></Column>
        <Column field="Accountnumber" header="Account Number" sortable></Column>
        <Column field="requestdate" header="Request Date" sortable></Column>
        <Column field="transfertype" header="Transfer Type" sortable></Column>
        <Column field="Ammountotransfer" header="Amount to transfer" sortable></Column>
        <Column field="DateFundsAffected" header="Date Funds Affected" sortable></Column>
        <Column field="Scheduled" header="Scheduled" sortable></Column>
        <Column field="user" header="user" sortable></Column>
        <Column field="Status" header="Status" sortable></Column>
        <Column  header="Action" sortable></Column>
      
      
      </DataTable>
    </div>
  );
};

export default DummyReportusermanagement;
