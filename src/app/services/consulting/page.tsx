/* eslint-disable @next/next/no-html-link-for-pages */
export default function ConsultingPage() {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-indigo-50 
      dark:from-gray-900 dark:to-gray-800 px-6 md:px-10">
  
        <div className="max-w-5xl mx-auto space-y-16">
  
          {/* Heading Section */}
          <header className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Consulting
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Strategic guidance to help you build scalable products, choose the right stack,
              and avoid expensive development mistakes.
            </p>
          </header>
  
          {/* What You Get */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in delay-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              What I Can Help You With
            </h2>
  
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <li>🧠 Software architecture & scalable system planning</li>
              <li>⚙️ Backend development strategies (Node, Express, NestJS)</li>
              <li>📚 Tech stack decisions (MERN, Next.js, Typescript, etc.)</li>
              <li>🚀 App performance optimization & database queries</li>
              <li>🔐 Authentication, authorization & production readiness</li>
              <li>💼 Startup tech guidance, cost planning & timelines</li>
            </ul>
          </div>
  
          {/* How It Works */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              How the Consultation Works
            </h2>
  
            <ol className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg list-decimal list-inside">
              <li>You explain your project, goals, and challenges.</li>
              <li>I analyze the project and offer solutions & tech direction.</li>
              <li>You receive a structured roadmap you can implement immediately.</li>
            </ol>
          </div>
  
          {/* Pricing Card */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 shadow-xl text-white text-center animate-fade-in delay-300">
            <h2 className="text-3xl font-bold mb-2">Consultation Package</h2>
            <p className="text-lg opacity-90 mb-6">60 minutes – One-to-One, tailored to your project</p>
  
            <p className="text-5xl font-bold mb-6">€50</p>
  
            <a
              href="/#contact"
              className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg 
              hover:bg-gray-200 transition"
            >
              Book a Consultation
            </a>
          </div>
  
          {/* Small CTA */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto animate-fade-in delay-400">
            Not sure if consulting is right for you?
            <br />Send me a message — I’ll help you figure out exactly what you need.
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
  