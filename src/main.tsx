import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './main.css'
import { AboutMePage } from './pages/AboutMePage'
import { EducationPage } from './pages/EducationPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { LeadershipPage } from './pages/LeadershipPage'
import { NotFound } from './pages/NotFound'
import { TechnicalSkillsPage } from './pages/TechnicalSkillsPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Outlet start? */}
      <Route index element={<AboutMePage />}></Route>
      <Route path="education" element={<EducationPage />} />
      <Route path="technicalskills" element={<TechnicalSkillsPage />} />
      <Route path="experience" element={<ExperiencePage />} />
      <Route path="leadership" element={<LeadershipPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
