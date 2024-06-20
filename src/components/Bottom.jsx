import React from "react";
import "../assets/Bottom.css";

const productItems = [
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/helpdesk-logo-2022.svg",
    text: "Help Desk",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/service-desk-logo-2022.svg",
    text: "Service Desk",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/happyfox-ai/happyfox-ai-icon.svg",
    text: "Happyfox AI",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/assist-ai-logo.svg",
    text: "Assist AI",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/chatbot-logo-2022.svg",
    text: "Chatbot",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/workflows-logo-2022.svg",
    text: "Workflows",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/bi-logo-2022.svg",
    text: "Business Intelligence",
  },
  {
    imgSrc:
      "https://assets.www.happyfox.com/v2/images/site-nav/livechat-logo-2022.svg",
    text: "Live Chat",
  },
];

const Bottom = () => {
  return (
    <div className="bottom-footer">
      <div className="new-container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-product-lists">
              <div className="product-list-wrap">
                <ul className="product-list-inner">
                  {productItems.map((item, index) => (
                    <li key={index}>
                      <a>
                        <img src={item.imgSrc} alt="" />
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
