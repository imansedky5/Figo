export const Card = ({ title, icon, info }) => {
  return (
    <div className="service-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};
