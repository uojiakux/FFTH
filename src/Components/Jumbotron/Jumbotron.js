import React, { Component } from 'react';
import firstimage from '../../images/opener-picture.jpg';
import secondimage from '../../images/second-picture.jpg';
import { /*withStyles,*/ MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const styles = {
  header: {
    backgroundColor: "white",
    color: "#212529",
    fontFamily: "sans-serif",
    fontWeight: "3em",
    borderRadius: "0px 50px",
    marginLeft: "12.5%",
    width: "75%",
    textAlign: "center"
  },
  description: {
    backgroundColor: "white",
    color: "#212529",
    padding: "0.5em",
    fontFamily: "sans-serif",
    fontWeight: "3em",
    borderRadius: "0px 50px"
  },
  images: {
    width: "100%",
    height: window.innerHeight - 150,
    border: "10px solid black"
  },
  box: {
    marginTop: "1.5em"
  }
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'sans-serif'
    ].join(','),
  },
});

class Jumbotron extends Component {


  render() {
    return (
      <div>
      <MuiThemeProvider theme={theme}>
      <div className="container" style={styles.box}>
        <div className="col-md-auto">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block img-responsive" src={firstimage} alt="First slide" style={styles.images} />
                <div className="carousel-caption d-md-block">
                  <h1 style={styles.header}>Welcome to Foundation for the Helpless</h1>
                  <h3 style={styles.description}>Your new favorite TV organizing app</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block img-responsive" src={secondimage} alt="Second slide" style={styles.images} />
                <div className="carousel-caption d-md-block">
                  <h1 style={styles.header}>Sign Up or Log In</h1>
                  <h3 style={styles.description}>Logging in gives you access to create your own personalized watchlist</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}


export default Jumbotron;