import React from 'react'
import ServiceItem from './ServiceItem'
import ConsultIcon from './icons/ConsultIcon'
import DevIcon from './icons/DevIcon'
import DesignIcon from './icons/DesignIcon'


function ServiceList() {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Have a design ready to build? I can do that for you.',
            icon: <DevIcon />,
            book: 'https://calendly.com/ayubian/web-development-introduction-call',
        },
        {
            id: 2,
            title: 'Design',
            description: "Don't have a design? I can create a beautiful website in no time.",
            icon: <DesignIcon />,
            book: 'https://calendly.com/ayubian/design-introduction-call',
        },
        {
            id: 3,
            title: 'Consultancy',
            description: 'Got an idea? I can advice the best tech solutions for your product.',
            icon: <ConsultIcon />,
            book: 'https://calendly.com/ayubian/consultancy-introduction-call'
        },
    ]
  return (
    <>
    {services.map(service => {
        return <ServiceItem key={service.id} service={service} />
    })}
    </>
  )
}

export default ServiceList