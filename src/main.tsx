import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Home/index.tsx'
import Layout from './components/layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import Counter from './components/Home/Counter/index.tsx'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Hero />
        <Counter isColorMode={false}></Counter>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
