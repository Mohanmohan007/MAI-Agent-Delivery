import { useState } from "react";
import './HowWork.css';
import howworkbgImage from '../../assets/ProjectOwnerBanner.webp';
// import Traderbanner from '../../assets/TraderBanner.jpeg';
import jobproofilee from '../../assets/jobproofilee.png';
import Howitwork from '../../assets/Howitworkinfo.png';


import { useNavigate } from "react-router-dom";

import stepbystep from'../../assets/Stepbystep.webp';
import Reliable from'../../assets/Rectangle 92.webp';
import Payment from'../../assets/Rectangle 93.webp';
import Professional from '../../assets/Rectangle 94.webp';
import projectbased from'../../assets/Rectangle 199.webp';
import locationbased from '../../assets/Rectangle 200.webp';
import budgetbased from'../../assets/Rectangle 201.webp';
import oversight1 from'../../assets/Rectangle 211.webp';
import oversight2 from'../../assets/Rectangle 210.webp';

const HowWork = () => {
    const navigate = useNavigate();

  // State to manage active tab
  const [activeTab, setActiveTab] = useState("projectOwner");

  return (
    <section className="howwork-container">
      {/* Top Tabs */}


<>
  <button
    style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      backgroundColor: "#002d5b",
      color: "white",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "18px",
      marginLeft:'10px',
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }}

            onClick={() => navigate("/Home")}
  >
    ←
  </button>
</>      <div className="nav-tabs">
        <div className='wedh76x2'>
          <button 
            className={`tab_new ${activeTab === "projectOwner" ? "wdxxsswwe12 active" : ""}`} 
            onClick={() => setActiveTab("projectOwner")}
          >
            Project Owner
          </button>

          <button 
            className={`tab_new ${activeTab === "trader" ? "wdxxsswwe12 active" : ""}`} 
            onClick={() => setActiveTab("trader")}
          >
            Trader
          </button>

          {/* <button 
            className={`tab_new ${activeTab === "intern" ? "wdxxsswwe12 active" : ""}`} 
            onClick={() => setActiveTab("intern")}
          >
            Intern
          </button> */}
        </div>
      </div>

      {/* Content for Project Owner */}
      {activeTab === "projectOwner" && (
     
<div>
      {/* Hero section with background image */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${howworkbgImage})` }}
      >
        {/* Overlay content */}
        <div className="hero-overlay">
          <div className="hero-text-trade">
            <h2>Are you stuck with your home errands?</h2>
            <p>
              Do you need traders to paint, clean, renovate, fix your sink, do home maintenance,
              fit your kitchen, provide security, roof, or more.
            </p>
            <button className="sign-up-btn">Sign up →</button>
          </div>
        </div>

        {/* Vertical Label */}
        {/* <div className="vertical-label">Project Owner</div> */}
      </div>
      {/* Post your projects content (two columns) */}
      <div className="projects-steps">
          <div>
            <h3>- Post your projects</h3>
            <p>(Post your projects with specifications and details explaining the depth of the project, materials needed, time limit to be taken, and budget)</p>
          </div>
          <div>
            <h3>- Complete it on time</h3>
            <p>(Complete your projects successfully and gain revenue)</p>
          </div>
          <div>
            <h3>- Get paired with the right Traders</h3>
            <p>(Now you shall get paired with the right service providers for successful project completion)</p>
          </div>
          <div>
            <h3>- Projects done right</h3>
            <p>(Now you get to complete all your homes or commercial properties right and on time)</p>
          </div>
      </div>





      <div className='stepbystep'>
        <p className='stepby-p'>Step by step guide project guider</p>
        <div
        className="step-img"
        style={{ backgroundImage: `url(${stepbystep})` }}
      ></div>
      </div>
            <div className="project-matchmaking">
        <h2><strong>Project Matchmaking at its Best - Uncompromised Excellence</strong></h2>
        <p>
          With us, you're in control. Our platform is designed for simplicity and effectiveness, giving you a user-friendly experience.
          <br />
          MAI believes in uncompromised excellence, where every task, big or small, finds the right expertise.
          <br />
          Let our project matchmaking skills guide you to the right professionals without any compromise on quality. You take your time, review the estimates and profiles, and choose the perfect fit for your needs. It's not just about connecting; it's about ensuring that the right Trader, with the right skills and passion, is by your side.
        </p>
        <p>
          Experience the pinnacle of project matchmaking at MAI – where brilliance is non-negotiable
        </p>
        <button className="perfect-match-btn">Find your Perfect Match Now</button>
        <p className="matchmaking-note efd67804e">
          Make sure to provide as much information as possible regarding your project in the description section, to get a precise quote from multiple Traders.
        </p>
      </div>
    {/* ------------------------------ */}
    <div className="key-points-section">
  <h2><strong>Key Points to Help You Post Your Project successfully</strong></h2>

  <div className="key-point">
    <h3>Where?</h3>
    <p>
      Describe the exact space where the project is going – is it for the Bathroom Wall? Vanity Top? Shelf? Kitchen Worktop? Kitchen Splashback? Kitchen Island? Bedroom Headboard? Office Desk? Outdoor Floor? Is it on the levels above the ground floor? – be as precise as possible.
    </p>
  </div>

  <div className="key-point">
    <h3>When?</h3>
    <p>
      When are you aiming to get the project started and completed by?
    </p>
  </div>

  <div className="key-point">
    <h3>What?</h3>
    <p>
      What are the specifications of the project? Which material is being used? What colour? What are the dimensions? Is there a cut out? Do you require removal of accessories? What else are the additional requirements?
    </p>
  </div>
</div>
{/* --------------------- */}
    <div className="trust-section">
  <h2 className="trust-heading">
    Attach Diagrams and Layouts. Even Pictures of the Live-site will help.
  </h2>

  <div className="trust-cards">
    <div className="trust-card">
      <img src={Reliable} alt="Get Reliable Traders" className="trust-img" />
      <h3>Get Reliable Traders</h3>
      <p>
        Simply input your trade and location to swiftly discover trusted options. We simplify your search and provide peace of mind as you embark on your property improvement journey. Your perfect tradesperson is just a few clicks away, making the process hassle-free and efficient!
      </p>
    </div>

    <div className="trust-card">
      <img src={Payment} alt="Secure Your Payment" className="trust-img" />
      <h3>Secure Your Payment</h3>
      <p>
        Trust us for secure and reliable transactions. Rely on our secure escrow payment system to protect against scams. The fee remains withheld until you confirm project completion and signal payment release to the trader, ensuring a transparent and trustworthy transaction process.
      </p>
    </div>

    <div className="trust-card">
      <img src={Professional} alt="Rate Your Professional" className="trust-img" />
      <h3>Rate Your Professional</h3>
      <p>
        Leave valuable feedback, reviews, and stars on the profile of the professional who completed your project. Help new Project owners understand and select the right trader. Your contribution makes the selection process smoother and enhances the community's trust.
      </p>
    </div>
  </div>
</div>
{/*  -----------------------------------*/}
<div className="trust-section eddseww">
  <h2 className="trust-heading">You Can Do A Lot</h2>
  <div className="doalot-grid">
    <div className="doalot-card trust-card">
      <img src={projectbased} alt="Project Based" />
      <h3>Project Based</h3>
      <p>
        Use our filter to narrow down your Project Type search. Whether it's for a bathroom, kitchen, attic, fireplace, office, outdoors, or a bar, our comprehensive options cater to all needs...
      </p>
    </div>
    <div className="doalot-card trust-card">
      <img src={locationbased} alt="Location Based" />
      <h3>Location Based</h3>
      <p>
        Optimise your search with our County filter; locate Traders and professionals around your area. Whether you're in need of local expertise or prefer nearby service providers...
      </p>
    </div>
    <div className="doalot-card trust-card">
      <img src={budgetbased} alt="Budget Based" />
      <h3>Budget Based</h3>
      <p>
        Enhance your matching experience for a seamless connection with professionals that align with your budgetary preferences, at MAI...
      </p>
    </div>
   
  </div>
</div>
    {/* ------------------------------------- */}
 <div className="oversight-section eddseww ">
  <h2 className="trust-heading">Secure Project Oversight with MAI Chat</h2>

  <div className="image-row">
    {/* First Card (Image + Text) */}
    <div className="image-card">
      <img src={oversight1} alt="Construction" />
      <div className="card-text">
        Leave valuable feedback, reviews, and stars on the profile of the professional who completed
        your project. Help new Project owners understand and select the right trader. Your
        contribution makes the selection process smoother and enhances the community trust.
      </div>
    </div>

    {/* Second Card (Image Only) */}
    <img src={oversight2} alt="Team collaboration" className="image-box" />
  </div>
</div>


</div>
      )}

      {/* Content for Trader */}
{activeTab === "trader" && (
  <div>
    <div
      className="hero-section-trade"
      // style={{ backgroundImage: `url(${Traderbanner})` }}
    >
      <div className="hero-content-trade">
        {/* Left Image */}
        <div className="hero-image-trade">
          <img src={jobproofilee} alt="Trader Profile" />
        </div>

        {/* Right Content */}
        <div className="hero-overlay-trade">
          <div className="hero-text-trade">
           
            <p>
Remember, without MAl, you miss the chance to get referred by many! A Gateway to gain revenue
Be MAl your companion to help boost your building, home services, or construction-based trading businesses to the next level.            </p>
            <button className="sign-up-btn">Sign up →</button>
          </div>
        </div>
      </div>
    </div>


    <div className="projects-steps">
          <div>
            <h3>- Post your projects</h3>
            <p>(Post your projects with specifications and details explaining the depth of the project, materials needed, time limit to be taken, and budget)</p>
          </div>
          <div>
            <h3>- Complete it on time</h3>
            <p>(Complete your projects successfully and gain revenue)</p>
          </div>
          <div>
            <h3>- Get paired with the right Traders</h3>
            <p>(Now you shall get paired with the right service providers for successful project completion)</p>
          </div>
          <div>
            <h3>- Projects done right</h3>
            <p>(Now you get to complete all your homes or commercial properties right and on time)</p>
          </div>
      </div>
 <div className='stepbystep'>
        <p className='stepby-p'>Step by step guide project guider</p>
        <div
        className="step-img"
        style={{ backgroundImage: `url(${Howitwork})` }}
      ></div>
      </div>

      <div className="howitworks-section">
  <h2 className="howitworks-title">Receive Projects Year Round</h2>
  <p className="howitworks-subtitle">
    Become a part of our UK SME community of trusted & skilled project bidders!!<br />
    You’re just one sign-up away to access our high-quality services!
  </p>

  <h3 className="howitworks-heading">Choose the Areas You Serve</h3>

  <div className="howitworks-steps">
    <div className="howitworks-step">
      <span className="howitworks-icon">👤 <h4>Sign Up:</h4></span>
      <div className="edwedswe3">
       
        <p>Sign up today to join our community of skilled traders. Let’s beautify homes together - Your Next Project Awaits!</p>
      </div>
    </div>

    <div className="howitworks-step">
      <span className="howitworks-icon">📝 <h4>Update Your Profile:</h4></span>
      <div className="edwedswe3">
       
        <p>Update your trader profile now for a brighter business future with us! Your next success story is just an update away!</p>
      </div>
    </div>

    <div className="howitworks-step">
      <span className="howitworks-icon">📄        <h4>Send Proposal:</h4></span>
      <div className="edwedswe3">

        <p>Craft interesting proposals with a unique approach. Your next project is just a proposal away!</p>
      </div>
    </div>

    <div className="howitworks-step">
      <span className="howitworks-icon">💰  <h4>Bid Your Price:</h4></span>
      <div className="edwedswe3">
      
        <p>Quote your best price to stand out as the go-to-trader. Seal the deal for the winning bid!</p>
      </div>
    </div>

    <div className="howitworks-step">
      <span className="howitworks-icon">🎯   <h4>Complete the Target:</h4></span>
      <div className="edwedswe3">
     
        <p>Deliver quality work and achieve your target milestones for continued success.</p>
      </div>
    </div>
  </div>


  <button className="dscjdskj">Start Bidding Project</button>
</div>


  </div>
)}



      {/* Content for Intern */}
      {activeTab === "intern" && (
        <div>
          <div
            className="hero-section"
            style={{ backgroundImage: `url(${howworkbgImage})` }}
          >
            <div className="hero-overlay">
              <div className="hero-text">
                <h2>Intern Opportunities</h2>
                <p>
                  Gain experience, learn from industry experts, and grow your career.
                </p>
                <button className="sign-up-btn">Apply as Intern →</button>
              </div>
            </div>
          </div>

          {/* Add Intern-specific content */}
        </div>
      )}
    </section>
  );
};

export default HowWork;






















