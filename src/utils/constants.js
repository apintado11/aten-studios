export const TOOLS_DATA = [
    {
        id: 'logo-generator',
        title: 'Logo Generator',
        description: 'Create a unique logo for your brand.',
        iconColor: 'bg-pink-500',
        buttonText: 'Generate',
        category: 'design',
        hook: 'From sketch to production-ready logo in minutes',
        longDescription: 'Create professional logos with AI-powered design assistance and vector optimization.',
        features: [
            {
                title: 'Vector clean-up from references',
                description: 'Upload any reference image and get clean vector output'
            },
            {
                title: 'Palette & typography presets',
                description: 'Professional color schemes and font combinations'
            },
            {
                title: 'Social pack export',
                description: 'Get PNG/SVG/favicon in all the sizes you need'
            },
            {
                title: 'Professional design templates',
                description: 'Choose from minimalist, corporate, or creative styles'
            }
        ],
        cta: 'Design my logo'
    },
    {
        id: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        description: 'Track your website\'s performance.',
        iconColor: 'bg-blue-500',
        buttonText: 'View',
        category: 'analytics',
        hook: 'Comprehensive website analytics in one beautiful dashboard',
        longDescription: 'Track performance, understand users, and make data-driven decisions.',
        features: [
            {
                title: 'Real-time visitor tracking',
                description: 'See who\'s on your site right now and what they\'re doing'
            },
            {
                title: 'Conversion funnel analysis',
                description: 'Identify where visitors drop off in your sales process'
            },
            {
                title: 'Custom event tracking',
                description: 'Track any user action that matters to your business'
            },
            {
                title: 'Automated reporting',
                description: 'Get weekly and monthly reports delivered to your inbox'
            }
        ],
        cta: 'View my analytics'
    },
    {
        id: 'resume-builder',
        title: 'Resume Builder',
        description: 'Build a professional resume',
        iconColor: 'bg-orange-500',
        buttonText: 'Build',
        category: 'productivity',
        hook: 'Turn your plain resume into a designer-grade PDF in 60 seconds',
        longDescription: 'Professional resume formatting with AI-powered layout optimization.',
        features: [
            {
                title: 'Pixel-perfect layout matching',
                description: 'Upload any template and match its design exactly'
            },
            {
                title: 'Automatic content optimization',
                description: 'AI adjusts font/color harmony and content length'
            },
            {
                title: 'Side-by-side preview',
                description: 'See before/after with one-click download'
            },
            {
                title: 'ATS-friendly formatting',
                description: 'Ensure your resume passes applicant tracking systems'
            }
        ],
        cta: 'Make my resume look senior-ready'
    },
    {
        id: 'portfolio-creator',
        title: 'Portfolio Creator',
        description: 'Showcase your work online',
        iconColor: 'bg-purple-500',
        buttonText: 'Create',
        category: 'design',
        hook: 'Build stunning portfolios that get you hired',
        longDescription: 'Create professional portfolios with drag-and-drop simplicity.',
        features: [
            {
                title: 'Responsive templates',
                description: 'Mobile-first designs that look great everywhere'
            },
            {
                title: 'Custom domain support',
                description: 'Use your own domain for professional branding'
            },
            {
                title: 'SEO optimization',
                description: 'Built-in SEO tools to help you get discovered'
            },
            {
                title: 'Analytics integration',
                description: 'Track visitor engagement and optimize your content'
            }
        ],
        cta: 'Create my portfolio'
    },
    {
        id: 'image-editor',
        title: 'Image Editor',
        description: 'Edit and enhance your photos',
        iconColor: 'bg-teal-500',
        buttonText: 'Edit',
        category: 'media',
        hook: 'Professional photo editing in your browser',
        longDescription: 'Powerful image editing tools without the complexity.',
        features: [
            {
                title: 'Advanced filters',
                description: 'Professional-grade filters and adjustments'
            },
            {
                title: 'Background removal',
                description: 'AI-powered background removal with one click'
            },
            {
                title: 'Batch processing',
                description: 'Edit multiple images at once to save time'
            },
            {
                title: 'Format conversion',
                description: 'Convert between PNG, JPG, WebP and more'
            }
        ],
        cta: 'Start editing'
    },
    {
        id: 'payment-integrations',
        title: 'Payment Integrations',
        description: 'Set up payments on your site',
        iconColor: 'bg-blue-500',
        buttonText: 'Set Up',
        category: 'business',
        hook: 'Accept payments in minutes, not weeks',
        longDescription: 'Simple payment integration for any website or application.',
        features: [
            {
                title: 'Multiple payment methods',
                description: 'Support for cards, digital wallets, and more'
            },
            {
                title: 'Subscription billing',
                description: 'Automated recurring payments and invoicing'
            },
            {
                title: 'Fraud protection',
                description: 'Enterprise-grade security and fraud detection'
            },
            {
                title: 'Global coverage',
                description: 'Accept payments from customers worldwide'
            }
        ],
        cta: 'Set up payments'
    },
    {
        id: 'code-generator',
        title: 'Code Generator',
        description: 'Generate code snippets',
        iconColor: 'bg-teal-500',
        buttonText: 'Generate',
        category: 'development',
        hook: 'AI-powered code generation for any framework',
        longDescription: 'Generate production-ready code for your projects.',
        features: [
            {
                title: 'Multiple languages',
                description: 'Support for React, Vue, Angular, and more'
            },
            {
                title: 'Best practices',
                description: 'Generated code follows industry standards'
            },
            {
                title: 'Custom templates',
                description: 'Create and save your own code templates'
            },
            {
                title: 'Export options',
                description: 'Download as files or copy to clipboard'
            }
        ],
        cta: 'Generate code'
    },
    {
        id: 'ai-writer',
        title: 'AI Writer',
        description: 'Generate content with AI',
        iconColor: 'bg-orange-500',
        buttonText: 'Write',
        category: 'content',
        hook: 'Professional content writing powered by AI',
        longDescription: 'Create compelling content for blogs, marketing, and more.',
        features: [
            {
                title: 'Multiple content types',
                description: 'Blog posts, emails, social media, and more'
            },
            {
                title: 'Tone adjustment',
                description: 'Professional, casual, friendly, or custom tones'
            },
            {
                title: 'SEO optimization',
                description: 'Built-in keyword optimization for better rankings'
            },
            {
                title: 'Plagiarism check',
                description: 'Ensure all content is original and unique'
            }
        ],
        cta: 'Start writing'
    }
];

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    PRICING: '/pricing',
    CONTACT: '/contact',
    TOOL: '/tool',
    LOGIN: '/login',
    SIGNUP: '/signup'
};

export const THEME_MODES = {
    LIGHT: 'light',
    DARK: 'dark'
};

export const CATEGORIES = {
    DESIGN: 'design',
    ANALYTICS: 'analytics',
    PRODUCTIVITY: 'productivity',
    MEDIA: 'media',
    BUSINESS: 'business',
    DEVELOPMENT: 'development',
    CONTENT: 'content'
};

export const PRICING = {
    MONTHLY_PRICE: 20,
    TRIAL_DAYS: 7,
    GUARANTEE_DAYS: 30
};