import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="w-50 mx-auto mt-5">
      <h2 className="text-center mb-4">Our Terms and Conditions</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quidem
        minima delectus sequi, voluptatem atque consectetur deserunt doloremque
        tempora iusto repellat maxime cupiditate quibusdam, non rem, velit
        nihil? Rerum vitae nesciunt sed obcaecati libero expedita laboriosam.
        Blanditiis sint eum sequi reprehenderit quia itaque, distinctio corporis
        perferendis ducimus consectetur nihil repudiandae.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
