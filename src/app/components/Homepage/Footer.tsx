// components/Footer.tsx
import { Facebook, Instagram, Music, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#517A87] to-[#7AD5EC] text-gray-800 rounded-br-full">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-black text-white px-2 py-1 font-bold text-lg rounded">M</div>
            <span className="text-xl font-semibold">Marqetplace</span>
          </div>
          <p className=" text-gray-700 max-w-xs">
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

      <div className="border-t border-white/30 mt-8 py-4 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm">© Marqetplace All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Music size={20} /></a> 
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
        </div>
      </div>
      <div className="w-full bg-white rounded-tl-full h-20 ">.</div>
    </footer>
  );
}
