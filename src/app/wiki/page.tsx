// �� Grow A Garden Wiki Page: English documentation, semantic tags, card style, GitHub issue button
'use client';

export default function WikiPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold gradient-text mb-8">🧭 Grow A Garden Wiki</h1>
      <article className="prose prose-lg max-w-none">
        <h2 id="unit-conversion">📏 Unit Conversion</h2>
        <ul>
          <li>1 kilogram (kg) = 2.20462 pounds (lb)</li>
          <li>1 pound (lb) ≈ 0.4536 kg</li>
          <li>All crop values are calculated in kilograms (kg) by default.</li>
        </ul>

        <h2 id="formula-explanation">🧮 Formula Explanation</h2>
        <p><strong>Final Value</strong> = <code>Base Price × Weight × Quantity × Mutation Multipliers × Friend Boost Multiplier</code></p>

        <h3>Base Price</h3>
        <ul>
          <li>The value of 1 kg of the crop, in Sheckles.</li>
        </ul>
        <h3>Weight</h3>
        <ul>
          <li>Weight in kilograms (kg) per crop.</li>
        </ul>
        <h3>Quantity</h3>
        <ul>
          <li>Number of crops.</li>
        </ul>
        <h3>Mutation Multipliers</h3>
        <ul>
          <li>Includes Growth, Temperature, and Environmental multipliers.</li>
          <li>These are multiplied together.</li>
        </ul>
        <h3>Friend Boost</h3>
        <ul>
          <li>Adds a bonus multiplier: <code>1 + friendBoostPercentage / 100</code></li>
          <li>Example: 20% friend boost → multiplier = 1.2</li>
        </ul>

        <h2 id="mutation-system">🌱 Mutation System</h2>
        <ul>
          <li>There are 3 types:
            <ul>
              <li><strong>Growth</strong></li>
              <li><strong>Temperature</strong></li>
              <li><strong>Environmental</strong></li>
            </ul>
          </li>
          <li>Only one mutation from each type can be applied at a time.</li>
          <li>Some mutations are incompatible and cannot coexist.</li>
        </ul>

        <h2 id="example">💡 Example</h2>
        <p>If a Mango (Base Value: 289) has:</p>
        <ul>
          <li>Weight: 2 kg</li>
          <li>Quantity: 5</li>
          <li>Growth: Rainbow (x50)</li>
          <li>Temperature: Frozen (x9)</li>
          <li>Environmental: Voidtouched (x134)</li>
          <li>Friend Boost: 20%</li>
        </ul>
        <p>Then:</p>
        <pre>
Final Value = 289 × 2 × 5 × 50 × 9 × 134 × 1.2 = 2,088,720
        </pre>

        <h2 id="notes">📌 Notes</h2>
        <ul>
          <li>This tool is based on Grow A Garden gameplay and may not reflect real-world crop economics.</li>
          <li>Data may vary with updates.</li>
          <li>Submit suggestions or issues on <a href="https://github.com/your-repo/issues" target="_blank" rel="noopener noreferrer">GitHub</a>.</li>
        </ul>
      </article>
      <div className="mt-8 flex justify-end">
        <a
          href="https://github.com/your-repo/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="ios-button gradient-text font-bold text-lg"
        >
          Submit an issue on GitHub
        </a>
      </div>
    </div>
  );
} 