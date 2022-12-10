import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../Data/data.json'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'email', headerName: 'Email', width: 150, sortable: false },
    { field: 'gender', headerName: 'Gender', width: 100, sortable: false },
    { field: 'ip_address', headerName: 'IP address', width: 150, sortable: false },
    { field: 'airport_code', headerName: 'Airport Code', width: 100, sortable: false },
    { field: 'time', headerName: 'Time', width: 100, sortable: false },
    { field: 'mobile', headerName: 'Mobile', width: 100, sortable: false },
    { field: 'area', headerName: 'Area', width: 100, sortable: false },
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
                rows={rows}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}