import React from 'react';
import { Monitor, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Harmaz Systems</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional ICT solutions and authorized reseller for enterprise technology brands. We specialize in Dell, IBM, Lenovo, Microsoft, Synology, Acronis, and Linux solutions.
            </p>
            <div className="text-xs text-gray-400">
              <p>✓ Authorized Reseller</p>
              <p>✓ Multi-Platform Specialist</p>
              <p>✓ Replacement Parts Supply</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Dell Servers & Workstations</li>
              <li>IBM Enterprise Solutions</li>
              <li>Lenovo Hardware</li>
              <li>Microsoft Licensing</li>
              <li>Synology NAS Systems</li>
              <li>Acronis Backup Solutions</li>
              <li>Red Hat Enterprise Linux</li>
              <li>All Linux Distributions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+60 19-922 5653</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@harmaz.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  No 2084, Jalan Berlian Kiri<br />
                  Bukit Changgang<br />
                  42700 Banting, Selangor, Malaysia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Harmaz Systems. All rights reserved. | Authorized Reseller for Enterprise Technology Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;