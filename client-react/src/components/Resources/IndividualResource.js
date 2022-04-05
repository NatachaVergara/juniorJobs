const IndividualResource = ({ imgLink, title, description, link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a href={link} target="_blank"
          rel="noreferrer">
        {" "}
        <img src={imgLink} className="card-img-top" alt={`${title} image`} />
      </a>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Go to
        </a>
      </div>
    </div>
  );
};

export default IndividualResource;
