import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section with Logo */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <Image
              src="/tslogo-large (1).jpg"
              alt="Tech Stackers Logo"
              width={400}
              height={200}
              priority
              className="max-w-md w-full h-auto"
            />
          </div>
        </div>

        {/* Android App Showcase */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Featured Android App
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* App Icon Placeholder */}
            <div className="flex justify-center">
              <Image
                src="/ts-symbol-green.jpg"
                alt="Tech Stackers App Icon"
                width={192}
                height={192}
                className="w-48 h-48 rounded-3xl shadow-lg object-cover"
              />
            </div>

            {/* App Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Auto Budget
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Android app to automatically populate a Google Sheet from payment notifications.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-4">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#3d5e7d] text-white px-6 py-4 rounded-lg hover:bg-[#2d4a5f] transition-all shadow-md"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Google Play
                </a>

                <a
                  href="https://github.com/LegendofSlay/auto-budget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#3d5e7d] text-white px-6 py-4 rounded-lg hover:bg-[#4d6e8d] transition-all shadow-md"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
