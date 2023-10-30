import React from 'react'

import { Link } from 'react-router-dom'

// import img_whiteStroke from '#images/showcase-stroke.svg'
import Showcases from '../../../generics/Showcases';

const ShowcaseNews = () => {
    const showcases = [
        {title: "News & Articles", url: "News"}
      ];
    return (
        showcases.map((showcase, index) => (
            <Showcases key={ index } title={ showcase.title } url={ showcase.url } />
        ))
    )
}

export default ShowcaseNews