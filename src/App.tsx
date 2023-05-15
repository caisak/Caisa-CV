import { Box } from '@mantine/core'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FooterCentered } from './components/Footer'
import { HeaderResponsive } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const headerLinks = [
    { link: '/', label: 'HomePage' },
    { link: '/portfolio', label: 'Portfolio' },
  ]

  const footerLinks = [
    { link: 'https://github.com/caisak', label: 'GitHub' },
    { link: 'https://www.linkedin.com/in/caisa-kohlin', label: 'LinkedIn' },
    { link: 'mailto:caisa.kohlin@medieinstitutet.se', label: 'Email' },
  ]

  return (
    <div>
      <HeaderResponsive links={headerLinks} />
      <Box w="100%">
        <Outlet />
        </Box>
      <FooterCentered links={footerLinks} />
    </div>
  )
}

export default App
