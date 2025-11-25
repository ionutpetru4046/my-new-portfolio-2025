/* eslint-disable @next/next/no-html-link-for-pages */
export default function MobileAppsPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-green-50 to-blue-50 
      dark:from-gray-900 dark:to-gray-800 px-6 md:px-10">
  
        <div className="max-w-5xl mx-auto space-y-16">
  
          {/* Page Header */}
          <header className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mobile App Development
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
              I build high-performance mobile applications for iOS & Android using
              modern frameworks like React Native — delivering fast, reliable, and
              visually stunning digital experiences.
            </p>
          </header>
  
          {/* What You Get Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in delay-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              What You Get
            </h2>
  
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <li>📱 Beautiful and intuitive user interfaces</li>
              <li>⚡ Blazing-fast performance and smooth navigation</li>
              <li>🔌 Full backend integration & API connections</li>
              <li>🧪 Thoroughly tested and quality-assured applications</li>
              <li>📦 Scalable architecture ready for new features</li>
              <li>🌙 Fully responsive layouts and dark mode support</li>
            </ul>
          </div>
  
          {/* How It Works */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              How the Development Process Works
            </h2>
  
            <ol className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg list-decimal list-inside">
              <li>We define your goals, core features, and main requirements.</li>
              <li>User interface and user experience (UI/UX) layout and design.</li>
              <li>Frontend and backend development with clean, scalable code.</li>
              <li>Testing, debugging, performance reviews & security checks.</li>
              <li>App store deployment and support for future updates.</li>
            </ol>
          </div>
  
          {/* Pricing / Information Card */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-8 shadow-xl text-white text-center animate-fade-in delay-300">
            <h2 className="text-3xl font-bold mb-2">
              Development Package
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Tailored development for startups, MVPs or complete applications
            </p>
  
            <p className="text-5xl font-bold mb-6">Starting from €1200</p>
  
            <a
              href="/#contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg 
              hover:bg-gray-200 transition"
            >
              Start Your Mobile App
            </a>
          </div>
  
          {/* Small Call to Action */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto animate-fade-in delay-400">
            If you’re planning a modern mobile app and want expert guidance,
            I’d be happy to help you achieve your vision efficiently.
          </p>
  
        </div>
  
        {/* Fade-in Animations */}
        <style>
          {`
            .animate-fade-in {
              opacity: 0;
              transform: translateY(20px);
              animation: fadeInUp .5s forwards;
            }
  
            .delay-100 { animation-delay: .1s; }
            .delay-200 { animation-delay: .2s; }
            .delay-300 { animation-delay: .3s; }
            .delay-400 { animation-delay: .4s; }
  
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
  