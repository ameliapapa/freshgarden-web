import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './home'
import ContactUsPage from './contact-us'
import JoinUsPage from './join-us'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
      </Routes>
    </Router>
  )
}

export default App
