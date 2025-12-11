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
import Services from './components/Home/Services/index.tsx'
import TechStackMarquee from './components/Home/Tech/index.tsx'
import WorkExperience from './components/Home/WorkExp/index.tsx'
import Education from './components/Home/EduSection/index.tsx'
import Portfolio from './components/Home/SharedCoponents/portfollio/index.tsx'
import Contact from './components/Home/Contact/index.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Hero />
        <Counter isColorMode={false} />
        <Services />
        <TechStackMarquee />
        <WorkExperience />
        <Education/>
        <Portfolio />
        <Contact/>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
