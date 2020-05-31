import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import { Fade, Zoom } from "react-awesome-reveal";
import "./styles.scss";
import { LoginForm } from "../../components/LoginForm";

class LandingPage extends Component {
  registerNode: null | Element = null;

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  scrollToRegister = () => {
    if (this.registerNode) {
      this.registerNode.scrollIntoView({ behavior: "smooth" });
    }
  };

  handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">PeoCon</span>
              <span className="heading-primary-sub">Connect needed people</span>
            </h1>
            <button onClick={this.scrollToRegister} className="btn btn-white">
              Join us now
            </button>
          </div>
        </div>
        <main>
          <section className="section-about">
            <div className="center-text margin-bottom">
              <Fade direction={"top"}>
                <h2 className="heading-secondary">New modern Social Network</h2>
              </Fade>
            </div>
            <div className="row">
              <Fade duration={500} direction={"left"} delay={100} cascade>
                <div>
                  <h3 className="heading-tertiary">
                    Be able to share information
                  </h3>
                  <p className="paragraph">
                    Meet new people and share information with them
                  </p>
                  <h3 className="heading-tertiary">
                    Always keep in touch with you friends
                  </h3>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nec vehicula nibh. Phasellus eget augue odio. Nulla suscipit
                    sollicitudin metus, sed hendrerit dolor euismod a.
                  </p>
                </div>
              </Fade>
              <div>
                <Fade direction={"right"} delay={300}>
                  <div className="composition">
                    <img
                      src="https://images.unsplash.com/photo-1519155031214-e8d583928bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=50"
                      alt="Screenshot 1"
                      className="composition_photo "
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </section>
          <section className="features">
            <div className="row">
              <div className="feature-box">
                <Icon style={{ fontSize: "5rem" }} className="feature_icon">
                  public
                </Icon>
                <h3 className="heading-tertiary">
                  Explore friends over the world
                </h3>
                <p className="feature-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="feature-box">
                <Icon style={{ fontSize: "5rem" }} className="feature_icon">
                  mood
                </Icon>
                <h3 className="heading-tertiary">Have fun with other people</h3>
                <p className="feature-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="feature-box">
                <Icon style={{ fontSize: "5rem" }} className="feature_icon">
                  thumb_up_alt
                </Icon>
                <h3 className="heading-tertiary">Everybody loves us</h3>
                <p className="feature-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="feature-box">
                <Icon style={{ fontSize: "5rem" }} className="feature_icon ">
                  poll
                </Icon>
                <h3 className="heading-tertiary">
                  Fast growing social network
                </h3>
                <p className="feature-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </section>
          <section className="registration-section">
            <Zoom duration={500}>
              <h2
                ref={(node) => (this.registerNode = node)}
                className="heading-secondary"
              >
                Register now
              </h2>
            </Zoom>
            <div className="row">
              <Zoom duration={500} delay={500}>
                <div className="register">
                  <LoginForm
                    className={"register-form"}
                    disableTitle={true}
                    showSendLinkAgain={false}
                    onSubmit={this.handleSubmit}
                    onRegisterClick={() => {}}
                  />
                </div>
              </Zoom>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default LandingPage;
