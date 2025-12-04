// app/components/Menhero.jsx
import { GrUserManager } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";

export default function ShoeLandingPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#000] text-white font-poppins overflow-hidden">

      {/* 🔥 ORANGE GLOW TOP RIGHT */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-700 blur-[100px] opacity-30 pointer-events-none"></div>

      {/* 🔥 ORANGE GLOW BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-700 blur-[100px] opacity-25 pointer-events-none"></div>

      {/* Top Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-12 md:px-24">
        
        {/* Left Product Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl flex mt-[-30vh] items-center shadow-2xl">
            <img
              src="/2.3.png"
              alt="Shoe"
              className="w-72 h-72 md:w-80 md:h-80 ml-8 object-contain rotate-6 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Text & CTA */}
        <div className="mt-[-30vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            We Provide <span className="text-orange-500">High Quality Shoes</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg w-[70vh]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut nostrum quaerat ad culpa vitae ipsum nisi earum molestias cumque, aliquid tenetur assumenda aliquam voluptate dignissimos distinctio porro rem beatae eius corporis. Pariatur, velit. Mollitia iure neque eveniet voluptatem suscipit obcaecati minus repellat soluta, ullam sed. Accusantium in beatae officiis maxime porro reprehenderit molestiae architecto unde tempore voluptates, consequatur ut qui dolor ab ipsum minima dolores omnis ex? Obcaecati veritatis odit vero cumque. Quibusdam quod, similique voluptate vel nulla, eum non atque commodi nam voluptatibus soluta....
          </p>
          <button className="w-48 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300">
            Explore More
          </button>
        </div>
      </section>

      {/* Bottom Feature Section */}
      <section className="flex flex-col md:flex-row mt-[-40vh] ml-20 items-center justify-between w-full px-12 md:px-24 py-24">
        
        {/* Left Feature Details */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Get to Know Our <span className="text-orange-500">Feature Product</span>
          </h2>
          <p className="text-gray-300 mb-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam inventore distinctio ea id laboriosam nulla explicabo commodi nisi modi eveniet, saepe nobis. Pariatur necessitatibus excepturi quis adipisci ratione culpa earum dolorum. Perferendis amet earum iure quae saepe sed, vero rem aliquid possimus, illo eligendi ut odio culpa cupiditate soluta dicta repudiandae maxime illum consequatur velit magnam corrupti? Nulla consectetur expedita quas, reiciendis, nobis ad similique culpa nam tempora perferendis sequi, illo aperiam cumque. Optio inventore dignissimos quasi architecto.
          </p>

          {/* Feature List */}
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <GrUserManager className="text-orange-600 text-2xl" />
              <span className="text-gray-300">Best Quality Shoes</span>
            </li>
            <li className="flex items-center space-x-3">
              <IoMdCart className="text-orange-600 text-2xl" />
              <span className="text-gray-300">Affordable Pricing</span>
            </li>
            <li className="flex items-center space-x-3">
              <GrUserManager className="text-orange-600 text-2xl" />
              <span className="text-gray-300">Fast Delivery</span>
            </li>
          </ul>
        </div>

        {/* Right Second Product */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-40 bg-orange-600 rounded-lg shadow-lg rotate-[-6deg]"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-40 bg-orange-600 rounded-lg shadow-lg rotate-[4deg]"></div>

            <img
              src="/2.2.png"
              alt="Second Shoe"
              className="relative w-74 h-74 object-contain hover:scale-105 transition-transform duration-500 z-20"
            />

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white">Nike Watch Series 7i</h3>
              <p className="text-gray-400 line-through">$59.00</p>
              <p className="text-2xl font-extrabold text-orange-600">$39.00</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
