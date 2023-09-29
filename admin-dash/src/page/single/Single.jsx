import React from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table1 from '../../components/table/Table';
const Single = () => {
  return (
    <div className="Single">
      <Sidebar />
      <div className="singlecontainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://cdn.stocksnap.io/img-thumbs/280h/child-homework_GV5GIEXDBA.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">Jane Doe </h1>
                <div className="detailitem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 1234 1234 </span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton st.234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={'User spending(last 6 months)'} />
          </div>
        </div>
        <div className="bottom">
          <div className="listtitle">The Lastest Transaction</div>
          <Table1 />
        </div>
      </div>
    </div>
  );
};

export default Single;
