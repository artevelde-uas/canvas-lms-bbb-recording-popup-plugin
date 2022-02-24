import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons/';
import { Heading } from '@instructure/ui-heading'


export default ({ label, title, url, icon }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <span className='ig-button'>
                <a
                    className={`btn btn-small icon-${icon}`}
                    title={title}
                    onClick={() => { setOpen(true) }}
                >
                    {label}
                </a>
            </span>
            <Modal
                variant='inverse'
                open={open}
                onDismiss={() => { setOpen(false) }}
                size='medium'
                label={title}
                shouldCloseOnDocumentClick
            >
                <Modal.Header>
                    <CloseButton
                        color="primary-inverse"
                        placement='end'
                        offset='medium'
                        variant='icon'
                        onClick={() => { setOpen(false) }}
                        screenReaderLabel='Close'
                    >
                        Close
                    </CloseButton>
                    <Heading>{title}</Heading>
                </Modal.Header>
                <Modal.Body padding='none'>
                    <iframe
                        src={url}
                        allow="fullscreen"
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
