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
  const [data, setData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);

  useEffect(() => {
    fetch("/Grid.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (filterOrderId) {
      setFilteredData(data.filter((row) => row.orderId === filterOrderId));
    } else {
      setFilteredData(data);
    }
  }, [filterOrderId, data]);

  return (
    <div>
      <DataTable value={filteredData} paginator rows={5}>
        <Column field="orderId" header="Order ID" sortable />
        <Column field="requestDate" header="Request Date" sortable />
        <Column field="createDate" header="Create Date" sortable />
        <Column field="status" header="Status" sortable />
        <Column field="lastRequest" header="Last Request" sortable />
        <Column field="clientName" header="Client Name" sortable />
        <Column field="noOfCards" header="No. of Cards" sortable />
        <Column field="recordCreated" header="Record Created" sortable />
      </DataTable>
    </div>
  );
};
