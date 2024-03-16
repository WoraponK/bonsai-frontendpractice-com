"use client"

import React, { useState } from 'react'
import Image from 'next/image';

import { FaCheck, FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface FreqQuestion {
  id: number;
  title: string;
  des: string;
  active: boolean
}

interface PlanPricing {
  id: number;
  title: string;
  about: string;
  price: { amount: number }[];
  features: { des: string }[];
}

interface AddOn {
  id: number;
  title: { text: string }[];
  des: { text: string }[];
  price: { amount: number }[];
  learnmore: { active: boolean }[];
}

function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [freqAskedQuestions, setFreqAskedQuestions] = useState<FreqQuestion[]>([
    {
      id: 1,
      title: `How does the free trial work?`,
      des: `When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.`,
      active: false
    },
    {
      id: 2,
      title: `Can I change plans anytime?`,
      des: `Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".`,
      active: false
    },
    {
      id: 3,
      title: `How do I pause my Bonsai subscription?`,
      des: `We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.`,
      active: false
    },
    {
      id: 4,
      title: `What is your refund policy?`,
      des: `If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.`,
      active: false
    },
  ]);

  const planPricingData: PlanPricing[] = [
    {
      id: 1,
      title: `Starter`,
      about: `Ideal for freelancers and contractors just starting out.`,
      price: [
        {
          amount: 24
        },
        {
          amount: 17
        }
      ],
      features: [
        {
          des: 'All Templates'
        },
        {
          des: 'Unlimited Clients & Projects'
        },
        {
          des: 'Invoicing & Payments'
        },
        {
          des: 'Proposals & Contracts'
        },
        {
          des: 'Tasks & Time Tracking'
        },
        {
          des: 'Client CRM'
        },
        {
          des: 'Expense Tracking'
        },
        {
          des: 'Up to 5 Project Collaborators'
        },
      ]
    },
    {
      id: 2,
      title: `Professional`,
      about: `Everything a growing independent business needs to thrive.`,
      price: [
        {
          amount: 39
        },
        {
          amount: 32
        }
      ],
      features: [
        {
          des: 'Everything in Starter plus...'
        },
        {
          des: 'Custom Branding'
        },
        {
          des: 'Forms & Questionnaires'
        },
        {
          des: 'Workflow Automations'
        },
        {
          des: 'Client Portal'
        },
        {
          des: 'QuickBooks Integration'
        },
        {
          des: 'Calendly Integration'
        },
        {
          des: 'Zapier Integration'
        },
        {
          des: 'Up to 15 Project Collaborators'
        },
      ]
    },
    {
      id: 3,
      title: `Business`,
      about: `The perfect package for small businesses and agencies.`,
      price: [
        {
          amount: 79
        },
        {
          amount: 52
        }
      ],
      features: [
        {
          des: 'Everything in Starter and Professional plus...'
        },
        {
          des: 'Subcontractor Management'
        },
        {
          des: 'Hiring Agreement Templates (1099 contracts)'
        },
        {
          des: 'Subcontractor Onboarding'
        },
        {
          des: 'Talent Pool'
        },
        {
          des: '3 Team Seats (additional seats $9/month)'
        },
        {
          des: 'Accountant Access'
        },
        {
          des: 'Connect Multiple Bank Accounts'
        },
        {
          des: 'Unlimited Subcontractors'
        },
        {
          des: 'Unlimited Project Collaborators'
        },
      ]
    },
  ]

  const addOnData: AddOn[] = [
    {
      id: 1,
      title: [
        {
          text: `Collaborators`
        },
        {
          text: `Accounting & Tax Assistant`
        }
      ],
      des: [
        {
          text: `Invite other users to specific projects for limited access and functionality.`
        },
        {
          text: `Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.`
        }
      ],
      price: [
        {
          amount: 0
        },
        {
          amount: 100
        }
      ],
      learnmore: [
        {
          active: false
        },
        {
          active: true
        }
      ]
    },
    {
      id: 2,
      title: [
        {
          text: `Partners`
        },
        {
          text: `Partners`
        }
      ],
      des: [
        {
          text: `Invite other users for full account access and company management.`
        },
        {
          text: `Invite other users for full account access and company management.`
        }
      ],
      price: [
        {
          amount: 9
        },
        {
          amount: 90
        }
      ],
      learnmore: [
        {
          active: false
        },
        {
          active: false
        }
      ]
    },
    {
      id: 3,
      title: [
        {
          text: `Bonsai Tax`
        },
        {
          text: `Collaborators`
        }
      ],
      des: [
        {
          text: `Track expenses, identify write-offs, and estimate quarterly taxes easily.`
        },
        {
          text: `Invite other users to specific projects for limited access and functionality.`
        }
      ],
      price: [
        {
          amount: 10
        },
        {
          amount: 0
        }
      ],
      learnmore: [
        {
          active: true
        },
        {
          active: false
        }
      ]
    },
  ]

  const handleAccordion = (id: number) => {
    setFreqAskedQuestions((prevData) =>
      prevData.map((q) =>
        q.id === id ? { ...q, active: !q.active } : q
      )
    )
  }

  // Components
  const CardWorkflow = () => (
    <>
      {
        planPricingData.map((data) => (
          <div className='card-pricing' key={data.id}>
            {data.id === 2 && (
              <div className="card-pricing--ribbon">Most Popular</div>
            )}
            <div className='card-pricing--header'>
              <article>
                <h2>{data.title}</h2>
                <p>{data.about}</p>
              </article>
              <article>
                <h3><span>$</span>{isYearly ? (data.price[1].amount) : (data.price[0].amount)}<span>/month</span></h3>
                {isYearly ? (<p>Billed yearly</p>) : null}
              </article>
            </div>
            <div className='card-pricing--features'>
              <div>
                <ul className='list list-vertical'>
                  {data.features.map((feature) => (
                    <li key={feature.des}>
                      <FaCheck />
                      {feature.des}
                    </li>
                  ))}
                </ul>
              </div>
              <button className='btn btn-primary'>Start free</button>
            </div>
          </div>
        ))
      }
    </>
  );

  const PlanPricingSection = () => (
    <section className='plan-pricing'>
      <header className='plan-pricing--header'>
        <h2>Plans & Pricing</h2>
        <div className='plan-pricing--header-right'>
          <aside>
            <div className='plan-pricing--header-right-img'>
              <Image
                src={'/images/two-months-free.svg'}
                fill
                alt='Two months free'
              />
            </div>
            <span style={isYearly ? { color: '#cccccc' } : {}}>Monthly</span>
            <label htmlFor="check" className='switch'>
              <input
                type="checkbox"
                name="check"
                id="check"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
              />
              <span></span>
            </label>
            <span style={isYearly ? {} : { color: '#cccccc' }}>Yearly</span>
          </aside>
        </div>
      </header>
      <div className="plan-pricing--content">
        <CardWorkflow />
      </div>
    </section>
  );

  const CardAddOn = () => (
    <>
      {addOnData.map((data) => (
        <div className='card-addon' key={data.id}>
          <article>
            <h3>{isYearly ? (data.title[1].text) : (data.title[0].text)}</h3>
            <p>{isYearly ? (data.des[1].text) : (data.des[0].text)}</p>
          </article>
          <aside>
            {isYearly ? (
              data.price[1].amount === 0 ? (
                <span>Free</span>
              ) : (
                <>
                  <span>${data.price[1].amount}</span>
                  <span>/yearly</span>
                </>
              )) : (
              data.price[0].amount === 0 ? (
                <span>Free</span>
              ) : (
                <>
                  <span>${data.price[0].amount}</span>
                  <span>/monthly</span>
                </>
              ))
            }
          </aside>
        </div>
      ))}
    </>
  );

  const AddOnSection = () => (
    <section className='add-on'>
      <header className='add-on--header'>
        <h2>Super charge your work with add-ons</h2>
      </header>
      <div className='add-on--content'>
        <CardAddOn />
      </div>
    </section>
  );

  const BusinessSection = () => (
    <section className='business-ad'>
      <article>
        <p>It&apos;s <span>your</span> business.</p>
        <p>We&apos;re here to help it grow.</p>
      </article>
      <button className='btn btn-primary'>Start free</button>
    </section>
  );

  const FreqAsk = () => (
    <section className='freq-ask'>
      <header className='freq-ask--header'>
        <h2>Frequently Asked Questions</h2>
      </header>
      <div className='freq-ask--content'>
        <ul className='accordion'>
          {freqAskedQuestions.map((data) => (
            <li key={data.id}>
              <div onClick={() => handleAccordion(data.id)}>
                <span>{data.title}</span>
                {data.active ? (<FaAngleUp />) : (<FaAngleDown />)}

              </div>
              {data.active && (
                <p>{data.des}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <main className='wrapper space-content'>
      <PlanPricingSection />
      <AddOnSection />
      <BusinessSection />
      <FreqAsk />
    </main>
  )
}

export default Home