import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading';


export default ({ url }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <span className='ig-button'>
                <a
                    className='btn btn-small icon-stats'
                    title='Statistics dashboard'
                    onClick={() => { setOpen(true); }}
                >
                    Statistics
                </a>
            </span>
            <Modal
                variant='inverse'
                open={open}
                onDismiss={() => { setOpen(false); }}
                size='small'
                label='Statistics dashboard'
                shouldCloseOnDocumentClick
            >
                <Modal.Header>
                    <CloseButton
                        color='primary-inverse'
                        placement='end'
                        offset='medium'
                        variant='icon'
                        onClick={() => { setOpen(false); }}
                        screenReaderLabel='Close'
                    >
                        Close
                    </CloseButton>
                    <Heading>Statistics dashboard</Heading>
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
