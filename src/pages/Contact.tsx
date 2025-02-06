import { Mail, Phone, MapPin, Heart, Send, Facebook, Instagram,CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/volunteer/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({ name: '', email: '', phone: '', interests: '', availability: '' });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit the form: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 px-6 sm:px-8 lg:px-10 bg-dark-100 flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Get in touch with us for any inquiries or support
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-dark-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Volunteer Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Areas of Interest</label>
                <select name="interests" value={formData.interests} onChange={handleChange} className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" required>
                  <option value="">Select an area</option>
                  <option value="education">Education Support</option>
                  <option value="food">Food Distribution</option>
                  <option value="events">Event Organization</option>
                  <option value='any'>General Volunteer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Availability</label>
                <textarea name="availability" rows={4} value={formData.availability} onChange={handleChange} className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" required />
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                Register as Volunteer
                <Heart className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="bg-dark-200 rounded-lg shadow-lg p-8 ">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-emerald-500" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400">+92-3330252800</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-emerald-500 mt-6" />
                <div className="ml-4 mt-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">dastigeerifoundation@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Facebook className="h-6 w-6 text-emerald-500 mt-6" />
                <div className="ml-4 mt-6">
                  <a className="text-lg font-medium text-white" href="https://www.facebook.com/dastigeerifoundation/">Dastigeeri Foundation </a>
                </div>
              </div>
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-emerald-500 mt-6" />
                <div className="ml-4 mt-6">
                  <a className="text-lg font-medium text-white" href="https://www.instagram.com/dastigeerifoundation/">@dastigeerifoundation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Registration Successful!</h2>
            <p className="text-gray-600 mt-2">
              Thank you for registering as a volunteer. We will get in touch with you soon.
            </p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:ring focus:ring-emerald-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
