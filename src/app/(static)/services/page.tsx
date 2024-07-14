

export default function Services() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto p-4 space-y-6">
                <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4">Our Business Solutions</h1>
                <p className="mb-8">
                    Discover how Relix.ai leverages advanced AI technologies to transform business processes, enhance customer engagement, and optimize operational efficiency.
                </p>

                {/* Introduction to AI */}
                <section className="p-6 bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-green-300 mb-4">What is AI?</h2>
                    <p className="mb-4">
                        Artificial Intelligence (AI) represents the cutting-edge of technology, enabling machines to learn from experience, adjust to new inputs, and perform human-like tasks. At Relix.ai, we harness AI to solve complex problems and drive innovation across industries.
                    </p>
                </section>

                {/* Use Cases */}
                <section className="p-6 bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-green-300 mb-4">Use Cases</h2>
                    <ul className="list-disc space-y-2 pl-6 text-gray-300">
                        {/* Custom AI Models */}
                        <li>
                            <strong>Custom AI Model Implementations:</strong> Deploy tailored models for personalized customer interactions and predictive analytics. For example, real estate agencies can use our models to predict market trends and price fluctuations.
                        </li>

                        {/* Data Pipelines */}
                        <li>
                            <strong>Data Pipelines:</strong> Automate and streamline data handling, from collection to actionable insights. This is crucial for healthcare providers who need to process patient data efficiently and securely.
                        </li>

                        {/* Marketing Automation */}
                        <li>
                            <strong>Marketing Automation:</strong> Utilize AI to engage customers effectively and increase conversion rates. Retail businesses can benefit from targeted marketing campaigns based on customer behavior analysis.
                        </li>

                        {/* Legal and Administrative Assistants */}
                        <li>
                            <strong>Comprehensive Legal and Administrative Assistants:</strong> Reduce overhead and improve accuracy with AI-powered support systems. Suitable for law firms needing to manage case files and legal references efficiently.
                        </li>

                        {/* Industry-Specific Applications */}
                        <li>
                            <strong>Estimate Agent for Service Industries:</strong> Equip service-based businesses like landscaping and construction with AI agents that can automatically provide estimates based on digital inputs. For instance, a landscaping company could use this to quickly generate lawn care estimates.
                        </li>

                        {/* Automated Customer Service */}
                        <li>
                            <strong>Automated Customer Service:</strong> Implement chatbots and automated service systems that handle routine inquiries, allowing staff to focus on more complex issues. Ideal for hospitality businesses where quick and effective customer service is essential.
                        </li>
                    </ul>
                </section>


                {/* Examples and Testimonials
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-300 mb-4">Examples and Testimonials</h2>
            <p className="mb-4">
              Explore how companies like yours are already benefiting from our AI solutions. From real estate to retail, our technology drives innovation and efficiency.
            </p>
            {/* Here, you might embed or link to specific case studies or customer reviews */}{/*
          </section> */}

                {/* Options and Customizations */}
                <section className="p-6 bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-green-300 mb-4">Customization and Integration</h2>
                    <p className="mb-4">
                        At Relix.ai, we understand that each business is unique, with specific needs and challenges. That&apos;s why our AI solutions are designed to be fully customizable, ensuring they align perfectly with your business goals and integrate seamlessly into your existing workflows.
                    </p>
                    <p className="mb-4">
                        <strong>Flexibility in Customization:</strong> Choose from a wide range of base models which can be tailored according to your data requirements and business objectives. Our team works closely with you to develop and fine-tune AI models that enhance your operational efficiency and customer engagement.
                    </p>
                    <p className="mb-4">
                        <strong>Seamless Integration:</strong> Our AI solutions are built to integrate effortlessly with your existing IT infrastructure. Whether you&apos;re using legacy systems or modern cloud applications, we ensure a smooth integration process that minimizes disruption and maximizes performance.
                    </p>
                    <p className="mb-4">
                        <strong>Continuous Support and Iteration:</strong> Post-integration, Relix.ai remains committed to your success. We provide ongoing support and iterative improvements based on performance data and feedback, ensuring that your AI solutions continue to evolve with your business needs.
                    </p>
                    <p className="mb-4">
                        <strong>Scalability to Grow with You:</strong> Our technologies are scalable, designed to grow with your business. From small start-ups to large enterprises, we equip you with AI capabilities that scale according to your growth trajectory and changing market demands.
                    </p>
                </section>

                {/* Pricing */}
                <section className="p-6 bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-green-300 mb-4">Pricing</h2>
                    <p className="mb-4">
                        At Relix.ai, we understand that every business has unique needs and budgetary considerations. That&apos;s why we offer flexible, pay-as-you-go pricing models that can be customized to match the scale and scope of your projects.
                    </p>
                    <p className="mb-4">
                        Whether you need AI integration for a one-time project or ongoing AI support and maintenance, our pricing structure is designed to provide maximum value and scalability. This approach ensures you only pay for what you use, helping you manage costs effectively while benefiting from advanced AI capabilities.
                    </p>
                    <p className="mb-4">
                        For a detailed quote and to discuss how our AI solutions can fit within your budget, please contact me directly at <a href="mailto:caleb@relix.ai" className="text-blue-400">caleb@relix.ai</a>. We&apos;re here to help you find the best pricing strategy that meets your company&apos;s needs.
                    </p>
                </section>


                {/* Call to Action */}
                {/* <section className="p-6 bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-green-300 mb-4">Get in Touch</h2>
                    <p>
                        Ready to transform your business with AI? <a href="https://relix.ai/contact" className="text-blue-400">Contact us</a> today to schedule a consultation or request a demo.
                    </p>
                </section> */}
            </div>
        </div>
    );
}
