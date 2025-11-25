/* eslint-disable @next/next/no-html-link-for-pages */
export default function WebDevelopmentPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-purple-50 
      dark:from-gray-900 dark:to-gray-800 px-6">
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Web Development
          </h1>
  
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I build modern, scalable, and high-performance web applications using
            the latest technologies including React, Next.js, Node.js, MongoDB, and more.
            Whether you need a landing page, dashboard, or full-stack platform,
            I can help bring your idea to life.
          </p>
  
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              What I Deliver
            </h2>
  
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>⚡ High-performance front-end development</li>
              <li>🧩 Full-stack applications with modern APIs</li>
              <li>📱 Fully responsive & mobile-friendly</li>
              <li>🚀 SEO-ready, fast-loading websites</li>
            </ul>
          </div>
  
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 
            text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Start a Web Project
          </a>
        </div>
      </section>
    );
  }
  