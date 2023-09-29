import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image1 from '../images/1.jpg';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';

const Table1 = () => {
  const rows = [
    {
      id: 113213123,
      product: 'Acer Nto 5',
      img: image1,
      customer: 'John smith',
      date: '1 March',
      amount: 786,
      method: 'cash on delivery',
      status: 'Approved',
    },
    {
      id: 113214342,
      product: 'Playstation 5',
      img: image2,
      customer: 'John Doe',
      date: '12 May',
      amount: 231,
      method: 'cash on delivery',
      status: 'pending',
    },
    {
      id: 11343212,
      product: 'Acer asda 5',
      img: image3,
      customer: 'Michael John',
      date: '13 March',
      amount: 525,
      method: 'cash on delivery',
      status: 'Approved',
    },
    {
      id: 41234231,
      product: 'AbenDops 10',
      img: image4,
      customer: 'Michael John',
      date: '13 March',
      amount: 1525,
      method: 'cash on delivery',
      status: 'pending',
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="cellWrapper tableCell">
                <img
                  src={row.img}
                  alt=" "
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                {row.product}
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table1;
