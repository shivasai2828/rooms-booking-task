
import React from "react";
import "./Services.css";

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

const Services = () => {
  return (
    <section id="services" className="services-container">
      <h1 className="services-heading">Services</h1>
      <ul className="list-container">
        {servicesList.map((e) => (
          <li key={e.id} className="card-li">
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
