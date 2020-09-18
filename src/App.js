import React from "react";
import "./App.scss";
import logo from "./img/brands.svg";
import headerImg from "./img/header.jpg";
import profileImg from "./img/profile-img.jpg";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </header>
      <nav className="sidebar">
        <ul>
          <a href="/profile">
            {" "}
            <li>Profile</li>
          </a>
          <a href="/messages">
            {" "}
            <li>Messages</li>
          </a>
          <a href="/news">
            {" "}
            <li>News</li>
          </a>
          <a href="/music">
            <li>Music</li>
          </a>
          <a href="/settings">
            <li>Settings</li>
          </a>
        </ul>
      </nav>
      <main className="content">
        <div
          style={{ backgroundImage: `url(${headerImg})` }}
          className="content__background-image"
        ></div>

        <div className="content__profile">
          <img
            className="content__profile-image"
            src={profileImg}
            alt="profile img"
          />
          <div className="content__profile-info">
            <h1>Robert Patterson</h1>
            <p>Date of birth: January 31</p>
            <p>City: London</p>
            <p>Education: University of Bristol</p>
            <p>
              Website:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://automarket-vdomarkas.herokuapp.com/"
              >
                AutoMarket
              </a>
            </p>
          </div>
        </div>
        <div className="content__posts">
          <div>
            <h2> New post</h2>
            <form action="">
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button type="submit">Post</button>
            </form>
          </div>

          <div>
            <h2>My posts</h2>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
              <li>Post 4</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
