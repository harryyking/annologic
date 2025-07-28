import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Assuming these are available from shadcn/ui

// Define the data for the sections
const features = [
  {
    id: '01',
    title: 'Trade Instantly',
    description: 'Execute trades instantly with our advanced trading engine. Access major cryptocurrencies and trade with confidence using our secure platform designed for African markets.',
  },
  {
    id: '02',
    title: 'Secure Wallet',
    description: 'Store your digital assets safely with our multi-signature wallet technology. Your funds are protected with bank-grade security measures and advanced encryption.',
  },
  {
    id: '03',
    title: 'Trade Externally',
    description: 'Connect with external exchanges and trading platforms. Expand your trading opportunities beyond our platform while maintaining security and control.',
  },
  {
    id: '04',
    title: 'Community Trading',
    description: 'Join a thriving community of African crypto enthusiasts. Share insights, learn from experts, and participate in social trading features.',
  },
  {
    id: '05',
    title: 'Diversified Portfolio',
    description: 'Access global cryptocurrency markets through our integrated external trading features. Diversify your portfolio across multiple platforms seamlessly.',
  },
  {
    id: '06',
    title: 'Advanced Analytics',
    description: 'Make informed decisions with comprehensive analytics dashboard. Track performance, analyze market trends, and optimize your trading strategy.',
  },
  {
    id: '07',
    title: 'Leverage Partnerships',
    description: 'Leverage our partnerships with major exchanges to access the best rates and liquidity. Trade with confidence across multiple platforms.',
  },
  {
    id: '08',
    title: 'Unified Interface',
    description: 'Experience seamless integration with external trading platforms. Manage all your crypto activities from one unified interface designed for Africa.',
  },
];

const SectionList = () => {
  return (
    <section className="px-6 py-20 text-white"> {/* Changed background to dark for better contrast */}
      <div className="max-w-6xl mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center mb-16 text-center lg:text-left">
          <h2 className="text-4xl font-semibold mb-4 lg:mb-0 leading-tight"> {/* Responsive headline */}
            What You Can Do
            <br />
            with Heliograf
          </h2>
          <p className="max-w-md">
            Discover the comprehensive suite of crypto financial services designed for the African market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className='bg-primary rounded-lg border-0'
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-lg flex-shrink-0 ${index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-600'}`}> {/* Inner box color adjustment */}
                    <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{feature.id}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionList;
