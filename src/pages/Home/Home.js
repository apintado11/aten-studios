import React from 'react';
import ToolCard from '../../components/tools/ToolCard';
import { TOOLS_DATA } from '../../utils/constants';


const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-custom-primary mb-4">
                        ATEN Studios
                        <br />
                        <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DIGITAL LAB
            </span>
                    </h1>
                    <p className="text-xl text-custom-secondary max-w-3xl mx-auto">
                        A collection of tools for creators, startups, and businesses.
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {TOOLS_DATA.map(tool => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;