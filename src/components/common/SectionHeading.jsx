function SectionHeading({ number, title, highlight, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{number} / {title}</p>
        <h2>{title} <span>{highlight}</span></h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

export default SectionHeading;
