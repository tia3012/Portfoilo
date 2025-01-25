import React from "react";
import "./hero.css";
export default function hero() {
  return (
    <section className="hero flex">
      <div className="left ">
        <div className="">
        <img src="/logo.jpg" alt="" className="hero-logo" />
        <span className="icon-verified"></span>
        </div>
        <h1>Aspiring React Web Developer</h1>
        <p>
          I’m Fatma Mahmoud, a beginner specializing in React, with a foundation
          in PHP and SQL. I’m passionate about crafting interactive user
          interfaces and exploring data-driven solutions as I grow my web
          development skills.
        </p>
        <ul className="flex">
      <li><a href=""><p className="icon-github"></p></a></li>
      <li><a href=""><p className="icon-facebook"></p></a></li>
       <li><a href=""><p className="icon-twitter"></p></a></li>
    </ul> 
      </div>
      <div className="right border">hero</div>
    </section>
  );
}
