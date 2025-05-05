import Layout from './Layout/Layout';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Key, useState } from 'react';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import './BuisnessHome.css';
import "primeicons/primeicons.css";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { Dialog } from 'primereact/dialog';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import Dummychart from './Dummychart';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


class TransactionList {
  number: string | undefined;
  value: string | undefined;
}

class CardDetails {
  id: string | undefined;
  name: string | undefined;
  cardNumber: string | undefined;
}

function Welcome() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [visible, setVisible] = useState(false);
  const [visibleTransactionFilter, setVisibleTransactionFilter] = useState(false);
  const [name, setName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const items: MenuItem[] = [{ label: 'Business Home' }];
  const home: MenuItem = { icon: 'pi pi-home' };

  const [transactionList] = useState<TransactionList[]>([
    { number: "21949001", value: "1/3/2025" },
    { number: "21949002", value: "2/4/25" },
    { number: "21949003", value: "3/4/25" },
    { number: "21949004", value: "4/4/25" },
    { number: "21949005", value: "5/4/25" },
    { number: "21949006", value: "6/4/25" },
    { number: "21949007", value: "8/4/25" },
    { number: "21949003", value: "3/4/25" },
    { number: "21949004", value: "4/4/25" },
    { number: "21949005", value: "5/4/25" },
    { number: "21949006", value: "6/4/25" },
    { number: "21949007", value: "8/4/25" },
  ]);

  const [filteredTransactionList, setFilteredTransactionList] = useState<TransactionList[]>(transactionList);

  const [cardDetailsList] = useState<CardDetails[]>([
    { id: "100", name: "Devansh", cardNumber: "1234****3456" },
    { id: "101", name: "Rohit", cardNumber: "2345****4567" },
    { id: "102", name: "Karan", cardNumber: "3456****5678" },
    { id: "103", name: "Bob", cardNumber: "4567****6789" },
    { id: "104", name: "Kabeer", cardNumber: "5678****7890" },
    { id: "105", name: "Hitesh", cardNumber: "5678****7890" },
    { id: "106", name: "Ram", cardNumber: "5678****7890" },
    { id: "107", name: "Priyansh", cardNumber: "5678****7890" },
    { id: "108", name: "Rohan", cardNumber: "5678****7890" },
    { id: "109", name: "Ayush", cardNumber: "5678****7890" },
  ]);

  const [filteredCardDetailsList] = useState<CardDetails[]>(cardDetailsList);

  const applyTransactionFilter = () => {
    if (!transactionList || transactionList.length === 0) {
      console.error("No transaction details available for filtering.");
      return;
    }

    const filteredList = transactionList.filter(transaction => {
      const matchTransactionId = transactionId ? transaction.number?.includes(transactionId) : true;
      const matchTransactionDate = transactionDate ? transaction.value?.includes(transactionDate) : true;
      console.log(`Filtering... Transaction ID: ${transactionId}, Date: ${transactionDate}, Match: ${matchTransactionId && matchTransactionDate}`);
      return matchTransactionId && matchTransactionDate;
    });

    setFilteredTransactionList(filteredList);
    setVisibleTransactionFilter(false);
  };

  const transactionFooterContent = (
    <div>
      <Button label="Filter" onClick={applyTransactionFilter} className="p-button-text" />
      <Button label="Close" onClick={() => setVisibleTransactionFilter(false)} autoFocus className="p-button-text" />
    </div>
  );

  const itemTemplate = (transaction: TransactionList, index: number) => {
    return (
      <div style={{ textAlign: "left", color: "black" }} className="w-full cards-grid" key={index}>
        <p>
          <b>Transaction id:</b> {transaction.number}<br />
          <b>Date</b>
          <hr />
          <div id='rhs'>
            <b>Amount: (50$)</b><br />
            <b>Account Balance: 300$</b>
          </div>
        </p>
      </div>
    );
  };

  const listTemplate = (items: TransactionList[]) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="grid grid-nogutter">
        {items.map((transaction, index) => itemTemplate(transaction, index))}
      </div>
    );
  };

  const footerContent = (
    <div>
      <Button label="Filter" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Close" onClick={() => setVisible(false)} autoFocus className="p-button-text" />
    </div>
  );

  const cardDetailsTemplate = (cardDetail: CardDetails, index: Key | null | undefined) => {
    return (
      <div style={{ textAlign: "left", color: "#333" }} className="w-full cards-grid" key={index}>
        <p id='Carddetail'>
          <b>Name:</b> {cardDetail.name} <br />
          <b>Card Number:</b> {cardDetail.cardNumber} <i className="pi pi-credit-card" style={{ fontSize: '1.2rem' }}></i> <br />
          <b>ID:</b> {cardDetail.id}
        </p>
        <p id='rhs2'>
          <b>Current Balance: $0.00</b><br />
          <b>Available Balance: $0.00</b>
        </p>
        <hr />
      </div>
    );
  };

  return (
    <>
      <div className='bodyhome'>
        <BreadCrumb style={{ position: "absolute", top: 80, left: 320, width: "100%" }} model={items} home={home} />
        <Layout />
        <div id='chart'>
          <Dummychart />
        </div>
        <br />
        <br />
        <br />
        {/* LEFT CARDS */}
        <div className='cardsleft'>
          <Card id='card1'>
            <div id='div1'>
              <p>Available Business Account Balance</p>
              <p>Current Business Account Reserve</p>
              <b><p style={{ color: "#1f7ef2" }}>Business Account Balance</p></b>
            </div>
            <div style={{ position: "absolute", top: 148, right: 830 }}>
              <b><p>$0.00</p>$0.00<br /><p style={{ color: "#1f7ef2" }}>$0.00</p></b>
            </div>
          </Card>
          <br />
          <Card id='card2'>
            <div id='div2'>
              <p>Business Account Balance</p>
              <p>Available Card Balance</p>
              <b><p style={{ color: "#1f7ef2" }}>Total Funds Available</p></b>
            </div>
            <div style={{ position: "absolute", top: 300, right: 830 }}>
              <b><p>$0.00</p>$0.00<br /><p style={{ color: "#1f7ef2" }}>$0.00</p></b>
            </div>
          </Card>
          <br />
          <Card id='card3'>
            <div id='div3'>
              <p id='avlcardbalance'>Available Card Balance</p>
              <p id='pencardtrans'>Pending Card Transactions</p>
              <b><p id='cardbal' style={{ color: "#1f7ef2" }}>Current Card Balance</p></b>
            </div>
            <div style={{ position: "absolute", top: 450, right: 830 }}>
              <b><p>$0.00</p>$0.00<br /><p style={{ color: "#1f7ef2" }}>$0.00</p></b>
            </div>
          </Card>
          <br />
          <Panel id='card4' header="Cards">
            <Dropdown
              id='Dropdown'
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={[{ name: '10', code: 'NY' }, { name: '25', code: 'RM' }, { name: '50', code: 'LDN' }, { name: '100', code: 'IST' }]}
              optionLabel="name"
              placeholder="10"
              className="w-full md:w-14rem"
            />
            <button id='filter3'
              style={{ fontSize: '1.5rem', color: '#1f7ef2' }}
              className="pi pi-filter"
              onClick={() => setVisible(true)}
            >
              <i></i>
            </button>
            <Dialog header="Card Filter" visible={visible} style={{ width: '50vw' }} onHide={() => { setVisible(false); }} footer={footerContent}>
              <div>
                <b><span>Name</span></b>&nbsp;&nbsp;<InputText value={name} onChange={(e) => setName(e.target.value)} />&nbsp;&nbsp;&nbsp;
                <b><span>Card No</span></b>&nbsp;&nbsp;<InputText value={cardNo} onChange={(e) => setCardNo(e.target.value)} />
              </div>
            </Dialog>

            <DataView id='Dataview1' value={filteredCardDetailsList || []} itemTemplate={cardDetailsTemplate} paginator rows={6} className="listdata-grid" />
          </Panel>
        </div>
        {/* RIGHT CARDS */}
        <div className='cardsright'></div>
        <Card id='card5'>
          <div id='div5'>
            <p>First Name</p>
            <p>Account Number</p>
          </div>
        </Card>
        <br />
        <Card id='card6'>
          <div id='div6'>
            <p>Pending Credit Transfer&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>$0.00</b> </p>
            <p>Last Credit Transfer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>$0.00</b> </p>
          </div>
        </Card>
        <br />
        <Card id='card7'>
          <div id='div7'>
            <p>MTD Card Spending &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$0.00</b></p>
            <p>YTD Card Spending  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$0.00</b></p>
          </div>
        </Card>
        <br />
        <Card id='card8'>
          <div id='div8'>
            <p>Automatic Transfers are</p>
            <p>Automatic Card Funding Is</p>
          </div>
        </Card>
        <Card id='card9'>
          <button
            id='btnimg1'
            title='Business Profile'
            style={{
              borderRadius: 100,
              padding: 10,
              border: "none",
              outline: "none",
              boxShadow: "-moz-initial",
            }}
          >
            <img id='img1' width={25} src='src/Images/Contact.png' alt="Contact" />
          </button>
          <button
            id='btnimg2'
            title='External Transfer'
            style={{
              borderRadius: 100,
              padding: 10,
              border: "none",
              outline: "none",
              boxShadow: "-moz-initial",
              cursor: 'pointer' // Add cursor pointer for better UX
            }}
            onClick={() => navigate('/external-transfer')} // Navigation added here
          >
            <img id='img1' width={25} src='src/Images/Exchange.png' alt="Exchange" />
          </button>
          <button
            id='btnimg3'
            title='B2B'
            style={{
              borderRadius: 100,
              padding: 10,
              border: "none",
              outline: "none",
              boxShadow: "-moz-initial",
            }}
            onClick={() => navigate('/B2B')}
          >
            <img id='img1' width={25} src='src/Images/B2B.png' alt="B2B" />
          </button>
          <button
            id='btnimg4'
            title='View Transfer'
            style={{
              borderRadius: 100,
              padding: 10,
              border: "none",
              outline: "none",
              boxShadow: "-moz-initial",
            }}
            onClick={() => navigate('/ViewTransfer')}
          >
            <img id='img1' width={25} src='src/Images/PaidSearch.png' alt="PaidSearch" />
          </button>
          <button
            id='btnimg5'
            title='Business Statements'
            style={{
              borderRadius: 100,
              padding: 10,
              border: "none",
              outline: "none",
              boxShadow: "-moz-initial",
            }}
          >
            <img id='img1' width={25} src='src/Images/Ledger.png' alt="Ledger" />
          </button>
        </Card>
        <Panel id='card10' header="Transaction History">
          <button
            id='btnfilter1'

            style={{ borderRadius: 150 }}
            onClick={() => setVisibleTransactionFilter(true)}
          >
            <i style={{ fontSize: '1.5rem', color: "#1f7ef2" }} className="pi pi-filter"></i>
          </button>
          <Dialog header="Transaction Filter" visible={visibleTransactionFilter} style={{ width: '50vw' }} onHide={() => setVisibleTransactionFilter(false)} footer={transactionFooterContent}>
            <div>
              <b><span>Transaction ID</span></b>&nbsp;&nbsp;<InputText value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />&nbsp;&nbsp;&nbsp;
              <b><span>Transaction Date</span></b>&nbsp;&nbsp;<InputText value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
            </div>
          </Dialog>
          <DataView id='Dataview2' value={filteredTransactionList || []} listTemplate={listTemplate} paginator rows={10} className="listdata-grid" />
        </Panel>
      </div>
    </>
  );
}

export default Welcome;
