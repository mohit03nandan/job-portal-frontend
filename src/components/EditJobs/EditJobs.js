
import React, { useState,useEffect } from "react";
import styles from "./EditJobs.module.css";
import Chips from 'react-chips';
import axios from "axios";

import {getjobPortal} from "../../api/api";
// import { Chips, Chip } from "react-chips-input";
// import CustomChips from 'react-custom-chips'

const EditJobs = (props) => {

console.log("pushidtoeditjobs",props.pushidtoeditjobs)
    // console.log("props.pushidtoeditjobs",props.pushidtoeditjobs.position)
    

// const [jobitemFetching, setjobitemFetching] = useState([])
// const data = props.pushidtoeditjobs.name

const [companyName, setcompanyName] = useState("")
console.log(companyName)
const [companyLogo, setcompanyLogo] = useState("")
const [Position, setPosition] = useState("")
const [Salary, setSalary] = useState("")
const [jobType, setjobType] = useState("")
const [jobWork, setjobWork] = useState("")
const [Location, setLocation] = useState("")
const [Description, setDescription] = useState("")
const [About, setAbout] = useState("")
const [tags, setTags] = useState([]);
const [id, setid] = useState("")

// const [updateEdit, setupdateEdit] = useState(0)
// console.log("updateedit",updateEdit)

function companyChange(e){
  console.log(e.target.value)
     setcompanyName(e.target.value)
}

function logoChange(e){
  setcompanyLogo(e.target.value)
}

function positionChange(e){
  setPosition(e.target.value)
}

function salaryChange(e){
  setSalary(e.target.value)
}

function fullTimeClicked(){
  setjobType("FullTime")
}

function PartTimeClicked(){
  setjobType("PartTime")
}

function RemoteClicked(){
  setjobWork("Remote")
}


function OfficeClicked(){
  setjobWork("Office")
}

function locationChange(e){
  setLocation(e.target.value)
}

function DescChange(e){
  setDescription(e.target.value)
}

function AboutChange(e){
  setAbout(e.target.value)
}

function handleTagChange(tags) {
    setTags(tags);
  }


  const updatejobPortal = async () => {
    console.log("updatejobporta;clicked")
    await axios.post("http://localhost:3001/portal/portalupdate", { 
    companyName: companyName , 
    companyLogo: companyLogo,
    Position:Position,
    Salary:Salary,
    jobType:jobType,
    jobWork:jobWork,
    Location:Location,
    Description:Description,
    About:About,
    tags:tags,
    id:id
   });

    
//    automaticupdate left

//    props.pullfromedit(1)
//    setupdateEdit(1);
//    window.location.reload(false)

//    const data = await getjobPortal();
//    console.log("data",data)
//    setupdateEdit([1])
  };

function changeData(){
    setcompanyName(props.pushidtoeditjobs.name)
    setcompanyLogo(props.pushidtoeditjobs.Logo)
    setAbout(props.pushidtoeditjobs.about)
    setDescription(props.pushidtoeditjobs.Desc)
    setLocation(props.pushidtoeditjobs.Location)
    setSalary(props.pushidtoeditjobs.salary)
    setTags(props.pushidtoeditjobs.skills)
    setPosition(props.pushidtoeditjobs.position)
    setid(props.pushidtoeditjobs.updateid)
}

// useEffect(() => {
//     props.pullDatafromedit([updateEdit])
// }, [updateEdit])


  useEffect(() => {
       changeData();
  }, [props.pushidtoeditjobs.name])
  
  

  
  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="staticBackdropLabel"
                style={{ color: "#0038FF" }}
              >
                Findmyjobs
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Add job description
              <hr />
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" className={styles.heading}>
                  company Name{" "}
                  <input
                   value={companyName}
                    type="text"
                    class="form-control"
                    placeholder="Enter your company name here"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={companyChange}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  Add logo url{" "}
                  <input
                   value={companyLogo}
                    type="text"
                    class="form-control"
                    placeholder="Enter the link"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={logoChange}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  Job position{" "}
                  <input
                   value={Position}
                    type="text"
                    class="form-control"
                    placeholder="Enter job position"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={positionChange}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  monthly salary{" "}
                  <input
                  value={Salary}
                    type="text"
                    class="form-control"
                    placeholder="Enter Amount in Rupees"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={salaryChange}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                   Working Employee{" "}
                  <input
                  
                    type="text"
                    class="form-control"
                    placeholder="eg; 11-50"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={salaryChange}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  <div class="dropdown">
                    Job type{" "}
                    <button
                      class="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        float: "right",
                        marginRight: "420px",
                        marginBottom: "10px",
                      }}
                    >
                      select 
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >

                    <li>
                        <button class=" btn btn-outline-dark"
                         onClick={fullTimeClicked}
                          >
                            FullTime
                        </button>
                    
                        <button class="btn btn-outline-dark"  
                        onClick={PartTimeClicked}
                        >
                            PartTime
                       </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  <div class="dropdown">
                    Remote/Office
                    <button
                      class="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        float: "right",
                        marginRight: "420px",
                        marginBottom: "10px",
                      }}
                    >
                      select
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <button class="btn btn-outline-dark"  
                        onClick={RemoteClicked}
                        >
                            Remote
                        </button>

                        <button class="btn btn-outline-dark"  
                        onClick={OfficeClicked}
                        >
                            Office
                       </button>
                      </li>

                    </ul>
                  </div>
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  Location{" "}
                  <input
                  value={Location}
                    type="text"
                    class="form-control"
                    placeholder="Enter job Location"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={locationChange}
                  />
                 
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  Job Description{" "}
                  <textarea
                  value={Description}
                    type="text"
                    class="form-control"
                    placeholder="Type job description"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      height: "100px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={DescChange}
                  />
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  About Company{" "}
                  <textarea
                    value={About}
                    type="text"
                    class="form-control"
                    placeholder="Type about your company"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      height: "70px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                    onChange={AboutChange}
                  />
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  skills required{" "}
                  <Chips
                   value={tags}
                    onChange={handleTagChange}
                    suggestions={["html", "css", "javascript","reactjs","angularjs","nodejs","mongodb","bootstrap"]}
                     />
                  
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal"
              onClick={updatejobPortal}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJobs;
