import Link from "next/link"
import { Calculator, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Decimate</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Advanced Decision Support System platform providing comprehensive calculation methods for multi-criteria
              decision making processes.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/AlexanderDev2004/decimate" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/methods" className="text-gray-400 hover:text-white transition-colors">
                  Methods
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Methods */}
          <div>
            <h3 className="text-white font-semibold mb-4">Methods</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">TOPSIS</span>
              </li>
              <li>
                <span className="text-gray-400">WPM</span>
              </li>
              <li>
                <span className="text-gray-400">WSM</span>
              </li>
              <li>
                <span className="text-gray-400">WASPAS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Decimate. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
