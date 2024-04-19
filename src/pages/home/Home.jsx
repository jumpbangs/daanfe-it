import HeaderWave from '../../components/HeaderWave';

import cloudImg from '../../assets/cloud-it.jpg';
import codeScreen from '../../assets/code-screen.jpg'
import postItImg from '../../assets/post-it.jpg';
import designImg from '../../assets/design.jpg';
import { Bounce, Fade } from 'react-awesome-reveal';


const Home = () => {
  return (
    <div className="relative scroll-smooth bg-[#C62368]">
      <div
        className="hero min-h-screen bg-slate-50"
        style={{ backgroundImage: 'url(/layered-waves-haikei.svg)' }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <HeaderWave />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Daanfe IT Solutions
            </h1>
            <p className="py-6 text-2xl text-gray-600">
              Crafting Solutions, Tailored for Success: Where Quality Meets Innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto content-center justify-self-center">

        <div className="grid gap-10 bg-cover min-h-screen bg-center md:grid-cols-2">
          <div className="hidden content-center justify-self-center p-10 text-center text-white md:block">
            <Fade cascade>
              <img
                className="mask mask-hexagon-2"
                src={postItImg}
              />
            </Fade>
          </div>
          <div className="content-center justify-self-center text-center text-white">
            <Fade cascade>
              <h2 className="mt-20 text-4xl">Custom Software Development</h2>
              <p className="px-1 py-12 text-2xl md:px-36">
                Harness the power of tailored software solutions designed specifically for your
                business objectives.
              </p>
              <p className="px-1 py-4 text-2xl md:px-36">
                Our expert developers work disclosely with you to understand your requirements and
                deliver scalable, efficient, and secure software applications.
              </p>
            </Fade>
          </div>
        </div>

        <div className="hero grid min-h-screen grid-cols-1 bg-[url(/blob-haikei.svg)] bg-contain bg-center bg-no-repeat">
          <div className="text-center text-gray-700 ">
            <Bounce cascade damping={0.2}>
              <h2 className="mt-18 text-4xl">Intuitive Application Design</h2>
              <p className="px-1 py-4 text-2xl md:px-96">
                Stand out in the digital marketplace with intuitive and user-friendly applications
                crafted by our design wizards.
              </p>
              <div className="flex items-center justify-center pt-1">
                <img
                  className="mask mask-squircle size-1/4"
                  src={designImg}
                />
              </div>
              <p className="text-wrap px-1 py-6 text-2xl md:px-96">
                From concept to execution, we focus on delivering seamless user experiences that
                drive engagement and enhance customer satisfaction.
              </p>
            </Bounce>
          </div>
        </div>

        <div className="grid min-h-screen gap-10 bg-cover bg-center md:grid-cols-2">
          <div className="content-center justify-self-center text-center text-white">
            <Fade cascade>
              <h2 className="mt-20 text-4xl">Dynamic Website Development</h2>
              <p className="px-1 py-12 text-2xl md:px-36">
                Your website is your digital storefront, and we ensure it leaves a lasting
                impression.
              </p>
              <p className="px-1 py-4 text-2xl md:px-36">
                Whether you need a corporate website, e-commerce platform, or a robust web
                application, our team excels in creating visually stunning and functional websites
                that elevate your online presence.
              </p>
            </Fade>
          </div>
          <div className="mt-20 hidden content-center justify-self-center p-10 text-center text-white md:block">
            <Fade cascade>
              <img
                className="mask mask-hexagon py-4 size-fit"
                src={codeScreen}
              />
            </Fade>
          </div>
        </div>

        <div className="grid gap-10 bg-cover min-h-screen bg-center md:grid-cols-2">
          <div className="hidden content-center justify-self-center p-10 text-center text-white md:block">
            <Bounce cascade>
              <img
                className="mask mask-hexagon"
                src={cloudImg}
              />
            </Bounce>
          </div>
          <div className="content-center justify-self-center text-center text-white">
            <Bounce cascade>
              <h2 className="mt-20 text-4xl">Cloud Solutions</h2>
              <p className="px-1 py-12 text-2xl md:px-36">
                Embrace the flexibility, scalability, and efficiency of cloud computing with our comprehensive suite of cloud solutions.

              </p>
              <p className="px-1 py-4 text-2xl md:px-36">
                Whether you&apos;re migrating to the cloud, optimizing your existing cloud infrastructure,
                or developing cloud-native applications, we&apos;ve got you covered.
              </p>
            </Bounce>
          </div>
        </div>


        <div className="hero grid min-h-screen grid-cols-1">
          <div className="text-center text-gray-700 ">
            <Bounce cascade damping={0.2}>
              <h2 className="mt-18 text-4xl">Intuitive Application Design</h2>
              <p className="px-1 py-4 text-2xl md:px-96">
                Stand out in the digital marketplace with intuitive and user-friendly applications
                crafted by our design wizards.
              </p>
              <div className="flex items-center justify-center pt-1">
                <img
                  className="mask mask-squircle size-1/4"
                  src={designImg}
                />
              </div>
              <p className="text-wrap px-1 py-6 text-2xl md:px-96">
                From concept to execution, we focus on delivering seamless user experiences that
                drive engagement and enhance customer satisfaction.
              </p>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
