import React from 'react';

const UploadStep = ({ onImageUpload, onUseSample }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onImageUpload(file);
        }
    };

    return (
        <div className="bg-custom-secondary rounded-lg p-6 demo-step active">
            <h4 className="font-medium mb-4 text-custom-primary">Step 1: Upload your sketch or reference</h4>
            <div className="border-2 border-dashed border-custom rounded-lg p-8 text-center">
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="logo-upload"
                    onChange={handleFileChange}
                />
                <label htmlFor="logo-upload" className="cursor-pointer">
                    <div className="w-16 h-16 bg-custom-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-custom-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                    <p className="text-custom-secondary">Click to upload or drag and drop</p>
                    <p className="text-sm text-custom-secondary mt-2">Or try a sample image</p>
                </label>
                <button
                    type="button"
                    onClick={onUseSample}
                    className="mt-2 text-blue-500 hover:text-blue-600 text-sm"
                >
                    Use Sample
                </button>
            </div>
        </div>
    );
};

export default UploadStep;