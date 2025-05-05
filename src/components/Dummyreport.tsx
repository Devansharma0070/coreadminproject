import React, { useState, useRef, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';

interface DataRow {
    priority: number;
    controlid: string;
    Category: string;
    Rule: string;
    Accountverification: string;
    Internalresposecode: string;
    Responsecode: string;
    status: string;
    type: string;
categoryprioity: string;
}

const statusBodyTemplate = (rowData: DataRow) => {
    const statusColor = rowData.status === 'Active' ? 'green' : 'red';
    return (
        <span style={{ color: statusColor, fontWeight: 'bold' }}>
            {rowData.status}
        </span>
    );
};

const DummyReport: React.FC = () => {
    const [globalFilter, setGlobalFilter] = useState<string | null>(null);
    const [tableData, setTableData] = useState<DataRow[]>([]);
    const [editingRows, setEditingRows] = useState<{ [key: string]: boolean }>({});
    const [selectedRow, setSelectedRow] = useState<DataRow | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);
    const toast = useRef<Toast>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const statusOptions = ['Active', 'Inactive'];
    const categoryOptions = ['Card Number', 'Trancode Mapping', 'Available Balance Check', 'MCC Group', 'CVC', 'Expiration Date', 'Country'];

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to load data.  Please ensure data.json is present and valid.', life: 3000 });
            });
    }, []);

    const selectedCategoryTemplate = (option: string) => {
        return <span>{option}</span>;
    };

    const categoryOptionTemplate = (option: string) => {
        return <span>{option}</span>;
    };

    const selectedStatusTemplate = (option: string) => {
        return <span>{option}</span>;
    };

    const statusOptionTemplate = (option: string) => {
        return <span>{option}</span>;
    };

    const textEditor = (options: any) => (
        <InputText
            type="text"
            value={options.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback(e.target.value)}
        />
    );

    const statusEditor = (options: any) => (
        <Dropdown
            value={options.value}
            options={statusOptions}
            onChange={(e: DropdownChangeEvent) => options.editorCallback(e.value)}
            placeholder="Select Status"
            filter
            valueTemplate={selectedStatusTemplate}
            itemTemplate={statusOptionTemplate}
        />
    );

    const categoryEditor = (options: any) => (
        <Dropdown
            value={options.value}
            options={categoryOptions}
            onChange={(e: DropdownChangeEvent) => options.editorCallback(e.value)}
            placeholder="Select Category"
            filter
            valueTemplate={selectedCategoryTemplate}
            itemTemplate={categoryOptionTemplate}
        />
    );

    const onRowEditInit = (event: any) => {
        setEditingRows({ ...editingRows, [event.data.controlid]: true });
    };

    const onRowEditCancel = (event: any) => {
        const newEditingRows = { ...editingRows };
        delete newEditingRows[event.data.controlid];
        setEditingRows(newEditingRows);
    };

    const onRowEditSave = (event: any) => {
        const updatedRow = event.newData;

        const requiredFields = ['priority', 'controlid', 'Category', 'Rule', 'Accountverification', 'Internalresposecode', 'Responsecode', 'status', 'type', 'categoryprioity'];
        for (const field of requiredFields) {
            if (!updatedRow[field]) {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Validation Error',
                    detail: `The field "${field}" cannot be empty.`,
                    life: 3000,
                });
                return;
            }
        }

        const updatedData = [...tableData];
        const index = updatedData.findIndex((item) => item.controlid === event.data.controlid);
        updatedData[index] = updatedRow;
        setTableData(updatedData);

        const newEditingRows = { ...editingRows };
        delete newEditingRows[event.data.controlid];
        setEditingRows(newEditingRows);

        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Row Updated', life: 3000 });
    };

    const renderHeader = () => (
        <div className="table-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'black' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <InputText
                    placeholder="Search..."
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    style={{ marginRight: '1rem' }}
                />
            </div>
        </div>
    );

    const onFormButtonClick = () => {
        if (selectedRow) {
            toast.current?.show({
                severity: 'info',
                summary: 'View Details Button Clicked',
                detail: 'Selected row will be displayed below!',
                life: 3000,
            });
            setShowForm(true);
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            toast.current?.show({
                severity: 'warn',
                summary: 'No Row Selected',
                detail: 'Please select a row first!',
                life: 3000,
            });
        }
    };

    const handleCategoryChange = (e: any) => {
        if (selectedRow) {
            setSelectedRow({
                ...selectedRow,
                Category: e.value,
            });
        }
    };

    const handleStatusChange = (e: any) => {
        if (selectedRow) {
            setSelectedRow({
                ...selectedRow,
                status: e.value,
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (selectedRow) {
            setSelectedRow({
                ...selectedRow,
                [field]: e.target.value,
            });
        }
    };

    const handleFormSubmit = () => {
        if (selectedRow) {
            const updatedData = tableData.map((item) =>
                item.controlid === selectedRow.controlid ? selectedRow : item
            );
            setTableData(updatedData);
            toast.current?.show({
                severity: 'success',
                summary: 'Form Submitted',
                detail: 'Selected row updated successfully!',
                life: 3000,
            });
            setShowForm(false);
        }
    };







    return (
        <div style={{ width: 1360 }}>
            <Toast ref={toast} />
            <DataTable
                value={tableData}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                className="p-datatable-gridlines p-datatable-editable p-datatable-hoverable"
                globalFilter={globalFilter}
                header={renderHeader()}
                editMode="row"
                editingRows={editingRows}
                onRowEditInit={onRowEditInit}
                onRowEditCancel={onRowEditCancel}
                onRowEditSave={onRowEditSave}
                dataKey="controlid"
                selectionMode="single"
                selection={selectedRow}
                onSelectionChange={(e) => setSelectedRow(e.value)}
                onRowDoubleClick={(e) => {
                    setSelectedRow(e.data);
                    toast.current?.show({
                        severity: 'info',
                        summary: 'Selected',
                        detail: `Row with Control ID: ${e.data.controlid} selected.`,
                        life: 3000,
                    });
                    setShowForm(true);
                }}
            >
                <Column header="Edit" rowEditor className="button" />
                <Column field="priority" header="Priority" sortable />
                <Column field="controlid" header="Control ID" sortable />
                <Column field="Category" header="Category" sortable editor={categoryEditor} />
                <Column field="Rule" header="Rule Description" sortable editor={textEditor} />
                <Column field="Accountverification" header="Account Verification" sortable editor={textEditor} />
                <Column field="Internalresposecode" header="Internal Response Code" sortable editor={textEditor} />
                <Column field="Responsecode" header="Response Code" sortable editor={textEditor} />
                <Column field="status" header="Status" sortable editor={statusEditor} body={statusBodyTemplate} />
                <Column field="type" header="Type" sortable editor={textEditor} />
                <Column field="categoryprioity" header="Category Priority" sortable editor={textEditor} />
            </DataTable>

            <Button
                style={{
                    position: 'absolute',
                    left: 'calc(100% - 170px)',
                    bottom: '1500px',
                    backgroundColor: '#1f7ef2'
                }}
                id="formbtn"
                label="View Details"
                onClick={onFormButtonClick}
            />


            {showForm && selectedRow && (
                <div ref={formRef} style={{ marginTop: '20px' }}>
                    <form>
                        <h2>Details</h2>
                        <div
                            style={{
                                border: '1px solid #ddd',
                                padding: '20px',
                                borderRadius: '5px',
                                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                display: 'grid',
                                gridTemplateColumns: '1fr 3fr',
                                gap: '10px',
                            }}
                        >
                            <b><label style={{ color: 'black', fontSize: 'medium' }}>Priority:</label></b>
                            <InputText id="priority" value={selectedRow.priority} readOnly />
                            <b><label style={{ color: 'black' }}>Control ID:</label></b>
                            <InputText id="controlid" value={selectedRow.controlid} readOnly />
                            <b><label style={{ color: 'black' }}>Category:</label></b>
                            <Dropdown
                                id="Category"
                                value={selectedRow.Category}
                                options={categoryOptions}
                                onChange={handleCategoryChange}
                                placeholder="Select Category"
                                filter
                                valueTemplate={selectedCategoryTemplate}
                                itemTemplate={categoryOptionTemplate}
                            />
                            <b><label style={{ color: 'black' }}>Rule:</label></b>
                            <InputText
                                id="Rule"
                                value={selectedRow.Rule}
                                onChange={(e) => handleInputChange(e, 'Rule')}
                            />
                            <b><label style={{ color: 'black' }}>Account Verification:</label></b>
                            <InputText
                                id="Accountverification"
                                value={selectedRow.Accountverification}
                                onChange={(e) => handleInputChange(e, 'Accountverification')}
                            />
                            <b><label style={{ color: 'black' }}>Internal Response Code:</label></b>
                            <InputText
                                id="Internalresposecode"
                                value={selectedRow.Internalresposecode}
                                onChange={(e) => handleInputChange(e, 'Internalresposecode')}
                            />
                            <b><label style={{ color: 'black' }}>Response Code:</label></b>
                            <InputText
                                id="Responsecode"
                                value={selectedRow.Responsecode}
                                onChange={(e) => handleInputChange(e, 'Responsecode')}
                            />
                            <b><label style={{ color: 'black' }}>Status:</label></b>
                            <Dropdown
                                id="status"
                                value={selectedRow.status}
                                options={statusOptions}
                                onChange={handleStatusChange}
                                placeholder="Select Status"
                                filter
                                valueTemplate={selectedStatusTemplate}
                                itemTemplate={statusOptionTemplate}
                            />
                            <b><label style={{ color: 'black' }}>Type:</label></b>
                            <InputText
                                id="type"
                                value={selectedRow.type}
                                onChange={(e) => handleInputChange(e, 'type')}
                            />
                            <b><label style={{ color: 'black' }}>Category Priority:</label></b>
                            <InputText
                                id="categoryprioity"
                                value={selectedRow.categoryprioity}
                                onChange={(e) => handleInputChange(e, 'categoryprioity')}
                            />
                        </div>
                        <Button label="Submit" onClick={handleFormSubmit} />
                    </form>
                </div>
            )}
        </div>
    );
};

export default DummyReport;
