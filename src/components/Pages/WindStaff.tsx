import React from 'react';
import './WindStaff.css';
import WindCode from '../../assets/Pictures/wind_staff_code.png';
import ReviveIcon from '../../assets/Pictures/Skull2.png';

const WindStaff = () => {
  return (
    <div className="wind-staff">
      <div className="staff-grid">
        <div className="left-column">
          <section className="staff-section">
            <h2><img src={ReviveIcon} alt="Revive Icon" className="revive-icon" /> Wind Staff Parts</h2>
            <ul>
              <li>Part 1: Inside the robot that steps near spawn</li>
              <li>Part 2: Inside the robot that steps middle (excavation)</li>
              <li>Part 3: Inside the robot that steps near church</li>
              <li>Yellow Record: Near Generator 5 (Stamin-Up or around wind tunnel)</li>
              <li>Gramophone: Inside Excavation Site</li>
            </ul>
          </section>

          <section className="staff-section image-section">
            <h2><img src={ReviveIcon} alt="Revive Icon" className="revive-icon" /> Wind Puzzle Code</h2>
            <img src={WindCode} alt="Wind Code Chart" className="wind-code" />
          </section>
        </div>

        <div className="right-column">
          <section className="staff-section">
            <h2><img src={ReviveIcon} alt="Revive Icon" className="revive-icon" /> Puzzle Notes</h2>
            <ul>
              <li>Open the Wind Tunnel with the Gramophone</li>
              <li>Enter the Crazy Place</li>
              <li>Shoot the Wind Puzzle Code on the wall</li>
              <li>Align yellow rings in Excavation Site</li>
              <li>Shoot the orb below with Wind Staff</li>
              <li>Place Wind Staff in pedestal and kill zombies to upgrade</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WindStaff;
