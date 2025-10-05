import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#517A87]/80 to-[#7AD5EC] text-gray-800 rounded-br-full">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-black text-[#8FD7ED] px-2 py-1 font-bold text-2xl rounded">M</div>
            <span className="text-xl font-semibold">Marqetplace</span>
          </div>
          <p className=" max-w-xs ">
            Marqetplace is where you find everything you need —
            quality products, trusted sellers, and a smarter way to shop online.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-8">Company</h4>
          <ul className="space-y-2 ">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Impacts</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-8">Help</h4>
          <ul className="space-y-2">
            <li><a href="#">Account</a></li>
            <li><a href="#">Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-8">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#">E-book</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

      <div className="px-2 mt-8 py-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><Image src='/icons/insta.png' width={25} height={25} alt='instagram icon'/></a>
          <a href="#"><Image src='/icons/tiktok.png' width={25} height={25} alt='instagram icon'/></a>
          <a href="#"><Image src='/icons/facebook.png' width={25} height={25} alt='instagram icon'/></a>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end py-3 bg-white rounded-tl-full h-20 px-28  ">
        <span>
           <p className=""> Marqetplace &copy; All rights reserved</p>
        </span>
      </div>
    </footer>
  );
}
