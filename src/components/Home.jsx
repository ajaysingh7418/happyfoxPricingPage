import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/nav.css";

export default function Home() {
    const location = useLocation();

    return (
      <>
        <header className="top-bar">
          <div className="nest-top-bar">
            <div className="nest2-top-bar">
              <div className="hf-logo">
                <a className="logo">
                  <img
                    src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg"
                    width={116}
                    height={24}
                    alt=""
                  />
                </a>
              </div>
              <div className="hover">
                <span className="hf-productnav__menu-text">
                  Products
                  <img
                    className="pointer"
                    src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
                    width={7.9}
                    height={7.9}
                    alt=""
                  />
                </span>
              </div>
              <div className="login">
                <a className="login-bar">Log In</a>
              </div>
            </div>
          </div>
        </header>
        <section className="second-nav">
          <div className="new-container">
            <div className="hf-productnav__wrap">
              <div className="hf-productnav__logo-wrap">
                <div className="hf-productnav__toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a className="hf-productnav__link">
                  <img
                    src="https://assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <span className="hf-productnav__logo-text">helpdesk</span>
                </a>
              </div>
              <ul className="hf-productnav__menu-list">
                <li className="hf-productnav__menu-list-item">
                  <a className="hf-productnav__menu-link">
                    <span>
                      Features
                      <img
                        src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
                        width={10}
                        height={10}
                        alt=""
                      />
                    </span>
                  </a>
                </li>
                <li className="hf-productnav__menu-list-item">
                  <a className="hf-productnav__menu-link">
                    <span>
                      Solutions
                      <img
                        src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
                        width={7.9}
                        height={7.9}
                        alt=""
                      />
                    </span>
                  </a>
                </li>
                <li className="hf-productnav__menu-list-item">
                  <a className="hf-productnav__menu-link">
                    <span>Pricing</span>
                  </a>
                </li>
                <li className="hf-productnav__menu-list-item">
                  <a className="hf-productnav__menu-link">
                    <span>
                      Resources
                      <img
                        src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
                        width={7.9}
                        height={7.9}
                        alt=""
                      />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="hf-productnav__btn-wrap">
                <a>
                  <span className="hf-productnav__btn">Get a Demo</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="inner-wrapper">
          <div className="pricing-banner">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Plans & Pricing</h1>
                  <div className="pricing-explainer">
                    <Link to="/" className={`pricing-explainer__block agent ${location.pathname === '/' ? 'active' : ''}`}>
                      <h4 className="pricing-explainer__heading">Agent-based pricing</h4>
                    </Link>
                    <Link to="/unlimited-pricing" className={`pricing-explainer__block volume ${location.pathname === '/unlimited-pricing' ? 'active' : ''}`}>
                      <h4 className="pricing-explainer__heading">Unlimited Agents</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
