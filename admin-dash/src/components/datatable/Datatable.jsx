import React, { useState } from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
const Datatable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const action = {
    field: 'action',
    headerName: 'action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="actionbutton">
          <Link to="users/test">
            <div className="cellwithview">view</div>
          </Link>
          <div
            className="cellwithdelete"
            onClick={() => handleDelete(params.row.id)}
          >
            delete
          </div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new User
        <Link
          to="/users/new"
          style={{ textDecoration: 'none' }}
          className="adding"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(action)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
