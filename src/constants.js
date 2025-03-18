import amritalogo from './assets/amritalogo.png';
import vivekamlogo from './assets/vivekam_logo.png';
import trianzlogo from './assets/trianz.jpg'; 
import interncorizo from './assets/corizointern.png';
import ibmgit from './assets/ibm_git.jpg';
import ibmhtml from './assets/ibm_html.jpg';
import aws from './assets/aws.png';
import py from './assets/pythin.png';
import pb from './assets/pb.png';
import java from './assets/java.png';
import cpp from './assets/cpp.png';
import sql from './assets/sql.png'; 
import sql_c from './assets/sql_intermediate.jpg';

import linkedin from './assets/linkedin.png'; 
import leetcode from './assets/leetcode.png';
import insta from './assets/intsa.png'; 
import hacker from './assets/hacker.png';
import git from './assets/github.png'; 



export const techStack = [
  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "AWS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Linux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "TensorFlow", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "NumPy", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Keras", link: "https://raw.githubusercontent.com/valohai/ml-logos/master/keras.svg" },
  { name: "Pandas", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Scikit-learn", link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Matplotlib", link: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
  { name: "Seaborn", link: "https://seaborn.pydata.org/_images/logo-wide-lightbg.svg" },
  { name: "MySQL", link: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" },
  { name: "MongoDB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "MATLAB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
  { name: "HTML", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  { name: "JavaScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },


];

export const contactLinks = [
  { name: 'Instagram', url: insta, link: 'https://www.instagram.com/_.pravin.03_/' },
  { name: 'LinkedIn', url:linkedin , link: 'http://www.linkedin.com/in/pravinraj-a-k/' },
  
  
];

export const homeLinks = [
  { name: 'LinkedIn', url:linkedin , link: 'http://www.linkedin.com/in/pravinraj-a-k/' },
  { name: 'Github', url: git, link: 'https://github.com/Pravinraj-ai/' },
  { name: 'HackerRank', url:hacker , link: 'https://www.hackerrank.com/profile/perumalpravinraj' },
  { name: 'LeetCode', url: leetcode, link: 'https://leetcode.com/u/kutty03/' },
  
];

export const workexp = [
  {
    tLogo: trianzlogo, 
    role: "Software Product Engineer",
    company: "Trianz",
    duration: "Sep. 2024 - Present"
  },
];

export const degrees = [
  {
    collegeLogo: amritalogo, // replace with actual path
    degree: "B.Tech in Computer Science and Engineering specialization in Artificial Intelligence",
    university: "Amrita Vishwa Vidyapeetham, Coimbatore",
    duration: "2020 - 2024"
  },
  {
    collegeLogo: vivekamlogo,
    degree: "12th Standard - AISSCE (Higher Secondary)",
    university: "Vivekam CBSE School, Coimbatore",
    duration: "2019-2020"
  }
];

export const certifications = [
  {
    name: "Machine Learning Internship",
    issuer: "Corizo",
    date: "Issued Oct 2022",
    logo: interncorizo 
  },
  {
    name: "SQL (Intermidate)",
    issuer: "Hackerrank",
    date: "Issued Jul 2024",
    logo: sql_c 
  },
  {
    name: "Web Development",
    issuer: "Coursera",
    date: "Issued Aug 2023",
    logo: ibmhtml 
  },
  {
    name: "Git & Github Essentials",
    issuer: "Coursera",
    date: "Issued Aug 2023",
    logo: ibmgit 
  }
];

export const badges = [
  {
    name: "Cloud Essentials Badge",
    platform: "AWS",
    logo: aws, // replace with actual path
  },
  {
    name: "Python Gold Badge",
    platform: "HackerRank",
    logo: py, // replace with actual path
  },

  {
    name: "C++ Gold Badge",
    platform: "HackerRank",
    logo: cpp, // replace with actual path

  },
  {
    name: "Problem-Solving Gold Badge",
    platform: "HackerRank",
    logo: pb, // replace with actual path

  },
  {
    name: "Java Silver Badge",
    platform: "HackerRank",
    logo: java, // replace with actual path
  },
  {
    name: "SQL Silver Badge",
    platform: "HackerRank",
    logo: sql, // replace with actual path
  }
];
