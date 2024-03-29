import { router, dom } from '@artevelde-uas/canvas-lms-app';
import React from 'react';
import ReactDOM from 'react-dom';

import Buttons from './components/Buttons';

import __ from './i18n';


export default function () {
    router.onRoute('courses.conferences', () => {
        dom.onElementAdded('li.recording', element => {
            const statsLink = element.querySelector('[href*="/statistics/"]');
            const videoLink = element.querySelector('[href*="/capture/"]');
            const videoName = element.querySelector('.ig-details > span').innerText;

            // Create the container element
            const container = document.createElement('span');

            // Append the container after the info element
            element.querySelector('.ig-info').after(container);

            // Render the component
            ReactDOM.render(React.createElement(Buttons, {
                videoName,
                statsUrl: statsLink?.href,
                videoUrl: videoLink?.href
            }), container);

            // Remove the links
            statsLink && statsLink.remove();
            videoLink && videoLink.remove();
        });

    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
