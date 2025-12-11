import React from 'react';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  companyImage:string;
  position: string;
  company: string;
  type: string;
  period: string;
  location: string;
  skills: string[];
  description: string[];
}

const ExperienceData: ExperienceItem[] = [
  {
    companyImage : '/images/WorkExp/logo.png',
    position: 'Software Engineer Intern',
    company: 'Synexis',
    type: 'Internship',
    period: 'Nov 2025 - Present · 2 mos',
    location: 'Colombo District, Western Province, Sri Lanka · Remote',
    skills: ['Full Stack Development', '.NET Framework', 'C#'],
    description: [
      'Developing full-stack applications using modern web technologies',
      'Working with .NET Framework and C# for backend development',
      'Collaborating with senior developers on enterprise projects'
    ]
  }
];

const WorkExperience = () => {
  return (
    <section className='bg-section dark:bg-darklight py-20' id='experience'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Header */}
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            work experience
          </span>
        </div>
        
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-16 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Professional Journey & Experience
        </h2>

        {/* Experience Grid */}
        <div className='grid md:grid-cols-12 gap-6'>
          {ExperienceData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Left Column - Company Info */}
              <div
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'
                className='md:col-span-4 col-span-12'>
                <div className='bg-white dark:bg-darkmode rounded-lg shadow-service p-5 h-full'>
                  <div className='flex items-center gap-3 mb-4'>
                    <img
    src={item.companyImage}
    alt={item.company}
    className="w-12 h-12 rounded-full object-cover"
  />
                    <div>
                      <h3 className='font-bold text-midnight_text dark:text-white text-lg'>
                        {item.company}
                      </h3>
                      <span className='text-sm text-midnight_text/60 dark:text-white/60'>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className='space-y-3 mb-4'>
                    <div className='flex items-start gap-2'>
                      <Calendar className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                      <span className='text-sm text-midnight_text/70 dark:text-white/70'>
                        {item.period}
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <MapPin className='w-4 h-4 text-success mt-0.5 flex-shrink-0' />
                      <span className='text-sm text-midnight_text/70 dark:text-white/70'>
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className='inline-flex items-center gap-1 px-3 py-1.5 bg-success/10 dark:bg-success/20 rounded-full'>
                    <span className='w-2 h-2 rounded-full bg-success animate-pulse'></span>
                    <span className='text-success font-semibold text-xs'>Active</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Role Details */}
              <div
                data-aos='fade-left'
                data-aos-delay='400'
                data-aos-duration='1000'
                className='md:col-span-8 col-span-12'>
                <div className='bg-white dark:bg-darkmode rounded-lg shadow-service p-5 h-full relative overflow-hidden group'>
                  {/* Decorative corner */}
                  <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full'></div>
                  
                  <div className='relative'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary transition-colors'>
                          {item.position}
                        </h3>
                        <div className='flex items-center gap-2'>
                          <Briefcase className='w-4 h-4 text-primary' />
                          <span className='text-md text-midnight_text/70 dark:text-white/70'>
                            Full-time Position
                          </span>
                        </div>
                      </div>
                      <button className='p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 group/btn'>
                        <ArrowUpRight className='w-5 h-5' />
                      </button>
                    </div>

                    <div className='space-y-2 mb-5'>
                      {item.description.map((desc, idx) => (
                        <div
                          key={idx}
                          className='flex items-start gap-2 text-sm text-midnight_text/80 dark:text-white/80'>
                          <span className='text-primary mt-1'>→</span>
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className='border-t border-midnight_text/10 dark:border-white/10 pt-4'>
                      <span className='text-xs font-semibold text-midnight_text/60 dark:text-white/60 block mb-2'>
                        TECH STACK
                      </span>
                      <div className='flex flex-wrap gap-2'>
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 bg-section dark:bg-darklight text-midnight_text dark:text-white text-xs font-medium rounded border border-midnight_text/10 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:scale-105 transition-all duration-300'>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className='text-center mt-12'
          data-aos='fade-up'
          data-aos-delay='600'
          data-aos-duration='1000'>
          <p className='text-midnight_text/70 dark:text-white/50 text-sm'>
            Open to new opportunities and exciting challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;