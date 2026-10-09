window.blogArticles = [
    {
        slug: 'dns-packet-analysis',
        title: 'Reading DNS Exchanges in a Packet Capture',
        category: 'Networking',
        published: '2026-10-09',
        excerpt: 'A repeatable way to follow DNS questions and responses in Wireshark, with limits to keep in mind when interpreting what a capture shows.',
        sections: [
            {
                heading: 'What a DNS capture can show',
                paragraphs: [
                    'The Domain Name System (DNS) lets clients look up records associated with names. In a conventional, unencrypted DNS exchange, a packet capture can expose the queried name, record type, resolver address, response, and timing. DNS over HTTPS and DNS over TLS encrypt the DNS transport, so a capture taken elsewhere on the network may not expose the query contents.',
                    'A visible DNS request is not, by itself, evidence of malicious activity. Analysts need to interpret it alongside the host, time, destination, surrounding connections, and expected behavior for that environment.'
                ]
            },
            {
                heading: 'A focused Wireshark workflow',
                paragraphs: [
                    'Start with a capture you are authorized to inspect. Apply the `dns` display filter, then select a query and its corresponding response. Compare the endpoints, query name and type, response code, returned records, and timestamps. Keep the capture interval and host identity with your notes so another analyst can reproduce the review.'
                ],
                code: 'dns',
                codeCaption: 'Display DNS packets. To narrow to one queried name, use dns.qry.name == "example.com".'
            },
            {
                heading: 'Interpret patterns in context',
                paragraphs: [
                    'A response such as NXDOMAIN means the queried name does not exist according to that DNS response; it does not establish why the query was made. Repeated lookups, unusual labels, or a high volume of distinct names can justify further investigation, but can also have benign explanations such as software retries, service discovery, or tracking systems.',
                    'Correlate suspicious-looking queries with endpoint process data, resolver logs, and subsequent connections when those sources are available. Record the observation separately from the hypothesis, and state what evidence would confirm or weaken that hypothesis.',
                    'DNS over HTTPS (DoH) carries DNS messages inside HTTPS. A network capture may still show an encrypted connection to a resolver, but not the DNS question itself. Endpoint telemetry or resolver-side logs may be needed for further analysis.'
                ]
            },
            {
                heading: 'A concise investigation record',
                paragraphs: [
                    'For each item worth following up, record the timestamp and time zone, source host, resolver, queried name and type if visible, response, related traffic, and the reason it matters. Preserve the original capture and document filters used. Avoid including unrelated personal or sensitive data in screenshots shared publicly.'
                ],
                list: [
                    'Observation: what the packet capture directly shows.',
                    'Assessment: why the behavior may matter and plausible benign explanations.',
                    'Next step: which endpoint, resolver, or application evidence to check.'
                ]
            }
        ],
        references: [
            {
                label: 'RFC 1035: Domain Names - Implementation and Specification',
                url: 'https://www.rfc-editor.org/rfc/rfc1035'
            },
            {
                label: 'RFC 8484: DNS Queries over HTTPS (DoH)',
                url: 'https://www.rfc-editor.org/rfc/rfc8484'
            },
            {
                label: 'RFC 7858: Specification for DNS over Transport Layer Security (TLS)',
                url: 'https://www.rfc-editor.org/rfc/rfc7858'
            },
            {
                label: 'Wireshark User’s Guide: Display Filters',
                url: 'https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html'
            }
        ]
    },
    {
        slug: 'linux-file-permissions',
        title: 'Linux File Permissions: Read, Write, and Search',
        category: 'Linux',
        published: '2026-10-09',
        excerpt: 'Understand owner, group, and other permission bits, and use a small local example to verify the effect of a file mode.',
        sections: [
            {
                heading: 'Read the permission triplets',
                paragraphs: [
                    'Traditional Unix permissions describe access for the file owner, the file’s group, and everyone else. Each class has read, write, and execute bits. For a regular file, execute permits invoking it as a program, subject to its contents and other system controls. For a directory, read allows listing names, while execute (often described as search) allows traversing the directory when the user knows a name.',
                    'The `ls -l` output starts with a file-type character followed by these permission bits. For example, `-rw-r-----` means a regular file where the owner can read and write, the group can read, and other users have no permissions.'
                ]
            },
            {
                heading: 'Set and verify a least-privilege mode',
                paragraphs: [
                    'The following example creates a directory and file in your home directory. Choose a directory name that does not already exist. Mode 640 grants read and write to the owner, read to the group, and no access to other users. Use only files you control.'
                ],
                code: String.raw`mkdir -m 700 "$HOME/permission-lab"
printf "%s\n" "example" > "$HOME/permission-lab/report.txt"
chmod 640 "$HOME/permission-lab/report.txt"
stat -c "%a %A %n" "$HOME/permission-lab/report.txt"`,
                codeCaption: 'On GNU/Linux, stat should report mode 640 and permissions -rw-r-----.'
            },
            {
                heading: 'Check directory traversal and defaults',
                paragraphs: [
                    'File permissions do not tell the whole story: a user also needs search permission on each parent directory to reach a file by path. Access Control Lists (ACLs), ownership, mount options, and application-level checks can also affect the effective result.',
                    'The process umask removes permission bits from the mode requested when new files and directories are created. Inspect it with `umask`; do not assume every application creates files with the same requested mode.'
                ]
            },
            {
                heading: 'Avoid broad recursive changes',
                paragraphs: [
                    'Using `chmod -R 777` to “fix” access grants every local user read, write, and execute/search permissions throughout the selected tree. That can expose data or allow files to be modified. Identify the required owner and group first, inspect the affected paths, and change only the permissions needed for the intended access.'
                ]
            }
        ],
        references: [
            {
                label: 'Linux man-pages: chmod(1)',
                url: 'https://man7.org/linux/man-pages/man1/chmod.1.html'
            },
            {
                label: 'Linux man-pages: umask(2)',
                url: 'https://man7.org/linux/man-pages/man2/umask.2.html'
            }
        ]
    },
    {
        slug: 'nmap-local-service-inventory',
        title: 'A Safe First Pass at Local Service Discovery with Nmap',
        category: 'Security Testing',
        published: '2026-10-09',
        excerpt: 'Use a loopback scan to learn what Nmap’s service detection reports—and why a port scan is not a vulnerability assessment.',
        sections: [
            {
                heading: 'Start with scope',
                paragraphs: [
                    'Only scan systems you own or have explicit authorization to test. Define the target, permitted techniques, time window, and rate limits before scanning. The example below targets `127.0.0.1`, the loopback address for the same machine running Nmap; it does not target a remote system.'
                ]
            },
            {
                heading: 'Run a limited service scan',
                paragraphs: [
                    'The `-sV` option asks Nmap to probe open ports to identify the service and, when possible, its version. The `-p` option limits the ports considered here. This command can produce different results depending on which services are running and the operating system configuration.'
                ],
                code: 'nmap -sV -p 22,80,443 127.0.0.1',
                codeCaption: 'Run only against your own loopback interface. Nmap must be installed.'
            },
            {
                heading: 'Interpret states carefully',
                paragraphs: [
                    'An `open` result indicates an application is accepting connections on that port. `closed` means the host responded but no application was listening at scan time. `filtered` means a filtering device or network behavior prevented Nmap from determining whether the port was open or closed.',
                    'Service and version identification is a probe-based estimate, not proof that a specific software build is vulnerable. Confirm findings against the system owner’s package inventory and vendor advisories. A port scan alone does not establish exploitability or business risk.'
                ]
            },
            {
                heading: 'Document and follow up',
                paragraphs: [
                    'Keep the exact command, Nmap version, target, timestamp, and unedited output with the assessment notes. For an authorized assessment, compare observed services with the approved scope and the host’s expected configuration. Investigate unexpected exposure with the system owner before recommending a change.'
                ]
            }
        ],
        references: [
            {
                label: 'Nmap Reference Guide: Port Scanning Basics',
                url: 'https://nmap.org/book/man-port-scanning-basics.html'
            },
            {
                label: 'Nmap Reference Guide: Service and Version Detection',
                url: 'https://nmap.org/book/man-version-detection.html'
            }
        ]
    },
    {
        slug: 'reproducible-security-findings',
        title: 'Writing a Reproducible Security Finding',
        category: 'Security Testing',
        published: '2026-10-09',
        excerpt: 'Structure a test finding so another engineer can understand the affected behavior, verify the evidence, and retest a proposed fix.',
        sections: [
            {
                heading: 'Separate evidence from interpretation',
                paragraphs: [
                    'A security finding should let a reader distinguish what the test directly observed from the tester’s assessment of its impact. State the tested application or component, environment, prerequisites, and scope. Do not include credentials, personal data, or exploit details beyond what the authorized audience needs to reproduce the issue.'
                ]
            },
            {
                heading: 'Include enough detail to reproduce',
                paragraphs: [
                    'Describe the starting state, the relevant request or action, and the observed response. Include a timestamp or build identifier where it helps identify the tested version. Redact tokens and sensitive values while preserving the parts of the request necessary to understand the behavior.'
                ],
                list: [
                    'Affected asset and tested environment.',
                    'Preconditions and concise reproduction steps.',
                    'Observed result, supported by sanitized evidence.',
                    'Expected behavior and the security consequence.'
                ]
            },
            {
                heading: 'Explain impact and remediation carefully',
                paragraphs: [
                    'Describe the affected security property, such as authorization or input handling, and the conditions needed for the behavior to matter. Avoid assigning a severity score without a defined scoring method and enough context. Recommendations should address the cause, not only suppress the observed symptom.',
                    'After a fix is deployed, repeat the relevant test and record the result, environment, and date. A successful retest is evidence about the tested path and build; it does not prove that every related path is secure.'
                ]
            },
            {
                heading: 'Keep the report useful and safe',
                paragraphs: [
                    'Use clear steps, minimal screenshots, and redacted evidence. Keep the full technical details in the approved reporting channel, and share only sanitized material publicly. The OWASP Testing Guide provides a structured testing reference; the exact report fields should also follow the organization’s own process.'
                ]
            }
        ],
        references: [
            {
                label: 'OWASP Web Security Testing Guide',
                url: 'https://owasp.org/www-project-web-security-testing-guide/stable/'
            },
            {
                label: 'OWASP Application Security Verification Standard',
                url: 'https://owasp.org/www-project-application-security-verification-standard/'
            }
        ]
    },
    {
        slug: 'python-auth-log-counts',
        title: 'Counting Failed SSH Logins in a Sample Log with Python',
        category: 'Programming',
        published: '2026-10-09',
        excerpt: 'A small standard-library example that counts IPv4 and IPv6 source addresses in matching OpenSSH failed-password log lines.',
        sections: [
            {
                heading: 'Define the detection narrowly',
                paragraphs: [
                    'This example counts lines matching the common OpenSSH “Failed password” message pattern. It is a parsing exercise, not a detector for account compromise: log formats differ, records may be incomplete, and repeated failures can have benign causes. The sample below contains fictional documentation addresses and is not evidence from a real system.'
                ]
            },
            {
                heading: 'Parse and validate the address',
                paragraphs: [
                    'The regular expression extracts the token following `from`. Python’s `ipaddress.ip_address()` then validates that token as an IPv4 or IPv6 address before counting it. Invalid tokens are skipped rather than treated as valid indicators.'
                ],
                code: String.raw`import ipaddress
import re
from collections import Counter

failed_password = re.compile(
    r"Failed password for (?:invalid user )?\S+ from (?P<ip>\S+)"
)
counts = Counter()

with open("auth.log", encoding="utf-8", errors="replace") as log_file:
    for line in log_file:
        match = failed_password.search(line)
        if not match:
            continue
        try:
            address = ipaddress.ip_address(match.group("ip"))
        except ValueError:
            continue
        counts[str(address)] += 1

for address, total in counts.most_common():
    print(f"{address}\t{total}")`,
                codeCaption: 'Save as count_failed_logins.py and run it beside an authorized, sanitized auth.log sample.'
            },
            {
                heading: 'Test with a fictional fixture',
                paragraphs: [
                    'A minimal fictional fixture can contain `Failed password for analyst from 203.0.113.8 port 2200 ssh2` and `Failed password for invalid user guest from 203.0.113.8 port 2200 ssh2`. Add an unrelated success line and a malformed address to check that they are ignored. The expected count for this fixture is `203.0.113.8    2`; 203.0.113.0/24 is reserved for documentation and is not an observed source.'
                ]
            },
            {
                heading: 'Know the limits before using the output',
                paragraphs: [
                    'This pattern is intentionally narrow and does not parse every SSH log variant or infer a person’s identity from an IP address. It does not account for NAT, proxying, log rotation, duplicate ingestion, or time windows. Treat counts as a triage lead; correlate them with successful logins, host context, and other trusted telemetry before drawing conclusions. Do not publish raw logs that contain personal or operational data.'
                ]
            }
        ],
        references: [
            {
                label: 'Python documentation: ipaddress',
                url: 'https://docs.python.org/3/library/ipaddress.html'
            },
            {
                label: 'Python documentation: regular expression operations',
                url: 'https://docs.python.org/3/library/re.html'
            }
        ]
    }
];
