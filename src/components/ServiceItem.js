import React from 'react'


function ServiceItem({ service }) {
    const { id, title, description, icon } = service
    const classMapper = {
        1 : "service-01",
        2 : "service-02",
        3 : "service-03"
    }
    

  return (
    <div className={`about-service-box ${classMapper[id]}`}>
        <div className="about-service-icon">
          <div className="services-icon">
            {icon}
          </div>
        </div>
        <div className="about-service-description">
          <h3 className="about-service-title">{title}</h3>
          <p className="about-service-desc">
            {description}
          </p>
        </div>
        <a href='#get' className="about-service-cta">Get this service</a>
      </div>
  )
}

export default ServiceItem