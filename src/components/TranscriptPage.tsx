function TranscriptPage() {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* PDF Embed - takes up most of the viewport */}
                <div className="w-full h-[90vh] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                    <iframe
                        src="/transcript.pdf"
                        className="w-full h-full"
                        title="Academic Transcript"
                    />
                </div>

                {/* Fallback download link */}
                <div className="mt-4 text-center">
                    <a
                        href="/transcript.pdf"
                        download
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TranscriptPage;
