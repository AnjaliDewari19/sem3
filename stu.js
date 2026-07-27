let students = [];

function toggleRegistration() {
    let form = document.getElementById("registrationForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dob = document.getElementById("dob").value;
    let branch = document.getElementById("branch").value;
    let contact = document.getElementById("phone").value;

    if (name === "" || roll === "" || dob === "" || branch === "" || contact === "") {
        alert("Please Fill All The Fields !!!");
        return;
    }

    let student = {
        name: name,
        rollNo: roll,
        dob: dob,
        branch: branch,
        phone: contact
    };

    students.push(student);
    alert("Student Added Successfully !!!");

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("phone").value = "";

    // Hide the form again after adding, and show the dashboard result
    toggleRegistration();
}

function display() {
    let output = "<h2>ALL STUDENTS</h2>";

    if (students.length === 0) {
        output += "<p>No students added yet.</p>";
    } else {
        students.forEach(stu => {
            output += `
                <p>
                Name: ${stu.name} <br>
                Roll No: ${stu.rollNo} <br>
                DOB: ${stu.dob} <br>
                Branch: ${stu.branch} <br>
                Contact: ${stu.phone}
                </p>
                <hr>
            `;
        });
    }

    document.getElementById("output").innerHTML = output;
}

function Sname() {
    let searchName = prompt("Enter name to search:");
    let filtered = students.filter(stu => stu.name.toLowerCase() === searchName.toLowerCase());
    let output = "<h2>SEARCH RESULT</h2>";

    if (filtered.length === 0) {
        output += "<p>No student found with that name.</p>";
    } else {
        filtered.forEach(stu => {
            output += `
                <p>
                Name: ${stu.name} <br>
                Roll No: ${stu.rollNo} <br>
                DOB: ${stu.dob} <br>
                Branch: ${stu.branch} <br>
                Contact: ${stu.phone}
                </p>
                <hr>
            `;
        });
    }

    document.getElementById("output").innerHTML = output;
}

function branch() {
    let searchBranch = prompt("Enter branch to filter (e.g. CSE DS, CSE AIML):");
    let filtered = students.filter(stu => stu.branch.toLowerCase() === searchBranch.toLowerCase());
    let output = "<h2>BRANCH RESULT</h2>";

    if (filtered.length === 0) {
        output += "<p>No student found in that branch.</p>";
    } else {
        filtered.forEach(stu => {
            output += `
                <p>
                Name: ${stu.name} <br>
                Roll No: ${stu.rollNo} <br>
                DOB: ${stu.dob} <br>
                Branch: ${stu.branch} <br>
                Contact: ${stu.phone}
                </p>
                <hr>
            `;
        });
    }

    document.getElementById("output").innerHTML = output;
}

function del() {
    let rollNo = prompt("Enter Roll No. of student to delete:");
    let index = students.findIndex(stu => stu.rollNo === rollNo);

    if (index === -1) {
        alert("No student found with that Roll No.");
        return;
    }

    students.splice(index, 1);
    alert("Student Deleted Successfully !!!");
    display();
}

function total() {
    document.getElementById("output").innerHTML =
        "<h2>Total Number of Students: " + students.length + "</h2>";
}