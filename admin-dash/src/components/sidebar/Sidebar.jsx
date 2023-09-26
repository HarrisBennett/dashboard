import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import CottageIcon from '@mui/icons-material/Cottage';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Face2Icon from '@mui/icons-material/Face2';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ADMIN</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li className="icon">
            <DashboardIcon />
            <span>dashboard</span>
          </li>

          <p className="title">LISTS</p>

          <li className="icon">
            <Person3OutlinedIcon />
            <span>Users</span>
          </li>
          <li className="icon">
            <Inventory2OutlinedIcon />
            <span>Products</span>
          </li>
          <li className="icon">
            <BorderColorIcon />
            <span>Orders</span>
          </li>
          <li className="icon">
            <ElectricRickshawIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li className="icon">
            <CottageIcon />
            <span>States</span>
          </li>
          <li className="icon">
            <EditNotificationsIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li className="icon">
            <HealthAndSafetyIcon />
            <span>Systems Health</span>
          </li>
          <li className="icon">
            <Face2Icon />
            <span>Logs</span>
          </li>
          <li className="icon">
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li className="icon">
            <AccountBoxIcon />
            <span>Profile</span>
          </li>
          <li className="icon">
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="but"></div>
        <div className="but"></div>
      </div>
    </div>
  );
};

export default Sidebar;