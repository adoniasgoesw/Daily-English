import { Routes, Route } from 'react-router-dom'
import Daily from '../pages/Daily.jsx'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Daily />} />
     
    </Routes>
  )
}

export default AppRoute