import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getReservations } from '../../redux/reservation/reservationsSlice';

function Reservations() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.reservations);
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  let content;
  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (loading === 'idle') {
    content = data.map((reservation) => (
      <div className="col-sm-6" key={reservation.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{reservation.doctor_id}</h5>
            <h5 className="card-title">{reservation.city}</h5>
            <p className="card-text">
              {' '}
              {reservation.appointment_date}
              {' '}
            </p>
          </div>
        </div>
      </div>
    ));
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return <div className="row">{content}</div>;
}

export default Reservations;
