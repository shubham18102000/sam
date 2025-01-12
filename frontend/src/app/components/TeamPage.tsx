
import "./TeamPage.css";
import Footer from "./Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Shubham Chamoli",
      position: "CEO",
      photo: "https://via.placeholder.com/150?text=Shubham", // Replace with actual photo URL
    },
    {
      name: "Pankaj Sundriyal",
      position: "CFO",
      photo: "https://via.placeholder.com/150?text=Pankaj", // Replace with actual photo URL
    },
    {
      name: "Akansha Bisht",
      position: "CDO",
      photo: "https://via.placeholder.com/150?text=Akansha", // Replace with actual photo URL
    },
  ];

  return (
    <>
    <div className="team-page">
      <h1 className="team-title">Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.name}>
            <img
              src={member.photo}
              alt={`${member.name}`}
              className="team-photo"
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
