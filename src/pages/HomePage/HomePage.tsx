import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header/Header";
import FeaturedArea from "../../Components/FeaturedArea/FeaturedArea";
import Services from "../../Components/Services/Services";

import EducationAndSkills from "../../Components/EducationAndSkills/EducationAndSkills";
import FreelanceWork from "../../Components/FreelanceWork/FreelanceWork.tsx";
import ContactInfoProfiles from "../../Components/ContactInfoProfiles/ContactInfoProfiles.tsx";
import ContactUs from "../../Components/ContactUs/ContactUs.tsx";
import BottomBar from "../../Components/BottomBar/BottomBar.tsx";
import AboutUs2 from "../../Components/AboutUs/AboutUs2.tsx";
import Project from "../../Components/Projects/Project.tsx";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Personal Portfolio HDK.IO</title>
      </Helmet>
      <Header />
      <FeaturedArea />
      {/* <AboutUs /> */
       }
       <AboutUs2/>
      <EducationAndSkills />
      <Services />
      {/* <MyWorkExperience2 /> */}

       <Project/>
      {/* <Portfolio/> */}

      <FreelanceWork />
      {/* <Testimonials /> */}
      {/* <BlogPost/> */}
      {/* <Partners/> */}
      <ContactInfoProfiles />
      <ContactUs />
      {/* <Hire/> */}
      <BottomBar />
    </Fragment>
  );
};

export default HomePage;
