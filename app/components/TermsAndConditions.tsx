import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white py-12 px-4">
      <div className="w-full max-w-3xl bg-white p-10">
        {/* Title */}
        <h1 className="text-center font-gendy text-[22px] text-black mb-1">
          Celedom Terms And Conditions
        </h1>
        <p className="text-center font-liber text-[14px] text-gray-800 mb-6">
          Welcome to Celedom
        </p>

        {/* Main Content */}
        <div className="font-liber text-[14px] leading-[1.55] text-gray-700 space-y-6">

          {/* Paragraph 1 */}
          <p>
            We’re excited you’re here! Celedom is all about connecting amazing 
            service providers with celebrators for unforgettable events and 
            celebrations. These Terms and Conditions make sure everything runs 
            smoothly and safely for everyone.
          </p>

          {/* DEFINITIONS */}
          <div>
            <p className="font-semibold text-[15px]">Definitions & Basics</p>

            <ul className="mt-3 space-y-2 list-disc ml-6">
              <li>
                <strong>“Celedom”</strong> refers to all Celedom platforms including the 
                website, mobile app and services.
              </li>
              <li>
                <strong>“Users”</strong> refers to individuals accessing Celedom.
              </li>
              <li>
                <strong>“Celebrators”</strong> refers to users seeking services for 
                birthdays, weddings, parties, or anniversary events.
              </li>
              <li>
                <strong>“Service Providers”</strong> refers to individuals or businesses 
                that offer services for events such as planners, caterers, musicians, DJs, etc.
              </li>
              <li>
                <strong>“The Platform”</strong> refers to all Celedom systems where users 
                connect and interact.
              </li>
            </ul>
          </div>

          {/* USER AGREEMENT (numbered) */}
          <div>
            <p className="font-semibold text-[15px]">1. User Agreement: Let’s Get This Party Started</p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>You agree to provide accurate and up-to-date registration information.</li>
              <li>You must keep your login credentials safe.</li>
              <li>
                Celedom prohibits illegal, harmful, harassing or abusive content or activities 
                on the platform. Violations may result in account removal.
              </li>
              <li>
                Celedom may send you platform notifications such as newsletters, blogs, 
                onboarding messages and security alerts.
              </li>
            </ul>
          </div>

          {/* SERVICE PROVIDER RESPONSIBILITIES */}
          <div>
            <p className="font-semibold text-[15px]">2. Service Provider Responsibilities</p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>
                Provide accurate and up-to-date information about your company, services 
                and availability.
              </li>
              <li>Honor your commitments to users.</li>
              <li>Ensure your services follow applicable regulations and laws.</li>
              <li>
                Provide documents that verify the authenticity of your business and be 
                available for periodic verification.
              </li>
            </ul>
          </div>

          {/* INTELLECTUAL PROPERTY */}
          <div>
            <p className="font-semibold text-[15px]">
              3. Respecting Happy Vibes: Intellectual Property
            </p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>Celedom maintains all rights and ownership of the platform.</li>
              <li>
                Users grant Celedom a non-exclusive license to upload, store, or display 
                creative content for platform-related promotional purposes.
              </li>
            </ul>
          </div>

          {/* DISCLAIMER */}
          <div>
            <p className="font-semibold text-[15px]">Disclaimer of Warranties</p>
            <p className="mt-2">
              Celedom is provided “as is.” We do not guarantee the platform will be 
              uninterrupted, secure, or error-free.
            </p>
          </div>

          {/* LIABILITY */}
          <div>
            <p className="font-semibold text-[15px]">
              Limitation of Liability: We have Got Your Back
            </p>
            <p className="mt-2">
              Celedom is not responsible for damages resulting from your use of the 
              platform. You are responsible for any content you upload.
            </p>
          </div>

          {/* ACCOUNT TERMINATION */}
          <div>
            <p className="font-semibold text-[15px]">
              Account Termination
            </p>

            <ul className="mt-2 space-y-2 list-decimal ml-6">
              <li>
                Celedom may suspend or terminate your account when necessary.
              </li>
              <li>
                When terminated, your right to use the platform stops.
              </li>
            </ul>
          </div>

          {/* CHANGES */}
          <div>
            <p className="font-semibold text-[15px]">Changes to Terms</p>
            <p className="mt-2">
              Celedom may update these Terms at any time. Updates will be posted on 
              the website.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="font-semibold text-[15px]">Contact Us</p>
            <p className="mt-2">
              If you have questions or comments, contact us at 
              <span className="underline"> support@celedom.com</span>.
              You will be notified when Terms and Conditions change.
            </p>
          </div>

          {/* ACCEPTANCE */}
          <div>
            <p className="font-semibold text-[15px]">Acceptance</p>
            <p className="mt-2">
              Clicking “I Agree” during registration or login means you accept these 
              Terms and Conditions.
            </p>
          </div>

          <p className="font-semibold mt-6">Thanks for choosing Celedom! 🎉</p>
        </div>

        {/* BUTTONS */}
        <div className="w-full flex justify-center gap-6 mt-10">
          <button className="px-6 py-2 border border-gray-400 rounded-md font-liber text-[14px]">
            Cancel
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-md font-liber text-[14px]">
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
