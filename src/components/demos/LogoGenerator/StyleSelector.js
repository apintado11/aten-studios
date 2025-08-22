import React from 'react';
import Button from '../../common/Button';

const StyleSelector = ({ selectedStyle, onStyleSelect, onGenerate, isGenerating }) => {
    const styles = [
        { id: 'minimalist', name: 'Minimalist' },
        { id: 'corporate', name: 'Corporate' },
        { id: 'creative', name: 'Creative' }
    ];

    return (
        <div className="bg-custom-secondary rounded-lg p-6 demo-step">
            <h4 className="font-medium mb-4 text-custom-primary">Step 2: Choose your style</h4>
            <div className="grid grid-cols-3 gap-4 mb-6">
                {styles.map(style => (
                    <button
                        key={style.id}
                        onClick={() => onStyleSelect(style.id)}
                        className={`style-option p-4 rounded-lg border-2 transition-colors ${
                            selectedStyle === style.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-custom hover:border-gray-300'
                        }`}
                    >
                        <div className="w-16 h-16 bg-custom-card rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <span className="text-xs text-custom-secondary">{style.name}</span>
                        </div>
                        <p className="text-sm font-medium text-custom-primary">{style.name}</p>
                    </button>
                ))}
            </div>
            {selectedStyle && (
                <div className="text-center">
                    <Button
                        onClick={onGenerate}
                        loading={isGenerating}
                        variant="primary"
                    >
                        Generate My Logo
                    </Button>
                </div>
            )}
        </div>
    );
};

export default StyleSelector;