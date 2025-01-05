import project1 from "../assets/projects/ecomWebsite.jpg";
import project2 from "../assets/projects/animatedWebsitePortfolio.jpg";
import project3 from "../assets/projects/netflixClone.jpg";
import project5 from "../assets/projects/snakeWaterGun.jpeg";
import project6 from "../assets/projects/bubbleGame.jpg";

export const HERO_CONTENT = 
`Hello! I'm Jyotirmoy Sharma, an aspiring DevOps Engineer with a strong foundation in networking and a growing expertise in DevOps tools and practices. Leveraging my experience in network infrastructure, Linux administration, and web development, I focus on building scalable, efficient, and user-centric solutions. I am passionate about optimizing workflows, automating processes, and driving innovation to enhance system performance and user experiences.`;

export const ABOUT_TEXT = `Proactive Network Engineer transitioning into
DevOps, with hands-on experience in managing
Linux-based networks and self-initiated DevOps
projects. Skilled in CI/CD pipelines,
containerization with Docker, and cloud platforms
like AWS. Adept at automating workflows,
improving deployment efficiency, and ensuring
system reliability. Passionate about leveraging
technical expertise to build scalable and
automated systems.:
DevOps Practices
In-depth knowledge of DevOps models and architecture to streamline development and operations.
Experienced in designing and implementing CI/CD pipelines using tools like Jenkins, SonarQube, and Trivy to ensure secure, high-quality code deployments.
Skilled in automating deployment processes, enhancing efficiency, and reducing errors.
Cloud Computing
Proficient in AWS Cloud services for scalable, resilient application deployments.
Experienced in leveraging AWS tools for monitoring, security, and resource management to maintain optimal performance.
Back-End Development
Proficient in Node.js and Express for building robust server-side applications.
Skilled in database management with MySQL and PostgreSQL for efficient data handling and storage.
Front-End Development
Expertise in HTML, CSS, and JavaScript, with a focus on modern frameworks like React to develop responsive and engaging user interfaces.
Linux Administration
Experienced in managing Linux environments, optimizing server performance, and enhancing application security.
Networking expertise informs efficient project integration, fortified security measures, and scalable solutions.`

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Network Engineer",
    company: "GA Digital Web word Pvt Ltd",
    description: `Managing and monitoring Linux-based networks supporting 30+
government offices under the National Informatics Centre, ensuring
uninterrupted service and high availability.
• Diagnosing and resolving complex network issues within NIC’s critical
systems to maintain system reliability and minimize downtime.
• Implementing and maintaining Linux-based network monitoring tools
to provide real-time insights into network performance for NIC’s
infrastructure.
• Collaborating with vendors to deploy optimized network solutions,
enhancing performance and uptime for government IT services.
• Introducing DevOps practices by automating deployment workflows
using Jenkins and Docker, streamlining processes and improving
efficiency in NIC’s development and operations workflows.`
    
  },
  {
    year: "2023 - 2024",
    role: "Network Engineer",
    company: "EbixCash Mobility Software India Ltd",
    description: `• Managing and monitoring Linux-based networks for 30+ government
offices under NIC, ensuring high availability and performance.
• Resolving network issues and maintaining critical infrastructure
reliability with minimal downtime.
• Implementing network monitoring tools for real-time insights into
performance metrics.
• Deploying and optimizing video conferencing systems for government
offices, facilitating seamless communication.
• Coordinating live programs like Chief Minister’s addresses or
Governor’s visits, ensuring flawless telecasts and technical support.
• Automating workflows with Jenkins and Docker, enhancing efficiency
and streamlining operations.`
    
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
