import React, { Component } from "react"
import { Route } from "react-router-dom"
import styled from "styled-components";

import AboutUs from "../about-us";
import Pricing from "../pricing";
import App from "../../App";
import Navbar from "../navbar";


class Routes extends Component {

    state = {
        navbarOpen: false
    }
    
    handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <div>
                <Navbar 
                    navbarState={this.state.navbarOpen} 
                    handleNavbar={this.handleNavbar}
                />
                <Wrapper>
                    <Route exact path="/" component={App} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/pricing" component={Pricing} />
                </Wrapper>
            </div>
        )
    }

}

export default Routes

const Wrapper = styled.div`
  margin-top: 5rem;
`;