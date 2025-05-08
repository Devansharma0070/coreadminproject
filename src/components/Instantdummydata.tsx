import { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Nullable } from "primereact/ts-helpers";
import { DummyDataGrid } from "./DummyDataGrid";

export const Instantdummydata = () => {
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [value, setValue] = useState<number | null>(null);
  const [date1, setDate1] = useState<Nullable<Date>>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(false);
const [filterOrderId, setFilterOrderId] = useState<string | null>(null);

  const stattuss = [
    { name: "Approval pending" },
    { name: "Approved" },
    { name: "Cards Created" },
    { name: "Error" },
    { name: "Rejected" },
  ];

  const handleSearch = () => {
    setFilterOrderId(value ? `ORD${value}` : null); 
    setShowGrid(true);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0px 44px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Order Id</p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InputNumber id="it1" value={value} onValueChange={(e) => setValue(e.value)} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Request Date</p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ position: "relative", width: "fit-content" }}>
            <Calendar
              id="inputtext"
              value={date}
              onChange={(e) => setDate(e.value)}
              showIcon={false}
              style={{ paddingRight: "2rem", width: 255 }}
            />
            <i
              className="pi pi-calendar"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#03b6fc",
                fontSize: "1.5rem",
              }}
            ></i>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Create Date</p>
          &nbsp; &nbsp;
          <div style={{ position: "relative", width: "fit-content" }}>
            <Calendar
              id="inputtext"
              value={date1}
              onChange={(e) => setDate1(e.value)}
              showIcon={false}
              style={{ paddingRight: "2rem", width: 255 }}
            />
            <i
              className="pi pi-calendar"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#03b6fc",
                fontSize: "1.5rem",
              }}
            ></i>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Status</p>
          <Dropdown
            value={status}
            options={stattuss}
            onChange={(e) => setStatus(e.value)}
            optionLabel="name"
            placeholder="Select "
            style={{ width: 255, marginLeft: 79 }}
            className="w-full md:w-14rem"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center"}}>
          <p>Last Request</p>
          &nbsp;
          <InputNumber id="it1" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: 15 }}>
  <Button style={{ marginLeft: 130, zIndex:1,position:"unset" }}
    id="sumbitbtn"
    label="Search"
    onClick={handleSearch}
  />
  <Button
  style={{ marginLeft: 15, zIndex:1 ,position:"unset"}}
    id="sumbitbtn"
    label="Back"
  />
</div>

      </div>
      <br></br>
      <br></br>
      {showGrid && <DummyDataGrid filterOrderId={filterOrderId} />}
    </div>
  );
};