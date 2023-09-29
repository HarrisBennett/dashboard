import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="circle">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="money">$420</p>
        <p className="disc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultamount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemresult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultamount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemresult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultamount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
