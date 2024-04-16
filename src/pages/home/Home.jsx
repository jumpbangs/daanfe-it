import HeaderWave from '../../components/HeaderWave';

import RevealOnScroll from '../../components/RevalOnScroll';
const Home = () => {
  return (
    <div className="relative scroll-smooth">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url(/layered-waves-haikei.svg)' }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <HeaderWave />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Daanfe IT Solutions
            </h1>
            <p className="py-6 text-2xl">
              Crafting Solutions, Tailored for Success: Where Quality Meets Innovation.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: 'url(/layered-waves-haikei-top-down.svg)' }}
      >
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center text-white">
          <RevealOnScroll>
            <h2 className="text-4xl">The First Title</h2>
            <p>Scroll Down</p>
          </RevealOnScroll>
          
        </div>
      </div>
      <div
        className="bg-[#fbbf24] bg-cover bg-center"
        // style={{ backgroundImage: 'url(../../../public/blob-scene-haikei.svg)' }}
      >
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center text-white">
        <RevealOnScroll>
          <h2 className="text-4xl">The Second Title</h2>
            <p>Scroll Down</p>
            </RevealOnScroll>
        </div>
      </div>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-purple-300 text-white">
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-neutral-800 text-white">
        <h2 className="text-4xl">The Fourth Title</h2>
      </div>
      <div className="hero sticky min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
