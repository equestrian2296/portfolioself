import React from 'react';
import certificateImage from '../assets/certificate.png'; // Replace with your certificate image path

const Certificates = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-white">Hackathons & Certifications</h1>

      {/* Hackathons Section */}
      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 border border-neutral-700 rounded-lg bg-neutral-900">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Devjams 2024</h2>
            <p className="text-neutral-400">
              A hackathon hosted by Google Student Developers Club VIT where I participated in building innovative solutions.
            </p>
          </div>
          <div className="w-64 h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src={certificateImage}  // Replace with a relevant image
              alt="Devjams 2024"
              className="w-full h-full object-contain"  // Prevent image cropping
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
