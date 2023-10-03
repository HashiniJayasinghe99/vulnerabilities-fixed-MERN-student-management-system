import React from "react";
import "./nav.css";
import it from "../images/it.png";
import bussness from "../images/bussness.png";
import eng from "../images/eng.png";

function Home() {
  return (
    <div>
      <section className="colored-section" id="testimonials">
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2 className="testimonial-text">Faculty Of Computing</h2>
              <img className="testimonial-image" src={it} alt="dog-profile" />
              <div className="courses_list">
                <ul>Software Engineering</ul>
                <ul>Information Technology</ul>
                <ul>Data Science</ul>
                <ul>Cyber Security</ul>
              </div>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">Faculty Of Engineering</h2>
              <img className="testimonial-image" src={eng} alt="lady-profile" />
              <div className="courses_list">
                <ul>Civil Engineering</ul>
                <ul>Mechanical Engineering</ul>
                <ul>Electrical Engineering</ul>
                <ul>Electronic Engineering</ul>
              </div>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">Faculty Of Bussness</h2>
              <img
                className="testimonial-image"
                src={bussness}
                alt="lady-profile"
              />
              <div className="courses_list">
                <ul>Bussness Management</ul>
                <ul>Hotel Management</ul>
                <ul>Hospital Management</ul>
                <ul>Human Resourses Management</ul>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            role="button"
            href="#testimonial-carousel"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            role="button"
            href="#testimonial-carousel"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
