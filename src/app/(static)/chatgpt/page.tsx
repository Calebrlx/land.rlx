import Link from 'next/link';

interface Agent {
  id: string;
  name: string;
  specialization: string;
  description: string;
  link: string;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Alaska Real Estate Doc Review',
    specialization: 'Real Estate',
    description: 'Expert in reviewing real estate documents, transactions, and providing market analysis for the Alaska region.',
    link: 'https://chatgpt.com/g/g-iuWzY4KGk-ak-real-estate-doc-review',
  },
];

const ChatGPTPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="bg-gray-800 shadow-md py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">ChatGPT Agents</h1>
          <p className="mt-2 text-gray-400">Explore our specialized GPT agents designed to help you with specific tasks and provide valuable insights.</p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Available Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                <p className="text-gray-400 mb-4">{agent.specialization}</p>
                <p className="text-gray-400 mb-4">{agent.description}</p>
                <Link href={agent.link} className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300" target="_blank" rel="noopener noreferrer">
                    Chat Now
                </Link>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-4">More agents are coming soon. Stay tuned!</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Use</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <p className="text-gray-400 mb-4">Using our ChatGPT agents is simple and straightforward:</p>
            <ol className="list-decimal list-inside text-gray-400 mb-4">
              <li>Select the agent that suits your needs from the list above.</li>
              <li>Click on the &quot;Chat Now&quot; button to open the chat interface.</li>
              <li>Start interacting with the agent to get the help and insights you need.</li>
            </ol>
            <p className="text-gray-400">For any inquiries or support, feel free to contact us at <Link href="/contact-us text-blue-400 hover:underline">our contact page</Link> or send an email to <a href="mailto:team@relix.ai" className="text-blue-400 hover:underline">team@relix.ai</a>.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatGPTPage;
