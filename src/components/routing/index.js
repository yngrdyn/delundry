import React, { Component } from "react"
import { Route } from "react-router-dom"
import styled from "styled-components";

import Navbar from "../navbar";
import App from "../../App";
import AboutUs from "../about-us";
import Pricing from "../pricing";
import HowWeDoIt from "../how-we-do-it";
import ContactUs from "../contact-us";
import Faqs from "../faqs";

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
                    <Route path="/how-we-do-it" component={HowWeDoIt} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/faqs" component={Faqs} />
                </Wrapper>
            </div>
        )
    }

}

export default Routes

const Wrapper = styled.div`
  padding: 7rem 0 0;
`;