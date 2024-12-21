const ServicesCard = ({
  icon,
  fadeSide,
  servicesHeader,
  servicesDescription,
  delayTime
}) => {
  return (
    <div className="services-cards" data-aos-delay={delayTime} data-aos={fadeSide}>
      {icon}
      <p>{servicesHeader}</p>

      <p>{servicesDescription}</p>
    </div>
  );
};

export default ServicesCard;
