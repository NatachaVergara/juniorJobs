import classes from './Resources.module.scss'

const IndividualResource = ({ imgLink, title, description, link }) => {
  return (
    <div className={classes.card}>
      <a href={link}
        target="_blank"
        rel="noreferrer">
        {" "}
        <img src={imgLink}
         className={classes.img} 
         alt={`${title}`} />
      </a>

      <div className={classes.cardBody}>
        <h5 className={classes.cardTitle}>{title}</h5>
        <p className={classes.cardDesc}>{description}</p>
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
