import "./TeamPage.css";
import Image from 'next/image'; // Import Next.js Image component
import shubham from '../assets/shubham.jpg';
import pankaj from '../assets/pankaj.jpg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Team = () => {
  const teamMembers = [
    {
      name: "Shubham Chamoli",
      position: "founder",
      photo: shubham, // Correctly assigned imported image
    },
    {
      name: "Pankaj Sundriyal",
      position: "co-founder",
      photo: pankaj, // Correctly assigned imported image
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="team-page">
     
      <h1 className="team-title">Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.name}>
            <Image
              src={member.photo}
              alt={`${member.name}`}
              className="team-photo"
              width={150} // Set width for the image
              height={150} // Set height for the image
            />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Team;
