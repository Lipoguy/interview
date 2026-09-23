import { fetchRides } from './api/ridesApi'
import './styles.css'

function App() {
  const rides = fetchRides()

  return (
    <div className="app">
      <header className="header">
        <h1>Ride Manager</h1>
        <p style={{ margin: 0, color: '#555' }}>Transport company rides</p>
      </header>

      <main className="main">
        <h2 style={{ marginTop: 0 }}>Rides</h2>
        <table className="rides-table">
          <thead>
            <tr>
              <th>Rider</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.riderName}</td>
                <td>{ride.time}</td>
                <td>
                  <span className={'status status-' + ride.status}>{ride.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default App
