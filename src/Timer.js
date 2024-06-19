import React, { useEffect, useState } from 'react';
import backgroundImage from './img.jpg'; // Background image
import balloonImage from './pic.png'; // Balloon image

const Timer = () => {
  const endTime = new Date('June 16, 2024 00:00:00').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const gap = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const rD = Math.floor(gap / days);
  const rH = Math.floor((gap % days) / hours);
  const rM = Math.floor((gap % hours) / minutes);
  const rS = Math.floor((gap % minutes) / seconds);

  return (
    <div style={{
      ...styles.container,
      backgroundImage: `url(${backgroundImage})`
    }}>
      <img src={balloonImage} alt="Balloons" style={styles.balloonImage} />
      <div style={styles.content}>
        <h1 style={styles.title}>My Birthday</h1>
        <h2 style={styles.subtitle}>Starts in</h2>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.row}>
              <th style={styles.cell}>{rD}</th>
              <th style={styles.cell}>{rH}</th>
              <th style={styles.cell}>{rM}</th>
              <th style={styles.cell}>{rS}</th>
            </tr>
            <tr style={styles.row}>
              <td style={styles.cellLabel}>Days</td>
              <td style={styles.cellLabel}>Hours</td>
              <td style={styles.cellLabel}>Minutes</td>
              <td style={styles.cellLabel}>Seconds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    margin: '0 auto',
    marginTop: '50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  balloonImage: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '800px',
    zIndex: '1',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
    padding: '20px',
    borderRadius: '10px',
    zIndex: '2',
  },
  title: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  row: {
    fontSize: '1.5em',
  },
  cell: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'rgba(97, 218, 251, 0.8)', // Slightly transparent background
  },
  cellLabel: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'rgba(33, 161, 241, 0.8)', // Slightly transparent background
  },
};

export default Timer;
