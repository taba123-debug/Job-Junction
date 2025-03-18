'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null); // Track which card is clicked
  const [formData, setFormData] = useState({ name: '', email: '', date: '' }); // Form data state
  const [peerNetworkingData, setPeerNetworkingData] = useState({
    skill: '',
    message: '',
  }); // Peer networking form data
  const [skillPassportData, setSkillPassportData] = useState({
    name: '',
    email: '',
    skills: '',
    techStack: '',
    githubLinks: '',
    cv: null,
  }); // Skill Passport form data
  const [skillPassportResult, setSkillPassportResult] = useState(null); // Skill Passport result
  const [hackathonUpdates, setHackathonUpdates] = useState([
    { id: 1, title: 'Hackathon 1', date: '2025-05-15', description: 'Join us for an exciting hackathon!' },
    { id: 2, title: 'Hackathon 2', date: '2025-07-20', description: 'Another great opportunity to showcase your skills!' },
  ]); // Hackathon updates data

  const features = [
    {
      id: 1,
      title: 'HR Mock Interview Practice',
      description: 'Practice coding with real-world examples and improve your skills.',
      image: '/images/HR.jpeg',
    },
    {
      id: 2,
      title: 'Peer Networking',
      description: 'Connect with HR professionals and get insights into the job market.',
      image: '/images/hacthon_peer.jpeg',
    },
    {
      id: 3,
      title: 'Create a Skill Passport',
      description: 'Build your skill profile and showcase it to potential employers.',
      image: '/images/peer.png',
    },
    {
      id: 4,
      title: 'Hackathon Updates',
      description: 'Stay tuned for updates, Updated skill peer group connections!',
      image: '/images/mock.jpg',
    },
  ];

  // Handle card click
  const handleCardClick = (id) => {
    setSelectedFeature(id); // Set the selected feature ID
    setSkillPassportResult(null); // Reset Skill Passport result
  };

  // Handle appointment form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle appointment form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Appointment scheduled successfully!'); // Show success alert
    setSelectedFeature(null); // Close the form
    setFormData({ name: '', email: '', date: '' }); // Reset form data
  };

  // Handle peer networking form input change
  const handlePeerNetworkingChange = (e) => {
    const { name, value } = e.target;
    setPeerNetworkingData({ ...peerNetworkingData, [name]: value });
  };

  // Handle peer networking form submission
  const handlePeerNetworkingSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Connection request sent successfully!'); // Show success alert
    setSelectedFeature(null); // Close the form
    setPeerNetworkingData({ skill: '', message: '' }); // Reset form data
  };

  // Handle Skill Passport form input change
  const handleSkillPassportChange = (e) => {
    const { name, value } = e.target;
    setSkillPassportData({ ...skillPassportData, [name]: value });
  };

  // Handle CV file upload
  const handleCVUpload = (e) => {
    setSkillPassportData({ ...skillPassportData, cv: e.target.files[0] });
  };

  // Handle Skill Passport form submission
  const handleSkillPassportSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simulate Skill Passport generation
    const result = {
      projectsMatched: 3, // Placeholder: Number of projects matched
      skillsToImprove: ['React Advanced Concepts', 'Database Optimization'], // Placeholder: Skills to improve
    };

    setSkillPassportResult(result); // Set Skill Passport result
  };

  return (
    <div className="min-h-screen bg-white text-blue-900 p-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(feature.id)} // Handle card click
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Form Modal (for id: 1) */}
      {selectedFeature === 1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Schedule an Appointment</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="rounded-2xl bg-gray-500 text-white py-2 px-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-2xl bg-blue-900 text-white py-2 px-4"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Peer Networking Modal (for id: 2) */}
      {selectedFeature === 2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Connect with Peers</h2>
            <form onSubmit={handlePeerNetworkingSubmit}>
              <div className="mb-4">
                <label htmlFor="skill" className="block text-sm font-medium text-gray-700">
                  Your Skill
                </label>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  value={peerNetworkingData.skill}
                  onChange={handlePeerNetworkingChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., React, Python, HR Management"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={peerNetworkingData.message}
                  onChange={handlePeerNetworkingChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Write a message to connect with peers..."
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="rounded-2xl bg-gray-500 text-white py-2 px-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-2xl bg-blue-900 text-white py-2 px-4"
                >
                  Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Skill Passport Modal (for id: 3) */}
      {selectedFeature === 3 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-2 mt-5">Create Your Skill Passport</h2>
            {!skillPassportResult ? (
              <form onSubmit={handleSkillPassportSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={skillPassportData.name}
                    onChange={handleSkillPassportChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={skillPassportData.email}
                    onChange={handleSkillPassportChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                    Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={skillPassportData.skills}
                    onChange={handleSkillPassportChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., React, Python, Node.js"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="techStack" className="block text-sm font-medium text-gray-700">
                    Tech Stack Used
                  </label>
                  <input
                    type="text"
                    id="techStack"
                    name="techStack"
                    value={skillPassportData.techStack}
                    onChange={handleSkillPassportChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., MERN Stack, Django, Flask"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="githubLinks" className="block text-sm font-medium text-gray-700">
                    GitHub Project Links
                  </label>
                  <textarea
                    id="githubLinks"
                    name="githubLinks"
                    value={skillPassportData.githubLinks}
                    onChange={handleSkillPassportChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Paste your GitHub project links here..."
                    rows="3"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                    Upload CV
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleCVUpload}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedFeature(null)}
                    className="rounded-2xl bg-gray-500 text-white py-2 px-4"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-2xl bg-blue-900 text-white py-2 px-4"
                  >
                    Generate Skill Passport
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-2">Your Skill Passport</h3>
                <p>
                  <strong>Projects Matched:</strong> {skillPassportResult.projectsMatched}
                </p>
                <p>
                  <strong>Skills to Improve:</strong>{' '}
                  {skillPassportResult.skillsToImprove.join(', ')}
                </p>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="mt-4 rounded-2xl bg-blue-900 text-white py-2 px-4"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hackathon Updates Modal (for id: 4) */}
      {selectedFeature === 4 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Hackathon Updates</h2>
            <div className="space-y-4">
              {hackathonUpdates.map((update) => (
                <div key={update.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{update.title}</h3>
                  <p className="text-sm text-gray-600">{update.date}</p>
                  <p className="text-sm text-gray-600">{update.description}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedFeature(null)}
              className="mt-4 rounded-2xl bg-blue-900 text-white py-2 px-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer className="mt-10" />
    </div>
  );
};

export default Features;