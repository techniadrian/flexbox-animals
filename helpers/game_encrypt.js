var levels = {
  1: {
    animals: [{ name: "frog" }],
    background: { justifyContent: "flex-end" },
    prompt: "Użyj <code>justify-content</code>.",
    successPrompt: "Nice! 😉",
  },
  2: {
    animals: [{ name: "frog" }, { name: "crab" }],
    background: { justifyContent: "center" },
    prompt: "Użyj <code>justify-content</code>.",
    successPrompt: "Dobrze, dobrze, jedziemy dalej! 😃",
  },
  3: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { justifyContent: "space-around" },
    prompt: "Użyj <code>justify-content</code>.",
    successPrompt: "EZ 😎",
  },
  4: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { justifyContent: "space-between" },
    prompt: "Użyj <code>justify-content</code>.",
    successPrompt: "goood job 👍",
  },
  5: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { alignItems: "flex-end" },
    prompt: "Użyj <code>align-items</code>.",
    successPrompt: "Super Ci idzie!",
  },
  6: {
    animals: [{ name: "frog" }],
    background: { justifyContent: "center", alignItems: "center" },
    prompt: "Użyj <code>justify-content</code> i <code>align-items</code>.",
    successPrompt:
      "No, już będziesz wiedział jak wyśrodkować w pionie i poziomie 😀",
  },
  7: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { justifyContent: "space-around", alignItems: "flex-end" },
    prompt: "Użyj <code>justify-content</code> i <code>align-items</code>.",
    successPrompt: "🥰🥰🥰🥰",
  },
  8: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { flexDirection: "row-reverse" },
    prompt: "Użyj <code>flex-direction</code>.",
    successPrompt: "tak jest!! 🥳",
  },
  9: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { flexDirection: "column" },
    prompt: "Użyj <code>flex-direction</code>.",
    successPrompt: "nice, dawaj next!",
  },
  10: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { flexDirection: "row-reverse", justifyContent: "flex-end" },
    prompt: "Użyj <code>flex-direction</code> i <code>justify-content</code>.",
    successPrompt: "to chyba nie było takie łatwe 😜",
  },
  11: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: { flexDirection: "column", justifyContent: "flex-end" },
    prompt: "Użyj <code>flex-direction</code> i <code>justify-content</code>.",
    successPrompt: "GOOD JOB!!! 😊",
  },
  12: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: {
      flexDirection: "column-reverse",
      justifyContent: "space-between",
    },
    prompt: "Użyj <code>flex-direction</code> i <code>justify-content</code>.",
    successPrompt: "Masz pozdrowienia od wielbłąda! 🐪",
  },
  13: {
    animals: [{ name: "frog" }, { name: "crab" }, { name: "camel" }],
    background: {
      flexDirection: "row-reverse",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    prompt:
      "Użyj <code>flex-direction</code>, <code>justify-content</code> i <code>align-items</code>",
    successPrompt: "Lol jak ty robisz??",
  },
  14: {
    animals: [{ name: "frog" }, { name: "crab", order: 2 }, { name: "camel" }],
    background: {},
    prompt: "Użyj <code>order</code>.",
    successPrompt: "ale ty masz esse 🤙🤙",
  },
  15: {
    animals: [
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "fish", order: -1 },
    ],
    background: {},
    prompt: "Użyj <code>order</code>.",
    successPrompt: "dobra to było łatwe 😁",
  },
  16: {
    animals: [
      { name: "pig", order: 2 },
      { name: "frog" },
      { name: "pig", order: 2 },
      { name: "frog" },
      { name: "frog" },
    ],
    background: {},
    prompt: "Użyj <code>order</code>.",
    successPrompt: "to też było łatwe 😁",
  },
  17: {
    animals: [
      { name: "camel", order: 2, alignSelf: "flex-end" },
      { name: "frog" },
      { name: "camel", order: 2, alignSelf: "flex-end" },
      { name: "frog" },
      { name: "frog" },
    ],
    background: {},
    prompt: "Użyj <code>order</code> i <code>align-self</code>.",
    successPrompt: "TAK",
  },
  18: {
    animals: [
      { name: "camel" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "crab" },
    ],
    background: {
      flexWrap: "wrap",
    },
    prompt: "Użyj <code>flex-wrap</code>.",

    successPrompt: "ale żeś zawinął 🌯🌯🌯",
  },
  19: {
    animals: [
      { name: "fish" },
      { name: "camel" },
      { name: "camel" },
      { name: "camel" },
      { name: "camel" },
      { name: "crab" },
      { name: "crab" },
      { name: "crab" },
      { name: "crab" },
      { name: "crab" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
      { name: "frog" },
    ],
    background: {
      flexFlow: "column wrap",
    },
    prompt: "Użyj <code>flex-wrap</code> i <code>flex-direction</code>.",
    successPrompt: "ty chyba oszukujesz... 🤐",
  },
  20: {
    animals: [
      { name: "ant" },
      { name: "ant" },
      { name: "ant" },
      { name: "ant" },
      { name: "ant" },
      { name: "ant" },
      { name: "ant" },
      { name: "ant" },
    ],
    background: {
      flexFlow: "column wrap",
    },
    prompt:
      "Poczytaj o właściwości <code>flex-flow</code> (nie było jej na zajęciach).",
    successPrompt: "noo już prawie kończymy! 🤩",
  },
  21: {
    animals: [
      { name: "frog" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "mosquito" },
      { name: "frog" },
    ],
    background: {
      flexWrap: "wrap",
      alignContent: "flex-start",
    },
    prompt:
      "Poczytaj o właściwości <code>flex-flow</code> (nie było jej na zajęciach) i <code>align-content</code>.",
    successPrompt: "😜🤪😝🤪🤪🤪",
  },
  22: {
    animals: [
      { name: "fish" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "bee" },
      { name: "fish" },
    ],
    background: {
      flexWrap: "wrap",
      alignContent: "flex-end",
    },
    prompt:
      "Poczytaj o właściwości <code>flex-flow</code> (nie było jej na zajęciach) i <code>align-content</code>.",
    successPrompt: "WUT?????? 😮‍💨",
  },
  23: {
    animals: [
      { name: "pinguin" },
      { name: "bird" },
      { name: "bird" },
      { name: "bird" },
      { name: "fish" },
      { name: "pinguin" },
      { name: "bird" },
      { name: "bird" },
      { name: "bird" },
      { name: "fish" },
      { name: "pinguin" },
      { name: "bird" },
      { name: "bird" },
      { name: "bird" },
      { name: "fishj" },
    ],
    background: {
      flexWrap: "wrap",
      flexDirection: "column",
      alignContent: "center",
    },
    prompt:
      "Poczytaj o właściwości <code>flex-flow</code> (nie było jej na zajęciach) i <code>align-content</code>.",
    successPrompt: "nie no nie wierzę 🤯🤯🤯🤯🤯🤯🤯🤯🤯",
  },
  24: {
    animals: [
      { name: "flamingo" },
      { name: "swan" },
      { name: "swan" },
      { name: "swan" },
      { name: "swan" },
      { name: "peacock" },
      { name: "peacock" },
    ],
    background: {
      flexFlow: "wrap-reverse column-reverse",
      alignContent: "space-between",
      justifyContent: "center",
    },
    prompt: "Powodzenia xD",
    successPrompt: "GOOOOOD JOB!!! Dostajesz 6 💪💪💪💪💪",
  },
};

const properties = [
  "flexDirection",
  "justifyContent",
  "alignItems",
  "alignSelf",
  "flexWrap",
  "flexFlow",
  "alignContent",
];

const renderBackgroundContainer = (element, props) => {
  const { level } = props;
  element.innerHTML = "";
  properties.forEach((property) => {
    background.style[property] = null;
  });
  Object.keys(levels[level].background).forEach((property) => {
    element.style[property] = levels[level].background[property];
  });

  levels[level].animals.forEach((animal) => {
    var frameEl = document.createElement("div");
    frameEl.className = `${animal.name}`;
    frameEl.style.order = animal.order || null;
    frameEl.style.alignSelf = animal.alignSelf || null;
    element.appendChild(frameEl);
  });
};

const renderAnimalsContainer = (element, props) => {
  const { level } = props;
  element.innerHTML = null;

  levels[level].animals.forEach((animal) => {
    var animalEl = document.createElement("div");
    animalEl.className = `${animal.name}`;
    element.appendChild(animalEl);
  });
};

const hasEqualProperties = (elementA, elementB) => {
  const elementAStyle = getComputedStyle(elementA);
  const elementBStyle = getComputedStyle(elementB);

  const diffs = properties.filter(
    (property) => elementAStyle[property] !== elementBStyle[property]
  );
  return diffs.length === 0;
};

const hasEqualPropertiesMany = (parentA, parentB) => {
  const childsA = Array.from(parentA.children);
  const childsB = Array.from(parentB.children);

  const diffs = childsB.filter(
    (childB, idx) => !hasEqualProperties(childsA[idx], childB)
  );
  return diffs.length === 0;
};

const isSameOrderIn = (parentA, parentB) => {
  var sortedChildsA = Array.from(parentA.children).sort((childA1, childA2) =>
    getComputedStyle(childA1).order < getComputedStyle(childA2).order ? -1 : 1
  );
  var sortedChildsB = Array.from(parentB.children).sort((childB1, childB2) =>
    getComputedStyle(childB1).order < getComputedStyle(childB2).order ? -1 : 1
  );

  var diffs = sortedChildsB.filter(
    ({ className }, idx) => className !== sortedChildsA[idx].className
  );

  return diffs.length === 0;
};

const { BehaviorSubject, operators, combineLatest, fromEvent } = rxjs;
const { map, withLatestFrom, tap } = operators;

const gameElement = document.getElementById("game");
const barElement = document.getElementById("bar");
const contentElement = document.getElementById("content");
const animalsElement = document.getElementById("animals");
const backgroundElement = document.getElementById("background");
const logElement = document.getElementById("log");
const currentLvlElement = document.getElementById("current-level");
const promptElement = document.getElementById("prompt");
const nextLvlElement = document.getElementById("next-level");
const prevLvlElement = document.getElementById("prev-level");
const showAxesElement = document.getElementById("show-axes");
const axesElement = document.getElementById("axes");

/* STATE */
const _isOpenedInVscode = new BehaviorSubject(
  navigator.userAgent.includes("Electron")
);
const _config = new BehaviorSubject(
  JSON.parse(
    localStorage.getItem("config") === null
      ? "{}"
      : localStorage.getItem("config")
  )
);
const _lvl = new BehaviorSubject(Number(localStorage.getItem("level") || 1));

const lvl$ = _lvl.asObservable();
const config$ = _config.asObservable();
const showAxes$ = config$.pipe(map((config) => config.showAxes));
const isOpenedInVscode$ = _isOpenedInVscode.asObservable();
const isFlexContainerStyleCorrect$ = lvl$.pipe(
  map(() => hasEqualProperties(animalsElement, backgroundElement))
);
const isFlexItemsOrderCorrect$ = lvl$.pipe(
  map(() => isSameOrderIn(animalsElement, backgroundElement))
);
const isFlexItemsStyleCorrect$ = lvl$.pipe(
  map(() => hasEqualPropertiesMany(animalsElement, backgroundElement))
);
const prevLvl$ = lvl$.pipe(map((lvl) => lvl - 1));
const nextLvl$ = lvl$.pipe(map((lvl) => lvl + 1));
const isLvlDone$ = combineLatest(
  isFlexContainerStyleCorrect$,
  isFlexItemsOrderCorrect$,
  isFlexItemsStyleCorrect$
).pipe(
  map((conditions) => conditions.find((condition) => !condition) === undefined)
);
const isLvlDoneWithLvl$ = isLvlDone$.pipe(withLatestFrom(lvl$));
const isPrevLvlExist$ = prevLvl$.pipe(map((prevLvl) => prevLvl > 0));
const isNextLvlExist$ = nextLvl$.pipe(map((nextLvl) => nextLvl in levels));

const isNextLvlReachable$ = combineLatest(isNextLvlExist$, isLvlDone$).pipe(
  map((conditions) => conditions.find((condition) => !condition) === undefined),
  withLatestFrom(lvl$)
);

const prevLvlElementClick$ = fromEvent(prevLvlElement, "click").pipe(
  withLatestFrom(prevLvl$)
);

const nextLvlElementClick$ = fromEvent(nextLvlElement, "click").pipe(
  withLatestFrom(nextLvl$)
);

const showAxesElementClick$ = fromEvent(showAxesElement, "click").pipe(
  withLatestFrom(config$)
);

/** */
lvl$.subscribe((level) => {
  localStorage.setItem("level", level);

  const animalsStyle = getComputedStyle(animalsElement);
  gameElement.setAttribute("data-lvl", level);
  axesElement.className = `${animalsStyle["flexDirection"]} ${animalsStyle["flexWrap"]}`;
  currentLvlElement.innerText = `${level} z ${Object.keys(levels).length}`;
  renderAnimalsContainer(animalsElement, { level });
  renderBackgroundContainer(backgroundElement, { level });
});

config$.subscribe((config) => {
  localStorage.setItem("config", JSON.stringify(config));
});

isPrevLvlExist$.subscribe((isPrevLvlExist) => {
  prevLvlElement.disabled = !isPrevLvlExist;
});

isLvlDoneWithLvl$.subscribe(([isLvlDone, lvl]) => {
  const isEnabledConfetti = isLvlDone && lvl === Object.keys(levels).length;
  isEnabledConfetti ? startConfetti() : stopConfetti();
  promptElement.innerHTML = isLvlDone
    ? levels[lvl].successPrompt
    : levels[lvl].prompt;
});

isNextLvlReachable$.subscribe(([isNextLvlReachable, lvl]) => {
  nextLvlElement.disabled = !isNextLvlReachable;
});

prevLvlElementClick$.subscribe(([_, prevLevel]) => {
  _lvl.next(prevLevel);
});

nextLvlElementClick$.subscribe(([_, nextLevel]) => {
  _lvl.next(nextLevel);
});

isOpenedInVscode$.subscribe((isOpenedInVscode) => {
  if (isOpenedInVscode) {
    barElement.style.display = "none";
  } else {
    barElement.style.display = "flex";
    contentElement.innerHTML = "";
  }
});

showAxes$.subscribe((showAxes) => {
  if (showAxes) {
    axesElement.style.display = "flex";
    showAxesElement.classList.add("selected");
  } else {
    axesElement.style.display = "none";
    showAxesElement.classList.remove("selected");
  }
});

showAxesElementClick$.subscribe(([_, config]) => {
  _config.next({
    ...config,
    showAxes: config?.showAxes ? !config.showAxes : true,
  });
});
