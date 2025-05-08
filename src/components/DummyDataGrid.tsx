import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


interface DataRow {
  orderId: string;
  requestDate: string;
  createDate: string;
  status: string;
  lastRequest: string;
  clientName: string;
  noOfCards: number;
  recordCreated: string;

}

interface DummyDataGridProps {
  filterOrderId: string | null;
}

export const DummyDataGrid = ({ filterOrderId }: DummyDataGridProps) => {
  const [data, setData] = useState<DataRow[]>([
    {
      orderId: "ORD120",
      requestDate: "2025-05-01",
      createDate: "2025-05-02",
      status: "Approved",
      lastRequest: "2025-05-03",
      clientName: "Devansh",
      noOfCards: 5,
      recordCreated: "Admin",
   
    },
    {
      orderId: "ORD124",
      requestDate: "2025-05-04",
      createDate: "2025-05-05",
      status: "Pending",
      lastRequest: "2025-05-06",
      clientName: "Rohan",
      noOfCards: 10,
      recordCreated: "Admin",
     
    },
  ]);

  const [filteredData, setFilteredData] = useState<DataRow[]>(data);

  useEffect(() => {
    if (filterOrderId) {
      setFilteredData(data.filter((row) => row.orderId === filterOrderId));
    } else {
      setFilteredData(data);
      alert("No Order ID provided for filtering.");
    }
  }, [filterOrderId, data]);

 

  return (
    <div>
      <DataTable value={filteredData} paginator rows={5}>
        <Column field="orderId" header="Order ID" sortable></Column>
        <Column field="requestDate" header="Request Date" sortable></Column>
        <Column field="createDate" header="Create Date" sortable></Column>
        <Column field="status" header="Status" sortable></Column>
        <Column field="lastRequest" header="Last Request" sortable></Column>
        <Column field="clientName" header="Client Name" sortable></Column>
        <Column field="noOfCards" header="No. of Cards" sortable></Column>
        <Column field="recordCreated" header="Record Created" sortable></Column>
      
      </DataTable>
    </div>
  );
};