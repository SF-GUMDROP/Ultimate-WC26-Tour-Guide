const STADIUMS = [
  {
    id: "metlife",
    name: "MetLife Stadium",
    city: "New York / New Jersey",
    country: "USA",
    flag: "🇺🇸",
    capacity: "82,500",
    matches: [
      ["Jun 15", "12:00pm ET", "Mexico vs USA", "Group A"],
      ["Jun 18", "12:00pm ET", "Denmark vs Australia", "Group C"],
      ["Jun 21", "3:00pm ET", "Belgium vs Canada", "Group F"],
      ["Jun 24", "3:00pm ET", "Brazil vs Poland", "Group G"],
      ["Jun 27", "12:00pm ET", "Japan vs Spain", "Group E"],
      ["Jun 30", "2:00pm ET", "Round of 32", "Knockout"],
      ["Jul 5", "2:00pm ET", "Round of 16", "Knockout"],
      ["Jul 19", "3:00pm ET", "Final", "Final"]
    ],
    guide: {
      vibe: "Iconic city energy, global crossroads",
      transit: "NJ Transit Meadowlands Rail from Secaucus Junction",
      airport: "Newark Liberty (EWR) ~10 mi",
      stay: "Manhattan, Jersey City, Hoboken",
      budget: "High",
      weather: "Hot and humid, 80-90°F",
      food: "NYC pizza, bagels, pastrami at Katz's",
      tip: "Use mass transit whenever possible. Matchday traffic around the Meadowlands can be severe."
    }
  },
  {
    id: "att",
    name: "AT&T Stadium",
    city: "Arlington (Dallas)",
    country: "USA",
    flag: "🇺🇸",
    capacity: "80,000",
    matches: [
      ["Jun 14", "TBD", "Germany vs Curaçao", "Group A"],
      ["Jun 17", "TBD", "Portugal vs DR Congo", "Group D"],
      ["Jun 20", "TBD", "Netherlands vs Sweden", "Group E"],
      ["Jun 23", "TBD", "Portugal vs Uzbekistan", "Group G"],
      ["Jun 26", "TBD", "Cabo Verde vs Saudi Arabia", "Group E"],
      ["Jun 29", "TBD", "Round of 32", "Knockout"],
      ["Jul 4", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Texas-sized entertainment, Cowboys country",
      transit: "Driving and rideshare are the practical options",
      airport: "DFW Airport ~25 min",
      stay: "Downtown Dallas or Arlington Entertainment District",
      budget: "Medium",
      weather: "Hot and sunny, 95-100°F",
      food: "Texas BBQ, Tex-Mex, frozen margaritas",
      tip: "Arrive early and confirm bag rules before leaving your hotel."
    }
  },
  {
    id: "azteca",
    name: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    flag: "🇲🇽",
    capacity: "87,523",
    matches: [
      ["Jun 11", "12:00pm CDT", "Mexico vs Poland", "Group C (Opening)"],
      ["Jun 14", "6:00pm CDT", "Canada vs South Korea", "Group F"],
      ["Jun 23", "TBD", "Costa Rica vs TBD", "Group H"],
      ["Jun 26", "4:00pm CDT", "France vs Uruguay", "Group H"],
      ["Jun 29", "TBD", "Round of 32", "Knockout"],
      ["Jul 3", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Historic, electric, football cathedral atmosphere",
      transit: "Metro Line 2 to Tasqueña, then Light Rail to the stadium",
      airport: "AICM Airport ~45-60 min by taxi",
      stay: "Condesa, Roma Norte, Polanco",
      budget: "Lower",
      weather: "Mild, 65-75°F. Afternoon showers possible.",
      food: "Tacos al pastor, tamales, mezcal, churros",
      tip: "Mexico City sits at high altitude. Rest on arrival and hydrate."
    }
  },
  {
    id: "sofi",
    name: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    flag: "🇺🇸",
    capacity: "70,240",
    matches: [
      ["Jun 12", "8:00pm PT", "USA vs Italy", "Group D"],
      ["Jun 16", "5:00pm PT", "Japan vs Canada", "Group F"],
      ["Jun 20", "6:00pm PT", "England vs Iran", "Group L"],
      ["Jun 25", "8:00pm PT", "Russia vs Mexico", "Group C"],
      ["Jun 28", "8:00pm PT", "Sweden vs Portugal", "Group E"],
      ["Jul 4", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Hollywood polish, beach time, huge entertainment options",
      transit: "Rail to Inglewood plus walking, shuttles, or rideshare",
      airport: "LAX ~8 mi",
      stay: "Manhattan Beach, Downtown LA, Inglewood",
      budget: "High",
      weather: "Warm and sunny, 75-85°F",
      food: "In-N-Out Burger, Korean BBQ, fish tacos",
      tip: "Build extra time into every trip. LA traffic punishes tight schedules."
    }
  },
  {
    id: "levis",
    name: "Levi's Stadium",
    city: "Santa Clara (SF Bay)",
    country: "USA",
    flag: "🇺🇸",
    capacity: "68,500",
    matches: [
      ["Jun 12", "TBD", "USA vs Poland", "Group D"],
      ["Jun 15", "TBD", "Saudi Arabia vs Mexico", "Group C"],
      ["Jun 18", "TBD", "Portugal vs Venezuela", "Group H"],
      ["Jun 24", "TBD", "Argentina vs Nigeria", "Group F"],
      ["Jun 27", "TBD", "Russia vs Uruguay", "Group E"],
      ["Jun 30", "TBD", "Round of 32", "Knockout"],
      ["Jul 6", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Silicon Valley energy with Bay Area food and culture",
      transit: "VTA Light Rail or Caltrain to Santa Clara",
      airport: "San Jose (SJC) ~15 mi",
      stay: "Santa Clara, Sunnyvale, or San Francisco",
      budget: "High",
      weather: "Mild, 65-75°F. Fog possible evenings.",
      food: "Mission burritos, dim sum, sourdough",
      tip: "Book hotels early if you want to stay in San Francisco and commute south."
    }
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    flag: "🇺🇸",
    capacity: "71,000",
    matches: [
      ["Jun 15", "12:00pm ET", "Spain vs Cabo Verde", "Group B"],
      ["Jun 18", "12:00pm ET", "Czechia vs South Africa", "Group G"],
      ["Jun 21", "12:00pm ET", "Spain vs Saudi Arabia", "Group B"],
      ["Jun 24", "6:00pm ET", "Morocco vs Haiti", "Group H"],
      ["Jun 27", "7:30pm ET", "DR Congo vs Uzbekistan", "Group A"],
      ["Jul 1", "12:00pm ET", "Round of 16", "Knockout"],
      ["Jul 7", "12:00pm ET", "Quarterfinal", "Knockout"],
      ["Jul 15", "3:00pm ET", "Semifinal", "Knockout"]
    ],
    guide: {
      vibe: "Southern hospitality, civil rights history, music culture",
      transit: "MARTA rail to central Atlanta stations",
      airport: "Hartsfield-Jackson (ATL) ~20 min",
      stay: "Midtown or Downtown Atlanta",
      budget: "Medium",
      weather: "Hot and humid, 88-95°F. Storms possible.",
      food: "Southern BBQ, fried chicken, peach cobbler",
      tip: "Buy a MARTA Breeze Card at the airport for easier matchday movement."
    }
  },
  {
    id: "nrg",
    name: "NRG Stadium",
    city: "Houston",
    country: "USA",
    flag: "🇺🇸",
    capacity: "72,220",
    matches: [
      ["Jun 14", "TBD", "Germany vs Curaçao", "Group A"],
      ["Jun 17", "TBD", "Portugal vs DR Congo", "Group D"],
      ["Jun 20", "TBD", "Netherlands vs Sweden", "Group E"],
      ["Jun 23", "TBD", "Portugal vs Uzbekistan", "Group G"],
      ["Jun 26", "TBD", "Cabo Verde vs Saudi Arabia", "Group E"],
      ["Jun 29", "TBD", "Round of 32", "Knockout"],
      ["Jul 4", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Space City energy, NASA, Tex-Mex, and big heat",
      transit: "METRORail plus shuttle or rideshare",
      airport: "IAH ~25 mi north",
      stay: "Uptown/Galleria or Downtown Houston",
      budget: "Medium",
      weather: "Very hot and humid, 95-100°F",
      food: "Tex-Mex, crawfish, brisket",
      tip: "Plan hydration like it is part of the itinerary."
    }
  },
  {
    id: "lumen",
    name: "Lumen Field",
    city: "Seattle",
    country: "USA",
    flag: "🇺🇸",
    capacity: "69,000",
    matches: [
      ["Jun 13", "3:00pm PT", "Switzerland vs Canada", "Group G"],
      ["Jun 17", "9:00pm PT", "Brazil vs Serbia", "Group G"],
      ["Jun 23", "9:00pm PT", "USA vs Iran", "Group L"],
      ["Jun 27", "3:00pm PT", "Germany vs Uruguay", "Group A"],
      ["Jul 5", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Pacific Northwest cool, coffee culture, waterfront walks",
      transit: "Light Rail to International District, then walk",
      airport: "Sea-Tac (SEA) ~15 mi south",
      stay: "Downtown Seattle or Capitol Hill",
      budget: "Medium",
      weather: "Mild, 65-75°F. Light rain possible.",
      food: "Seafood, coffee, teriyaki",
      tip: "Pack a light rain jacket even in summer."
    }
  },
  {
    id: "gillette",
    name: "Gillette Stadium",
    city: "Foxborough (Boston)",
    country: "USA",
    flag: "🇺🇸",
    capacity: "65,878",
    matches: [
      ["Jun 12", "2:00pm ET", "Qatar vs Ecuador", "Group A"],
      ["Jun 16", "8:00pm ET", "Canada vs Belgium", "Group F"],
      ["Jun 21", "2:00pm ET", "South Africa vs Chile", "Group L"],
      ["Jun 27", "8:00pm ET", "Croatia vs England", "Group L"],
      ["Jul 9", "TBD", "Quarterfinal", "Knockout"]
    ],
    guide: {
      vibe: "New England heritage, sports culture, seafood",
      transit: "MBTA Commuter Rail and matchday shuttle options",
      airport: "Boston Logan (BOS) ~25 mi",
      stay: "Downtown Boston or Providence",
      budget: "Medium",
      weather: "Warm, 75-85°F. Can be breezy.",
      food: "Clam chowder, lobster rolls, local beer",
      tip: "Parking is limited. Confirm matchday rail service before booking."
    }
  },
  {
    id: "hardrock",
    name: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    flag: "🇺🇸",
    capacity: "65,326",
    matches: [
      ["Jun 13", "6:00pm ET", "Poland vs Saudi Arabia", "Group C"],
      ["Jun 17", "9:00pm ET", "Costa Rica vs Honduras", "Group F"],
      ["Jun 23", "6:00pm ET", "Nigeria vs France", "Group B"],
      ["Jun 27", "6:00pm ET", "Japan vs Tunisia", "Group F"]
    ],
    guide: {
      vibe: "Beach party, Art Deco style, Latin fusion, nightlife",
      transit: "Tri-Rail plus rideshare; driving is often easiest",
      airport: "MIA ~10 mi",
      stay: "Miami Beach or Coral Gables",
      budget: "High",
      weather: "Very hot and humid, 90-95°F. Storms common.",
      food: "Cuban sandwiches, ceviche, stone crab, mojitos",
      tip: "Public transport is limited around the stadium. Budget for rideshare."
    }
  },
  {
    id: "lincoln",
    name: "Lincoln Financial Field",
    city: "Philadelphia",
    country: "USA",
    flag: "🇺🇸",
    capacity: "69,796",
    matches: [
      ["Jun 13", "8:00pm ET", "Mexico vs South Korea", "Group C"],
      ["Jun 17", "3:00pm ET", "Senegal vs Switzerland", "Group G"],
      ["Jun 21", "6:00pm ET", "England vs USA", "Group L"],
      ["Jun 26", "3:00pm ET", "Argentina vs Chile", "Group D"]
    ],
    guide: {
      vibe: "Rocky spirit, American history, cheesesteak debates",
      transit: "SEPTA Broad Street Line to NRG Station",
      airport: "Philadelphia Intl (PHL) ~10 mi SW",
      stay: "Center City near Rittenhouse Square",
      budget: "Medium",
      weather: "Hot and humid, 85-92°F",
      food: "Cheesesteaks, soft pretzels, water ice",
      tip: "Stay near the Broad Street Line for the easiest stadium commute."
    }
  },
  {
    id: "bcplace",
    name: "BC Place",
    city: "Vancouver",
    country: "Canada",
    flag: "🇨🇦",
    capacity: "54,500",
    matches: [
      ["Jun 12", "7:00pm PT", "Canada vs Morocco", "Group D"],
      ["Jun 18", "4:00pm PT", "Mexico vs Poland", "Group C"],
      ["Jun 23", "10:00am PT", "Cameroon vs Uruguay", "Group B"],
      ["Jun 26", "10:00am PT", "Australia vs England", "Group L"]
    ],
    guide: {
      vibe: "Mountain meets ocean, multicultural food, outdoor access",
      transit: "SkyTrain to Stadium-Chinatown station",
      airport: "YVR ~10 mi",
      stay: "Downtown Vancouver, Yaletown, or Gastown",
      budget: "High",
      weather: "Mild, 65-75°F. Light rain possible.",
      food: "Pacific salmon, poutine, dim sum, craft beer",
      tip: "Get a Compass Card and leave time for waterfront walks."
    }
  },
  {
    id: "bmo",
    name: "BMO Field",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    capacity: "30,000",
    matches: [
      ["Jun 13", "TBD", "Netherlands vs Qatar", "Group A"],
      ["Jun 18", "TBD", "England vs Canada", "Group F"],
      ["Jun 24", "TBD", "France vs Denmark", "Group E"],
      ["Jun 27", "TBD", "South Korea vs Ghana", "Group H"]
    ],
    guide: {
      vibe: "Canada's most multicultural city and a deep food scene",
      transit: "TTC streetcar to Exhibition Place",
      airport: "Pearson (YYZ) ~30 min",
      stay: "Downtown, King West, or the Annex",
      budget: "Medium",
      weather: "Warm, 75-85°F. Humidity can be high.",
      food: "Peameal bacon sandwiches, butter tarts, global cuisines",
      tip: "A PRESTO card covers local transit and makes short hops easier."
    }
  },
  {
    id: "bbva",
    name: "Estadio BBVA",
    city: "Monterrey",
    country: "Mexico",
    flag: "🇲🇽",
    capacity: "53,500",
    matches: [
      ["Jun 13", "TBD", "Portugal vs Angola", "Group G"],
      ["Jun 18", "TBD", "Argentina vs Colombia", "Group F"],
      ["Jun 23", "TBD", "Peru vs Venezuela", "Group D"],
      ["Jul 5", "TBD", "Round of 16", "Knockout"]
    ],
    guide: {
      vibe: "Industrial city with a dramatic mountain backdrop",
      transit: "Metro and taxis are widely available",
      airport: "MTY ~30 min",
      stay: "San Pedro Garza García or Barrio Antiguo",
      budget: "Lower",
      weather: "Very hot, 95-105°F. Dry heat.",
      food: "Cabrito, machacado, pan de polvo, craft beer",
      tip: "Carry pesos and plan indoor breaks during peak heat."
    }
  },
  {
    id: "akron",
    name: "Estadio Akron",
    city: "Guadalajara",
    country: "Mexico",
    flag: "🇲🇽",
    capacity: "49,850",
    matches: [
      ["Jun 11", "TBD", "South Korea vs Czechia", "Group A"],
      ["Jun 18", "TBD", "Mexico vs South Korea", "Group A"],
      ["Jun 23", "TBD", "Colombia vs TBD", "Group K"],
      ["Jun 26", "TBD", "Uruguay vs Spain", "Group H"]
    ],
    guide: {
      vibe: "Tequila country, mariachi roots, colonial charm",
      transit: "Light rail to nearby stations plus taxi",
      airport: "GDL ~25 min",
      stay: "Chapultepec neighborhood or Historic Center",
      budget: "Lower",
      weather: "Mild, 70-82°F. Rainy season begins June.",
      food: "Birria tacos, pozole, torta ahogada, tequila",
      tip: "Add time for Tlaquepaque and a tequila-region side trip."
    }
  }
];

const TIMELINE = [
  ["Group Stage", "Jun 11-Jul 3", "48 matches across all host nations."],
  ["Round of 32", "Jun 26-Jul 3", "The first knockout layer begins while group play winds down."],
  ["Round of 16", "Jul 1-Jul 8", "Shortlist cities with strong transit if you are chasing multiple matches."],
  ["Quarterfinals", "Jul 6-Jul 9", "Demand rises sharply for hotels and flights."],
  ["Semifinals", "Jul 14-Jul 15", "Build buffer days around travel."],
  ["Final", "Jul 19", "MetLife Stadium in the New York / New Jersey area."]
];

const CITY_COMPARE = [
  ["New York/NJ", 5, 5, 5, 5, 5, 3],
  ["Los Angeles", 4, 3, 5, 5, 4, 5],
  ["Miami", 4, 2, 5, 5, 3, 3],
  ["Atlanta", 3, 4, 4, 4, 5, 3],
  ["Houston", 3, 3, 3, 4, 4, 2],
  ["Seattle", 3, 4, 4, 4, 4, 4],
  ["Mexico City", 5, 5, 5, 5, 4, 5],
  ["Vancouver", 3, 5, 4, 5, 3, 4]
];

const ESSENTIAL_TIPS = [
  ["Tickets", "🎫", ["Use official tournament ticketing channels.", "Expect mobile ticketing and app-based entry.", "Treat unusually cheap resale offers as suspicious."]],
  ["Entry & Visas", "🛂", ["Check entry rules for each country on your itinerary.", "Carry a passport that remains valid beyond your trip.", "Do not assume USA, Canada, and Mexico share the same requirements."]],
  ["Health & Safety", "💊", ["Buy travel insurance that covers medical care.", "Hydrate aggressively in hot-weather host cities.", "Give yourself a rest day when arriving in Mexico City."]],
  ["Money", "💳", ["Carry local currency in Mexico and Canada.", "Notify your bank before crossing borders.", "Use cards in stadiums but keep backup cash for markets and taxis."]],
  ["Connectivity", "📱", ["Download offline maps before flying.", "Consider a local SIM or eSIM for longer stays.", "Keep ticket apps logged in before leaving Wi-Fi."]],
  ["Stadium Rules", "🎒", ["Check clear-bag rules before packing.", "Arrive at least 90 minutes before kickoff.", "Review prohibited items for each stadium."]]
];

const QUIZ = [
  ["What's your top priority?", ["Most matches", "Best city exploring", "Save money", "Best nightlife"]],
  ["What is your daily budget?", ["Under $150", "$150-300", "$300-500", "No strict limit"]],
  ["How do you feel about heat?", ["Love it", "Prefer mild weather", "Avoid intense heat", "No preference"]],
  ["How important is public transit?", ["Essential", "Nice to have", "I will rent a car", "No preference"]]
];

const state = {
  filter: "all",
  scheduleOpen: false,
  quizStep: 0,
  quizAnswers: []
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderStadiums() {
  const grid = $("#stadium-grid");
  const stadiums = state.filter === "all"
    ? STADIUMS
    : STADIUMS.filter(stadium => stadium.country === state.filter);

  grid.innerHTML = stadiums.map(stadium => `
    <article class="stadium-card country-${stadium.country}">
      <div class="card-top">
        <span class="flag" aria-hidden="true">${stadium.flag}</span>
        <div>
          <h3>${escapeHtml(stadium.name)}</h3>
          <p>${escapeHtml(stadium.city)}</p>
        </div>
      </div>
      <div class="meta-row">
        <span class="pill">${escapeHtml(stadium.country)}</span>
        <span class="pill">${escapeHtml(stadium.capacity)} seats</span>
        <span class="pill">${stadium.matches.length} matches</span>
      </div>
      <p>${escapeHtml(stadium.guide.vibe)}</p>
    </article>
  `).join("");
}

function renderSchedule() {
  $("#schedule-list").innerHTML = STADIUMS.map((stadium, index) => `
    <article class="schedule-item ${state.scheduleOpen || index === 0 ? "open" : ""}">
      <button class="schedule-toggle" type="button" aria-expanded="${state.scheduleOpen || index === 0}" data-schedule-toggle>
        <span>
          <strong>${stadium.flag} ${escapeHtml(stadium.name)}</strong>
          <span>${escapeHtml(stadium.city)} · ${stadium.matches.length} matches</span>
        </span>
        <span aria-hidden="true">+</span>
      </button>
      <div class="match-list">
        ${stadium.matches.map(match => `
          <div class="match-row">
            <strong>${escapeHtml(match[0])}</strong>
            <span>${escapeHtml(match[2])}<br><small>${escapeHtml(match[1])}</small></span>
            <span class="match-stage">${escapeHtml(match[3])}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderCityGuides() {
  $("#city-guides").innerHTML = STADIUMS.map(stadium => `
    <article class="city-card country-${stadium.country}">
      <div>
        <h3>${stadium.flag} ${escapeHtml(stadium.city)}</h3>
        <p>${escapeHtml(stadium.name)}</p>
      </div>
      <blockquote>${escapeHtml(stadium.guide.vibe)}</blockquote>
      <div class="city-details">
        <span><strong>Transit:</strong> ${escapeHtml(stadium.guide.transit)}</span>
        <span><strong>Airport:</strong> ${escapeHtml(stadium.guide.airport)}</span>
        <span><strong>Stay:</strong> ${escapeHtml(stadium.guide.stay)}</span>
        <span><strong>Weather:</strong> ${escapeHtml(stadium.guide.weather)}</span>
        <span><strong>Budget:</strong> ${escapeHtml(stadium.guide.budget)}</span>
        <span><strong>Eat:</strong> ${escapeHtml(stadium.guide.food)}</span>
      </div>
      <p><strong>Reader note:</strong> ${escapeHtml(stadium.guide.tip)}</p>
    </article>
  `).join("");
}

function renderTimeline() {
  $("#timeline-list").innerHTML = TIMELINE.map(item => `
    <article class="timeline-item">
      <div class="timeline-date">${escapeHtml(item[1].split("-")[0])}</div>
      <div class="timeline-copy">
        <h3>${escapeHtml(item[0])}</h3>
        <p><strong>${escapeHtml(item[1])}</strong> · ${escapeHtml(item[2])}</p>
      </div>
    </article>
  `).join("");
}

function renderComparison() {
  $("#comparison-body").innerHTML = CITY_COMPARE.map(row => `
    <tr>
      <th scope="row">${escapeHtml(row[0])}</th>
      ${row.slice(1).map(score => `
        <td>
          <span class="score" aria-label="${score} out of 5">
            <span style="width:${score * 20}%"></span>
          </span>
        </td>
      `).join("")}
    </tr>
  `).join("");
}

function renderTips() {
  $("#tips-grid").innerHTML = ESSENTIAL_TIPS.map(tip => `
    <article class="tip-card">
      <h3>${tip[1]} ${escapeHtml(tip[0])}</h3>
      <ul>
        ${tip[2].map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function getQuizResult() {
  const answers = state.quizAnswers;
  if (answers[0] === "Most matches") return STADIUMS.find(stadium => stadium.id === "metlife");
  if (answers[0] === "Save money" || answers[1] === "Under $150") return STADIUMS.find(stadium => stadium.id === "azteca");
  if (answers[2] === "Avoid intense heat") return STADIUMS.find(stadium => stadium.id === "bcplace");
  if (answers[0] === "Best nightlife") return STADIUMS.find(stadium => stadium.id === "sofi");
  if (answers[3] === "Essential") return STADIUMS.find(stadium => stadium.id === "bmo");
  return STADIUMS.find(stadium => stadium.id === "mercedes");
}

function renderPlanner() {
  const progress = $("#planner-progress");
  const body = $("#planner-body");
  const isComplete = state.quizStep >= QUIZ.length;
  const percent = isComplete ? 100 : Math.round((state.quizStep / QUIZ.length) * 100);
  progress.innerHTML = `<span style="width:${percent}%"></span>`;

  if (isComplete) {
    const result = getQuizResult();
    body.innerHTML = `
      <div class="planner-result">
        <p class="eyebrow">Suggested starting point</p>
        <div class="result-city">${result.flag} ${escapeHtml(result.city)}</div>
        <p>${escapeHtml(result.guide.vibe)} It offers ${result.matches.length} listed matches and a ${escapeHtml(result.guide.budget.toLowerCase())} budget profile.</p>
        <div class="planner-actions">
          <a class="button primary" href="#cities">Read City Guides</a>
          <button class="button slim" type="button" data-retake>Retake Planner</button>
        </div>
      </div>
    `;
    return;
  }

  const question = QUIZ[state.quizStep];
  body.innerHTML = `
    <p class="quiz-question">${escapeHtml(question[0])}</p>
    <div class="quiz-options">
      ${question[1].map(option => `<button type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
    </div>
  `;
}

function bindEvents() {
  $(".menu-toggle").addEventListener("click", event => {
    const isOpen = document.body.classList.toggle("nav-open");
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".book-nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      $(".menu-toggle").setAttribute("aria-expanded", "false");
    });
  });

  $("[data-print]").addEventListener("click", () => window.print());

  $$(".segmented-control button").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      $$(".segmented-control button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderStadiums();
    });
  });

  $("[data-expand-schedule]").addEventListener("click", event => {
    state.scheduleOpen = !state.scheduleOpen;
    event.currentTarget.textContent = state.scheduleOpen ? "Collapse All" : "Expand All";
    renderSchedule();
  });

  $("#schedule-list").addEventListener("click", event => {
    const toggle = event.target.closest("[data-schedule-toggle]");
    if (!toggle) return;
    const item = toggle.closest(".schedule-item");
    item.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(item.classList.contains("open")));
  });

  $("#planner-body").addEventListener("click", event => {
    const answer = event.target.closest("[data-answer]");
    if (answer) {
      state.quizAnswers[state.quizStep] = answer.dataset.answer;
      state.quizStep += 1;
      renderPlanner();
      return;
    }

    if (event.target.closest("[data-retake]")) {
      state.quizStep = 0;
      state.quizAnswers = [];
      renderPlanner();
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      $$(".book-nav a").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  $$(".chapter").forEach(section => observer.observe(section));
}

function init() {
  renderStadiums();
  renderSchedule();
  renderCityGuides();
  renderTimeline();
  renderComparison();
  renderTips();
  renderPlanner();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);