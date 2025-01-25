// @ts-nocheck
import React from "react";
import { useState } from "react";
import "./header.css";
export default function header() {
  const [modal, setmodal] = useState(false);
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setmodal(true);
        }}
        className="menu icon-menu flex"
      />
      <nav>
        <ul className="flex">
          <li>
            <a href="../about">About</a>
          </li>
          <li>
            <a href="">Articals</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="flex mode">
        <span  className="icon-sun1"
        onClick={() => {
          setmodal();
        }}
      />
        <span></span>
      </button>
      
      

      {modal && (
        <div className="fixed ">
          <ul className="modal ">
            <div>
              <button
                className="icon-x-circle"
                onClick={() => {
                  setmodal(false);
                }}
              />
            </div>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articals</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
