import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from 'react-bootstrap';
import { removeDoctor } from "../../redux/doctor/doctorSlice";
import baseUrl from '../../redux/base_url';

const DeleteDoctor = () => {

  return (
    <React.Fragment>
    <Container className="content">
   <div className="row">
    <div className="col-sm-12">
    <h2 className="mt-4 mb-4 fw-bold">
        Delete a Doctor  
      </h2>
      <form className="form w-100">
      <table className="table">
      <thead>            
      <tr>
      <th>Sr. No</th>
      <th>Doctor Name</th>
      <th>City</th>
      <th>Specility</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {doctors.map((doctor,index) => ( 
      <tr   key={doctor.id}>
        <td>{ index+1} </td>

      <td>{ doctor.name} </td>
      <td>{ doctor.city} </td>
      <td>{ doctor.speciality} </td>
      <td><button type="button" onClick={() => handleDelete(doctor.id)}  className="btn btn-danger mb-3">
        Delete
      </button></td>
      </tr>
        ))
      }

      </tbody>
      </table>
      </form>
      </div>
      </div>
      </Container>
  </React.Fragment>
  );
};

export default DeleteDoctor;