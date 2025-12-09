

function App() {
  

  return (
    <>
       <main id="About-page" className="w-full bg-black py-12 px-4">
      <section className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-10">
       
        {/* Image Section */}
        <div data-aos="zoom-in-up">
          <img
            
            alt="Keshan"
            className="w-[450px] rounded-2xl max-w-full"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-start justify-center w-full md:w-1/2 text-left"
        >
          {/* Title */}
          <h3
            id="first"
            className="text-(--accent-color) font-bold  text-lg flex items-center"
          >
            <span className="text-xl text-(--accent-color) px-2">&#9733;</span>
            MY STORY HI HOW ARE YU
            <span className="text-xl text-(--accent-color) px-2">&#9733;</span>
          </h3>

          {/* Subtitle */}
          <h2
            id="sec"
           className="text-white font-bold text-3xl sm:text-8xl lg:text-5xl mt-3"

          >
            Passionate Developer Crafting Solutions for the Future sjdahflkadsflksdflksalf
          </h2>

          {/* Description */}
          <p
            id="third"
            className="text-gray-300  text-base sm:text-md mt-5 leading-relaxed"
          >
            I am passionate about using technology to solve complex problems and
            make a positive impact on the world. So currently I am studying
            Software Engineering at IJSE - Institute of Software Engineering.
            As a creative problem solver and team player, I am committed to
            delivering high-quality work and exceeding expectations. I am eager
            to connect with other technology professionals and explore new
            opportunities for growth and development.
            <br />
          </p>

          {/* Button */}
          <button
            data-aos="zoom-in-up"
            className="mt-8 px-5 py-2 bg-(--accent-color) text-black font-bold rounded-full  hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </section>
    </main>
        
    </>
  )
}

export default App
