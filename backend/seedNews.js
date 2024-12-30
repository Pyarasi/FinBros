require('dotenv').config(); // Load .env variables
const mongoose = require('mongoose');
const News = require('./models/News');

// MongoDB Atlas connection
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  })
  .on('error', (err) => {
    console.error('MongoDB Atlas connection error:', err.message);
  });

const seedData = [
  {
    title: 'Indian Rupee Plunges to Record Low Against Dollar',
    description: 'Experts warn of significant economic consequences as the rupee hits an all-time low.',
    url: 'https://example.com/rupee-plunge',
  },
  {
    title: 'Adani Group Eyes $1 Billion Investment in Renewable Energy',
    description: 'The conglomerate plans to expand its solar and wind projects across India.',
    url: 'https://example.com/adani-investment',
  },
  {
    title: 'Stock Market Sees Sharp Decline Amid Political Turmoil',
    description: 'Investors pull back as uncertainties loom over key government policies.',
    url: 'https://example.com/market-decline',
  },
  {
    title: 'Startups in Bengaluru Raise $500 Million in a Week',
    description: 'Bengaluru solidifies its position as India’s startup hub.',
    url: 'https://example.com/bengaluru-startups',
  },
  {
    title: 'India Surpasses China in Smartphone Exports',
    description: 'Record-breaking exports mark a significant milestone for India’s manufacturing sector.',
    url: 'https://example.com/smartphone-exports',
  },
  {
    title: 'Crude Oil Prices Hit Indian Economy Hard',
    description: 'Soaring oil prices force India to reconsider energy strategies.',
    url: 'https://example.com/oil-prices',
  },
  {
    title: 'Government Announces Tax Cuts for Middle Class',
    description: 'The budget offers relief amid rising inflation and household expenses.',
    url: 'https://example.com/tax-cuts',
  },
  {
    title: 'India’s Crypto Bill Sparks Controversy',
    description: 'Proposed regulations could disrupt the growing crypto industry.',
    url: 'https://example.com/crypto-bill',
  },
  {
    title: 'Mumbai Sees Record Real Estate Growth in 2024',
    description: 'Property developers report massive demand despite rising prices.',
    url: 'https://example.com/real-estate',
  },
  {
    title: 'Electric Vehicles Surge in Popularity Across India',
    description: 'Demand for EVs reaches unprecedented levels as petrol prices climb.',
    url: 'https://example.com/electric-vehicles',
  },
  {
    title: 'Major Cybersecurity Breach Affects Indian Banks',
    description: 'Authorities work to mitigate the impact of the large-scale data theft.',
    url: 'https://example.com/cybersecurity-breach',
  },
  {
    title: 'Gold Prices Soar as Investors Turn to Safe Haven',
    description: 'Gold reaches a new high amidst global economic uncertainties.',
    url: 'https://example.com/gold-prices',
  },
  {
    title: 'Indian Railways to Launch High-Speed Bullet Train by 2025',
    description: 'The project promises to transform travel for millions.',
    url: 'https://example.com/bullet-train',
  },
  {
    title: 'India Overtakes Germany as the Fourth-Largest Auto Market',
    description: 'Growth in the automotive sector boosts manufacturing and exports.',
    url: 'https://example.com/auto-market',
  },
  {
    title: 'Tourism Industry Rebounds as India Welcomes Record Visitors',
    description: 'The government focuses on promoting cultural and eco-tourism.',
    url: 'https://example.com/tourism-rebound',
  },
  {
    title: 'Farmers Protest Sparks Nationwide Debate on Agricultural Laws',
    description: 'New reforms face pushback from farmers across the country.',
    url: 'https://example.com/farmers-protest',
  },
  {
    title: 'Air Pollution in Delhi Reaches Hazardous Levels',
    description: 'Government launches emergency measures to tackle the crisis.',
    url: 'https://example.com/air-pollution',
  },
  {
    title: 'India’s IT Sector to Create 1 Million Jobs in 2024',
    description: 'Tech companies gear up for massive hiring to meet demand.',
    url: 'https://example.com/it-jobs',
  },
  {
    title: 'Indian E-commerce Giants Battle for Festive Season Dominance',
    description: 'Flipkart and Amazon offer massive discounts to lure customers.',
    url: 'https://example.com/ecommerce-battle',
  },
  {
    title: 'Record Foreign Investments Boost Indian Economy',
    description: 'India attracts billions in foreign capital amidst global slowdowns.',
    url: 'https://example.com/foreign-investments',
  },
  {
    title: 'India Launches Ambitious Space Exploration Mission',
    description: 'ISRO unveils plans for its next Mars orbiter and moon rover.',
    url: 'https://example.com/space-mission',
  },
  {
    title: 'Agricultural Exports Hit $50 Billion Record',
    description: 'India’s farmers benefit from increased demand for rice, wheat, and spices.',
    url: 'https://example.com/agriculture-exports',
  },
  {
    title: 'Delhi Metro to Expand with 5 New Lines by 2026',
    description: 'Massive infrastructure upgrade aims to ease traffic congestion.',
    url: 'https://example.com/delhi-metro',
  },
  {
    title: 'Indian Stock Market Closes at Record High in 2024',
    description: 'A day of gains as Sensex hits an all-time high.',
    url: 'https://example.com/stock-market-high',
  },
  {
    title: 'Tech Startups in India Attract Global Investors',
    description: 'Indian entrepreneurs raise billions from international VC firms.',
    url: 'https://example.com/startup-investments',
  },
];

const seedDatabase = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(seedData);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();