const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-696512846264433678/original/8f850f43-c43d-4976-b7d7-6c251d0461f2.jpeg?im_w=1200",
      },
        
      price: 1500,
      location: "Malibu",
      country: "United States",
      geometry: {
        type:"Point",
        coordinates:[118.6923,34.0381]
        
      }
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/1346b94f-4643-49c1-8f16-7e9b8694911e.jpg?im_w=720",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[74.0060,40.7128]
      }
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/b1642edf-a58e-406d-a685-49faf13c7860.jpg?im_w=1200",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[106.8175,39.1911]
      }
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-23876365/original/547d13b8-268e-468d-8749-734fea6ac928.jpeg?im_w=960",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: {
        type:"point",
        coordinates:[11.2558,43.7696]
      }
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/27f085ac-4189-44ca-86a4-5cb84a4776ae.jpg?im_w=1200",
      }, 
      price: 800,
      location: "Portland",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[ 122.6784,45.5152]
      }
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/228b2d6a-65c7-4e44-9870-5f14bacc4e02.jpg?im_w=1200",
      }, 
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      geometry: {
        type:"point",
        coordinates:[ 86.8515,21.1619]
      }
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/miso/Hosting-45491156/original/13d3799b-bcbd-414b-9410-32996046c95e.jpeg?im_w=1200",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[ 120.0324,39.0968]
      }
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image:{
        filename:"listingimage",
        url: "https://a0.muscache.com/im/pictures/e9d2731e-23a9-4316-8aae-fb7c1fafee4d.jpg?im_w=1200",
      }, 
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[ 118.2426,34.0549]
      }
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/40478586/116fa2a5_original.jpg?im_w=1200",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      geometry: {
        type:"point",
        coordinates:[ 7.2286,46.0961]
      }
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/c0731a7d-6eec-4681-b481-f0a43358e2a7.jpg?im_w=1200",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      geometry: {
        type:"point",
        coordinates:[ 34.833,32.3333]
      }
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/29278146/e7be0105_original.jpg?im_w=960",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
      geometry: {
        type:"point",
        coordinates:[ 4.9041,52.3676]
      }
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/f8a38220-eb84-42b4-841a-2b446a84378c.jpg?im_w=960",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
      geometry: {
        type:"point",
        coordinates:[ 178.0650,17.7134]
      }
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/miso/Hosting-52315538/original/c47b2e09-9792-442d-bd59-0682b046964f.jpeg?im_w=960",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
      geometry: {
        type:"point",
        coordinates:[ 1.8839,51.7950]
      }
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/db99218a-eceb-41ac-b15a-185d9cb60c8a.jpg?im_w=960",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[ 71.0589,42.3601]
      }
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/75755606/610e1c50_original.jpg?im_w=960",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
      geometry: {
        type:"point",
        coordinates:[ 115.0920,8.3405]
      }
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/f11adeeb-69fc-46d7-87c8-627a3f22cb62.jpg?im_w=960",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
      geometry: {
        type:"point",
        coordinates:[ 115.5708,51.1784]
      }
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image:{
        filename:"listingimage",
        url:  "https://a0.muscache.com/im/pictures/c6bd4a4b-68ad-4cb5-9ee6-8906f17ada27.jpg?im_w=1200",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
      geometry: {
        type:"point",
        coordinates:[ 80.1918,25.7617]
      }
    },
    
     
  ];
  
  module.exports = { data: sampleListings };