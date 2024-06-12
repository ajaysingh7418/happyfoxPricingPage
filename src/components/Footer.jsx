import React from 'react';
import './Footer.css';

const Footer = () => {
  const features = [
    "Email Ticketing", "Knowledge Base", "Help Desk Reporting", "Help Desk Automation",
    "Multilingual Help Desk", "Self Service Portal", "SLA Management", "Satisfaction Survey",
    "Email Notification", "Help Desk Customization", "Help Desk Ticket Features",
    "Multilingual Knowledge Base", "Internal Knowledge Base", "HappyFox SMS",
    "Asset Management", "Task Management", "Agent Scripting"
  ];

  const businesses = ["Enterprise", "Small-Business"];
  const industries = [
    "Education, Retail, Travel", "IT Services, Telecom, Government",
    "Non-Profit Organizations", "Healthcare, Real Estate, Airlines", "Manufacturing, Shipping"
  ];
  const teams = ["Customer Support, IT HR, Accounting", "Facilities, Marketing, Sales"];
  const useCases = [
    "Help Desk Software", "Ticketing System", "Shared Inbox Software", "Trouble Ticket Management",
    "Issue Tracking Software", "Customer Service", "Email Support Software", "Customer Complaint Management",
    "Internal Help Desk Software", "Ticket Tracking Software", "Contact Center Software",
    "IT Help Desk Software", "Case Management Software", "Cloud Help Desk", "Mobile Help Desk",
    "Remote Customer Support", "Multi-Brand Helpdesk", "Software Request Management System",
    "Field Service Software", "Work Order Management"
  ];

  const resources = ["E-Books & Guides", "Webinars", "Customer Stories", "Videos", "Blog", "Help Desk API Docs"];
  const company = ["About Us", "Our Customers", "Jobs", "Press & Media", "Partner program"];
  const contact = ["Contact Sales", "Get Support", "1-949-535-2220", "support@happyfox.com"];

  return (
    <div className='footer-top'>
      <footer className="footer">
        <div className='hf-footer__logo-wrap'>
          <img src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" width={45} alt="HappyFox Logo" />
        </div>
        <div className='top-footer'>
          <div className="footer-container">
            <div className="footer-column">
              <h2>Features</h2>
              {features.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
            </div>
            <div className="footer-column">
              <h2>For Businesses</h2>
              {businesses.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
              <h2>For Industries</h2>
              {industries.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
              <h2>For Teams</h2>
              {teams.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
            </div>
            <div className="footer-column">
              <h2>Use Cases</h2>
              {useCases.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
            </div>
            <div className="footer-column">
              <h2>Resources</h2>
              {resources.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
              <h2>Company</h2>
              {company.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
              <h2>Contact Us</h2>
              {contact.map((item, index) => (
                <div key={index} className="footer-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
