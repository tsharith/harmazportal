import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Wifi, Cloud, ArrowRight, CheckCircle, Users, Clock, Award, Code, Database, Layers, Package, HardDrive, Cpu } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'CCTV Installation',
      description: 'Professional security camera systems for complete surveillance coverage.',
      features: ['HD/4K cameras', 'Remote monitoring', '24/7 recording', 'Mobile access']
    },
    {
      icon: Server,
      title: 'Server Setup',
      description: 'Complete server infrastructure setup and configuration services.',
      features: ['Hardware installation', 'OS configuration', 'Security setup', 'Performance optimization']
    },
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'Comprehensive networking solutions for businesses of all sizes.',
      features: ['LAN/WAN setup', 'WiFi networks', 'Security protocols', 'Network monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Server Rental',
      description: 'Scalable cloud infrastructure with guaranteed uptime and support.',
      features: ['99.9% uptime', 'Scalable resources', '24/7 support', 'Data backup']
    }
  ];

  const resellerProducts = [
    {
      icon: HardDrive,
      brand: 'Dell',
      title: 'Servers & Workstations',
      description: 'PowerEdge servers, Precision workstations, and enterprise storage solutions',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Dell-Logo.png'
    },
    {
      icon: Cpu,
      brand: 'IBM',
      title: 'Enterprise Solutions',
      description: 'Power Systems, Storage, and enterprise-grade infrastructure solutions',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png'
    },
    {
      icon: Server,
      brand: 'Lenovo',
      title: 'ThinkSystem & ThinkStation',
      description: 'High-performance servers, workstations, and data center solutions',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Lenovo-Logo.png'
    },
    {
      icon: Code,
      brand: 'Microsoft',
      title: 'Software & Licensing',
      description: 'Windows Server, Office 365, Azure, SQL Server, and enterprise licensing',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png'
    },
    {
      icon: Database,
      brand: 'Synology',
      title: 'NAS & Storage',
      description: 'Network-attached storage, backup solutions, and data management systems',
      logo: 'https://global.synologydownload.com/download/Marketing/Brand/Synology_logo_black.png'
    },
    {
      icon: Shield,
      brand: 'Acronis',
      title: 'Backup & Security',
      description: 'Cyber backup, disaster recovery, and cybersecurity solutions',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Acronis-Logo.png'
    },
    {
      icon: Layers,
      brand: 'Red Hat',
      title: 'Enterprise Linux',
      description: 'RHEL subscriptions, OpenShift, and enterprise open source solutions',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Red-Hat-Logo.png'
    },
    {
      icon: Package,
      brand: 'Linux',
      title: 'All Distributions',
      description: 'Support for all Linux distributions including Ubuntu, CentOS, Debian, SUSE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg'
    }
  ];

  const customers = [
    {
      name: 'ANQAS Certification',
      logo: '/anqas.png',
      description: 'Quality assurance and certification services'
    },
    {
      name: 'King Henry VIII College Malaysia',
      logo: '/images.jpg',
      description: 'International education institution'
    },
    {
      name: 'Infrastructure University Kuala Lumpur',
      logo: '/infrastructure-university-kl-logo-png_seeklogo-285166.png',
      description: 'Leading private university in Malaysia'
    },
    {
      name: 'Kuala Lumpur Convention Centre',
      logo: '/klcc.png',
      description: 'Premier convention and exhibition center'
    },
    {
      name: 'Kuala Lumpur University of Science and Technology',
      logo: '/KLUST email signature.png',
      description: 'Science and technology university'
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Open Source Solutions',
      description: 'Linux distributions, Apache, MySQL, PostgreSQL, Docker, Kubernetes'
    },
    {
      icon: Database,
      title: 'VMware Virtualization',
      description: 'vSphere, ESXi, vCenter, virtual machine deployment and management'
    },
    {
      icon: Layers,
      title: 'Microsoft Products',
      description: 'Windows Server, Active Directory, Exchange, SQL Server, Office 365'
    },
    {
      icon: Server,
      title: 'Clustering Solutions',
      description: 'High availability clusters, load balancing, failover configurations'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Professional
                  <span className="block text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ICT Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                  Transform your business with comprehensive technology solutions and enterprise-grade products from leading brands.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Linux Server Infrastructure and Open Source Solutions"
                  className="relative rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to serve prestigious educational institutions, certification bodies, and major organizations across Malaysia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mb-16">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="h-20 flex items-center justify-center mb-6">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                        fallback.textContent = customer.name;
                      }
                    }}
                  />
                  <div className="hidden items-center justify-center text-center text-sm font-medium text-slate-600">
                    {customer.name}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-tight">{customer.name}</h3>
                  <p className="text-xs text-slate-500">{customer.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Join Our Growing List of Satisfied Customers</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                From universities and colleges to convention centers and certification bodies, we provide reliable ICT solutions that organizations trust.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Educational Institutions
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Government Organizations
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Corporate Enterprises
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Convention Centers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Authorized Technology Partners
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are authorized resellers for leading technology brands, providing genuine products with manufacturer warranty and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {resellerProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100 h-16 w-20 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <img 
                      src={product.logo} 
                      alt={`${product.brand} logo`}
                      className="max-h-8 max-w-16 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const iconDiv = target.nextElementSibling as HTMLElement;
                        if (iconDiv) iconDiv.style.display = 'block';
                      }}
                    />
                    <div className="hidden">
                      <product.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Authorized
                  </div>
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{product.brand}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>

          {/* Reseller Benefits */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Choose Harmaz Systems?</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                As an authorized reseller and certified partner, we provide more than just products – we deliver complete solutions with ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <CheckCircle className="h-10 w-10 mx-auto mb-4 text-green-400" />
                <div className="font-semibold mb-2 text-lg">Genuine Products</div>
                <div className="text-sm text-slate-300">100% authentic with full manufacturer warranty</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <Award className="h-10 w-10 mx-auto mb-4 text-blue-400" />
                <div className="font-semibold mb-2 text-lg">Competitive Pricing</div>
                <div className="text-sm text-slate-300">Best prices with volume discounts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <Users className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <div className="font-semibold mb-2 text-lg">Expert Support</div>
                <div className="text-sm text-slate-300">Professional installation & configuration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <Clock className="h-10 w-10 mx-auto mb-4 text-cyan-400" />
                <div className="font-semibold mb-2 text-lg">Replacement Parts</div>
                <div className="text-sm text-slate-300">Out-of-warranty equipment & rare parts supply</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Technical Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in a comprehensive range of technologies and platforms, ensuring we can meet all your ICT requirements with proven expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white"
              >
                <div className="bg-blue-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our ICT Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Why Choose Harmaz Systems?
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                With years of experience in the ICT industry, we deliver solutions that are not just technically sound but also strategically aligned with your business goals.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Team</h3>
                    <p className="text-slate-600 leading-relaxed">Certified professionals with extensive experience across multiple technology platforms and vendor solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Clock className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">24/7 Support</h3>
                    <p className="text-slate-600 leading-relaxed">Round-the-clock technical support and maintenance for all platforms, products, and technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Award className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Authorized Reseller</h3>
                    <p className="text-slate-600 leading-relaxed">Official reseller status with leading brands ensures genuine products, competitive pricing, and manufacturer support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Linux Server Administration and Open Source Technologies"
                  className="relative rounded-3xl shadow-2xl border border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and discover how our ICT solutions and genuine enterprise products can drive your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;