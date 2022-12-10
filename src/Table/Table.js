import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../Data/data.json'

const columns = [
    //Columns of the table
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'ip_address', headerName: 'IP address', width: 150 },
    { field: 'airport_code', headerName: 'Airport Code', width: 130 },
    { field: 'time', headerName: 'Time', width: 100 },
    { field: 'mobile', headerName: 'Mobile', width: 100 },
    { field: 'area', headerName: 'Area', width: 100 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

//Iterating the data and mapping it to the columns
const rows = data.map((item, index) => {
    return {
        id: index,
        firstName: item.first_name,
        lastName: item.last_name,
        email: item.email,
        gender: item.gender,
        ip_address: item.ip_address,
        airport_code: item.airport_code,
        time: item.time,
        mobile: item.mobile,
        area: item.area
    }
})


export default function DataTable() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid
                sx={{
                    '.MuiDataGrid-columnHeaderTitleContainer': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    },
                    '.MuiDataGrid-cell:hover': {
                        cursor: 'pointer',
                    },
                    '.MuiDataGrid-row:hover': {
                        boxShadow: '1px 1px 13px gray',
                        transition: 'all 0.2s ease-in-out',
                    }
                }}
                rows={rows}
                columns={columns}
                pageSize={15} // Pagination
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}