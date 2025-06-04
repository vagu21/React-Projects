import React, { useEffect, useState } from 'react'

const Covid19 = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://data.covid19india.org/data.json')
            .then(response => response.json())
            .then(jdata => {
                setData(jdata.statewise)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setLoading(false)
            })
    }, [])

    const filteredData = data.filter(item =>
        item.state.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const totalStats = data.length > 0 ? data[0] : {}

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px 20px',
            fontFamily: "'Inter', sans-serif"
        },
        header: {
            textAlign: 'center',
            marginBottom: '40px'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: '700',
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            marginBottom: '10px',
            fontFamily: "'Poppins', sans-serif"
        },
        subtitle: {
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '300'
        },
        statsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto 40px',
            padding: '0 20px'
        },
        statCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '25px',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease'
        },
        statNumber: {
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '8px',
            fontFamily: "'Poppins', sans-serif"
        },
        statLabel: {
            fontSize: '0.9rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        confirmed: { color: '#ff6b6b' },
        recovered: { color: '#4ecdc4' },
        deaths: { color: '#95a5a6' },
        active: { color: '#f39c12' },
        searchContainer: {
            maxWidth: '500px',
            margin: '0 auto 30px',
            position: 'relative'
        },
        searchInput: {
            width: '100%',
            padding: '15px 20px',
            fontSize: '1rem',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '15px',
            outline: 'none',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease'
        },
        tableContainer: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            maxWidth: '1200px',
            margin: '0 auto',
            border: '1px solid rgba(255, 255, 255, 0.2)'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse'
        },
        tableHeader: {
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            color: 'white'
        },
        th: {
            padding: '20px 15px',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        td: {
            padding: '15px',
            borderBottom: '1px solid #e2e8f0',
            fontSize: '0.95rem'
        },
        row: {
            transition: 'background-color 0.2s ease'
        },
        loadingSpinner: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            fontSize: '1.2rem',
            color: 'white'
        }
    }

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.loadingSpinner}>
                    <div>Loading COVID-19 data...</div>
                </div>
            </div>
        )
    }

    return (
        <div style={styles.container}>
            <style>
                {`
                    .covid-row:hover {
                        background-color: rgba(102, 126, 234, 0.05);
                    }
                    .stat-card:hover {
                        transform: translateY(-5px);
                    }
                    .search-input:focus {
                        border-color: #4ecdc4;
                        box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
                    }
                `}
            </style>

            <div style={styles.header}>
                <h1 style={styles.title}>COVID-19 Dashboard</h1>
                <p style={styles.subtitle}>Real-time statistics for India</p>
            </div>

            {/* Overall Statistics */}
            <div style={styles.statsContainer}>
                <div style={{...styles.statCard}} className="stat-card">
                    <div style={{...styles.statNumber, ...styles.confirmed}}>
                        {totalStats.confirmed?.toLocaleString()}
                    </div>
                    <div style={{...styles.statLabel, ...styles.confirmed}}>
                        Total Confirmed
                    </div>
                </div>
                <div style={{...styles.statCard}} className="stat-card">
                    <div style={{...styles.statNumber, ...styles.recovered}}>
                        {totalStats.recovered?.toLocaleString()}
                    </div>
                    <div style={{...styles.statLabel, ...styles.recovered}}>
                        Total Recovered
                    </div>
                </div>
                <div style={{...styles.statCard}} className="stat-card">
                    <div style={{...styles.statNumber, ...styles.deaths}}>
                        {totalStats.deaths?.toLocaleString()}
                    </div>
                    <div style={{...styles.statLabel, ...styles.deaths}}>
                        Total Deaths
                    </div>
                </div>
                <div style={{...styles.statCard}} className="stat-card">
                    <div style={{...styles.statNumber, ...styles.active}}>
                        {totalStats.active?.toLocaleString()}
                    </div>
                    <div style={{...styles.statLabel, ...styles.active}}>
                        Active Cases
                    </div>
                </div>
            </div>

            {/* Search */}
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search by state name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.searchInput}
                    className="search-input"
                />
            </div>

            {/* Data Table */}
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.tableHeader}>
                        <tr>
                            <th style={styles.th}>State</th>
                            <th style={styles.th}>Confirmed</th>
                            <th style={styles.th}>Recovered</th>
                            <th style={styles.th}>Deaths</th>
                            <th style={styles.th}>Active</th>
                            <th style={styles.th}>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} style={styles.row} className="covid-row">
                                <td style={{...styles.td, fontWeight: '600'}}>{item.state}</td>
                                <td style={{...styles.td, ...styles.confirmed}}>{item.confirmed}</td>
                                <td style={{...styles.td, ...styles.recovered}}>{item.recovered}</td>
                                <td style={{...styles.td, ...styles.deaths}}>{item.deaths}</td>
                                <td style={{...styles.td, ...styles.active}}>{item.active}</td>
                                <td style={styles.td}>{item.lastupdatedtime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Covid19