import { useEffect } from 'react';

function TranscriptPage() {
    useEffect(() => {
        window.location.href = '/transcript.pdf';
    }, []);

    return null;
}

export default TranscriptPage;
