function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 selection:bg-orange-500/30 selection:text-orange-200 font-sans">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] pointer-events-none"></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="mb-8 flex flex-col items-center">
          <img src="https://neutralino.js.org/img/logo.png" alt="Neutralino" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2">
            Neutralino
            <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">
              JS
            </span>
          </h1>
          <p className="text-gray-400 text-lg font-medium">
            Powered by Vite + Tailwind CSS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold mb-2">Lightweight SDK</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Neutralino doesn't bundle Chromium or Node.js. By using the OS's
              native web browser library, it offers a tiny, portable alternative
              to Electron.
            </p>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold mb-2">Native API & IPC</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Execute native operations via secure WebSockets. Extend your app
              with any programming language using the powerful extensions IPC.
            </p>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold mb-2">Portable & Fast</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If you can build a website, you can build a desktop app. Use
              Tailwind with React, Vue, or Svelte to create native experiences
              effortlessly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
