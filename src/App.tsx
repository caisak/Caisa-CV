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
    { link: '/portfolio', label: 'Portfolio' },
    { link: '/experience', label: 'Experience' },
    { link: '/leadership', label: 'Leadership' },
  ]

  const footerLinks = [
    { link: 'https://github.com/caisak', label: 'GitHub' },
    { link: 'https://www.linkedin.com/in/caisa-kohlin', label: 'LinkedIn' },
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
