import { Target, Diamond } from 'lucide-react'
import React from 'react'

const SubHeader = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Blurred gradient background */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute top-1/4 left-0 w-1/2 h-3/4 bg-gradient-to-br from-emerald-500/30 via-blue-600/20 to-purple-600/30 blur-3xl rounded-full"></div>
        {/* Secondary gradient */}
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-orange-500/20 via-pink-500/15 to-emerald-400/25 blur-2xl rounded-full"></div>
        {/* Accent gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Accomplish
            <br />
            Anything in Crypto
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our platform provides all the tools you need to succeed in the cryptocurrency ecosystem across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center p-2">
          {/* Left Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Diamond className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Secure Trading</h3>
                <p className="text-gray-400 text-sm">Advanced security protocols protect your investments</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Diamond className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Local Currency Support</h3>
                <p className="text-gray-400 text-sm">Trade with your local African currencies</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Diamond className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Round-the-clock customer assistance</p>
              </div>
            </div>
          </div>

          {/* Center Logo with Larger Circles */}
          <div className="flex justify-center relative">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center relative z-10">
              <Target className="w-16 h-16 text-slate-900" />
            </div>
            {/* Larger Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white rounded-full opacity-10"></div>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Diamond className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Mobile First</h3>
                <p className="text-gray-400 text-sm">Optimized for mobile trading on the go</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Diamond className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Low Fees</h3>
                <p className="text-gray-400 text-sm">Competitive rates for all transactions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Diamond className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Educational Resources</h3>
                <p className="text-gray-400 text-sm">Learn crypto trading with our guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHeader
