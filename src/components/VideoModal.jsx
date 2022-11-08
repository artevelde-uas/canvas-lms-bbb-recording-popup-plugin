import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading'

import __ from '../i18n';


export default ({ title, url, icon }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <span className='ig-button'>
                <a
                    className='btn btn-small icon-video'
                    title={__('video_player')}
                    onClick={() => { setOpen(true) }}
                >
                    {__('watch_video')}
                </a>
            </span>
            <Modal
                variant='inverse'
                open={open}
                onDismiss={() => { setOpen(false) }}
                size='large'
                label={__('video_player')}
                shouldCloseOnDocumentClick
            >
                <Modal.Header>
                    <CloseButton
                        color='primary-inverse'
                        placement='end'
                        offset='medium'
                        variant='icon'
                        onClick={() => { setOpen(false) }}
                        screenReaderLabel={__('close')}
                    >
                        {__('close')}
                    </CloseButton>
                    <Heading>{__('video_player')}</Heading>
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
