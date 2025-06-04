import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [targetDate] = useState(new Date('2025-06-16T00:00:00')); // Updated to 2025

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      pointerEvents: 'none'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      zIndex: 1
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '50px',
      color: 'rgba(255, 255, 255, 0.9)',
      fontWeight: '300',
      position: 'relative',
      zIndex: 1
    },
    countdownContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '30px',
      marginBottom: '50px',
      maxWidth: '800px',
      width: '100%',
      position: 'relative',
      zIndex: 1
    },
    timeUnit: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '25px',
      padding: '30px 20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      color: '#2d3748'
    },
    timeValue: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '10px',
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    timeLabel: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontWeight: '600',
      color: '#718096'
    },
    message: {
      fontSize: '1.3rem',
      maxWidth: '600px',
      lineHeight: '1.8',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      color: 'rgba(255, 255, 255, 0.95)',
      position: 'relative',
      zIndex: 1,
      fontWeight: '300'
    },
    celebrationText: {
      fontSize: '1.1rem',
      marginTop: '30px',
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 1
    },
    floatingElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    },
    floatingCircle: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      animation: 'float 6s ease-in-out infinite'
    }
  };

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          .time-unit:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }
          @media (max-width: 768px) {
            .countdown-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }
          @media (max-width: 480px) {
            .countdown-container {
              grid-template-columns: 1fr;
              gap: 15px;
            }
          }
        `}
      </style>
      
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.floatingElements}>
        <div style={{
          ...styles.floatingCircle,
          width: '80px',
          height: '80px',
          top: '10%',
          left: '10%',
          animationDelay: '0s'
        }}></div>
        <div style={{
          ...styles.floatingCircle,
          width: '120px',
          height: '120px',
          top: '60%',
          right: '10%',
          animationDelay: '2s'
        }}></div>
        <div style={{
          ...styles.floatingCircle,
          width: '60px',
          height: '60px',
          bottom: '20%',
          left: '20%',
          animationDelay: '4s'
        }}></div>
      </div>
      
      <h1 style={styles.title}>🎉 Birthday Countdown 🎉</h1>
      <p style={styles.subtitle}>Something special is coming...</p>
      
      <div style={styles.countdownContainer} className="countdown-container">
        <div style={styles.timeUnit} className="time-unit">
          <div style={styles.timeValue}>{timeLeft.days || 0}</div>
          <div style={styles.timeLabel}>Days</div>
        </div>
        <div style={styles.timeUnit} className="time-unit">
          <div style={styles.timeValue}>{timeLeft.hours || 0}</div>
          <div style={styles.timeLabel}>Hours</div>
        </div>
        <div style={styles.timeUnit} className="time-unit">
          <div style={styles.timeValue}>{timeLeft.minutes || 0}</div>
          <div style={styles.timeLabel}>Minutes</div>
        </div>
        <div style={styles.timeUnit} className="time-unit">
          <div style={styles.timeValue}>{timeLeft.seconds || 0}</div>
          <div style={styles.timeLabel}>Seconds</div>
        </div>
      </div>
      
      <div style={styles.message}>
        {isExpired ? (
          "🎊 Happy Birthday! The special day has arrived! 🎊"
        ) : (
          "Get ready for an amazing celebration! Every second brings us closer to the special day filled with joy, laughter, and wonderful memories."
        )}
      </div>
      
      <div style={styles.celebrationText}>
        {isExpired ? (
          "Time to celebrate! 🥳🎂🎈"
        ) : (
          `Only ${timeLeft.days || 0} days, ${timeLeft.hours || 0} hours, ${timeLeft.minutes || 0} minutes, and ${timeLeft.seconds || 0} seconds left!`
        )}
      </div>
    </div>
  );
};

export default Timer;
