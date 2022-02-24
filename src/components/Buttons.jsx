import React from 'react';
import { EmotionThemeProvider } from '@instructure/emotion';
import { theme } from '@artevelde-uas/canvas-lms-app';

import Modal from './Modal';


export default ({ name, statsUrl, videoUrl }) => (
    <EmotionThemeProvider theme={theme}>
        {videoUrl && (
            <React.Fragment>
                <Modal label='Video' title='Video player' url={videoUrl} icon='video' />
                &nbsp;
            </React.Fragment>
        )}
        {statsUrl && (
            <React.Fragment>
                <Modal label='Statistics' title='Statistics dashboard' url={statsUrl} icon='stats' />
                &nbsp;
            </React.Fragment>
        )}
    </EmotionThemeProvider>
);
