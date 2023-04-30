import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="mt-4">
      <h4>Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-dark">
        <FaGithub /> Login with Github
      </Button>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img className="w-100" src={bg} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h4>Create an Amazing Newspaper</h4>
          <p className="mt-2 mb-3">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="rounded-0" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
