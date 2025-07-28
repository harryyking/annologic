import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-center bg-black">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute top-1/4 left-0 w-1/2 h-3/4 bg-gradient-to-br from-emerald-500/30 via-blue-600/20 to-purple-600/30 blur-3xl rounded-full"></div>
        {/* Secondary gradient */}
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-orange-500/20 via-pink-500/15 to-emerald-400/25 blur-2xl rounded-full"></div>
        {/* Accent gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-full"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="text-white font-bold text-2xl tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">HELIOGRAF</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm text-gray-300 font-medium">
          <a href="#" className="hover:text-emerald-400 transition-all duration-300 hover:scale-105">
            Platform
          </a>
          <a href="#" className="hover:text-emerald-400 transition-all duration-300 hover:scale-105">
            Markets
          </a>
          <a href="#" className="hover:text-emerald-400 transition-all duration-300 hover:scale-105">
            Learn
          </a>
          <a href="#" className="hover:text-emerald-400 transition-all duration-300 hover:scale-105">
            Support
          </a>
        </div>
        <Button
          variant="outline"
          className="relative z-10 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 bg-transparent"
        >
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 flex-grow flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Redefining Crypto Finance for Africa
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            <span className="block">Unlock Africa's</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Crypto Future
            </span>
          </h1>

          <p className="lg:text-xl text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Join millions of Africans building wealth through cryptocurrency. Trade, invest, and earn with the
            continent's most trusted digital asset platform, designed for African markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Start Trading Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View Markets
            </Button>
          </div>


          {/* Trusted by section */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider font-medium">
              Trusted by Leading Organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="h-12 w-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
              {/* Visa logo */}
              <svg className="h-8 w-auto opacity-70 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.4 12.8c0 .8-.6 1.4-1.4 1.4H17v-2.8h4c.8 0 1.4.6 1.4 1.4zM15.6 12.8c0 .8-.6 1.4-1.4 1.4h-2.8v-2.8h4.2c.8 0 1.4.6 1.4 1.4zM10 12.8c0 .8-.6 1.4-1.4 1.4H6.2v-2.8h3.8c.8 0 1.4.6 1.4 1.4zM4.8 12.8c0 .8-.6 1.4-1.4 1.4H2v-2.8h2.8c.8 0 1.4.6 1.4 1.4z"/>
              <path d="M22.4 12.8c0 .8-.6 1.4-1.4 1.4H17v-2.8h4c.8 0 1.4.6 1.4 1.4zM15.6 12.8c0 .8-.6 1.4-1.4 1.4h-2.8v-2.8h4.2c.8 0 1.4.6 1.4 1.4zM10 12.8c0 .8-.6 1.4-1.4 1.4H6.2v-2.8h3.8c.8 0 1.4.6 1.4 1.4zM4.8 12.8c0 .8-.6 1.4-1.4 1.4H2v-2.8h2.8c.8 0 1.4.6 1.4 1.4z"/>
              <path d="M11.999 0C5.372 0 0 5.372 0 12s5.372 12 11.999 12C18.627 24 24 18.628 24 12S18.627 0 11.999 0zM12 22.4c-5.73 0-10.4-4.67-10.4-10.4S6.27 1.6 12 1.6s10.4 4.67 10.4 10.4-4.67 10.4-10.4 10.4z"/>
            </svg>

              </div>
              <div className="h-12 w-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
              
              <svg className="h-8 w-auto opacity-70 text-white" viewBox="0 0 24 24" fill="currentColor">
                {/* Mastercard Logo */}
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              <circle cx="12" cy="12" r="8"/>
              <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>

              </div>
              <div className="h-12 w-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                {/* Google */}
                  <svg className="h-8 w-auto opacity-70 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V11.69h4.295c-.17 1.02-.75 2.06-1.78 2.72-.94.61-2.22.99-3.41.99-3.23 0-5.85-2.62-5.85-5.85s2.62-5.85 5.85-5.85c1.74 0 3.01.72 3.93 1.62l1.06-1.06c-1.35-1.26-3.13-2.06-4.99-2.06-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5c4.02 0 6.64-2.86 7.05-6.83H12.24z"/>
            </svg>

              </div>
              <div className="h-12 w-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                {/* Binance Logo (simplified) */}
            <svg className="h-8 w-auto opacity-70 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L0 12l12 12 12-12L12 0zm0 19.8L4.2 12 12 4.2 19.8 12 12 19.8z"/>
              <path d="M12 4.2L4.2 12 12 19.8 19.8 12 12 4.2zM12 7.8L7.8 12 12 16.2 16.2 12 12 7.8z"/>
            </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
