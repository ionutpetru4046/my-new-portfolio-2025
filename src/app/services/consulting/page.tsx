/* eslint-disable @next/next/no-html-link-for-pages */
export default function ConsultingPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-indigo-50 
      dark:from-gray-900 dark:to-gray-800 px-6">
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Consulting
          </h1>
  
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Need guidance on building the right solution, choosing the right technologies,
            or planning a scalable product? I provide expert consulting based on years
            of real development experience.
          </p>
  
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Consulting Topics
            </h2>
  
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>🧠 Software architecture and scalability</li>
              <li>💻 Tech stack planning (MERN / NextJS / NodeJS etc.)</li>
              <li>📈 App optimization and performance analysis</li>
              <li>⚙️ API and backend design strategies</li>
            </ul>
          </div>
  
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 
            text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    );
  }
  