import React, { useState } from 'react';
import CARD from "./bars/Card";
import './PriceBars.css';

// Data for different plans
const baseCardData = [
    {
        title: 'Mighty',
        features: [
            'Omnichannel Ticket Creation',
            'SLA Management',
            'Knowledge Base',
            'SSO (GSuite/SAML/Azure)',
            'SSL Certificate Hosting',
            'Migration Assistance',
        ],
        buttonLabel: 'Get a Demo',
    },
    {
        title: 'Fantastic',
        features: [
            'Everything in Mighty',
            'Multi-brand Helpdesk',
            'SLA Breach Notification',
            'Custom Ticket Queues',
            '24/7 Email Support',
            'Optional EU Data Center',
        ],
        buttonLabel: 'Get a Demo',
    },
    {
        title: 'Enterprise',
        features: [
            'Everything in Fantastic',
            'Proactive Agent Collision',
            'Task Management',
            'Asset Management',
            '24/7 Email/Chat Support',
            'Uptime SLA',
        ],
        buttonLabel: 'Get a Demo',
        mostPopular: true, // Added property
    },
    {
        title: 'Enterprise Plus',
        features: [
            'Everything in Enterprise',
            'Agent Scripting',
            '2 TB Attachment Store',
            'All-time Reporting History',
            '24/7 Email/Chat/Phone Support',
            'Customer Success Manager',
        ],
        buttonLabel: 'Get a Demo',
    },
];


// Prices and savings for different plans based on period
const pricingData = {
    monthly: [
        { price: 29, savings: '' },
        { price: 49, savings: '' },
        { price: 69, savings: '' },
        { price: 89, savings: '' },
    ],
    annual: [
        { price: 25, savings: '30%' },
        { price: 45, savings: '20%' },
        { price: 65, savings: '15%' },
        { price: 85, savings: '12%' },
    ],
    twoYear: [
        { price: 23, savings: '35%' },
        { price: 43, savings: '25%' },
        { price: 63, savings: '20%' },
        { price: 83, savings: '15%' },
    ],
    threeYear: [
        { price: 21, savings: '40%' },
        { price: 41, savings: '30%' },
        { price: 61, savings: '25%' },
        { price: 81, savings: '20%' },
    ],
};

export default function PRICEBARS() {
    const [currentPrices, setCurrentPrices] = useState(pricingData.monthly);
    const [pricingType, setPricingType] = useState('monthly'); // Default to 'monthly'

    const handleTabClick = (type) => {
        setCurrentPrices(pricingData[type]);
        setPricingType(type);
    };

    return (
        <>
            <section className="agent-pricing__table visible">
                <section className="agent-pricing__bg-wrap">
                    <div className="container pricing-comparison-wrapper">
                        <div className="row2">
                            <div className="pricing-calc__tab">
                                <button
                                    className={`pricing-calc__tabs ${pricingType === 'monthly' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('monthly')}
                                >
                                    Monthly
                                </button>
                                <button
                                    className={`pricing-calc__tabs ${pricingType === 'annual' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('annual')}
                                >
                                    Annual
                                </button>
                                <button
                                    className={`pricing-calc__tabs ${pricingType === 'twoYear' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('twoYear')}
                                >
                                    2-Year Savings Plan
                                    <br />
                                    <span className="pricing-dollar__amount-snip">Paid Up-Front</span>
                                </button>
                                <button
                                    className={`pricing-calc__tabs ${pricingType === 'threeYear' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('threeYear')}
                                >
                                    3-Year Contract
                                    <br />
                                    <span className="pricing-dollar__amount-snip">Billed Annually</span>
                                </button>
                            </div>
                            <div className="top-div">
                                <div className="pricing-comparer">
                                    <div className="pricing-comparison">
                                        <div className="pricing-plans div-center">
                                            <div className="app">
                                                {baseCardData.map((data, index) => (
                                                    <CARD
                                                        key={index}
                                                        title={data.title}
                                                        price={currentPrices[index].price}
                                                        savings={currentPrices[index].savings}
                                                        features={data.features}
                                                        buttonLabel={data.buttonLabel}
                                                        showSavings={pricingType !== 'monthly'}
                                                        mostPopular={data.mostPopular} // Pass the prop
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bottom-div">
                    <div className="bottom-text" >All plans require a minimum of 5 help desk agents. Non-profit and educational organizations are eligible for a discount.</div>
                </div>
                <div className="compare-plans-icon compare-agent-based compare-agent-para">
                    <p>Compare Help Desk Plans</p>
                </div>
                <div className="pricing-comparison-table visible open-table">
                    <div className="pricing-table-header">
                        <div className="container2">
                            <div className="row3"></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
