import React from 'react';

const ComparisonRow = ({ feature, columns, data }) => (
  <div className="comparison-row" key={feature}>
    <div className="comparison-cell comparison-cell-left">
      <a className='left-row'>
        {feature.replace(/([A-Z])/g, " $1")}
      </a>
    </div>
    {columns.map((col) => {
      const value = data[feature][col];
      return (
        <React.Fragment key={col}>
          {typeof value === 'boolean' && (
            <div className="comparison-cells">
              <a className='ticks-flex'>
                <img
                  src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                  alt="Tick"
                  className="tick-icon"
                />
              </a>
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default ComparisonRow;
