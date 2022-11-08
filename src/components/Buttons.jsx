import React from 'react';
import { EmotionThemeProvider } from '@instructure/emotion';
import { theme } from '@artevelde-uas/canvas-lms-app';

import VideoModal from './VideoModal';
import StatsModal from './StatsModal';


export default ({ statsUrl, videoUrl, videoName }) => (
    <EmotionThemeProvider theme={theme}>
        {videoUrl && (
            <React.Fragment>
                <VideoModal url={videoUrl} />
                &nbsp;
            </React.Fragment>
        )}
        {statsUrl && (
            <React.Fragment>
                <StatsModal url={statsUrl} />
                &nbsp;
            </React.Fragment>
        )}
    </EmotionThemeProvider>
);
