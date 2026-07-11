// js/main.js - Main JavaScript file for the portfolio website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');

    // Initialize all functionality
    initLanguage();
    initNavigation();
    initTheme();
    initActiveMenu();
    initNavbarScroll();
    initFormValidation();
    initAnimations();
    initCurrentYear();
    initFAQ();
    initProjectFilter();
    initSkillAnimations();
    initStatCounters();
    initHeroRoleRotation();
    initHeroBackgrounds();
    initCertificateModal();
});

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.certificate': 'Certificates',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'nav.language': 'Language',
        'nav.theme_light': 'Switch to light mode',
        'nav.theme_dark': 'Switch to dark mode'
    },
    km: {
        'nav.home': 'ទំព័រដើម',
        'nav.about': 'អំពីខ្ញុំ',
        'nav.skills': 'ជំនាញ',
        'nav.certificate': 'វិញ្ញាបនបត្រ',
        'nav.projects': 'គម្រោង',
        'nav.experience': 'បទពិសោធន៍',
        'nav.contact': 'ទំនាក់ទំនង',
        'nav.language': 'ភាសា',
        'nav.theme_light': 'ប្តូរទៅរចនាប័ទ្មភ្លឺ',
        'nav.theme_dark': 'ប្តូរទៅរចនាប័ទ្មងងឹត'
    }
};

const i18nTranslations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.certificate': 'Certificates',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'nav.language': 'Language',
        'nav.option_en': 'English',
        'nav.option_km': 'Khmer',
        'nav.theme_light': 'Switch to light mode',
        'nav.theme_dark': 'Switch to dark mode',
        'certificate.page_title': 'My Certificates',
        'certificate.page_subtitle': 'Credentials and certifications earned through coursework and professional development',
        'certificate.group_technical': 'Technical Skills & Training',
        'certificate.group_soft': 'Soft Skills & Leadership',
        'certificate.group_language': 'Language & Communication',
        'certificate.group_competition': 'Competitions & Awards',
        'cert.css_title': 'CSS (Basic) Certificate',
        'cert.css_issuer': 'HackerRank',
        'cert.css_desc': 'Certification demonstrating foundational CSS skills including selectors, box model, flexbox, grid, responsive design, and styling best practices.',
        'cert.css_tag1': 'CSS3',
        'cert.css_tag2': 'Flexbox',
        'cert.css_tag3': 'Grid',
        'cert.jsb_title': 'JavaScript (Basic) Certificate',
        'cert.jsb_issuer': 'HackerRank',
        'cert.jsb_desc': 'Certification covering JavaScript fundamentals including syntax, variables, control flow, functions, arrays, objects, and DOM manipulation basics.',
        'cert.jsb_tag1': 'JavaScript',
        'cert.jsb_tag2': 'ES6',
        'cert.jsb_tag3': 'DOM',
        'cert.ai_title': 'Introduction to Artificial Intelligence',
        'cert.ai_issuer': 'Online Course',
        'cert.ai_desc': 'Introductory course covering core AI concepts, machine learning fundamentals, and real-world applications of artificial intelligence technologies.',
        'cert.ai_tag1': 'Artificial Intelligence',
        'cert.ai_tag2': 'Machine Learning',
        'cert.ethics_title': 'Internet Code of Ethics and Digital Security - PED',
        'cert.ethics_issuer': 'PED',
        'cert.ethics_desc': 'Certificate covering internet ethics, digital security principles, responsible online behavior, and cybersecurity awareness best practices.',
        'cert.ethics_tag1': 'Digital Security',
        'cert.ethics_tag2': 'Ethics',
        'cert.ethics_tag3': 'Cybersecurity',
        'cert.dst_title': 'DIGITAL SECURITY TRAINING (DST)',
        'cert.dst_issuer': 'Digital Security Training',
        'cert.dst_desc': 'Comprehensive digital security training certificate covering online safety, data protection, threat awareness, and secure digital practices.',
        'cert.dst_tag1': 'Digital Security',
        'cert.dst_tag2': 'Data Protection',
        'cert.dst_tag3': 'Cybersecurity',
        'cert.ai_lit_title': 'AI Literacy Online Training 2026',
        'cert.ai_lit_issuer': 'Online Training Program',
        'cert.ai_lit_desc': 'Online training program focused on building foundational AI literacy skills and understanding artificial intelligence concepts for everyday applications.',
        'cert.ai_lit_tag1': 'AI Literacy',
        'cert.ai_lit_tag2': 'Digital Skills',
        'cert.eqspire_title': 'EQSpire Participants',
        'cert.eqspire_issuer': 'EQSpire Program',
        'cert.eqspire_desc': 'Participation certificate from the EQSpire program, focusing on emotional intelligence, professional development, and leadership skills.',
        'cert.eqspire_tag1': 'Emotional Intelligence',
        'cert.eqspire_tag2': 'Leadership',
        'cert.yrdp_title': 'Leadership and Personal Development - YRDP',
        'cert.yrdp_issuer': 'YRDP',
        'cert.yrdp_desc': 'Certificate from the YRDP Leadership and Personal Development program, covering leadership principles, self-development, and professional growth skills.',
        'cert.yrdp_tag1': 'Leadership',
        'cert.yrdp_tag2': 'Personal Development',
        'cert.ifa_title': 'IFA Data-Driven Leadership Seminar',
        'cert.ifa_issuer': 'IFA',
        'cert.ifa_desc': 'Seminar certificate from IFA focusing on data-driven leadership principles, analytics-based decision making, and strategic leadership development.',
        'cert.ifa_tag1': 'Leadership',
        'cert.ifa_tag2': 'Data Analytics',
        'cert.gender_title': 'Gender & Digital Equality Training',
        'cert.gender_issuer': 'Training Program',
        'cert.gender_desc': 'Training certificate focused on promoting gender equality in digital spaces, inclusive technology practices, and bridging the digital divide.',
        'cert.gender_tag1': 'Gender Equality',
        'cert.gender_tag2': 'Digital Inclusion',
        'cert.safe_title': 'Auscam Freedom Project SAFE Sister Program',
        'cert.safe_issuer': 'Auscam Freedom Project',
        'cert.safe_desc': 'Program completion certificate from the SAFE Sister initiative focused on empowerment, safety awareness, and community support skills.',
        'cert.safe_tag1': 'Empowerment',
        'cert.safe_tag2': 'សហគមន៍',
        'cert.gymlish_title': 'ការវាយពាហុភពភាសា Gymlish',
        'cert.gymlish_issuer': 'Gymlish',
        'cert.gymlish_desc': 'វិញ្ញាបនបត្រវាយពាហុភពភាសាដែលបង្ហាញជំនាញទំនាក់ទំនងអង់គ្លេសតាមរយៈការប៉ាន់ស្មានដែលមានរចនាប័ទ្ម និងលំហាត់អនុវត្ត។',
        'cert.gymlish_tag1': 'ភាសាអង់គ្លេស',
        'cert.gymlish_tag2': 'ការទំនាក់ទំនង',
        'cert.pucifl_title': 'មូលដ្ឋានគ្រឹះនៃការរៀនភាសាអង់គ្លេស – PUC-IFL',
        'cert.pucifl_issuer': 'PUC-IFL',
        'cert.pucifl_desc': 'វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សាមូលដ្ឋានគ្រឹះរៀនភាសាអង់គ្លេសនៅ PUC-IFL ដែលផ្តោតលើជំនាញភាសាអង់គ្លេស និងជំនាញអាហារូបករណ៍មូលដ្ឋាន។',
        'cert.pucifl_tag1': 'ភាសាអង់គ្លេស',
        'cert.pucifl_tag2': 'ជំនាញអាហារ',
        'cert.ideathon_title': 'ការប្រកួតផ្តួចផ្តើមគំនិត Cambodia 2025',
        'cert.ideathon_issuer': 'Ideathon Cambodia',
        'cert.ideathon_desc': 'វិញ្ញាបនបត្រចូលរួមពី Ideathon Cambodia 2025 ដែលបង្ហាញការច្នៃប្រឌិត ការដោះស្រាយបញ្ហា និងការគិតរចនាស្ពន្ធគ្នាក្នុងបរិយាកាសប្រកួតគឺ។',
        'cert.ideathon_tag1': 'ការច្នៃប្រឌិត',
        'cert.ideathon_tag2': 'ការដោះស្រាយបញ្ហា',
        'cert.debate_title': 'ការប្រកួតនិយាយមុខងារទស្សនៈរបស់យុវជន',
        'cert.debate_issuer': 'ការប្រកួតនិយាយមុខងារ',
        'cert.debate_desc': 'វិញ្ញាបនបត្រទទួលស្គាល់ការចូលរួម និងការសម្តែងនៅក្នុងការប្រកួតនិយាយមុខងារទស្សនៈរបស់យុវជន ដែលបង្ហាញជំនាញគិតវិភាគ និងការនិយាយមុខងារសាធារណៈ។',
        'cert.debate_tag1': 'ការនិយាយមុខងារសាធារណៈ',
        'cert.debate_tag2': 'ការគិតវិភាគ',
        'cert.completion_title': 'វិញ្ញាបនបត្របញ្ចប់',
        'cert.completion_issuer': 'ផល សុភា',
        'cert.completion_desc': 'វិញ្ញាបនបត្រទូទៅបញ្ចប់ការដែលទទួលស្គាល់ការចូលរួមដោយជោគជ័យ និងវប្បធម៌ក្នុងកម្មវិធីអប់រំ ឬបណ្តុះបណ្តាលដែលមានឆន្នៃ។',
        'cert.completion_tag1': 'ការបញ្ចប់',
        'cert.completion_tag2': 'វប្បធម៌',
        'certificate.pnc_title': 'PNC IT Diploma',
        'certificate.pnc_issuer': 'Passerelles Numeriques Cambodia',
        'certificate.pnc_date': '2025 - Present',
        'certificate.pnc_desc': 'Comprehensive two-year program covering software development, web technologies, database management, and professional skills for the tech industry.',
        'certificate.rwd_title': 'Responsive Web Design',
        'certificate.rwd_date': '2024',
        'certificate.rwd_desc': 'Certification covering HTML5, CSS3, accessibility, responsive design principles, and CSS Grid/Flexbox layouts.',
        'certificate.js_title': 'JavaScript Algorithms and Data Structures',
        'certificate.js_date': '2024',
        'certificate.js_desc': 'Certification in JavaScript fundamentals, ES6+, algorithms, data structures, and functional programming concepts.',
        'certificate.sql_title': 'SQL and Database Design',
        'certificate.sql_issuer': 'PNC Training',
        'certificate.sql_date': '2025',
        'certificate.sql_desc': 'Hands-on training in relational database design, SQL queries, normalization, and database optimization techniques.',
        'certificate.git_title': 'Git and Version Control',
        'certificate.git_issuer': 'PNC Training',
        'certificate.git_date': '2025',
        'certificate.git_desc': 'Practical training in Git workflows, branching strategies, collaboration with GitHub, and version control best practices.',
        'certificate.web_title': 'Full-Stack Web Development',
        'certificate.web_issuer': 'PNC Training',
        'certificate.web_date': '2025',
        'certificate.web_desc': 'End-to-end web development training covering frontend, backend, API integration, and deployment practices.',
        'home.hero_hello': "Hello, I'm",
        'home.hero_prefix': 'IT Student & Aspiring',
        'home.hero_description': "I'm studying Information Technology at Passerelles Numeriques Cambodia (PNC), developing strong technical skills in software development while gaining professional soft skills for the tech industry.",
        'home.badge': 'PNC IT Student | 2025-Present',
        'home.cta_projects': 'View My Projects',
        'home.cta_cv': 'Download CV',
        'home.core_skills': 'My Core Skills',
        'home.cta_title': 'Ready to Work Together?',
        'home.cta_text': "I'm looking for internship opportunities and collaborative projects to apply my skills and learn from experienced developers.",
        'home.cta_contact': 'Get In Touch',
        'about.page_title': 'About Me',
        'about.page_subtitle': 'Get to know my background, education, and career goals',
        'about.intro_title': "Hello, I'm Sophea Phal",
        'about.intro_p1': "I'm a passionate IT student at Passerelles Numeriques Cambodia (PNC), specializing in software development and web technologies. My journey into technology began with a curiosity about how things work digitally, which has evolved into a dedicated pursuit of software engineering.",
        'about.intro_p2': "Through PNC's intensive two-year program, I'm gaining hands-on experience with modern development tools and methodologies while developing problem-solving skills that are essential for the tech industry.",
        'about.intro_p3': "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and participating in tech communities to stay updated with industry trends.",
        'about.education_title': 'Education',
        'about.edu1_title': 'IT Diploma Program',
        'about.edu1_desc': 'Intensive two-year program focusing on software development, web technologies, database management, and professional skills development.',
        'about.edu1_li1': 'Programming Fundamentals (Python)',
        'about.edu1_li2': 'Web Development (HTML/CSS, JavaScript, PHP)',
        'about.edu1_li3': 'Database Management Systems',
        'about.edu1_li4': 'Software Engineering Principles',
        'about.edu2_title': 'High School Diploma',
        'about.edu2_desc': 'Graduated with focus on science and mathematics, developing strong analytical and problem-solving skills.',
        'about.edu2_grade': 'Grade B',
        'about.values_title': 'My Values',
        'about.value1_title': 'Continuous Learning',
        'about.value1_desc': 'Always seeking to learn new technologies and improve my skills through practice and exploration.',
        'about.value2_title': 'Collaboration',
        'about.value2_desc': 'Believing in the power of teamwork and open communication to achieve better results.',
        'about.value3_title': 'Quality Focus',
        'about.value3_desc': 'Committed to writing clean, efficient, and maintainable code that solves real problems.',
        'about.goals_title': 'Career Goals',
        'about.goal1_title': 'Complete PNC Program',
        'about.goal1_desc': 'Successfully graduate from Passerelles Numeriques Cambodia with strong technical skills and professional readiness, building a portfolio of meaningful projects.',
        'about.goal2_title': 'Software Development Internship',
        'about.goal2_desc': 'Secure a software development internship to gain real-world experience working on production code and understanding industry workflows.',
        'about.goal3_title': 'Junior Developer Role',
        'about.goal3_desc': 'Begin my career as a Junior Software Developer, contributing to meaningful projects while continuing to grow professionally.',
        'skills.page_title': 'My Skills',
        'skills.page_subtitle': "Technical abilities and knowledge areas developed through PNC's program",
        'skills.frontend_title': 'Frontend Development',
        'skills.responsive_design': 'Responsive Design',
        'skills.backend_title': 'Backend Development',
        'skills.rest_api': 'RESTful APIs',
        'skills.database_title': 'Database Management',
        'skills.database_design': 'Database Design',
        'skills.sql_queries': 'SQL Queries',
        'skills.tools_title': 'Tools & Technologies',
        'skills.git_github': 'Git & GitHub',
        'skills.linux_unix': 'Linux/Unix',
        'skills.stack_title': 'Technology Stack',
        'skills.stack_langs': 'Programming Languages',
        'skills.stack_frameworks': 'Frameworks & Libraries',
        'skills.stack_tools': 'Tools & Platforms',
        'skills.stack_ai': 'AI & Agentic Tools',
        'skills.languages_title': 'Languages',
        'skills.khmer_title': 'Khmer',
        'skills.khmer_desc': 'Native language with strong communication skills in daily, academic, and collaborative environments.',
        'skills.english_title': 'English',
        'skills.english_desc': 'Working proficiency in reading, writing, and speaking for technical learning, teamwork, and presentations.',
        'skills.soft_title': 'Soft Skills',
        'skills.soft1_title': 'Communication',
        'skills.soft1_desc': 'Effective verbal and written communication skills developed through presentations and team projects.',
        'skills.soft2_title': 'Teamwork',
        'skills.soft2_desc': 'Collaborative approach to problem-solving with experience in group projects and pair programming.',
        'skills.soft3_title': 'Problem Solving',
        'skills.soft3_desc': 'Analytical thinking and systematic approach to debugging and resolving technical challenges.',
        'skills.soft4_title': 'Time Management',
        'skills.soft4_desc': 'Ability to prioritize tasks and meet deadlines while balancing multiple projects and responsibilities.',
        'skills.soft5_title': 'Leadership',
        'skills.soft5_desc': 'Ability to guide team activities, support collaboration, and take responsibility for delivering shared goals.',
        'projects.page_title': 'My Projects',
        'projects.page_subtitle': 'A focused selection from PNC coursework and personal builds',
        'projects.stat_completed': 'Projects Completed',
        'projects.stat_pnc': 'PNC Course Projects',
        'projects.stat_personal': 'Personal Projects',
        'projects.filter_all': 'All Projects',
        'projects.filter_web': 'Web Development',
        'projects.filter_pnc': 'PNC Projects',
        'projects.filter_personal': 'Personal Projects',
        'projects.chomnuoy_title': 'VC1 Chomnuoy System',
        'projects.chomnuoy_desc': 'Built a full-stack support system project with Laravel, ReactJS, MySQL, Redis, and Jira. Worked on collaborative development, repository management, and structured backend and frontend workflows with GitHub.',
        'projects.frontend_repo': 'Frontend Repo',
        'projects.backend_repo': 'Backend Repo',
        'projects.quiz_title': 'Interactive Quiz Website',
        'projects.quiz_desc': 'Built an interactive quiz site with responsive UI, timer, score tracking, and instant feedback. Used HTML, CSS, JavaScript, Bootstrap, Jira, and Git/GitHub.',
        'projects.news_title': 'Student News Web Application',
        'projects.news_desc': 'Built a Student News web app in 2 weeks with HTML, CSS, JavaScript, Flask, Python, and SQLite. Designed a CMS to create, publish, and display articles with a clean UI.',
        'projects.portfolio_title': 'Professional Portfolio Website',
        'projects.portfolio_desc': 'Designed and developed a professional portfolio site from concept to deployment. Built responsive layouts and clean navigation with HTML, CSS, and SASS.',
        'projects.team_title': 'Team Web Development Project',
        'projects.team_desc': 'Built a fully responsive team site with HTML5 and CSS3. Practiced clean, semantic code, Git/GitHub workflows, and shipped the site on Vercel.',
        'projects.shop_title': 'PNC Shop Website',
        'projects.shop_desc': 'Contributed to a 5-member team building a computer shop website in a 2-week PNC challenge. Focused on layout, styling, and content for a functional shop flow.',
        'projects.pos_title': 'POS System API',
        'projects.pos_desc': 'Built a POS System API from 18 May 2026 to 7 June 2026 as Team Coordinator & Backend Developer. Led a 2-member team, developed donation management features and full-stack functionality, and coordinated collaboration using Git & GitHub.',
        'projects.engagement_title': 'Class Engagement Tools',
        'projects.engagement_desc': 'Led a 6-member Agile team to develop a classroom engagement platform using Laravel, Vue.js, and PostgreSQL (Jul 01, 2026 – Present). Developed RESTful APIs and interactive features, including Random Wheel, Quiz, Timer, Attendance, and Group Generator. Collaborated using Git and GitHub and followed Agile Scrum practices.',
        'projects.gen_shop_title': 'GenShop E-commerce',
        'projects.gen_shop_desc': 'Built an individual e-commerce platform with Laravel, Vue.js, and MySQL. The project supports essential shop workflows including product listing, user authentication, and shopping cart management.',
        'projects.view_repo': 'View Repository',
        'projects.github_title': 'More Projects on GitHub',
        'projects.github_desc': 'See more projects, experiments, and coding challenges on GitHub.',
        'projects.github_repos': 'Repositories',
        'projects.github_commits': 'Commits',
        'projects.github_stars': 'Stars',
        'projects.github_cta': 'Visit My GitHub',
        'experience.page_title': 'My Experience',
        'experience.page_subtitle': 'Academic projects, activities, and professional development',
        'experience.timeline_title': 'Passerelles Numériques Cambodia (PNC)',
        'experience.item1_title': 'Web Development Student (Practice)',
        'experience.item1_li1': 'Studying web development fundamentals in a professional training environment',
        'experience.item1_li2': 'Building responsive websites using HTML, CSS, SASS, and JavaScript',
        'experience.item1_li3': 'Using Git and GitHub for version control and team collaboration',
        'experience.item1_li4': 'Learning backend basics with PHP, Python (Flask), and MySQL',
        'experience.item1_li5': 'Practicing teamwork, task management, and technical communication',
        'experience.item2_title': 'Computer Science Club – Study Project',
        'experience.item2_li1': 'Participated in weekly coding practice and group discussions',
        'experience.item2_li2': 'Collaborated with students on small web development exercises',
        'experience.item2_li3': 'Improved problem-solving and peer-learning skills',
        'experience.item3_title': 'Academic Database Project (Team Coordinator)',
        'experience.item3_li1': 'Designed ER diagrams and relational schema for a library system',
        'experience.item3_li2': 'Implemented MySQL database with normalized tables',
        'experience.item3_li3': 'Built a basic interface using HTML, CSS, and PHP',
        'experience.item3_li4': 'Documented the project and presented results to classmates',
        'experience.technologies': 'Technologies:',
        'experience.item4_title': 'Web Programming Course Project',
        'experience.item4_li1': 'Developed a responsive website as a course final project',
        'experience.item4_li2': 'Implemented basic authentication and session handling',
        'experience.item4_li3': 'Created structured layouts and reusable components',
        'experience.item4_li4': 'Focused on clean code and cross-device compatibility',
        'experience.learnings_title': 'Key Learnings & Takeaways',
        'experience.learn1_title': 'Team Collaboration',
        'experience.learn1_desc': 'Learned the importance of communication, code reviews, and working effectively in team environments through group projects and club activities.',
        'experience.learn2_title': 'Professional Development',
        'experience.learn2_desc': "Gained exposure to industry-standard tools, workflows, and best practices for software development through PNC's comprehensive curriculum.",
        'experience.learn3_title': 'Problem-Solving',
        'experience.learn3_desc': 'Developed strong analytical and problem-solving skills through debugging complex code, algorithm design, and completing challenging assignments.',
        'experience.learn4_title': 'Project Management',
        'experience.learn4_desc': 'Understood how to manage tasks, meet deadlines, and adapt to changing requirements through hands-on project experience.',
        'experience.goals_title': 'Career Path & Goals',
        'experience.goal1_title': 'Complete PNC Program (2026)',
        'experience.goal1_desc': 'Graduate from Passerelles Numériques Cambodia with strong foundations in web development and teamwork skills.',
        'experience.goal2_title': 'Software Development Internship (2026)',
        'experience.goal2_desc': 'Gain real-world experience through an internship and learn professional workflows, code quality, and collaboration.',
        'experience.goal3_title': 'Junior Developer Role (2027)',
        'experience.goal3_desc': 'Start a career as a Junior Developer and continue growing through hands-on experience and continuous learning.',
        'contact.page_title': 'Get In Touch',
        'contact.page_subtitle': "Let's discuss opportunities or collaborate on projects",
        'contact.form_title': 'Send Me a Message',
        'contact.label_name': 'Full Name *',
        'contact.placeholder_name': 'Your Name',
        'contact.label_email': 'Email Address *',
        'contact.placeholder_email': 'your.email@example.com',
        'contact.label_subject': 'Subject',
        'contact.placeholder_subject': 'Message Subject',
        'contact.label_message': 'Message *',
        'contact.placeholder_message': 'Your message here...',
        'contact.send_message': 'Send Message',
        'contact.required_field': 'This field is required',
        'contact.invalid_email': 'Please enter a valid email address',
        'contact.message_too_short': 'Message must be at least 10 characters long',
        'contact.success_message': 'Thank you! Your message has been sent successfully.',
        'contact.error_message': 'Please fix the errors above and try again.',
        'contact.processing': 'Processing...',
        'contact.info_title': 'Contact Information',
        'contact.info_desc': 'Feel free to reach out through any of these channels. I typically respond within 24 hours.',
        'contact.method_email': 'Email',
        'contact.email_cta': 'Send an email',
        'contact.method_phone': 'Phone',
        'contact.phone_cta': 'Call me',
        'contact.method_location': 'Location',
        'contact.location_text': 'Phnom Penh, Cambodia',
        'contact.location_note': 'Open to remote opportunities',
        'contact.method_education': 'Education',
        'contact.education_program': 'IT Diploma Program (2025-Present)',
        'contact.social_title': 'Connect on Social Media',
        'contact.social_desc': 'Follow me for updates on my projects and coding journey.',
        'contact.faq_title': 'Frequently Asked Questions',
        'contact.faq1_q': 'Are you available for internships?',
        'contact.faq1_a': "Yes! As a PNC IT student, I'm actively seeking internship opportunities for 2026. I'm available for both part-time during the semester and full-time during breaks.",
        'contact.faq2_q': 'What types of projects do you take on?',
        'contact.faq2_a': 'I specialize in web development projects but also take on full-stack applications. This includes websites, web applications, landing pages, and e-commerce solutions.',
        'contact.faq3_q': "What's your expected graduation date?",
        'contact.faq3_a': "I'm on track to graduate from Passerelles Numeriques Cambodia in December 2026 with an IT Diploma focusing on software development.",
        'contact.faq4_q': 'Do you work remotely or on-site?',
        'contact.faq4_a': "I'm open to both remote and on-site opportunities. For remote work, I'm experienced with collaboration tools and have a dedicated workspace.",
        'footer.tagline_line1': 'IT Student at Passerelles Numeriques Cambodia',
        'footer.tagline_line2': 'Aspiring Software Developer',
        'footer.cta': "Let's Build Together",
        'footer.contact': 'Contact',
        'footer.location': 'Phnom Penh, Cambodia',
        'footer.available': 'Available for internships',
        'footer.quick_links': 'Quick Links',
        'footer.connect': 'Connect',
        'footer.note': 'Find my latest work and reach out anytime.',
        'footer.rights_prefix': '&copy; <span class="current-year">2026</span> Sophea Phal.',
        'footer.rights_suffix': 'All rights reserved.'
    },
    km: {
        'nav.home': 'ទំព័រដើម',
        'nav.about': 'អំពីខ្ញុំ',
        'nav.skills': 'ជំនាញ',
        'nav.projects': 'គម្រោង',
        'nav.experience': 'បទពិសោធន៍',
        'nav.contact': 'ទំនាក់ទំនង',
        'nav.language': 'ភាសា',
        'nav.option_en': 'អង់គ្លេស',
        'nav.option_km': 'ខ្មែរ',
        'nav.theme_light': 'ប្តូរទៅរចនាប័ទ្មភ្លឺ',
        'nav.theme_dark': 'ប្តូរទៅរចនាប័ទ្មងងឹត',
        'nav.certificate': 'វិញ្ញាបនបត្រ',
        'certificate.page_title': 'វិញ្ញាបនបត្រ',
        'certificate.page_subtitle': 'លិខិតសម្គាល់ និងវិញ្ញាបនបត្រដែលទទួលបានតាមរយៈការសិក្សា និងការអភិវឌ្ឍវិជ្ជាជីវៈ',
        'certificate.group_technical': 'ជំនាញបច្ចេកទេស និងការបណ្តុះបណ្តាល',
        'certificate.group_soft': 'ជំនាញទន់ និងភាពជាម្ចាស់ដៃ',
        'certificate.group_language': 'ភាសា និងការប្រាស្រ័យទាក់ទង',
        'certificate.group_competition': 'ការប្រកួត និងពាន់លាភ',
        'cert.css_title': 'វិញ្ញាបនបត្រ CSS (មូលដ្ឋាន)',
        'cert.css_issuer': 'HackerRank',
        'cert.css_desc': 'វិញ្ញាបនបត្របំពេញជំនាញមូលដ្ឋាន CSS ដែលរាមមាន selector, box model, flexbox, grid, រចនាឆ្លើយតប និងវិធីធ្វើដែលល្អ។',
        'cert.css_tag1': 'CSS3',
        'cert.css_tag2': 'Flexbox',
        'cert.css_tag3': 'Grid',
        'cert.jsb_title': 'វិញ្ញាបនបត្រ JavaScript (មូលដ្ឋាន)',
        'cert.jsb_issuer': 'HackerRank',
        'cert.jsb_desc': 'វិញ្ញាបនបត្រគ្រប់គ្រាប់ពីមូលដ្ឋានគ្រឹះ JavaScript ដែលរួមមាន syntax, អថេរ, វាលវែង, អនុវត្តលction, អារេ, វាsង្គកម្ម និងគោលការណ៍ DOM មូលដ្ឋាន។',
        'cert.jsb_tag1': 'JavaScript',
        'cert.jsb_tag2': 'ES6',
        'cert.jsb_tag3': 'DOM',
        'cert.ai_title': 'ណែនាំអំពីពន្លឺម៉ាស៊ីនធ្វើការដោយខ្លួនឯង',
        'cert.ai_issuer': 'វគ្គសិក្សាអុនឡាញ',
        'cert.ai_desc': 'វគ្គសិក្សាណែនាំដែលគ្របដណ្តប់គោលការណ៍ AI មូលដ្ឋាន, មូលដ្ឋានគ្រឹះជាំងស្យុង, និងការអនុវត្តជាក់ស្តែងនៃបច្ចេកវិទ្យាពន្លឺម៉ាស៊ីនធ្វើការដោយខ្លួនឯង។',
        'cert.ai_tag1': 'ពន្លឺម៉ាស៊ីនធ្វើការដោយខ្លួនឯង',
        'cert.ai_tag2': 'ជាំងស្យុង',
        'cert.ethics_title': 'ក្រមវិធុនសី និងសុវត្ថិភាពឌីជីថល - PED',
        'cert.ethics_issuer': 'PED',
        'cert.ethics_desc': 'វិញ្ញាបនបត្រគ្រប់គ្រាប់អំពីក្រមវិធុនសី និងគោលការណ៍សុវត្ថិភាពឌីជីថល ទម្លាប់ខ្លួនល្អតាមអ៊ីនធើណេត និងការដឹងដឹងអំពីសុវត្ថិភាពអ៊ីនធើណេត។',
        'cert.ethics_tag1': 'សុវត្ថិភាពឌីជីថល',
        'cert.ethics_tag2': 'ក្រមវិធុនសី',
        'cert.ethics_tag3': 'សុវត្ថិភាពស៊ីប៊ីរ',
        'cert.dst_title': 'ការបណ្តុះបណ្តាលសុវត្ថិភាពឌីជីថល (DST)',
        'cert.dst_issuer': 'ការបណ្តុះបណ្តាលសុវត្ថិភាពឌីជីថល',
        'cert.dst_desc': 'វិញ្ញាបនបត្របណ្តុះបណ្តាលសុវត្ថិភាពឌីជីថលគ្រប់គ្រាប់ដែលគ្របដណ្តប់សុវត្ថិភាពក្នុងបណ្តាញ ការពារទិន្នន័យ ការដឹងដឹងអំពីការគំារ និងទម្លាប់ល្អ។',
        'cert.dst_tag1': 'សុវត្ថិភាពឌីជីថល',
        'cert.dst_tag2': 'ការពារទិន្នន័យ',
        'cert.dst_tag3': 'សុវត្ថិភាពស៊ីប៊ីរ',
        'cert.ai_lit_title': 'ការបណ្តុះបណ្តាលភាសា AI អនឡាញ 2026',
        'cert.ai_lit_issuer': 'វគ្គសិក្សាអនឡាញ',
        'cert.ai_lit_desc': 'ការបណ្តុះបណ្តាលអនឡាញដែលផ្តោតលើការបង្កើតជំនាញភាសា AI មូលដ្ឋាន និងការយល់�់អំពីមូលដ្ឋានគ្រឹះពន្លឺម៉ាស៊ីនធ្វើការដោយខ្លួនឯងសម្រាប់ការអនុវត្តប្រចាំថ្ងៃ។',
        'cert.ai_lit_tag1': 'ភាសា AI',
        'cert.ai_lit_tag2': 'ជំនាញឌីជីថល',
        'cert.eqspire_title': 'អ្នកចូលរួម EQSpire',
        'cert.eqspire_issuer': 'កម្មវិធី EQSpire',
        'cert.eqspire_desc': 'វិញ្ញាបនបត្របានចូលរួមពីកម្មវិធី EQSpire ដែលផ្តោតលើភាពយល់ដឹងស្រាលគេច ៈ ការអភិវឌ្ឍវិជ្ជាជីវៈ និងជំនាញភាពជាម្ចាស់ដៃ។',
        'cert.eqspire_tag1': 'ភាពយល់ដឹងស្រាលគេច ៈ',
        'cert.eqspire_tag2': 'ភាពជាម្ចាស់ដៃ',
        'cert.yrdp_title': 'ការដឹកនាំ និងការអភិវឌ្ឍផ្ទាល់ខ្លួន - YRDP',
        'cert.yrdp_issuer': 'YRDP',
        'cert.yrdp_desc': 'វិញ្ញាបនបត្រពីកម្មវិធីដឹកនាំ និងការអភិវឌ្ឍផ្ទាល់ខ្លួននៃ YRDP ដែលគ្របដណ្តប់គោលការណ៍ដឹកនាំ ការអភិវឌ្ឍខ្លួនឯង និងជំនាញអភិវឌ្ឍវិជ្ជាជីវៈ។',
        'cert.yrdp_tag1': 'ភាពជាអ្នកដឹកនាំ',
        'cert.yrdp_tag2': 'ការអភិវឌ្ឍផ្ទាល់ខ្លួន',
        'cert.ifa_title': 'សិក្ខាសាត្រីដឹកនាំដែលផ្អែកលើទិន្នន័យ - IFA',
        'cert.ifa_issuer': 'IFA',
        'cert.ifa_desc': 'វិញ្ញាបនបត្រពីសិក្ខាសាត្រី IFA ដែលផ្តោតលើគោលការណ៍ដឹកនាំផ្អែកលើទិន្នន័យ ការសម្រេចចេស្សសាស្ត្រធម្មគ្រប់គ្រាប់ និងការអភិវឌ្ឍដឹកនាយ៉ាងយកចិត្តទុកដាក់។',
        'cert.ifa_tag1': 'ភាពជាអ្នកដឹកនាំ',
        'cert.ifa_tag2': 'ការវិភាគទិន្នន័យ',
        'cert.gender_title': 'ការបណ្តុះបណ្តាលភេទ និងភាពស្មើភាពឌីជីថល',
        'cert.gender_issuer': 'វគ្គបណ្តុះបណ្តាល',
        'cert.gender_desc': 'វិញ្ញាបនបត្របណ្តុះបណ្តាលដែលផ្តោតលើការជំរុញភេទស្មើភាពក្នុងបរិយាកាសឌីជីថល ទម្លាប់បច្ចេកវិទ្យារួមបញ្ចូល និងការបំពេញការខ្វះខាតឌីជីថល។',
        'cert.gender_tag1': 'ភេទស្មើភាព',
        'cert.gender_tag2': 'ការរួមបញ្ចូលឌីជីថល',
        'cert.safe_title': 'កម្មវិធីដៃគូសេវាអភិវឌ្ឍសេរីភាព Auscam SAFE Sister',
        'cert.safe_issuer': 'កម្មវិធីដៃគូសេវាអភិវឌ្ឍសេរីភាព Auscam',
        'cert.safe_desc': 'វិញ្ញាបនបត្របញ្ចប់កម្មវិធីពីនិយោគកម្ម SAFE Sister ដែលផ្តោតលើការបណ្តុះខ្លួន ការដឹងដឹងសុវត្ថិភាព និងជំនាញគាំទ្រសហគមន៍។',
        'cert.safe_tag1': 'ការបណ្តុះខ្លួន',
        'cert.safe_tag2': 'សហគមន៍',
        'cert.gymlish_title': 'ការវាយពាហុភពភាសា Gymlish',
        'cert.gymlish_issuer': 'Gymlish',
        'cert.gymlish_desc': 'វិញ្ញាបនបត្រវាយពាហុភពភាសាដែលបង្ហាញជំនាញទំនាក់ទំនងអង់គ្លេសតាមរយៈការប៉ាន់ស្មានដែលមានរចនាប័ទ្ម និងលំហាត់អនុវត្ត។',
        'cert.gymlish_tag1': 'ភាសាអង់គ្លេស',
        'cert.gymlish_tag2': 'ការទំនាក់ទំនង',
        'cert.pucifl_title': 'មូលដ្ឋានគ្រឹះនៃការរៀនភាសាអង់គ្លេស – PUC-IFL',
        'cert.pucifl_issuer': 'PUC-IFL',
        'cert.pucifl_desc': 'វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សាមូលដ្ឋានគ្រឹះរៀនភាសាអង់គ្លេសនៅ PUC-IFL ដែលផ្តោតលើជំនាញភាសាអង់គ្លេស និងជំនាញអាហារូបករណ៍មូលដ្ឋាន។',
        'cert.pucifl_tag1': 'ភាសាអង់គ្លេស',
        'cert.pucifl_tag2': 'ជំនាញអាហារ',
        'cert.ideathon_title': 'ការប្រកួតផ្តួចផ្តើមគំនិត Cambodia 2025',
        'cert.ideathon_issuer': 'Ideathon Cambodia',
        'cert.ideathon_desc': 'វិញ្ញាបនបត្រចូលរួមពី Ideathon Cambodia 2025 ដែលបង្ហាញការច្នៃប្រឌិត ការដោះស្រាយបញ្ហា និងការគិតរចនាស្ពន្ធគ្នាក្នុងបរិយាកាសប្រកួតគឺ។',
        'cert.ideathon_tag1': 'ការច្នៃប្រឌិត',
        'cert.ideathon_tag2': 'ការដោះស្រាយបញ្ហា',
        'cert.debate_title': 'ការប្រកួតនិយាយមុខងារទស្សនៈរបស់យុវជន',
        'cert.debate_issuer': 'ការប្រកួតនិយាយមុខងារ',
        'cert.debate_desc': 'វិញ្ញាបនបត្រទទួលស្គាល់ការចូលរួម និងការសម្តែងនៅក្នុងការប្រកួតនិយាយមុខងារទស្សនៈរបស់យុវជន ដែលបង្ហាញជំនាញគិតវិភាគ និងការនិយាយមុខងារសាធារណៈ។',
        'cert.debate_tag1': 'ការនិយាយមុខងារសាធារណៈ',
        'cert.debate_tag2': 'ការគិតវិភាគ',
        'cert.completion_title': 'វិញ្ញាបនបត្របញ្ចប់',
        'cert.completion_issuer': 'ផល សុភា',
        'cert.completion_desc': 'វិញ្ញាបនបត្រទូទៅបញ្ចប់ការដែលទទួលស្គាល់ការចូលរួមដោយជោគជ័យ និងវប្បធម៌ក្នុងកម្មវិធីអប់រំ ឬបណ្តុះបណ្តាលដែលមានឆន្នៃ។',
        'cert.completion_tag1': 'ការបញ្ចប់',
        'cert.completion_tag2': 'វប្បធម៌',
        'certificate.pnc_title': 'សញ្ញាបត្រ IT ពី PNC',
        'certificate.pnc_issuer': 'Passerelles Numeriques Cambodia',
        'certificate.pnc_date': '2025 - បច្ចុប្បន្ន',
        'certificate.pnc_desc': 'កម្មវិធីសិក្សារយៈពេលពីរឆ្នាំដ៏ទូលំទូលាយគ្រប់គ្រាប់ ផ្តោតលើការអភិវឌ្ឍកម្មវិធី បច្ចេកវិទ្យាវេប ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ និងជំនាញវិជ្ជាជីវៈសម្រាប់វិស័យបច្ចេកវិទ្យា។',
        'certificate.rwd_title': 'ការរចនាเว็บដែលឆ្លើយតប',
        'certificate.rwd_date': '2024',
        'certificate.rwd_desc': 'វិញ្ញាបនបត្រគ្រប់គ្រាប់អំពី HTML5, CSS3, មធ្យមភាពចូលដំណើរ គោលការណ៍ការរចនាឆ្លើយតប និងទម្រង់ CSS Grid/Flexbox។',
        'certificate.js_title': 'ការប្រតិបត្តិ JavaScript និងរាងដ្រាស្ទីតទិន្នន័យ',
        'certificate.js_date': '2024',
        'certificate.js_desc': 'វិញ្ញាបនបត្រអំពីមូលដ្ឋានគ្រឹះ JavaScript, ES6+, កាលិចិត្រ, រាងដ្រាស្ទីតទិន្នន័យ និងសត្វកម្មអនាមិក។',
        'certificate.sql_title': 'SQL និងការរចនាមូលដ្ឋានទិន្នន័យ',
        'certificate.sql_issuer': 'ការបណ្តុះបណ្តាល PNC',
        'certificate.sql_date': '2025',
        'certificate.sql_desc': 'ការបណ្តុះបណ្តាលអនុវត្តលើការរចនាមូលដ្ឋានទិន្នន័យទំនាប, សំណួរ SQL, ការធានាភាពប្រក្រតី និងវិធីសាស្ត្រកែលម្អមូលដ្ឋានទិន្នន័យ។',
        'certificate.git_title': 'Git និងការគ្រប់គ្រងកំណះ',
        'certificate.git_issuer': 'ការបណ្តុះបណ្តាល PNC',
        'certificate.git_date': '2025',
        'certificate.git_desc': 'ការបណ្តុះបណ្តាលអនុវត្តលើវិធីសាស្ត្រវាយផែន Git, របៀបចែកផ្ដាច់, ការសហការជាមួយ GitHub និងគោលការណ៍ល្អនៃការគ្រប់គ្រងកំណះ។',
        'certificate.web_title': 'ការអភិវឌ្ឍវេប Full-Stack',
        'certificate.web_issuer': 'ការបណ្តុះបណ្តាល PNC',
        'certificate.web_date': '2025',
        'certificate.web_desc': 'ការបណ្តុះបណ្តាលអភិវឌ្ឍវេបពីចុងទៅចុងលើ frontend, backend, ការរួមបញ្ចូល API និងវិធីសាស្ត្រធ្វើឱ្យដំណើរការ។',
        'home.hero_hello': 'សួស្តី ខ្ញុំឈ្មោះ',
        'home.hero_prefix': 'និស្សិត IT និងមានគោលបំណងជា',
        'home.hero_description': 'ខ្ញុំកំពុងសិក្សាផ្នែកព័ត៌មានវិទ្យានៅ Passerelles Numeriques Cambodia (PNC) និងកំពុងអភិវឌ្ឍជំនាញបច្ចេកទេសខ្លាំងក្នុងការអភិវឌ្ឍកម្មវិធី ព្រមទាំងជំនាញទន់សម្រាប់វិស័យបច្ចេកវិទ្យា។',
        'home.badge': 'និស្សិត IT PNC | 2025-បច្ចុប្បន្ន',
        'home.cta_projects': 'មើលគម្រោងរបស់ខ្ញុំ',
        'home.cta_cv': 'ទាញយក CV',
        'home.core_skills': 'ជំនាញស្នូលរបស់ខ្ញុំ',
        'home.cta_title': 'ត្រៀមធ្វើការជាមួយគ្នាមែនទេ?',
        'home.cta_text': 'ខ្ញុំកំពុងស្វែងរកឱកាសហាត់ការងារ និងគម្រោងសហការដើម្បីអនុវត្តជំនាញរបស់ខ្ញុំ និងរៀនពីអ្នកអភិវឌ្ឍដែលមានបទពិសោធន៍។',
        'home.cta_contact': 'ទាក់ទងមកខ្ញុំ',
        'about.page_title': 'អំពីខ្ញុំ',
        'about.page_subtitle': 'ស្គាល់ពីប្រវត្តិ ការអប់រំ និងគោលដៅអាជីពរបស់ខ្ញុំ',
        'about.intro_title': 'សួស្តី ខ្ញុំឈ្មោះ សុភា ផល',
        'about.intro_p1': 'ខ្ញុំជានិស្សិត IT ម្នាក់នៅ Passerelles Numeriques Cambodia (PNC) ដែលមានចំណាប់អារម្មណ៍ខ្លាំងលើការអភិវឌ្ឍកម្មវិធី និងបច្ចេកវិទ្យាវេប។ ការចាប់អារម្មណ៍លើរបៀបដែលប្រព័ន្ធឌីជីថលដំណើរការ បានជំរុញឱ្យខ្ញុំបន្តដំណើរទៅរកវិស្វកម្មកម្មវិធី។',
        'about.intro_p2': 'តាមរយៈកម្មវិធីសិក្សារយៈពេលពីរឆ្នាំដ៏តឹងរឹងរបស់ PNC ខ្ញុំកំពុងទទួលបានបទពិសោធន៍អនុវត្តជាក់ស្តែងជាមួយឧបករណ៍ និងវិធីសាស្ត្រអភិវឌ្ឍទំនើបៗ ព្រមទាំងអភិវឌ្ឍជំនាញដោះស្រាយបញ្ហាដែលសំខាន់សម្រាប់វិស័យបច្ចេកវិទ្យា។',
        'about.intro_p3': 'នៅពេលមិនសរសេរកូដ ខ្ញុំចូលចិត្តស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ រួមចំណែកក្នុងគម្រោង open-source និងចូលរួមសហគមន៍បច្ចេកវិទ្យាដើម្បីតាមដាននិន្នាការថ្មីៗក្នុងឧស្សាហកម្ម។',
        'about.education_title': 'ការអប់រំ',
        'about.edu1_title': 'កម្មវិធីសញ្ញាបត្រ IT',
        'about.edu1_desc': 'កម្មវិធីសិក្សារយៈពេលពីរឆ្នាំផ្តោតលើការអភិវឌ្ឍកម្មវិធី បច្ចេកវិទ្យាវេប ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ និងការអភិវឌ្ឍជំនាញវិជ្ជាជីវៈ។',
        'about.edu1_li1': 'មូលដ្ឋានគ្រឹះនៃការសរសេរកម្មវិធី (Python)',
        'about.edu1_li2': 'ការអភិវឌ្ឍវេប (HTML/CSS, JavaScript, PHP)',
        'about.edu1_li3': 'ប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ',
        'about.edu1_li4': 'គោលការណ៍វិស្វកម្មកម្មវិធី',
        'about.edu2_title': 'សញ្ញាបត្រមធ្យមសិក្សា',
        'about.edu2_desc': 'បញ្ចប់ការសិក្សាដោយផ្តោតលើវិទ្យាសាស្ត្រ និងគណិតវិទ្យា ដែលជួយអភិវឌ្ឍជំនាញវិភាគ និងដោះស្រាយបញ្ហាឱ្យកាន់តែរឹងមាំ។',
        'about.edu2_grade': 'ថ្នាក់ B',
        'about.values_title': 'តម្លៃរបស់ខ្ញុំ',
        'about.value1_title': 'ការរៀនសូត្របន្ត',
        'about.value1_desc': 'តែងតែស្វែងរកបច្ចេកវិទ្យាថ្មីៗ និងបង្កើនជំនាញរបស់ខ្ញុំតាមរយៈការអនុវត្ត និងការស្វែងយល់។',
        'about.value2_title': 'កិច្ចសហការ',
        'about.value2_desc': 'ជឿជាក់លើអំណាចនៃការធ្វើការជាក្រុម និងការទំនាក់ទំនងបើកចំហ ដើម្បីសម្រេចលទ្ធផលកាន់តែល្អ។',
        'about.value3_title': 'ផ្តោតលើគុណភាព',
        'about.value3_desc': 'ប្តេជ្ញាសរសេរកូដស្អាត មានប្រសិទ្ធភាព និងងាយថែទាំ ដែលអាចដោះស្រាយបញ្ហាពិតប្រាកដបាន។',
        'about.goals_title': 'គោលដៅអាជីព',
        'about.goal1_title': 'បញ្ចប់កម្មវិធី PNC',
        'about.goal1_desc': 'បញ្ចប់ការសិក្សាពី Passerelles Numeriques Cambodia ដោយមានជំនាញបច្ចេកទេសរឹងមាំ និងការត្រៀមខ្លួនសម្រាប់វិជ្ជាជីវៈ ព្រមទាំងបង្កើត Portfolio នៃគម្រោងមានអត្ថន័យ។',
        'about.goal2_title': 'ហាត់ការងារផ្នែកអភិវឌ្ឍកម្មវិធី',
        'about.goal2_desc': 'ទទួលបានឱកាសហាត់ការងារផ្នែកអភិវឌ្ឍកម្មវិធី ដើម្បីទទួលបានបទពិសោធន៍ជាក់ស្តែងលើ production code និងយល់ដឹងពី workflow ក្នុងឧស្សាហកម្ម។',
        'about.goal3_title': 'តួនាទី Junior Developer',
        'about.goal3_desc': 'ចាប់ផ្តើមអាជីពជាអ្នកអភិវឌ្ឍ Junior ដោយរួមចំណែកក្នុងគម្រោងមានអត្ថន័យ និងបន្តអភិវឌ្ឍខ្លួនជាវិជ្ជាជីវៈ។',
        'skills.page_title': 'ជំនាញរបស់ខ្ញុំ',
        'skills.page_subtitle': 'សមត្ថភាពបច្ចេកទេស និងចំណេះដឹងដែលអភិវឌ្ឍតាមកម្មវិធីរបស់ PNC',
        'skills.frontend_title': 'ការអភិវឌ្ឍ Frontend',
        'skills.responsive_design': 'ការរចនាឆបតាមអេក្រង់',
        'skills.backend_title': 'ការអភិវឌ្ឍ Backend',
        'skills.rest_api': 'អេគីអេភីអាយ REST',
        'skills.database_title': 'ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ',
        'skills.database_design': 'ការរចនាមូលដ្ឋានទិន្នន័យ',
        'skills.sql_queries': 'សំណួរ SQL',
        'skills.tools_title': 'ឧបករណ៍ និងបច្ចេកវិទ្យា',
        'skills.git_github': 'Git និង GitHub',
        'skills.linux_unix': 'Linux/Unix',
        'skills.stack_title': 'បណ្ដុំបច្ចេកវិទ្យា',
        'skills.stack_langs': 'ភាសាកម្មវិធី',
        'skills.stack_frameworks': 'Frameworks និង Libraries',
        'skills.stack_tools': 'ឧបករណ៍ និង Platforms',
        'skills.stack_ai': 'ឧបករណ៍ AI និង Agentic',
        'skills.languages_title': 'ភាសា',
        'skills.khmer_title': 'ភាសាខ្មែរ',
        'skills.khmer_desc': 'ជាភាសាមាតុភូមិដែលមានសមត្ថភាពទំនាក់ទំនងខ្លាំងក្នុងបរិយាកាសប្រចាំថ្ងៃ ការសិក្សា និងការសហការ។',
        'skills.english_title': 'ភាសាអង់គ្លេស',
        'skills.english_desc': 'មានសមត្ថភាពប្រើប្រាស់ក្នុងការអាន ការសរសេរ និងការនិយាយ សម្រាប់ការរៀនបច្ចេកទេស ការងារជាក្រុម និងការធ្វើបទបង្ហាញ។',
        'skills.soft_title': 'ជំនាញទន់',
        'skills.soft1_title': 'ការទំនាក់ទំនង',
        'skills.soft1_desc': 'ជំនាញទំនាក់ទំនងមាត់ និងសរសេរដែលមានប្រសិទ្ធភាព អភិវឌ្ឍតាមរយៈការធ្វើបទបង្ហាញ និងគម្រោងក្រុម។',
        'skills.soft2_title': 'ការងារជាក្រុម',
        'skills.soft2_desc': 'មានវិធីសហការក្នុងការដោះស្រាយបញ្ហា និងបទពិសោធន៍ក្នុងគម្រោងក្រុម និង pair programming។',
        'skills.soft3_title': 'ការដោះស្រាយបញ្ហា',
        'skills.soft3_desc': 'ការគិតវិភាគ និងវិធីសាស្ត្រដោយប្រព័ន្ធក្នុងការកែកំហុស និងដោះស្រាយបញ្ហាបច្ចេកទេស។',
        'skills.soft4_title': 'ការគ្រប់គ្រងពេលវេលា',
        'skills.soft4_desc': 'សមត្ថភាពក្នុងការកំណត់អាទិភាព និងបំពេញកាលកំណត់ ខណៈគ្រប់គ្រងគម្រោង និងទំនួលខុសត្រូវច្រើន។',
        'skills.soft5_title': 'ភាពជាអ្នកដឹកនាំ',
        'skills.soft5_desc': 'សមត្ថភាពក្នុងការណែនាំសកម្មភាពក្រុម គាំទ្រកិច្ចសហការ និងទទួលខុសត្រូវលើគោលដៅរួម។',
        'projects.page_title': 'គម្រោងរបស់ខ្ញុំ',
        'projects.page_subtitle': 'ជម្រើសគម្រោងសំខាន់ៗពីការសិក្សានៅ PNC និងការសាងសង់ផ្ទាល់ខ្លួន',
        'projects.stat_completed': 'គម្រោងបានបញ្ចប់',
        'projects.stat_pnc': 'គម្រោងសិក្សា PNC',
        'projects.stat_personal': 'គម្រោងផ្ទាល់ខ្លួន',
        'projects.filter_all': 'គម្រោងទាំងអស់',
        'projects.filter_web': 'ការអភិវឌ្ឍវេប',
        'projects.filter_pnc': 'គម្រោង PNC',
        'projects.filter_personal': 'គម្រោងផ្ទាល់ខ្លួន',
        'projects.chomnuoy_title': 'ប្រព័ន្ធ VC1 Chomnuoy',
        'projects.chomnuoy_desc': 'បានសាងសង់គម្រោង full-stack support system ដោយប្រើ Laravel, ReactJS, MySQL, Redis និង Jira។ បានធ្វើការលើការអភិវឌ្ឍជាក្រុម ការគ្រប់គ្រង repository និង workflow រវាង backend និង frontend ជាមួយ GitHub។',
        'projects.frontend_repo': 'Repo ផ្នែក Frontend',
        'projects.backend_repo': 'Repo ផ្នែក Backend',
        'projects.quiz_title': 'គេហទំព័រ Quiz អន្តរកម្ម',
        'projects.quiz_desc': 'បានបង្កើតគេហទំព័រ quiz ដែលមាន responsive UI, timer, score tracking និង feedback ភ្លាមៗ។ ប្រើ HTML, CSS, JavaScript, Bootstrap, Jira និង Git/GitHub។',
        'projects.news_title': 'កម្មវិធីវេបព័ត៌មានសិស្ស',
        'projects.news_desc': 'បានបង្កើតកម្មវិធី Student News ក្នុងរយៈពេល 2 សប្ដាហ៍ដោយប្រើ HTML, CSS, JavaScript, Flask, Python និង SQLite។ បានរចនា CMS សម្រាប់បង្កើត បោះពុម្ព និងបង្ហាញអត្ថបទដោយមាន UI ស្អាត។',
        'projects.portfolio_title': 'គេហទំព័រ Portfolio វិជ្ជាជីវៈ',
        'projects.portfolio_desc': 'បានរចនា និងអភិវឌ្ឍគេហទំព័រ portfolio វិជ្ជាជីវៈចាប់ពីគំនិតដល់ការដាក់ប្រើ។ បានបង្កើត layout responsive និង navigation ស្អាតដោយប្រើ HTML, CSS និង SASS។',
        'projects.team_title': 'គម្រោងអភិវឌ្ឍវេបជាក្រុម',
        'projects.team_desc': 'បានបង្កើតគេហទំព័រជាក្រុមដែល responsive ពេញលេញដោយប្រើ HTML5 និង CSS3។ បានអនុវត្ត clean semantic code, workflow របស់ Git/GitHub និង deploy លើ Vercel។',
        'projects.shop_title': 'គេហទំព័រ PNC Shop',
        'projects.shop_desc': 'បានរួមចំណែកក្នុងក្រុមសមាជិក 5 នាក់ ដើម្បីបង្កើតគេហទំព័រលក់កុំព្យូទ័រ ក្នុង challenge រយៈពេល 2 សប្ដាហ៍នៅ PNC។ បានផ្តោតលើ layout, styling និង content សម្រាប់ shop flow ដែលអាចប្រើបាន។',
        'projects.pos_title': 'ប្រព័ន្ធសម្រាប់ទូទៅ POS',
        'projects.pos_desc': 'បានបង្កើតប្រព័ន្ធ API សម្រាប់ទូទៅ POS ចាប់ពី 18 ឧសភា 2026 ដល់ 7 មិថុនា 2026 ក្នុងតួនាទីជា Team Coordinator & Backend Developer។ បានដឹកនាំក្រុមសមាជិក 2 នាក់ បង្កើតមុខងារគ្រប់គ្រងការបរិច្ចាគ និងមុខងារ full-stack ព្រមទាំងសម្របសម្រួលការសហការដោយប្រើ Git និង GitHub។',
        'projects.engagement_title': 'ឧបករណ៍ចូលរួមថ្នាក់រៀន',
        'projects.engagement_desc': 'បានដឹកនាំក្រុម Agile 6 នាក់ ដើម្បីបង្កើតការប្រើប្រាស់វេបសម្រាប់ថ្នាក់រៀនដោយប្រើ Laravel, Vue.js និង PostgreSQL (មករា 01, 2026 – បច្ចុប្បន្ន)។ បានអភិវឌ្ឍ RESTful APIs និងមុខងារអន្តរកម្ម រួមមាន Random Wheel, Quiz, Timer, Attendance និង Group Generator។ បានសហការជាមួយ Git និង GitHub និងបានធ្វើតាមវិធីសាស្ត្រ Agile Scrum។',
        'projects.gen_shop_title': 'GenShop ហាងលក់អុស',
        'projects.gen_shop_desc': 'បានបង្កើតការប្រើប្រាស់ហាងលក់អុសផ្នែកឯកជនដោយប្រើ Laravel, Vue.js និង MySQL។ គម្រោងនេះគាំទ្រ workflow សំខាន់ៗ រួមមានការរាយការណ៏ផ្ទាល់ខ្លួន ការផ្ទៀងផ្ទាត់អ្នកប្រើ និងការគ្រប់គ្រងកន្ត្រកទិញទំនិញ។',
        'projects.view_repo': 'មើល Repository',
        'projects.github_title': 'គម្រោងបន្ថែមនៅលើ GitHub',
        'projects.github_desc': 'មើលគម្រោង ការសាកល្បង និង coding challenges បន្ថែមទៀតនៅលើ GitHub។',
        'projects.github_repos': 'Repositories',
        'projects.github_commits': 'Commits',
        'projects.github_stars': 'Stars',
        'projects.github_cta': 'ចូលមើល GitHub របស់ខ្ញុំ',
        'experience.page_title': 'បទពិសោធន៍របស់ខ្ញុំ',
        'experience.page_subtitle': 'គម្រោងសិក្សា សកម្មភាព និងការអភិវឌ្ឍវិជ្ជាជីវៈ',
        'experience.timeline_title': 'Passerelles Numériques Cambodia (PNC)',
        'experience.item1_title': 'និស្សិតអភិវឌ្ឍវេប (អនុវត្ត)',
        'experience.item1_li1': 'សិក្សាមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍវេបក្នុងបរិយាកាសបណ្តុះបណ្តាលវិជ្ជាជីវៈ',
        'experience.item1_li2': 'បង្កើតគេហទំព័រ responsive ដោយប្រើ HTML, CSS, SASS និង JavaScript',
        'experience.item1_li3': 'ប្រើ Git និង GitHub សម្រាប់ version control និងការសហការជាក្រុម',
        'experience.item1_li4': 'រៀនមូលដ្ឋាន Backend ជាមួយ PHP, Python (Flask) និង MySQL',
        'experience.item1_li5': 'អនុវត្តការងារជាក្រុម ការគ្រប់គ្រងភារកិច្ច និងការទំនាក់ទំនងបច្ចេកទេស',
        'experience.item2_title': 'ក្លឹបវិទ្យាសាស្ត្រកុំព្យូទ័រ – គម្រោងសិក្សា',
        'experience.item2_li1': 'ចូលរួមអនុវត្តកូដរៀងរាល់សប្ដាហ៍ និងការពិភាក្សាជាក្រុម',
        'experience.item2_li2': 'សហការជាមួយនិស្សិតលើលំហាត់អភិវឌ្ឍវេបតូចៗ',
        'experience.item2_li3': 'បង្កើនជំនាញដោះស្រាយបញ្ហា និងការរៀនពីមិត្តភក្ដិ',
        'experience.item3_title': 'គម្រោងមូលដ្ឋានទិន្នន័យសិក្សា (អ្នកសម្របសម្រួលក្រុម)',
        'experience.item3_li1': 'រចនា ER diagrams និង relational schema សម្រាប់ប្រព័ន្ធបណ្ណាល័យ',
        'experience.item3_li2': 'អនុវត្តមូលដ្ឋានទិន្នន័យ MySQL ជាមួយតារាងដែលបាន normalize',
        'experience.item3_li3': 'បង្កើត interface មូលដ្ឋានដោយប្រើ HTML, CSS និង PHP',
        'experience.item3_li4': 'សរសេរឯកសារគម្រោង និងធ្វើបទបង្ហាញលទ្ធផលជូនមិត្តរួមថ្នាក់',
        'experience.technologies': 'បច្ចេកវិទ្យា៖',
        'experience.item4_title': 'គម្រោងមុខវិជ្ជា Web Programming',
        'experience.item4_li1': 'អភិវឌ្ឍគេហទំព័រ responsive ជាគម្រោងបញ្ចប់មុខវិជ្ជា',
        'experience.item4_li2': 'អនុវត្ត authentication និង session handling មូលដ្ឋាន',
        'experience.item4_li3': 'បង្កើត layout មានរចនាសម្ព័ន្ធ និង reusable components',
        'experience.item4_li4': 'ផ្តោតលើ clean code និងការឆបគ្នានៅលើឧបករណ៍ផ្សេងៗ',
        'experience.learnings_title': 'អ្វីដែលបានរៀន និងទទួលយក',
        'experience.learn1_title': 'កិច្ចសហការជាក្រុម',
        'experience.learn1_desc': 'បានរៀនពីសារៈសំខាន់នៃការទំនាក់ទំនង ការពិនិត្យកូដ និងការធ្វើការយ៉ាងមានប្រសិទ្ធភាពក្នុងបរិយាកាសក្រុម តាមរយៈគម្រោងក្រុម និងសកម្មភាពក្លឹប។',
        'experience.learn2_title': 'ការអភិវឌ្ឍវិជ្ជាជីវៈ',
        'experience.learn2_desc': 'ទទួលបានការស្គាល់ឧបករណ៍ workflow និង best practices ស្តង់ដារឧស្សាហកម្ម សម្រាប់ការអភិវឌ្ឍកម្មវិធី តាមរយៈកម្មវិធីសិក្សារបស់ PNC។',
        'experience.learn3_title': 'ការដោះស្រាយបញ្ហា',
        'experience.learn3_desc': 'អភិវឌ្ឍជំនាញវិភាគ និងដោះស្រាយបញ្ហាដោយរឹងមាំ តាមរយៈការកែកំហុសកូដស្មុគស្មាញ ការរចនា algorithm និងការបំពេញកិច្ចការលំបាកៗ។',
        'experience.learn4_title': 'ការគ្រប់គ្រងគម្រោង',
        'experience.learn4_desc': 'យល់ដឹងពីរបៀបគ្រប់គ្រងភារកិច្ច បំពេញកាលកំណត់ និងសម្របខ្លួនទៅនឹងតម្រូវការផ្លាស់ប្តូរ តាមរយៈបទពិសោធន៍គម្រោងជាក់ស្តែង។',
        'experience.goals_title': 'ផ្លូវអាជីព និងគោលដៅ',
        'experience.goal1_title': 'បញ្ចប់កម្មវិធី PNC (2026)',
        'experience.goal1_desc': 'បញ្ចប់ការសិក្សាពី Passerelles Numériques Cambodia ដោយមានមូលដ្ឋានរឹងមាំលើការអភិវឌ្ឍវេប និងជំនាញការងារជាក្រុម។',
        'experience.goal2_title': 'ហាត់ការងារអភិវឌ្ឍកម្មវិធី (2026)',
        'experience.goal2_desc': 'ទទួលបានបទពិសោធន៍ជាក់ស្តែងតាមរយៈការហាត់ការងារ និងរៀនពី workflow វិជ្ជាជីវៈ គុណភាពកូដ និងការសហការ។',
        'experience.goal3_title': 'តួនាទី Junior Developer (2027)',
        'experience.goal3_desc': 'ចាប់ផ្តើមអាជីពជាអ្នកអភិវឌ្ឍ Junior និងបន្តរីកចម្រើនតាមរយៈបទពិសោធន៍ជាក់ស្តែង និងការរៀនសូត្របន្ត។',
        'contact.page_title': 'ទាក់ទងមកខ្ញុំ',
        'contact.page_subtitle': 'មកពិភាក្សាអំពីឱកាស ឬសហការលើគម្រោងផ្សេងៗ',
        'contact.form_title': 'ផ្ញើសារមកខ្ញុំ',
        'contact.label_name': 'ឈ្មោះពេញ *',
        'contact.placeholder_name': 'ឈ្មោះរបស់អ្នក',
        'contact.label_email': 'អាសយដ្ឋានអ៊ីមែល *',
        'contact.placeholder_email': 'your.email@example.com',
        'contact.label_subject': 'ប្រធានបទ',
        'contact.placeholder_subject': 'ប្រធានបទសារ',
        'contact.label_message': 'សារ *',
        'contact.placeholder_message': 'សរសេរសាររបស់អ្នកនៅទីនេះ...',
        'contact.send_message': 'ផ្ញើសារ',
        'contact.required_field': 'វាលនេះត្រូវការបំពេញ',
        'contact.invalid_email': 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ',
        'contact.message_too_short': 'សារត្រូវមានយោងតែ 10 តួអក្សរឡើងទៅ',
        'contact.success_message': 'អរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។',
        'contact.error_message': 'សូមជួសជុនកំហុសខាងលើ និងព្យាយាមម្តងទៀត។',
        'contact.processing': 'កំពុងដំណើរការ...',
        'contact.info_title': 'ព័ត៌មានទំនាក់ទំនង',
        'contact.info_desc': 'សូមទាក់ទងមកខ្ញុំតាមរយៈមធ្យោបាយណាមួយខាងក្រោម។ ជាទូទៅ ខ្ញុំឆ្លើយតបក្នុងរយៈពេល 24 ម៉ោង។',
        'contact.method_email': 'អ៊ីមែល',
        'contact.email_cta': 'ផ្ញើអ៊ីមែល',
        'contact.method_phone': 'ទូរស័ព្ទ',
        'contact.phone_cta': 'ហៅមកខ្ញុំ',
        'contact.method_location': 'ទីតាំង',
        'contact.location_text': 'ភ្នំពេញ កម្ពុជា',
        'contact.location_note': 'បើកចំហសម្រាប់ឱកាស remote',
        'contact.method_education': 'ការអប់រំ',
        'contact.education_program': 'កម្មវិធីសញ្ញាបត្រ IT (2025-បច្ចុប្បន្ន)',
        'contact.social_title': 'ភ្ជាប់តាមបណ្ដាញសង្គម',
        'contact.social_desc': 'តាមដានខ្ញុំសម្រាប់ព័ត៌មានថ្មីៗអំពីគម្រោង និងដំណើរសរសេរកូដរបស់ខ្ញុំ។',
        'contact.faq_title': 'សំណួរដែលគេសួរញឹកញាប់',
        'contact.faq1_q': 'តើអ្នកមានសម្រាប់ឱកាសហាត់ការងារទេ?',
        'contact.faq1_a': 'បាទ/ចាស! ក្នុងនាមជានិស្សិត IT នៅ PNC ខ្ញុំកំពុងស្វែងរកឱកាសហាត់ការងារសម្រាប់ឆ្នាំ 2026។ ខ្ញុំអាចធ្វើបានទាំង part-time ក្នុងអំឡុងឆមាស និង full-time ក្នុងពេលសម្រាក។',
        'contact.faq2_q': 'តើអ្នកទទួលគម្រោងប្រភេទអ្វីខ្លះ?',
        'contact.faq2_a': 'ខ្ញុំផ្តោតលើគម្រោងអភិវឌ្ឍវេប ប៉ុន្តែក៏អាចធ្វើ full-stack applications ផងដែរ។ វារួមមានគេហទំព័រ web applications landing pages និង e-commerce solutions។',
        'contact.faq3_q': 'តើពេលណាអ្នករំពឹងថានឹងបញ្ចប់ការសិក្សា?',
        'contact.faq3_a': 'ខ្ញុំកំពុងដើរតាមផែនការបញ្ចប់ការសិក្សាពី Passerelles Numeriques Cambodia ក្នុងខែធ្នូ ឆ្នាំ 2026 ជាមួយសញ្ញាបត្រ IT ដែលផ្តោតលើការអភិវឌ្ឍកម្មវិធី។',
        'contact.faq4_q': 'តើអ្នកធ្វើការពីចម្ងាយ ឬនៅកន្លែងផ្ទាល់?',
        'contact.faq4_a': 'ខ្ញុំបើកចំហសម្រាប់ទាំងឱកាស remote និង on-site។ សម្រាប់ remote work ខ្ញុំមានបទពិសោធន៍ជាមួយឧបករណ៍សហការ និងមានកន្លែងធ្វើការផ្ទាល់ខ្លួន។',
        'footer.tagline_line1': 'និស្សិត IT នៅ Passerelles Numeriques Cambodia',
        'footer.tagline_line2': 'មានគោលបំណងក្លាយជា Software Developer',
        'footer.cta': 'តោះសាងសង់ជាមួយគ្នា',
        'footer.contact': 'ទំនាក់ទំនង',
        'footer.location': 'ភ្នំពេញ កម្ពុជា',
        'footer.available': 'មានស្រាប់សម្រាប់ឱកាសហាត់ការងារ',
        'footer.quick_links': 'តំណភ្ជាប់រហ័ស',
        'footer.connect': 'ភ្ជាប់ទំនាក់ទំនង',
        'footer.note': 'សូមមើលការងារថ្មីៗរបស់ខ្ញុំ និងទាក់ទងមកបានគ្រប់ពេល។',
        'footer.rights_prefix': '&copy; <span class="current-year">2026</span> Sophea Phal។',
        'footer.rights_suffix': 'រក្សាសិទ្ធិគ្រប់យ៉ាង។'
    }
};

// ========== NAVIGATION FUNCTIONS ==========

function initLanguage() {
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageTrigger = document.querySelector('.language-trigger');
    const languageOptions = document.querySelectorAll('.language-option');
    const storedLanguage = localStorage.getItem('language') || 'en';

    applyLanguage(storedLanguage);

    if (!languageSwitcher || !languageTrigger || languageOptions.length === 0) return;

    languageTrigger.addEventListener('click', function() {
        const isOpen = languageSwitcher.classList.toggle('open');
        languageTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const language = this.getAttribute('data-lang') || 'en';
            localStorage.setItem('language', language);
            applyLanguage(language);
            languageSwitcher.classList.remove('open');
            languageTrigger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', function(event) {
        if (!languageSwitcher.contains(event.target)) {
            languageSwitcher.classList.remove('open');
            languageTrigger.setAttribute('aria-expanded', 'false');
        }
    });
}

function applyLanguage(language) {
    const locale = i18nTranslations[language] ? language : 'en';
    const dictionary = i18nTranslations[locale];

    document.documentElement.lang = locale === 'km' ? 'km' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
            if (dictionary[key]) {
                if (dictionary[key].includes('<')) {
                    element.innerHTML = dictionary[key];
                } else {
                    element.textContent = dictionary[key];
                }
            }
        });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            element.setAttribute('placeholder', dictionary[key]);
        }
    });

    const languageTrigger = document.querySelector('.language-trigger');
    const languageCurrent = document.querySelector('.language-current');
    const languageOptions = document.querySelectorAll('.language-option');
    if (languageTrigger) {
        languageTrigger.setAttribute('aria-label', dictionary['nav.language']);
    }
    if (languageCurrent) {
        const langName = locale === 'km' ? 'Khmer' : 'English';
        languageCurrent.textContent = '';
        languageCurrent.setAttribute('data-lang', locale);
        languageCurrent.setAttribute('title', langName);
        languageCurrent.setAttribute('aria-label', langName);
    }
    if (languageOptions.length > 0) {
        languageOptions.forEach(option => {
            const optionLang = option.getAttribute('data-lang') || 'en';
            option.classList.toggle('active', optionLang === locale);
        });
    }

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        themeToggle.setAttribute(
            'aria-label',
            currentTheme === 'dark' ? dictionary['nav.theme_light'] : dictionary['nav.theme_dark']
        );
    }
}

// Mobile navigation toggle
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('type', 'button');

        const openMenu = () => {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            
            // Focus first nav link
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) setTimeout(() => firstLink.focus(), 100);
        };

        const closeMenu = () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            hamburger.focus();
        };

        hamburger.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !hamburger.contains(e.target) && 
                !navMenu.contains(e.target)) {
                closeMenu();
            }
        });

        // Keyboard: Escape key closes menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
}

// Dark mode toggle
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        updateToggle(theme);
    }

    function updateToggle(theme) {
        if (!themeToggle) return;
        const isDark = theme === 'dark';
        const locale = localStorage.getItem('language') || 'en';
        const dictionary = i18nTranslations[locale] || i18nTranslations.en;
        themeToggle.setAttribute('aria-label', isDark ? dictionary['nav.theme_light'] : dictionary['nav.theme_dark']);
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Highlight active menu item based on current page
function initActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        const normalizedLink = normalizeNavHref(linkPage);
        const normalizedCurrent = currentPage || 'index.html';

        // Remove active class from all links
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // Check if this link matches the current page
        if (normalizedLink === normalizedCurrent) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

function normalizeNavHref(href) {
    if (!href) return '';
    if (href === '#') return 'index.html';

    const cleanedHref = href.split('#')[0].split('?')[0].replace(/^\.\//, '');
    const fileName = cleanedHref.split('/').filter(Boolean).pop() || '';

    return fileName || 'index.html';
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 20) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ========== FORM VALIDATION ==========

function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        if (formGroup) {
            const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.display = 'block';
            errorElement.textContent = message;
            if (!formGroup.querySelector('.error-message')) {
                formGroup.appendChild(errorElement);
            }
        }
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        if (formGroup) {
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }
    }

    function getDictionary() {
        const locale = i18nTranslations[localStorage.getItem('language')] ? localStorage.getItem('language') : 'en';
        return i18nTranslations[locale];
    }

    function validateField(input) {
        const value = input.value.trim();
        const dictionary = getDictionary();

        if (!value) {
            showError(input, dictionary['contact.required_field']);
            return false;
        }

        if (input.type === 'email' && !emailRegex.test(value)) {
            showError(input, dictionary['contact.invalid_email']);
            return false;
        }

        if (input.id === 'message' && value.length < 10) {
            showError(input, dictionary['contact.message_too_short']);
            return false;
        }

        clearError(input);
        return true;
    }

    // Real-time validation on blur
    [nameInput, emailInput, messageInput].forEach(input => {
        if (input) {
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    validateField(input);
                }
            });

            input.addEventListener('input', () => {
                clearError(input);
            });
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        const fields = [nameInput, emailInput, messageInput];
        const dictionary = getDictionary();

        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            if (formMessage) {
                formMessage.textContent = dictionary['contact.success_message'];
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';

                contactForm.reset();

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }

            console.log('Form submitted successfully!');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Message:', messageInput.value);
        } else {
            if (formMessage) {
                formMessage.textContent = dictionary['contact.error_message'];
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        }
    });
}

// ========== ANIMATIONS ==========

function initAnimations() {
    // Fade-in animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });
    }

    // Add CSS for animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card {
            transition: all 0.3s ease;
        }
        
        .skill-progress {
            transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(styleSheet);
}

// ========== PROJECT FILTER ==========

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Get filter value
                const filterValue = this.getAttribute('data-filter');

                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');

                    if (filterValue === 'all' || !categories || categories.includes(filterValue)) {
                        card.style.display = 'block';

                        // Trigger reflow for animation
                        void card.offsetWidth;

                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';

                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// ========== SKILL ANIMATIONS ==========

function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');

    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const percent = progressBar.getAttribute('data-percent') || '80%';

                    // Animate the width
                    setTimeout(() => {
                        progressBar.style.width = percent;
                    }, 300);

                    // Stop observing after animation
                    skillObserver.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });

        // Set initial width to 0 and observe each bar
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            skillObserver.observe(bar);
        });
    }
}

// ========== STAT COUNTERS ==========

function initStatCounters() {
    const statNumbers = document.querySelectorAll('[data-counter][data-target], .stat-number[data-target]');

    if (statNumbers.length === 0) return;

    const formatValue = (value, suffix) => `${value.toLocaleString()}${suffix}`;

    const animateCounter = (element) => {
        const target = Number(element.getAttribute('data-target'));
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 1600;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(target * easedProgress);

            element.textContent = formatValue(currentValue, suffix);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = formatValue(target, suffix);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const statObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            animateCounter(entry.target);
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.4
    });

    statNumbers.forEach(statNumber => {
        const suffix = statNumber.getAttribute('data-suffix') || '';
        statNumber.textContent = formatValue(0, suffix);
        statObserver.observe(statNumber);
    });
}

// ========== HERO ROLE ROTATION ==========

function initHeroRoleRotation() {
    const roleElement = document.querySelector('.hero-role');

    if (!roleElement) return;

    const getRoles = () => {
        const locale = localStorage.getItem('language') || 'en';
        const source = locale === 'km'
            ? (roleElement.dataset.rolesKm || roleElement.dataset.rolesEn || '')
            : (roleElement.dataset.rolesEn || roleElement.dataset.rolesKm || '');

        return source
            .split(',')
            .map(role => role.trim())
            .filter(Boolean);
    };

    let roles = getRoles();

    if (roles.length === 0) return;

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = false;

    roleElement.textContent = roles[0];

    const tick = () => {
        roles = getRoles();
        if (roles.length === 0) return;
        roleIndex = roleIndex % roles.length;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex -= 1;
        } else {
            charIndex += 1;
        }

        roleElement.textContent = currentRole.slice(0, charIndex);

        let delay = isDeleting ? 55 : 95;

        if (!isDeleting && charIndex >= currentRole.length) {
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex <= 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 250;
        }

        window.setTimeout(tick, delay);
    };

    window.setTimeout(() => {
        isDeleting = true;
        tick();
    }, 1600);
}

// ========== HERO BACKGROUND CANVAS ==========

function initHeroBackgrounds() {
    const heroSections = Array.from(document.querySelectorAll('.hero, .page-hero'));

    if (heroSections.length === 0) return;

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const states = [];

    const makeParticles = (width, height, seed) => {
        const count = Math.max(42, Math.min(90, Math.round((width * height) / 22000)));
        const particles = [];

        for (let i = 0; i < count; i += 1) {
            const band = i % 3;
            particles.push({
                x: Math.random() * width,
                y: height * (0.08 + band * 0.18) + Math.random() * height * 0.12,
                baseY: height * (0.08 + band * 0.18),
                vx: (Math.random() * 0.08 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
                vy: Math.random() * 0.028 + 0.01,
                radius: Math.random() * 1.6 + 0.8,
                alpha: Math.random() * 0.55 + 0.35,
                phase: Math.random() * Math.PI * 2,
                sway: Math.random() * 18 + 8,
                seed,
            });
        }

        return particles;
    };

    const makeStems = (width, height, seed) => {
        const count = Math.max(26, Math.min(88, Math.round(width / 22)));
        const stems = [];

        for (let i = 0; i < count; i += 1) {
            stems.push({
                x: (i + Math.random() * 0.45) * (width / count),
                length: height * (0.14 + Math.random() * 0.48),
                phase: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.0012 + 0.0006,
                radius: Math.random() * 1.4 + 0.9,
                alpha: Math.random() * 0.7 + 0.25,
                seed,
            });
        }

        return stems;
    };

    const resizeState = (state) => {
        const { section, canvas, ctx } = state;
        const width = section.clientWidth;
        const height = section.clientHeight;

        if (!width || !height) return;

        state.width = width;
        state.height = height;
        state.dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * state.dpr);
        canvas.height = Math.round(height * state.dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
        state.particles = makeParticles(width, height, state.seed);
        state.stems = makeStems(width, height, state.seed);
    };

    const drawBackground = (ctx, width, height, section, time, seed) => {
        const homeHero = section.classList.contains('hero');
        const base = ctx.createLinearGradient(0, 0, 0, height);
        base.addColorStop(0, '#07162f');
        base.addColorStop(0.55, '#051426');
        base.addColorStop(1, '#040c1b');
        ctx.fillStyle = base;
        ctx.fillRect(0, 0, width, height);

        const drift = Math.sin(time * 0.00012 + seed) * width * 0.03;
        const driftY = Math.cos(time * 0.0001 + seed * 0.7) * height * 0.02;

        const glow = ctx.createRadialGradient(width * 0.52 + drift * 0.35, height * 0.78 + driftY, 0, width * 0.52, height * 0.78, Math.max(width, height) * 0.55);
        glow.addColorStop(0, 'rgba(14, 211, 255, 0.22)');
        glow.addColorStop(0.28, 'rgba(14, 211, 255, 0.08)');
        glow.addColorStop(1, 'rgba(14, 211, 255, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        const rightOrb = ctx.createRadialGradient(width * 0.92, height * 0.24, 0, width * 0.92, height * 0.24, width * 0.08);
        rightOrb.addColorStop(0, 'rgba(18, 224, 255, 0.36)');
        rightOrb.addColorStop(0.32, 'rgba(18, 224, 255, 0.16)');
        rightOrb.addColorStop(1, 'rgba(18, 224, 255, 0)');
        ctx.fillStyle = rightOrb;
        ctx.fillRect(0, 0, width, height);

        const lowerGlow = ctx.createRadialGradient(width * 0.18, height * 0.9, 0, width * 0.18, height * 0.9, width * 0.35);
        lowerGlow.addColorStop(0, 'rgba(8, 167, 255, 0.18)');
        lowerGlow.addColorStop(0.55, 'rgba(8, 167, 255, 0.08)');
        lowerGlow.addColorStop(1, 'rgba(8, 167, 255, 0)');
        ctx.fillStyle = lowerGlow;
        ctx.fillRect(0, 0, width, height);

        if (homeHero) {
            const diagonalGlow = ctx.createLinearGradient(0, height * 0.55, width, height * 0.85);
            diagonalGlow.addColorStop(0, 'rgba(0, 217, 255, 0)');
            diagonalGlow.addColorStop(0.45, 'rgba(0, 217, 255, 0.06)');
            diagonalGlow.addColorStop(0.58, 'rgba(0, 217, 255, 0.2)');
            diagonalGlow.addColorStop(1, 'rgba(0, 217, 255, 0)');
            ctx.fillStyle = diagonalGlow;
            ctx.beginPath();
            ctx.moveTo(0, height * 0.58);
            ctx.lineTo(width, height * 0.48);
            ctx.lineTo(width, height * 0.92);
            ctx.lineTo(0, height * 0.92);
            ctx.closePath();
            ctx.fill();
        }
    };

    const getWaveY = (x, width, height, time, seed, homeHero) => {
        const baseY = height * (homeHero ? 0.74 : 0.68);
        const amp = height * (homeHero ? 0.055 : 0.045);
        const freq = homeHero ? 1.45 : 1.55;
        const t = time * 0.00055;
        const norm = x / width;
        return baseY
            + Math.sin(norm * Math.PI * 2 * freq + t + seed) * amp
            + Math.sin(norm * Math.PI * 2 * 3.4 - t * 1.6 + seed * 0.4) * amp * 0.34
            + Math.cos(norm * Math.PI * 2 * 0.9 + t * 0.7) * amp * 0.16;
    };

    const drawWave = (ctx, width, height, time, seed, homeHero) => {
        const lineY = [];

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        const waveGradient = ctx.createLinearGradient(0, 0, width, 0);
        waveGradient.addColorStop(0, 'rgba(13, 185, 255, 0.15)');
        waveGradient.addColorStop(0.48, 'rgba(99, 230, 255, 0.96)');
        waveGradient.addColorStop(1, 'rgba(13, 185, 255, 0.18)');

        ctx.shadowColor = 'rgba(12, 210, 255, 0.42)';
        ctx.shadowBlur = 24;
        ctx.strokeStyle = 'rgba(0, 217, 255, 0.16)';
        ctx.lineWidth = homeHero ? 7 : 5;
        ctx.beginPath();

        for (let x = 0; x <= width; x += 8) {
            const y = getWaveY(x, width, height, time, seed, homeHero);
            lineY.push({ x, y });
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();

        ctx.shadowBlur = 14;
        ctx.strokeStyle = waveGradient;
        ctx.lineWidth = homeHero ? 2.3 : 1.9;
        ctx.beginPath();
        lineY.forEach((point, index) => {
            if (index === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(37, 177, 255, 0.42)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        lineY.forEach((point, index) => {
            const y = point.y + (homeHero ? 8 : 6);
            if (index === 0) ctx.moveTo(point.x, y);
            else ctx.lineTo(point.x, y);
        });
        ctx.stroke();

        ctx.fillStyle = 'rgba(0, 217, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(0, height);
        lineY.forEach(point => ctx.lineTo(point.x, point.y + (homeHero ? 8 : 6)));
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        return lineY;
    };

    const drawStems = (ctx, width, height, time, state, lineY) => {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const points = lineY.length > 1 ? lineY : null;

        state.stems.forEach((stem) => {
            const sway = Math.sin(time * stem.speed + stem.phase) * (stem.seed % 2 === 0 ? 8 : 12);
            const x = stem.x + sway;
            const index = points ? Math.max(0, Math.min(points.length - 1, Math.round((x / width) * (points.length - 1)))) : 0;
            const waveY = points ? points[index].y : height * 0.7;
            const maxTop = height * 0.18 + Math.sin(time * 0.0009 + stem.phase) * height * 0.02;
            const topY = Math.max(maxTop, waveY - stem.length * (0.6 + 0.4 * Math.sin(time * 0.0005 + stem.phase)));
            const alpha = stem.alpha * (0.55 + 0.45 * Math.sin(time * 0.0012 + stem.phase));

            const stemGradient = ctx.createLinearGradient(0, topY, 0, waveY);
            stemGradient.addColorStop(0, `rgba(110, 232, 255, ${alpha})`);
            stemGradient.addColorStop(1, 'rgba(10, 176, 255, 0)');

            ctx.strokeStyle = stemGradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, waveY);
            ctx.lineTo(x, topY);
            ctx.stroke();

            ctx.fillStyle = `rgba(110, 232, 255, ${Math.min(1, alpha + 0.1)})`;
            ctx.beginPath();
            ctx.arc(x, topY, stem.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    };

    const drawParticles = (ctx, width, height, time, state, homeHero) => {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        state.particles.forEach((particle) => {
            const pulse = 0.5 + 0.5 * Math.sin(time * 0.0014 + particle.phase);
            particle.x += particle.vx * (16 + pulse * 6);
            particle.y += particle.vy * (10 + pulse * 4);
            particle.x += Math.sin(time * 0.00035 + particle.phase) * 0.08;
            particle.y += Math.cos(time * 0.0002 + particle.phase) * 0.04;

            if (particle.x > width + 24) particle.x = -24;
            if (particle.x < -24) particle.x = width + 24;

            const waveLift = homeHero ? height * 0.2 : height * 0.14;
            if (particle.y > height * 0.92) particle.y = particle.baseY;
            if (particle.y < waveLift) particle.y = particle.baseY;

            const alpha = particle.alpha * (0.65 + pulse * 0.35);
            ctx.fillStyle = `rgba(110, 232, 255, ${alpha})`;
            ctx.shadowColor = 'rgba(0, 217, 255, 0.45)';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius * (0.8 + pulse * 0.3), 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    };

    const drawFrame = (time) => {
        states.forEach((state) => {
            const { canvas, ctx, width, height, section } = state;
            if (!width || !height) return;

            ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);
            drawBackground(ctx, width, height, section, time, state.seed);
            const waveLine = drawWave(ctx, width, height, time, state.seed, section.classList.contains('hero'));
            drawStems(ctx, width, height, time, state, waveLine);
            drawParticles(ctx, width, height, time, state, section.classList.contains('hero'));
        });
    };

    heroSections.forEach((section) => {
        let canvas = section.querySelector('canvas.hero-canvas, canvas.page-hero-canvas');

        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.className = section.classList.contains('hero') ? 'hero-canvas' : 'page-hero-canvas';
            section.insertBefore(canvas, section.firstChild);
        }

        const ctx = canvas.getContext('2d');
        const state = {
            section,
            canvas,
            ctx,
            width: 0,
            height: 0,
            dpr: 1,
            particles: [],
            stems: [],
            seed: Math.random() * Math.PI * 2,
        };

        resizeState(state);

        if ('ResizeObserver' in window) {
            state.resizeObserver = new ResizeObserver(() => resizeState(state));
            state.resizeObserver.observe(section);
        } else {
            window.addEventListener('resize', () => resizeState(state));
        }

        states.push(state);
    });

    if (states.length === 0) return;

    if (reducedMotion) {
        drawFrame(0);
        return;
    }

    let animationFrameId;
    const animate = (time) => {
        drawFrame(time);
        animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    window.addEventListener('beforeunload', () => {
        if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
        }
        states.forEach(state => {
            if (state.resizeObserver) {
                state.resizeObserver.disconnect();
            }
        });
    }, { once: true });
}

function initCertificateModal() {
    const modal = document.getElementById('certImageModal');
    if (!modal) return;

    const modalImg = document.getElementById('certModalImage');
    const closeBtn = modal.querySelector('.cert-image-modal-close');
    const wrappers = document.querySelectorAll('.cert-image-wrapper');

    function openModal(src) {
        modalImg.src = src;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            modalImg.src = '';
        }, 300);
    }

    wrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const src = wrapper.getAttribute('data-cert-src');
            if (src) openModal(src);
        });

        wrapper.setAttribute('tabindex', '0');
        wrapper.setAttribute('role', 'button');
        wrapper.setAttribute('aria-label', 'View certificate full size');

        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const src = wrapper.getAttribute('data-cert-src');
                if (src) openModal(src);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ========== FAQ ACCORDION ==========

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            // Make FAQ questions focusable and keyboard accessible
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');

            function toggleFAQ() {
                // Toggle active class on question
                question.classList.toggle('active');

                // Get the answer element
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');

                // Update ARIA state
                question.setAttribute('aria-expanded', isActive);

                // Toggle answer visibility
                if (isActive) {
                    answer.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.classList.remove('active');
                    answer.style.maxHeight = '0';
                }
            }

            question.addEventListener('click', toggleFAQ);
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ();
                }
            });
        });

        // Add CSS for FAQ transitions
        const faqStyle = document.createElement('style');
        faqStyle.textContent = `
            .faq-answer {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            
            .faq-answer.active {
                transition: max-height 0.5s ease;
            }
            
            .faq-question i {
                transition: transform 0.3s ease;
            }
            
            .faq-question.active i {
                transform: rotate(180deg);
            }

            .faq-question:focus-visible {
                outline: 2px solid rgba(37, 99, 235, 0.5);
                outline-offset: 2px;
                border-radius: 8px;
            }
        `;
        document.head.appendChild(faqStyle);
    }
}

// ========== UTILITY FUNCTIONS ==========

// Update current year in footer
function initCurrentYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();

            // Calculate position to scroll to
            const headerOffset = 80;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            // Smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL without reloading page
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        }
    });
});

// Add loading state to buttons when clicked
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.type === 'submit' || (this.tagName === 'A' && !this.getAttribute('href'))) {
            const originalText = this.innerHTML;
            const dictionary = i18nTranslations[localStorage.getItem('language')] ? i18nTranslations[localStorage.getItem('language')] : i18nTranslations['en'];
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + dictionary['contact.processing'];
            this.disabled = true;

            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 3000);
        }
    });
});

// Add hover effects to cards
document.querySelectorAll('.skill-card, .project-card, .value-card, .volunteer-card, .learning-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Re-initialize animations on resize
        initSkillAnimations();
    }, 250);
});

// Log page view (for analytics - you can replace with real analytics)
console.log(`Viewing page: ${window.location.pathname}`);

