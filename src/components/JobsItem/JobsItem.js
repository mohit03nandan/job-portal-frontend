import React, { useState, useEffect } from "react";
import EditJobs from "../EditJobs/EditJobs";
import { useNavigate } from "react-router-dom";
import { getjobPortal } from "../../api/api";
// import JobPortal from "../JobPortal/JobPortal";

const JobsItem = (props) => {
  const [fetchjobportal, setfetchjobportal] = useState([]);
  console.log("fetchjobportal", fetchjobportal);
  console.log("jobitemsearch", props.pushsearchqueryData);
 const [senddatatoeditjobs, setsenddatatoeditjobs] = useState({})
 console.log("senddatatoeditjobs",senddatatoeditjobs)
//  const [edichange, setedichange] = useState(0)
//  console.log("edit",edichange)
  const navigate = useNavigate();


  const Pagination1=()=>{
    return <EditJobs    pushidtoeditjobs={senddatatoeditjobs}/>
  }

  async function getjobPortalData() {
    const data = await getjobPortal();
    setfetchjobportal(data);
  }


   //onproduction
          //  {/* (job.location.includes(props.pushlocationclickedData)) || */}
          //  &&  (job.skills.includes(props.pushskillonclicked))

        //   .filter((job =>
        //     job.jobPosition.toLowerCase().includes(props.pushsearchqueryData) && (job.location.includes(props.pushlocationclickedData))
        //  ))
// console.log(fetchjobportal.filter.map((portalData)=>(portalData.Location)))

  useEffect(() => {
    getjobPortalData();
  }, [ props.pushData, props.pullcountfromjobitem(fetchjobportal.length)]);

  console.log(props.pushskillonclicked)
  console.log(props.pushlocationclickedData)
  return (
<>
{Pagination1()}
    <div class="container-fluid">
      {fetchjobportal.map((portalData) => (
          <div
            class="card"
            style={{
              background: "#FFFFFF",
              border: " 2px solid rgba(0, 56, 255, 0.31)",
              borderRadius: " 9px",
              marginTop: "20px",
            }}
            onClick={async () => {
              await props.pullDatafromjobitem({
                id: portalData._id,
                position: portalData.jobPosition,
                salary: portalData.salary,
                work: portalData.jobWork,
                type: portalData.jobType,
                Desc: portalData.Description,
                about: portalData.aboutCompany,
                name: portalData.companyName,
                Location: portalData.location,
                Logo: portalData.logo,
                skills: portalData.skills,
              });
              // `/view-contact-details/${user.id}`
           await   props.pullspecificidfromjobitem(portalData._id)
              navigate(`/about/${portalData._id}`);

            }}
            key={portalData._id}
          >
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">
                <img
                  src={portalData.logo}
                  alt="logo"
                  style={{
                    height: "70px",
                    width: "70px",
                    borderRadius: "16px",
                  }}
                />
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
                    {portalData.jobPosition}
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
                        {portalData.salary}
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
                          src={require("../Images/flag.png")}
                          alt="logo"
                        />{" "}
                        {portalData.location}
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
                      {portalData.jobWork}
                    </div>
                    <div
                      class="p-2 bd-highlight"
                      style={{
                        color: "blue",
                        fontWeight: "500",
                        fontSize: "19.6507px",
                      }}
                    >
                      {portalData.jobType}
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
                  2 hour ago
                </div>
                <div
                  class="d-flex flex-row bd-highlight mb-3"
                  style={{ marginTop: "80px" }}
                >
                  <div class="p-2 bd-highlight">
                    <button class="btn btn-primary"   
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"  
                         onClick={(event)=>{
                              event.stopPropagation()
                              setsenddatatoeditjobs({
                                name: portalData.companyName,
                                Logo: portalData.logo,
                                about:portalData.aboutCompany,
                                Desc: portalData.Description,
                                Location:portalData.location,
                                salary:portalData.salary,
                                skills:portalData.skills,
                                position:portalData.jobPosition,
                                updateid: portalData._id
                              })
                         }}
                        
                        > edit job</button>
                  </div>
                  <div class="p-2 bd-highlight">
                    <button class="btn btn-light"    onClick={(event)=>{
                       event.stopPropagation()
                       navigator.clipboard.writeText(`http://localhost:3000/about/${portalData._id}`);

                    }} > copy link</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default JobsItem;
