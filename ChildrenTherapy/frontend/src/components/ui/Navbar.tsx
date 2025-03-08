import { Link } from "react-router-dom";
import { Button } from "./button";
import Logo from "@/assets/logo/Logo.png";


function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10 px-6 py-2 flex justify-between items-center h-20">
      {/* Clickable Logo Button */}
      <Link to="/">
        <button className="focus:outline-none">
          <img 
            src={Logo} 
            alt="TheraCare Children's Therapy Center Logo" 
            className="w-20 h-auto transition-transform transform hover:scale-110"
          />
        </button>
      </Link>

      <div className="text-lg font-bold text-blue-600">LITTLE WINGS</div>
      
      <div className="space-x-4">
        <Link to="/home">
          <Button variant="outline" className="text-sm px-4 py-1">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" className="text-sm px-4 py-1">About Us</Button>
        </Link>
        <Link to="/services">
          <Button variant="ghost" className="text-sm px-4 py-1">Services</Button>
        </Link>
        <Link to="/Book Appointments">
          <Button variant="ghost" className="text-sm px-4 py-1">Book Appointments</Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost" className="text-sm px-4 py-1">Contact Us</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
