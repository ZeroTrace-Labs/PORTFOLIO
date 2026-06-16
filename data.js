// Centralized Portfolio Configuration
// Update this file to add certifications, projects, skills, etc.

const portfolioConfig = {
    // Personal Information
    profile: {
        name: 'Morgan Mutugi',
        title: 'Cybersecurity Analyst & Security Professional',
        tagline: 'Protecting digital assets with advanced security solutions',
        email: 'morganke254@gmail.com',
        phone: '+254 707 501 020',
        location: 'Kenya',
        cvUrl: '#', // Update with actual CV URL
        resumeFileUrl: '#' // Update with actual resume file URL
    },

    // GitHub Integration
    github: {
        username: 'ZeroTrace-Labs',
        profileUrl: 'https://github.com/ZeroTrace-Labs',
        apiUrl: 'https://api.github.com/users/ZeroTrace-Labs'
    },

    // Social Links
    social: {
        github: 'https://github.com/ZeroTrace-Labs',
        linkedin: 'https://www.linkedin.com/in/morgan-mutugi',
        instagram: 'https://www.instagram.com/soweto_.badest?igsh=OXA4eXZtZnN1dHNm',
        youtube: 'https://youtube.com/@hackops254?si=-Gizhi3zEPabOAai',
        discord: '#',
        twitter: '#'
    },

    // Certifications
    certifications: [
        {
            id: 1,
            title: 'Certified Ethical Hacker (CEH)',
            issuer: 'EC-Council',
            dateEarned: 'January 2024',
            description: 'Comprehensive ethical hacking and penetration testing certification',
            skills: ['Penetration Testing', 'Vulnerability Assessment', 'Ethical Hacking'],
            verificationUrl: 'https://www.eccouncil.org',
            badgeImage: 'assets/certificates/ceh-badge.png',
            certificateImage: 'assets/certificates/ceh-certificate.png'
        },
        {
            id: 2,
            title: 'CompTIA Security+',
            issuer: 'CompTIA',
            dateEarned: 'June 2023',
            description: 'Security+ certification covering security concepts and implementation',
            skills: ['Security Operations', 'Risk Management', 'Compliance'],
            verificationUrl: 'https://www.comptia.org',
            badgeImage: 'assets/certificates/securityplus-badge.png',
            certificateImage: 'assets/certificates/securityplus-certificate.png'
        },
        {
            id: 3,
            title: 'Google Cybersecurity Professional Certificate',
            issuer: 'Google',
            dateEarned: 'December 2023',
            description: 'Comprehensive program covering cybersecurity fundamentals and tools',
            skills: ['SOC Monitoring', 'Incident Response', 'Network Security'],
            verificationUrl: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
            badgeImage: 'assets/certificates/google-cybersecurity-badge.png',
            certificateImage: 'assets/certificates/google-cybersecurity-certificate.png'
        },
        {
            id: 4,
            title: 'AWS Security Fundamentals',
            issuer: 'AWS',
            dateEarned: 'March 2024',
            description: 'Cloud security best practices and AWS security implementation',
            skills: ['Cloud Security', 'AWS IAM', 'Infrastructure Security'],
            verificationUrl: 'https://aws.amazon.com/certification',
            badgeImage: 'assets/certificates/aws-security-badge.png',
            certificateImage: 'assets/certificates/aws-security-certificate.png'
        }
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: 'Python Network Scanner',
            description: 'Advanced network scanning tool built with Python and Scapy for network reconnaissance and device discovery',
            longDescription: 'Comprehensive network scanner that performs ARP scanning, port discovery, and service enumeration across network segments.',
            technologies: ['Python', 'Scapy', 'Socket', 'Threading'],
            tags: ['networking', 'reconnaissance', 'python'],
            image: 'assets/projects/network-scanner.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/network-scanner',
            demoUrl: '#',
            reportUrl: 'assets/projects/network-scanner-report.pdf',
            status: 'completed'
        },
        {
            id: 2,
            title: 'Linux Log Analyzer',
            description: 'Intelligent log analysis tool for Linux systems with pattern recognition and anomaly detection',
            longDescription: 'Automated log analyzer that detects suspicious activities, failed login attempts, and security incidents from system logs.',
            technologies: ['Bash', 'Python', 'Regex', 'Linux'],
            tags: ['linux', 'siem', 'log-analysis'],
            image: 'assets/projects/log-analyzer.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/log-analyzer',
            demoUrl: '#',
            reportUrl: 'assets/projects/log-analyzer-report.pdf',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Security Automation Toolkit',
            description: 'Collection of scripts for automating common security tasks and vulnerability assessment workflows',
            longDescription: 'Comprehensive toolkit for security automation including vulnerability scanning, patch management, and compliance checking.',
            technologies: ['Python', 'Bash', 'Terraform', 'Ansible'],
            tags: ['automation', 'devops', 'security'],
            image: 'assets/projects/automation-toolkit.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/security-automation',
            demoUrl: '#',
            reportUrl: 'assets/projects/automation-report.pdf',
            status: 'completed'
        },
        {
            id: 4,
            title: 'Vulnerability Assessment Lab',
            description: 'Hands-on lab environment for practicing vulnerability identification and remediation techniques',
            longDescription: 'Virtual lab featuring intentionally vulnerable applications and systems for learning and practicing penetration testing skills.',
            technologies: ['VirtualBox', 'Kali Linux', 'DVWA', 'WebGoat'],
            tags: ['lab', 'vulnerability-assessment', 'practice'],
            image: 'assets/projects/vulnerability-lab.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/vulnerability-lab',
            demoUrl: '#',
            reportUrl: 'assets/projects/vulnerability-assessment-report.pdf',
            status: 'active'
        },
        {
            id: 5,
            title: 'Password Strength Analyzer',
            description: 'Advanced password strength evaluation tool with real-time feedback and recommendations',
            longDescription: 'Tool that analyzes passwords for strength, entropy, and vulnerability to common attack patterns.',
            technologies: ['Python', 'JavaScript', 'Cryptography', 'Regex'],
            tags: ['security', 'password-security', 'tools'],
            image: 'assets/projects/password-analyzer.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/password-analyzer',
            demoUrl: '#',
            reportUrl: 'assets/projects/password-analyzer-report.pdf',
            status: 'completed'
        },
        {
            id: 6,
            title: 'Port Scanner',
            description: 'Fast and efficient port scanner with service identification and banner grabbing capabilities',
            longDescription: 'High-performance port scanner for network reconnaissance with support for UDP/TCP scanning and OS fingerprinting.',
            technologies: ['Python', 'Nmap', 'Socket', 'Threading'],
            tags: ['networking', 'reconnaissance', 'scanning'],
            image: 'assets/projects/port-scanner.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/port-scanner',
            demoUrl: '#',
            reportUrl: 'assets/projects/port-scanner-report.pdf',
            status: 'completed'
        }
    ],

    // Technical Skills
    skills: {
        'Cybersecurity': {
            icon: 'bx bx-shield',
            items: [
                'Vulnerability Assessment',
                'Penetration Testing',
                'Incident Response',
                'Security Auditing',
                'Risk Management',
                'Threat Analysis',
                'Security Hardening'
            ]
        },
        'Networking': {
            icon: 'bx bx-network-chart',
            items: [
                'TCP/IP',
                'DNS',
                'Routing',
                'Switching',
                'Network Architecture',
                'Firewall Configuration',
                'VPN Setup'
            ]
        },
        'Linux': {
            icon: 'bx bxl-linux',
            items: [
                'RHEL',
                'Ubuntu',
                'Bash Scripting',
                'System Administration',
                'Kernel Hardening',
                'User Management',
                'Package Management'
            ]
        },
        'Programming': {
            icon: 'bx bx-code-alt',
            items: [
                'Python',
                'Bash',
                'JavaScript',
                'SQL',
                'Git',
                'Automation Scripting'
            ]
        },
        'Tools & Platforms': {
            icon: 'bx bx-wrench',
            items: [
                'Nmap',
                'Wireshark',
                'Burp Suite',
                'Metasploit',
                'Nikto',
                'Kali Linux',
                'Wazuh',
                'SIEM Tools'
            ]
        },
        'Cloud & DevOps': {
            icon: 'bx bxs-cloud',
            items: [
                'AWS',
                'Cloud Security',
                'Docker',
                'Kubernetes',
                'CI/CD',
                'Infrastructure as Code'
            ]
        }
    },

    // Home Lab
    homeLabs: [
        {
            id: 1,
            title: 'Active Directory Lab',
            description: 'Complete Windows Active Directory environment with domain controllers, user management, and group policies',
            infrastructure: ['Windows Server', 'Active Directory', 'Group Policy', 'DHCP'],
            image: 'assets/labs/active-directory-lab.png',
            reportUrl: 'assets/labs/active-directory-lab-report.pdf'
        },
        {
            id: 2,
            title: 'Kali Linux Penetration Testing Lab',
            description: 'Full penetration testing lab with Kali Linux, vulnerable applications, and target systems',
            infrastructure: ['Kali Linux', 'DVWA', 'WebGoat', 'Metasploitable'],
            image: 'assets/labs/kali-lab.png',
            reportUrl: 'assets/labs/kali-lab-report.pdf'
        },
        {
            id: 3,
            title: 'SIEM & Log Management Lab',
            description: 'Wazuh-based SIEM lab for centralized log collection, analysis, and threat detection',
            infrastructure: ['Wazuh', 'Elasticsearch', 'Kibana', 'Ubuntu Server'],
            image: 'assets/labs/wazuh-lab.png',
            reportUrl: 'assets/labs/wazuh-lab-report.pdf'
        },
        {
            id: 4,
            title: 'Network Analysis Lab',
            description: 'Network monitoring lab with Wireshark, packet analysis, and network forensics tools',
            infrastructure: ['Wireshark', 'tcpdump', 'Ubuntu', 'VirtualBox'],
            image: 'assets/labs/network-analysis-lab.png',
            reportUrl: 'assets/labs/network-analysis-lab-report.pdf'
        }
    ],

    // Blog Articles
    blog: [
        {
            id: 1,
            title: 'Getting Started with Penetration Testing',
            summary: 'A comprehensive guide to starting your penetration testing journey with practical tools and techniques',
            content: 'Full article content here...',
            image: 'assets/blog/penetration-testing-guide.png',
            date: '2024-01-15',
            author: 'Morgan Mutugi',
            readTime: '8 min',
            tags: ['penetration-testing', 'security', 'guide']
        },
        {
            id: 2,
            title: 'Linux Security Hardening Best Practices',
            summary: 'Essential security hardening techniques for Linux systems to prevent common attacks',
            content: 'Full article content here...',
            image: 'assets/blog/linux-hardening.png',
            date: '2024-01-10',
            author: 'Morgan Mutugi',
            readTime: '10 min',
            tags: ['linux', 'security', 'hardening']
        },
        {
            id: 3,
            title: 'Understanding Network Security: TCP/IP Essentials',
            summary: 'Deep dive into TCP/IP protocol suite and its role in network security',
            content: 'Full article content here...',
            image: 'assets/blog/tcp-ip-essentials.png',
            date: '2024-01-05',
            author: 'Morgan Mutugi',
            readTime: '12 min',
            tags: ['networking', 'tcp-ip', 'security']
        }
    ],

    // SEO Keywords
    seoKeywords: [
        'Cybersecurity Analyst',
        'SOC Analyst',
        'Linux Administrator',
        'Penetration Tester',
        'Python Developer',
        'Security Professional',
        'Vulnerability Assessment',
        'Network Security',
        'Cloud Security',
        'Security Engineer'
    ]
};

// Make the config globally available in the browser
window.portfolioConfig = portfolioConfig;

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
