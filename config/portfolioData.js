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
            title: 'OpsMemory AI Incident Response Agent',
            description: 'AI-assisted incident response application that combines current incident symptoms with relevant historical postmortems to support contextual triage and remediation planning. The repository includes a dashboard, persistent incident-memory workflows, and synthetic demo scenarios.',
            image: 'assets/projects/opsmemory-incident-response.png',
            imageAlt: 'OpsMemory incident response dashboard showing incident triage and recalled historical incident context',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Incidence-Response-AI-agent',
            technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Hindsight Memory', 'Groq API']
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
            description: 'Linux auditing project that evaluates firewall status, services, SSH configuration, critical file permissions, rootkit indicators, and CIS-inspired baseline controls. It produces scored text and JSON reports with findings and hardening recommendations.',
            image: 'assets/labs/linux-hardening-audit-output.png',
            imageAlt: 'Example console output from the Linux hardening audit tool showing security checks and a compliance score',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Linux-Hardening-Audit-Tool',
            technologies: ['Python 3', 'Linux Security', 'CIS-Inspired Baselines', 'Configuration Auditing', 'JSON Reporting']
        },
        {
            id: 10,
            title: 'CyberShield Phishing & Message Threat Analyzer',
            description: 'A Flask web application that combines rule-based indicators with Google Gemini analysis to assess suspicious message text for phishing, credential requests, social engineering, and risky links. It returns a risk score, detected indicators, and safety guidance; results are advisory and should be verified before action.',
            image: 'assets/projects/cybershield-threat-analyzer.png',
            imageAlt: 'CyberShield interface for submitting a suspicious message for phishing and threat analysis',
            githubUrl: 'https://github.com/ZeroTrace-Labs/AI-powered-CyberSecurity-Threat-Analyzer',
            technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Google Gemini API', 'Rule-Based Risk Scoring']
        }
    ],

    skills: {
        Cybersecurity: {
            icon: 'bx bx-shield',
            description: 'Security principles, risk management and threat protection.',
            items: ['Security Risk Assessment', 'Threat Analysis', 'Security Controls', 'Access Control', 'Cryptography', 'Incident Response', 'Security Auditing', 'Data Protection']
        },
        'Security Testing': {
            icon: 'bx bx-lock-alt',
            description: 'Identifying weaknesses and evaluating system security.',
            items: ['Vulnerability Assessment', 'Web Application Security Testing', 'Network Security Testing', 'Security Test Planning', 'Test Case Design', 'Security Findings Reporting', 'Remediation Verification']
        },
        Networking: {
            icon: 'bx bx-network-chart',
            description: 'Network infrastructure, communication protocols and troubleshooting.',
            items: ['TCP/IP Networking', 'IP Addressing & Subnetting', 'DNS & DHCP', 'Network Protocols', 'Client-Server Architecture', 'Firewall Fundamentals', 'Intrusion Detection', 'Network Troubleshooting']
        },
        'Systems Administration': {
            icon: 'bx bxl-linux',
            description: 'Operating systems, system configuration and access management.',
            items: ['Linux Fundamentals', 'Windows Administration', 'Operating System Security', 'User & Permission Management', 'File System Management', 'System Troubleshooting', 'System Hardening Fundamentals']
        },
        'Programming & Computer Science': {
            icon: 'bx bx-code-alt',
            description: 'Programming logic, software development and problem-solving.',
            items: ['Python Programming', 'Object-Oriented Programming', 'Algorithms & Data Structures', 'Debugging', 'Software Development Fundamentals', 'SQL Fundamentals']
        },
        'Software Testing & Defect Management': {
            icon: 'bx bx-test-tube',
            description: 'Software quality assurance, test execution and defect documentation.',
            items: ['Functional Testing', 'Unit & Integration Testing', 'Regression Testing', 'Test Case Development', 'Defect Identification', 'Bug Reporting', 'Test Documentation']
        }
    },

    homeLabs: [
        {
            id: 1,
            title: 'Network Traffic Analysis with Wireshark',
            category: 'Network Security',
            priority: 'High',
            status: 'Planned',
            description: 'Analyse a sample packet capture to understand network communications and investigate potentially suspicious traffic.',
            methodology: [
                'Inspect TCP, DNS, HTTP, and TLS packets and conversations.',
                'Review DNS queries and relevant connection patterns.',
                'Identify anomalies supported by captured evidence.'
            ],
            evidence: ['Packet analysis screenshots', 'Relevant packet details', 'Investigation notes'],
            outcome: 'Record what the evidence establishes, what remains uncertain, and the recommended next action.',
            image: 'assets/blog/wireshark-traffic-analysis.png',
            githubUrl: 'https://github.com/ZeroTrace-Labs/WireShark-Traffic-Analyzer',
            reportUrl: '',
            infrastructure: ['Wireshark', 'Sample PCAP files']
        },
        {
            id: 2,
            title: 'Vulnerability Assessment',
            category: 'Vulnerability Assessment',
            status: 'Planned',
            description: 'Assess a deliberately vulnerable local machine and document security weaknesses with supporting evidence.',
            methodology: [
                'Define the assessment scope and objectives.',
                'Discover services and scan available ports.',
                'Identify potential vulnerabilities and assign evidence-based risk ratings.'
            ],
            evidence: ['Scope and objectives', 'Scan results', 'Finding evidence and risk ratings'],
            outcome: 'Document prioritized remediation recommendations and any validation needed.',
            image: '',
            githubUrl: '',
            reportUrl: '',
            infrastructure: ['Nmap', 'Local virtual machine', 'OpenVAS / Greenbone (optional)']
        },
        {
            id: 3,
            title: 'Linux Security & System Hardening',
            category: 'System Security',
            status: 'Repository',
            description: 'Repository for a dependency-free Python audit tool that checks Linux firewall, services, SSH, file permissions, rootkit indicators, and CIS-inspired baseline settings.',
            methodology: [
                'Run the audit tool against a Linux system; some checks require root privileges.',
                'Review pass, warning, and skipped checks with their evidence and recommendations.',
                'Use the generated text or JSON report to guide manual follow-up.'
            ],
            evidence: ['Python audit tool', 'Example console report', 'Structured JSON output'],
            outcome: 'Treat the score as a checklist result, not proof of full compliance or absence of vulnerabilities; verify findings in the target environment.',
            image: 'assets/labs/linux-hardening-audit-output.png',
            imageAlt: 'Example Linux hardening audit console report showing check results and a compliance score',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Linux-Hardening-Audit-Tool',
            reportUrl: '',
            infrastructure: ['Linux', 'Python 3', 'CIS-inspired checks', 'Text and JSON reports']
        },
        {
            id: 4,
            title: 'Security Monitoring & Log Analysis',
            category: 'Security Monitoring',
            status: 'Planned',
            description: 'Investigate sample or simulated security events and document suspicious patterns and response options.',
            methodology: [
                'Review failed login attempts and unusual event patterns.',
                'Build an investigation timeline and identify relevant indicators.',
                'Assess recommended response and prevention measures.'
            ],
            evidence: ['Sanitized sample logs', 'Investigation timeline', 'Indicators and supporting event details'],
            outcome: 'Explain the findings and recommend appropriate response and prevention steps.',
            image: '',
            githubUrl: '',
            reportUrl: '',
            infrastructure: ['Windows / Linux logs', 'Python', 'Wazuh (optional)']
        },
        {
            id: 5,
            title: 'Linux Log Analyzer',
            category: 'Security Automation',
            status: 'Repository',
            description: 'Repository reference for a Python-based Linux authentication-log analysis workflow that exports suspicious events for Splunk visualization.',
            methodology: [
                'Parse Linux authentication logs and classify suspicious events.',
                'Identify repeated failed logins and unknown-user activity.',
                'Export structured CSV data for review in Splunk.'
            ],
            evidence: ['Python analyzer source', 'Generated CSV outputs', 'Splunk dashboard screenshot'],
            outcome: 'Review the documented workflow and validate its outputs against source logs before presenting analysis as independent findings.',
            image: 'assets/labs/linux-ssh-threat-analysis.png',
            imageAlt: 'Splunk dashboard for Linux SSH threat analysis from the linked repository',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Linux-log-Analyzer',
            reportUrl: '',
            infrastructure: ['Python', 'Splunk', 'Linux authentication logs']
        },
        {
            id: 6,
            title: 'Web Application Security Testing',
            category: 'Application Security',
            status: 'Planned',
            description: 'Test an authorized local training application and document security findings with reproducible steps.',
            methodology: [
                'Define test cases for input validation.',
                'Review authentication and session security.',
                'Reproduce findings and retest after suggested fixes.'
            ],
            evidence: ['Security test cases', 'Sanitized reproduction steps', 'Retest results'],
            outcome: 'Describe findings and suggested fixes, then record whether retesting confirms the changes.',
            image: '',
            githubUrl: '',
            reportUrl: '',
            infrastructure: ['OWASP ZAP', 'OWASP Juice Shop', 'Authorized training app']
        }
    ],

    blogProjects: [
        {
            id: 'home-soc-lab',
            title: 'Home SOC Lab: Wazuh, Suricata & OpenVAS',
            category: 'Cybersecurity',
            excerpt: 'Repository for a home SOC lab using Wazuh for monitoring, Suricata for network detection, and Greenbone/OpenVAS for vulnerability scanning in an isolated virtual environment.',
            image: 'assets/blog/home-soc-wazuh-dashboard.jpg',
            imageAlt: 'Wazuh dashboard from the home SOC lab project',
            githubUrl: 'https://github.com/ZeroTrace-Labs/Home-SOC-Lab'
        },
        {
            id: 'wireshark-traffic-analysis',
            title: 'Wireshark Network Traffic Analysis',
            category: 'Networking',
            excerpt: 'Project repository for inspecting protocol traffic, including DNS, HTTP authentication, SSH, and TLS, and documenting what a packet capture can and cannot establish.',
            image: 'assets/blog/wireshark-traffic-analysis.png',
            imageAlt: 'Packet analysis view from the Wireshark traffic analysis project',
            githubUrl: 'https://github.com/ZeroTrace-Labs/WireShark-Traffic-Analyzer'
        }
    ]
};

window.portfolioConfig = portfolioConfig;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
