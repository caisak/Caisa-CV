import { useState } from 'react'
import { HeaderResponsive } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const links = [
    { link: '/', label: 'About Me' },
    { link: '/education', label: 'Education' },
    { link: '/technicalskills', label: 'Technical Skills' },
    { link: '/experience', label: 'Experience' },
    { link: '/leadership', label: 'Leadership' },
  ]

  return (
    <div>
      <HeaderResponsive links={links} />
    </div>
  )
}

export default App
