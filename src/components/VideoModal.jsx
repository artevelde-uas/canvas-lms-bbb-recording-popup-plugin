import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading'

import t from '../i18n';


export default ({ title, url, icon }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <span className='ig-button'>
                <a
                    className='btn btn-small icon-video'
                    title={t('video_player')}
                    onClick={() => { setOpen(true) }}
                >
                    {t('watch_video')}
                </a>
            </span>
            <Modal
                variant='inverse'
                open={open}
                onDismiss={() => { setOpen(false) }}
                size='large'
                label={t('video_player')}
                shouldCloseOnDocumentClick
            >
                <Modal.Header>
                    <CloseButton
                        color='primary-inverse'
                        placement='end'
                        offset='medium'
                        variant='icon'
                        onClick={() => { setOpen(false) }}
                        screenReaderLabel={t('close')}
                    >
                        {t('close')}
                    </CloseButton>
                    <Heading>{t('video_player')}</Heading>
                </Modal.Header>
                <Modal.Body padding='none'>
                    <iframe
                        src={url}
                        allow='fullscreen'
                        style={{
                            width: '100%',
                            height: '60vh',
                            border: 'none'
                        }}>
                    </iframe>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};
