import React from 'react';
import certificateImage from '../assets/certificate.png';
import devsocCertificateImage from '../assets/cch.svg'; 

const Certificates = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-white">Hackathons & Certifications</h1>

      {/* Hackathons Section */}
      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 border border-neutral-700 rounded-lg bg-neutral-900">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">DevSoc 25</h2>
            <p className="text-neutral-400">
              Won the Best in Finance & Fintech track at DevSoc 25.
            </p>
          </div>
          <div className="w-64 h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src={devsocCertificateImage}
              alt="DevSoc 25"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 border border-neutral-700 rounded-lg bg-neutral-900">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Devjams 2024</h2>
            <p className="text-neutral-400">
              A hackathon hosted by Google Student Developers Club VIT where I participated in building innovative solutions.
            </p>
          </div>
          <div className="w-64 h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src={certificateImage}
              alt="Devjams 2024"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
