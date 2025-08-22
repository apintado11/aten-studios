import React, { useState } from 'react';
import UploadStep from './UploadStep';
import StyleSelector from './StyleSelector';
import ResultPreview from './ResultPreview';
import { sleep } from '../../../utils/helpers';

const LogoGeneratorDemo = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleImageUpload = async (file) => {
        setUploadedImage(file);
        await sleep(1000);
        setCurrentStep(2);
    };

    const handleUseSample = async () => {
        setUploadedImage('sample');
        await sleep(1000);
        setCurrentStep(2);
    };

    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        await sleep(2000);
        setIsGenerating(false);
        setCurrentStep(3);
    };

    const handleReset = () => {
        setCurrentStep(1);
        setUploadedImage(null);
        setSelectedStyle(null);
        setIsGenerating(false);
    };

    return (
        <div className="space-y-8" id="logo-generator-demo">
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-4 text-custom-primary">
                    Try the Logo Generator
                </h3>
                <p className="text-custom-secondary mb-6">
                    Upload a sketch and watch AI create your professional logo
                </p>
            </div>

            {currentStep === 1 && (
                <UploadStep
                    onImageUpload={handleImageUpload}
                    onUseSample={handleUseSample}
                />
            )}

            {currentStep === 2 && (
                <StyleSelector
                    selectedStyle={selectedStyle}
                    onStyleSelect={handleStyleSelect}
                    onGenerate={handleGenerate}
                    isGenerating={isGenerating}
                />
            )}

            {currentStep === 3 && (
                <ResultPreview onReset={handleReset} />
            )}
        </div>
    );
};

export default LogoGeneratorDemo;