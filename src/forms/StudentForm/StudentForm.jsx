import React from "react";
import "./StudentForm.css";

const StudentForm = () => {
    return (
        <div className="form">
            <h2>Student Form</h2>

            <input type="text" placeholder="Student Name" />
            <input type="number" placeholder="Age" />

            <button>Submit</button>

        </div>
    );
};

export default StudentForm;