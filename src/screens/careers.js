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
              We offer a warm and amiable work environment that caters to an
              individual’s attainment of personal goals while also accomplishing
              the organizational goals. Our working partners are a group of
              empowered youth with a great vision for the future. Each of them
              will accompany you in every step of your journey with us and will
              ensure that you are comfortable throughout.
            </p>
            <p>
              Here at Zevo Corporation, we believe that work and play go hand in
              hand. Optimal output comes from optimal employee satisfaction. We
              have no prejudices, biases, or capital obsessions that drain the
              individual's efforts, in our work culture. Transparency is the
              secret of our strength and success as a crew.
            </p>
            <a href="#jobs">
              {" "}
              <button className="secondary-btn">See open roles</button>
            </a>
          </div>
          <div className="block-right">
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
            Our mission is based on improving sustainability, cultural impacts,
            and natural resources. We put the greater good of humanity above
            everything else. This is what sets us apart from others who blindly
            race towards revenue, mergers and acquisitions.
          </p>
          <div className="wrapper">
            <CareerCard
              title="Your work matters"
              src={workmatters}
              detail="Be comfortable. We are flexible in terms of where you want to work. Work where you are comfortable and convenient to do so."
            />
            <CareerCard
              title="Flexible vacation policy"
              src={vacation}
              detail="We want our crew to be healthy, travel often, and get time to give back to society, backed by paid days off"
            />
            <CareerCard
              title="Unbiased work culture"
              src={health}
              detail="We believe in unity in diversity. Our work culture values diverse perspectives and backgrounds."
            />
            <CareerCard
              title="Picturesque Workspace"
              src={workplace}
              detail="The workspace ensures sustainable greenery and artworks to relax the mind and ease the eyes."
            />
            <CareerCard
              title="Delectable Meals"
              src={meals}
              detail="Food is the fuel of existence. Our culinary team provides organic, farm-fresh meals free of cost."
            />
            <CareerCard
              title="Strong Community"
              src={community}
              detail="We offer opportunities to our community irrespective of race, color, religion, age etc."
            />
          </div>
        </div>

        <div className="job" id="jobs">
          <p className="block-title">explore job openings</p>
          <p>
            Be authentic. That’s what we need. Our work culture celebrates and
            supports unique talents, souls, and the truth within.
          </p>
          <table>
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
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ cursor: "pointer", color: "#6e7dff" }}
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
