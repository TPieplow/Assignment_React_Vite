import React from 'react'


import Showcases from '../../../generics/Showcases';

const ShowcaseNews = () => {
    const showcases = [
        {title: "News & Articles", url: "/News", urlName: "News"}
      ];
    return (
        showcases.map((showcase, index) => (
            <Showcases
                key={ index }
                title={ showcase.title }
                url={ showcase.url }
                urlName={showcase.urlName}
            />
        ))
    )
}

export default ShowcaseNews