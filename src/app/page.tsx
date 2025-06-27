import CropCalculator from '@/components/CropCalculator';

export default function Home() {
  return (
    <>
      <CropCalculator />
      {/* FAQ Section - SEO optimized, English version */}
      <section id="faq" className="max-w-2xl mx-auto mt-16 mb-12 px-4 py-8 glass-card rounded-3xl shadow-xl">
        <h2 className="text-2xl font-bold gradient-text mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-2">What is the Grow A Garden Calculator?</h3>
            <p className="text-gray-700">Grow A Garden Calculator is a free online tool for <strong>Roblox Grow A Garden</strong> players to estimate crop values, mutation combos, and optimize trading strategies easily.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">What features does the Grow A Garden Calculator Roblox offer?</h3>
            <p className="text-gray-700">This tool supports crop value calculation, mutation multiplier lookup, leaderboards, FAQ, Wiki, and more. It is mobile-friendly and designed for all Roblox Grow A Garden players.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">How do I use the Grow A Garden Mutation Calculator?</h3>
            <p className="text-gray-700">Simply select your crop, enter the weight and quantity, choose mutation types, and the Grow A Garden Mutation Calculator will automatically calculate the final value and best mutation combos for you.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Is the Roblox Grow A Garden Calculator free to use?</h3>
            <p className="text-gray-700">Yes, all features are completely free to use with no registration required. Perfect for all Roblox Grow A Garden players.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Which crops and mutations are supported by the Grow A Garden Calculator?</h3>
            <p className="text-gray-700">The calculator supports all major crops and three mutation types (Growth, Temperature, Environmental) in the game. Data is regularly updated to match the latest Roblox Grow A Garden version.</p>
          </div>
        </div>
      </section>
    </>
  );
}
