export const Feature = ({ icon, title, info }) => {
  return (
    <div className="feature-container">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};
