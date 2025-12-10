import { count } from "../../../data/data"


const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={` ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center '
            
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <img
                src={item.icon}
                alt='icon'
                width={30}
                height={30}
                srcSet="logo-1x.png 1x, logo-2x.png 2x, logo-3x.png 3x"
              />
              <span className='text-5xl font-semibold text-midnight_text dark:text-white'>
                {item.value}
              </span>
              <p className='text-base text-grey text-center  w-full dark:text-white/50'>
                {item.description}
              </p>
                <p className='text-base text-grey text-center  w-full dark:text-white/50'>
                {item.subDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
