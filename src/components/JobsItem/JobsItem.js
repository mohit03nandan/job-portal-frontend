import React from "react";

const JobsItem = () => {
  return (
    <div class="container-fluid">
       {/* <div class="card w-50">
  <div class="card-body">
   
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    
  </div>
</div> */}
      <div
        class="card"
        style={{
          width: "1450px",
          height: "210px",
        //   position: "absolute",
          background: "#FFFFFF",
          border: " 2px solid rgba(0, 56, 255, 0.31)",
          borderRadius: " 9px",
          marginTop:"20px"
        }}
      >
     
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <img src={require("../Images/logo.png")} alt="logo" />
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div
                class="p-2 bd-highlight"
                style={{
                  marginLeft: "23px",
                  color: "#000000",
                  fontWeight: "500",
                  fontSize: "25.3714px",
                }}
              >
                {" "}
                Frontend Developer
              </div>
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img
                      src={require("../Images/people.png")}
                      alt="logo"
                    />{" "}
                    11-50{" "}
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img
                      src={require("../Images/rupees.png")}
                      alt="logo"
                    />{" "}
                    50,000
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img src={require("../Images/flag.png")} alt="logo" /> Delhi
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-row bd-highlight mb-3"
                style={{ marginLeft: "23px" }}
              >
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: "19.6507px",
                  }}
                >
                  Office
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: "19.6507px",
                  }}
                >
                  Full Time
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column bd-highlight mb-3">
            <div
              class="p-2 bd-highlight"
              style={{
                marginTop: "20px",
                color: "#9C9C9C",
                fontWeight: "500",
                fontSize: " 23.9226px",
              }}
            >
              2\4 hour ago
            </div>
            <div
              class="d-flex flex-row bd-highlight mb-3"
              style={{ marginTop: "80px" }}
            >
              <div class="p-2 bd-highlight">
                <button class="btn btn-primary"> edit job</button>
              </div>
              <div class="p-2 bd-highlight">
                <button class="btn btn-light"> copy link</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card"
        style={{
          width: "1450px",
          height: "210px",
        //   position: "absolute",
          background: "#FFFFFF",
          border: " 2px solid rgba(0, 56, 255, 0.31)",
          borderRadius: " 9px",
          marginTop:"20px"
        }}
      >
     
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <img src={require("../Images/logo.png")} alt="logo" />
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div
                class="p-2 bd-highlight"
                style={{
                  marginLeft: "23px",
                  color: "#000000",
                  fontWeight: "500",
                  fontSize: "25.3714px",
                }}
              >
                {" "}
                Backend Developer
              </div>
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img
                      src={require("../Images/people.png")}
                      alt="logo"
                    />{" "}
                    11-50{" "}
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img
                      src={require("../Images/rupees.png")}
                      alt="logo"
                    />{" "}
                    60,000
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img src={require("../Images/flag.png")} alt="logo" /> Delhi
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-row bd-highlight mb-3"
                style={{ marginLeft: "23px" }}
              >
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: "19.6507px",
                  }}
                >
                  Office
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: "19.6507px",
                  }}
                >
                  Full Time
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column bd-highlight mb-3">
            <div
              class="p-2 bd-highlight"
              style={{
                marginTop: "20px",
                color: "#9C9C9C",
                fontWeight: "500",
                fontSize: " 23.9226px",
              }}
            >
              2\4 hour ago
            </div>
            <div
              class="d-flex flex-row bd-highlight mb-3"
              style={{ marginTop: "80px" }}
            >
              <div class="p-2 bd-highlight">
                <button class="btn btn-primary"> edit job</button>
              </div>
              <div class="p-2 bd-highlight">
                <button class="btn btn-light"> copy link</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div
        class="card"
        style={{
          width: "1450px",
          height: "210px",
        //   position: "absolute",
          background: "#FFFFFF",
          border: " 2px solid rgba(0, 56, 255, 0.31)",
          borderRadius: " 9px",
          marginTop:"20px"
        }}
      >
     
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <img src={require("../Images/logo.png")} alt="logo" />
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div
                class="p-2 bd-highlight"
                style={{
                  marginLeft: "23px",
                  color: "#000000",
                  fontWeight: "500",
                  fontSize: "25.3714px",
                }}
              >
                {" "}
                UI-UX Developer
              </div>
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img
                      src={require("../Images/people.png")}
                      alt="logo"
                    />{" "}
                    11-50{" "}
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img
                      src={require("../Images/rupees.png")}
                      alt="logo"
                    />{" "}
                    80,000
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      marginLeft: "20px",
                      color: "#9C9C9C",
                      fontWeight: "500",
                      fontSize: " 23.9226px",
                    }}
                  >
                    {" "}
                    <img src={require("../Images/flag.png")} alt="logo" /> Delhi
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-row bd-highlight mb-3"
                style={{ marginLeft: "23px" }}
              >
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: "19.6507px",
                  }}
                >
                  Office
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "blue",
                    fontWeight: "500",
                    fontSize: "19.6507px",
                  }}
                >
                  Full Time
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column bd-highlight mb-3">
            <div
              class="p-2 bd-highlight"
              style={{
                marginTop: "20px",
                color: "#9C9C9C",
                fontWeight: "500",
                fontSize: " 23.9226px",
              }}
            >
              2\4 hour ago
            </div>
            <div
              class="d-flex flex-row bd-highlight mb-3"
              style={{ marginTop: "80px" }}
            >
              <div class="p-2 bd-highlight">
                <button class="btn btn-primary"> edit job</button>
              </div>
              <div class="p-2 bd-highlight">
                <button class="btn btn-light"> copy link</button>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      
      


    
    </div>
  
    
  );
};

export default JobsItem;
