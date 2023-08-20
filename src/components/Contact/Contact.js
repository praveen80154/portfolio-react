// import "./Contact.css";

import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";

// import Send from "./Send";
export default function Contact( ) {
    return <>
        <Container  fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         Contact Me
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <p className="py-6">Contact me</p>
      <div className="flex-shrink-0 w-full max-w-sm bg-transparent shadow-2xl card">
        <form id="sendemail">
          <div className="card-body">
            <div className="bg-transparent form-control bg-opacity-90">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="editor"
                id=""
                cols="30"
                rows="10"
                className="input input-bordered"
              
                required
              ></textarea>
            </div>
            <button
              className="m-5 ml-10 btn btn-neutral"
              type="submit"
              id="submit_button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        </Row>
      </Container>
      
    </Container></>
}