/*   STEP 1   */
export const leagueID = "954157581616939008"; // your league ID
export const leagueName = "The Dynasty to End All Dynasties"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome, football fanatics, to the most prestigious and electrifying event in the realm of fantasy football! Brace yourselves as we unveil a league that will revolutionize the very essence of dynasty fantasy football—the Dynasty to End All Dynasties!</p>
  <p>In this hallowed competition, the gridiron gladiators will rise and fall, forging their paths to immortal greatness. It is here that seasoned veterans and strategic newcomers converge, bound by their shared passion for the game, armed with boundless knowledge, and driven by an insatiable hunger for victory.</p>
  <p>The Dynasty to End All Dynasties embraces the concept of "forever football." Forget the transient nature of traditional fantasy leagues—this is your chance to build a football empire that stands the test of time. We invite you to immerse yourself in the thrill of crafting an enduring legacy, assembling a roster of gridiron warriors that will withstand the tides of fortune and leave an indelible mark on the annals of fantasy football.</p>
  <p>Prepare to embark on a journey like no other, where draft days become seismic events and each trade carries the weight of dynasty destiny. The challenges are boundless, as you navigate the treacherous terrain of injuries, roster management, and the ever-changing landscape of the NFL. Every decision you make holds the power to shape the destiny of your team, with far-reaching consequences that ripple across seasons and reverberate through history.</p>
  <p>Here, friendships will be forged and rivalries will ignite, as owners vie for the coveted title of dynasty champion. The Dynasty to End All Dynasties is not merely a league—it is a community of football enthusiasts united by a shared dream. Engage in spirited debates, tactical discussions, and friendly banter with fellow owners who, like you, are captivated by the eternal allure of football glory.</p>
  <p>As the season unfolds, prepare for heart-stopping victories and heartbreaking defeats, each moment etching itself into the tapestry of this extraordinary league. Witness the rise of promising rookies, the resurgence of legendary veterans, and the strategic brilliance of cunning coaches. Here, fantasy and reality merge, as you navigate the thrilling intersection of NFL action and your meticulously constructed dynasty roster.</p>
  <p>So, gather your wits, sharpen your strategy, and brace yourself for the ultimate fantasy football challenge. The Dynasty to End All Dynasties beckons you to rise above the rest, leave an indomitable mark on the gridiron, and etch your name among the immortals.</p>
  <p>Welcome, brave owners, to a realm where dynasties are born, legends are made, and the pursuit of football glory knows no bounds. Welcome to the Dynasty to End All Dynasties!</p>
`;

export const managers = [
// 0
    {
      "managerID": "677643396080271360",
      "name": "Cam “The Cammissioner” Monari",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "After doing fantasy on and off for many years, I never had a real grasp on fantasy. I knew players and would honestly do well by pure luck a lot of times. My first real experience came in 2021, starting two dynasties, making many mistakes, and learning from them. My primary goal is to keep them all from killing each other, my secondary goal is to take what I've had to learn, and grow, and make this my best team yet.",
      "photo": "/managers/Cam.jpeg", 
      "fantasyStart": 2017,
      "favoriteTeam": "chi", 
      "mode": "Win Now", 
      "rival": {
        name: "Tate", 
        link: 11, 
        image: "/managers/Tate.jpeg",
      },
      "preferredContact": "Text",
    },
// 1
    {
      "managerID": "342709265552740352",
      "name": "Colin “Daddy Gally” Gallagher",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Papa, can we go sailing this weekend?",
      "photo": "/managers/Colin.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "cle", 
      "mode": "Win Now", 
      "rival": {
        name: "Myself", 
        link: 1, 
        image: "/managers/Colin.jpeg",
      },
      "preferredContact": "Text",
    },
// 2
    {
      "managerID": "735944408888942592",
      "name": "Dan “DC” Clinton",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "If fair and consistent had an image in the dictionary it would be this guy. Hailing from the Live Free or Die state DC grew up a Dallas Cowboys fan. No one really knows why but if you ask those that knew him best it might be because of the Cheerleaders first and players second. DEAD is currently the only league to entice this CHEAP SOB into a larger sum buy in but when you have the mind to draw up plays like the Annexation of Puerto Rico the competition better bring their A game.",
      "photo": "/managers/Dan.jpeg", 
      "fantasyStart": 1900,
      "favoriteTeam": "dal", 
      "mode": "Win Now", 
      "rival": {
        name: "Bring it on Dew", 
        link: 5, 
        image: "/managers/Greg.jpeg",
      },
      "preferredContact": "Text",
    },
// 3
    {
      "managerID": "858111724337905664",
      "name": "Daniel “Lieutenant Dan” Robles",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "I'm just happy to be here.",
      "photo": "/managers/Daniel.jpeg", 
      "fantasyStart": 2022,
      "favoriteTeam": "cin", 
      "mode": "Win Now", 
      "rival": {
        name: "The Other Dan", 
        link: 2, 
        image: "/managers/Dan.jpeg",
      },
      "preferredContact": "Text",
    },
// 4
    {
      "managerID": "858092353485946880",
      "name": "Ellis Rushford",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Oorah",
      "photo": "/managers/Ellis.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "cle", 
      "mode": "Win Now", 
      "rival": {
        name: "Cam", 
        link: 0, 
        image: "/managers/Cam.jpeg",
      },
      "preferredContact": "Text",
    },
// 5 “”
    {
      "managerID": "480871107226759168",
      "name": "Greg “Dew” Dew",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Live in Apex with wife and 7 yr old daughter. I joined Bandwidth in 2012 and shortly after became a Washington Commanders season ticket holder (10 years running, but not a brag, kind of sad tbh). Co-QB'ed the best damn flag football team the Holt Bros has ever seen for 3 years. Once won a fantasy football league 5 years in a row. Have probably hit 1000+ 3-pointers in hoops over Dan Clinton thruout Dan's BW tenure. Middle School Spelling Bee Champion- 2nd Alternate (pretty certain this is where I peaked in life)",
      "photo": "/managers/Greg.jpeg", 
      "fantasyStart": 2006,
      "favoriteTeam": "was", 
      "mode": "Win Now", 
      "rival": {
        name: "Unrivaled (but Dan Clinton will try)", 
        link: null, 
        image: "/managers/question.jpg",
      },
      "preferredContact": "Text",
    },
// 6
    {
      "managerID": "735892608425005056",
      "name": "Joe Faustyn",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Lorem ipsum...",
      "photo": "/managers/Joe.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "ne", 
      "mode": "Win Now", 
      "rival": {
        name: "Joe", 
        link: null, 
        image: "/managers/Joe.png",
      },
      "preferredContact": "Text",
    },
// 7
    {
      "managerID": "858093403215380480",
      "name": "Jordan “Alabama is my real Favorite Team” Schultz",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "If they went to Alabama, I will try to draft them",
      "photo": "/managers/Jordan.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "phi", 
      "mode": "Win Now", 
      "rival": {
        name: "Jordan", 
        link: null, 
        image: "/managers/Jordan.jpeg",
      },
      "preferredContact": "Text",
    },
// 8
    {
      "managerID": "677653224232120320",
      "name": "Justin Strickland",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "If his name is DJ Moore, he is likely on my team",
      "photo": "/managers/Justin.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "car", 
      "mode": "Win Now", 
      "rival": {
        name: "Justin", 
        link: null, 
        image: "/managers/Justin.jpeg",
      },
      "preferredContact": "Text",
    },
// 9
    {
      "managerID": "735887520348397568",
      "name": "Rufo",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Everyone else are losers",
      "photo": "/managers/question.jpg", 
      "fantasyStart": 2014,
      "favoriteTeam": "det", 
      "mode": "Win Now", 
      "rival": {
        name: "Everyone", 
        link: null, 
        image: "/managers/everyone.png",
      },
      "preferredContact": "Text",
    },
// 10
    {
      "managerID": "858093886919278592",
      "name": "Nash Stallings",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Skol",
      "photo": "/managers/Nash.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "min", 
      "mode": "Win Now", 
      "rival": {
        name: "Rufo", 
        link: 9, 
        image: "/managers/question.jpg",
      },
      "preferredContact": "Text",
    },
// 11 “”
    {
      "managerID": "734217978672992256",
      "name": "Tate “The Man, The Myth, The Legend” O'Brochta",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "“The standard is the standard - Mike Tomlin” - Tate O’Brochta ",
      "photo": "/managers/Tate.jpeg", 
      "fantasyStart": 2004,
      "favoriteTeam": "pit", 
      "mode": "Win Now", 
      "rival": {
        name: "Cam - because he steals my draft prospects", 
        link: 0, 
        image: "/managers/Cam.jpeg",
      },
      "preferredContact": "Text",
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
//     {
//       "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Your Name",
//       "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Brooklyn", // (optional)
//       "bio": "Lorem ipsum...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Rival", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy", // (optional)
//       "tradingScale": 10, // 1 - 10 (optional)
//       "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
    
