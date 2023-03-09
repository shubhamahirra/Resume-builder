import { Container } from "@mui/system";
import React from "react";
import "./KeySkillTemplate.css";

const KeySkillTemplate = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default KeySkillTemplate;
