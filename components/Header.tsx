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

        </div>
      </section>
    </div>
  )
}

export default Header
