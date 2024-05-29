import React from "react";
import Title from "./title";
import { tours } from "../data";

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="our" subTitle="tours" />
        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { image, date, title, info, location, duration, cost } = tour;
            return (
              <article key={title} className="tour-card">
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {location}
                    </p>
                    <p>from ${cost}</p>
                    <p>{duration} days</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;
