// Centralized Portfolio Configuration
const portfolioConfig = {
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
            id: 11,
            title: 'AttackGuard SIEM & SOAR Automation Framework',
            description: 'A cybersecurity monitoring and response platform that collects endpoint telemetry, correlates incidents, maps activity to MITRE ATT&CK, enriches threats, and supports AI-assisted triage and automated containment in authorized lab environments.',
            image: 'assets/projects/attackguard-dashboard.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Attack-Guard-V1',
            technologies: ['Python', 'Flask', 'SQLite', 'SIEM', 'SOAR', 'MITRE ATT&CK', 'Kali Linux']
        },
        {
            id: 1,
            title: 'SIEM Security Monitoring Lab',
            description: 'Security monitoring lab focused on SIEM, log analysis, threat detection, and incident investigation using centralized telemetry and correlation techniques.',
            image: '',
            githubUrl: '',
            technologies: ['SIEM', 'Log Analysis', 'Threat Detection', 'Incident Investigation']
        },
        {
            id: 2,
            title: 'Enterprise Network Design & Security Lab',
            description: 'Enterprise-grade network design and security lab covering TCP/IP, VLANs, routing, switching, firewalls, and network hardening best practices.',
            image: '',
            githubUrl: '',
            technologies: ['TCP/IP', 'VLANs', 'Routing', 'Switching', 'Firewalls', 'Network Security']
        },
        {
            id: 3,
            title: 'Vulnerability Assessment & Remediation Platform',
            description: 'Platform for vulnerability scanning, risk assessment, remediation planning, and professional security reporting for identified weaknesses.',
            image: '',
            githubUrl: '',
            technologies: ['Vulnerability Scanning', 'Risk Assessment', 'Remediation', 'Reporting']
        },
        {
            id: 4,
            title: 'Incident Response & Digital Forensics Lab',
            description: 'Incident handling lab that emphasizes alert investigation, evidence analysis, timeline reconstruction, and professional incident reporting.',
            image: '',
            githubUrl: '',
            technologies: ['Alert Investigation', 'Evidence Analysis', 'Timelines', 'Incident Reports']
        },
        {
            id: 5,
            title: 'Secure Web Application',
            description: 'Secure application development project covering Python, JavaScript, databases, authentication, secure coding practices, and OWASP principles.',
            image: '',
            githubUrl: '',
            technologies: ['Python', 'JavaScript', 'Databases', 'Authentication', 'Secure Coding', 'OWASP']
        },
        {
            id: 6,
            title: 'Automated Software Testing Framework',
            description: 'Framework for designing test cases, conducting unit and integration testing, and automating quality assurance workflows for software reliability.',
            image: '',
            githubUrl: '',
            technologies: ['Test Cases', 'Unit Testing', 'Integration Testing', 'Automation', 'Quality Assurance']
        },
        {
            id: 7,
            title: 'Cybersecurity Automation Toolkit',
            description: 'Python-based automation toolkit for scripting, API integration, log processing, and repetitive cybersecurity tasks to improve operational efficiency.',
            image: '',
            githubUrl: '',
            technologies: ['Python', 'Scripting', 'APIs', 'Log Processing', 'Automation']
        },
        {
            id: 8,
            title: 'Identity & Access Management System',
            description: 'IAM-focused system design covering authentication, authorization, RBAC, MFA concepts, and access control principles for secure environments.',
            image: '',
            githubUrl: '',
            technologies: ['Authentication', 'Authorization', 'RBAC', 'MFA', 'Access Control']
        },
        {
            id: 9,
            title: 'System Hardening & Security Baseline Lab',
            description: 'Lab project for Linux and Windows system hardening, secure configuration, patching, and baseline security control implementation.',
            image: '',
            githubUrl: '',
            technologies: ['Linux Administration', 'Windows Administration', 'Configuration', 'Patching', 'Security Controls']
        },
        {
            id: 10,
            title: 'AI-Powered Cybersecurity Threat Analyzer',
            description: 'Advanced analytics project combining Python, machine learning, anomaly detection, and cybersecurity intelligence for threat review and pattern analysis.',
            image: '',
            githubUrl: '',
            technologies: ['Python', 'Machine Learning', 'Anomaly Detection', 'Cybersecurity Analytics']
        }
    ],

    skills: {
        Cybersecurity: {
            icon: 'bx bx-shield',
            items: ['Vulnerability Assessment', 'Penetration Testing', 'Incident Response', 'Security Auditing', 'Risk Management', 'Operating Systems', 'Data Storage', 'Cryptography', 'Access Control', 'Intrusion Detection', 'Security Risk Assessment']
        },
        'Security Testing': {
            icon: 'bx bx-lock-alt',
            items: ['Input Validation Testing', 'Error Handling Testing', 'Authentication Testing', 'Authorization Testing', 'Negative Testing', 'Vulnerability-Oriented Test Thinking', 'Test Execution']
        },
        'Quality Assurance': {
            icon: 'bx bx-check-shield',
            items: ['Software Quality Assurance', 'Verification & Validation', 'Test Documentation', 'Test Coverage', 'Risk-Based Testing']
        },
        'Software Testing': {
            icon: 'bx bx-test-tube',
            items: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing']
        },
        'Software Test Design': {
            icon: 'bx bx-edit-alt',
            items: ['Test Case Design', 'Test Scenarios', 'Test Data', 'Equivalence Partitioning', 'Boundary Value Analysis', 'Decision Tables']
        },
        'Defect Management': {
            icon: 'bx bx-bug',
            items: ['Bug Identification', 'Bug Reporting', 'Defect Documentation', 'Test Result Analysis', 'Debugging Concepts', 'Defect Tracking']
        },
        Programming: {
            icon: 'bx bx-code-alt',
            items: ['Python', 'C#', 'C++', 'HTML', 'JavaScript', 'CSS', 'SQL', 'Bash Scripting', 'Shell Scripting']
        },
        Linux: {
            icon: 'bx bxl-linux',
            items: ['RHEL', 'Ubuntu', 'Bash Scripting', 'System Administration', 'Automation']
        },
        Networking: {
            icon: 'bx bx-network-chart',
            items: ['TCP/IP', 'DNS', 'Routing', 'Switching', 'Network Troubleshooting', 'Client-Server Architecture', 'Network Security', 'Firewalls']
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
            image: '',
            githubUrl: '',
            infrastructure: ['Kali Linux', 'DVWA', 'Metasploitable', 'VirtualBox']
        },
        {
            id: 2,
            title: 'Linux Log Analysis Lab',
            description: 'A host-level lab for reviewing syslog, auth.log, and audit events to catch suspicious actions.',
            image: '',
            githubUrl: '',
            infrastructure: ['Ubuntu Server', 'Bash', 'Syslog', 'Auditd']
        },
        {
            id: 3,
            title: 'Wazuh SIEM Lab',
            description: 'A centralized monitoring lab with Wazuh for log collection, alerts, and IOC validation.',
            image: '',
            githubUrl: '',
            infrastructure: ['Wazuh', 'Elasticsearch', 'Kibana', 'Ubuntu Server']
        },
        {
            id: 4,
            title: 'Network Analysis Lab',
            description: 'Packet capture and traffic review using Wireshark and tcpdump to identify suspicious flows.',
            image: '',
            githubUrl: '',
            infrastructure: ['Wireshark', 'tcpdump', 'Ubuntu', 'VirtualBox']
        }
    ],

    blog: [
        {
            id: 1,
            title: 'Understanding DNS Through Packet Analysis',
            excerpt: 'A practical walkthrough of DNS lookups, packet behavior, and what suspicious DNS activity looks like.',
            image: '',
            githubUrl: '',
            date: '2024-05-01'
        },
        {
            id: 2,
            title: 'Linux Security Hardening Notes',
            excerpt: 'Steps I used to harden Ubuntu and reduce attack surface for common administrative services.',
            image: '',
            githubUrl: '',
            date: '2024-04-18'
        },
        {
            id: 3,
            title: 'Building a Home SOC Lab: Wazuh, Suricata & OpenVAS',
            excerpt: 'A hands-on SOC lab on Apple Silicon using Docker-hosted Wazuh, Suricata network monitoring on an Ubuntu gateway, and Greenbone OpenVAS vulnerability scans across isolated UTM virtual machines. Includes attack detection and alert investigation workflows.',
            image: 'assets/blog/home-soc-wazuh-dashboard.jpg',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Home-SOC-Lab',
            date: '2024-04-05'
        },
        {
            id: 4,
            title: 'Nmap Beginner Guide',
            excerpt: 'A concise guide to the Nmap commands I rely on for network reconnaissance and service discovery.',
            image: '',
            githubUrl: '',
            date: '2024-03-22'
        },
        {
            id: 5,
            title: 'Wireshark Network Traffic Analysis',
            excerpt: 'A hands-on protocol analysis project using Wireshark to capture and inspect RADIUS, HTTP authentication, DNS, Telnet, SSH, and HTTPS/TLS traffic, exploring what packet captures reveal about authentication and encryption.',
            image: 'assets/blog/wireshark-traffic-analysis.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/WireShark-Traffic-Analyzer',
            date: '2024-03-08'
        }
    ]
};

window.portfolioConfig = portfolioConfig;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
