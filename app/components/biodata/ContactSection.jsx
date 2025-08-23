import { personalData } from "@/utils/data/personal-data";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.open(`mailto:${personalData.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personalData.phone}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Ravi, I came across your biodata and would like to connect with you.");
    const phoneNumber = personalData.phone.replace(/\s+/g, ''); // Remove spaces from phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleAddressClick = () => {
    // You can replace this with actual address coordinates or Google Maps link
    window.open(`https://maps.google.com/?q=${encodeURIComponent(personalData.address)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        📞 Contact Information
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-purple-50 transition-all duration-300 border border-transparent hover:border-purple-200">
            <span className="font-semibold flex items-center gap-2">
              <FaEnvelope className="text-purple-500" />
              Email:
            </span>
            <button 
              onClick={handleEmailClick}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300 cursor-pointer px-3 py-1 rounded-md hover:bg-blue-50 hover:shadow-sm font-medium flex items-center gap-2 group/btn hover:scale-105 active:scale-95"
            >
              {personalData.email}
              <span className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">📧</span>
            </button>
          </div>
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-200">
            <span className="font-semibold flex items-center gap-2">
              <FaPhone className="text-green-500" />
              Phone:
            </span>
            <button 
              onClick={handlePhoneClick}
              className="text-green-600 hover:text-green-800 hover:underline transition-all duration-300 cursor-pointer px-3 py-1 rounded-md hover:bg-green-50 hover:shadow-sm font-medium flex items-center gap-2 group/btn hover:scale-105 active:scale-95"
            >
              {personalData.phone}
              <span className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">📞</span>
            </button>
          </div>
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-200">
            <span className="font-semibold flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              WhatsApp:
            </span>
            <button 
              onClick={handleWhatsAppClick}
              className="text-green-600 hover:text-green-800 hover:underline transition-all duration-300 cursor-pointer px-3 py-1 rounded-md hover:bg-green-50 hover:shadow-sm font-medium flex items-center gap-2 group/btn hover:scale-105 active:scale-95"
            >
              {personalData.phone}
              <span className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">💬</span>
            </button>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-red-200">
            <span className="font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              Address:
            </span>
            <button 
              onClick={handleAddressClick}
              className="text-red-600 hover:text-red-800 hover:underline transition-all duration-300 cursor-pointer px-3 py-1 rounded-md hover:bg-red-50 hover:shadow-sm font-medium flex items-center gap-2 group/btn hover:scale-105 active:scale-95 text-right max-w-[200px]"
            >
              {personalData.address}
              <span className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">🗺️</span>
            </button>
          </div>
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-orange-50 transition-all duration-300 border border-transparent hover:border-orange-200">
            <span className="font-semibold flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Preferred Contact:
            </span>
            <span className="text-orange-600 font-medium">WhatsApp</span>
          </div>
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-orange-50 transition-all duration-300 border border-transparent hover:border-orange-200">
            <span className="font-semibold flex items-center gap-2">
              <FaClock className="text-orange-500" />
              Best Time to Call:
            </span>
            <span className="text-orange-600 font-medium">7 PM - 9 PM</span>
          </div>
        </div>
      </div>
      
      {/* Contact Instructions */}
      <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          How to Contact:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-300">
            <span className="text-blue-600">📧</span>
            <div>
              <strong className="text-blue-800">Email:</strong>
              <p className="text-sm text-blue-700">Click to open your email app</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-300">
            <span className="text-green-600">📞</span>
            <div>
              <strong className="text-green-800">Phone:</strong>
              <p className="text-sm text-green-700">Click to call directly</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-300">
            <span className="text-green-600">💬</span>
            <div>
              <strong className="text-green-800">WhatsApp:</strong>
              <p className="text-sm text-green-700">Click to open WhatsApp with a pre-filled message</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors duration-300">
            <span className="text-red-600">🗺️</span>
            <div>
              <strong className="text-red-800">Address:</strong>
              <p className="text-sm text-red-700">Click to open Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
