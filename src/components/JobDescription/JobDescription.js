import React from "react";

const JobDescription = () => {
  return (
    <div>
      <div class="card" style={{ boxShadow: "0px 0px 9px 1px"}}>
        <div class="card-body">
          <div class="d-flex bd-highlight mb-3" style={{marginBottom:"0px"}}>
            <div class="p-2 bd-highlight">
              <img src={require("../Images/logo.png")} alt="logo" />
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" style={{color:"black",fontWeight:"500",fontSize:"20px"}} >Backend Developer</div>
                <div class="p-2 bd-highlight" style={{color:"#858585",fontWeight:"500",fontSize:"20px"}}>Ripple Fire</div>
                <div class="p-2 bd-highlight" style={{color:"#0038FF",fontWeight:"500",fontSize:"20px"}}>Posted 10 hour ago</div>
              </div>
            </div>
            <div class="ms-auto p-2 bd-highlight">
              <button class=" btn btn-light" style={{border:"2px solid #CECECE" }}>copy link</button>
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight"  style={{color:"#858585",fontWeight:"500",fontSize:"20px"}}>Job Offer</div>
                <div class="p-2 bd-highlight" style={{color:"#0038FF",fontWeight:"500",fontSize:"20px"}}>
                  {" "}
                  <img src={require("../Images/rupees.png")} alt="logo" />{" "}
                  60,000/month
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" style={{color:"#858585",fontWeight:"500",fontSize:"20px"}}>Job Mode</div>
                <div class="p-2 bd-highlight" style={{color:"#0038FF",fontWeight:"500",fontSize:"20px"}}>Full Time</div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" style={{color:"#858585",fontWeight:"500",fontSize:"20px"}}>Office/Remote</div>
                <div class="p-2 bd-highlight" style={{color:"#0038FF",fontWeight:"500",fontSize:"20px"}}>Office</div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" style={{color:"#858585",fontWeight:"500",fontSize:"20px"}}>Location</div>
                <div class="p-2 bd-highlight" style={{color:"#0038FF",fontWeight:"500",fontSize:"20px"}}>Delhi</div>
              </div>
            </div>
          </div>
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-column bd-highlight mb-3">
                  <div class="p-2 bd-highlight" style={{color:"black",fontWeight:"500",fontSize:"20px"}} >About Job</div>
                  <div class="p-2 bd-highlight" style={{color:"#858585",fontWeight:"400",fontSize:"18px"}}>
                    We are seeking an aspiring Backend Developer to join our
                    dynamic team. The successful candidate will work on
                    developing and maintaining high-quality software
                    applications. You will work alongside experienced software
                    engineers to design and implement complex applications,
                    debug and resolve issues.
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="card" style={{border:"2px solid #CECECE" }}>
              <h3 style={{color:"black",fontWeight:"500",fontSize:"20px", marginLeft:"20px"}} >
              Skill Mandatory
              </h3>
               
                <div class="card-body" style={{ padding: "0px" }}>
                  {" "}
                  <div class="d-flex bd-highlight mb-3">
                    <div class="me-auto p-2 bd-highlight">
                      <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                          <button class="btn btn-primary">Python</button>
                        </div>
                        <div class="p-2 bd-highlight">
                          <button class="btn btn-primary">javascript</button>
                        </div>
                      </div>
                    </div>
                    <div class="p-2 bd-highlight">
                      <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                          <button class="btn btn-primary">sql</button>
                        </div>
                        <div class="p-2 bd-highlight">
                          <button class="btn btn-primary">MONGODB</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column bd-highlight mb-3">
            <div class="p-2 bd-highlight" style={{color:"black",fontWeight:"500",fontSize:"20px"}}>About Company</div>
            <div class="p-2 bd-highlight" style={{color:"#858585",fontWeight:"400",fontSize:"18px"}}>
              RippleHire exists to make recruiting effortless, human and
              delightful. RippleHire is a cloud-based hiring platform that was
              founded with the mission of enabling enterprises hire great talent
              effortlessly. Our dedication to the craft has seen our customers
              win several national and international awards. We are known for a
              category defining employee referral product and a deep talent
              acquisition platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
