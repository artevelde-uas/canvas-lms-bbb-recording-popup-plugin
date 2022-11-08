import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading';

import __ from '../i18n';


export default ({ url }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <span className='ig-button'>
                <a
                    className='btn btn-small icon-stats'
                    title={__('statistics_dashboard')}
                    onClick={() => { setOpen(true); }}
                >
                    {__('statistics')}
                </a>
            </span>
            <Modal
                variant='inverse'
                open={open}
                onDismiss={() => { setOpen(false); }}
                size='small'
                label={__('statistics_dashboard')}
                shouldCloseOnDocumentClick
            >
                <Modal.Header>
                    <CloseButton
                        color='primary-inverse'
                        placement='end'
                        offset='medium'
                        variant='icon'
                        onClick={() => { setOpen(false); }}
                        screenReaderLabel={__('close')}
                    >
                        {__('close')}
                    </CloseButton>
                    <Heading>{__('statistics_dashboard')}</Heading>
                </Modal.Header>
                <Modal.Body padding='none'>
                    <iframe
                        src={url}
                        allow='fullscreen'
                        style={{
                            width: '100%',
                            height: '75vh',
                            border: 'none'
                        }}>
                    </iframe>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};
