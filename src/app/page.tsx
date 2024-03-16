import React from 'react'

import { FaCheck, FaAngleRight } from "react-icons/fa6";

function Home() {

  const CardWorkflow = () => (
    <div className='card-pricing'>
      <div className='card-pricing--header'>
        <h2>Workflow</h2>
        <h3><span>$</span>19 <span>/month</span></h3>
      </div>
      <div>
        <ul className='list list-vertical'>
          <li>
            <FaCheck />
            Unlimited Clients & Projects
          </li>
          <li>
            <FaCheck />
            Proposais
          </li>
          <li>
            <FaCheck />
            Contracts
          </li>
          <li>
            <FaCheck />
            Invoicing & Payments
          </li>
          <li>
            <FaCheck />
            Client CRM
          </li>
          <li>
            <FaCheck />
            Project Management
          </li>
          <li>
            <FaCheck />
            Task & Time Tracking
          </li>
          <li>
            <FaCheck />
            iOS, Android, Chrome, & Mac Apps
          </li>
        </ul>
      </div>
      <button className='btn btn-primary'>Start free</button>
    </div>
  );

  const CardWorkflowPlus = () => (
    <div className='card-pricing'>
      <div className="card-pricing--ribbon">Most Popular</div>
      <div className='card-pricing--header'>
        <h2>Workflow</h2>
        <h3><span>$</span>29 <span>/month</span></h3>
      </div>
      <div>
        <ul className='list list-vertical'>
          <li>
            <FaCheck />
            Everything in Workflow, plus...
          </li>
          <li>
            <FaCheck />
            White-labelled client experience
          </li>
          <li>
            <FaCheck />
            Client forms and questionnaires
            <p className='badge badge-warning'>New</p>
          </li>
          <li>
            <FaCheck />
            Workflow automations
          </li>
          <li>
            <FaCheck />
            Subcontracting (client-mode)
          </li>
          <li>
            <FaCheck />
            Calendly integration
          </li>
          <li>
            <FaCheck />
            Client portal
          </li>
          <li>
            <FaCheck />
            Priority support
          </li>
        </ul>
      </div>
      <button className='btn btn-primary'>Start free</button>
    </div>
  );

  const PlanPricingSection = () => (
    <section className='plan-pricing'>
      <header className='plan-pricing--header'>
        <h2>Plans & Pricing</h2>
        <div className='plan-pricing--header-right'>
          <article>
            <p>2 months free!</p>
          </article>
          <aside>
            <span>Monthly</span>
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              <span></span>
            </label>
            <span>Yearly</span>
          </aside>
        </div>
      </header>
      <div className="plan-pricing--content">
        <CardWorkflow />
        <CardWorkflowPlus />
      </div>
    </section>
  );

  const AddOnSection = () => (
    <section className='add-on'>
      <header className='add-on--header'>
        <h2>Super charge your work with add-ons</h2>
      </header>
      <div className='add-on--content'>
        <div className='card-addon'>
          <article>
            <h3>Collaborators</h3>
            <p>Invite other users to specific projects for limited access and functionality.</p>
          </article>
          <aside>
            <span>Free</span>
          </aside>
        </div>
        <div className='card-addon'>
          <article>
            <h3>Partners</h3>
            <p>Invite other users for full accounts access and company management.</p>
          </article>
          <aside>
            <span>$9</span>
            <span>/month</span>
          </aside>
        </div>
        <div className='card-addon'>
          <article>
            <h3>Bonsai Tax</h3>
            <p>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
            <a href="#" className='centered-content'>Learn more <FaAngleRight /></a>
          </article>
          <aside>
            <span>$10</span>
            <span>/month</span>
          </aside>
        </div>
      </div>
    </section>
  );

  return (
    <main className='wrapper space-content'>
      <PlanPricingSection />
      <AddOnSection />
    </main>
  )
}

export default Home