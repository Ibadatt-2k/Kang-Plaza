import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Kang Plaza</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Premium car wash services with exceptional attention to detail. Experience the difference of professional
              automotive care at Kang Plaza.
            </p>
            <p className="text-primary-foreground/60 text-sm">Shine Beyond Clean</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-primary-foreground transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>123 Main Street</div>
                  <div>Downtown Plaza</div>
                  <div>City, State 12345</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">info@kangplaza.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat-Sun: 9AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Kang Plaza. All rights reserved. | Built with care for automotive excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
