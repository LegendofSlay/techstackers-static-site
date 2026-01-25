import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Tech Stackers",
  description: "Privacy Policy for Tech Stackers Android applications and services",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to Tech Stackers. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you use our Android 
                applications and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes device information, operating system, and app usage data.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our app and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Android applications</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our applications</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally 
                lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data 
                to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Legal Rights</h2>
              <p className="mb-3">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
              <p>
                Our applications may contain links to third-party websites or services that are not owned or controlled by 
                Tech Stackers. We have no control over, and assume no responsibility for, the content, privacy policies, 
                or practices of any third-party websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you become aware that a child has provided us with personal data, 
                please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our GitHub repository or 
                via the contact information provided in our Android applications.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
