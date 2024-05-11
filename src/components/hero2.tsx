import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 md:py-20 space-y-8 md:space-y-0 md:space-x-10">
      {/* Column 1: Image with Glow Effect */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-relix-green to-relix-blue rounded-full blur-xl opacity-75"></div>
        <Image
          className="relative rounded-full"
          src="/brain.png"
          width={405}
          height={405}
          alt="Features 01"
        />
      </div>

      {/* Column 2: Text and CTA */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Hello, I&#39;m <span className="text-relix-blue">Relix</span>!
        </h1>
        <p className="mt-4 text-base md:text-xl text-gray-600">
          advanced agents at your fingertips <br />
          your newest hire <br />
          autonomous integrations made easy <br />
          AI should be intuitive <br />
          we think AI should be both innovative and intuitive
        </p>
        <Link href="/get-started">
          <span className="mt-8 inline-block bg-relix-green text-white py-3 px-6 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-relix-blue transition-colors">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
};


