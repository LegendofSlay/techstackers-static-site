import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Tech Stackers",
  description: "Terms of Service for Tech Stackers Android applications and services",
};

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Tech Stackers Android applications and services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-3">
                Permission is granted to temporarily download one copy of Tech Stackers applications for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and 
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained in our applications</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="mb-3">
                When you create an account with us, you must provide information that is accurate, complete, and current 
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination 
                of your account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Safeguarding the password that you use to access the services</li>
                <li>Any activities or actions under your account</li>
                <li>Notifying us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Uses</h2>
              <p className="mb-3">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use 
                our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate Tech Stackers, a Tech Stackers employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p>
                The services and their original content, features, and functionality are and will remain the exclusive 
                property of Tech Stackers and its licensors. The services are protected by copyright, trademark, and other 
                laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in 
                connection with any product or service without the prior written consent of Tech Stackers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer</h2>
              <p>
                The materials within Tech Stackers applications are provided on an 'as is' basis. Tech Stackers makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitations of Liability</h2>
              <p>
                In no event shall Tech Stackers or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on Tech Stackers applications, even if Tech Stackers or a Tech Stackers authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Tech Stackers and its licensee and licensors, and their 
                employees, contractors, agents, officers, and directors, from and against any and all claims, damages, 
                obligations, losses, liabilities, costs or debt, and expenses arising from your use of and access to the 
                services, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the services immediately, without prior notice 
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
                not limited to a breach of the Terms. Upon termination, your right to use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the applicable jurisdiction, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision of these 
                Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
                a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through our GitHub repository or 
                via the contact information provided in our Android applications.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
