import React from 'react';
import { Shield, Server, Wifi, Cloud, CheckCircle, ArrowRight, Settings, Lock, Monitor, Zap, Code, Database, Layers, Package, HardDrive, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'CCTV Installation & Surveillance',
      description: 'Comprehensive security camera systems with advanced monitoring capabilities using enterprise-grade equipment.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'HD/4K Security Cameras',
        'Synology Surveillance Station',
        'Night Vision Technology',
        'Remote Access & Monitoring',
        '24/7 Recording Systems',
        'Motion Detection Alerts',
        'Mobile App Integration',
        'Professional Installation'
      ],
      benefits: [
        'Enhanced security and peace of mind',
        'Real-time monitoring from anywhere',
        'Deterrent against theft and vandalism',
        'Evidence collection capabilities'
      ]
    },
    {
      icon: Server,
      title: 'Server Setup & Configuration',
      description: 'Complete server infrastructure design, installation, and optimization using Dell PowerEdge, IBM Power Systems, and Lenovo ThinkSystem servers.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Dell PowerEdge & IBM Power Systems',
        'Lenovo ThinkSystem Servers',
        'Windows Server & Linux Installation',
        'VMware vSphere Deployment',
        'Microsoft Active Directory',
        'Red Hat Enterprise Linux',
        'All Linux Distributions',
        'Clustering & High Availability'
      ],
      benefits: [
        'Improved system reliability and uptime',
        'Enhanced data security and compliance',
        'Better performance and scalability',
        'Reduced operational costs'
      ]
    },
    {
      icon: Wifi,
      title: 'Network Solutions & Infrastructure',
      description: 'Comprehensive networking solutions using enterprise-grade Dell, IBM, and Lenovo networking equipment.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Dell & Lenovo Network Hardware',
        'Enterprise WiFi Solutions',
        'Network Security Implementation',
        'Firewall & VPN Configuration',
        'Load Balancing & Clustering',
        'Network Monitoring & Management',
        'Bandwidth Optimization',
        'Hybrid Cloud Connectivity'
      ],
      benefits: [
        'Reliable and fast connectivity',
        'Secure data transmission',
        'Improved productivity and collaboration',
        'Scalable network infrastructure'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Server Rental & Management',
      description: 'Scalable cloud infrastructure with guaranteed uptime, supporting Windows, Linux, and hybrid environments.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Windows & Linux Cloud Servers',
        'VMware Cloud Infrastructure',
        'Microsoft Azure Integration',
        'Red Hat OpenShift',
        'All Linux Distribution Support',
        'Acronis Backup Integration',
        'Load Balancing & Auto-scaling',
        '24/7 Expert Support'
      ],
      benefits: [
        'Reduced IT infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced data security and backup',
        'Global accessibility and performance'
      ]
    }
  ];

  const resellerProducts = [
    {
      icon: HardDrive,
      brand: 'Dell',
      title: 'Enterprise Hardware',
      description: 'PowerEdge servers, Precision workstations, storage arrays, and networking equipment',
      products: ['PowerEdge Servers', 'Precision Workstations', 'PowerVault Storage', 'Networking Switches', 'OptiPlex Desktops'],
      category: 'Hardware',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Dell-Logo.png'
    },
    {
      icon: Cpu,
      brand: 'IBM',
      title: 'Power Systems & Storage',
      description: 'Enterprise servers, storage solutions, and AI-ready infrastructure',
      products: ['Power Systems', 'Storage Solutions', 'LinuxONE', 'Cloud Pak Solutions', 'Watson AI'],
      category: 'Enterprise',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png'
    },
    {
      icon: Server,
      brand: 'Lenovo',
      title: 'ThinkSystem Solutions',
      description: 'High-performance servers, workstations, and data center infrastructure',
      products: ['ThinkSystem Servers', 'ThinkStation Workstations', 'Storage Arrays', 'Networking Equipment', 'ThinkPad Laptops'],
      category: 'Hardware',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Lenovo-Logo.png'
    },
    {
      icon: Code,
      brand: 'Microsoft',
      title: 'Software & Licensing',
      description: 'Complete Microsoft ecosystem including Windows Server, Office 365, and Azure',
      products: ['Windows Server', 'Office 365', 'Azure Services', 'SQL Server', 'Exchange Server'],
      category: 'Software',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png'
    },
    {
      icon: Database,
      brand: 'Synology',
      title: 'NAS & Storage',
      description: 'Network-attached storage, backup solutions, and surveillance systems',
      products: ['DiskStation NAS', 'RackStation', 'Surveillance Station', 'Backup Solutions', 'Cloud Sync'],
      category: 'Storage',
      logo: 'https://global.synologydownload.com/download/Marketing/Brand/Synology_logo_black.png'
    },
    {
      icon: Shield,
      brand: 'Acronis',
      title: 'Backup & Security',
      description: 'Comprehensive cyber protection, backup, and disaster recovery solutions',
      products: ['Cyber Backup', 'Cyber Protect', 'Disaster Recovery', 'Cyber Files', 'True Image'],
      category: 'Security',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Acronis-Logo.png'
    },
    {
      icon: Layers,
      brand: 'Red Hat',
      title: 'Enterprise Linux',
      description: 'Enterprise Linux subscriptions, OpenShift, and hybrid cloud solutions',
      products: ['RHEL Subscriptions', 'OpenShift', 'Ansible', 'Satellite', 'JBoss Middleware'],
      category: 'Software',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Red-Hat-Logo.png'
    },
    {
      icon: Package,
      brand: 'Linux',
      title: 'All Distributions',
      description: 'Support for all Linux distributions including Ubuntu, CentOS, Debian, SUSE',
      products: ['Ubuntu Support', 'CentOS/Rocky Linux', 'Debian Systems', 'SUSE Enterprise', 'Custom Distributions'],
      category: 'Software',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg'
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: 'Open Source Solutions',
      description: 'Linux server deployment, Apache/Nginx web servers, Docker containerization, and Kubernetes orchestration.'
    },
    {
      icon: Database,
      title: 'VMware Virtualization',
      description: 'vSphere infrastructure, ESXi host configuration, vCenter management, and virtual machine optimization.'
    },
    {
      icon: Layers,
      title: 'Microsoft Solutions',
      description: 'Windows Server, Active Directory, Exchange Server, SQL Server, and Office 365 implementation.'
    },
    {
      icon: Package,
      title: 'Clustering & HA',
      description: 'High availability clusters, failover configurations, load balancing, and disaster recovery planning.'
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic IT planning, technology assessments, and digital transformation guidance.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Security audits, compliance assessments, and comprehensive protection solutions using Acronis.'
    },
    {
      icon: Monitor,
      title: 'System Monitoring',
      description: '24/7 infrastructure monitoring, proactive maintenance, and performance optimization.'
    },
    {
      icon: Zap,
      title: 'Replacement Parts',
      description: 'Out-of-warranty equipment parts supply, rare components sourcing, and legacy system support.'
    }
  ];

  const technologies = [
    {
      category: 'Operating Systems',
      items: ['Windows Server 2019/2022', 'Ubuntu Server LTS', 'Red Hat Enterprise Linux', 'CentOS/Rocky Linux', 'VMware ESXi']
    },
    {
      category: 'Virtualization',
      items: ['VMware vSphere', 'Microsoft Hyper-V', 'Docker Containers', 'Kubernetes', 'Red Hat OpenShift']
    },
    {
      category: 'Databases',
      items: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis Cache']
    },
    {
      category: 'Enterprise Software',
      items: ['Microsoft Active Directory', 'Exchange Server', 'SharePoint', 'Office 365', 'Acronis Backup']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our ICT Services & Products
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions and genuine enterprise products from leading brands. As authorized resellers for Dell, IBM, Lenovo, Microsoft, Synology, Acronis, Red Hat, and Linux distributions.
            </p>
          </div>
        </div>
      </section>

      {/* Reseller Products Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authorized Reseller Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are authorized resellers for leading technology brands, providing genuine products with manufacturer warranty, competitive pricing, and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {resellerProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-16 w-20 flex items-center justify-center">
                    <img 
                      src={product.logo} 
                      alt={`${product.brand} logo`}
                      className="max-h-8 max-w-16 object-contain"
                      onError={(e) => {
                        // Fallback to icon if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const iconDiv = target.nextElementSibling as HTMLElement;
                        if (iconDiv) iconDiv.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center">
                      <product.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Authorized
                  </span>
                </div>
                <div className="text-sm font-bold text-blue-600 mb-1">{product.brand}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="space-y-1">
                  {product.products.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                  {product.products.length > 3 && (
                    <div className="text-xs text-gray-500 mt-2">
                      +{product.products.length - 3} more products
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Reseller Benefits */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Harmaz Systems as Your Technology Partner?</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                As an authorized reseller and certified partner, we provide more than just products – we deliver complete solutions with ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Genuine Products</div>
                <div className="text-sm text-blue-200">100% authentic with full manufacturer warranty and support</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <ArrowRight className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Competitive Pricing</div>
                <div className="text-sm text-blue-200">Best prices with volume discounts and flexible payment terms</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <Settings className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Expert Installation</div>
                <div className="text-sm text-blue-200">Professional setup, configuration, and integration services</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <Monitor className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Parts Supply</div>
                <div className="text-sm text-blue-200">Replacement parts for out-of-warranty and rare equipment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
            <p className="text-gray-600">We specialize in a comprehensive range of enterprise technologies and platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">{tech.category}</h3>
                <ul className="space-y-1">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional ICT services using enterprise-grade products from our authorized vendor partners.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of complementary services to support your complete ICT infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and customer satisfaction across all technology platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Consultation</h3>
              <p className="text-gray-600">We evaluate your current infrastructure and provide customized recommendations based on your business needs and technology preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Procurement & Implementation</h3>
              <p className="text-gray-600">Professional procurement of genuine products and expert installation, configuration of your chosen systems from our vendor partners.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support & Maintenance</h3>
              <p className="text-gray-600">Ongoing maintenance, monitoring, and 24/7 technical support services for all platforms and products we implement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your ICT needs. We'll help you choose the right technology stack and products for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;