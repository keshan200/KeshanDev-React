import  { useState, useEffect } from 'react';
import { techStack } from '../../../data/data';

const TechStackMarquee = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMediaQuery.matches);

    const handleChange = (e : any) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);


  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className={isDark ? 'dark' : ''}>
      <section className='bg-section dark:bg-darklight'  style={{ padding: '15px' }} id='techstack'>
        <div className='container mx-auto max-w-60xl px-4'>
          {/* Header */}
          <div
            className='flex gap-2 items-center justify-center'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              tech stack
            </span>
          </div>
          
          <h2
            className='sm:text-2xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-6 md:w-4/6 w-full m-auto dark:text-white'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            Technologies I work with to build amazing products
          </h2>

          {/* Marquee Container */}
          <div className='relative overflow-hidden py-8'>
            {/* Gradient Overlays */}
            <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-section to-transparent dark:from-darklight z-10' />
            <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-section to-transparent dark:from-darklight z-10' />
            
            {/* Marquee */}
            <div className='flex animate-marquee'>
              {duplicatedStack.map((tech, index) => {
              
                return (
                  <div
                    key={index}
                    className='flex-shrink-0 mx-8 group'
                    data-aos='fade-up'
                    data-aos-delay={`${(index % 8) * 100}`}
                    data-aos-duration='1000'>
                    <div className='flex flex-col items-center space-y-3 transition-transform duration-300 group-hover:scale-110'>
                      <div className={`p-2 bg-white dark:bg-darkmode rounded-xl shadow-service border border-transparent group-hover:border-primary transition-all duration-300 ${tech.color}`}>
                        <img src={tech.icon} alt={tech.name} className='w-10 h-10' />
                      </div>
                      <span className='text-midnight_text dark:text-white font-medium text-sm whitespace-nowrap'>
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

         

          {/* Additional Info */}
          <div className='text-center mt-8'>
            <p className='text-midnight_text/70 dark:text-white/50 text-sm'>
              Continuously learning and exploring new technologies
            </p>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </div>
  );
};

export default TechStackMarquee;