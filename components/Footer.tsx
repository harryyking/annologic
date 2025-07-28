import React from 'react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 py-16"> {/* Added background color for consistency */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-3/4 bg-gradient-to-t from-blue-600 via-purple-600 to-emerald-400 opacity-60 blur-3xl rounded-sm"
          // Changed gradient direction to 'to-t' (to top) to make it come from the bottom
          // Adjusted width and centered horizontally for better visual effect
        ></div>

        <div className="max-w-6xl mx-auto z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">HELIOGRAF</h3>
              <p className="text-gray-300 text-sm mb-4">
                Redefining crypto finance for Africa with secure, fast, and accessible digital financial services.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Heliograf. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
