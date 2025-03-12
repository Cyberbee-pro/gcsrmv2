import React from 'react';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const ODPage = () => {
    const pdfUrl = "/OD_OH2.pdf";

    return (
        <div className="min-h-screen flex flex-col bg-bg_black text-white pb-40">
            <header className="py-6 px-4 sm:px-8 border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">On Duty (OD) List</h1>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                        <a
                            href={pdfUrl}
                            download
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-lg"
                        >
                            <FiDownload className="text-white" />
                            <span>Download PDF</span>
                        </a>
                        <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        >
                            <FiExternalLink className="text-white" />
                            <span>Open in New Tab</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <p className="text-lg text-gray-300">
                            View or download the latest On Duty list in PDF format.
                        </p>
                    </div>

                    <div className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-white">
                        <embed
                            src={pdfUrl}
                            type="application/pdf"
                            className="w-full h-[calc(100vh-220px)]"
                            style={{ minHeight: '500px' }}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ODPage;