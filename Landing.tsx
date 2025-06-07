import React from "react";
import herologo from "../assets/dev.png";
import web from "../assets/web.svg";
import mobile from "../assets/mobile.svg";
import reactjs from "../assets/reactjs.svg";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  const navigate = useNavigate();
  const imgclick = () => {
    navigate("/home");
  };
  return (
    <div className="container mx-auto">
      <nav className="nav">
        <div>
          <img
            src="https://picsum.photos/id/870/100/100?grayscale&blur=2"
            onClick={imgclick}
            className="vb"
          />
        </div>
        <ul className="ulll">
          <li className="hover:text-white">services</li>
          <li className="hover:text-white">pricing</li>
          <li className="hover:text-white">About</li>
          <li className="hover:text-white">Contact</li>
        </ul>
        <button className="sign">singnup</button>
      </nav>
      <div className="  flex  mt-4 flex-col md:flex-row ">
        <div className="md:w-1/2 text-center md:mt-16 mt-4  ">
          <p className="text-pretty">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-blue-500 text-white font-medium mt-4 p-3 rounded-4xl ">
            Get started
          </button>
        </div>
        <div className="md:w-1/2 mx-auto ">
          <img src={herologo} />
        </div>
      </div>
      <div className="container mx-auto flex space-x-4 mt-12 flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col items-center  ">
          <h1 className="font-bold text-2xl">web development</h1>
          <img src={web} className="w-60 h-60 mt-6" />
          <p className="text-base  md:ms-0 ms-10 ">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center">
          <h1 className="font-bold text-2xl">Mobile app development</h1>
          <img src={mobile} className="w-60 h-60 mt-6" />
          <p className="text-ellipsis md:ms-0 ms-10 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center ">
          <h1 className="font-bold text-2xl">Mern stack development</h1>
          <img src={reactjs} className="w-60 h-60 mt-6" />
          <p className="text-ellipsis md:ms-0 ms-10 ">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of
            text.It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <div className="text-center">
          <h1 className="font-bold text-3xl">pricing</h1>
          <p className="text-2xl">
            offers multiple package of monthly and yearly subscription
          </p>
          <p className="text-2xl">feature plan</p>
        </div>
        <div className=" grid md:grid-cols-3 md:gap-40 gap-20 sm:grid-cols-1 md:mt-6 mt-2 place-items-center ">
          <div className="w-80 h-80 bg-gray-300 rounded-2xl hover:shadow-9xl border-4 border-purple-500 border-dashed relative">
            <h1 className="text-5xl font-bold text-center">$99</h1>
            <h2 className="text-black text-2xl mt-2 text-center ">Basic</h2>
            <p className="mt-2 text-center">
              All the basic features are included
            </p>
            <ul>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>

              <li className="ms-2 mb-2">✔️ core business</li>
            </ul>
            <button className="bg-blue-500 text-white font-medium mt-4 p-3 rounded-4xl absolute bottom-0 transform translate-y-5 translate-x-25">
              Get started
            </button>
          </div>
          <div className="w-80 h-80 bg-gray-300 rounded-2xl hover:shadow-9xl border-4 border-purple-500 border-dashed relative ">
            <h1 className="text-5xl font-bold text-center">$99</h1>
            <h2 className="text-black text-2xl mt-2 text-center ">Basic</h2>
            <p className="mt-2 text-center">
              All the basic features are included
            </p>
            <ul>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
            </ul>
            <button className="bg-blue-500 text-white font-medium mt-4 p-3 rounded-4xl absolute bottom-0 transform translate-y-5 translate-x-25 ">
              Get started
            </button>
          </div>
          <div className="w-80 h-80 bg-gray-300 rounded-2xl hover:shadow-9xl border-4 border-purple-500 border-dashed relative ">
            <h1 className="text-5xl font-bold text-center">$99</h1>
            <h2 className="text-black text-2xl mt-2 text-center ">Basic</h2>
            <p className="mt-2 text-center">
              All the basic features are included
            </p>
            <ul>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
              <li className="ms-2 mb-2">✔️ core business</li>
            </ul>
            <button className="bg-blue-500 text-white font-medium mt-4 p-3 rounded-4xl absolute bottom-0 transform translate-y-5 translate-x-25">
              Get started
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-4 text-center">
          <h1>Recent updates</h1>
          <h1 className="text-5xl">Featured stories</h1>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-40 gap-20 md:mt-2 mt-2 place-items-center  ">
          <div className="bg-gray-200 rounded-2xl  w-80 relative">
            <img
              src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
              className="w-full h-80 "
            />
            <h1 className="text-center text-4xl">Google ranking</h1>
            <p className="text-x mt-3 ms-3 mb-4">
              The first true generator on the Internet. It uses a dictionary of
              over 200 Latin words, combined with a handful of model sentence
              structures
            </p>
            <button className="bg-blue-500 text-white font-medium  p-3 rounded-3xl absolute bottom-0 transform translate-y-1 translate-x-40 ">
              READ MORE
            </button>
          </div>
          <div className="bg-gray-200 rounded-2xl w-80 relative">
            <img
              src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
              className="w-full h-80 "
            />

            <h1 className="text-center text-4xl">Google ranking</h1>
            <p className="text-x mt-3 ms-3 mb-4">
              The first true generator on the Internet. It uses a dictionary of
              over 200 Latin words, combined with a handful of model sentence
              structures
            </p>
            <button className="bg-blue-500 text-white font-medium  p-3 rounded-4xl absolute bottom-0 transform translate-y-1 translate-x-40 ">
              READ MORE
            </button>
          </div>
          <div className="bg-gray-200 rounded-2xl w-80 relative">
            <img
              src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
              className="w-full h-80 "
            />

            <h1 className="text-center text-4xl">Google ranking</h1>
            <p className="text-x mt-3 ms-3 mb-4">
              The first true generator on the Internet. It uses a dictionary of
              over 200 Latin words, combined with a handful of model sentence
              structures
            </p>
            <button className="bg-blue-500 text-white font-medium mt-4 p-3 rounded-4xl absolute bottom-0 transform translate-y-1 translate-x-40 ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 mt-8">
  <div className="bg-sky-500 text-white px-8 py-10 flex flex-wrap justify-between gap-8 container mx-auto">
    
   
    <div className="flex-1 min-w-[200px]">
      <h1 className="font-bold text-2xl mb-4">VB Company</h1>
      <p className="text-sm">Building modern web experiences with React and Tailwind CSS.</p>
    </div>

    
    <div className="flex-1 min-w-[200px]">
      <h2 className="text-xl font-semibold mb-3">Socials</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Instagram</a></li>
        <li><a href="#" className="hover:underline">WhatsApp</a></li>
      </ul>
    </div>

    <div className="flex-1 min-w-[200px]">
      <h2 className="text-xl font-semibold mb-3">Links</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Products</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>
  </div>

  <div className="bg-sky-500 text-white text-center py-4 text-sm">
    © {new Date().getFullYear()} VB Company. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default Landing;
