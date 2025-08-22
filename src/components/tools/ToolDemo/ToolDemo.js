import React from 'react';
import LogoGeneratorDemo from '../../demos/LogoGenerator';

const ToolDemo = ({ toolId }) => {
    const renderDemo = () => {
        switch(toolId) {
            case 'logo-generator':
                return <LogoGeneratorDemo />;
            case 'resume-builder':
                return <ResumeBuilderDemo />;
            case 'analytics-dashboard':
                return <AnalyticsDemo />;
            case 'portfolio-creator':
                return <PortfolioDemo />;
            default:
                return <GenericDemo toolId={toolId} />;
        }
    };

    return (
        <div className="tool-demo">
            {renderDemo()}
        </div>
    );
};

// Placeholder components for missing demos
const ResumeBuilderDemo = () => (
    <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4 text-custom-primary">Resume Builder Demo</h3>
        <p className="text-custom-secondary mb-6">Transform your resume in real-time</p>
        <div className="bg-custom-secondary rounded-lg p-8 mb-6">
            <p className="text-custom-secondary">Resume builder demo coming soon...</p>
        </div>
    </div>
);

const AnalyticsDemo = () => (
    <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4 text-custom-primary">Analytics Dashboard</h3>
        <p className="text-custom-secondary mb-6">Real-time website insights</p>
        <div className="bg-custom-secondary rounded-lg p-8 mb-6">
            <p className="text-custom-secondary">Analytics demo coming soon...</p>
        </div>
    </div>
);

const PortfolioDemo = () => (
    <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4 text-custom-primary">Portfolio Creator</h3>
        <p className="text-custom-secondary mb-6">Create stunning portfolios</p>
        <div className="bg-custom-secondary rounded-lg p-8 mb-6">
            <p className="text-custom-secondary">Portfolio demo coming soon...</p>
        </div>
    </div>
);

const GenericDemo = ({ toolId }) => {
    const toolName = toolId.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    return (
        <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4 text-custom-primary">{toolName} Demo</h3>
            <p className="text-custom-secondary mb-6">Interactive demo coming soon...</p>
            <div className="bg-custom-secondary rounded-lg p-8 mb-6">
                <p className="text-custom-secondary">Demo will be available here</p>
            </div>
        </div>
    );
};

export default ToolDemo;