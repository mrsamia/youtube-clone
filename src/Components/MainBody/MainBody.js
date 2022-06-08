import React from 'react';
import data from './Data';
import Items from './Items';

function MainBody(props) {
    return data.map((e) => {
        return (
            <Items
            img={e.vedioUrl}
            title={e.title}
            channel={e.channel}
            views={e.views}
            time={e.time}
            />
        );
    })
}

export default MainBody;