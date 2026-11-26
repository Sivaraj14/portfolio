function SkillCategory({ title, skills }) {
  return (
    <article className="skill-card">
      <h3>{title}</h3>
      <div className="tag-list">
        {skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
      </div>
    </article>
  );
}

export default SkillCategory;
