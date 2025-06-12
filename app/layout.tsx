import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sparkles } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialSync - AI-Powered Social Media Scheduling",
  description: "Boost your social media engagement with AI-powered scheduling. Manage all your platforms from one dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}
      >
        {/* Purple Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none"></div>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-purple-600/20 via-purple-800/10 to-transparent blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-pink-600/15 via-purple-700/10 to-transparent blur-3xl pointer-events-none"></div>
        
        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-lg font-medium text-white">AI Startup Website Kit</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 text-gray-300 text-sm">
                <div className="relative group">
                  <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                    Features
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <span className="cursor-pointer hover:text-white transition-colors">Developers</span>
                <div className="relative group">
                  <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                    Company
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <span className="cursor-pointer hover:text-white transition-colors">Blog</span>
                <span className="cursor-pointer hover:text-white transition-colors">Changelog</span>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium transition-colors text-white">
                Join waitlist
              </button>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-800 bg-black">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                {/* Logo */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white">AI Startup Website Kit</span>
                  </div>
                </div>

                {/* Product */}
                <div>
                  <h4 className="text-white font-medium mb-4">Product</h4>
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Features</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Integrations</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Updates</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">FAQ</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Pricing</a>
                  </div>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-white font-medium mb-4">Company</h4>
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">About</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Blog</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Careers</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Manifesto</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Press</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Contact</a>
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-white font-medium mb-4">Resources</h4>
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Examples</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Community</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Guides</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Docs</a>
                  </div>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-white font-medium mb-4">Legal</h4>
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Terms</a>
                    <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Security</a>
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}