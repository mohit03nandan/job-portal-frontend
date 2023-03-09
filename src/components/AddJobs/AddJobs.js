import React from "react";
import styles from './AddJobs.module.css'

const AddJobs = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop"
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
            <hr/>
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight" className={styles.heading}>
                  company Name{" "}
                  <input
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
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  Add logo url{" "}
                  <input
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
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  Job position{" "}
                  <input
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
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  monthly salary{" "}
                  <input
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
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  Job type {" "}
                  <div class="dropdown">
                    <button
                      class="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ float: "right",marginRight:"420px" ,marginBottom:"10px"
                    }}
                    >
                      select
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    ></ul>
                  </div>
                </div>
                <div class="p-2 bd-highlight" className={styles.heading}>
                  Remote/Office
                  <div class="dropdown">
                    <button
                      class="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ float: "right" , marginRight:"420px", marginBottom:"10px"
                      }}
                    >
                      select
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    ></ul>
                  </div>
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  Location{" "}
                  <input
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
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  Job Description{" "}
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type job description"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      height:"100px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  About Company{" "}
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type about your company"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      height:"70px",
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
                  />
                </div>

                <div class="p-2 bd-highlight" className={styles.heading}>
                  skills required{" "}
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter the must have skills"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      width: "400px",
                      
                      color: "#9C9C9C",
                      border: "2px solid #CECECE",
                      float: "right",
                      marginRight:"100px",
                      marginTop:"10px"
                    }}
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
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
