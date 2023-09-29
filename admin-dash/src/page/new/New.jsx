import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://static.thenounproject.com/png/6143206-200.png'
              }
              alt=""
              className=""
            />
          </div>
          <div className="right">
            <form action="" className="">
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
