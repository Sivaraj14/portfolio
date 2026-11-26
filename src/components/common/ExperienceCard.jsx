function ExperienceCard({ item }) {
  return (
    <article className="experience-card">
      <div className="experience-top">
        <div>
          <p className="experience-date">{item.duration}</p>
          <h3>{item.role}</h3>
          <p className="experience-org">{item.organization}</p>
        </div>
      </div>
      <p className="experience-description">{item.description}</p>
      <div className="tag-list">{item.technologies.map((technology) => <span key={technology} className="tag">{technology}</span>)}</div>
    </article>
  );
}

export default ExperienceCard;
