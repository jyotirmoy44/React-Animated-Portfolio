import project1 from "../assets/projects/ecomWebsite.jpg";
import project2 from "../assets/projects/animatedWebsitePortfolio.jpg";
import project3 from "../assets/projects/netflixClone.jpg";
import project5 from "../assets/projects/snakeWaterGun.jpeg";
import project6 from "../assets/projects/bubbleGame.jpg";

export const HERO_CONTENT = 
``
export const ABOUT_TEXT = `Hi!, I'm a Software Engineer transitioning into DevOps, I have
hands-on experience managing Linux-based networks,
optimizing system performance, and ensuring high
availability. I have developed and automated CI/CD
pipelines using Jenkins and GitLab CI, reducing
deployment time by 40%. Skilled in containerizing
applications with Docker and deploying them on AWS, I
have enhanced scalability and resource efficiency. My
expertise also includes automating workflows with shell
scripts and Ansible, minimizing manual effort and errors.
Additionally, I have implemented monitoring solutions like
Prometheus and Grafana, ensuring 99.9% system uptime.
Passionate about leveraging my technical skills to build
scalable, automated systems that improve deployment
efficiency and system reliability.`

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "GA Digital Web word Pvt Ltd",
    description: `Developed and maintained scalable web applications using the Laravel framework
and PHP.Designed, optimized, and managed relational databases like MySQL and
PostgreSQL, including writing queries, stored procedures, and migrations.
• Created RESTful APIs for seamless integration with third-party services and internal
systems.
• Conducted unit testing, debugging, and performance optimization to ensure high-
quality applications.
• Implemented security measures to protect applications against vulnerabilities like
SQL injection, XSS, and CSRF.Collaborated with cross-functional teams, including
front-end developers, designers, and product managers, to deliver user-focused
solutions.
• Utilized version control tools (e.g., Git) for code management and collaborative
development.
• Enhanced application performance through caching, indexing, and optimization
techniques.
• Automated deployment workflows using CI/CD pipelines for faster and more reliable
releases.Provided ongoing maintenance, support, and monitoring for production
systems to ensure reliability and availability`
    
  },
  {
    year: "2023 - 2024",
    role: "Software Developer",
    company: "EbixCash Mobility Software India Ltd",
    description: `•Designed, developed, and maintained scalable web and enterprise applications
using Java frameworks like Spring Boot and Hibernate.
• Implemented RESTful APIs and microservices architecture for efficient
communication between services.
• Worked with relational databases (MySQL, PostgreSQL) and NoSQL databases
(MongoDB), performing schema design, queries, and optimization.Conducted unit
testing with JUnit and integration tAs a Software Engineer transitioning into DevOps, I have
hands-on experience managing Linux-based networks,
optimizing system performance, and ensuring high
availability. I have developed and automated CI/CD
pipelines using Jenkins and GitLab CI, reducing
deployment time by 40%. Skilled in containerizing
applications with Docker and deploying them on AWS, I
have enhanced scalability and resource efficiency. My
expertise also includes automating workflows with shell
scripts and Ansible, minimizing manual effort and errors.
Additionally, I have implemented monitoring solutions like
Prometheus and Grafana, ensuring 99.9% system uptime.
Passionate about leveraging my technical skills to build
scalable, automated systems that improve deployment
efficiency and system reliabilityesting to ensure code quality and reliability.
• Automated build processes and dependency management using tools like Maven
and Gradle.
• Integrated DevOps practices, including setting up CI/CD pipelines using Jenkins,
GitLab CI/CD, or GitHub Actions for automated testing and deployment.
• Deployed Java applications on cloud platforms like AWS and managed environments
using Docker containers and Kubernetes orchestration.
• Utilized logging and monitoring tools (e.g., ELK Stack, Prometheus, Grafana) to
ensure application performance and resolve production issues.
• Ensured security and compliance by implementing secure coding practices and
automated vulnerability scans.
• Collaborated with cross-functional teams to implement agile methodologies,
participate in sprint planning, and deliver projects on time.`
    
  },
  
  {
    year: "2017-2023",
    role: "Network Engineer",
    company: "Wipro Limited",
    description: `Managed and monitored Linux-based networks for 30 government
offices, ensuring optimal performance, reliability, and uninterrupted
service delivery.
• Diagnosed and resolved complex network issues, maintaining critical
infrastructure stability and uptime.Implemented real-time network
monitoring tools, providing actionable insights to enhance system
performance.
• Gained hands-on experience with DevOps tools like Docker, Jenkins,
and AWS, focusing on automation, containerization, and CI/CD
pipelines.
• Collaborated with vendors to deploy and optimize network solutions,
improving overall efficiency.
• Leveraged Linux and networking expertise to transition into DevOps,
with a focus on building scalable and efficient systems.`
  },
  {
    year: "2015 - 2017",
    role: "Administrator",
    company: "Wipro Limited",
    description: `Monitored and managed Assam Secretariat's LAN, overseeing BSNL,
RailTel, and PGCIL network links from NIC-NOC-GHY to local
government offices across Guwahati and other districts in Assam.
Conducted daily ERP updates of network traffic, utilizing MRTG
graphs for analyzing data from both local and district links, ensuring
smooth communication between NIC-NOC-GHY and
regional offices.
Installed and configured routers, modems, and Nortel switches,
ensuring seamless network connectivity and performance across the
infrastructure.
Managed day-to-day operational issues, handled requests, and led project
tasks; resolved
escalated incidents, network problems, and outages within Service Level
Agreements (SLAs), while documenting solutions for future reference
and compliance`
  }
];

export const PROJECTS = [

  {
    title: "DevSecOps Pipeline",
    image: project1,
    description: "Developed a robust CI/CD pipeline ensuring secure application deployment using Jenkins, GitHub, SonarQube, and Trivy. Integrated SonarQube quality gates scans to maintain code quality and security standards throughout the deployment process, enhancing the overall security posture of the applications.",
    technologies: ["Jenkins", "GitHub", "SonarQube", "SonarQube quality Gate scan", "Trivy"],
  },
  {
    title: "Online Marketplace",
    image: project1,
    description: "Created aplatform enabling buyers and sellers to connect through product listings and detailed profiles. Integrated an escrow payment system to ensure secure transactions between users.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Stripe/Paypal"],
  },
  {
    title: "Jenkins Automation on EC2",
    image: project1,
    description: "Set up a CI/CD pipeline with Jenkins on AWS EC2, automating NodeJS application deployments. Integrated Docker for containerization, improving deployment efficiency by 40%, and Configured Nginx for Load balancing and reverse proxy to optimize performance.",
    technologies: ["Jenkins", "AWS EC2", "Docker", "Nginx"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description: "Created a robust e-commerce platform featuring user authentication, product catalog management, and a shopping cart. Utilized React.js for a dynamic frontend and Node.js with Express.js for backend services, ensuring seamless user interaction and secure data handling.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "React-Animated Portfolio",
    image: project2,
    description: "Developed a sleek portfolio website using React.js and hosted it on GitHub Pages. Connected MongoDB for managing backend data, creating a scalable and secure platform to effectively showcase projects and skills.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
  {
    title: "Netflix Clone",
    image: project3,
    description:
      "A Netflix clone is a web or mobile application that mimics the design and functionality of Netflix, the popular streaming service.",
    technologies: ["HTML", "CSS", "JavaSript", "Bootstrap"],
  },
  {
    title: "Snake, Water and Gun(Mini Desktop Game)",
    image: project5,
    description:
      `The desktop version of the Snake, Water, and Gun game is a digital adaptation of the classic hand game, where players use their mouse or keyboard to select one of three options: Snake, Water, or Gun.`,
      technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Bubble Game(Desktop Version)",
    image: project6,
    description:
    "A bubble game with numbers is a simple and engaging puzzle game where players aim to eliminate numbered bubbles from the screen by matching them according to specific rules.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Pub Shiva Nagar Path, Magzine, Borbari, Guwahati-781171",
  phoneNo: "+917086642632",
  email: "sharmajyotirmoy44@gmail.com",
};
