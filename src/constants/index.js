import project1 from "../assets/projects/ecomWebsite.jpg";
import project2 from "../assets/projects/animatedWebsitePortfolio.jpg";
import project3 from "../assets/projects/netflixClone.jpg";
import project5 from "../assets/projects/snakeWaterGun.jpeg";
import project6 from "../assets/projects/bubbleGame.jpg";

export const HERO_CONTENT = 
`Hello! I'm Jyotirmoy Sharma, an emerging DevOps Engineer with a solid understanding of DevOps models and architecture. My technical journey began in the realm of networking, where I mastered the intricacies of network infrastructures and protocols. This strong foundation has uniquely positioned me to excel in both web development and DevOps practices.
PostgreSQL, and Linux administration, enabling me to create dynamic, user-centric web applications while ensuring efficient, scalable solutions. I am passionate about leveraging my diverse skill set to develop innovative solutions that enhance user experiences and drive project success.`;

export const ABOUT_TEXT = `As an emerging DevOps Engineer, I specialize in integrating development and operations to deliver seamless web experiences. My focus on DevOps principles enables efficient collaboration and continuous improvement across all stages of the software development lifecycle. My expertise spans various domains:

DevOps Practices:

Deep understanding of DevOps models and architecture to streamline development and operations.
Proven experience in designing and implementing CI/CD pipelines, automating deployment processes to enhance efficiency and reduce errors.
Familiarity with tools such as Jenkins, SonarQube, and Trivy to ensure secure, high-quality code deployment.
Cloud Computing:

Proficient in AWS Cloud services, enabling scalable and resilient application deployments.
Utilization of AWS tools for monitoring, security, and resource management to maintain optimal performance.
Back-End Development:

Proficient in server-side technologies such as Node.js and Express, ensuring robust application functionality.
Skilled in database management with MySQL and PostgreSQL, focusing on efficient data handling and storage.
Front-End Development:

Mastery of HTML, CSS, and JavaScript.
Focus on modern frameworks like React to create visually captivating and responsive user interfaces.
Linux Administration:

Competent in managing Linux environments, enhancing application performance and security through effective server management.
A strong networking background informs my approach to project integration, optimizing performance, fortifying security measures, and scaling solutions effectively.
Throughout my journey, I have led full-stack projects from conception and design to deployment and ongoing maintenance, prioritizing a holistic development approach that emphasizes user experience alongside technical excellence. My commitment to DevOps principles drives my passion for continuous learning and innovation in technology.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Network & DevOps Engineer",
    company: "EbixCash Mobility Software India Ltd",
    description: `Transitioned into DevOps engineering as per client requirements,
learning and applying various DevOps tools and methodologies.
Developed and maintained CI/CD pipelines using Jenkins, GitHub,
SonarQube, and other DevSecOps methodologies to automate
software delivery and enhance deployment efficiency.
Integrated OWASP dependency checks, SonarQube quality gate scans,
and Trivy filesystem scans to ensure secure and high-quality code
deployment.
Successfully automated deployment processes, improving delivery times
and reducing manual errors.
Utilized GitHub for version control, managing code repositories,
performing branching and merging strategies, and collaborating on
large-scale projects.
Delivered end-to-end engineering and installation of route-based IP
network solutions, ensuring optimal performance and reliability.
Performed advanced troubleshooting on Juniper and Cisco systems,
utilizing packet analysis tools to efficiently identify and resolve network
issues.
Monitored network capacity and performance, diagnosing and resolving
bottlenecks to maintain seamless connectivity.`
    
  },
  
  {
    year: "2017-2023",
    role: "Network Engineer",
    company: "Wipro Limited",
    description: `As a Network Engineer, I monitored network capacity and performance in
a Linux environment, diagnosing and resolving complex issues across nearly
30 government offices. In addition, I assisted in the implementation and
support of Linux-based network monitoring tools, ensuring real-time
tracking of network health and performance. Collaborating with external
vendors, I helped evaluate and deploy optimal solutions for network
performance improvements, leveraging Linux-based tools for monitoring
and configuration.
During this time, I also provided support in various DevOps tools, which
sparked my interest in the field. I actively worked on developing my skills in
areas like automation, containerization, and CI/CD pipelines. This
hands-on experience encouraged me to transition my career into DevOps,
where I now specialize in modern technologies such as Docker, Jenkins, and
cloud platforms like AWS, alongside my strong networking foundation.`
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
