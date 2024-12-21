const SkillsCard = ({titleValue, fadeSide, fadeDelay, icon}) => {
  return (
    <div
      title={titleValue}
      data-aos={fadeSide}
      data-aos-delay={fadeDelay}
      className="skills-card"
    >
      {icon}
    </div>
  );
};

export default SkillsCard;
