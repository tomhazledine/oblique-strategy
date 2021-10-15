const strategies = [
  {
    edition: 1,
    name: "Edition 1",
    year: "1975",
    strategies: [
      "Abandon normal instruments",
      "Accept advice",
      "Accretion",
      "A line has two sides",
      "Allow an easement (an easement is the abandonment of a stricture)",
      "Are there sections? Consider transitions",
      "Ask people to work against their better judgment",
      "Ask your body",
      "Assemble some of the instruments in a group and treat the group",
      "Balance the consistency principle with the inconsistency principle",
      "Be dirty",
      "Breathe more deeply",
      "Bridges - build - burn",
      "Cascades",
      "Change instrument roles",
      "Change nothing and continue with immaculate consistency",
      "Children's voices - speaking - singing",
      "Cluster analysis",
      "Consider different fading systems",
      "Consult other sources - promising - unpromising",
      "Convert a melodic element into a rhythmic element",
      "Courage",
      "Cut a vital connection",
      "Decorate, decorate",
      "Define an area as 'safe' and use it as an anchor",
      "Destroy - nothing - the most important thing",
      "Discard an axiom",
      "Disconnect from desire",
      "Discover the recipes you are using and abandon them",
      "Distorting time",
      "Do nothing for as long as possible",
      "Don't be afraid of things because they're easy to do",
      "Don't be frightened of cliches",
      "Don't be frightened to display your talents",
      "Don't break the silence",
      "Don't stress one thing more than another",
      "Do something boring",
      "Do the washing up",
      "Do the words need changing",
      "Do we need holes",
      "Emphasize differences",
      "Emphasize repetitions",
      "Emphasize the flaws",
      "Faced with a choice, do both",
      "Feedback recordings into an acoustic situation",
      "Fill every beat with something",
      "Get your neck massaged",
      "Ghost echoes",
      "Give the game away",
      "Give way to your worst impulse",
      "Go slowly all the way round the outside",
      "Honor thy error as a hidden intention",
      "How would you have done it",
      "Humanize something free of error",
      "Imagine the music as a moving chain or caterpillar",
      "Imagine the music as a set of disconnected events",
      "Infinitesimal gradations",
      "Intentions - credibility of - nobility of - humility of",
      "Into the impossible",
      "Is it finished",
      "Is there something missing",
      "Is the tuning appropriate",
      "Just carry on",
      "Left channel, right channel, centre channel",
      "Listen in total darkness, or in a very large room, very quietly",
      "Listen to the quiet voice",
      "Look at a very small object, look at its centre",
      "Look at the order in which you do things",
      "Look closely at the most embarrassing details and amplify them",
      "Lowest common denominator check - single beat - single note - single riff",
      "Make a blank valuable by putting it in an exquisite frame",
      "Make an exhaustive list of everything you might do and do the last thing on the list",
      "Make a sudden, destructive unpredictable action; incorporate",
      "Mechanicalize something idiosyncratic",
      "Mute and continue",
      "Only one element of each kind",
      "(Organic) machinery",
      "Overtly resist change",
      "Put in earplugs",
      "Remember those quiet evenings",
      "Remove ambiguities and convert to specifics",
      "Remove specifics and convert to ambiguities",
      "Repetition is a form of change",
      "Reverse",
      "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
      "Shut the door and listen from outside",
      "Simple subtraction",
      "Spectrum analysis",
      "Take a break",
      "Take away the elements in order of apparent non-importance",
      "Tape your mouth",
      "The inconsistency principle",
      "The tape is now the music",
      "Think of the radio",
      "Tidy up",
      "Trust in the you of now",
      "Turn it upside down",
      "Twist the spine",
      "Use an old idea",
      "Use an unacceptable color",
      "Use fewer notes",
      "Use filters",
      "Use 'unqualified' people",
      "Water",
      "What are you really thinking about just now? Incorporate",
      "What is the reality of the situation",
      "What mistakes did you make last time",
      "What would your closest friend do",
      "What wouldn't you do",
      "Work at a different speed",
      "You are an engineer",
      "You can only make one dot at a time",
      "You don't have to be ashamed of using your own ideas",
    ],
  },
  {
    edition: 2,
    name: "Edition 2",
    year: "1978",
    strategies: [
      "Abandon normal instruments",
      "Accept advice",
      "Accretion",
      "A line has two sides",
      "Allow an easement (an easement is the abandonment of a stricture)",
      "Always first steps",
      "Always give yourself credit for having more than personality",
      "Are there sections? Consider transitions",
      "Ask people to work against their better judgment",
      "Ask your body",
      "Assemble some of the instruments in a group and treat the group",
      "A very small object - Its centre",
      "Balance the consistency principle with the inconsistency principle",
      "Be dirty",
      "Be extravagant",
      "Breathe more deeply",
      "Bridges - build - burn",
      "Cascades",
      "Change instrument roles",
      "Change nothing and continue with immaculate consistency",
      "Children's voices - speaking - singing",
      "Cluster analysis",
      "Consider different fading systems",
      "Consult other sources - promising - unpromising",
      "Convert a melodic element into a rhythmic element",
      "Courage",
      "Cut a vital connection",
      "Decorate, decorate",
      "Define an area as 'safe' and use it as an anchor",
      "Destroy - nothing - the most important thing",
      "Discard an axiom",
      "Disciplined self-indulgence",
      "Disconnect from desire",
      "Discover the recipes you are using and abandon them",
      "Distorting time",
      "Do nothing for as long as possible",
      "Don't be afraid of things because they're easy to do",
      "Don't be frightened of cliches",
      "Don't be frightened to display your talents",
      "Don't break the silence",
      "Don't stress on thing more than another",
      "Do something boring",
      "Do the washing up",
      "Do the words need changing",
      "Do we need holes",
      "Emphasize differences",
      "Emphasize repetitions",
      "Emphasize the flaws",
      "Faced with a choice, do both",
      "Feed the recording back out of the medium",
      "Fill every beat with something",
      "Get your neck massaged",
      "Ghost echoes",
      "Give the game away",
      "Give way to your worst impulse",
      "Go outside. Shut the door",
      "Go slowly all the way round the outside",
      "Honor thy error as a hidden intention",
      "How would you have done it",
      "Humanize something free of error",
      "Idiot glee (?)",
      "Imagine the piece as a set of disconnected events",
      "Infinitesimal gradations",
      "Intentions - credibility of - nobility of - humility of",
      "In total darkness, or in a very large room, very quietly",
      "Into the impossible",
      "Is it finished",
      "Is the tuning intonation correct",
      "Is there something missing",
      "It is quite possible (after all)",
      "Just carry on",
      "Left channel, right channel, centre channel",
      "Listen to the quiet voice",
      "Look at the order in which you do things",
      "Look closely at the most embarrassing details and amplify them",
      "Lost in useless territory",
      "Lowest common denominator",
      "Make a blank valuable by putting it in an exquisite frame",
      "Make an exhaustive list of everything you might do and do the last thing on the list",
      "Make a sudden, destructive unpredictable action; incorporate",
      "Mechanicalize something idiosyncratic",
      "Mute and continue",
      "Not building a wall but making a brick",
      "Only one element of each kind",
      "(Organic) machinery",
      "Overtly resist change",
      "Put in earplugs",
      "Question the heroic approach",
      "Remember those quiet evenings",
      "Remove ambiguities and convert to specifics",
      "Remove specifics and convert to ambiguities",
      "Repetition is a form of change",
      "Revaluation (a warm feeling)",
      "Reverse",
      "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
      "Simple subtraction",
      "Simply a matter of work",
      "Spectrum analysis",
      "State the problem in words as simply as possible",
      "Take a break",
      "Take away the elements in order of apparent non-importance",
      "Tape your mouth",
      "The inconsistency principle",
      "The most important thing is the thing most easily forgotten",
      "The tape is now the music",
      "Think of the radio",
      "Tidy up",
      "Towards the insignificant",
      "Trust in the you of now",
      "Turn it upside down",
      "Twist the spine",
      "Use an old idea",
      "Use an unacceptable color",
      "Use fewer notes",
      "Use filters",
      "Use 'unqualified' people",
      "Water",
      "What are the sections sections of?  Imagine a caterpillar moving",
      "What are you really thinking about just now",
      "What is the reality of the situation",
      "What mistakes did you make last time",
      "What would your closest friend do",
      "What wouldn't you do",
      "What would your closest friend do",
      "Work at a different speed",
      "You are an engineer",
      "You can only make one dot at a time",
      "You don't have to be ashamed of using your own ideas",
    ],
  },
  {
    edition: 3,
    name: "Edition 3",
    year: "1979",
    strategies: [
      "Abandon normal instruments",
      "Accept advice",
      "Accretion",
      "A line has two sides",
      "Allow an easement (an easement is the abandonment of a stricture)",
      "Always first steps",
      "Are there sections? Consider transitions",
      "Ask people to work against their better judgment",
      "Ask your body",
      "Assemble some of the elements in a group and treat the group",
      "Balance the consistency principle with the inconsistency principle",
      "Be dirty",
      "Be extravagant",
      "Be less critical more often",
      "Breathe more deeply",
      "Bridges - build - burn",
      "Cascades",
      "Change instrument roles",
      "Change nothing and continue with immaculate consistency",
      "Children - speaking - singing",
      "Cluster analysis",
      "Consider different fading systems",
      "Consult other sources - promising - unpromising",
      "Courage",
      "Cut a vital connection",
      "Decorate, decorate",
      "Define an area as 'safe' and use it as an anchor",
      "Destroy - nothing - the most important thing",
      "Discard an axiom",
      "Disciplined self-indulgence",
      "Disconnect from desire",
      "Discover the recipes you are using and abandon them",
      "Distorting time",
      "Do nothing for as long as possible",
      "Don't be afraid of things because they're easy to do",
      "Don't be frightened of cliches",
      "Don't be frightened to display your talents",
      "Don't break the silence",
      "Don't stress one thing more than another",
      "Do something boring",
      "Do the words need changing",
      "Do we need holes",
      "Emphasize differences",
      "Emphasize repetitions",
      "Emphasize the flaws",
      "Fill every beat with something",
      "From nothing to more than nothing",
      "Ghost echoes",
      "Give the game away",
      "Give way to your worst impulse",
      "Go outside. Shut the door",
      "Go slowly all the way round the outside",
      "Go to an extreme, move back to a more comfortable place",
      "Honor thy error as a hidden intention",
      "How would you have done it",
      "Humanize something free of error",
      "Idiot glee (?)",
      "Imagine the piece as a set of disconnected events",
      "Infinitesimal gradations",
      "Intentions - nobility of - humility of - credibility of",
      "In total darkness, or in a very large room, very quietly",
      "Into the impossible",
      "Is it finished",
      "Is the intonation correct",
      "Is there something missing",
      "It is quite possible (after all)",
      "Just carry on",
      "Listen to the quiet voice",
      "Look at the order in which you do things",
      "Look closely at the most embarrassing details and amplify them",
      "Lost in useless territory",
      "Lowest common denominator",
      "Make a blank valuable by putting it in an exquisite frame",
      "Make an exhaustive list of everything you might do and do the last thing on the list",
      "Make a sudden, destructive unpredictable action; incorporate",
      "Mechanicalize something idiosyncratic",
      "Mute and continue",
      "Not building a wall but making a brick",
      "Once the search is in progress, something will be found",
      "Only a part, not the whole",
      "Only one element of each kind",
      "(Organic) machinery",
      "Overtly resist change",
      "Question the heroic approach",
      "Remember those quiet evenings",
      "Remove ambiguities and convert to specifics",
      "Remove specifics and convert to ambiguities",
      "Repetition is a form of change",
      "Retrace your steps",
      "Revaluation (a warm feeling)",
      "Reverse",
      "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
      "Simple subtraction",
      "Simply a matter of work",
      "State the problem in words as clearly as possible",
      "Take a break",
      "Take away the elements in order of apparent non-importance",
      "The inconsistency principle",
      "The most important thing is the thing most easily forgotten",
      "The tape is now the music",
      "Think of the radio",
      "Tidy up",
      "Towards the insignificant",
      "Trust in the you of now",
      "Turn it upside down",
      "Use an old idea",
      "Use an unacceptable color",
      "Use fewer notes",
      "Use filters",
      "Use 'unqualified' people",
      "Water",
      "What are the sections sections of?  Imagine a caterpillar moving",
      "What are you really thinking about just now",
      "What is the reality of the situation",
      "What mistakes did you make last time",
      "What wouldn't you do",
      "What would your closest friend do",
      "Work at a different speed",
      "Would anybody want it",
      "You are an engineer",
      "You can only make one dot at a time",
      "You don't have to be ashamed of using your own ideas",
    ],
  },
  {
    edition: 4,
    name: "Edition 4",
    year: "1996",
    strategies: [
      "Abandon desire",
      "Abandon normal instructions",
      "Accept advice",
      "Adding on",
      "A line has two sides",
      "Always the first steps",
      "Ask people to work against their better judgment",
      "Ask your body",
      "Be dirty",
      "Be extravagant",
      "Be less critical",
      "Breathe more deeply",
      "Bridges - build - burn",
      "Change ambiguities to specifics",
      "Change nothing and continue consistently",
      "Change specifics to ambiguities",
      "Consider transitions",
      "Courage",
      "Cut a vital connection",
      "Decorate, decorate",
      "Destroy nothing; Destroy the most important thing",
      "Discard an axiom",
      "Disciplined self-indulgence",
      "Discover your formulas and abandon them",
      "Display your talent",
      "Distort time",
      "Do nothing for as long as possible",
      "Don't avoid what is easy",
      "Don't break the silence",
      "Don't stress one thing more than another",
      "Do something boring",
      "Do something sudden, destructive and unpredictable",
      "Do the last thing first",
      "Do the words need changing",
      "Emphasize differences",
      "Emphasize the flaws",
      "Faced with a choice, do both",
      "Find a safe part and use it as an anchor",
      "Give the game away",
      "Give way to your worst impulse",
      "Go outside. Shut the door",
      "Go outside. Shut the door",
      "Go to an extreme, come part way back",
      "How would someone else do it",
      "How would you have done it",
      "In total darkness, or in a very large room, very quietly",
      "Is it finished",
      "Is something missing",
      "Is the style right",
      "It is simply a matter or work",
      "Just carry on",
      "Listen to the quiet voice",
      "Look at the order in which you do things",
      "Magnify the most difficult details",
      "Make it more sensual",
      "Make what's perfect more human",
      "Move towards the unimportant",
      "Not building a wall; making a brick",
      "Once the search has begun, something will be found",
      "Only a part, not the whole",
      "Only one element of each kind",
      "Openly resist change",
      "{Pae White's non-blank graphic metacard}",
      "Question the heroic",
      "Remember quiet evenings",
      "Remove a restriction",
      "Repetition is a form of change",
      "Retrace your steps",
      "Reverse",
      "Simple subtraction",
      "Slow preparation, fast execution",
      "State the problem as clearly as possible",
      "Take a break",
      "Take away the important parts",
      "The inconsistency principle",
      "The most easily forgotten thing is the most important",
      "Think - inside the work - outside the work",
      "Tidy up",
      "Try faking it",
      "Turn it upside down",
      "Use an old idea",
      "Use cliches",
      "Use filters",
      "Use something nearby as a model",
      "Use 'unqualified' people",
      "Use your own ideas",
      "Voice your suspicions",
      "Water",
      "What context would look right",
      "What is the simplest solution",
      "What mistakes did you make last time",
      "What to increase? What to reduce? What to maintain?",
      "What were you really thinking about just now",
      "What wouldn't you do",
      "What would your closest friend do",
      "When is it for",
      "Where is the edge",
      "Which parts can be grouped",
      "Work at a different speed",
      "Would anyone want it",
      "Your mistake was a hidden intention",
    ],
  },
  {
    edition: 5,
    name: "Edition 5",
    year: "2002",
    strategies: [
      "A line has two sides",
      "A very small object - Its centre",
      "Abandon normal instruments",
      "Accept advice",
      "Accretion",
      "Allow an easement (an easement is the abandonment of a stricture)",
      "Always first steps",
      "Always give yourself credit for having more than personality",
      "Are there sections? Consider transitions",
      "Ask people to work against their better judgment",
      "Ask your body",
      "Assemble some of the elements in a group and treat the group",
      "Balance the consistency principle with the inconsistency principle",
      "Be dirty",
      "Be extravagant",
      "Breathe more deeply",
      "Bridges - build - burn",
      "Cascades",
      "Change instrument roles",
      "Change nothing and continue with immaculate consistency",
      "Children - speaking - singing",
      "Cluster analysis",
      "Consider different fading systems",
      "Consult other sources - promising - unpromising",
      "Convert a melodic element into a rhythmic element",
      "Courage",
      "Cut a vital connection",
      "Decorate, decorate",
      "Define an area as 'safe' and use it as an anchor",
      "Destroy - nothing - the most important thing",
      "Discard an axiom",
      "Disciplined self-indulgence",
      "Disconnect from desire",
      "Discover the recipes you are using and abandon them",
      "Distorting time",
      "Do nothing for as long as possible",
      "Do something boring",
      "Do the washing up",
      "Do the words need changing",
      "Do we need holes",
      "Don't be afraid of things because they're easy to do",
      "Don't be frightened of cliches",
      "Don't be frightened to display your talents",
      "Don't break the silence",
      "Don't stress on thing more than another",
      "Emphasize differences",
      "Emphasize repetitions",
      "Emphasize the flaws",
      "Faced with a choice, do both",
      "Feed the recording back out of the medium",
      "Fill every beat with something",
      "Get your neck massaged",
      "Ghost echoes",
      "Give the name away",
      "Give way to your worst impulse",
      "Go outside. Shut the door",
      "Go slowly all the way round the outside",
      "Honor thy error as a hidden intention",
      "How would you have done it",
      "Humanize something free of error",
      "Idiot glee (?)",
      "Imagine the piece as a set of disconnected events",
      "Infinitesimal gradations",
      "Intentions - nobility of - humility of - credibility of",
      "Into the impossible",
      "Is it finished",
      "Is the information correct",
      "Is there something missing",
      "It is quite possible (after all)",
      "Just carry on",
      "Left channel, right channel, centre channel",
      "Listen to the quiet voice",
      "Look at the order in which you do things",
      "Look closely at the most embarrassing details and amplify them",
      "Lost in useless territory",
      "Lowest common denominator",
      "Make a blank valuable by putting it in an exquisite frame",
      "Make a sudden, destructive unpredictable action; incorporate",
      "Make an exhaustive list of everything you might do and do the last thing on the list",
      "Mechanicalize something idiosyncratic",
      "Mute and continue",
      "Not building a wall but making a brick",
      "Only one element of each kind",
      "(Organic) machinery",
      "Overtly resist change",
      "Put in earplugs",
      "Question the heroic approach",
      "Reevaluation (a warm feeling)",
      "Remember those quiet evenings",
      "Remove ambiguities and convert to specifics",
      "Remove specifics and convert to ambiguities",
      "Repetition is a form of change",
      "Reverse",
      "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
      "Simple subtraction",
      "Simply a matter of work",
      "Spectrum analysis",
      "State the problem in words as clearly as possible",
      "Take a break",
      "Take away the elements in order of apparent non-importance",
      "Tape your mouth",
      "The inconsistency principle",
      "The most important thing is the thing most easily forgotten",
      "The tape is now the music",
      "Think of the radio",
      "Tidy up",
      "Towards the insignificant",
      "Trust in the you of now",
      "Turn it upside down",
      "Twist the spine",
      "Use an old idea",
      "Use an unacceptable color",
      "Use fewer notes",
      "Use filters",
      "Use 'unqualified' people",
      "Water",
      "What are the sections sections of?  Imagine a caterpillar moving",
      "What are you really thinking about just now",
      "What is the reality of the situation",
      "What mistakes did you make last time",
      "What would your closest friend do",
      "What wouldn't you do",
      "Work at a different speed",
      "You are an engineer",
      "You can only make one dot at a time",
      "You don't have to be ashamed of using your own ideas",
    ],
  },
];
module.exports = { strategies };
