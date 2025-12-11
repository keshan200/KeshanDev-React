
const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-10 bg-white  dark:bg-darklight bg-cover text-white'>
    <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-6 md:gap-10 relative z-10'>
       
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center  mt-[30px] sm:mt-[30px] xs:mt-[30px]'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
            
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
             Engineering solutions that make an impact
            </span>
          </div>


          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Unveiling My Professional Odyssey: Portfolio Highlights
          </h1>


          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            I'm Full-Stack Software Engineer passionate about building modern, scalable Systems.
          </p>


          <a
            href='#learn-more'
            className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
            Get Started
          </a>


         

  <div className='flex items-center mt-12 gap-4'>
  <div className='flex items-center'>
    <img
       src="/images/hero/Linkdin.png"
      alt='hero-image'
      width={40}
      height={40}
     
      className='w-10 h-10 rounded-full border border-solid border-white -ml-0'
    />
    <img
     src="/images/hero/email.png"
      alt='hero-image'
      width={40}
      height={40}
      className='w-10 h-10 rounded-full border border-solid border-white -ml-3'
    />
    <img
     src="/images/hero/call.png"
      alt='hero-image'
      width={40}
      height={40}
      className='w-10 h-10 rounded-full border border-solid border-white -ml-3'
    />
  </div>

  <div className='flex flex-col'>
    <p className='text-md font-normal text-grey max-w-80'>
      Want to connect? Reach me via:
    </p>

    <div className='flex items-center gap-4 '>
      {/* LinkedIn */}
      <a
        href='https://www.linkedin.com/in/keshan-silva-104b6a2a9'
        target='_blank'
        className='flex items-center text-primary hover:text-blue-700 gap-1'
      >
        <i className='fab fa-linkedin text-lg'></i> LinkedIn
      </a>

      {/* Email */}
      <a
        href="mailto:sachinthakeshan345@gmail.com"
        className='flex items-center text-primary hover:text-blue-700 gap-1'
      >
        <i className='fas fa-envelope text-lg'></i> Email
      </a>

      {/* Phone */}
      <a
        href='tel:+94774510743'
        className='flex items-center text-primary hover:text-blue-700 gap-1'
      >
        <i className='fas fa-phone text-lg'></i> Call
      </a>
    </div>
  </div>
</div>

          
        </div>

        <div className="md:col-span-6 col-span-12 relative ">
          <img
            src="images/hero/hero-image.png"
            alt='hero-image'
            width={350}
            height={150}
            className="rounded-xl border-8 border-blue-500"
            style={{ width: '90%', height: 'auto', borderRadius: '20px' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
