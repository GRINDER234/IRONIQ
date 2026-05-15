import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('API connection failed'))
    }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center',
      alignItems: 'center', height: '100vh', background: 'black' }}>
        <h1 style={{ color: 'white', fontSize: '2rem' }}>{message}</h1>
      </div>
  )
}

export default App