import React from "react";

import Header from "../patterns/header";
import { HeroCareer } from "../patterns/hero";
import { CareerCard } from "../patterns/card";
import Footer from "../patterns/footer";

import { jobs } from "../data/job";

//importing styles
import "../styles/screens/careers.css";

//importing media assets
import careerImg from "../assets/images/careers.jpg";
import frame1 from "../assets/cards/careercard1.svg";
import frame2 from "../assets/cards/careercard2.svg";
import frame3 from "../assets/cards/careercard3.svg";
import frame4 from "../assets/cards/careercard4.svg";
import workplace from "../assets/cards/workplace.svg";
import workmatters from "../assets/cards/workmatters.svg";
import vacation from "../assets/cards/vacation.svg";
import meals from "../assets/cards/meals.svg";
import health from "../assets/cards/health.svg";
import community from "../assets/cards/community.svg";

const Careers = () => {

  return (
    <>
      <div className="career">
        <div className="career-landing">
          <img src={careerImg} alt="career" className="bg-img" />
          <Header />
          <HeroCareer />
        </div>

        <div className="life">
          <div className="block-left">
            <p className="block-title">Life At Zevo</p>

            <p>
              We offer a warm and amiable work freedom that caters to an
              individual’s attainment of personal goals while also accomplishing
              the desired community goals. Our working partners are an
              enthusiastic group of empowered youth with great vision for the
              future. Each of them will accompany you in every step of your
              journey with our community and will ensure you are comfortable
              throughout.
            </p>
            <p>
              Here at Zevo Corporation, we believe that work and play go hand in
              hand. Optimal output comes from optimal working partner
              satisfaction. There are zero prejudice, bias and capital
              obsessions draining the individuals efforts in our work culture.
              Transparency is the secret of our strength and success as a crew.
            </p>
           <a href="#jobs"> <button className="secondary-btn">See open roles</button></a>
          </div>
          <div className="block-right" >
            <div className="image-block-one">
              <div>
                <img src={frame1} alt="frame1" />
              </div>
              <div>
                <img src={frame2} alt="frame2" />
              </div>
            </div>
            <div className="image-block-two">
              <div>
                <img src={frame3} alt="frame3" />
              </div>
              <div>
                <img src={frame4} alt="frame4" />
              </div>
            </div>
          </div>
        </div>

        <div className="values">
          <p className="block-title">Our Values</p>
          <p>
            We, strategize our mission based on sustainable economy, impacts on
            the culture, natural resources and collectively, the humanity in
            long term thus preceeding technovations without giving up the
            humanity, nature, emotions, and racing bluntly with capital
            obsessions.
          </p>
          <div className="wrapper">
            <CareerCard
              title="Your work matters"
              src={workmatters}
              detail="Be comfortable and flexible as we guarantee freedom of work wherever you demand"
            />
            <CareerCard
              title="Flexible vacation policy"
              src={vacation}
              detail="We want our crew to be healthy, travel often, get time to give back, with paid time-offs."
            />
            <CareerCard
              title="Unbiased work culture"
              src={health}
              detail="We are united under differences thus creating a culture that values diverse perspectives and backgrounds."
            />
            <CareerCard
              title="Surreal workspace"
              src={workplace}
              detail="Workspace with sustainable greenery, artworks, and natural accompaniments to relax the minds flexibly"
            />
            <CareerCard
              title="catered meals"
              src={meals}
              detail="Food is the fuel, of existence, for artists. Our culinary team provides organic, farmed meals free of cost."
            />
            <CareerCard
              title="strong community"
              src={community}
              detail="We offer opportunities to our community regardless of race, color, religion, nation, age, and untouchabilities."
            />
          </div>
        </div>

        <div className="job" id="jobs">
          <p className="block-title">explore job openings</p>
          <p>
            Be authentic. That’s who we’re inviting. Our culture celebrates and
            supports unique talents, souls and truth within.
          </p>
          <table >
            <tr>
              <th>Job title</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Location</th>
            </tr>
            {jobs.map((job) => {
              return (
                <>
                  <tr>
                    <td>{job.title}</td>
                    <td>{job.dep}</td>
                    <td>{job.exp}</td>
                    <td>{job.location}</td>
                    <td style={{ display: "flex", alignItems: "center" }}>
                      <a
                        href={job.link}
                        style={{ cursor: "pointer",color:'#6e7dff' }}
                      >
                        APPLY NOW{" "}
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
      <div className="line">
        <p></p>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
