import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import moment from 'moment'

export default function LaucnhItem({ launch: { flight_number, mission_name, launch_date_local, launch_success}}){
  return (
    <div className= "card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {' '}
          <span className={classNames({
            'text-success': launch_success,
            'text-danger': !launch_success
          })}>
          { mission_name }
          </span>
          </h4>
          <p>Date: <Moment format="hh:mm:ss"> { launch_date_local} </Moment></p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Detail</button>
        </div>
      </div>
    </div>
  )
}
