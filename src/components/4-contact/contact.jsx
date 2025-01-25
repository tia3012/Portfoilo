import React from "react";
import "./contact.css";
import { margin } from "@mui/system";
export default function contact() {
  return (
    <>
      <section className=" contact">
        <h1>
          <span className="icon-mail"></span>Contact us
        </h1>
        <p>
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>

        <div className="flex">
          <form action="" method="post" className="">
            <div className="flex" style={{marginBottom:"1rem"}}>
             
              <label htmlFor="email">Email Address</label>
              <input required type="email" id="email"  />
            </div>
            <div className="flex">
              <label htmlFor="message">Your Message</label>
              <textarea required name="" id="Message"></textarea>
            </div>

            <button>submit</button>
          </form>
          <div className="border">animation</div>
        </div>
      </section>
    </>
  );
}
