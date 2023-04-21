import { Container } from '@mantine/core'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FooterCentered } from './components/Footer'
import { HeaderResponsive } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const headerLinks = [
    { link: '/', label: 'About Me' },
    { link: '/education', label: 'Education' },
    { link: '/technicalskills', label: 'Technical Skills' },
    { link: '/experience', label: 'Experience' },
    { link: '/leadership', label: 'Leadership' },
  ]

  const footerLinks = [
    { link: '/github', label: 'Github' },
    { link: '/linkedin', label: 'LinkedIn' },
    { link: '/email', label: 'Email' },
  ]

  return (
    <div>
      <HeaderResponsive links={headerLinks} />
      <Container>
        <Outlet />
        </Container>
      <FooterCentered links={footerLinks} />
    </div>
  )
}

export default App
