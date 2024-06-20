import React, { useState } from 'react';
import CARD from "./PriceBars/Card";
import '../assets/PriceBars.css';

const baseCardData = [
    {
        title: 'Starter',
        features: [
            'Omnichannel Ticket Creation',
            'SLA Management',
            'Knowledge Base',
        ],
        buttonLabel: 'Get a Demo',
    },
    {
        title: 'Growth',
        features: [
            'Everything in Mighty',
            'Multi-brand Helpdesk',
            'SLA Breach Notification',
        ],
        buttonLabel: 'Get a Demo',
    },
    {
        title: 'Scale',
        features: [
            'Everything in Fantastic',
            'Proactive Agent Collision',
            'Task Management',
        ],
        buttonLabel: 'Get a Demo',
        mostPopular: true,
    },
    {
        title: 'Scale Plus',
        features: [
            'Everything in Enterprise',
            'Agent Scripting',
            '2 TB Attachment Store',
        ],
        buttonLabel: 'Get a Demo',
    },
];

const pricingData = {
    monthly: [
        { price: 2990, savings: '' },
        { price: 4990, savings: '' },
        { price: 6990, savings: '' },
        { price: 8932, savings: '' },
    ],
    annual: [
        { price: 2553, savings: '' },
        { price: 4553, savings: '' },
        { price: 6543, savings: '' },
        { price: 851, savings: '' },
    ],
    twoYear: [
        { price: 2323, savings: '35%' },
        { price: 4334, savings: '25%' },
        { price: 6335, savings: '20%' },
        { price: 8365, savings: '15%' },
    ],
    threeYear: [
        { price: 2187, savings: '40%' },
        { price: 4134, savings: '30%' },
        { price: 6132, savings: '25%' },
        { price: 8117, savings: '20%' },
    ],
};

export default function PRICEBARS2() {
    const [currentPrices, setCurrentPrices] = useState(pricingData.monthly);
    const [pricingType, setPricingType] = useState('monthly');

    const handleTabClick = (type) => {
        setCurrentPrices(pricingData[type]);
        setPricingType(type);
    };

    return (
        <section className="agent-pricing__table visible">
            <section className="agent-pricing__bg-wrap">
                <div className="container pricing-comparison-wrapper">
                    <div className="row2">
                        <div className="pricing-calc__tab">
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
                                                    mostPopular={data.mostPopular}
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
    );
}
