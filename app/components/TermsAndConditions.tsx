import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white py-12 px-4">
      <div className="w-full max-w-3xl bg-white p-10">
        
        {/* Title (centered) */}
        <h1 className="text-center font-gendy text-[22px] text-black mb-1">
          Celedom Terms And Conditions
        </h1>

        {/* Subtitle (centered) */}
        <p className="text-center font-liber text-[14px] text-gray-800 mb-6">
          Welcome to Celedom
        </p>

        {/* Main Content (left-aligned) */}
        <div className="font-liber text-[14px] leading-[1.55] text-gray-700 space-y-6 text-left">

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
                <strong>“Celedom”</strong> is our fabulous platform, including the website, mobile apps, and services.
              </li>
              <li><strong>“User”</strong> refers to both service providers and celebrants using celedom</li>
              <li>
                <strong>“Celebrants”</strong> is the host of events suchs as birthdays, wedding parties or anniversary etc
              </li>
              <li>
                <strong>“Service Provider”</strong> is the awesome business or individual offering services for events and celebrations, such as event planners, caterers, musicians, DJ, event crew etc.
              </li>
              
            </ul>
          </div>

          {/* USER AGREEMENT (numbered) */}
          <div>
            <p className="font-semibold text-[15px]">
               User Agreement: Let’s Get This Party Started
            </p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>By using Celedom, you agree to follow these terms and conditions</li>
              <li>You promise to provide accurate, complete, and up-to-date information during the registration process</li>
              {/* <li>
                Celedom prohibits illegal, harmful, harassing, or abusive content. 
                Violations may lead to account removal.
              </li>
              <li>
                Celedom may send platform notifications such as newsletters, onboarding 
                messages and security alerts.
              </li> */}
            </ul>
          </div>
           <div>
            <p className="font-semibold text-[15px]">User Responsibilities</p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>Keep your account login credentials safe and secure.</li>
              <li>Use Celedom for good, not otherwise</li>
              <li>We do not accommodate any form of harrasment, abuse, or intimidation or other internet conduct that go against the community </li>
              <li>
                Ensure your events and services comply with all applicable laws and regulations of the community.
               
              </li>
              <li>You own the content you post on celedom</li>
              <li>Whereas you can unsubscribe from non-transactional mails such as welcome Emails, newsletter, blogs(promotional), you cannot unsubscribe from transactional mails such as OTP mails, security mails and transactional mails</li>
            </ul>
          </div>

          {/* SERVICE PROVIDER RESPONSIBILITIES */}
          <div>
            <p className="font-semibold text-[15px]"> Service Provider Responsibilities</p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>Provide accurate, complete and up-to-date information about your company, services and representatives</li>
              <li>Ensure your services comply with all applicable laws and regulations</li>
              <li>Respond promptly to booking requests and communicate clearly with celebrants</li>
              <li>
                Celedom will requests documents that verify the authenticity of your establishment and will also conduct periodic verification of your operations as a company
              </li>
            </ul>
          </div>

          {/* INTELLECTUAL PROPERTY */}
          <div>
            <p className="font-semibold text-[15px]">
             Intellectual Property: We Love Creativity!
            </p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>Celedom maintains all rights, title, and interest in and to the platform.</li>
              <li>
                Users grant Celedom a non-exclusive license to use, reproduce, and display their content for promotional purposes.
              </li>
            </ul>
          </div>

          {/* DISCLAIMER */}
              
          <div>
            <p className="font-semibold text-[15px]">
             Disclaimer of Warranties:
            </p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>Celedom disclaims all warranties, express or implied.</li>
              <li>
                We do not promise the platform will be uninterrupted, timely, secure or error-free
              </li>
            </ul>
          </div>

          {/* LIABILITY */}
               {/* INTELLECTUAL PROPERTY */}
          <div>
            <p className="font-semibold text-[15px]">
             Limitation of liability: We&apos;ve Got Your Back
            </p>

            <ul className="mt-3 space-y-2 list-decimal ml-6">
              <li>Celedom shall not be liable for damages arising from use of the platform</li>
              <li>
                Our liability is limited to the amount of fees paid by you(if applicable).
              </li>
            </ul>
          </div>

          {/* ACCOUNT TERMINATION */}
          <div>
            <p className="font-semibold text-[15px]">Account Termination</p>

            <ul className="mt-2 space-y-2 list-decimal ml-6">
              <li>Celedom may suspend or terminate accounts when necessary.</li>
              <li>Upon termination, platform access ends immediately.</li>
            </ul>
          </div>

          {/* CHANGES */}
          <div>
            <p className="font-semibold text-[15px]">Changes to Terms</p>
            <p className="mt-2">
              Celedom may update these Terms anytime. Updates will appear on the website.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="font-semibold text-[15px]">Contact Us</p>
            <p className="mt-2">
              For questions, contact us at 
              <span className="underline"> support@celedom.com</span>.
            </p>
          </div>

          {/* ACCEPTANCE */}
          <div>
            <p className="font-semibold text-[15px]">Acceptance</p>
            <p className="mt-2">
              Clicking “I Agree” means you accept these Terms and Conditions.
            </p>
          </div>

          <p className="font-semibold mt-6">Thanks for choosing Celedom! 🎉</p>
        </div>

        {/* Bottom Buttons */}
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
