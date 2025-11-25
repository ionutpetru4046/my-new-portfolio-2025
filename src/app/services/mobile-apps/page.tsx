/* eslint-disable @next/next/no-html-link-for-pages */
export default function MobileAppsPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-green-50 to-blue-50 
      dark:from-gray-900 dark:to-gray-800 px-6">
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Mobile App Development
          </h1>
  
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I build fast, intuitive and high-quality mobile applications for both iOS
            and Android using modern frameworks like React Native.
          </p>
  
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              What You Get
            </h2>
  
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>📱 Stunning user interfaces</li>
              <li>⚡ Fast and smooth performance</li>
              <li>🧪 Fully tested and reliable apps</li>
              <li>🚀 Custom API integration & backend</li>
            </ul>
          </div>
  
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 
            text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Start a Mobile Project
          </a>
        </div>
      </section>
    );
  }
  