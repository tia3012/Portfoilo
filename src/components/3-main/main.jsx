import React from "react";
import "./main.css";
import { ClassNames } from "@emotion/react";
export default function main() {
  return (
    <main className="flex">
      <section className="flex left ">
        <button className="active">All Project</button>
        <button onClick={(button) =>{true}} ClassName={true ? "active": null }>HTML&CSS</button>
        <button>JavaScript</button>
        <button>ReactJs</button>
        <button>php&SQL</button>
      </section>


      <section className="right flex">
 
{["1", "2", "3",4 , 5, 6].map((item) => {
  return(
     <article key={item} className="card">
          <img src="/1.jpg" alt="" />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            nostrum fuga obcaecati beatae cupiditate eligendi atque quos autem
            nihil, deleniti sequi blanditiis.
          </p>
          <div className="flex">
          <ul className="flex">
          <li><a href=""><p className="icon-github"></p></a></li>
          <li><a href=""><p className="icon-twitter"></p></a></li>
          </ul>
          <a href="" className="flex"> more  <span className="icon-arrow-long-right"></span></a>
          </div>
        </article>
  )})}       
       
      </section>
    </main>
  );
}
