import "../styles/general.css";

const General = () => {
  return (
    <div className="general">
      <input id="name" placeholder="Name" />
      <input id="email" placeholder="Email" />
      <input id="phone" placeholder="Phone" />
      <input id="location" placeholder="City, State" />
    </div>
  );
};

export default General;
