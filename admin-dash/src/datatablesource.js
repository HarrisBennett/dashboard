export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'age',
    headerName: 'age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellwithstatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://cdn.stocksnap.io/img-thumbs/280h/child-homework_GV5GIEXDBA.jpg',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'janie Lannister',
    img: 'https://cdn.stocksnap.io/img-thumbs/280h/active-man_D03TGYP5WJ.jpg',
    status: 'passive',
    email: '2snow@gmail.com',
    age: 25,
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://cdn.stocksnap.io/img-thumbs/280h/young-man_SEZ0BOQJBD.jpg',
    status: 'pending',
    email: '3snow@gmail.com',
    age: 35,
  },
  {
    id: 4,
    username: 'michael',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7d1P46IueyF5AY24A7EzOB1xM0g7H5levA&usqp=CAU',
    status: 'active',
    email: '4snow@gmail.com',
    age: 35,
  },
  {
    id: 5,
    username: 'John',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LEQMVwB2w0ganeGo7BZi6hIcEPa5Oyp5kQ&usqp=CAU',
    status: 'active',
    email: '5snow@gmail.com',
    age: 35,
  },
  {
    id: 6,
    username: 'snap',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCZYN271Cz6vd_6UA6fcxTnYHWJfD--Kv6A&usqp=CAU',
    status: 'active',
    email: '6snow@gmail.com',
    age: 35,
  },
  {
    id: 7,
    username: ':)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QNYvZN9zezcOQxm5lKKX3xAvQSnPZr5-Hw&usqp=CAU',
    status: 'active',
    email: '7snow@gmail.com',
    age: 35,
  },
  {
    id: 8,
    username: 'blacknight',
    img: 'https://cdn.stocksnap.io/img-thumbs/280h/XEONXBBAJN.jpg',
    status: 'active',
    email: '8snow@gmail.com',
    age: 35,
  },
];
