const assert = require('assert');

const listings = [
    { id: 1, address: '12 Oak St', price: 450000, bedrooms: 3, status: 'active' },
    { id: 2, address: '7 Maple Ave', price: 620000, bedrooms: 4, status: 'sold' },
    { id: 3, address: '3 Pine Rd', price: 310000, bedrooms: 2, status: 'active' },
    { id: 4, address: '99 Elm Ct', price: 820000, bedrooms: 5, status: 'active' },
    { id: 5, address: '21 Birch Ln', price: 275000, bedrooms: 2, status: 'withdrawn' },
];

function filterActiveListings(data) {
    // Task 1: Filter to active listings only.
    return data.filter((listing) => listing.status === 'active');
}

function sortByPriceAscending(data) {
    // Task 2: Sort listings by price in ascending order.
    return [...data].sort((a, b) => a.price - b.price);
}

function formatPrice(price) {
    return `$${new Intl.NumberFormat('en-US').format(price)}`;
}

function mapListingSummary(data) {
    // Task 3: Return only id, address, and formatted price.
    return data.map(({ id, address, price }) => ({
        id,
        address,
        price: formatPrice(price),
    }));
}

function calculateAveragePrice(data) {
    // Task 4: Calculate the rounded average price of active listings.
    if (data.length === 0) {
        return 0;
    }

    const total = data.reduce((sum, listing) => sum + listing.price, 0);
    return Math.round(total / data.length);
}

function transformListings(data) {
    const active = filterActiveListings(data);
    const sortedActive = sortByPriceAscending(active);

    return {
        activeListings: mapListingSummary(sortedActive),
        averageActivePrice: calculateAveragePrice(active),
    };
}

function runTests() {
    // Test Task 1: Filter active listings only.
    const active = filterActiveListings(listings);
    assert.strictEqual(active.length, 3, 'Task 1: Should keep only active listings');
    assert.ok(active.every((listing) => listing.status === 'active'), 'Task 1: All statuses should be active');

    // Test Task 2: Sort active listings by ascending price.
    const sorted = sortByPriceAscending(active);
    assert.deepStrictEqual(
        sorted.map((listing) => listing.price),
        [310000, 450000, 820000],
        'Task 2: Prices should be sorted in ascending order'
    );

    // Test Task 3: Map to id, address, and formatted price.
    const summary = mapListingSummary(sorted);
    assert.deepStrictEqual(
        summary,
        [
            { id: 3, address: '3 Pine Rd', price: '$310,000' },
            { id: 1, address: '12 Oak St', price: '$450,000' },
            { id: 4, address: '99 Elm Ct', price: '$820,000' },
        ],
        'Task 3: Summary output should include only id, address, and formatted price'
    );

    // Test Task 4: Calculate rounded average active listing price.
    assert.strictEqual(
        calculateAveragePrice(active),
        526667,
        'Task 4: Average active listing price should be rounded to nearest dollar'
    );
    assert.strictEqual(calculateAveragePrice([]), 0, 'Task 4: Empty input should return 0');

    // Integration test: Full transformation pipeline.
    const transformed = transformListings(listings);
    assert.deepStrictEqual(transformed.activeListings, summary, 'Pipeline: Active listings output should match mapped summary');
    assert.strictEqual(transformed.averageActivePrice, 526667, 'Pipeline: Average should match calculated value');

    console.log('All tests passed.');
}

module.exports = {
    listings,
    filterActiveListings,
    sortByPriceAscending,
    formatPrice,
    mapListingSummary,
    calculateAveragePrice,
    transformListings,
    runTests,
};

if (require.main === module) {
    const result = transformListings(listings);
    console.log('Transformed output:', result);

    if (process.argv.includes('--test')) {
        runTests();
    }
}