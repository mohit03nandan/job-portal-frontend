import React,{useState} from "react";
import JobsItem from "../JobsItem/JobsItem";
import AddJobs from "../AddJobs/AddJobs";

const JobPortal = () => {

   
    const [view, setview] = useState(0)


    function addjobbing(){
        setview(1);
        console.log("button clicked")
        console.log(view)
    }

    const Pagination = () =>{
        if(view === 1){
            return <AddJobs/>
        
        }
      
    }



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
                >
                  <img src={require("../Images/location.png")} alt="location" />{" "}
                  Location
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <div class="container">
                    <li>Banglore</li>
                    <li>Pune</li>
                    <li>Hydrabad</li>
                    <li>Noida</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="ms-auto p-2 bd-highlight">
              <button type="button" class="btn btn-primary" onClick={addjobbing} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
            >
              Skills
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="container">
                <li>HTML</li>
                <li>CSS</li>
                <li>FIGMA</li>
                <li>REACTJS</li>
                <li>NODEJS</li>
                <li>MONGODB</li>
              </div>
            </ul>
          </div>
          <div style={{color:"#858585", marginTop:"30px"}}>
          <h4>40+ Jobs</h4>
          </div>
          <div class="container-fluid" style={{height:"500px", overflowY: "scroll", marginTop:"20px"}}>
            <JobsItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
