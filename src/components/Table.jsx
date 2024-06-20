import React, { useState } from 'react';
import '../assets/table.css';
import ticketData from '../GlobalDataHeader/TicketManagement.json';
import customerData from '../GlobalDataHeader/CustomerManagement.json';
import ComparisonRow from './TableComp';
import ThirdPartyIntegration from '../GlobalDataHeader/ThirdPartyIntegrations.json';

const Table = () => {
  const columns = ['Mighty', 'Fantastic', 'Enterprise', 'EnterprisePlus'];

  const ticketFeatures = Object.keys(ticketData.HelpDeskAutomation);
  const customerFeatures = Object.keys(customerData.CustomerManagement);
  const ThirdPartyFeatures = Object.keys(ThirdPartyIntegration.ThirdPartyIntegrations);

  const [showAllThirdParty, setShowAllThirdParty] = useState(false);

  const displayedThirdPartyFeatures = showAllThirdParty ? ThirdPartyFeatures : ThirdPartyFeatures.slice(0, 5);

  const toggleShowAll = () => {
    setShowAllThirdParty(!showAllThirdParty);
  };

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

          <div className="top-ticks">Third party Integrations</div>
          {displayedThirdPartyFeatures.map((feature) => (
            <ComparisonRow key={feature} feature={feature} columns={columns} data={ThirdPartyIntegration.ThirdPartyIntegrations} />
          ))}

          {!showAllThirdParty && (
            <button className="view-all-button" onClick={toggleShowAll}>
              VIEW ALL
              <span style={{ paddingLeft: '3px' }}>+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
