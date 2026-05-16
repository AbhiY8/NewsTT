import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Last updated: May 16, 2026
            </p>
            <p>
              At <strong>NewsTillToday</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NewsTillToday and how we use it.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cookies and Web Beacons</h2>
            <p>
              Like any other website, NewsTillToday uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
