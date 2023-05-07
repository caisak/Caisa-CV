import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './main.css'
import { AboutMePage } from './pages/AboutMePage'
import { NotFound } from './pages/NotFound'
import { PortfolioPage } from './pages/PortfolioPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Outlet start? */}
      <Route index element={<AboutMePage />}></Route>
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
      },
    }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
