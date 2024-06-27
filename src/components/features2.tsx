'use client';
import { useState } from 'react';

export const FeaturesSection = () => {
  const [features] = useState([
    {
      id: 1,
      title: 'AI Simplified',
      description: 'We use AI to make your life easier, automating tasks and processes with smart, adaptive technology.',
      expandedText: 'Our AI solutions are designed to simplify complex operations, helping you focus on what really matters. From automating customer interactions to processing large datasets, Relix AI is your partner in innovation.'
    },
    {
      id: 2,
      title: 'Smart Content Generation',
      description: 'Our brand new models generate relevant content with less data, enhancing efficiency and accuracy.',
      expandedText: 'With the latest advancements in machine learning, our models require less data to produce high-quality results, ensuring your content is not only fast but also accurate and relevant to your needs.'
    },
    {
      id: 3,
      title: 'Cutting-edge Research',
      description: 'We leverage insights from our research division to bring you the latest developments in AI technology.',
      expandedText: 'Stay ahead of the curve with groundbreaking AI innovations. Our research team works tirelessly to discover and integrate the newest technologies into our products.'
    },
    // {
    //   id: 4,
    //   title: 'Advanced Knowledge Management',
    //   description: 'Our advanced knowledge management systems provide you with the best possible experience.',
    //   expandedText: 'Organize, access, and utilize information more efficiently with our sophisticated knowledge management solutions, tailored to your business needs.'
    // },
    // {
    //   id: 5,
    //   title: 'Comprehensive AI Integration',
    //   description: 'From data pipelines to LLM applications, our research department collaborates directly with your team.',
    //   expandedText: 'We help integrate complex AI systems into your business processes, ensuring seamless operation and maximum benefit.'
    // },
    // {
    //   id: 6,
    //   title: 'Security and Reliability',
    //   description: 'Secure data storage systems protect your information while ensuring accessibility.',
    //   expandedText: 'Our commitment to security means your data is always safe with us, backed by the latest in encryption and compliance standards.'
    // }
  ]);

  return (
    <div className="max-w-6xl mx-5 space-y-6">
      {features.map(feature => (
        <div key={feature.id} className="bg-gray-800 bg-opacity-80 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-white">
          <h3 className="text-lg font-bold text-white">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
          <details className="mt-4">
            <summary className="cursor-pointer text-relix-green">Learn more</summary>
            <p className="text-gray-400 mt-2">{feature.expandedText}</p>
          </details>
        </div>
      ))}
    </div>
  );
};
