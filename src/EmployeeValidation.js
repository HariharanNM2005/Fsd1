function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const employeeID_pattern = /^[a-zA-Z0-9]{1,10}$/;
    const phoneNumber_pattern = /^\d{10}$/;

    if (values.firstName === "") {
        error.firstName = "First name should not be empty";
    }

    if (values.lastName === "") {
        error.lastName = "Last name should not be empty";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email did not match the required format";
    }

    if (values.employeeId === "") {
        error.employeeId = "Employee ID should not be empty";
    } else if (!employeeID_pattern.test(values.employeeId)) {
        error.employeeId = "Employee ID must be alphanumeric and between 1-10 characters";
    }

    if (values.phone === "") {
        error.phone = "Phone number should not be empty";
    } else if (!phoneNumber_pattern.test(values.phone)) {
        error.phone = "Phone number is invalid (should be 10 digits)";
    }
    if (values.department === "") {
        error.department = "Department should not be empty";
    } else if (!["hr", "engineering", "marketing"].includes(values.department.toLowerCase())) {
        error.department = "Invalid department selected";
    }
    

    if (values.dateofjoining === "") {
        error.dateofjoining = "Date of joining should not be empty";
    } else {
        const selectedDate = new Date(values.dateofjoining);
        const today = new Date();
        today.setHours(0, 0, 0, 0);  
        if (selectedDate > today) {
            error.dateofjoining = "Date of joining cannot be in the future";
        }
    }

    if (values.role === "") {
        error.role = "Role should not be empty";
    }

    return error;
}

export default Validation;
