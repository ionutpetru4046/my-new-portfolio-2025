/* eslint-disable @next/next/no-html-link-for-pages */
export default function UiUxDesignPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-pink-50 to-purple-50 
      dark:from-gray-900 dark:to-gray-800 px-6 md:px-10">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white
            tracking-tight animate-fade-in"
          >
            UI / UX Design
          </h1>
  
          {/* Intro Paragraph */}
          <p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 
            animate-fade-in delay-100 max-w-3xl"
          >
            Clean, modern, and user-centered design is at the heart of every project.
            I create intuitive interfaces backed by design principles, psychology,
            user testing, and modern UI trends.
          </p>
  
          {/* Core Process */}
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-10 
            animate-fade-in delay-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              My Approach
            </h2>
  
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>🎨 Beautiful, modern & consistent interfaces</li>
              <li>🧠 Design grounded in user behavior & usability psychology</li>
              <li>🔄 Deeply iterative & feedback-driven workflow</li>
              <li>📊 Wireframes, design systems, and prototypes</li>
            </ul>
          </div>
  
          {/* Additional Section */}
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12
            animate-fade-in delay-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Key UX Deliverables
            </h2>
  
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300">
              <span>User Personas</span>
              <span>User Journey Maps</span>
              <span>Clickable Prototypes</span>
              <span>Design Systems</span>
              <span>Wireframes</span>
              <span>UX Audits</span>
            </div>
          </div>
  
          {/* CTA Button */}
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 
            text-white px-10 py-4 rounded-lg font-medium text-lg
            hover:opacity-90 transition animate-fade-in delay-400"
          >
            Start a Design Project
          </a>
        </div>
  
        {/* Animations */}
        <style>
          {`
            .animate-fade-in {
              opacity: 0;
              transform: translateY(20px);
              animation: fadeInUp .5s forwards;
            }
            .animate-fade-in.delay-100 { animation-delay: .1s; }
            .animate-fade-in.delay-200 { animation-delay: .2s; }
            .animate-fade-in.delay-300 { animation-delay: .3s; }
            .animate-fade-in.delay-400 { animation-delay: .4s; }
  
            @keyframes fadeInUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>
    );
  }
  