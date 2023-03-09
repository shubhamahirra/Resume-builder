import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";

import { data } from "../Data/data";
import {
  HeaderTemplate,
  HeadingTemp,
  ExperienceTemplate,
  EducationTemplate,
  KeySkillTemplate,
} from "../Components";

const Template2 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}
    >
      <HeaderTemplate
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#9B536F"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <HeadingTemp color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <ExperienceTemplate
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <HeadingTemp color={"#9B536F"} title={"Education"} />
        <EducationTemplate education={educationinfo} />
        <HeadingTemp color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <KeySkillTemplate key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;
