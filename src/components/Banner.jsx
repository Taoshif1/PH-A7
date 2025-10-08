

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="banner">
      <div className="card in-progress">
        <span>In-Progress</span>
        {/* dynamic count from props */}
        <span className="count">{inProgressCount}</span>
      </div>
      <div className="card resolved">
        <span>Resolved</span>
        {/* dynamic count from props */}
        <span className="count">{resolvedCount}</span>
      </div>
    </section>
  );
};

export default Banner;
