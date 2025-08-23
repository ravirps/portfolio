import { personalData } from "@/utils/data/personal-data";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.open(`mailto:${personalData.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918601065279', '_blank'); // Replace with actual phone number
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Ravi, I came across your biodata and would like to connect with you.");
    window.open(`https://wa.me/918601065279?text=${message}`, '_blank'); // Replace with actual WhatsApp number
  };

  const handleAddressClick = () => {
    // You can replace this with actual address coordinates or Google Maps link
    window.open('https://maps.google.com/?q=Bangalore,Karnataka', '_blank');
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        📞 Contact Information
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between group">
            <span className="font-semibold flex items-center gap-2">
              <FaEnvelope className="text-purple-500" />
              Email:
            </span>
            <button 
              onClick={handleEmailClick}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer"
            >
              {personalData.email}
            </button>
          </div>
          <div className="flex items-center justify-between group">
            <span className="font-semibold flex items-center gap-2">
              <FaPhone className="text-green-500" />
              Phone:
            </span>
            <button 
              onClick={handlePhoneClick}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer"
            >
              +91 XXXXXXXXXX
            </button>
          </div>
          <div className="flex items-center justify-between group">
            <span className="font-semibold flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              WhatsApp:
            </span>
            <button 
              onClick={handleWhatsAppClick}
              className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 cursor-pointer"
            >
              +91 XXXXXXXXXX
            </button>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between group">
            <span className="font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              Address:
            </span>
            <button 
              onClick={handleAddressClick}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer text-right max-w-[200px]"
            >
              Bangalore, Karnataka
            </button>
          </div>
          <div className="flex items-center justify-between group">
            <span className="font-semibold flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Preferred Contact:
            </span>
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center justify-between group">
            <span className="font-semibold flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Best Time to Call:
            </span>
            <span>7 PM - 9 PM</span>
          </div>
        </div>
      </div>
      
      {/* Contact Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <h4 className="font-semibold text-blue-800 mb-2">💡 How to Contact:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• <strong>Email:</strong> Click to open your email app</li>
          <li>• <strong>Phone:</strong> Click to call directly</li>
          <li>• <strong>WhatsApp:</strong> Click to open WhatsApp with a pre-filled message</li>
          <li>• <strong>Address:</strong> Click to open Google Maps</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
