import React, { useEffect, useRef } from "react";
import "./Services.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const servicesList = [
  {
    id: 1,
    icon: <i className="bx bx-wifi"></i>,
    heading: "High Speed Internet",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
  },
  {
    id: 2,
    icon: <i className="bx bxs-bowl-hot"></i>,
    heading: "Healthy Meals",
    para: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
  },
  {
    id: 3,
    icon: <i className="bx bxs-home"></i>,
    heading: "Homely Stay",
    para: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space.",
  },
  {
    id: 4,
    icon: <i className="bx bxs-car"></i>,
    heading: "Transportation",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 5,
    icon: <i className="bx bx-cycling"></i>,
    heading: "Food Delivery",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 6,
    icon: <i className="bx bx-map-alt"></i>,
    heading: "Tourism",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 7,
    icon: <i className="bx bxs-flag-alt"></i>,
    heading: "Job",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 8,
    icon: <i className="bx bxs-car"></i>,
    heading: "Rental Service",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 9,
    icon: <i className="bx bxs-cart-alt"></i>,
    heading: "Online Shop",
    para: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
];
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const listRef = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-container",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <section id="services" className="services-container">
      <h1 className="services-heading">Services</h1>
      <ul className="list-container">
        {servicesList.map((e, index) => (
          <li
            key={e.id}
            className="card-li"
            ref={(el) => (listRef.current[index] = el)}
          >
            {e.icon}
            <h2>{e.heading}</h2>
            <p>{e.para}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Services;
