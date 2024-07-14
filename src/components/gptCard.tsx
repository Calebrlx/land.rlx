interface GPTCardProps {
    title: string;
    description: string;
    link: string;
    benefits: string[];
    practicalApplications: string;
  }
  
  const GPTCard: React.FC<GPTCardProps> = ({ title, description, link, benefits, practicalApplications }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        <ul className="mt-4 mb-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm list-disc list-inside">{benefit}</li>
          ))}
        </ul>
        <p className="mt-2 italic">{practicalApplications}</p>
        <a href={link} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </a>
      </div>
    );
  };
  