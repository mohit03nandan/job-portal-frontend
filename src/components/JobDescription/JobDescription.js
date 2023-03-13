import React from "react";

const JobDescription = (props) => {



  
  return (
    <div>
      <div class="card" style={{ boxShadow: "0px 0px 9px 1px" }}>
        <div class="card-body">
          <div class="d-flex bd-highlight mb-3" style={{ marginBottom: "0px" }}>
            <div class="p-2 bd-highlight">
              <img
                src={props.pushDataHome.Logo}
                alt="logo"
                style={{ height: "70px", width: "70px", borderRadius: "16px" }}
              />
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {props.pushDataHome.position}
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {props.pushDataHome.name}
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Posted 10 hour ago
                </div>
              </div>
            </div>
            <div class="ms-auto p-2 bd-highlight">
              <button
                class=" btn btn-light"
                style={{ border: "2px solid #CECECE" }}
              >
                copy link
              </button>
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Job Offer
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  <img src={require("../Images/rupees.png")} alt="logo" />{" "}
                  {props.pushDataHome.salary}
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Job Mode
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {props.pushDataHome.type}
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Office/Remote
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {props.pushDataHome.work}
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Location
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {props.pushDataHome.Location}
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-column bd-highlight mb-3">
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    About Job
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      color: "#858585",
                      fontWeight: "400",
                      fontSize: "18px",
                    }}
                  >
                    {props.pushDataHome.about}
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="card" style={{ border: "2px solid #CECECE",width:"275px" }}>
                <h3
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "20px",
                    marginLeft: "20px",
                    marginTop:"4px"
                  }}
                >
                  Skill Mandatory
                </h3>

                <div class="card-body" >
                  {" "}
                  <div class="row">
                    {props.pushDataHome.skills.map((skill) => (
                      <div class="col-6">
                        <button
                          class="btn btn-primary "
                          style={{ margin: "2px",paddingLeft:"25px",paddingRight:"25px" }}
                        >
                          {skill}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column bd-highlight mb-3">
            <div
              class="p-2 bd-highlight"
              style={{ color: "black", fontWeight: "500", fontSize: "20px" }}
            >
              About Company
            </div>
            <div
              class="p-2 bd-highlight"
              style={{ color: "#858585", fontWeight: "400", fontSize: "18px" }}
            >
              {props.pushDataHome.Desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
