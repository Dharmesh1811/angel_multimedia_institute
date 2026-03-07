import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CRM_FORM_URL = 'https://angelcrm.angelmultimedia.com/forms/wtl/ea50c8f5a6a12344aff104daf5e9b632';

export default function InquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Popup */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-lg font-bold text-white">Get Your Free Spoken English Course Now</h1>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    >
                        <X className="h-4 w-4 text-white" />
                    </button>
                </div>

                {/* CRM iframe Form */}
                <div className="overflow-hidden">
                    <iframe
                        src={CRM_FORM_URL}
                        width="100%"
                        height="520"
                        frameBorder="0"
                        sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin"
                        allowFullScreen
                        title="Quick Inquiry Form"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
