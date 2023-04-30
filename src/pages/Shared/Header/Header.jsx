import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";

const Header = () => {

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="latest-info p-4">
        <div className="d-flex">
          <Button className="rounded-0" variant="danger">
            Latest
          </Button>
          <Marquee speed={50} pauseOnHover={true}>
            I can be a React component, multiple React components, or just some
            text.... I can be a React component, multiple React components, or
            just some text.... I can be a React component, multiple React
            components, or just some text....
          </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default Header;
