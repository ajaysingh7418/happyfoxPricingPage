import React from 'react';
import './table.css';
import ticketData from './TicketManagement.json';
import customerData from './CustomerManagement.json';
import ComparisonRow from './TableComp';

const Table = () => {
  const columns = ['Mighty', 'Fantastic', 'Enterprise', 'EnterprisePlus'];

  // Extracting features from both data sources
  const ticketFeatures = Object.keys(ticketData.HelpDeskAutomation);
  const customerFeatures = Object.keys(customerData.CustomerManagement);

  return (
    <div className="App">
      <div className="comparison-container">
        <div className="header-container">
          <span className="comparison-header">
            <span className="empty-cell"></span>
            {columns.map((col) => (
              <div className="comparison-cell" key={col}>
                {col}
              </div>
            ))}
          </span>
        </div>

        <div className="ticks-marks">
          <div className="top-ticks">Ticket Management</div>
          {ticketFeatures.map((feature) => (
            <ComparisonRow key={feature} feature={feature} columns={columns} data={ticketData.HelpDeskAutomation} />
          ))}

          <div className="top-ticks">Customer Management</div>
          {customerFeatures.map((feature) => (
            <ComparisonRow key={feature} feature={feature} columns={columns} data={customerData.CustomerManagement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
