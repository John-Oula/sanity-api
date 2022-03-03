// youtube.js
import React from 'react'
import Iframe from 'sanity-plugin-iframe-pane'


const Preview = ({value}) => {

    return (
        <div>
<iframe src={value.url} width="640" height="480" allow="autoplay"></iframe>
        </div>
        
    )
}

export default {
    name: 'googleDrive',
    type: 'object',
    title: 'Google Drive Video',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'Google Drive Link'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
}