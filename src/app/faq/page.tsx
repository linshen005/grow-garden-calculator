import { Metadata } from 'next';

const faqs = [
  {
    q: "What is the Grow A Garden Calculator?",
    a: "Grow A Garden Calculator is a free tool for Roblox players to estimate crop values, mutation combos, and optimize trading strategies."
  },
  {
    q: "How does the calculator estimate crop values?",
    a: "It multiplies the crop's base value by weight, quantity, mutation multipliers, and any friend boost to give a real-time estimate."
  },
  {
    q: "What are mutation combos and why do they matter?",
    a: "Mutation combos are combinations of Growth, Temperature, and Environmental mutations. The right combo can greatly increase your crop's value."
  },
  {
    q: "How can I maximize my trading profits?",
    a: "Use the calculator to compare mutation combos and crop values, then trade for high-value crops or rare mutations in the market."
  },
  {
    q: "How often are crop values updated?",
    a: "Values are updated regularly based on in-game market trends and player feedback to ensure accuracy."
  },
  {
    q: "Can I use the calculator for all items in Grow A Garden?",
    a: "The calculator currently supports all major crops and mutation types. Support for pets, gears, and eggs is coming soon."
  },
  {
    q: "Is Grow A Garden Calculator free to use?",
    a: "Yes, the calculator and all its features are completely free for all Roblox players."
  },
  {
    q: "Where can I find more trading tips?",
    a: "Check the Wiki and FAQ pages for up-to-date trading advice, mutation guides, and value rankings."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export const metadata: Metadata = {
  title: 'FAQ | Grow A Garden Calculator',
  description: 'Frequently asked questions about Grow A Garden Calculator, crop values, mutation combos, and trading tips for Roblox players.',
  other: {
    'script:ld+json': JSON.stringify(faqJsonLd)
  }
};

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold gradient-text mb-8">Frequently Asked Questions</h1>
      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-700">{faq.q}</h3>
            <p className="text-gray-700 text-base">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href="#top" className="ios-button gradient-text font-bold text-lg">Back to Top</a>
      </div>
    </div>
  );
} 