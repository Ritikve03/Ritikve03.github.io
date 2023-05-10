import React from "react";
import abt from "./About.module.css";
import { Button, Heading, Link } from "@chakra-ui/react";
// import resumeme from "../Image/resumeme.pdf";
import resume from "../Image/resume.pdf"
import mypic from "../Image/ritik.jpg"

const About = ({ about }) => {

  const handleOpenLink = () => {
    window.open("https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing")
  }

  return (
    <div id="about" className="about section">
      <div ref={about} className={abt.box}>
        <h5> Get to Know </h5>
        <Heading as='h2' color={"white"} size='2xl' fontWeight={400}> About </Heading>
        <div className={abt.main}>
          <div className={abt.aboutdetail} >
            <p id="user-detail-intro">
            A Full Stack Web Developer specializing in the MERN stack and a background in civil engineering, Brings a unique blend of technical and analytical skills to web development. Has relevant hands-on experience in building multiple websites from scratch and is committed to delivering high-quality results that exceed client expectations
            </p>
            <div className={abt.buttonbox}>
              <Button style={{border:"1px solid white", borderRadius:"5px", padding:"5px" ,backgroundColor:"black",color:"white"}} id="resume-button-2" onClick={handleOpenLink} _hover={{ borderColor: "blue", color: "blue" }} colorScheme='white' variant='outline'>
                <a 
                  id="resume-link-2"
                  href={resume}
                  download="Ritik_Verma_Resume"
                  style={{textDecoration:"none",color:"white", fontSize:"15px"}}
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
          <div className={abt.picspace}>
            <div className={abt.circle}>
              <img src={mypic} id={abt.im2} className="home-img" alt="myimages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
    