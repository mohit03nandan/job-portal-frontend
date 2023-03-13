import React, { useState,useEffect } from "react";
import JobsItem from "../JobsItem/JobsItem";
import AddJobs from "../AddJobs/AddJobs";
import { getjoblocation,getjobskills } from "../../api/api";

const JobPortal = (props) => {
  const [view, setview] = useState();
  const [fetchedDatafromchildcomponent, setfetchedDatafromchildcomponent] =
    useState([]);
  const [searchquery, setsearchquery] = useState("");

  const [loaction, setloaction] = useState([])
  const [getskills, setgetskills] = useState([])

const [sendlocatointojobitem, setsendlocatointojobitem] = useState("")
console.log("sendlocatointojobitem",sendlocatointojobitem)

const [sendskillstojobitem, setsendskillstojobitem] = useState("")
console.log("sendskillstojobitem",sendskillstojobitem);

const [fetchspecifIDfromjobitem, setfetchspecifIDfromjobitem] = useState("")
console.log("fetchspecifIDfromjobitem",fetchspecifIDfromjobitem)
props.pullspecificidtohome(fetchspecifIDfromjobitem)

  console.log("getskills",getskills)
  console.log("loacation",loaction)
  console.log("search", searchquery);
  console.log("fetchedDatafromchildcomponent", fetchedDatafromchildcomponent);
  console.log("view", view);

  const [count, setcount] = useState();
  console.log("count", count);
  props.pullDataHome(view);


  const Pagination = () => {
    return <AddJobs pullData={setfetchedDatafromchildcomponent} />;
  };

  async function locationclicked() {
    const data = await getjoblocation();
    setloaction(data)
 
  }

  async function skillsClicked() {
    const data = await getjobskills();
    setgetskills(data)
 
  }
  

  useEffect(() => {
    locationclicked();
    getjobskills()
  }, [])
  

  return (
    <div>
      <div
        class="card"
        style={{
          width: "1500px",
          height: "800px",
          boxShadow: "0px 0px 9px 1px",
          position: "absolute",
        }}
      >
        <div class="card-body">
          {Pagination()}
          <div class="d-flex bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              <div class="input-group mb-3">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  <img src={require("../Images/search.png")} alt="seacrh" />
                </button>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job title or keyword"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  onChange={(e) => setsearchquery(e.target.value)}
                  style={{
                    width: "400px",
                    color: "#9C9C9C",
                    border: "2px solid #CECECE",
                  }}
                />
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#9C9C9C", border: "2px solid #CECECE" }}
                  onClick={locationclicked}
                >
                  <img src={require("../Images/location.png")} alt="location" />{" "}
                  Location
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <div class="container">
                  {loaction.map((locate)=>(
                   <li> <button  class="btn btn-outline-dark" style={{marginTop:"5px"}}  onClick={(e)=>setsendlocatointojobitem(locate)} >{locate}</button></li>
                  ))}
                  </div>
                </ul>
              </div>
            </div>
            <div class="ms-auto p-2 bd-highlight">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                + Add Job
              </button>
            </div>
          </div>
          <p style={{ color: "#858585", fontSize: "25px", fontWeight: "500" }}>
            Jobs you have posted as a recruiter are listed below
          </p>
          <div class="dropdown">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "#9C9C9C", border: "2px solid #CECECE" }}
              onClick={skillsClicked}
            >
              Skills
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="container">
              {getskills.map((skill)=>(
                   <li> <button  class="btn btn-outline-dark" style={{marginTop:"5px"}} onClick={(e)=>setsendskillstojobitem(skill)} >{skill}</button></li>
                  ))}
              </div>
            </ul>
          </div>
          <div style={{ color: "#858585", marginTop: "30px" }}>
            <h4>{count}+ Jobs</h4>
          </div>
          <div
            class="container-fluid"
            style={{ height: "500px", overflowY: "scroll", marginTop: "20px" }}
          >
            <JobsItem
              pushskillonclicked={sendskillstojobitem}
              pushlocationclickedData={sendlocatointojobitem}
              pushsearchqueryData={searchquery}
              pushData={fetchedDatafromchildcomponent}
              pullDatafromjobitem={setview}
              pullcountfromjobitem={setcount}
              pullspecificidfromjobitem={setfetchspecifIDfromjobitem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
