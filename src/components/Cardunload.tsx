import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import Layout from './Layout/Layout';
import { Card } from 'primereact/card';
import './Cardunload.css';
import { TabPanel, TabView } from 'primereact/tabview';


interface Customer {
    id: number;
    accountNo: string;
    firstName: string;
    lastName: string;
    cardNo: string;
    availableBalance: number;
}

export default function CustomersDemo() {
    const [customers] = useState<Customer[]>([
        {
            id: 1,
            accountNo: 'AC12345',
            firstName: 'Devansh',
            lastName: 'Sharma',
            cardNo: '6879****2857',
            availableBalance: 1000
            
        },
        {
            id: 2,
            accountNo: 'AC12346',
            firstName: 'Mohit',
            lastName: 'Sharma',
            cardNo: '9886****5667',
            availableBalance: 2500
        },
        {
            id: 3,
            accountNo: 'AC12347',
            firstName: 'Rahul',
            lastName: 'Shukla',
            cardNo: '2646****3966',
            availableBalance: 1500
        },
        {
            id: 4,
            accountNo: 'AC12348',
            firstName: 'Abhishek',
            lastName: 'Singh',
            cardNo: '7958****3745',
            availableBalance: 8500
        },
        {
            id: 5,
            accountNo: 'AC12387',
            firstName: 'Ayush',
            lastName: 'Tiwari',
            cardNo: '2345****7986',
            availableBalance: 500
        },
        {
            id: 6,
            accountNo: 'AC12349',
            firstName: 'Aditya',
            lastName: 'Khare',
            cardNo: '1001****1232',
            availableBalance: 1500
        }
    ]);
    const items: MenuItem[] = [{ label: 'Card Unload' }];
    const home: MenuItem = { icon: 'pi pi-wallet' }

    const [selectedCustomers, setSelectedCustomers] = useState<Customer[]>([]);
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <IconField iconPosition="left">
                
                    <InputText style={{position:"absolute",left:970,top:-12,width:150,height:25}} value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search..." />
                </IconField>
            </div>
        );
    };

    const accountNoBodyTemplate = (rowData: Customer) => rowData.accountNo;
    const firstNameBodyTemplate = (rowData: Customer) => rowData.firstName;
    const lastNameBodyTemplate = (rowData: Customer) => rowData.lastName;
    const cardNoBodyTemplate = (rowData: Customer) => rowData.cardNo;
    const availableBalanceBodyTemplate = (rowData: Customer) => formatCurrency(rowData.availableBalance);

    return (
        <div className="card">
             <BreadCrumb style={{position:"absolute",top:80,left:320,width:"100%"}} model={items} home={home} />
            <Layout></Layout>



            <Card className='tablecard'>

                <TabView style={{marginTop:-44}}>
              
    <TabPanel header={<span style={{ color: 'black' }}>Bulk Load</span>}>
                     <DataTable 
                    id='Datatable' 
                    value={customers} 
                    paginator 
                    header={renderHeader()} 
                    rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} 
                    dataKey="id" 
                    selectionMode="checkbox" 
                    selection={selectedCustomers} 
                    onSelectionChange={(e) => setSelectedCustomers(e.value)}
                    globalFilter={globalFilterValue} 
                    emptyMessage="No customers found."
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="accountNo" header="Account No" sortable filter filterPlaceholder="Search by account" style={{ minWidth: '14rem' }} body={accountNoBodyTemplate} />
                    <Column field="firstName" header="First Name" sortable filter filterPlaceholder="Search by first name" style={{ minWidth: '14rem' }} body={firstNameBodyTemplate} />
                    <Column field="lastName" header="Last Name" sortable filter filterPlaceholder="Search by last name" style={{ minWidth: '14rem' }} body={lastNameBodyTemplate} />
                    <Column field="cardNo" header="Card No" sortable filter filterPlaceholder="Search by card no" style={{ minWidth: '14rem' }} body={cardNoBodyTemplate} />
                    <Column field="availableBalance" header="Available Balance" sortable style={{ minWidth: '14rem' }} body={availableBalanceBodyTemplate} />
                </DataTable>
      
                  </TabPanel>
                   
                
                </TabView>
               
            </Card>
        </div>
    );
}
