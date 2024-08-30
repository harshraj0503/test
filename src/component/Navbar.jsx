import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faTachometerAlt,
    faChartLine,
    faReceipt,
    faTasks,
    faExclamationTriangle,
    faTrashAlt,
    faClipboard,
    faMoneyBillWave,
    faPercentage,
    faListAlt,
    faBoxOpen,
    faUserClock,
    faUserTie,
    faUndo,
    faBell,
    faFlag,
  } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Store from './Store';
import { toggleBody, toggleDashboard } from './Slice';
const Navbar = ({ isActive }) => {
    const dispatch = useDispatch(); 

    if (!isActive) return null; 

    // Handle click events
    const handleClick = (index) => {
        if (index === 5) { 
            dispatch(toggleBody());
            dispatch(toggleDashboard());
        }
        else if(index != 5){
          dispatch(toggleBody());
        }
    };

    const menuItems = [
        { name: "Reports", icon: faChartLine },
        { name: "Sales Report", icon: faReceipt },
        { name: "Transactions", icon: faTasks },
        { name: "Sales Activity", icon: faChartLine },
        { name: "Suspicious Trends", icon: faExclamationTriangle },
        { name: "Suspicious Transactions", icon: faExclamationTriangle },
        { name: "Delete Tracker", icon: faTrashAlt },
        { name: "LP Report", icon: faClipboard },
        { name: "Payment Report", icon: faMoneyBillWave },
        { name: "Discount Report", icon: faPercentage },
        { name: "Discounts List", icon: faListAlt },
        { name: "Product Report", icon: faBoxOpen },
        { name: "Employee Time", icon: faUserClock },
        { name: "Employee Events", icon: faUserTie },
        { name: "Refund List", icon: faUndo },
        { name: "Alerts Report", icon: faBell },
        { name: "Alerts List", icon: faFlag },
    ];

    return (
        <nav className="p-4 flex flex-wrap gap-4 mt-4">
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href={`#${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-white bg-blue-800 hover:bg-blue-400 p-5 rounded flex items-center"
                    onClick={() => handleClick(index)} 
                >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.name}
                </a>
            ))}
        </nav>
    );
};

  const DashboardPage = () => {
    const [isDashboardActive, setIsDashboardActive] = useState(true);
  const isDashboardOpen=useSelector(Store=>Store.dashboard.isDashboardOpen);
    return (
      <div>
       
        {isDashboardOpen &&
        <div className="mt-4">
          <Navbar isActive={isDashboardActive} />
        </div>}
      </div>
    );
  };

export default DashboardPage
