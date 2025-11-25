/* eslint-disable @next/next/no-html-link-for-pages */
export default function UiUxDesignPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-pink-50 to-purple-50 
      dark:from-gray-900 dark:to-gray-800 px-6">
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            UI / UX Design
          </h1>
  
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Clean, modern, and user-centered design is at the heart of every project. 
            I create intuitive user experiences backed by research, psychology, and modern UI trends.
          </p>
  
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              My Approach
            </h2>
  
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>🎨 Beautiful & modern user interfaces</li>
              <li>🧠 Design grounded in user behavior & usability principles</li>
              <li>🔄 Iterative and feedback-driven design</li>
              <li>📊 Wireframes, design systems & prototypes</li>
            </ul>
          </div>
  
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 
            text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Start a Design Project
          </a>
        </div>
      </section>
    );
  }
  