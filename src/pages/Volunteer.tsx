import { Calendar, Users, Heart, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const opportunities = [
  {
    title: 'Education Support',
    description: 'Help children with their studies and homework',
    commitment: '2-3 hours per week',
    location: 'Various Schools',
    icon: Users
  },
  {
    title: 'Food Distribution',
    description: 'Assist in packaging and distributing food to families in need',
    commitment: '4 hours per week',
    location: 'Community Centers',
    icon: Heart
  },
  {
    title: 'Event Organization',
    description: 'Help organize and manage charity events',
    commitment: 'Flexible',
    location: 'Various Locations',
    icon: Calendar
  }
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Volunteer With Us
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Join our community of volunteers and make a difference
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Current Opportunities</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-dark-200 rounded-lg shadow-lg p-6">
                <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                  <opportunity.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{opportunity.title}</h3>
                <p className="mt-2 text-gray-400">{opportunity.description}</p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>Commitment: {opportunity.commitment}</p>
                  <p>Location: {opportunity.location}</p>
                </div>
                <button className="mt-4 flex items-center text-emerald-400 hover:text-emerald-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-dark-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Volunteer Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-300">
                  Areas of Interest
                </label>
                <select
                  name="interests"
                  id="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select an area</option>
                  <option value="education">Education Support</option>
                  <option value="food">Food Distribution</option>
                  <option value="events">Event Organization</option>
                </select>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-300">
                  Availability
                </label>
                <textarea
                  name="availability"
                  id="availability"
                  rows={4}
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Please describe your availability (days/times)"
                  className="mt-1 block w-full rounded-md border-dark-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Register as Volunteer
                <Heart className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}