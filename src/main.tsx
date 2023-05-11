import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import './main.css';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { PortfolioPage } from './pages/PortfolioPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function Main() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
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
    </ColorSchemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
