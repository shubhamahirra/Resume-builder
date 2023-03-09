import React from "react";
import Header from "../Components/Header/Header";
import "../Styles/Home.css";
import { templates } from "../Data/templates";
import { BlackScreen } from "../Components";
import { Button, Stack } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate } from "../Redux/actions";
import Box from "@mui/material/Box";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const Home = (props) => {
  const navigate = useNavigate();

  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  return (
    <>
      <Header active={"Resume Templates"} />

      <>
        <Box className="home">
          <Box className="home-templates-cont">
            <h2 className="template-header-title">Templates</h2>
            <p className="template-select-text">
              Select a template to get started
            </p>

            <Stack
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr 1fr",
                  xl: "1fr 1fr 1fr 1fr",
                },
                gridGap: "30px",
              }}
            >
              {templates.map((template) => {
                return (
                  <Box
                    key={template.id}
                    id="template"
                    className="templates-img-cont"
                  >
                    <img
                      className="template-img"
                      src={template.template_img}
                      alt={template.template_name}
                    />
                    <BlackScreen />
                    <Button
                      className="use-template-btn"
                      onClick={() => navigateToFillDetails(template.id)}
                      size="medium"
                      variant="contained"
                    >
                      Use Template
                    </Button>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
