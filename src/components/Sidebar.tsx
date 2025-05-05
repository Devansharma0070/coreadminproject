import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"
        

        
export default function Sidebar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: string, route: string) => {
    setActiveButton(buttonId);
    navigate(route);           
  };

  const getButtonColor = (buttonId: string) => {
    return activeButton === buttonId ? "#1f7ef2" : "#ebeae8"; 
  };

  return (
    <div>
   
  <Card style={{ boxShadow: '0 8px 16px rgba(136, 155, 170, 0.2)' }} id="Sidebar">

        <Button
          onClick={() => handleButtonClick("button1","/welcome")}
          style={{
            backgroundColor: getButtonColor("button1"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-home" style={{ color: "black", fontSize: "1rem" }}></i>{" "}
          <span style={{ marginLeft: "8px" }}>Business Home</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button2", "/Newcard")}
          style={{
            backgroundColor: getButtonColor("button2"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-credit-card" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>New Card</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button3", "/Cardunload")}
          style={{
            backgroundColor: getButtonColor("button3"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-wallet" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Card Unload</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button4", "/BusinessLoadTransfer")}
          style={{
            backgroundColor: getButtonColor("button4"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
            borderRadius:"7PX"
          }}
        >
          <i className="pi pi-warehouse" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Business Load Transfer</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button5", "/activity")}
          style={{
            backgroundColor: getButtonColor("button5"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-file-export" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Activity</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button6", "/PolicyManagement")}
          style={{
            backgroundColor: getButtonColor("button6"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-receipt" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Policy Management</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button7", "/Reports")}
          style={{
            backgroundColor: getButtonColor("button7"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-file" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Reports</span>
        </Button>

        <Button
          onClick={() => handleButtonClick("button8", "/Administration")}
          style={{
            backgroundColor: getButtonColor("button8"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-users" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Administration</span>
        </Button>
        <Button
          onClick={() => handleButtonClick("button9", "/Administration1")}
          style={{
            backgroundColor: getButtonColor("button9"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-users" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Administration1</span>
        </Button>
        <Button
          onClick={() => handleButtonClick("button10", "/Svndetails")}
          style={{
            backgroundColor: getButtonColor("button9"),
            width: "100%",
            textAlign: "left",
            color: "black",
            marginBottom: "10px",
             borderRadius:"7PX"
          }}
        >
          <i className="pi pi-users" style={{ color: "black", fontSize: "1rem" }}></i>
          <span style={{ marginLeft: "8px" }}>Svn Details</span>
        </Button>
        
      </Card>
    </div>
  );
}
