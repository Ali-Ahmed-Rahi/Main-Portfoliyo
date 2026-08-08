import GlowWrapper from "../helpers/GlowWrapper";

const Contact = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-md font-work text-yellow-500 space-x-4">Contact Me</h2>
        <h2 className="uppercase font-playfair flex gap-2 text-2xl">Open <span>to</span> Talk</h2>  
      </div>
      <section className="py-6 text-white font-open border border-white/20 rounded-lg mt-12">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6 flex items-center font-playfair">
          
            <div className="space-y-7">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 mr-2 sm:mr-6 text-yellow-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 mr-2 sm:mr-6 text-yellow-600"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 mr-2 sm:mr-6 text-yellow-600"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1 font-playfair">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full h-14 rounded-md shadow-sm bg-black border border-l-yellow-500 border-r-yellow-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-playfair">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full h-14 rounded-md shadow-s bg-black border border-l-yellow-500 border-r-yellow-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-playfair">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md bg-black border border-l-yellow-500 border-r-yellow-500"
              ></textarea>
            </label>
            <GlowWrapper>
            <button
              type="button"
              className=" bg-black w-full  p-2 text-lg  "
            >
              Submit
            </button>
            </GlowWrapper>
          </form>
        </div>
      </section>
    </div>
  );
};


export default Contact;
