import React from 'react';
import { retailPartnerData, faqs } from '../data/partnerData';

const PartnerPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Become a Partner
      </h1>
      
      {/* Invest Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Invest in Hatake TCG's Future
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At Hatake TCG, we're building a premium brand that resonates with trading card game enthusiasts worldwide.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            As a Swedish startup, we've already established a foothold in the TCG community with our high-quality accessories, and we're ready to take the next step in our growth journey.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We're excited to announce that Hatake TCG is valued at $30,000 as of 2030, reflecting our strong foundation and promising future.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6 mb-3">
            Join our vision with:
          </h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">1% equity for just $300</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Flexible investment options for smaller budgets</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Partnerships in Ystad, Malmö, Falköping (SE), and Esbjerg (DK)</span>
            </li>
          </ul>
          
          <p className="text-gray-700 dark:text-gray-300">
            By investing, you'll join a network dedicated to elevating the TCG experience with potential for significant returns. Contact us at <a href="mailto:invest@hatake.eu" className="text-red-600 dark:text-red-400 hover:underline">invest@hatake.eu</a> to explore this opportunity.
          </p>
        </div>
      </section>
      
      {/* Join Team Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Join Our Team
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We're seeking passionate sales staff to represent Hatake TCG. Earn a percentage of net profits from sales to your clients while we handle shipping and logistics.
          </p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Be the primary contact for stores</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Earn commissions on all deliveries</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Join a growing brand in the TCG community</span>
            </li>
          </ul>
          
          <p className="text-gray-700 dark:text-gray-300">
            Reach out to us at <a href="mailto:careers@hatake.eu" className="text-red-600 dark:text-red-400 hover:underline">careers@hatake.eu</a> to learn more about this role.
          </p>
        </div>
      </section>
      
      {/* Retail Partnerships Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Retail Partnerships
        </h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-gray-900 dark:text-white">Product</th>
                <th className="py-3 px-4 text-left text-gray-900 dark:text-white">Buy-in Price</th>
                <th className="py-3 px-4 text-left text-gray-900 dark:text-white">Sales Price</th>
                <th className="py-3 px-4 text-left text-gray-900 dark:text-white">Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {retailPartnerData.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{item.product}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">${item.buyInPrice.toFixed(2)}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">${item.salesPrice.toFixed(2)}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">${item.profit.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Stock Hatake TCG products and enjoy competitive margins. Contact us at <a href="mailto:support@hatake.eu" className="text-red-600 dark:text-red-400 hover:underline">support@hatake.eu</a>.
        </p>
        
        <a 
          href="https://docs.google.com/spreadsheets/d/12ZUSKc7exYyVhvOjGS0t4UcpgDVnxLcwSCVV2hsXGAA/edit?usp=drivesdk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          View Retailer Catalog
        </a>
      </section>
      
      {/* FAQs Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
