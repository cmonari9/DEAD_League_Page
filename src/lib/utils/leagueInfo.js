/*   STEP 1   */
export const leagueID = "954157581616939008"; // your league ID
export const leagueName = "The Dynasty to End All Dynasties"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>2023 Brought about a desire for change, a push for better competition, and for some, their first dynasty league. Thus the Dynasty to End All Dynasties was born.</p>
  <p>As our desire for more and better fantasy football grew, many of us joined our first dynasty league in 2021. While that league has been fun, a lack of full participation by all impacts the drive of others to play.</p>
  <p>In an effort to start over after bad mistakes while learning this new path, some members formed another league with some newer members folded in. This league fostered some natural rivalries and helped others realize, we were no longer in Kansas.</p>
  <p>So that brings us to now. Accross the two leagues we have 11 members actively engaged, looking to trade, communicate, and above all, compete. Take the lessons learned from previous mistakes and start fresh.</p>
  <p>But 11 is not 12, and our firm belief that 12 makes for the best balance. So we were left with no choice, but to bring in the one who everyone was slightly scared of. Someone who had always wanted to play dynasty, but could never get enough people to play. Someone so good at fantasy sports in general, another member claims a trophy from a fantasy baseball league is their most prized posession, because it involved beating this same individual.</p>
  <p>Welcome to D.E.A.D. Welcome to the best of the best. The ones who are here to win, and plan to compete for a long time.</p>
`;

export const managers = [
// 0
    {
      "managerID": "677643396080271360",
      "name": "Cam Monari",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "My primary goal is to keep them all from killing each other",
      "photo": "/managers/Cam.jpeg", 
      "fantasyStart": 2017,
      "favoriteTeam": "chi", 
      "mode": "Win Now", 
      "rival": {
        name: "I have every reason for it to be either of my division mates", 
        link: 11, 
        image: "/managers/everyone.png",
      },
      "preferredContact": "Text",
    },
// 1
    {
      "managerID": "342709265552740352",
      "name": "Colin 'Daddy Gally' Gallagher",
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
      "name": "Dan 'DC' Clinton",
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
      "name": "Daniel 'Lieutenant Dan' Robles",
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
      "bio": "Lorem ipsum...",
      "photo": "/managers/Ellis.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "cle", 
      "mode": "Win Now", 
      "rival": {
        name: "Rival", 
        link: 6, 
        image: "/managers/Colin.jpeg",
      },
      "preferredContact": "Text",
    },
// 5
    {
      "managerID": "480871107226759168",
      "name": "Greg 'Dew' Dew",
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
        name: "TBD", 
        link: null, 
        image: "/managers/everyone.png",
      },
      "preferredContact": "Text",
    },
// 7
    {
      "managerID": "858093403215380480",
      "name": "Jordan 'Alabama is my real Favorite Team' Schultz",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Lorem ipsum...",
      "photo": "/managers/Jordan.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "phi", 
      "mode": "Win Now", 
      "rival": {
        name: "TBD", 
        link: null, 
        image: "/managers/everyone.png",
      },
      "preferredContact": "Text",
    },
// 8
    {
      "managerID": "677653224232120320",
      "name": "Justin Strickland",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Lorem ipsum...",
      "photo": "/managers/Justin.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "car", 
      "mode": "Win Now", 
      "rival": {
        name: "TBD", 
        link: null, 
        image: "/managers/everyone.png",
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
// 11
    {
      "managerID": "734217978672992256",
      "name": "Tate 'The Man, The Myth, The Legend' O'Brochta",
      "tookOver": 2023,
      "location": "Raleigh",  
      "bio": "Lorem ipsum...",
      "photo": "/managers/Tate.jpeg", 
      "fantasyStart": 2014,
      "favoriteTeam": "pit", 
      "mode": "Win Now", 
      "rival": {
        name: "TBD", 
        link: null, 
        image: "/managers/everyone.png",
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
    
