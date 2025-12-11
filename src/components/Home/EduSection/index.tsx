'use client'
import  { useEffect, useState } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import type { EducationItem } from '../../../types/Education'
import { EducationData } from '../../../data/data'


const Education = ({ }: { _isColorMode?: boolean }) => {

  const [educationItems, setEducationItems] = useState<EducationItem[]>([])

  useEffect(() => {
    setEducationItems(EducationData)
  }, [])

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'graduation':
        return <GraduationCap className="w-6 h-6" />
      case 'award':
        return <Award className="w-6 h-6" />
      case 'book':
        return <BookOpen className="w-6 h-6" />
      default:
        return <GraduationCap className="w-6 h-6" />
    }
  }

  return (
    <section 
        className='bg-gray-50 dark:bg-darklight py-20' 
        id='education'>
          
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex gap-2 items-center justify-center mb-3'>
               <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            My Journey
          </span>
        </div>
        </div>
        <h2 
          className='text-4xl font-bold text-gray-900 text-center mb-16 dark:text-white'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'>
          Education & Qualifications
        </h2>
        
        <div className='relative'>
          {/* Timeline line */}
          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500'></div>
          
          {educationItems.map((item, index) => (
            <div
              key={index}
              className={`relative mb-8 md:mb-10 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='800'>
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                {/* Timeline dot */}
                <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white shadow-lg z-10'>
                  {getIcon(item.icon)}
                </div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 `}>
                  <div className='bg-white dark:bg-darkmode rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6  border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 group'>
                    {/* Mobile icon */}
                    <div className='flex md:hidden w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white mb-4'>
                      {getIcon(item.icon)}
                    </div>
                    
                    <div className='mb-3'>
                      <span className='inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full'>
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                      {item.degree}
                    </h3>
                    
                    <p className='text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3'>
                      {item.institution}
                    </p>
                    
                    <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                      {item.description}
                    </p>
                    
                    <div className='mt-4 pt-4 border-t border-gray-100 dark:border-gray-700'>
                      <button className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-2 group/btn'>
                        Learn more
                        <svg className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education