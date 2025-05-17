import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Our Story
      </h1>
      
      {/* Founded Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Founded in 2025
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Hatake TCG was founded by Ernst-William Hertz, Mark Jensen, and Virre, passionate TCG enthusiasts and entrepreneurs committed to creating premium, sustainable accessories. Our journey began in Falköping, Sweden, with a vision to revolutionize TCG gear while supporting Nordic industry.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Hatake TCG isn't just about products; it's about building a legacy. Virre, Mark, and Ernst-William are dedicated to crafting gear that protects and inspires, all while fostering a community where every player feels at home. With their sights set on full Nordic production, they're proving that passion, teamwork, and a touch of Nordic elegance can redefine the TCG experience.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We combine Swedish design with ethical manufacturing, currently partnering with a trusted Chinese supplier who shares our commitment to fair labor practices and sustainability.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our mission is to challenge the greedy, monopolized TCG accessory market by offering premium products at accessible prices, ensuring every player can enjoy high-quality gear without breaking the bank.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We're working toward full Nordic production to further reduce our environmental impact, blending innovation with tradition to create accessories that embody the elegance and durability of Scandinavian craftsmanship.
          </p>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Why Choose Hatake?
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Premium quality matching Dragon Shield/KMC</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Unique Nordic-designed products</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Ethical manufacturing practices</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Supporting Swedish industry</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Competitive retailer margins</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
