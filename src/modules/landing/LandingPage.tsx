import React, { Component } from "react";
import {
  Icon,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Fade, Zoom } from "react-awesome-reveal";
import "./styles.scss";

class LandingPage extends Component {
  registerNode: null | Element = null;
  state = {
    email: "",
    name: "",
    password: "",
    showPassword: false,
    nameErrors: [],
    emailErrors: [],
    passwordErrors: [],
  };

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

    // httpService
    //   .post("signup", dataToSend)
    //   .then(() => this.props.close())
    //   .catch(({ data }) => {
    //     let emailErrors = [],
    //       nameErrors = [],
    //       passwordErrors = [];
    //     if (Array.isArray(data)) {
    //       data.forEach((err) => {
    //         if (err.toLowerCase().includes("email")) {
    //           emailErrors.push(err);
    //         }
    //         if (err.toLowerCase().includes("name")) {
    //           nameErrors.push(err);
    //         }
    //         if (err.toLowerCase().includes("password")) {
    //           passwordErrors.push(err);
    //         }
    //       });
    //       this.setState({ emailErrors, nameErrors, passwordErrors });
    //     }
    //   });
  };

  render() {
    const {
      name,
      email,
      password,
      showPassword,
      nameErrors,
      emailErrors,
      passwordErrors,
    } = this.state;
    return (
      <div>
        <div className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Connector</span>
              <span className="heading-primary-sub"> Try it now</span>
            </h1>
            <button onClick={this.scrollToRegister} className="btn btn-white">
              Register now
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
                      src="https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
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
                  <form className="register-form" onSubmit={this.handleSubmit}>
                    <TextField
                      variant="outlined"
                      label="Name"
                      name="name"
                      error={nameErrors.length > 0}
                      helperText={nameErrors.join(", ")}
                      onChange={this.handleChange}
                      value={name}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/*<PersonOutlineOutlined className="middleIcon" />*/}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      variant="outlined"
                      label="Email"
                      error={emailErrors.length > 0}
                      helperText={emailErrors.join(", ")}
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/*<MailOutlineRounded className="middleIcon" />*/}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      variant="outlined"
                      label="Password"
                      error={passwordErrors.length > 0}
                      helperText={passwordErrors.join(", ")}
                      onChange={this.handleChange}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/*<LockRounded />*/}
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle password visibility"
                              // onClick={this.handleClickShowPassword}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                      <span className="whiteText">Sign up</span>
                    </Button>
                  </form>
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
