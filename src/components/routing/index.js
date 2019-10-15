import React, { Component } from "react"
import { Route } from "react-router-dom"
import styled from "styled-components";

import App from "../../App";
import AboutUs from "../about-us";
import ContactUs from "../contact-us";
import Faqs from "../faqs";
import Footer from '../footer';
import HowWeDoIt from "../how-we-do-it";
import Navbar from "../navbar";
import Pricing from "../pricing";
import TermsAndConditions from "../terms-and-conditions";

class Routes extends Component {

    state = {
        navbarOpen: false
    }
    
    handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <IberiaLaundry>
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
                    <Route path="/terms-and-conditions" component={TermsAndConditions} />
                </Wrapper>
                <Footer></Footer>
            </IberiaLaundry>
        )
    }

}

export default Routes

const Wrapper = styled.div`
  padding: 7rem 0 0;
  flex-grow: 1;
`;

const IberiaLaundry = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;