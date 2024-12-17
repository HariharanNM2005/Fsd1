import React, { useState } from 'react';
import Validation from './EmployeeValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Employee = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        employeeId: "",
        email: "",
        phone: "",
        department: "",
        dateofjoining: "",
        role: ""
    });
    const navigate=useNavigate();
    const [errors, setErrors] = useState({});

    const handlSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if(!validationErrors.firstName && !validationErrors.lastName && !validationErrors.employeeId && !validationErrors.email &&
            !validationErrors.phone && !validationErrors.department && !validationErrors.dateofjoining && !validationErrors.role
         ){
            axios.post("https://fsd-i2qt.onrender.com/employee",values)
            .then(res => {
                navigate("/detail");
         })
         .catch(err => console.error('Error during signup:', err));
    

         }

      
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };
    

    return (
        
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h4 className="bg-warning text-dark p-1">Employee Management System</h4>
                <form onSubmit={handlSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName"><strong>First Name</strong></label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            className="form-control rounded-0"
                            name='firstName'
                            onChange={handleInput}
                            required
                        />
                        {errors.firstName && <span className='text-danger'>{errors.firstName}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName"><strong>Last Name</strong></label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            className="form-control rounded-0"
                            name='lastName'
                            onChange={handleInput}
                            required
                        />
                        {errors.lastName && <span className='text-danger'>{errors.lastName}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="employeeId"><strong>Employee ID</strong></label>
                        <input
                            type="text"
                            id="employeeId"
                            placeholder="Enter Employee ID"
                            className="form-control rounded-0"
                            name='employeeId'
                            onChange={handleInput}
                            required
                        />
                        {errors.employeeId && <span className='text-danger'>{errors.employeeId}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            className="form-control rounded-0"
                            onChange={handleInput}
                            name='email'
                            required
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone"><strong>Phone</strong></label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter Phone Number"
                            className="form-control rounded-0"
                            name='phone'
                            onChange={handleInput}
                            required
                        />
                        {errors.phone && <span className='text-danger'>{errors.phone}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="department"><strong>Department</strong></label>
                        <select
                            id="department"
                            className="form-control rounded-0"
                            onChange={handleInput}
                            name='department'
                            required
                        >
                            <option value=""  selected>Select Department</option>
                            <option value="hr">HR</option>
                            <option value="engineering">Engineering</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        {errors.department && <span className='text-danger'>{errors.department}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dateofjoining"><strong>Date of Joining</strong></label>
                        <input
                            type="date"
                            id="dateofjoining"
                            className="form-control rounded-0"
                            onChange={handleInput}
                            name='dateofjoining'
                            required
                        />
                        {errors.dateofjoining && <span className='text-danger'>{errors.dateofjoining}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="role"><strong>Role</strong></label>
                        <input
                            type="text"
                            id="role"
                            placeholder="Enter Role"
                            className="form-control rounded-0"
                            onChange={handleInput}
                            name='role'
                            required
                        />
                        {errors.role && <span className='text-danger'>{errors.role}</span>}
                    </div>
                    <div className="d-flex justify-content-between">
    <button type="submit" className="btn btn-success  rounded-0 w-10">Submit</button>
    <button type="reset" className="btn btn-danger rounded-0 ml-auto">Reset</button>
</div>
 
                </form>
            </div>
        </div>
    );
}

export default Employee;
