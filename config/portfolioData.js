// Centralized Portfolio Configuration
const portfolioConfig = {
    profile: {
        name: 'Morgan Mutugi',
        title: 'Cybersecurity Analyst & Linux Administrator',
        tagline: 'Hands-on security operations, Linux hardening, and automation for practical risk reduction.',
        email: 'morganke254@gmail.com',
        phone: '+254 707 501 020',
        location: 'Kenya',
        cvUrl: '#',
        resumeFileUrl: '#'
    },

    github: {
        username: 'ZeroTrace-Labs',
        profileUrl: 'https://github.com/ZeroTrace-Labs',
        apiUrl: 'https://api.github.com/users/ZeroTrace-Labs'
    },

    social: {
        github: 'https://github.com/ZeroTrace-Labs',
        linkedin: 'https://www.linkedin.com/in/morgan-mutugi',
        youtube: 'https://youtube.com/@hackops254?si=-Gizhi3zEPabOAai'
    },

    certifications: [
        {
            id: 1,
            title: 'CompTIA PenTest+',
            issuer: 'Total Seminars / Coursera',
            issueDate: 'June 2026',
            description: 'Specialized training covering the complete penetration testing lifecycle, including reconnaissance, vulnerability assessment, network and web application testing, post-exploitation, and professional security reporting.',
            skillsLearned: ['Penetration Testing, Vulnerability Assessment, Reconnaissance & Enumeration, Network Security Testing, Web Application Security, Cloud Security Assessment, Social Engineering Concepts, Post-Exploitation Techniques, Security Reporting, Risk Analysis.'],
            image: 'assets/certificates/CompTIA PenTest+.jpeg',
            verificationLink: 'https://www.coursera.org/account/accomplishments/specialization/VFTRHURXPQZ4'
        },
        {
            id: 2,
            title: 'CompTIA Security+',
            issuer: 'Total Seminars / Coursera',
            issueDate: 'June 2026',
            description: 'Specialized cybersecurity training covering risk management, network security, cryptography, identity management, cloud security, incident response, digital forensics, and practical security assessment using industry-standard tools.',
            skillsLearned: ['Security Fundamentals, Network Security, Identity & Access Management, Cryptography, Security Operations, Endpoint & Cloud Security, Digital forensics, Risk Management, Security Assessment & Testing, Incident Response.'],
            image: 'assets/certificates/CompTIA Security+.jpeg',
            verificationLink: 'https://www.coursera.org/account/accomplishments/specialization/N24ML5WA1APM'
        },
        {
            id: 3,
            title: 'Linux Bash Scripting & Shell Programming',
            issuer: 'EDUCBA / Coursera',
            issueDate: 'June 2026',
            description: 'Completed a hands-on specialization in Linux Bash scripting and shell programming, gaining expertise in command-line operations, automation, AWK-based text processing, troubleshooting, and script development. Applied these skills to real-world projects involving system administration, DevOps, and IT automation to streamline workflows and enhance productivity.',
            skillsLearned: ['Linux Command Line, Bash Scripting, Shell  Programming, Task Automation, AWK Text Processing  File and Directory Management, Troubleshooting & Debugging, DevOps and System, Administration Fundamentals'],
            image: 'assets/certificates/Linux Bash Scripting & Shell Programming.jpeg',
            verificationLink: 'https://www.coursera.org/account/accomplishments/specialization/WFZMFY48KKLB'
        },
        {
            id: 4,
            title: 'CompTIA Network+',

            issuer: 'Infosec Institute / Coursera',
            issueDate: 'June 2026',
            description: 'Validated expertise in networking fundamentals, including TCP/IP, routing and switching, subnetting, wireless networking, network security, and troubleshooting. Gained hands-on skills to support, maintain, and optimize enterprise network environments.',
            skillsLearned: ['Network Configuration and Management, TCP/IP and Network Protocols, Network Troubleshooting, Routing and Switching, Network Security, IP Addressing and Subnetting, Wireless Networking (WLAN), Network Infrastructure and Services'],
            image: 'assets/certificates/CompTIA Network+.jpeg',
            verificationLink: 'https://www.coursera.org/account/accomplishments/records/PSPPFP1E1QC1'
        }
    ],

    projects: [
        {
            id: 1,
            title: 'Python Network Scanner',
            description: 'A Python tool that discovers hosts, opens ports, and summarizes service details across local networks.',
            details: 'Built to make reconnaissance more repeatable and clear, this scanner combines socket scans with service labels so results are easier to act on.',
            technologies: ['Python', 'Socket', 'Threading', 'Nmap'],
            screenshot: 'assets/projects/network-scanner.png',
            githubLink: 'https://github.com/ZeroTrace-Labs/network-scanner',
            demoLink: '#',
            reportLink: '#',
            lessonsLearned: 'Improved understanding of network protocols, scan timing, and how to present findings without noise.'
        },
        {
            id: 2,
            title: 'Linux Log Analyzer',
            description: 'A script that parses Linux auth and syslog files to surface suspicious login activity and service failures.',
            details: 'Designed for lab and small-scale host analysis, the tool highlights repeated failures, unexpected processes, and common attack patterns.',
            technologies: ['Python', 'Bash', 'Regex', 'Linux'],
            screenshot: 'assets/projects/log-analyzer.png',
            githubLink: 'https://github.com/ZeroTrace-Labs/log-analyzer',
            demoLink: '#',
            reportLink: '#',
            lessonsLearned: 'Sharpened log parsing skills and learned how to reduce false positives in automated detection rules.'
        },
        {
            id: 3,
            title: 'Security Automation Toolkit',
            description: 'A small set of scripts for routine security checks, like scanning hosts, validating configs, and exporting findings.',
            details: 'The toolkit helps turn common security tasks into repeatable automation so lab work is easier to reproduce and document.',
            technologies: ['Python', 'Bash', 'Ansible'],
            screenshot: 'assets/projects/automation-toolkit.png',
            githubLink: 'https://github.com/ZeroTrace-Labs/security-automation',
            demoLink: '#',
            reportLink: '#',
            lessonsLearned: 'Built a practical workflow for automating repetitive checks and learned to keep scripts small and clear.'
        },
        {
            id: 4,
            title: 'Vulnerability Assessment Lab',
            description: 'A lab environment for testing vulnerable hosts, tracking issues, and practicing remediation steps.',
            details: 'Focused on turning a vulnerable lab build into a structured assessment with evidence, recommendations, and follow-up validation.',
            technologies: ['Kali Linux', 'DVWA', 'WebGoat', 'VirtualBox'],
            screenshot: 'assets/projects/vulnerability-lab.png',
            githubLink: 'https://github.com/ZeroTrace-Labs/vulnerability-lab',
            demoLink: '#',
            reportLink: '#',
            lessonsLearned: 'Learned how to organize findings so they are actionable for operations teams, not just technical reports.'
        },
        {
            id: 5,
            title: 'Password Strength Analyzer',
            description: 'A tool to evaluate password strength against common patterns and entropy rules.',
            details: 'The analyzer helps identify weak passwords, explain why they are weak, and suggest practical improvements.',
            technologies: ['Python', 'Regex', 'Security'],
            screenshot: 'assets/projects/password-analyzer.png',
            githubLink: 'https://github.com/ZeroTrace-Labs/password-analyzer',
            demoLink: '#',
            reportLink: '#',
            lessonsLearned: 'Improved understanding of password weaknesses and how to communicate them in straightforward terms.'
        },
        {
            id: 6,
            title: 'Port Scanner',
            description: 'A fast scanner that identifies open ports and service banners while minimizing noise from common false positives.',
            details: 'Built to make port scan output more readable and to help prioritize likely service exposures quickly.',
            technologies: ['Python', 'Socket', 'Threading', 'Nmap'],
            screenshot: 'assets/projects/port-scanner.png',
            githubLink: 'https://github.com/ZeroTrace-Labs/port-scanner',
            demoLink: '#',
            reportLink: '#',
            lessonsLearned: 'Learned how scanning behavior changes with timeouts, protocols, and service banner collection.'
        }
    ],

    skills: {
        Cybersecurity: {
            icon: 'bx bx-shield',
            items: ['Vulnerability Assessment', 'Penetration Testing', 'Incident Response', 'Security Auditing', 'Risk Management']
        },
        Networking: {
            icon: 'bx bx-network-chart',
            items: ['TCP/IP', 'DNS', 'Routing', 'Switching', 'Network Troubleshooting']
        },
        Linux: {
            icon: 'bx bxl-linux',
            items: ['RHEL', 'Ubuntu', 'Bash Scripting', 'System Administration', 'Automation']
        },
        Programming: {
            icon: 'bx bx-code-alt',
            items: ['Python', 'Bash', 'JavaScript', 'SQL', 'Git']
        },
        Tools: {
            icon: 'bx bx-wrench',
            items: ['Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'Nikto', 'Git']
        }
    },

    homeLabs: [
        {
            id: 1,
            title: 'Kali Linux Penetration Lab',
            description: 'A lab build focused on reconnaissance, exploitation, and building evidence for findings.',
            infrastructure: ['Kali Linux', 'DVWA', 'Metasploitable', 'VirtualBox'],
            image: 'assets/labs/kali-lab.png',
            reportUrl: '#'
        },
        {
            id: 2,
            title: 'Linux Log Analysis Lab',
            description: 'A host-level lab for reviewing syslog, auth.log, and audit events to catch suspicious actions.',
            infrastructure: ['Ubuntu Server', 'Bash', 'Syslog', 'Auditd'],
            image: 'assets/labs/log-analysis-lab.png',
            reportUrl: '#'
        },
        {
            id: 3,
            title: 'Wazuh SIEM Lab',
            description: 'A centralized monitoring lab with Wazuh for log collection, alerts, and IOC validation.',
            infrastructure: ['Wazuh', 'Elasticsearch', 'Kibana', 'Ubuntu Server'],
            image: 'assets/labs/wazuh-lab.png',
            reportUrl: '#'
        },
        {
            id: 4,
            title: 'Network Analysis Lab',
            description: 'Packet capture and traffic review using Wireshark and tcpdump to identify suspicious flows.',
            infrastructure: ['Wireshark', 'tcpdump', 'Ubuntu', 'VirtualBox'],
            image: 'assets/labs/network-analysis-lab.png',
            reportUrl: '#'
        }
    ],

    blog: [
        {
            id: 1,
            title: 'Understanding DNS Through Packet Analysis',
            excerpt: 'A practical walkthrough of DNS lookups, packet behavior, and what suspicious DNS activity looks like.',
            thumbnail: 'assets/blog/dns-explained.png',
            slug: '#',
            date: '2024-05-01'
        },
        {
            id: 2,
            title: 'Linux Security Hardening Notes',
            excerpt: 'Steps I used to harden Ubuntu and reduce attack surface for common administrative services.',
            thumbnail: 'assets/blog/linux-hardening.png',
            slug: '#',
            date: '2024-04-18'
        },
        {
            id: 3,
            title: 'Building a Home SOC Lab',
            excerpt: 'How I combined Wazuh, Ubuntu, and Kali to create a lab for detection and response testing.',
            thumbnail: 'assets/blog/home-soc-lab.png',
            slug: '#',
            date: '2024-04-05'
        },
        {
            id: 4,
            title: 'Nmap Beginner Guide',
            excerpt: 'A concise guide to the Nmap commands I rely on for network reconnaissance and service discovery.',
            thumbnail: 'assets/blog/nmap-guide.png',
            slug: '#',
            date: '2024-03-22'
        },
        {
            id: 5,
            title: 'Wireshark Traffic Analysis',
            excerpt: 'What I look for in packet captures when I investigate suspicious traffic in a lab environment.',
            thumbnail: 'assets/blog/wireshark-analysis.png',
            slug: '#',
            date: '2024-03-08'
        }
    ],

    seoKeywords: [
        'Cybersecurity Analyst',
        'SOC Analyst',
        'Linux Administrator',
        'Penetration Tester',
        'Python Developer',
        'Security Operations Center',
        'Incident Response',
        'Security Automation',
        'Network Security'
    ]
};

window.portfolioConfig = portfolioConfig;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
