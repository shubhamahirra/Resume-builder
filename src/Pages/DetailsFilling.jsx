import React, { useState } from "react";
import Header from "../Components/Header/Header";
import "../Styles/DetailsFilling.css";

import {
  DetailFillingSidebar,
  Education,
  KeySkills,
  PersonalInfo,
  Preview,
  WorkExperience,
} from "../Components";
const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Header active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfo setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeySkills setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperience setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <Education setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <Preview setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
