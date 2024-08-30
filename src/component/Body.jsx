import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFilter,
  faLink,
  faSyncAlt,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons'; 
import { useSelector } from 'react-redux';

const Body = () => {
    const isbodyOpen=useSelector(Store=>Store.dashboard.isBodyOpen)
    return (
        <>
      {isbodyOpen && <div className="p-4 bg-gray-100">
        {/* Header Section */}
        <div className="bg-white shadow-md p-4 flex items-center ">
          <div className="flex items-center space-x-4 justify-between w-full">
            <h1 className="text-xl font-semibold">SUSPICIOUS TRANSACTION</h1>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 cursor-pointer" />
              <FontAwesomeIcon icon={faFilter} className="text-gray-600 cursor-pointer" />
              <FontAwesomeIcon icon={faLink} className="text-gray-600 cursor-pointer" />
              <FontAwesomeIcon icon={faSyncAlt} className="text-gray-600 cursor-pointer" />
              <FontAwesomeIcon icon={faArrowDown} className="text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
  
        {/* Filter Section */}
        <div className="bg-white shadow-md p-4 mt-4 flex space-x-4 overflow-x-auto">
          <button className="bg-gray-200 px-4 py-2 rounded">By Date</button>
          <button className="bg-gray-200 px-4 py-2 rounded">By Revenue</button>
          <button className="bg-gray-200 px-4 py-2 rounded">By Register</button>
          <button className="bg-gray-200 px-4 py-2 rounded">By Transaction Type</button>
          <button className="bg-gray-200 px-4 py-2 rounded">By Flags</button>
        </div>
  
        {/* Table Section */}
        <div className="bg-white shadow-md mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Register</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cash</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Third Party</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example Row */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">New York</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-08-29</td>
                <td className="px-6 py-4 whitespace-nowrap">$1,000</td>
                <td className="px-6 py-4 whitespace-nowrap">Register 1</td>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">Sale</td>
                <td className="px-6 py-4 whitespace-nowrap">12345</td>
                <td className="px-6 py-4 whitespace-nowrap">$800</td>
                <td className="px-6 py-4 whitespace-nowrap">$200</td>
                <td className="px-6 py-4 whitespace-nowrap">$50</td>
                <td className="px-6 py-4 whitespace-nowrap">$10</td>
                <td className="px-6 py-4 whitespace-nowrap">$500</td>
                <td className="px-6 py-4 whitespace-nowrap">$300</td>
                <td className="px-6 py-4 whitespace-nowrap">$200</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>}
      </>
    );
  };

export default Body
