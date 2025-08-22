import React from 'react';
import Button from '../../common/Button';

const ResultPreview = ({ onReset }) => {
    return (
        <div className="bg-green-50 rounded-lg p-6 text-center demo-step">
            <h4 className="font-medium mb-4 text-green-800">Your logo is ready!</h4>
            <div className="w-32 h-32 bg-custom-card rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600">LOGO</div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
                <button className="border border-custom bg-custom-card text-custom-primary hover:bg-custom-secondary px-4 py-2 rounded-lg transition-colors">
                    Download SVG
                </button>
                <button className="border border-custom bg-custom-card text-custom-primary hover:bg-custom-secondary px-4 py-2 rounded-lg transition-colors">
                    Download PNG
                </button>
                <button className="border border-custom bg-custom-card text-custom-primary hover:bg-custom-secondary px-4 py-2 rounded-lg transition-colors">
                    Social Pack
                </button>
            </div>
            <Button onClick={onReset} variant="secondary">
                Start Over
            </Button>
        </div>
    );
};

export default ResultPreview;