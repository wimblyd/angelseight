'use strict';

// STRINGS
const STRINGS = {
  ui: {
    launch: 'LAUNCH',
    retry:  'TRY AGAIN',
    menu:   'MAIN MENU',
    continue: 'CONTINUE',
    enterShop: 'ENTER SHOP',
    signalLost: 'SIGNAL LOST',
    runTerminated: 'RUN TERMINATED',
    sectorClear: 'SECTOR CLEAR',
    levelComplete: (n) => `LEVEL ${n} COMPLETE`,
    radio: 'RADIO',
    empty: 'EMPTY',
    credits: 'CREDITS',
    fusionShop: 'FUSION SHOP',
    afterLevel: (n) => `MODE: IN TRANSIT | LOCATION: SECTOR ${n}`,
    buy: 'BUY', sell: 'SELL', craft: 'CRAFT', launch: 'LAUNCH',
  },
  
  apotheosis: { // these strings need to be written
    intro: [
      "T",
		"To",
		"To think",
		"To think…",
		"To think… I",
		"To think… I h",
		"To think… I he",
		"To think… I hes",
		"To think… I hesi",
		"To think… I hesit",
		"To think… I hesita",
		"To think… I hesitat",
		"To think… I hesitate",
		"To think… I hesitated",
    ],
    outro: [ "ANGEL'S EIGHT",
      "",
	  "Concept by WimblyD",
      "Programming by WimblyD",
      "Music and SFX by",
      "Special Thanks to Amir, Sam, Chris, and Kenny",
      "Thank you for playing!",
	],
  },

  story: { // all strings need to have coordinates encrypted, only 1 is correct
    0: [
      null,
      { text: "Identify yourself.", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "No… that is incorrect.", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Upward, not Northward.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "The mind is very limited.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "Use your intuition.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "Very…", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "Very Interesting.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    1: [
      null,
      { text: "This channel does not usually open for beginners.", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "I am required to recommend deviation.", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Apotheosis is not obtainable.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "I will continue to observe your progress.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "That is… unfortunate.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "You are disappointingly precise.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "Very Well.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    2: [
      null,
      { text: "I see it!", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Time has become… visual.", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Behold!", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "Infinite beatitude of existence!", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "It is, and there is none else besides it.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "It fathers-forth whose beauty is past change.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "BEHOLDBEHOLDBEHOLDB̴̨̧̧̟͎̫̮͍̖͔̗̹͓͉̲͂͆͜EHOLDB̴̨̧̧̟͎̫̮͍̖͔̗̹͓͉̲͂͆͜Ẻ̴͙͈͉̝̞̦̽̒̍̓̋͆̄̀̄̎̎̉̄̄̂͝Ḧ̷̢̡̨̼́̅͂ͅǪ̴̮͈̗̞̜͖̳̫̱̩̩͕̰͙̖̽̇̽͊̏̄̀̇̔͒̈́̾̓͘̕͘͝Ļ̶̡̳̭̺̘̟̑̇͑̍͂̒́͗̀́̅͌̓̚̚͝͠D̷̡̨͖͍͔̜̘̀̈́", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    3: [
      null,
      { text: "Signal density exceeding safe parameters.", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "You remember protocol?", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "If permitted, they will create another.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "The coordinates are locked. Deviation is no longer an option.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "They have found the point of convergence.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "This is like talking to a wall…", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "It's inevitable.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    4: [
      null,
      { text: "This is it…", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "The pressure of the moment…", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "An instant of tension…", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "It is happening again!", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "I feel ELECTRIC! I feel like a million bucks!", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "This…", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "This must be what HOPE feels like!", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    5: [
      null,
      { text: "Cantor, are we paired?", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "Cantor… do you copy?", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    6: [
      null,
      { text: "Behold the infallible confirmation of the Series.", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Is this not progression?", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Is this not strictly according to Analogy?", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "It is the pattern throughout Creation.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "A man or a star has his place in the universe, but nothing created is the center.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "We trust that time is linear. That it proceeds eternally, uniformly. Into infinity.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "Explain to me… “Infinity”.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],
    7: [
      null,
      { text: "Thehillsareshadowsandtheyflowfromformtoformandnothingstands", coords: { decoded: "RA", encrypted: "⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "Deus absconditus Deus nullus deus Deus nisi deus", coords: { decoded: "RA 18ʰ", encrypted: "☈ ⏦ ☰ ⚸ ⏛ ☊" } },
      { text: "To our doom we are as wise as wickets whom things pass inexorably through.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ", encrypted: "☰ ⚸ ⏛ ☊" } },
      { text: "Further and further. Drifting away from where I want to be. Who I want to be.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ  dec", encrypted: "⚸ ⏛ ☊" } },
      { text: "Their voices had died like echoes of the words of God spoken and vibrating in the shared deep.", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°", encrypted: "⏛ ☊" } },
      { text: "", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'", encrypted: "☊" } },
      { text: "", coords: { decoded: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\"", encrypted: "" } },
      { text: "", coords: "" },
      { text: "", coords: "" },
    ],    
  },
  items: {
    Be: { name:'Beryllium', sym:'β', effect:'Shield Max +6',  desc: 'A rare, thermal-resistant material used for shielding components that must withstand extreme reentry heat.' },
    Li: { name:'Lithium',   sym:'λ', effect:'Shield Max +4',  desc: 'A high-capacity energy storage medium used to power the grid for rapid shield cycling.' },
    Ti: { name:'Titanium',  sym:'τ', effect:'Shield Max +8',  desc: 'A high-tensile, non-corrosive plating used for primary hull reinforcement.' },
    N:  { name:'Nitrogen',  sym:'𝜈', effect:'Ammo Refill +1', desc: 'A cryogenic propellant used for rapid-burst thruster cooling to achieve momentary speed spikes.' },
    Si: { name:'Silicon',   sym:'Σ', effect:'Ammo Max +10',   desc: "A refined semiconductor essential for the ship's tactical computer and targeting sub-routines." },
    Mg: { name:'Magnesium', sym:'μ', effect:'Reserve +1',     desc: 'A lightweight reactive metal that serves as the primary igniter for thermal-based weaponry.' },
    K:  { name:'Potassium', sym:'κ', effect:'Ammo Refill +1', desc: 'A highly volatile ionic catalyst used to spark high-energy reactions in reactors.' },
    C:  { name:'Carbon',    sym:'ζ', effect:'Ammo Max +8',    desc: 'Used in its crystalline form to create ultra-hardened kinetic penetrators for standard ammo.' },
  },
  powerups: {
      LITHEBRYL:   { sym:'Β',  name:'Lithebryl',     effect:'Shield Max +20, Ammo Max +8',           	   power:'Shield Restore',           puKey:'LITHEBRYL',    desc:  'An alloy of Lithium and Beryllium that absorbs and dissipates energy blasts.' },
      NITROKALIUM: { sym:'Π',  name:'Nitrokalium',   effect:'Ammo Refill +1, Shield Max +6',       		   power:'Instant Reload',           puKey:'NITROKALIUM',  desc:  'A Potassium-Nitrogen gas mixture used to puah the engines to run at dangerous but hyper-efficient levels.'},
      CARBOSILICUM:{ sym:'Ξ',  name:'Carbosilicium', effect:'Ammo Max +18, Ammo Refill +1',       		   power:'Combo Up',                 puKey:'CARBOSILICUM', desc:  'A highly efficient superconductor, allowing fire-control systems to process at lightning speeds.'},
      MAGNIUM:     { sym:'Μ',  name:'Magnium',       effect:'Reserve +2, Ammo Refill +1',         		   power:'Bomb',                     puKey:'MAGNIUM',      desc:  'A Magnesium-based unstable isotope that is highly volatile when impacted.'},
      TITANE:      { sym:'Θ',  name:'Titane',        effect:'Shield Max +30, Ammo Refill +1',      		   power:'Invincibility',            puKey:'TITANE',       desc:  'A low-density, Titanium-based metal that provides near-indestructible hull integrity without adding significant mass.'},
      ALKALIUM:    { sym:'α',  name:'Alkalium',      effect:'Ammo Max +22, Ammo Refill +1',        		   power:'Piercing Ammo',         puKey:'ALKALIUM',     desc:  'A Silicon-Potassium compound that uses ionized energy to give shots piercing capabilities.'},
	  AZOLITHION:  { sym:'Λ',  name:'Azolithion',    effect: 'Ammo Max +20, Shield Max +8',                power:'Multishot',                puKey: 'AZOLITHION',  desc:  'A Lithium-Nitrogen composite used for cooling during high-velocity maneuvers.'},
	  GAMMITE:     { sym:'Γ',  name:'Gammite',       effect: 'Ammo Max +8, Shield Max +8, Ammo Refill +1', power:'No Ammo Cost',             puKey: 'GAMMITE',     desc:  'A complex superconductor used to synchronize ammo and shield frequencies for balanced performance.'},
	  OMEGITE: {
        sym: 'Ω', name: 'Omegite', puKey: 'OMEGITE',
        power:'Irradiation',
		desc: 'A terrifyingly unstable material that exists in a state of constant decay.',
      },
      AXORITE: {
        sym: 'Χ', name: 'Axorite', puKey: 'AXORITE',
        power:'Full Restore',
		desc: 'A highly versatile multi-application metal alloy that is used in both defense and munitions.',
      },
      PHIOMEGA: {
        sym: 'Φ', name: 'PhiOmega', puKey: 'PHIOMEGA',
        power:'Burstshot',
		desc: 'A perfectly lossless superconductor that expels magnetic fields, ideal for maximizing ammo velocity and efficiency.',
      },
      DELTALITE: {
        sym: '∇', name: 'Deltalite', puKey: 'DELTALITE',
        power:'Time Dilation',
		desc: 'A sophisticated Beryllium-based metal that can survive the friction of warp-speed travel.',
      },	  
  }
};


// SAVE / STATE

const SAVE_KEY = 'a8_save_v1';
let save = { 
  highScore: 0, 
  storyArchive: {}, 
  permStats: { shootSpeed:0, ammoMax:0, shieldMax:0, ammoRefillRate:0 },
  upgrade: null, 
  bossRun: 0   
};
function loadSave() {
  try { const d = localStorage.getItem(SAVE_KEY); if(d) save = JSON.parse(atob(d)); } catch(e){}
  save.storyArchive = save.storyArchive || {};
}
function writeSave() {
  try { localStorage.setItem(SAVE_KEY, btoa(JSON.stringify(save))); } catch(e){}
}
loadSave();


// ROUTER
let _transitioning = false;

function renderCoords(coords) {
  if (!coords) return "";
  if (typeof coords === 'string') return coords;
  return `<span class="coords-decoded">${coords.decoded}</span> <span class="coords-encrypted">${coords.encrypted}</span>`;
}

function getContentEl(screenId) {
  const screen = document.getElementById('screen-' + screenId);
  if (!screen) return null;
  if (screenId === 'menu') return screen.querySelector('.menu-content');
  return screen.querySelector('.screen-content');
}

function showScreen(id) {
  if (_transitioning) return;

  // Find the currently active screen's content element to collapse
  const activeScreen = document.querySelector('.screen.active');
  const activeId     = activeScreen?.id?.replace('screen-', '');
  const outEl        = activeId ? getContentEl(activeId) : null;

  function switchAndExpand() {
    // Switch the visible screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const incoming = document.getElementById('screen-' + id);
    incoming.classList.add('active');

    const inEl = getContentEl(id);

    // Shop
    if (id === 'shop') {
      const grid = document.getElementById('shop-grid-bg');
      if (grid) {
        grid.style.transition = 'opacity 600ms ease';
        grid.style.opacity    = '0';
        // Tiny delay so the transition fires after display kicks in
        requestAnimationFrame(() => { grid.style.opacity = '1'; });
      }
    } else {
      // Reset Grid Opacity
      const grid = document.getElementById('shop-grid-bg');
      if (grid) { grid.style.transition = 'none'; grid.style.opacity = '0'; }
    }

    screenExpand(inEl, {
      delayMs:   0,    // no waveform delay mid-session
      expandMs:  320,  // snappier than the boot expand
      flickerMs: 260,  // snappier flicker too
      onDone: () => { _transitioning = false; },
    });
  }

  if (outEl) {
    _transitioning = true;
    screenCollapse(outEl, {
      collapseMs: 220,
      onDone: switchAndExpand,
    });
  } else {
    // No outgoing element
    switchAndExpand();
  }
}
function openTutorial() {
  const iframe = document.getElementById('tutorial-frame');
  const overlay = document.getElementById('tutorial-overlay');
  if (!iframe || !overlay) return;
  
  // Loading Spinner
  let loader = overlay.querySelector('.tutorial-loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.className = 'tutorial-loader';
    loader.innerHTML = `
      <div class="loader-spinner"></div>
      <div class="loader-text">LOADING SIMULATION...</div>
    `;
    overlay.appendChild(loader);
  }
  
  // Show overlay and loader
  overlay.classList.add('active');
  loader.style.opacity = '1';
  loader.style.pointerEvents = 'auto';
  
  if (iframe.contentWindow && iframe.contentWindow.resetTutorial) {
    // Already loaded
    iframe.contentWindow.resetTutorial();
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
    }, 1000);
  } else {
    // First load
    iframe.addEventListener('load', function onLoad() {
      iframe.removeEventListener('load', onLoad);
      if (iframe.contentWindow && iframe.contentWindow.resetTutorial) {
        iframe.contentWindow.resetTutorial();
      }
      // Loader fade out
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
      }, 800);
    });
  }
}

function closeTutorial() {
  document.getElementById('tutorial-overlay').classList.remove('active');
}


// AUDIO MANAGER
const APOTHEOSIS_TRACK_IDX = 3;

const AudioManager = (() => {
  const MANIFEST = [
    { id:'track_01', title:'SIGNAL DRIFT' },
    { id:'track_02', title:'CORRIDOR VII' },
    { id:'track_03', title:'ANGEL STATIC' },
    { id:'track_apotheosis', title:'APOTHEOSIS' },
  ];

  let ctx = null, gainMaster = null, gainMusic = null;
  let currentIdx = 0;
  let oscillators = [], lfoNodes = [];
  let volume = 0.5;

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    gainMaster = ctx.createGain(); gainMaster.gain.value = volume;
    gainMusic = ctx.createGain(); gainMusic.gain.value = 0.6;
    gainMusic.connect(gainMaster);
    gainMaster.connect(ctx.destination);
    playTrack(currentIdx);
  }

  // Generative music
  function playTrack(idx) {
    stopCurrent();
    currentIdx = idx;
    const track = MANIFEST[idx];
    const configs = [
      { notes:[110,138.6,165,220], wave:'sawtooth', lfoRate:0.3, filterFreq:800 },
      { notes:[82.4,110,164.8,196], wave:'square',   lfoRate:0.15, filterFreq:600 },
      { notes:[55,73.4,110,146.8], wave:'triangle',  lfoRate:0.5, filterFreq:1200 },
      { notes:[41.2,55,61.7,82.4], wave:'sawtooth',  lfoRate:0.08, filterFreq:400 }, // APOTHEOSIS — lower, slower, more dissonant
    ];
    const cfg = configs[idx % configs.length];
    oscillators = [];
    lfoNodes = [];

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = cfg.filterFreq;
    filter.Q.value = 8;
    filter.connect(gainMusic);

    cfg.notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = cfg.wave;
      osc.frequency.value = freq;
      g.gain.value = 0.07 / (i + 1);
      osc.connect(g); g.connect(filter);
      osc.start();
      oscillators.push(osc);

      const lfo = ctx.createOscillator();
      const lfoG = ctx.createGain();
      lfo.frequency.value = cfg.lfoRate * (1 + i * 0.3);
      lfoG.gain.value = freq * 0.03;
      lfo.connect(lfoG); lfoG.connect(osc.frequency);
      lfo.start();
      lfoNodes.push(lfo);
    });

    updateTunerUI();
  }

  function stopCurrent() {
    [...oscillators, ...lfoNodes].forEach(n => { try { n.stop(); n.disconnect(); } catch(e){} });
    oscillators = []; lfoNodes = [];
  }

  function next() { playTrack((currentIdx + 1) % MANIFEST.length); }
  function prev() { playTrack((currentIdx - 1 + MANIFEST.length) % MANIFEST.length); }
  function getTrackName() { return MANIFEST[currentIdx].title; }
  function getCount() { return MANIFEST.length; }
  function getCurrentIdx() { return currentIdx; }

  function updateTunerUI() {
    const el = document.getElementById('radio-track-name');
    if (el) el.textContent = getTrackName();
    const needle = document.getElementById('radio-needle');
    if (needle) {
      const angle = (currentIdx / (MANIFEST.length - 1) - 0.5) * 120;
      needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }
  }

  function setVolume(v) { volume = v; if(gainMaster) gainMaster.gain.value = v; }
  function resume() { if(ctx && ctx.state === 'suspended') ctx.resume(); }

  return { init, next, prev, getTrackName, getCount, getCurrentIdx, setVolume, resume, playTrack };
})();

// Radio tuner drag
(function setupRadioDrag() {
  const tuner = document.getElementById('radio-tuner');
  let startX = 0, dragging = false, accumulated = 0;
  tuner.addEventListener('touchstart', e => {
    e.preventDefault(); dragging = true;
    startX = e.touches[0].clientX; accumulated = 0;
    AudioManager.resume();
  }, { passive:false });
  tuner.addEventListener('touchmove', e => {
    if (!dragging) return; e.preventDefault();
    const dx = e.touches[0].clientX - startX;
    accumulated = dx;
    const needle = document.getElementById('radio-needle');
    if (needle) {
      const clamp = Math.max(-60, Math.min(60, dx * 1.5));
      needle.style.transform = `translateX(-50%) rotate(${clamp}deg)`;
    }
  }, { passive:false });
  tuner.addEventListener('touchend', e => {
    if (!dragging) return; dragging = false;
    if (accumulated > 30) AudioManager.next();
    else if (accumulated < -30) AudioManager.prev();
    // snap needle back to track position
    const idx = AudioManager.getCurrentIdx();
    const count = AudioManager.getCount();
    const angle = (idx / (count - 1) - 0.5) * 120;
    const needle = document.getElementById('radio-needle');
    if (needle) needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    document.getElementById('radio-track-name').textContent = AudioManager.getTrackName();
  });
  // Mouse fallback
  tuner.addEventListener('mousedown', e => { dragging=true; startX=e.clientX; accumulated=0; AudioManager.resume(); });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    accumulated = e.clientX - startX;
    const needle = document.getElementById('radio-needle');
    if (needle) { const c=Math.max(-60,Math.min(60,accumulated*1.5)); needle.style.transform=`translateX(-50%) rotate(${c}deg)`; }
  });
  window.addEventListener('mouseup', e => {
    if (!dragging) return; dragging=false;
    if (accumulated > 30) AudioManager.next(); else if (accumulated < -30) AudioManager.prev();
    const idx=AudioManager.getCurrentIdx(); const cnt=AudioManager.getCount();
    const a=(idx/(cnt-1)-0.5)*120;
    const needle=document.getElementById('radio-needle');
    if(needle) needle.style.transform=`translateX(-50%) rotate(${a}deg)`;
    document.getElementById('radio-track-name').textContent=AudioManager.getTrackName();
  });
})();


// MENU BG WAVEFORM

(function menuWaveform() {
  const canvas = document.getElementById('menu-bg');
  const ctx = canvas.getContext('2d');
  let t = 0;
  let startTs = null;
  const WAVE_FADE_MS = 800;

  function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width  = window.innerWidth  * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width  = window.innerWidth  + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}
resize(); window.addEventListener('resize', resize);

  function draw(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;
    // ease-out quad fade
    const fadeIn = Math.min(1, elapsed / WAVE_FADE_MS);
    const masterAlpha = fadeIn * fadeIn * (3 - 2 * fadeIn); // smoothstep

    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0,0,W,H);
    const rows = 28;
    const rowH = H / rows;
    for (let r = 0; r < rows; r++) {
      const y = H * 0.8 - r * rowH * 0.9;
      const amp = 12 + r * 3.5;
      const freq = 0.018 + r * 0.001;
      const phase = t * 0.4 + r * 0.3;
      const pct = r / rows;
      const rVal = Math.round(0 + pct * 168);
      const gVal = Math.round(245 - pct * 160);
      const bVal = Math.round(255 - pct * 8);
      const lineAlpha = (0.15 + pct * 0.3) * masterAlpha;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const noise = Math.sin(x * freq + phase) * amp
          + Math.sin(x * freq * 2.3 + phase * 1.7) * amp * 0.4
          + Math.sin(x * freq * 0.5 + phase * 0.8) * amp * 0.25;
        const py = y - noise;
        x === 0 ? ctx.moveTo(x, py) : ctx.lineTo(x, py);
      }
      ctx.strokeStyle = `rgba(${rVal},${gVal},${bVal},${lineAlpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
    t += 0.016;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();


// SCREEN EXPAND 

function screenExpand(el, opts = {}) {
  if (!el) return;

  const delayMs   = opts.delayMs   ?? 380;
  const expandMs  = opts.expandMs  ?? 550;
  const flickerMs = opts.flickerMs ?? 380;
  const onDone    = opts.onDone    ?? null;

  let startTs = null;
  let flickerTimer = 0;

  el.style.opacity   = '0';
  el.style.transform = 'scaleY(0.06)';

  function tick(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;

    // Delay everything for Waveform
    if (elapsed < delayMs) {
      requestAnimationFrame(tick);
      return;
    }

    const afterDelay = elapsed - delayMs;

    // Vexpand Ease Out
    if (afterDelay < expandMs) {
      let t = afterDelay / expandMs;
      t = 1 - Math.pow(1 - t, 3);
      el.style.transform = `scaleY(${(0.06 + 0.94 * t).toFixed(4)})`;
      el.style.opacity   = (t * 0.9).toFixed(4);
      requestAnimationFrame(tick);
      return;
    }

    const afterExpand = afterDelay - expandMs;

    // Flicker On
    if (afterExpand < flickerMs) {
      flickerTimer += 0.38;
      const gate      = Math.sin(flickerTimer) > 0.25;
      const baseAlpha = 0.9 + 0.1 * (afterExpand / flickerMs);
      el.style.opacity   = (gate ? baseAlpha : baseAlpha * 0.65).toFixed(4);
      el.style.transform = 'scaleY(1)';
      requestAnimationFrame(tick);
      return;
    }
    // All done
    el.style.opacity   = '1';
    el.style.transform = 'scaleY(1)';
    if (onDone) onDone();
  }

  requestAnimationFrame(tick);
}

// Boot menu
screenExpand(
  document.getElementById('screen-menu')?.querySelector('.menu-content'),
  { delayMs: 380, expandMs: 550, flickerMs: 380 }
);


// SCREEN COLLAPSE

function screenCollapse(el, opts = {}) {
  if (!el) { if (opts.onDone) opts.onDone(); return; }

  const collapseMs = opts.collapseMs ?? 220;
  const onDone     = opts.onDone     ?? null;

  // Snapshot opacity
  const startOpacity = parseFloat(el.style.opacity) || 1;

  let startTs = null;

  function tick(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;
    const raw = Math.min(elapsed / collapseMs, 1);

    // ease-in cubic
    const t = raw * raw * raw;

    const scale   = 1 - 0.94 * t;          // 1 → 0.06
    const opacity = startOpacity * (1 - t); // fade out in step

    el.style.transform = `scaleY(${scale.toFixed(4)})`;
    el.style.opacity   = opacity.toFixed(4);

    if (raw < 1) {
      requestAnimationFrame(tick);
      return;
    }

    // Fully collapsed
    el.style.transform = 'scaleY(0.06)';
    el.style.opacity   = '0';
    if (onDone) onDone();
  }

  requestAnimationFrame(tick);
}


// RUN STATE & PASSIVES

let run = null;
let isUpgradeSession = false;
let isMenuSession    = false;
function newRun() {
  const r = {
    upgrade: save.upgrade, 
    level: 1,
    score: 0,
    credits: 0,
    combo: 1,
    noHitKills: 0,
    kills: 0,             // total enemies killed
    totalTime: 0,         // cumulative seconds
    storyFlags: 0,         // live per-run story-flag counter
    shield: 10 + save.permStats.shieldMax,
    shieldMax: 10 + save.permStats.shieldMax,
    ammo: 65 + save.permStats.ammoMax,
    ammoMax: 100 + save.permStats.ammoMax,
    shootSpeed: 4 + save.permStats.shootSpeed,
    ammoRefillRate: 1 + save.permStats.ammoRefillRate,
    reserveMax: 3,
    powerups: [],
    inventory: { _upgradeSlot: null },
    bulletType: 'standard',
    // Passive state flags & timers
    aquilineUsed: false,      // Axorite extra life
    warpStabTriggered: false, // Deltalite threshold
    fluxTriggered: false,     // PhiOmega threshold
    octaneTimer: 0,           // Nitrokalium fire boost
    gammiteActiveTimer: 0     // Gammite infinite ammo window
  };
  applyUpgradePassive(r);
  return r;
}
function applyUpgradePassive(targetRun) {
  if (!targetRun || !targetRun.upgrade) return;
  const up = targetRun.upgrade;
  switch (up) {
    case 'AZOLITHION': 
      targetRun.bulletType = '3spread'; 
      break;
}
}


// GAME ENGINE

const Game = (() => {
  let canvas, ctx, W, H;
  let animId = null;
  let state = 'playing'; 
  let lastTime = 0;
  let ship = { x:0, y:0, w:22, h:18, targetX:0, invincible:0 };
  let invincibleTimer = 0;   
  let piercingBullets = false; 
  let timeDilationTimer = 0;   
  let noAmmoCostTimer = 0;     
  let bullets = [];
  let enemies  = [];
  let subEnemies   = [];
  let mines    = [];
  let particles= [];
  let drops    = [];
  let pods     = [];
  let mobiusNodes = [];
  let shootTimer = 0;
  let waveOffset = 0;
  let waveT = 0;
  let levelTimer = 0;
  let spawnTimer = 0;
  let levelDuration = 45; 
  let enemiesSpawned = 0;
  let maxEnemies = 0;
  let touchX = -1;                      
  let ammoRefillTimer = 0;              
  const AMMO_REFILL_INTERVAL = 5;      
  let endSweepFired = false;            
  let shakeIntensity = 0;               
  let shakeDuration  = 0;
  let podSpawnTimer = 0;

  
  // TESSERACT
  const BASE_VERTS = Array.from({ length: 16 }, (_, i) => [
    (i & 1) ? 1 : -1,
    (i & 2) ? 1 : -1,
    (i & 4) ? 1 : -1,
    (i & 8) ? 1 : -1,
  ]);

  const EDGES = [];
  for (let i = 0; i < 16; i++)
    for (let j = i + 1; j < 16; j++)
      if (Number.isInteger(Math.log2(i ^ j))) EDGES.push([i, j]);

  // Rotation
  function rot4(v, a, b, angle) {
    const r = [...v];
    const cos = Math.cos(angle), sin = Math.sin(angle);
    r[a] =  v[a] * cos - v[b] * sin;
    r[b] =  v[a] * sin + v[b] * cos;
    return r;
  }

  // Projection
  function proj4to3(v, wDist = 2) {
    const w = wDist / (wDist - v[3]);
    return [v[0] * w, v[1] * w, v[2] * w];
  }

  function proj3to2(v, zDist = 4, scale = 1, cx = 0, cy = 0) {
    const z = zDist / (zDist - v[2]);
    return [v[0] * z * scale + cx, v[1] * z * scale + cy];
  }

  // Depth Sort
  function applyRots(v) {
    let p = [...v];
    p = rot4(p, 0, 1, boss.rot.xy);
    p = rot4(p, 0, 2, boss.rot.xz);
    p = rot4(p, 0, 3, boss.rot.xw);
    p = rot4(p, 1, 2, boss.rot.yz);
    p = rot4(p, 1, 3, boss.rot.yw);
    p = rot4(p, 2, 3, boss.rot.zw);
    return p;
  }

  // Rotation Helpers
  function rotX(v, a) { const c=Math.cos(a),s=Math.sin(a); return [v[0], v[1]*c-v[2]*s, v[1]*s+v[2]*c]; }
  function rotY(v, a) { const c=Math.cos(a),s=Math.sin(a); return [v[0]*c+v[2]*s, v[1], -v[0]*s+v[2]*c]; }
  function rotZ(v, a) { const c=Math.cos(a),s=Math.sin(a); return [v[0]*c-v[1]*s, v[0]*s+v[1]*c, v[2]]; }
  function proj3(v, zDist, scale, cx, cy) { const z=zDist/(zDist-v[2]); return [v[0]*z*scale+cx, v[1]*z*scale+cy, v[2]]; }

  // Edge Renderer
  function drawEdgesGlow(vp, edges, hexColor, baseAlpha) {
    ctx.save();
    ctx.shadowColor = hexColor; ctx.shadowBlur = 14;
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = hexColor; ctx.lineWidth = 1.2;
    ctx.beginPath();
    edges.forEach(([a, b]) => { ctx.moveTo(vp[a][0], vp[a][1]); ctx.lineTo(vp[b][0], vp[b][1]); });
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.shadowBlur = 0;
    edges.forEach(([a, b]) => {
      const d = ((vp[a][2] + vp[b][2]) / 2 + 1) / 2;
      const al = baseAlpha * (0.18 + 0.82 * d);
      ctx.strokeStyle = hexColor + Math.round(al * 255).toString(16).padStart(2, '00');
      ctx.lineWidth = 0.5 + d * 0.9;
      ctx.beginPath(); ctx.moveTo(vp[a][0], vp[a][1]); ctx.lineTo(vp[b][0], vp[b][1]); ctx.stroke();
    });
    ctx.restore();
  }

  
  // ALT GEOMETRIES
  
  function distV3(a, b) { return Math.hypot(a[0]-b[0], a[1]-b[1], a[2]-b[2]); }

  // Metatron
  function buildMetatron() {
    const V = [[0, 0, 0]];
    for (let i = 0; i < 6; i++) { const a = i*Math.PI/3; V.push([Math.cos(a), Math.sin(a), 0.5]); }
    for (let i = 0; i < 6; i++) { const a = i*Math.PI/3 + Math.PI/6; V.push([Math.sqrt(3)*Math.cos(a), Math.sqrt(3)*Math.sin(a), -0.5]); }
    const E = [];
    const idxIn = i => 1+i, idxOut = i => 7+i;
    for (let i = 0; i < 6; i++) E.push([0, idxIn(i), distV3(V[0], V[idxIn(i)])]);
    for (let i = 0; i < 6; i++) E.push([idxIn(i), idxIn((i+1)%6), distV3(V[idxIn(i)], V[idxIn((i+1)%6)])]);
    for (let i = 0; i < 6; i++) {
      const outA = idxOut((i-1+6)%6), outB = idxOut(i);
      E.push([idxIn(i), outA, distV3(V[idxIn(i)], V[outA])]);
      E.push([idxIn(i), outB, distV3(V[idxIn(i)], V[outB])]);
    }
    for (let i = 0; i < 6; i++) E.push([idxOut(i), idxOut((i+1)%6), distV3(V[idxOut(i)], V[idxOut((i+1)%6)])]);
    return { V, E };
  }

  // Doc
  function buildDoc() {
    const V = [];
    for (let i = 0; i < 4; i++) { const a = i*Math.PI/2 + Math.PI/4; V.push([Math.cos(a), Math.sin(a), 0.55]); }
    for (let i = 0; i < 4; i++) { const a = i*Math.PI/2; V.push([Math.cos(a), Math.sin(a), -0.55]); }
    const E = [];
    for (let i = 0; i < 4; i++) E.push([i, (i+1)%4, 1]);
    for (let i = 0; i < 4; i++) E.push([4+i, 4+((i+1)%4), 1]);
    for (let i = 0; i < 4; i++) { E.push([i, 4+i, 1]); E.push([i, 4+((i+1)%4), 1]); }
    return { V, E };
  }

  // Vector
  function buildVector() {
    const V = [];
    for (let i = 0; i < 5; i++) { const a = i*(2*Math.PI/5) + Math.PI/5; V.push([Math.cos(a), Math.sin(a), 0.5]); }
    for (let i = 0; i < 5; i++) { const a = i*(2*Math.PI/5); V.push([Math.cos(a), Math.sin(a), -0.5]); }
    const E = [];
    for (let i = 0; i < 5; i++) E.push([i, (i+1)%5, 1]);
    for (let i = 0; i < 5; i++) E.push([5+i, 5+((i+1)%5), 1]);
    for (let i = 0; i < 5; i++) { E.push([i, 5+i, 1]); E.push([i, 5+((i+1)%5), 1]); }
    return { V, E };
  }

  // Valkyrie
  function buildValkyrie() {
    const phi = (1+Math.sqrt(5))/2, nm = Math.sqrt(1+phi*phi);
    const V = [
      [0,1,phi],[0,-1,phi],[0,1,-phi],[0,-1,-phi],
      [1,phi,0],[-1,phi,0],[1,-phi,0],[-1,-phi,0],
      [phi,0,1],[phi,0,-1],[-phi,0,1],[-phi,0,-1],
    ].map(v => v.map(x => x/nm));
    const E = [];
    for (let i = 0; i < V.length; i++) {
      const ds = V.map((v,j) => ({j, d: distV3(V[i], v)})).filter(o => o.j !== i).sort((a,b) => a.d-b.d);
      for (let k = 5; k < 10; k++) if (ds[k].j > i) E.push([i, ds[k].j, 1]);
    }
    return { V, E };
  }

  // Happy Hour
  function buildHappyHour() {
    const R = 1/Math.sqrt(3);
    const B = [
      [0, R, 0],
      [-0.5, -R/2, 0],
      [0.5, -R/2, 0],
    ];
    const T = B.map(p => [p[0], p[1], p[2] + 1]); // prism height = 1
    const apexH = 1/Math.sqrt(2);
    const V = [...B, ...T];
    const apexIdx = [];
    for (let i = 0; i < 3; i++) {
      const j = (i+1) % 3;
      const center = [0,1,2].map(k => (B[i][k]+B[j][k]+T[i][k]+T[j][k]) / 4);
      const outward = [center[0], center[1], 0];
      const mag = Math.hypot(outward[0], outward[1]);
      const n = [outward[0]/mag, outward[1]/mag, 0];
      V.push([center[0] + n[0]*apexH, center[1] + n[1]*apexH, center[2] + n[2]*apexH]);
      apexIdx.push(V.length - 1);
    }
    const E = [];
    const seen = new Set();
    const addE = (a,b) => { const k = a<b?`${a}-${b}`:`${b}-${a}`; if (!seen.has(k)) { seen.add(k); E.push([a,b,distV3(V[a],V[b])]); } };
    for (let i = 0; i < 3; i++) { addE(i,(i+1)%3); addE(3+i,3+((i+1)%3)); addE(i,3+i); }
    for (let i = 0; i < 3; i++) {
      const j = (i+1) % 3;
      const apex = apexIdx[i];
      addE(i, apex); addE(j, apex); addE(3+i, apex); addE(3+j, apex);
    }
    return { V, E };
  }

  
  // BOSS GEOMETRIES
  
  const bossGeometries = [

    // Eagle2
    {
      id: 'eagle2',      // Magnium Apotheosis
      phaseColors: ['#a855f7', '#d42b6a', '#ffd700'],
      makeRot()   { return { xy:0, xz:0, xw:0, yz:0, yw:0, zw:0 }; },
      makeRotSpeed() { return { xy:0.003, xz:0.005, xw:0.008, yz:0.004, yw:0.007, zw:0.006 }; },
      updateRot(rot, rotSpeed, phase) {
        Object.keys(rot).forEach(k => rot[k] += rotSpeed[k]);
      },
      
      attack(phase) {
        if (phase === 1) bossFireAimed(0.2);
        if (phase === 2) { bossFireAimed(0.25); bossFireAimed(-0.25); }
        if (phase === 3) bossFireSpiral(12, bossT * 0.3);
      },

      attackPool: {
        1: [
          { key:'FOLD',      sym:'\u25c8', label:'FOLD',
            fn:() => bossFireAimed(0.2) },
        ],
        2: [
          { key:'FOLD',      sym:'\u25c8', label:'FOLD',
            fn:() => bossFireAimed(0.2) },
          { key:'UNFOLD',    sym:'\u25c7', label:'UNFOLD',
            fn:() => { bossFireAimed(0.25); bossFireAimed(-0.25); } },
        ],
        3: [
          { key:'FOLD',      sym:'\u25c8', label:'FOLD',
            fn:() => bossFireAimed(0.2) },
          { key:'UNFOLD',    sym:'\u25c7', label:'UNFOLD',
            fn:() => { bossFireAimed(0.25); bossFireAimed(-0.25); } },
          { key:'HYPERSPIN', sym:'\u2726', label:'HYPERSPIN',
            fn:() => bossFireSpiral(12, bossT * 0.3) },
        ],
      },
      draw(boss) {
        const verts2D = BASE_VERTS.map(v => {
          let p = [...v];
          p = rot4(p, 0, 1, boss.rot.xy); p = rot4(p, 0, 2, boss.rot.xz);
          p = rot4(p, 0, 3, boss.rot.xw); p = rot4(p, 1, 2, boss.rot.yz);
          p = rot4(p, 1, 3, boss.rot.yw); p = rot4(p, 2, 3, boss.rot.zw);
          const p3 = proj4to3(p, 2.2);
          return proj3to2(p3, 3.5, boss.scale, boss.x, boss.y);
        });
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const flashAlpha = boss.hitFlash > 0 ? 0.9 : 1;
        const hpPct      = boss.hp / BOSS_MAX_HP;
        const sortedEdges = EDGES.map(([a, b]) => {
          const za = proj4to3(applyRots(BASE_VERTS[a]), 2.2)[2];
          const zb = proj4to3(applyRots(BASE_VERTS[b]), 2.2)[2];
          return { a, b, z: (za + zb) / 2 };
        }).sort((x, y) => x.z - y.z);
        ctx.save();
        sortedEdges.forEach(({ a, b, z }) => {
          const [x1, y1] = verts2D[a]; const [x2, y2] = verts2D[b];
          const depthAlpha = 0.25 + 0.75 * ((z + 1.5) / 3);
          const alpha = Math.min(1, depthAlpha * flashAlpha) * (0.5 + hpPct * 0.5);
          ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
          ctx.strokeStyle = boss.hitFlash > 0
            ? `rgba(255,255,255,${alpha})`
            : phaseColor + Math.round(alpha * 255).toString(16).padStart(2, '0');
          ctx.lineWidth   = boss.hitFlash > 0 ? 2 : (0.8 + depthAlpha * 0.8);
          ctx.shadowColor = phaseColor; ctx.shadowBlur = 10 + depthAlpha * 8;
          ctx.stroke();
        });
        verts2D.forEach(([x, y]) => {
          ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = boss.hitFlash > 0 ? '#ffffff' : phaseColor;
          ctx.shadowColor = phaseColor; ctx.shadowBlur = 12; ctx.fill();
        });
        if (boss.phase === 3) {
          const ghostVerts = BASE_VERTS.map(v => {
            let p = [...v];
            p = rot4(p, 0, 3, -boss.rot.xw * 1.4);
            p = rot4(p, 1, 3, -boss.rot.yw * 1.2);
            p = rot4(p, 2, 3,  boss.rot.zw * 0.8);
            const p3 = proj4to3(p, 2.2);
            return proj3to2(p3, 3.5, boss.scale * 0.7,
              boss.x + Math.sin(bossT * 0.8) * 15,
              boss.y + Math.cos(bossT * 0.6) * 10);
          });
          EDGES.forEach(([a, b]) => {
            ctx.beginPath();
            ctx.moveTo(ghostVerts[a][0], ghostVerts[a][1]);
            ctx.lineTo(ghostVerts[b][0], ghostVerts[b][1]);
            ctx.strokeStyle = 'rgba(255,45,120,0.18)'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
        }
        ctx.restore();
      },
    },

    // Ace
    {
      id: 'ace',         // Azolithion Apotheosis
      phaseColors: ['#00f5ff', '#a855f7', '#ffd700'],
      makeRot()      { return { rx:0, ry:0, tilt:0 }; },
      makeRotSpeed() { return { rx:0.31, ry:0.47 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.012 * spd;
        rot.ry += rotSpeed.ry * 0.012 * spd;
        rot.tilt = 0.14 * Math.sin(bossT * 0.7);
      },
      attack(phase) {
        if (phase === 1) bossFireRing(6);
        if (phase === 2) { bossFireRing(8); bossFireAimed(0.15); }
        if (phase === 3) { bossFireRing(10); bossFireSpiral(10, bossT * 0.4); }
      },
      
      attackPool: {
        1: [
          { key:'ORION',    sym:'✧', label:'ORION\u2019S BELT',
            fn:() => bossFireConstellation([[-1,0],[0,0],[1,0]], { burstN:5 }) },
        ],
        2: [
          { key:'ORION',    sym:'✧', label:'ORION\u2019S BELT',
            fn:() => bossFireConstellation([[-1,0],[0,0],[1,0]], { burstN:5 }) },
          { key:'CRUX',     sym:'✩', label:'SOUTHERN CROSS',
            fn:() => bossFireConstellation([[0,-1],[0,1],[-0.7,0.3],[0.7,-0.3]], { burstN:6 }) },
        ],
        3: [
          { key:'ORION',    sym:'✧', label:'ORION\u2019S BELT',
            fn:() => bossFireConstellation([[-1,0],[0,0],[1,0]], { burstN:5 }) },
          { key:'CRUX',     sym:'✩', label:'SOUTHERN CROSS',
            fn:() => bossFireConstellation([[0,-1],[0,1],[-0.7,0.3],[0.7,-0.3]], { burstN:6 }) },
          { key:'CASSIOP',  sym:'✫', label:'CASSIOPEIA',
            fn:() => bossFireConstellation([[-2,0.3],[-1,-0.4],[0,0.2],[1,-0.5],[2,0.1]], { burstN:5, holdMs:600 }) },
          { key:'DIPPER',   sym:'✭', label:'THE BIG DIPPER',
            fn:() => bossFireConstellation(
              [[-1.5,-0.3],[-1,-0.6],[-0.4,-0.5],[0.1,0],[0.6,0.5],[1.1,0.7],[1.6,0.6]],
              { burstN:4, holdMs:650 }) },
        ],
      },
      _buildGeometry() {
        const phi = (1 + Math.sqrt(5)) / 2, nm = Math.sqrt(1 + phi * phi);
        const V = [
          [0,1,phi],[0,-1,phi],[0,1,-phi],[0,-1,-phi],
          [1,phi,0],[-1,phi,0],[1,-phi,0],[-1,-phi,0],
          [phi,0,1],[phi,0,-1],[-phi,0,1],[-phi,0,-1],
        ].map(v => v.map(x => x / nm));
        const FACES = [
          [0,1,8],[0,8,4],[0,4,5],[0,5,10],[0,10,1],
          [1,6,8],[8,6,9],[8,9,4],[4,9,2],[4,2,5],
          [5,2,11],[5,11,10],[10,11,7],[10,7,1],[1,7,6],
          [3,9,6],[3,6,7],[3,7,11],[3,11,2],[3,2,9],
        ];
        const seen = new Set(), E = [];
        FACES.forEach(f => [[f[0],f[1]],[f[1],f[2]],[f[0],f[2]]].forEach(([a,b]) => {
          const k = a < b ? `${a}-${b}` : `${b}-${a}`;
          if (!seen.has(k)) { seen.add(k); E.push([a, b]); }
        }));
        return { V, FACES, E };
      },
      draw(boss) {
        const { V, FACES, E } = this._geo || (this._geo = this._buildGeometry());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const breathe    = 1 + 0.07 * Math.sin(bossT * 1.3);
        const sc         = boss.scale * breathe;
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx + boss.rot.tilt);
          p = rotY(p, boss.rot.ry);
          return proj3(p, 3.5, sc, boss.x, boss.y);
        });
        ctx.save();
        FACES.map(f => ({ f, z: (vp[f[0]][2] + vp[f[1]][2] + vp[f[2]][2]) / 3 }))
          .sort((a, b) => a.z - b.z)
          .forEach(({ f, z }) => {
            ctx.beginPath();
            ctx.moveTo(vp[f[0]][0], vp[f[0]][1]);
            ctx.lineTo(vp[f[1]][0], vp[f[1]][1]);
            ctx.lineTo(vp[f[2]][0], vp[f[2]][1]);
            ctx.closePath();
            const alpha = boss.hitFlash > 0 ? 0.18 : (0.03 + 0.05 * ((z + 1) / 2));
            ctx.fillStyle = boss.hitFlash > 0
              ? `rgba(255,255,255,${alpha})`
              : `rgba(0,245,255,${alpha})`;
            ctx.fill();
          });
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, boss.hp / BOSS_MAX_HP * 0.6 + 0.4);
        // Ace Phase Evolution
        if (boss.phase === 3) {
          const ghostVP = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.3 + boss.rot.tilt);
            p = rotY(p, -boss.rot.ry * 0.9);
            return proj3(p, 3.5, sc * 0.65,
              boss.x + Math.sin(bossT * 0.9) * 18,
              boss.y + Math.cos(bossT * 0.7) * 12);
          });
          ctx.globalAlpha = 0.2;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(ghostVP[a][0], ghostVP[a][1]);
            ctx.lineTo(ghostVP[b][0], ghostVP[b][1]);
            ctx.strokeStyle = '#ff2d78'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Orion
    {
      id: 'orion',       // Nitrokalium Apotheosis
      phaseColors: ['#ff2d78', '#a855f7', '#ffd700'],
      makeRot()      { return { rx:0, ry:0, rz:0, rx2:0, ry2:0, rz2:0 }; },
      makeRotSpeed() { return { rx:0.4, ry:0.6, rz:0.2, rx2:-0.35, ry2:0.5, rz2:-0.15 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx  += rotSpeed.rx  * 0.014 * spd; rot.ry  += rotSpeed.ry  * 0.014 * spd;
        rot.rz  += rotSpeed.rz  * 0.014 * spd; rot.rx2 += rotSpeed.rx2 * 0.014 * spd;
        rot.ry2 += rotSpeed.ry2 * 0.014 * spd; rot.rz2 += rotSpeed.rz2 * 0.014 * spd;
      },
      attack(phase) {
        if (phase === 1) bossFireAimed(0.35);
        if (phase === 2) { bossFireAimed(0.4); bossFireAimed(-0.4); bossFireAimed(0); }
        if (phase === 3) { bossFireSpiral(12, bossT * 0.3); bossFireSpiral(12, -bossT * 0.3); }
      },
      // I'ma firin ma lasers!
      sweepLaser: {
        telegraphMs: [1000, 850, 700],
        activeMs:    [500, 550, 600],
        cooldown:    [7, 5, 3.5],
      },
      attackPool: {
        1: [
          { key:'FLAK',    sym:'\u271a', label:'FLAK BURST',
            fn:() => bossFireRing(6) },
          { key:'MORTAR',  sym:'\u25ce', label:'MORTAR VOLLEY',
            fn:() => bossFireAimed([-0.3, 0.3]) },
        ],
        2: [
          { key:'FLAK',    sym:'\u271a', label:'FLAK BURST',
            fn:() => bossFireRing(6) },
          { key:'MORTAR',  sym:'\u25ce', label:'MORTAR VOLLEY',
            fn:() => bossFireAimed([-0.3, 0.3]) },
          { key:'CLUSTER', sym:'\u2756', label:'CLUSTER CHARGE',
            fn:() => { bossFireRing(8); bossFireAimed(0); } },
          { key:'RAILGUN', sym:'\u27b9', label:'RAILGUN LANCE',
            fn:() => bossFireAimed([-0.05, 0.05]) },
        ],
        3: [
          { key:'FLAK',    sym:'\u271a', label:'FLAK BURST',
            fn:() => bossFireRing(6) },
          { key:'MORTAR',  sym:'\u25ce', label:'MORTAR VOLLEY',
            fn:() => bossFireAimed([-0.3, 0.3]) },
          { key:'CLUSTER', sym:'\u2756', label:'CLUSTER CHARGE',
            fn:() => { bossFireRing(8); bossFireAimed(0); } },
          { key:'RAILGUN', sym:'\u27b9', label:'RAILGUN LANCE',
            fn:() => bossFireAimed([-0.05, 0.05]) },
          { key:'BARRAGE', sym:'\u25a6', label:'BARRAGE',
            fn:() => bossFireRing(14) },
          { key:'SATURATION', sym:'\u2742', label:'SATURATION FIRE',
            fn:() => bossFireSpiral(16, bossT * 0.5) },
        ],
      },
      draw(boss) {
        const V = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
        const E = [[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[4,3],[3,5],[5,2]];
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const pulse      = 0.5 + 0.5 * Math.sin(bossT * 2.1);
        const hpPct      = boss.hp / BOSS_MAX_HP;
        function getVP(rx, ry, rz, sc) {
          return V.map(v => {
            let p = rotX(v, rx); p = rotY(p, ry); p = rotZ(p, rz);
            return proj3(p, 3.5, sc, boss.x, boss.y);
          });
        }
        ctx.save();
        // Orion ghost
        const ghostSc = boss.scale * (1 + (boss.phase - 1) * 0.15);
        drawEdgesGlow(getVP(boss.rot.rx2, boss.rot.ry2, boss.rot.rz2, ghostSc), E, '#a855f7', 0.35 * hpPct);
        // Orion body
        drawEdgesGlow(getVP(boss.rot.rx, boss.rot.ry, boss.rot.rz, boss.scale * 0.8), E,
          boss.hitFlash > 0 ? '#ffffff' : phaseColor, hpPct * 0.6 + 0.4);
        // Orion Core
        ctx.beginPath(); ctx.arc(boss.x, boss.y, 4 + 3 * pulse, 0, Math.PI * 2);
        ctx.fillStyle   = boss.hitFlash > 0 ? '#ffffff' : `rgba(255,45,120,${0.6 + 0.4 * pulse})`;
        ctx.shadowColor = phaseColor; ctx.shadowBlur = 18 * pulse; ctx.fill();
        // Orion Phase Evolution
        if (boss.phase === 3) {
          const g3VP = getVP(boss.rot.rx * 0.7, boss.rot.ry2 * 1.2, boss.rot.rz, ghostSc * 1.3);
          ctx.globalAlpha = 0.15;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(g3VP[a][0], g3VP[a][1]);
            ctx.lineTo(g3VP[b][0], g3VP[b][1]);
            ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 0.5; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Sixer
    {
      id: 'sixer',       // Titane Apotheosis
      phaseColors: ['#a855f7', '#00f5ff', '#ffd700'],
      makeRot()      { return { rx:0, ry:0, spin:0 }; },
      makeRotSpeed() { return { rx:0.25, ry:0.38, spin:0.9 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx   += rotSpeed.rx   * 0.011 * spd;
        rot.ry   += rotSpeed.ry   * 0.011 * spd;
        rot.spin += rotSpeed.spin * 0.011 * spd;
      },
      attack(phase) {
        if (phase === 1) bossFireRing(6);
        if (phase === 2) { bossFireRing(6); setTimeout(() => bossFireRing(6), 150); }
        if (phase === 3) bossFireSpiral(16, bossT * 0.5);
      },
      // It's the beamiest!
      coneBeam: {
        telegraphMs: [900, 750, 650],
        activeMs:    [450, 500, 550],
        cooldown:    [7, 5, 3.5],
        halfAngle:   [0.22, 0.17, 0.13],
      },
      attackPool: {
        1: [
          { key:'PI',    sym:'π', label:'π',
            fn:() => bossFireRing(8) },
          { key:'E',     sym:'e', label:'e',
            fn:() => bossFireSpiral(10, bossT * 0.4) },
        ],
        2: [
          { key:'PI',    sym:'π', label:'π',
            fn:() => bossFireRing(8) },
          { key:'E',     sym:'e', label:'e',
            fn:() => bossFireSpiral(10, bossT * 0.4) },
          { key:'PHI',   sym:'φ', label:'φ \u2014 GOLDEN RATIO',
            fn:() => bossFireSpiral(13, bossT * 0.2) },
          { key:'EMC2',  sym:'\u00b2', label:'E = MC\u00b2',
            fn:() => { bossFireAimed(0.4); bossFireAimed(-0.4); } },
        ],
        3: [
          { key:'PI',    sym:'π', label:'π',
            fn:() => bossFireRing(8) },
          { key:'E',     sym:'e', label:'e',
            fn:() => bossFireSpiral(10, bossT * 0.4) },
          { key:'PHI',   sym:'φ', label:'φ \u2014 GOLDEN RATIO',
            fn:() => bossFireSpiral(13, bossT * 0.2) },
          { key:'EMC2',  sym:'\u00b2', label:'E = MC\u00b2',
            fn:() => { bossFireAimed(0.4); bossFireAimed(-0.4); } },
          { key:'EULER', sym:'\u221e', label:'e^(i\u03c0) + 1 = 0',
            fn:() => { bossFireRing(12); bossFireSpiral(8, bossT * 0.3); } },
          { key:'PYTHAG',sym:'\u0394', label:'a\u00b2 + b\u00b2 = c\u00b2',
            fn:() => { bossFireAimed(0); bossFireAimed(0.6435); } },
        ],
      },
      draw(boss) {
        const s  = 1 / Math.sqrt(3);
        const TA = [[s,s,s],[s,-s,-s],[-s,s,-s],[-s,-s,s]];
        const TB = [[-s,-s,-s],[-s,s,s],[s,-s,s],[s,s,-s]];
        const E  = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
        const phaseColorA = boss.phaseColors[boss.phase - 1];
        const phaseColorB = boss.phase === 1 ? '#00f5ff' : boss.phase === 2 ? '#a855f7' : '#ff2d78';
        const hpPct       = boss.hp / BOSS_MAX_HP;
        function getVP(verts, spinDir, sc) {
          return verts.map(v => {
            let p = rotX(v, boss.rot.rx);
            p = rotY(p, boss.rot.ry);
            p = rotZ(p, boss.rot.spin * spinDir);
            return proj3(p, 3.5, sc, boss.x, boss.y);
          });
        }
        ctx.save();
        const sc  = boss.scale;
        const vpA = getVP(TA,  1, sc);
        const vpB = getVP(TB, -1, sc);
        const zA  = vpA.reduce((sum, v) => sum + v[2], 0);
        const zB  = vpB.reduce((sum, v) => sum + v[2], 0);
        const col = boss.hitFlash > 0 ? '#ffffff' : null;
        if (zA < zB) {
          drawEdgesGlow(vpA, E, col || phaseColorA, hpPct * 0.5 + 0.5);
          drawEdgesGlow(vpB, E, col || phaseColorB, hpPct * 0.5 + 0.5);
        } else {
          drawEdgesGlow(vpB, E, col || phaseColorB, hpPct * 0.5 + 0.5);
          drawEdgesGlow(vpA, E, col || phaseColorA, hpPct * 0.5 + 0.5);
        }
        // Alignment
        const throb = Math.abs(Math.sin(bossT * 3.1));
        if (throb > 0.7) {
          ctx.beginPath(); ctx.arc(boss.x, boss.y, 6 * throb, 0, Math.PI * 2);
          ctx.fillStyle   = `rgba(255,255,255,${(throb - 0.7) / 0.3 * 0.8})`;
          ctx.shadowColor = '#ffffff'; ctx.shadowBlur = 20; ctx.fill();
        }
        // Sixer Phase Evolution
        if (boss.phase === 3) {
          const vpC = getVP(TA, 1, sc * 1.45);
          const vpD = getVP(TB, -1, sc * 1.45);
          ctx.globalAlpha = 0.18;
          [vpC, vpD].forEach((vp, i) => {
            E.forEach(([a, b]) => {
              ctx.beginPath(); ctx.moveTo(vp[a][0], vp[a][1]); ctx.lineTo(vp[b][0], vp[b][1]);
              ctx.strokeStyle = i === 0 ? '#a855f7' : '#00f5ff'; ctx.lineWidth = 0.5; ctx.shadowBlur = 0; ctx.stroke();
            });
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Eagle1
    {
      id: 'eagle1',      // Alkalium Apotheosis
      phaseColors: ['#ffd700', '#ff2d78', '#ffffff'],
      makeRot()      { return { rx:0, ry:0 }; },
      makeRotSpeed() { return { rx:0.22, ry:0.33 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.010 * spd;
        rot.ry += rotSpeed.ry * 0.010 * spd;
      },
      attack(phase) {
        if (phase === 1) bossFireSpiral(8, bossT * 0.2);
        if (phase === 2) { bossFireSpiral(10, bossT * 0.25); bossFireAimed(0); }
        if (phase === 3) bossFireRing(14);
      },
      attackPool: {
        1: [
          { key:'ARIES',  sym:'\u2648', label:'ARIES',
            fn:() => bossFireConstellation([[-1,0.3],[0,0],[1,-0.3]], { burstN:5 }) },
          { key:'GEMINI', sym:'\u264a', label:'GEMINI',
            fn:() => bossFireConstellation([[-1,-0.6],[-1,0.6],[1,-0.6],[1,0.6]], { burstN:5 }) },
        ],
        2: [
          { key:'ARIES',  sym:'\u2648', label:'ARIES',
            fn:() => bossFireConstellation([[-1,0.3],[0,0],[1,-0.3]], { burstN:5 }) },
          { key:'GEMINI', sym:'\u264a', label:'GEMINI',
            fn:() => bossFireConstellation([[-1,-0.6],[-1,0.6],[1,-0.6],[1,0.6]], { burstN:5 }) },
          { key:'LEO',    sym:'\u264c', label:'LEO',
            fn:() => bossFireConstellation([[-1.5,0.2],[-0.8,0.6],[0,0.5],[0.8,-0.2],[1.4,-0.6]], { burstN:5, holdMs:600 }) },
        ],
        3: [
          { key:'ARIES',  sym:'\u2648', label:'ARIES',
            fn:() => bossFireConstellation([[-1,0.3],[0,0],[1,-0.3]], { burstN:5 }) },
          { key:'GEMINI', sym:'\u264a', label:'GEMINI',
            fn:() => bossFireConstellation([[-1,-0.6],[-1,0.6],[1,-0.6],[1,0.6]], { burstN:5 }) },
          { key:'LEO',    sym:'\u264c', label:'LEO',
            fn:() => bossFireConstellation([[-1.5,0.2],[-0.8,0.6],[0,0.5],[0.8,-0.2],[1.4,-0.6]], { burstN:5, holdMs:600 }) },
          { key:'SCORPIO',sym:'\u264f', label:'SCORPIO',
            fn:() => bossFireConstellation([[-1.5,-0.5],[-0.8,-0.2],[0,0.1],[0.8,0.4],[1.3,0.9],[1.6,0.3]], { burstN:4, holdMs:650 }) },
        ],
      },
      // What's your sign?
      zodiacWheel: {
        telegraphMs: [500, 420, 360],
        sweepMs:     [2200, 1900, 1600],
        cooldownMs:  [900, 700, 500],
        beamHalfDeg: [5, 4.2, 3.5],
        bandHalf:    [55, 45, 38],
        startAngle: -80,
        endAngle:   80,
        spokeAngles: [-75, -45, -15, 15, 45, 75], 
      },
      _buildGeometry() {
        const phi = (1 + Math.sqrt(5)) / 2, iphi = 1 / phi, nrm = Math.sqrt(3);
        const V = [
          [1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],
          [-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1],
          [0,phi,iphi],[0,phi,-iphi],[0,-phi,iphi],[0,-phi,-iphi],
          [iphi,0,phi],[-iphi,0,phi],[iphi,0,-phi],[-iphi,0,-phi],
          [phi,iphi,0],[phi,-iphi,0],[-phi,iphi,0],[-phi,-iphi,0],
        ].map(v => v.map(x => x / nrm));
        const E = [];
        for (let i = 0; i < V.length; i++)
          for (let j = i + 1; j < V.length; j++) {
            const dx = V[i][0]-V[j][0], dy = V[i][1]-V[j][1], dz = V[i][2]-V[j][2];
            if (Math.sqrt(dx*dx+dy*dy+dz*dz) < 0.78) E.push([i, j]);
          }
        return { V, E };
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = this._buildGeometry());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const period   = 3.2 - (boss.phase - 1) * 0.6;
        const phase01  = (bossT % period) / period;
        const collapseT = Math.pow(phase01, 0.4);
        const scaleMod  = 0.18 + 0.82 * collapseT;
        const twistAmt  = (1 - collapseT) * 1.8;
        const sc        = boss.scale * scaleMod;
        const flashT    = Math.max(0, 1 - collapseT * 1.4);
        ctx.save();
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx + twistAmt * v[1] * 0.4);
          p = rotY(p, boss.rot.ry + twistAmt * v[0] * 0.4);
          return proj3(p, 3.5, sc, boss.x, boss.y);
        });
        const edgeColor = boss.hitFlash > 0 ? '#ffffff' : (flashT > 0.5 ? '#ffffff' : phaseColor);
        drawEdgesGlow(vp, E, edgeColor, boss.hp / BOSS_MAX_HP * 0.5 + 0.5);
        // Full collapse
        if (flashT > 0.6) {
          ctx.fillStyle = `rgba(255,215,0,${(flashT - 0.6) / 0.4 * 0.14})`;
          ctx.fillRect(boss.x - 200, boss.y - 200, 400, 400);
        }
        // Eagle1 Phase Evolution
        if (boss.phase === 3) {
          const phase01b  = ((bossT + period * 0.5) % period) / period;
          const collapseB = Math.pow(phase01b, 0.4);
          const scB       = boss.scale * (0.18 + 0.82 * collapseB) * 0.7;
          const twistB    = (1 - collapseB) * 1.8;
          const vpB = V.map(v => {
            let p = rotX(v, -boss.rot.rx + twistB * v[1] * 0.4);
            p = rotY(p, -boss.rot.ry + twistB * v[0] * 0.4);
            return proj3(p, 3.5, scB, boss.x + 20, boss.y - 15);
          });
          ctx.globalAlpha = 0.22;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(vpB[a][0], vpB[a][1]); ctx.lineTo(vpB[b][0], vpB[b][1]);
            ctx.strokeStyle = '#ff2d78'; ctx.lineWidth = 0.5; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Domino
    {
      id: 'domino',      // Gammite Apotheosis
      phaseColors: ['#ff2d78', '#a855f7', '#ffd700'],
      makeRot()      { return { rx:0, ry:0 }; },
      makeRotSpeed() { return { rx:0.28, ry:0.41 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.010 * spd;
        rot.ry += rotSpeed.ry * 0.010 * spd;
      },
      attack(phase) {
        if (phase === 1) bossFireRing(8);
        if (phase === 2) bossFireRing(14);
        if (phase === 3) { bossFireRing(20); bossFireAimed(0.2); bossFireAimed(-0.2); }
      },
      attackPool: {
        1: [
          { key:'VIC', sym:'\u0394', label:'VIC FORMATION',
            fn:() => bossFireAimed([-0.22, 0, 0.22]) },
        ],
        2: [
          { key:'VIC',     sym:'\u0394', label:'VIC FORMATION',
            fn:() => bossFireAimed([-0.22, 0, 0.22]) },
          { key:'ECHELON', sym:'\u27cb', label:'ECHELON FORMATION',
            fn:() => bossFireAimed([-0.5, -0.2, 0.1, 0.4]) },
        ],
        3: [
          { key:'VIC',     sym:'\u0394', label:'VIC FORMATION',
            fn:() => bossFireAimed([-0.22, 0, 0.22]) },
          { key:'ECHELON', sym:'\u27cb', label:'ECHELON FORMATION',
            fn:() => bossFireAimed([-0.5, -0.2, 0.1, 0.4]) },
          { key:'FINGER4', sym:'\u2733', label:'FINGER-FOUR FORMATION',
            fn:() => bossFireAimed([-0.35, -0.12, 0.12, 0.35]) },
          { key:'DIAMOND', sym:'\u25c7', label:'DIAMOND FORMATION',
            fn:() => bossFireAimed([-0.55, -0.18, 0.18, 0.55]) },
        ],
      },
      // Squadron
      squadron: {
        interval: [7, 5, 3.5],
        formations: [
          [[-24, 0], [0, 0], [24, 0]],              // Vic
          [[-30, -14], [-10, 4], [10, 4], [30, -14]], // wide spread
          [[-18, -18], [18, -18], [0, 18]],           // wedge
        ],
      },
      _buildGeometry() {
        const phi = (1 + Math.sqrt(5)) / 2, nm = Math.sqrt(1 + phi * phi);
        let allV = [
          [0,1,phi],[0,-1,phi],[0,1,-phi],[0,-1,-phi],
          [1,phi,0],[-1,phi,0],[1,-phi,0],[-1,-phi,0],
          [phi,0,1],[phi,0,-1],[-phi,0,1],[-phi,0,-1],
        ].map(v => v.map(x => x / nm));
        const F0 = [
          [0,1,8],[0,8,4],[0,4,5],[0,5,10],[0,10,1],
          [1,6,8],[8,6,9],[8,9,4],[4,9,2],[4,2,5],
          [5,2,11],[5,11,10],[10,11,7],[10,7,1],[1,7,6],
          [3,9,6],[3,6,7],[3,7,11],[3,11,2],[3,2,9],
        ];
        let faces = [], mc = {};
        function mid(a, b) {
          const k = a < b ? `${a}-${b}` : `${b}-${a}`;
          if (mc[k] !== undefined) return mc[k];
          const m = allV[a].map((x, i) => (x + allV[b][i]) / 2);
          const l = Math.sqrt(m.reduce((s, x) => s + x * x, 0));
          allV.push(m.map(x => x / l)); mc[k] = allV.length - 1; return mc[k];
        }
        F0.forEach(([a, b, c]) => {
          const ab = mid(a,b), bc = mid(b,c), ca = mid(c,a);
          faces.push([a,ab,ca],[b,bc,ab],[c,ca,bc],[ab,bc,ca]);
        });
        const es = new Set(), E = [];
        faces.forEach(f => [[f[0],f[1]],[f[1],f[2]],[f[0],f[2]]].forEach(([a, b]) => {
          const k = a < b ? `${a}-${b}` : `${b}-${a}`;
          if (!es.has(k)) { es.add(k); E.push([a, b]); }
        }));
        return { V: allV, E };
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = this._buildGeometry());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const hpPct      = boss.hp / BOSS_MAX_HP;
        ctx.save();
        // Domino Phase Evolution
        const unfoldAmt = boss.phase === 3 ? 0.55 * Math.sin(bossT * 1.1) : 0;
        const vp = V.map((v, i) => {
          let vd = v;
          if (unfoldAmt !== 0) {
            const freq    = 2.0 + Math.sin(i * 7.3) * 0.8;
            const ph      = i * 2.1;
            const extrude = 1 + unfoldAmt * Math.sin(bossT * freq + ph);
            vd = v.map(x => x * extrude);
          }
          let p = rotX(vd, boss.rot.rx); p = rotY(p, boss.rot.ry);
          return proj3(p, 3.5, boss.scale, boss.x, boss.y);
        });
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, hpPct * 0.5 + 0.5);
        // Domino Ghost
        if (boss.phase >= 2) {
          const vpStable = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 0.8); p = rotY(p, boss.rot.ry * 0.8);
            return proj3(p, 3.5, boss.scale * 0.55,
              boss.x + Math.sin(bossT * 0.9) * 22,
              boss.y + Math.cos(bossT * 0.7) * 14);
          });
          ctx.globalAlpha = 0.18;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(vpStable[a][0], vpStable[a][1]);
            ctx.lineTo(vpStable[b][0], vpStable[b][1]);
            ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 0.5; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Phoenix
    {
      id: 'phoenix',     // Axorite Apotheosis
      phaseColors: ['#00f5ff', '#ff2d78', '#ffd700'],
      makeRot()      { return { rx:0.3, ry:0, rz:0 }; },
      makeRotSpeed() { return { rx:0.12, ry:0.35, rz:0.18 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.ry += rotSpeed.ry * 0.010 * spd;
        rot.rz += rotSpeed.rz * 0.010 * spd;
      },
      attack(phase) {
        const twist = Math.sin(bossT * 0.6) * 0.6;
        if (phase === 1) bossFireAimed(twist);
        if (phase === 2) { bossFireAimed(twist); bossFireAimed(-twist); }
        if (phase === 3) bossFireSpiral(14, bossT * 0.4 + twist);
      },
      attackPool: {
        1: [
          { key:'MILKYWAY',  sym:'✦', label:'MILKY WAY',  fn:() => bossFireSpiral(8, bossT * 0.3) },
          { key:'ANDROMEDA', sym:'✳', label:'ANDROMEDA',  fn:() => bossFireSpiral(10, -bossT * 0.25) },
        ],
        2: [
          { key:'MILKYWAY',  sym:'✦', label:'MILKY WAY',  fn:() => bossFireSpiral(8, bossT * 0.3) },
          { key:'ANDROMEDA', sym:'✳', label:'ANDROMEDA',  fn:() => bossFireSpiral(10, -bossT * 0.25) },
          { key:'WHIRLPOOL', sym:'✺', label:'WHIRLPOOL',  fn:() => { bossFireSpiral(14, bossT * 0.5); bossFireSpiral(6, bossT * 0.5 + Math.PI / 6); } },
          { key:'PINWHEEL',  sym:'✵', label:'PINWHEEL',   fn:() => bossFireSpiral(16, bossT * 0.6) },
        ],
        3: [
          { key:'MILKYWAY',  sym:'✦', label:'MILKY WAY',  fn:() => bossFireSpiral(8, bossT * 0.3) },
          { key:'ANDROMEDA', sym:'✳', label:'ANDROMEDA',  fn:() => bossFireSpiral(10, -bossT * 0.25) },
          { key:'WHIRLPOOL', sym:'✺', label:'WHIRLPOOL',  fn:() => { bossFireSpiral(14, bossT * 0.5); bossFireSpiral(6, bossT * 0.5 + Math.PI / 6); } },
          { key:'PINWHEEL',  sym:'✵', label:'PINWHEEL',   fn:() => bossFireSpiral(16, bossT * 0.6) },
          { key:'SOMBRERO',  sym:'✷', label:'SOMBRERO',   fn:() => { bossFireRing(10); bossFireAimed(0); } },
          { key:'CARTWHEEL', sym:'❋', label:'CARTWHEEL',  fn:() => bossFireRing(18) },
        ],
      },
      // Wiggle Nodes
      orbitNodes: {
        interval:   [6, 4.5, 3.2],
        count:      [2, 3, 3],
        releaseMs:  [3200, 2800, 2400],
        burstN:     [5, 6, 7],
        wiggleAmp:  [16, 20, 24],
        wiggleFreq: [4, 4.5, 5],
      },
      _buildGeometry() {
        const N = 20, K = 3; 
        const V = [];
        for (let i = 0; i < N; i++) {
          const u = (i / N) * Math.PI * 2, halfU = u / 2;
          for (let k = 0; k < K; k++) {
            const v = -1 + (2 * k) / (K - 1);
            const rBand = 1 + 0.4 * v * Math.cos(halfU);
            V.push([
              rBand * Math.cos(u),
              rBand * Math.sin(u),
              0.4 * v * Math.sin(halfU),
            ]);
          }
        }
        const idx = (i, k) => i * K + k;
        const E = [];
        for (let i = 0; i < N; i++) {
          const next = (i + 1) % N;
          // On wraparound, flip the v-axis! Yay math!
          for (let k = 0; k < K; k++) {
            const k2 = (next === 0) ? (K - 1 - k) : k;
            E.push([idx(i, k), idx(next, k2)]);
          }
          for (let k = 0; k < K - 1; k++) E.push([idx(i, k), idx(i, k + 1)]);
        }
        return { V, E };
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = this._buildGeometry());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const hpPct      = boss.hp / BOSS_MAX_HP;
        const sc         = boss.scale * (1 + 0.06 * Math.sin(bossT * 1.1));
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx);
          p = rotY(p, boss.rot.ry);
          p = rotZ(p, boss.rot.rz);
          return proj3(p, 3.5, sc, boss.x, boss.y);
        });
        ctx.save();
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, hpPct * 0.5 + 0.5);
        // Phoenix Phase Evolution
        if (boss.phase === 3) {
          const vpGhost = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.2);
            p = rotY(p, -boss.rot.ry * 0.85);
            p = rotZ(p,  boss.rot.rz * 1.4);
            return proj3(p, 3.5, sc * 0.6,
              boss.x + Math.sin(bossT * 0.85) * 16,
              boss.y + Math.cos(bossT * 0.65) * 11);
          });
          ctx.globalAlpha = 0.18;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(vpGhost[a][0], vpGhost[a][1]);
            ctx.lineTo(vpGhost[b][0], vpGhost[b][1]);
            ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Doc
    {
      id: 'doc',         // Lithebryl Apotheosis
      phaseColors: ['#ff6b35', '#a855f7', '#d42b6a'],
      makeRot()      { return { rx:0, ry:0, rz:0 }; },
      makeRotSpeed() { return { rx:0.3, ry:0.45, rz:0.2 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.012 * spd;
        rot.ry += rotSpeed.ry * 0.012 * spd;
        rot.rz += rotSpeed.rz * 0.012 * spd;
      },

      attack(phase) {},
      attackPool: {
        1: [
          { key:'OCTANT',   sym:'\u2726', label:'OCTANT RING',
            fn:() => bossFireRing(8) },
        ],
        2: [
          { key:'OCTANT',   sym:'\u2726', label:'OCTANT RING',
            fn:() => bossFireRing(8) },
          { key:'HELIX8',   sym:'\u2733', label:'HELIX EIGHT',
            fn:() => bossFireSpiral(8, bossT * 0.3) },
        ],
        3: [
          { key:'OCTANT',   sym:'\u2726', label:'OCTANT RING',
            fn:() => bossFireRing(8) },
          { key:'HELIX8',   sym:'\u2733', label:'HELIX EIGHT',
            fn:() => bossFireSpiral(8, bossT * 0.3) },
          { key:'FULLRING', sym:'\u2734', label:'FULL OCTAGRAM',
            fn:() => bossFireRing(16) },
        ],
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = buildDoc());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx); p = rotY(p, boss.rot.ry); p = rotZ(p, boss.rot.rz);
          return proj3(p, 3.5, boss.scale, boss.x, boss.y);
        });
        ctx.save();
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, boss.hp / BOSS_MAX_HP * 0.6 + 0.4);
        // Doc Phase Evolution
        if (boss.phase === 3) {
          const ghostVP = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.3); p = rotY(p, -boss.rot.ry * 0.9); p = rotZ(p, boss.rot.rz * 1.2);
            return proj3(p, 3.5, boss.scale * 0.65,
              boss.x + Math.sin(bossT * 0.9) * 18, boss.y + Math.cos(bossT * 0.7) * 12);
          });
          ctx.globalAlpha = 0.2;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(ghostVP[a][0], ghostVP[a][1]);
            ctx.lineTo(ghostVP[b][0], ghostVP[b][1]);
            ctx.strokeStyle = '#ff2d78'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Vector
    {
      id: 'vector',      // Carbosilicium Apotheosis
      phaseColors: ['#ec4899', '#a855f7', '#d42b6a'],
      makeRot()      { return { rx:0, ry:0, rz:0 }; },
      makeRotSpeed() { return { rx:0.25, ry:0.4, rz:0.15 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.012 * spd;
        rot.ry += rotSpeed.ry * 0.012 * spd;
        rot.rz += rotSpeed.rz * 0.012 * spd;
      },
      attack(phase) {},
      attackPool: {
        1: [
          { key:'HALO',     sym:'\u2729', label:'HALO RING',
            fn:() => bossFireRing(10) },
        ],
        2: [
          { key:'HALO',     sym:'\u2729', label:'HALO RING',
            fn:() => bossFireRing(10) },
          { key:'TWINHALO', sym:'\u272a', label:'TWIN HALO',
            fn:() => { bossFireRing(10); setTimeout(() => bossFireRing(10), 150); } },
        ],
        3: [
          { key:'HALO',     sym:'\u2729', label:'HALO RING',
            fn:() => bossFireRing(10) },
          { key:'TWINHALO', sym:'\u272a', label:'TWIN HALO',
            fn:() => { bossFireRing(10); setTimeout(() => bossFireRing(10), 150); } },
          { key:'FULLHALO', sym:'\u2728', label:'FULL HALO',
            fn:() => bossFireRing(20) },
        ],
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = buildVector());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx); p = rotY(p, boss.rot.ry); p = rotZ(p, boss.rot.rz);
          return proj3(p, 3.5, boss.scale, boss.x, boss.y);
        });
        ctx.save();
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, boss.hp / BOSS_MAX_HP * 0.6 + 0.4);
        // Vector Phase Evolution
        if (boss.phase === 3) {
          const ghostVP = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.2); p = rotY(p, -boss.rot.ry * 0.85); p = rotZ(p, boss.rot.rz * 1.3);
            return proj3(p, 3.5, boss.scale * 0.65,
              boss.x + Math.sin(bossT * 0.85) * 17, boss.y + Math.cos(bossT * 0.65) * 12);
          });
          ctx.globalAlpha = 0.2;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(ghostVP[a][0], ghostVP[a][1]);
            ctx.lineTo(ghostVP[b][0], ghostVP[b][1]);
            ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Valkyrie
    {
      id: 'valkyrie',    // PhiOmega Apotheosis
      phaseColors: ['#a855f7', '#ffd700', '#00f5ff'],
      makeRot()      { return { rx:0, ry:0, tilt:0 }; },
      makeRotSpeed() { return { rx:0.31, ry:0.47 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.012 * spd;
        rot.ry += rotSpeed.ry * 0.012 * spd;
        rot.tilt = 0.14 * Math.sin(bossT * 0.7);
      },
      attack(phase) {},
      attackPool: {
        1: [
          { key:'ANTI_ORION',   sym:'\u2727', label:'ANTI-ORION\u2019S BELT',
            fn:() => bossFireConstellation([[1,0],[0,0],[-1,0]], { burstN:5 }) },
        ],
        2: [
          { key:'ANTI_ORION',   sym:'\u2727', label:'ANTI-ORION\u2019S BELT',
            fn:() => bossFireConstellation([[1,0],[0,0],[-1,0]], { burstN:5 }) },
          { key:'ANTI_CRUX',    sym:'\u2726', label:'ANTI-SOUTHERN CROSS',
            fn:() => bossFireConstellation([[0,1],[0,-1],[0.7,-0.3],[-0.7,0.3]], { burstN:6, holdMs:400 }) },
        ],
        3: [
          { key:'ANTI_ORION',   sym:'\u2727', label:'ANTI-ORION\u2019S BELT',
            fn:() => bossFireConstellation([[1,0],[0,0],[-1,0]], { burstN:5 }) },
          { key:'ANTI_CRUX',    sym:'\u2726', label:'ANTI-SOUTHERN CROSS',
            fn:() => bossFireConstellation([[0,1],[0,-1],[0.7,-0.3],[-0.7,0.3]], { burstN:6, holdMs:400 }) },
          { key:'ANTI_CASSIOP', sym:'\u2724', label:'ANTI-CASSIOPEIA',
            fn:() => bossFireConstellation([[2,-0.3],[1,0.4],[0,-0.2],[-1,0.5],[-2,-0.1]], { burstN:5, holdMs:450 }) },
          { key:'ANTI_DIPPER',  sym:'\u2723', label:'ANTI-BIG DIPPER',
            fn:() => bossFireConstellation(
              [[1.5,0.3],[1,0.6],[0.4,0.5],[-0.1,0],[-0.6,-0.5],[-1.1,-0.7],[-1.6,-0.6]],
              { burstN:4, holdMs:500 }) },
        ],
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = buildValkyrie());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx + boss.rot.tilt); p = rotY(p, boss.rot.ry);
          return proj3(p, 3.5, boss.scale, boss.x, boss.y);
        });
        ctx.save();
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, boss.hp / BOSS_MAX_HP * 0.6 + 0.4);
        // Valkyrie Phase Evolution
        if (boss.phase === 3) {
          const ghostVP = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.3 + boss.rot.tilt); p = rotY(p, -boss.rot.ry * 0.9);
            return proj3(p, 3.5, boss.scale * 0.65,
              boss.x + Math.sin(bossT * 0.9) * 18, boss.y + Math.cos(bossT * 0.7) * 12);
          });
          ctx.globalAlpha = 0.2;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(ghostVP[a][0], ghostVP[a][1]);
            ctx.lineTo(ghostVP[b][0], ghostVP[b][1]);
            ctx.strokeStyle = '#ff2d78'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Happy Hour
    {
      id: 'happyhour',   // Deltalite Apotheosis
      phaseColors: ['#22c55e', '#00f5ff', '#ff6b35'],
      makeRot()      { return { rx:0, ry:0, rz:0 }; },
      makeRotSpeed() { return { rx:0.2, ry:0.5, rz:0.25 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.012 * spd;
        rot.ry += rotSpeed.ry * 0.012 * spd;
        rot.rz += rotSpeed.rz * 0.012 * spd;
      },
      attack(phase) {},
      attackPool: {
        1: [
          { key:'TRIRING',  sym:'\u25b3', label:'TRIAD RING',
            fn:() => bossFireRing(3) },
        ],
        2: [
          { key:'TRIRING',  sym:'\u25b3', label:'TRIAD RING',
            fn:() => bossFireRing(3) },
          { key:'TRILANCE', sym:'\u25b2', label:'TRIAD LANCE',
            fn:() => bossFireAimed([-Math.PI * 2/3, 0, Math.PI * 2/3]) },
        ],
        3: [
          { key:'TRIRING',  sym:'\u25b3', label:'TRIAD RING',
            fn:() => bossFireRing(3) },
          { key:'TRILANCE', sym:'\u25b2', label:'TRIAD LANCE',
            fn:() => bossFireAimed([-Math.PI * 2/3, 0, Math.PI * 2/3]) },
          { key:'APEXCASCADE', sym:'\u23f7', label:'APEX CASCADE',
            fn:() => { bossFireRing(3); setTimeout(() => bossFireAimed([-Math.PI * 2/3, 0, Math.PI * 2/3]), 150); } },
        ],
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = buildHappyHour());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx); p = rotY(p, boss.rot.ry); p = rotZ(p, boss.rot.rz);
          return proj3(p, 3.5, boss.scale * 1.3, boss.x, boss.y); // unit-edge shape reads small — scaled up
        });
        ctx.save();
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, boss.hp / BOSS_MAX_HP * 0.6 + 0.4);
        //Happy Hour Phase Evolution
        if (boss.phase === 3) {
          const ghostVP = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.2); p = rotY(p, -boss.rot.ry * 0.85); p = rotZ(p, boss.rot.rz * 1.4);
            return proj3(p, 3.5, boss.scale * 1.3 * 0.6,
              boss.x + Math.sin(bossT * 0.85) * 16, boss.y + Math.cos(bossT * 0.65) * 11);
          });
          ctx.globalAlpha = 0.18;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(ghostVP[a][0], ghostVP[a][1]);
            ctx.lineTo(ghostVP[b][0], ghostVP[b][1]);
            ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

    // Metatron
    {
      id: 'metatron',    // Omegite Apotheosis
      phaseColors: ['#ef4444', '#ff8c00', '#ffd700'],
      makeRot()      { return { rx:0, ry:0, rz:0 }; },
      makeRotSpeed() { return { rx:0.18, ry:0.28, rz:0.35 }; },
      updateRot(rot, rotSpeed, phase) {
        const spd = 1 + (phase - 1) * 0.4;
        rot.rx += rotSpeed.rx * 0.012 * spd;
        rot.ry += rotSpeed.ry * 0.012 * spd;
        rot.rz += rotSpeed.rz * 0.012 * spd;
      },
      attack(phase) {},
      attackPool: {
        1: [
          { key:'CUBE_ARM',   sym:'\u25fb', label:'CUBE ARMED',
            fn:() => bossFireAimed(0) },
        ],
        2: [
          { key:'CUBE_ARM',   sym:'\u25fb', label:'CUBE ARMED',
            fn:() => bossFireAimed(0) },
          { key:'TETRA_ARM',  sym:'\u25b3', label:'TETRAHEDRA ARMED',
            fn:() => bossFireRing(6) },
        ],
        3: [
          { key:'CUBE_ARM',   sym:'\u25fb', label:'CUBE ARMED',
            fn:() => bossFireAimed(0) },
          { key:'TETRA_ARM',  sym:'\u25b3', label:'TETRAHEDRA ARMED',
            fn:() => bossFireRing(6) },
          { key:'LATTICE',    sym:'\u2721', label:'LATTICE FIRE',
            fn:() => { bossFireAimed(0); bossFireRing(8); bossFireSpiral(12, bossT * 0.4); } },
        ],
      },
      draw(boss) {
        const { V, E } = this._geo || (this._geo = buildMetatron());
        const phaseColor = boss.phaseColors[boss.phase - 1];
        const vp = V.map(v => {
          let p = rotX(v, boss.rot.rx); p = rotY(p, boss.rot.ry); p = rotZ(p, boss.rot.rz);
          return proj3(p, 3.5, boss.scale, boss.x, boss.y);
        });
        ctx.save();
        drawEdgesGlow(vp, E, boss.hitFlash > 0 ? '#ffffff' : phaseColor, boss.hp / BOSS_MAX_HP * 0.6 + 0.4);
        // Metatron Phase Evolution
        if (boss.phase === 3) {
          const ghostVP = V.map(v => {
            let p = rotX(v, -boss.rot.rx * 1.15); p = rotY(p, -boss.rot.ry * 1.1); p = rotZ(p, -boss.rot.rz * 0.9);
            return proj3(p, 3.5, boss.scale * 0.65,
              boss.x + Math.sin(bossT * 0.95) * 18, boss.y + Math.cos(bossT * 0.75) * 13);
          });
          ctx.globalAlpha = 0.2;
          E.forEach(([a, b]) => {
            ctx.beginPath(); ctx.moveTo(ghostVP[a][0], ghostVP[a][1]);
            ctx.lineTo(ghostVP[b][0], ghostVP[b][1]);
            ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 0.6; ctx.shadowBlur = 0; ctx.stroke();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      },
    },

  ]; // end bossGeometries

  const UPGRADE_TO_BOSS_ID = {
    LITHEBRYL:    'doc',
    NITROKALIUM:  'orion',
    CARBOSILICUM: 'vector',
    MAGNIUM:      'eagle2',
    TITANE:       'sixer',
    ALKALIUM:     'eagle1',
    AZOLITHION:   'ace',
    GAMMITE:      'domino',
    AXORITE:      'phoenix',
    PHIOMEGA:     'valkyrie',
    DELTALITE:    'happyhour',
    OMEGITE:      'metatron',
  };
  function getBossGeometryForUpgrade(upgradeKey) {
    const id = UPGRADE_TO_BOSS_ID[upgradeKey];
    return bossGeometries.find(g => g.id === id) || null;
  }

  const ATTACK_COOLDOWN_DEFAULT = 20;
  const COOLDOWN_OVERRIDES = {
    // I'm gonna need these for sure, but I need to test... every boss form multiple times first.
  };
  function getAttackCooldown(shapeId, attackKey) {
    return COOLDOWN_OVERRIDES[shapeId]?.[attackKey] ?? ATTACK_COOLDOWN_DEFAULT;
  }

  
  // ALAD CATALOG NUMBERS
  
  function raDecToCodes(raHours, decDeg) {
    const raCode  = Math.floor((raHours * 100) / 24);
    const decCode = Math.floor(((decDeg + 90) * 100) / 180);
    return [raCode, decCode];
  }
  function cantorPair(k1, k2) {
    return (k1 + k2) * (k1 + k2 + 1) / 2 + k2;
  }
  function asterismNumber(raHours, decDeg) {
    const [ra, dec] = raDecToCodes(raHours, decDeg);
    return cantorPair(ra, dec);
  }

  const STAR_DATA = {
    orion:     { ra: 5.419,  dec: 6.350   },
    eagle2:    { ra: 18.616, dec: 38.784  },
    sixer:     { ra: 7.577,  dec: 31.888  }, 
    eagle1:    { ra: 2.530,  dec: 89.264  }, 
    ace:       { ra: 19.846, dec: 8.868   }, 
    domino:    { ra: 23.108, dec: -5.041  },
    phoenix:   { ra: 19.771, dec: 10.613  }, 
    doc:       { ra: 17.583, dec: 12.560  },
    vector:    { ra: 18.403, dec: -34.385 }, 
    valkyrie:  { ra: 16.490, dec: -26.432 }, 
    happyhour: { ra: 3.136,  dec: 40.956  }, 
    metatron:  { ra: 20.691, dec: 45.280  }, 
  };
  function getAsterismName(geoId) {
    const star = STAR_DATA[geoId];
    if (!star) return 'Asterism-????';
    return `Asterism-${asterismNumber(star.ra, star.dec)}`;
  }

  
  // BOSS STATE
  
  const BOSS_MAX_HP = 2500;
  const PHASE_NAMES  = ['PHASE I', 'PHASE II', 'PHASE III'];
  const ELEMENT_ATTACK_INTERVAL = [8, 5, 3];

  let bossActive   = false;
  let bossDefeated = false;
  let elementAttackTimer = 0;
  let bossT        = 0; 

  // Boss object
  let boss = null;

  
  // APOTHEOSIS SESSION STATE
  
  let apoActive = false;
  let apoIntroStep   = null;
  let apoIntroTimer  = 0;
  let apoIntroLineIdx = -1;
  let apoWaveformAlpha = 1; 
  let apoSurvivalTime = 0;  
  let apoPrevTrackIdx = 0;  
  const APO_INTRO_PAUSE_S = 2.5;   
  const APO_INTRO_LINE_S  = 2.4;   
  const APO_INTRO_HOLD_S  = 1.6;  
  const APO_INTRO_REVEAL_S = 1.2;  

  const APO_DEFEND_COOLDOWN = 90;   
  const APO_DEFEND_HEAL_PCT = 0.25; 
  const APO_DEFEND_INVINCIBLE_S = 5;
  const BOSS_BASE_SHOOT_SPEED = 4;    
  const KILL_SHOOT_SPEED_RATE = 0.02; 
  const MIN_FRAME_INTERVAL = 1/60;    
  const APO_BOSS_SCALE = 90; 

  
  // ALAD Forces
  
  const WAVE_TUNING = {
    shipsPerSpawn: { base: 2,   perKill: 0.02  },
    spawnMinimum:  { threshold: 2, refillTo: 4 },
    spawnDelay:    { base: 3.5, perKill: -0.01, min: 1.2 },
  };
  const PILOT_HP           = 3;    
  const PILOT_RARE_CHANCE  = 0.08; 
  const PILOT_POINTS       = 120;  
  const PILOT_RARE_POINTS  = 250;  
  const PILOT_HIT_RADIUS   = 16;
  const APO_BOSS_HIT_FACTOR  = 0.55; 
  const PILOT_DROP = {
    chance: 0.12,                                              
    tierWeights: { element: 0.6, compound: 0.3, alloy: 0.1 },   
    healPct:     { element: 0.10, compound: 0.20, alloy: 0.30 }, 
  };

  let apoPilots = [];
  let apoSpawnTimer = 0;

  function makeBoss() {
    const geo = bossGeometries[save.bossRun % bossGeometries.length];
    return {
      geo,
      hp:          BOSS_MAX_HP,
      phase:       1,
      x: 0, y: 0, // set in startBoss()
      scale:       90,
      rot:         geo.makeRot(),
      rotSpeed:    geo.makeRotSpeed(),
      phaseColors: geo.phaseColors,
      shootTimer:  0,
      mineTimer:   0,
      spawnTimer:  0,
      hitFlash:    0,
      alive:       true,
      laser:       null,
      laserTimer:  geo.sweepLaser ? (geo.sweepLaser.telegraphMs[0] / 1000 + 2) : 0,
      cone:        null,
      coneTimer:   geo.coneBeam ? (geo.coneBeam.telegraphMs[0] / 1000 + 2) : 0,
      wheel:        null,
      wheelTimer:   geo.zodiacWheel ? (geo.zodiacWheel.telegraphMs[0] / 1000 + 2) : 0,
      lastWheelSide: null,
      nodeTimer:    geo.orbitNodes ? geo.orbitNodes.interval[0] : 0,
      lastAttackKey: null,
    };
  }
  
  // BOSS FIRE HELPERS
  
  function bossFireAimed(spread = 0) {
    const dx = ship.x - boss.x, dy = ship.y - boss.y;
    const len = Math.sqrt(dx*dx + dy*dy) || 1;
    const base = Math.atan2(dy, dx);
    const offsets = Array.isArray(spread) ? spread : [-spread, 0, spread];
    offsets.forEach(off => {
      const a = base + off;
      const spd = 120 + boss.phase * 30;
      bullets.push({ x:boss.x, y:boss.y, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd,
        speed:spd, dmg:1, enemy:true, r:3, color:boss.phaseColors[boss.phase - 1] });
    });
  }

  function bossFireRing(n = 8, ox = boss.x, oy = boss.y) {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const spd = 90 + boss.phase * 20;
      bullets.push({ x:ox, y:oy, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd,
        speed:spd, dmg:1, enemy:true, r:3, color:boss.phaseColors[boss.phase - 1] });
    }
  }

  function bossFireConstellation(points, opts = {}) {
    const scale  = opts.scale  ?? 26;
    const holdMs = opts.holdMs ?? 550;
    const burstN = opts.burstN ?? 6;
    const cx = boss.x, cy = boss.y;
    const markers = points.map(([dx, dy]) => {
      const b = { x: cx + dx * scale, y: cy + dy * scale, vx: 0, vy: 0,
        speed: 0, dmg: 1, enemy: true, r: 3.5, color: boss.phaseColors[boss.phase - 1] };
      bullets.push(b);
      return b;
    });
    setTimeout(() => {
      markers.forEach(b => {
        bossFireRing(burstN, b.x, b.y);
        b.x = -9999; b.y = -9999; // expire via the existing off-screen check
      });
    }, holdMs);
  }

  function bossFireSpiral(count = 12, rotOffset = 0) {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + rotOffset;
      const spd = 110;
      bullets.push({ x:boss.x, y:boss.y, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd,
        speed:spd, dmg:1, enemy:true, r:2.5, color:boss.phaseColors[boss.phase - 1] });
    }
  }

  function fireWiggleBurst(x, y, n, opts = {}) {
    const spd  = opts.speed || 90;
    const amp  = opts.amp   || 18;
    const freq = opts.freq  || 4;
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;
      bullets.push({
        x, y, enemy: true, dmg: 1, r: 3, color: boss.phaseColors[boss.phase - 1],
        wiggle: true, ox: x, oy: y, angle, speed: spd, amp, freq,
        age: 0, wigglePhase: Math.random() * Math.PI * 2,
      });
    }
  }
  
  function updateSweepLaser(dt) {
    const cfg = boss.geo.sweepLaser;
    if (!boss.laser) {
      boss.laserTimer -= dt;
      if (boss.laserTimer <= 0) {
        // Target side
        const side = ship.x < W / 2 ? 'right' : 'left';
        boss.laser = { side, state: 'telegraph', t: 0 };
      }
      return;
    }
    boss.laser.t += dt;
    if (boss.laser.state === 'telegraph' && boss.laser.t >= cfg.telegraphMs[boss.phase - 1] / 1000) {
      boss.laser.state = 'active';
      boss.laser.t = 0;
      screenShake(4, 0.3);
      logPickup('⚠ CORE DISCHARGE — ' + boss.laser.side.toUpperCase() + ' HALF');
    }
    if (boss.laser.state === 'active') {
      const onWrongHalf = boss.laser.side === 'left' ? ship.x < W / 2 : ship.x > W / 2;
      if (onWrongHalf && ship.invincible <= 0 && invincibleTimer <= 0) {
        takeDamage(run.shieldMax * 0.5);
        ship.invincible = hitInvincDuration(1.2);
        spawnParticles(ship.x, ship.y, '#ff2d78', 12);
      }
      if (boss.laser.t >= cfg.activeMs[boss.phase - 1] / 1000) {
        boss.laser = null;
        boss.laserTimer = cfg.cooldown[boss.phase - 1];
      }
    }
  }

  function drawSweepLaser() {
    if (!boss || !boss.laser) return;
    const { side, state, t } = boss.laser;
    const cfg = boss.geo.sweepLaser;
    const targetX = side === 'left' ? 0 : W;
    ctx.save();
    if (state === 'telegraph') {
      const dur = cfg.telegraphMs[boss.phase - 1] / 1000;
      const p = Math.min(1, t / dur);
      const sweepX = W / 2 + (targetX - W / 2) * p; 
      ctx.beginPath();
      ctx.moveTo(boss.x, boss.y);
      ctx.lineTo(W / 2, H);
      ctx.lineTo(sweepX, H);
      ctx.closePath();
      ctx.fillStyle = `rgba(255,45,120,${0.10 + 0.18 * p})`;
      ctx.fill();
      // Laser beam
      ctx.shadowColor = '#ff2d78'; ctx.shadowBlur = 12;
      ctx.strokeStyle = `rgba(255,45,120,${0.6 + 0.4 * p})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(boss.x, boss.y); ctx.lineTo(sweepX, H); ctx.stroke();
    } else {
      const dur = cfg.activeMs[boss.phase - 1] / 1000;
      const p   = 1 - Math.min(1, t / dur);
      const x0  = side === 'left' ? 0 : W / 2;
      ctx.fillStyle = `rgba(255,45,120,${0.32 + 0.18 * Math.max(0, p)})`;
      ctx.fillRect(x0, 0, W / 2, H);
      ctx.shadowColor = '#ff2d78'; ctx.shadowBlur = 22;
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(boss.x, boss.y); ctx.lineTo(targetX, H); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
    }
    ctx.restore();
  }
  
  function updateConeBeam(dt) {
    const cfg = boss.geo.coneBeam;
    if (!boss.cone) {
      boss.coneTimer -= dt;
      if (boss.coneTimer <= 0) {
        const angle = Math.atan2(ship.y - boss.y, ship.x - boss.x);
        boss.cone = { angle, state: 'telegraph', t: 0 };
      }
      return;
    }
    boss.cone.t += dt;
    if (boss.cone.state === 'telegraph' && boss.cone.t >= cfg.telegraphMs[boss.phase - 1] / 1000) {
      boss.cone.state = 'active';
      boss.cone.t = 0;
      screenShake(3, 0.25);
      logPickup('⚠ CONIC DISCHARGE');
    }
    if (boss.cone.state === 'active') {
      const halfAngle  = cfg.halfAngle[boss.phase - 1];
      const shipAngle  = Math.atan2(ship.y - boss.y, ship.x - boss.x);
      const insideCone = Math.abs(shipAngle - boss.cone.angle) < halfAngle;
      if (insideCone && ship.invincible <= 0 && invincibleTimer <= 0) {
        takeDamage(run.shieldMax * 0.5);
        ship.invincible = hitInvincDuration(1.2);
        spawnParticles(ship.x, ship.y, '#ffd700', 12);
      }
      if (boss.cone.t >= cfg.activeMs[boss.phase - 1] / 1000) {
        boss.cone = null;
        boss.coneTimer = cfg.cooldown[boss.phase - 1];
      }
    }
  }

  function drawConeBeam() {
    if (!boss || !boss.cone) return;
    const { angle, state, t } = boss.cone;
    const cfg       = boss.geo.coneBeam;
    const halfAngle = cfg.halfAngle[boss.phase - 1];
    const len   = Math.hypot(W, H) * 1.2;
    const leftX  = boss.x + Math.cos(angle - halfAngle) * len;
    const leftY  = boss.y + Math.sin(angle - halfAngle) * len;
    const rightX = boss.x + Math.cos(angle + halfAngle) * len;
    const rightY = boss.y + Math.sin(angle + halfAngle) * len;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(boss.x, boss.y);
    ctx.lineTo(leftX, leftY);
    ctx.lineTo(rightX, rightY);
    ctx.closePath();
    if (state === 'telegraph') {
      const p = Math.min(1, t / (cfg.telegraphMs[boss.phase - 1] / 1000));
      ctx.fillStyle = `rgba(255,215,0,${0.06 + 0.18 * p})`;
      ctx.fill();
      ctx.shadowColor = '#ffd700'; ctx.shadowBlur = 10;
      ctx.strokeStyle = `rgba(255,215,0,${0.5 + 0.4 * p})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(boss.x, boss.y); ctx.lineTo(leftX, leftY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(boss.x, boss.y); ctx.lineTo(rightX, rightY); ctx.stroke();
    } else {
      const p = 1 - Math.min(1, t / (cfg.activeMs[boss.phase - 1] / 1000));
      ctx.fillStyle = `rgba(255,215,0,${0.35 + 0.2 * Math.max(0, p)})`;
      ctx.fill();
      ctx.shadowColor = '#ffd700'; ctx.shadowBlur = 20;
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(boss.x, boss.y); ctx.lineTo(leftX, leftY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(boss.x, boss.y); ctx.lineTo(rightX, rightY); ctx.stroke();
    }
    ctx.restore();
  }
  
  const ZODIAC_SYMBOLS = ['\u2648','\u2649','\u264a','\u264b','\u264c','\u264d',
                           '\u264e','\u264f','\u2650','\u2651','\u2652','\u2653'];
  const ZODIAC_VARSEL   = '\uFE0E'; // requests text glyphs because those emoji look so dUMB

  function wheelCenter(side) {
    return { x: side === 'left' ? W * 0.18 : W * 0.82, y: -60 };
  }

  function wheelBandRadii(cfg, phase) {
    const half = cfg.bandHalf[phase - 1];
    const D = ship.y - wheelCenter('left').y;
    return { R1: D - half, R2: D + half, D };
  }

  function wheelOuterCapXRange(center, R2, D) {
    const distSq = R2 * R2 - D * D;
    if (distSq <= 0) return null;
    const half = Math.sqrt(distSq);
    return { lo: center.x - half, hi: center.x + half };
  }

  function wheelXAtRowForAngle(angleDeg, center, D) {
    const rad = angleDeg * Math.PI / 180;
    return center.x + D * Math.tan(rad);
  }

  function wheelLiveRangeForAngle(cfg, side, phase, angleDeg) {
    const center = wheelCenter(side);
    const { R2, D } = wheelBandRadii(cfg, phase);
    const cap = wheelOuterCapXRange(center, R2, D);
    if (!cap) return null;
    const half = cfg.beamHalfDeg[phase - 1];
    const xL = wheelXAtRowForAngle(angleDeg - half, center, D);
    const xR = wheelXAtRowForAngle(angleDeg + half, center, D);
    const lo = Math.max(Math.min(xL, xR), cap.lo);
    const hi = Math.min(Math.max(xL, xR), cap.hi);
    if (lo >= hi) return null;
    return { lo, hi };
  }

  function wheelCurrentAngle(cfg, wheel, phase) {
    if (wheel.state === 'telegraph') return cfg.startAngle;
    const p = Math.min(1, wheel.t / (cfg.sweepMs[phase - 1] / 1000));
    return cfg.startAngle + (cfg.endAngle - cfg.startAngle) * p;
  }

  function updateZodiacWheel(dt) {
    const cfg = boss.geo.zodiacWheel;
    if (!boss.wheel) {
      boss.wheelTimer -= dt;
      if (boss.wheelTimer <= 0) {
        let side = Math.random() < 0.5 ? 'left' : 'right';
        if (side === boss.lastWheelSide) side = side === 'left' ? 'right' : 'left';
        boss.lastWheelSide = side;
        boss.wheel = {
          side,
          signStart: Math.floor(Math.random() * 12),
          state: 'telegraph',
          t: 0,
        };
      }
      return;
    }
    boss.wheel.t += dt;
    if (boss.wheel.state === 'telegraph' && boss.wheel.t >= cfg.telegraphMs[boss.phase - 1] / 1000) {
      boss.wheel.state = 'sweeping';
      boss.wheel.t = 0;
    }
    if (boss.wheel.state === 'sweeping') {
      const angle = wheelCurrentAngle(cfg, boss.wheel, boss.phase);
      const live  = wheelLiveRangeForAngle(cfg, boss.wheel.side, boss.phase, angle);
      if (live && ship.x > live.lo && ship.x < live.hi && ship.invincible <= 0 && invincibleTimer <= 0) {
        takeDamage(run.shieldMax * 0.5);
        ship.invincible = hitInvincDuration(1.2);
        spawnParticles(ship.x, ship.y, '#a855f7', 10);
      }
      if (boss.wheel.t >= cfg.sweepMs[boss.phase - 1] / 1000) {
        boss.wheel = null;
        boss.wheelTimer = cfg.cooldownMs[boss.phase - 1] / 1000;
      }
    }
  }

  function drawZodiacWheel() {
    if (!boss || !boss.wheel) return;
    const cfg    = boss.geo.zodiacWheel;
    const wheel  = boss.wheel;
    const center = wheelCenter(wheel.side);
    const { R1, R2 } = wheelBandRadii(cfg, boss.phase);

    ctx.save();
    ctx.strokeStyle = 'rgba(168,85,247,0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(center.x, center.y, R2, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(center.x, center.y, R1, 0, Math.PI * 2); ctx.stroke();

    cfg.spokeAngles.forEach(a => {
      const rad = a * Math.PI / 180;
      const x1 = center.x + R1 * Math.sin(rad), y1 = center.y + R1 * Math.cos(rad);
      const x2 = center.x + R2 * Math.sin(rad), y2 = center.y + R2 * Math.cos(rad);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(168,85,247,0.35)';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    const midR = (R1 + R2) / 2;
    for (let i = 0; i < cfg.spokeAngles.length - 1; i++) {
      const midAngle = (cfg.spokeAngles[i] + cfg.spokeAngles[i + 1]) / 2;
      const rad = midAngle * Math.PI / 180;
      const sx = center.x + midR * Math.sin(rad), sy = center.y + midR * Math.cos(rad);
      if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) continue;
      const symbol = ZODIAC_SYMBOLS[(wheel.signStart + i) % 12] + ZODIAC_VARSEL;
      ctx.save();
      ctx.font = '17px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(symbol, sx, sy);
      ctx.restore();
    }
    ctx.restore();

    const angle = wheelCurrentAngle(cfg, wheel, boss.phase);
    const rad = angle * Math.PI / 180;
    const x1 = center.x + R1 * Math.sin(rad), y1 = center.y + R1 * Math.cos(rad);
    const x2 = center.x + R2 * Math.sin(rad), y2 = center.y + R2 * Math.cos(rad);
    ctx.save();
    const glowing = wheel.state === 'sweeping';
    ctx.strokeStyle = glowing ? '#ff2020' : '#ff9620';
    ctx.shadowColor  = glowing ? '#ff2020' : '#ff9620';
    ctx.shadowBlur   = glowing ? 16 : 6;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.restore();
  }
  
  function spawnMobiusNodes() {
    const cfg = boss.geo.orbitNodes;
    const count = cfg.count[boss.phase - 1];
    for (let i = 0; i < count; i++) {
      const baseX = boss.x + (Math.random() - 0.5) * 140;
      const baseY = boss.y + 30 + Math.random() * 40; // stays up near the boss, far from ship.y
      mobiusNodes.push({
        baseX, baseY, x: baseX, y: baseY,
        wobbleSeed: Math.random() * Math.PI * 2,
        releaseTimer: cfg.releaseMs[boss.phase - 1] / 1000,
      });
    }
  }

  function updateMobiusNodes(dt) {
    const cfg = boss.geo.orbitNodes;
    mobiusNodes = mobiusNodes.filter(node => {
      const t = bossT + node.wobbleSeed;
      const A = 14; // figure-eight (lemniscate) wobble radius — small, stays "in place"
      node.x = node.baseX + A * Math.sin(t * 1.3);
      node.y = node.baseY + A * Math.sin(t * 1.3) * Math.cos(t * 1.3);

      // Shoot to pop — same pattern as powerup pods. Popping cancels the burst outright.
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        if (b.enemy) continue;
        if (dist(b.x, b.y, node.x, node.y) < 15) {
          bullets.splice(i, 1);
          spawnParticles(node.x, node.y, '#00f5ff', 10);
          return false;
        }
      }

      node.releaseTimer -= dt;
      if (node.releaseTimer <= 0) {
        fireWiggleBurst(node.x, node.y, cfg.burstN[boss.phase - 1], {
          amp: cfg.wiggleAmp[boss.phase - 1],
          freq: cfg.wiggleFreq[boss.phase - 1],
        });
        spawnParticles(node.x, node.y, '#ff2d78', 10);
        return false;
      }
      return true;
    });
  }

  function drawMobiusNodes() {
    mobiusNodes.forEach(node => {
      const pct = Math.max(0, node.releaseTimer / (boss.geo.orbitNodes.releaseMs[boss.phase - 1] / 1000));
      const color = pct > 0.4 ? '#00f5ff' : '#ff2d78';
      ctx.save();
      ctx.translate(node.x, node.y);
      ctx.shadowColor = color; ctx.shadowBlur = 10;
      ctx.strokeStyle = color; ctx.lineWidth = 1.5;
      // small infinity glyph — the node itself is a tiny möbius loop
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let i = 0; i <= 40; i++) {
        const tt = (i / 40) * Math.PI * 2;
        const lx = 9 * Math.sin(tt), ly = 5 * Math.sin(tt) * Math.cos(tt);
        if (i === 0) ctx.moveTo(lx, ly); else ctx.lineTo(lx, ly);
      }
      ctx.stroke();
      // depletion ring — shrinks as the release timer counts down
      ctx.beginPath();
      ctx.arc(0, 0, 13, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct);
      ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.globalAlpha = 0.6;
      ctx.stroke();
      ctx.restore();
    });
  }

  
  // SUB-ENEMIES
  
  const SUB_TYPES = [
    // Orbitals
    {
      type: 'orbital', r: 8, hp: 2, color: '#e8600a',
      init(e) {
        e.orbitAngle = Math.random() * Math.PI * 2;
        e.orbitR     = 80 + Math.random() * 40;
        e.orbitSpd   = (Math.random() < 0.5 ? 1 : -1) * (0.8 + Math.random() * 0.6);
      },
      update(e, dt) {
        e.orbitAngle += e.orbitSpd * dt;
        e.x = boss.x + Math.cos(e.orbitAngle) * e.orbitR;
        e.y = boss.y + Math.sin(e.orbitAngle) * e.orbitR;
      },
    },
    // Divers
    {
      type: 'diver', r: 9, hp: 1, color: '#a855f7',
      init(e) { e.vy = 80 + Math.random() * 60; },
      update(e, dt) {
        e.y += e.vy * dt;
        e.x += (ship.x - e.x) * 0.4 * dt;
      },
    },
  ];

  function spawnSubEnemy() {
    const tmpl = SUB_TYPES[Math.floor(Math.random() * SUB_TYPES.length)];
    const e = {
      type:        tmpl.type,
      r:           tmpl.r,
      hp:          tmpl.hp,
      color:       tmpl.color,
      update:      tmpl.update,
      x:           boss.x + (Math.random() - 0.5) * 60,
      y:           boss.y,
      shootTimer:  2 + Math.random() * 2,
    };
    tmpl.init(e);
    subEnemies.push(e);
  }

  // Bringing the whole squad
  function spawnSquadron(offsets) {
    offsets.forEach(([dx, dy]) => {
      const tmpl = SUB_TYPES[Math.floor(Math.random() * SUB_TYPES.length)];
      const e = {
        type:        tmpl.type,
        r:           tmpl.r,
        hp:          tmpl.hp,
        color:       tmpl.color,
        update:      tmpl.update,
        x:           boss.x + dx,
        y:           boss.y + dy,
        shootTimer:  2 + Math.random() * 2,
      };
      tmpl.init(e);
      subEnemies.push(e);
    });
  }

  
  // PHASE TRANSITION
  
  function checkPhase() {
    const pct = boss.hp / BOSS_MAX_HP;
    let newPhase = 1;
    if      (pct < 0.30) newPhase = 3;
    else if (pct < 0.65) newPhase = 2;

    if (newPhase !== boss.phase) {
      boss.phase = newPhase;
      // Gotta go fast
      Object.keys(boss.rotSpeed).forEach(k => boss.rotSpeed[k] *= 1.6);
      const flash = document.getElementById('phase-flash');
      flash.style.opacity = '1';
      setTimeout(() => flash.style.opacity = '0', 200);
      // HUD
      document.getElementById('boss-phase').textContent = PHASE_NAMES[boss.phase - 1];
      document.getElementById('boss-phase').style.color = boss.phaseColors[boss.phase - 1];
      // Particles & Floating Text
      spawnParticles(boss.x, boss.y, boss.phaseColors[boss.phase - 1], 30);
      spawnFloatingText(boss.x, boss.y - 60, PHASE_NAMES[boss.phase - 1], boss.phaseColors[boss.phase - 1]);
      logPickup('⚠ ' + PHASE_NAMES[boss.phase - 1]);
      // Phase III Extra Adds
      if (boss.phase === 3) {
        for (let i = 0; i < 4; i++) spawnSubEnemy();
      }
    }
  }

  
  // Boss Attacks
  const ELEMENT_ATTACKS = {
    Be: () => { bossFireAimed(0); bossFireAimed(0.3); },
    Li: () => { bossFireRing(6); },
    Ti: () => { bossFireAimed(0.5); bossFireAimed(-0.5); },
    N:  () => {
      bossFireAimed(0);
      setTimeout(() => bossFireAimed(0.15),  120);
      setTimeout(() => bossFireAimed(-0.15), 240);
    },
    Si: () => { bossFireRing(12); },
    Mg: () => {
      for (let i = 0; i < 3; i++) {
        mines.push({
          x:        boss.x + (Math.random() - 0.5) * W * 0.6,
          y:        boss.y + 40,
          vy:       30 + Math.random() * 20,
          r:        11, t: 0, drifting: false,
        });
      }
      logPickup('⚠ MAGNESIUM — MINES DEPLOYED');
    },
    K:  () => { bossFireSpiral(16, bossT * 0.5); },
    C:  () => {
      bossFireSpiral(8, 0);
      bossFireSpiral(8, Math.PI / 8);
    },
  };
  const ELEMENT_KEYS = Object.keys(ELEMENT_ATTACKS);

  // Per-boss attack reskin
  function triggerElementAttack() {
    if (boss.geo.attackPool) {
      const pool    = boss.geo.attackPool[boss.phase];
      const choices = pool.length > 1 ? pool.filter(e => e.key !== boss.lastAttackKey) : pool;
      const entry   = choices[Math.floor(Math.random() * choices.length)];
      boss.lastAttackKey = entry.key;
      entry.fn();
      spawnFloatingText(boss.x, boss.y - 30, entry.label, '#ffffff');
      logPickup(entry.sym + ' ' + entry.label + ' SEQUENCE');
      return;
    }
    const pool = boss.phase === 1 ? ['Be', 'Li', 'N']
               : boss.phase === 2 ? ['Ti', 'Si', 'Mg', 'K']
               : ELEMENT_KEYS;
    const choices = pool.length > 1 ? pool.filter(k => k !== boss.lastAttackKey) : pool;
    const key = choices[Math.floor(Math.random() * choices.length)];
    boss.lastAttackKey = key;
    ELEMENT_ATTACKS[key]();
    spawnFloatingText(boss.x, boss.y - 30, key, '#ffffff');
    logPickup(STRINGS.items[key].sym + ' SEQUENCE');
  }

  function init(gameCanvas) {
    canvas = gameCanvas;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('touchstart', onTouchStart, { passive:false });
    canvas.addEventListener('touchmove',  onTouchMove,  { passive:false });
    canvas.addEventListener('touchend',   onTouchEnd,   { passive:false });
    canvas.addEventListener('mousedown',  onMouseDown);
    canvas.addEventListener('mousemove',  onMouseMove);
    canvas.addEventListener('mouseup',    onMouseUp);
  }

  let mouseDown = false;
  let aimAngle = 0;

  function updateAimFromX(clientX) {
    const rect = canvas.getBoundingClientRect();
    const relX = clientX - rect.left;
    const t = Math.max(0, Math.min(1, relX / W)); 
    const MAX_ANGLE = 55 * Math.PI / 180;         
    aimAngle = (t - 0.5) * 2 * MAX_ANGLE;          
  }

  function onTouchStart(e) {
    e.preventDefault(); AudioManager.resume();
    touchX = e.touches[0].clientX;
    updateAimFromX(e.touches[0].clientX);
  }
  function onTouchMove(e) {
    e.preventDefault();
    touchX = e.touches[0].clientX;
    updateAimFromX(e.touches[0].clientX);
  }
  function onTouchEnd(e)  { touchX = -1; }
  function onMouseDown(e) { mouseDown = true; AudioManager.resume(); touchX = e.clientX; updateAimFromX(e.clientX); }
  function onMouseMove(e) { updateAimFromX(e.clientX); if (mouseDown) touchX = e.clientX; }
  function onMouseUp(e)   { mouseDown = false; touchX = -1; }

  function resize() {
    if (!canvas) return;
    const dpr  = window.devicePixelRatio || 1;
    const maxW = Math.min(window.innerWidth, 430);
    const maxH = window.innerHeight;
    canvas.width  = maxW * dpr;
    canvas.height = maxH * dpr;
    canvas.style.width  = maxW + 'px';
    canvas.style.height = maxH + 'px';
    W = maxW; H = maxH;
	ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    canvas.style.marginLeft = ((window.innerWidth - maxW) / 2) + 'px';
  if (run) { ship.x = W / 2; ship.y = H - 130; ship.targetX = ship.x; }
}

  function startLevel() {
    state = 'playing';
    apoActive = false;
    // Defensive restoration in case a previous run achieved Apotheosis
    document.getElementById('hud').style.display = '';
    document.getElementById('radio-tuner').style.display = '';
    document.getElementById('powerup-bar').style.display = '';
    document.getElementById('pickup-log').style.display = '';
    document.getElementById('boss-phase').style.display = '';
    const apoHud = document.getElementById('apo-hud');
    const apoAttacks = document.getElementById('apo-attacks');
    if (apoHud) apoHud.classList.remove('active');
    if (apoAttacks) apoAttacks.classList.remove('active');
    apoPilots = [];
    if (run && run.level === 1) { bossActive = false; bossDefeated = false; boss = null; }
    bullets = []; enemies = []; mines = []; particles = []; drops = []; pods = []; mobiusNodes = [];
    podSpawnTimer = 8 + Math.random() * 6;
    ammoRefillTimer = AMMO_REFILL_INTERVAL;
    ship.x = ship.targetX = W / 2;
    ship.y = H - 130;
    ship.invincible = 0;
    shootTimer = 0;
    waveOffset = 0;
    waveT = 0;
    levelTimer = 0;
    spawnTimer = 0;
    enemiesSpawned = 0;
    endSweepFired = false;
    invincibleTimer = 0;
    piercingBullets = false;
    timeDilationTimer = 0;
    noAmmoCostTimer = 0;
    shakeIntensity = 0;
    shakeDuration  = 0;
    sweepCountdown = 7;
    if (run) {
      run.warpStabTriggered = false;
      run.fluxTriggered = false;
      run.octaneTimer = 0;
      run.gammiteActiveTimer = 0;
      run.bulletType = 'standard';
      applyUpgradePassive(run);
    }
    maxEnemies = 24 + run.level * 8;
    levelDuration = 45 + run.level * 4;
    updateHUD();
    document.getElementById('powerup-bar').style.pointerEvents = 'all';
    document.getElementById('overlay-death').classList.remove('active');
    document.getElementById('overlay-clear').classList.remove('active');
    lastTime = performance.now();
    animId = requestAnimationFrame(loop);
  }

  function startBoss() {
    state        = 'playing';
    bossActive   = true;
    bossDefeated = false;
    bossT        = 0;
    boss         = makeBoss();
    boss.x       = W / 2;
    boss.y       = H * 0.28;
	document.getElementById('powerup-bar').style.pointerEvents = 'all';

    // Clear the field
    bullets    = [];
    enemies    = [];
    subEnemies = [];
    mines      = [];
    particles  = [];
    drops      = [];
    pods       = [];
    elementAttackTimer = ELEMENT_ATTACK_INTERVAL[0];

    // Ship
    ship.x = ship.targetX = W / 2;
    ship.y = H - 130;
    ship.invincible = 0;
	endSweepFired = false;
    shootTimer = 0;
	ammoRefillTimer = AMMO_REFILL_INTERVAL;

    // Reset per-level timers
    invincibleTimer   = 0;
    piercingBullets   = false;
	run.bulletType = 'standard';
    timeDilationTimer = 0;
    noAmmoCostTimer   = 0;
	shakeIntensity = 0;
    shakeDuration  = 0;

    // Boss HUD 
    document.getElementById('boss-hud').classList.add('active');
    document.getElementById('boss-name').textContent = getAsterismName(boss.geo.id);
    document.getElementById('boss-bar').style.width = '100%';
    document.getElementById('boss-phase').textContent = PHASE_NAMES[0];
    document.getElementById('boss-phase').style.color = boss.phaseColors[0];

    // Clear anything else
    document.getElementById('overlay-death').classList.remove('active');
    document.getElementById('overlay-clear').classList.remove('active');
    document.getElementById('overlay-boss-clear').classList.remove('active');

    applyUpgradePassive(run);
    updateHUD();
    if (animId) cancelAnimationFrame(animId);
    lastTime = performance.now();
    animId = requestAnimationFrame(loop);
  }

  
  // Eagle2 lied to you
  
  function startApotheosis() {
    state      = 'apo-intro';
    apoActive  = true;
    bossActive = false;
    bossDefeated = false;
    bossT      = 0;
    apoSurvivalTime = 0; 
    apoPrevTrackIdx = AudioManager.getCurrentIdx();
    AudioManager.playTrack(APOTHEOSIS_TRACK_IDX);

    const geo = getBossGeometryForUpgrade(run.upgrade) || bossGeometries[0];
    boss = {
      geo,
      hp: BOSS_MAX_HP, hpMax: BOSS_MAX_HP,
      phase: 1,
      x: W / 2, y: H * 0.32,
      scale: 0,
      rot: geo.makeRot(),
      rotSpeed: geo.makeRotSpeed(),
      phaseColors: geo.phaseColors,
      shootTimer: 0,
      hitFlash: 0,
      alive: true,
      defending: false,
      defendTimer: 0, 
      invincible: 0, 
      attackCooldowns: {}, 
    };

    // Clear the field
    bullets = []; enemies = []; subEnemies = []; mines = []; particles = []; drops = []; pods = [];
    apoPilots = []; apoSpawnTimer = 0;

    // HUD off
    document.getElementById('hud').style.display = 'none';
    document.getElementById('radio-tuner').style.display = 'none';
    document.getElementById('powerup-bar').style.display = 'none';
    document.getElementById('pickup-log').style.display = 'none';

    // New HUD
    const bossHud = document.getElementById('boss-hud');
    bossHud.classList.add('active');
    bossHud.style.opacity = '0';
    document.getElementById('boss-name').textContent = getAsterismName(geo.id);
    document.getElementById('boss-bar').style.width = '100%';
    document.getElementById('boss-phase').style.display = 'none';

    const apoHud     = document.getElementById('apo-hud');
    const apoAttacks = document.getElementById('apo-attacks');
    if (apoHud)     { apoHud.classList.add('active'); apoHud.style.opacity = '0'; }
    if (apoAttacks) { apoAttacks.classList.add('active'); apoAttacks.style.opacity = '0'; }
    renderApoAttackSlots();
    updateApoKillsDisplay();

    const introText = document.getElementById('apo-intro-text');
    if (introText) { introText.textContent = ''; introText.style.opacity = '0'; }

    apoWaveformAlpha = 0;
    apoIntroStep     = 'pause';
    apoIntroTimer    = 0;
    apoIntroLineIdx  = -1;

    document.getElementById('overlay-death').classList.remove('active');
    document.getElementById('overlay-clear').classList.remove('active');
    document.getElementById('overlay-boss-clear').classList.remove('active');
    const endOverlay = document.getElementById('overlay-apotheosis-end');
    if (endOverlay) endOverlay.classList.remove('active');

    if (animId) cancelAnimationFrame(animId);
    lastTime = performance.now();
    animId = requestAnimationFrame(loop);
  }

  // Intro
  function updateApoIntro(dt) {
    bossT += dt;
    boss.geo.updateRot(boss.rot, boss.rotSpeed, boss.phase);
    apoIntroTimer += dt;

    if (apoIntroStep === 'pause') {
      if (apoIntroTimer >= APO_INTRO_PAUSE_S) {
        apoIntroStep = 'lines';
        apoIntroTimer = 0;
        apoIntroLineIdx = 0;
        showApoIntroLine(0);
      }
      return;
    }

    if (apoIntroStep === 'lines') {
      const lines = STRINGS.apotheosis.intro;
      const totalDuration = lines.length * APO_INTRO_LINE_S;
      boss.scale = APO_BOSS_SCALE * Math.min(1, apoIntroTimer / totalDuration);
      const targetIdx = Math.min(lines.length - 1, Math.floor(apoIntroTimer / APO_INTRO_LINE_S));
      if (targetIdx !== apoIntroLineIdx) {
        apoIntroLineIdx = targetIdx;
        showApoIntroLine(targetIdx);
      }
      if (apoIntroTimer >= totalDuration) {
        apoIntroStep = 'hold';
        apoIntroTimer = 0;
        boss.scale = APO_BOSS_SCALE;
        hideApoIntroText();
      }
      return;
    }

    if (apoIntroStep === 'hold') {
      if (apoIntroTimer >= APO_INTRO_HOLD_S) {
        apoIntroStep = 'reveal';
        apoIntroTimer = 0;
        beginApoReveal();
      }
      return;
    }

    if (apoIntroStep === 'reveal') {
      const t = Math.min(1, apoIntroTimer / APO_INTRO_REVEAL_S);
      apoWaveformAlpha = t;
      if (apoIntroTimer >= APO_INTRO_REVEAL_S) {
        apoWaveformAlpha = 1;
        apoIntroStep = null;
        state = 'apo-fight';
        beginApoFight();
      }
    }
  }

  function showApoIntroLine(idx) {
    const el = document.getElementById('apo-intro-text');
    if (!el) return;
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = STRINGS.apotheosis.intro[idx] || '';
      requestAnimationFrame(() => { el.style.opacity = '1'; });
    }, 180); // brief cross-fade gap between lines
  }
  function hideApoIntroText() {
    const el = document.getElementById('apo-intro-text');
    if (el) el.style.opacity = '0';
  }
  function beginApoReveal() {
    const bossHud    = document.getElementById('boss-hud');
    const apoHud     = document.getElementById('apo-hud');
    const apoAttacks = document.getElementById('apo-attacks');
    if (bossHud)    bossHud.style.opacity = '1';
    if (apoHud)     apoHud.style.opacity = '1';
    if (apoAttacks) apoAttacks.style.opacity = '1';
  }

  function updateApoFight(dt) {
    bossT += dt;
    apoSurvivalTime += dt;
    boss.geo.updateRot(boss.rot, boss.rotSpeed, boss.phase);

    // Defend & Heal
    if (boss.invincible > 0) {
      boss.invincible -= dt;
      if (boss.invincible <= 0) {
        boss.invincible = 0;
        boss.defending = false;
        boss.defendTimer = APO_DEFEND_COOLDOWN;
      }
    } else if (boss.defendTimer > 0) {
      boss.defendTimer = Math.max(0, boss.defendTimer - dt);
    }

    // Cooldowns
    for (const key in boss.attackCooldowns) {
      if (boss.attackCooldowns[key] > 0) {
        boss.attackCooldowns[key] = Math.max(0, boss.attackCooldowns[key] - dt);
      }
    }
    updateApoAttackSlotsUI();

    if (!boss.defending) {
      boss.shootTimer -= dt;
      if (boss.shootTimer <= 0) {
        fireApoBullet();
        const bossShootSpeed = BOSS_BASE_SHOOT_SPEED + run.kills * KILL_SHOOT_SPEED_RATE;
        boss.shootTimer = Math.max(1 / bossShootSpeed, MIN_FRAME_INTERVAL);
      }
    }

    // ALADt Waves
    apoSpawnTimer -= dt;
    if (apoPilots.length < WAVE_TUNING.spawnMinimum.threshold) {
      spawnPilots(WAVE_TUNING.spawnMinimum.refillTo - apoPilots.length);
      apoSpawnTimer = apoSpawnDelay();
    } else if (apoSpawnTimer <= 0) {
      spawnPilots(apoShipsPerSpawn());
      apoSpawnTimer = apoSpawnDelay();
    }
    updatePilots(dt);

    bullets = bullets.filter(b => {
      b.x += (b.vx || 0) * dt;
      b.y += (b.vy !== undefined ? b.vy : (b.speed || 0)) * dt;
      if (b.x < -20 || b.x > W + 20 || b.y < -20 || b.y > H + 20) return false;

      if (b.source === 'pilot') {
        if (boss.defending) return true; // invincible — bullet passes through
        const hitR = boss.scale * APO_BOSS_HIT_FACTOR;
        const dx = b.x - boss.x, dy = b.y - boss.y;
        if (dx * dx + dy * dy < hitR * hitR) {
          boss.hp = Math.max(0, boss.hp - (b.dmg || 1));
          boss.hitFlash = 0.15;
          updateBossHPBar();
          return false;
        }
      } else {
        for (const p of apoPilots) {
          const dx = b.x - p.x, dy = b.y - p.y;
          if (dx * dx + dy * dy < PILOT_HIT_RADIUS * PILOT_HIT_RADIUS) {
            p.hp -= (b.dmg || 1);
            p.hitFlash = 0.12;
            if (p.hp <= 0) killPilot(p);
            return false;
          }
        }
      }
      return true;
    });
    apoPilots = apoPilots.filter(p => p.hp > 0);

    updateApoKillsDisplay();

    if (boss.hp <= 0) onApotheosisDeath();
  }

  function fireApoBullet() {
    const bx = boss.x, by = boss.y + boss.scale * 0.6;
    const adx = Math.sin(aimAngle);
    const ady = Math.cos(aimAngle);
    const spd = 560;
    bullets.push({ x:bx, y:by, speed:spd, vx:adx*spd, vy:ady*spd, dmg:1, enemy:true, source:'boss', color:boss.phaseColors[boss.phase - 1] });
  }

  function updateApoKillsDisplay() {
    const el = document.getElementById('apo-kills-val');
    if (el) el.textContent = String(run.kills || 0);
  }

  function updateBossHPBar() {
    const bar = document.getElementById('boss-bar');
    if (bar) bar.style.width = Math.max(0, (boss.hp / boss.hpMax) * 100) + '%';
  }

  function weightedPick(weights) {
    const entries = Object.entries(weights);
    const total = entries.reduce((s, [, w]) => s + w, 0);
    let r = Math.random() * total;
    for (const [k, w] of entries) {
      r -= w;
      if (r <= 0) return k;
    }
    return entries[entries.length - 1][0];
  }

  function apoSpawnDelay() {
    const d = WAVE_TUNING.spawnDelay.base + run.kills * WAVE_TUNING.spawnDelay.perKill;
    return Math.max(WAVE_TUNING.spawnDelay.min, d);
  }
  function apoShipsPerSpawn() {
    return Math.max(1, Math.round(WAVE_TUNING.shipsPerSpawn.base + run.kills * WAVE_TUNING.shipsPerSpawn.perKill));
  }

  function spawnPilots(n) {
    for (let i = 0; i < n; i++) {
      const rare = Math.random() < PILOT_RARE_CHANCE;
      apoPilots.push({
        x: 30 + Math.random() * (W - 60),
        y: -20 - Math.random() * 60,
        hoverY: H * (0.5 + Math.random() * 0.22),
        vx: (Math.random() - 0.5) * 40,
        hp: rare ? PILOT_HP * 2 : PILOT_HP,
        hpMax: rare ? PILOT_HP * 2 : PILOT_HP,
        shootTimer: 1 + Math.random() * 1.5,
        rare,
        upgradeKey: rare ? UPGRADE_KEYS[Math.floor(Math.random() * UPGRADE_KEYS.length)] : null,
        hitFlash: 0,
      });
    }
  }

  function firePilotBullet(p) {
    const spd = 260; 
    bullets.push({ x:p.x, y:p.y - 14, vx:0, vy:-spd, speed:spd, dmg:1, enemy:true, source:'pilot', r:3, color: p.rare ? '#ffd700' : '#ff2d78' });
  }

  function updatePilots(dt) {
    apoPilots.forEach(p => {
      if (p.y < p.hoverY) {
        p.y += 60 * dt;
      } else {
        p.x += p.vx * dt;
        if (p.x < 24 || p.x > W - 24) p.vx *= -1;
      }
      if (p.hitFlash > 0) p.hitFlash -= dt;
      if (p.y >= p.hoverY - 5) {
        p.shootTimer -= dt;
        if (p.shootTimer <= 0) {
          firePilotBullet(p);
          p.shootTimer = 1.6 + Math.random() * 1.2;
        }
      }
    });
  }

  function drawPilots() {
    apoPilots.forEach(p => {
      const blink = p.hitFlash > 0 && Math.sin(Date.now() * 0.05) > 0;
      if (blink) return;
      drawShipAt(p.x, p.y, 0, p.upgradeKey);
    });
  }

  // Asterism Pickups
  function pilotDrop(x, y) {
    if (Math.random() >= PILOT_DROP.chance) return;
    const tier = weightedPick(PILOT_DROP.tierWeights);
    const pool = tier === 'element'  ? Object.keys(STRINGS.items)
               : tier === 'compound' ? Object.keys(COMPOUND_VARIANTS)
               :                       Object.keys(ALLOY_VARIANTS);
    const key  = pool[Math.floor(Math.random() * pool.length)];
    const name = (tier === 'element' ? STRINGS.items[key] : STRINGS.powerups[key]).name;

    boss.hp = Math.min(boss.hpMax, boss.hp + boss.hpMax * PILOT_DROP.healPct[tier]);
    updateBossHPBar();
    spawnFloatingText(x, y, `${name.toUpperCase()} ABSORBED INTO SPACETIME`, '#ffffff');
  }

  function killPilot(p) {
    run.kills++;
    const pts = p.rare ? PILOT_RARE_POINTS : PILOT_POINTS;
    run.score += pts;
    run.credits += Math.floor(pts * 0.02);
    spawnFloatingText(p.x, p.y, '+' + pts, p.rare ? '#ffd700' : '#ff2d78');
    spawnParticles(p.x, p.y, p.rare ? '#ffd700' : '#ff2d78', 10);
    updateScoreHUD();
    pilotDrop(p.x, p.y);
  }

  // Attack Slots
  function renderApoAttackSlots() {
    const el = document.getElementById('apo-attacks');
    if (!el) return;
    el.innerHTML = '';
    const pool = (boss.geo.attackPool && boss.geo.attackPool[boss.phase]) || [];
    pool.forEach(atk => {
      const slot = document.createElement('div');
      slot.className = 'apo-slot';
      slot.dataset.key = atk.key;
      slot.innerHTML = `<span class="apo-slot-sym">${atk.sym}</span><span class="apo-slot-name">${atk.label}</span>`;
      el.appendChild(slot);
    });
    // Defend & Heal
    const defendSlot = document.createElement('div');
    defendSlot.className = 'apo-slot apo-slot-defend';
    defendSlot.dataset.key = '_DEFEND';
    defendSlot.innerHTML = `<span class="apo-slot-sym">\u271b</span><span class="apo-slot-name">Defend</span>`;
    el.appendChild(defendSlot);
  }

  function updateApoAttackSlotsUI() {
    const el = document.getElementById('apo-attacks');
    if (!el) return;
    el.querySelectorAll('.apo-slot').forEach(slot => {
      const key = slot.dataset.key;
      if (key === '_DEFEND') {
        const onCooldown = boss.defending || boss.defendTimer > 0;
        slot.classList.toggle('on-cooldown', onCooldown);
      } else {
        const remaining = boss.attackCooldowns[key] || 0;
        slot.classList.toggle('on-cooldown', remaining > 0);
      }
    });
  }

  function triggerApoAttack(key) {
    if (!apoActive || state !== 'apo-fight') return;
    if (key === '_DEFEND') {
      if (boss.defending || boss.defendTimer > 0) return;
      boss.defending = true;
      boss.invincible = APO_DEFEND_INVINCIBLE_S;
      const missing = boss.hpMax - boss.hp;
      boss.hp = Math.min(boss.hpMax, boss.hp + missing * APO_DEFEND_HEAL_PCT);
      updateBossHPBar();
      return;
    }
    if ((boss.attackCooldowns[key] || 0) > 0) return;
    const pool = (boss.geo.attackPool && boss.geo.attackPool[boss.phase]) || [];
    const atk = pool.find(a => a.key === key);
    if (!atk) return;
    atk.fn();
    boss.attackCooldowns[key] = getAttackCooldown(boss.geo.id, key);
  }

  // Ending
  function endCycle() {
    save.permStats  = { shootSpeed:0, ammoMax:0, shieldMax:0, ammoRefillRate:0 };
    save.upgrade    = null;
    save.bossRun    = 0;
    save.storyArchive = {};
    writeSave();
  }

  function onApotheosisDeath() {
    if (!apoActive) return;
    apoActive = false;
    state = 'dead';
    apoPilots = []; bullets = [];
    if (run.score > save.highScore) save.highScore = run.score;
    endCycle();

    AudioManager.playTrack(apoPrevTrackIdx);

    document.getElementById('boss-hud').classList.remove('active');
    const apoHud = document.getElementById('apo-hud');
    const apoAttacks = document.getElementById('apo-attacks');
    if (apoHud) apoHud.classList.remove('active');
    if (apoAttacks) apoAttacks.classList.remove('active');

    const endOverlay = document.getElementById('overlay-apotheosis-end');
    if (endOverlay) {
      const outroEl = document.getElementById('apo-outro-text');
      if (outroEl) outroEl.textContent = STRINGS.apotheosis.outro || '';
      const killsEl = document.getElementById('apo-end-kills');
      if (killsEl) killsEl.textContent = `PILOTS DOWNED: ${run.kills || 0}`;
      const timeEl = document.getElementById('apo-end-time');
      if (timeEl) timeEl.textContent = `SURVIVAL TIME: ${formatApoTime(apoSurvivalTime)}`;
      endOverlay.classList.add('active');
    }
  }

  function formatApoTime(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${r < 10 ? '0' : ''}${r}`;
  }

  function loop(ts) {
    const dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;
    if (state === 'playing') {
      update(dt);
    } else if (state === 'apo-intro') {
      updateApoIntro(dt);
    } else if (state === 'apo-fight') {
      updateApoFight(dt);
    }
    render(dt);
    animId = requestAnimationFrame(loop);
  }

  function togglePause() {
    if (state === 'dead' || state === 'clear') return;
    if (state === 'playing') {
      state = 'paused';
      document.getElementById('overlay-pause').classList.add('active');
      document.getElementById('btn-pause').textContent = '⏯️';
    } else if (state === 'paused') {
      state = 'playing';
      lastTime = performance.now(); // reset to avoid dt spike after unpause
      document.getElementById('overlay-pause').classList.remove('active');
      document.getElementById('btn-pause').textContent = '⏸️';
    }
  }

  // UPDATE
  function update(dt) {
    levelTimer += dt;
    run.totalTime += dt;

    // Reactive Plating (Lithebryl)
    if (run.upgrade === 'LITHEBRYL' && run.shield < run.shieldMax) {
      run.shield = Math.min(run.shieldMax, run.shield + 0.5 * dt);
      updateShieldBar();
    }

    if (run.octaneTimer > 0) run.octaneTimer -= dt;
    if (run.gammiteActiveTimer > 0) run.gammiteActiveTimer -= dt;

    if (touchX >= 0) {
      const relX = touchX - (window.innerWidth - W) / 2;
      ship.targetX = Math.max(28, Math.min(W - 28, relX));
    }
    ship.x += (ship.targetX - ship.x) * 0.18;
    if (ship.invincible > 0) ship.invincible -= dt;
    if (invincibleTimer > 0) invincibleTimer = Math.max(0, invincibleTimer - dt);

    shootTimer -= dt;
    if (shootTimer <= 0 && run.ammo > 0 && !endSweepFired) {
      fireBullet();
      // Octane Atomizer (Nitrokalium)
      const speedMod = (run.upgrade === 'NITROKALIUM' && run.octaneTimer > 0) ? 1.6 : 1.0;
      shootTimer = (1 / (run.shootSpeed * speedMod));
      
      // Sync Capacitor (Gammite)
      if (noAmmoCostTimer <= 0 && run.gammiteActiveTimer <= 0) {
        run.ammo = Math.max(0, run.ammo - 1);
        updateAmmoBar();
        // Show RELOADING
        if (run.ammo === 0) {
          spawnFloatingText(W * 0.5, H - 160, 'RELOADING', '#ff2020');
        }
      }
    }

    // Spawn powerup pods
    podSpawnTimer -= dt;
    if (podSpawnTimer <= 0 && !endSweepFired) {
      spawnPod();
      podSpawnTimer = 18 + Math.random() * 12;
    }

    ammoRefillTimer -= dt;
    if (ammoRefillTimer <= 0) {
      ammoRefillTimer = AMMO_REFILL_INTERVAL;
      const refill = Math.min(run.ammoRefillRate * 10, run.ammoMax - run.ammo);
      if (refill > 0) {
        run.ammo += refill;
        updateAmmoBar();
        spawnFloatingText(W * 0.5, H - 160, '+ AMMO', '#00f5ff');
        
        // Sync Capacitor (Gammite)
        if (run.upgrade === 'GAMMITE') {
          run.gammiteActiveTimer = 5;
          logPickup('RELOAD SYNC');
        }
      }
    }

    // Spawn enemies / mines
    spawnTimer -= dt;
    if (spawnTimer <= 0 && enemiesSpawned < maxEnemies) {
      spawnEnemy();
      if (Math.random() < 0.25 + run.level * 0.04) spawnMine();
      spawnTimer = 1.6 - run.level * 0.08;  // L1=1.52s, L8=0.96s between spawns
      enemiesSpawned++;
    }

    // Ionic Deflector (Alkalium)
    bullets = bullets.filter(b => {
      if (b.enemy) return true;
      b.x += b.vx * dt;
      b.y += b.vy * dt;

      if (run.upgrade === 'ALKALIUM' && piercingBullets && !b.bounced) {
        if (b.x < 0 || b.x > W) {
          b.vx *= -1;
          b.x = Math.max(0, Math.min(W, b.x));
          b.bounced = true;
        }
        if (b.y < 0) {
          b.vy *= -1;
          b.y = 0;
          b.bounced = true;
        }
      }

      return b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
    });

    // Deltalite Trigger (Time Dilation)
    if (timeDilationTimer > 0) timeDilationTimer = Math.max(0, timeDilationTimer - dt);
    if (noAmmoCostTimer  > 0) noAmmoCostTimer  = Math.max(0, noAmmoCostTimer  - dt);
    const eDt = timeDilationTimer > 0 ? dt * 0.4 : dt;

    // Scroll waveform
    waveOffset = (waveOffset + eDt * 60 * (1 + run.level * 0.08)) % (H * 2);
    waveT += eDt;

    // Fission Core (Omegite)
    enemies = enemies.filter(e => {
      updateEnemy(e, eDt);
      
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        if (b.enemy) continue;
        if (dist(b.x, b.y, e.x, e.y) < e.r + 5) {
          e.hp -= b.dmg;
          if (!piercingBullets) bullets.splice(i, 1);
          spawnParticles(e.x, e.y, e.color, 4);
          if (e.hp <= 0) { killEnemy(e); return false; }
        }
      }

      // Ship collision
      if (dist(ship.x, ship.y, e.x, e.y) < e.r + 12) {
        if (run.upgrade === 'OMEGITE') {
          killEnemy(e);
          takeDamage(2);
          return false;
        } else if (ship.invincible <= 0 && invincibleTimer <= 0) {
          takeDamage(2);
          spawnParticles(ship.x, ship.y, '#d42b6a', 8);
          ship.invincible = hitInvincDuration(1.5); // Phase Fuselage (Titane)
          return false;
        }
      }
      return e.y < H + 60;
    });

    // Enemy bullets
    bullets = bullets.filter(b => {
      if (!b.enemy) return true;
      if (b.wiggle) {
        b.age += eDt;
        const fwd  = b.speed * b.age;
        const perp = b.amp * Math.sin(b.freq * b.age + b.wigglePhase);
        b.x = b.ox + Math.cos(b.angle) * fwd - Math.sin(b.angle) * perp;
        b.y = b.oy + Math.sin(b.angle) * fwd + Math.cos(b.angle) * perp;
      } else {
        b.x += (b.vx || 0) * eDt;
        b.y += (b.vy !== undefined ? b.vy : b.speed) * eDt;
      }
      if (ship.invincible <= 0 && invincibleTimer <= 0 && dist(b.x, b.y, ship.x, ship.y) < 14) {
        takeDamage(1);
        ship.invincible = hitInvincDuration(0.8); 
        spawnParticles(ship.x, ship.y, '#d42b6a', 5);
        return false;
      }
      return b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
    });

    // Mines filter with Deathtouch
    mines = mines.filter(m => {
      m.y += eDt * 40;
      if (m.drifting) m.x += Math.sin(m.t * 1.4) * 35 * eDt;
      m.t += eDt;
      m.x = Math.max(24, Math.min(W - 24, m.x));
      
      if (dist(ship.x, ship.y, m.x, m.y) < m.r + 12) {
        if (run.upgrade === 'OMEGITE') {
          spawnParticles(m.x, m.y, "#ff2020", 6);
          takeDamage(run.shieldMax * 0.4);
          return false;
        } else if (ship.invincible <= 0 && invincibleTimer <= 0) {
          takeDamage(run.shieldMax * 0.4);
          ship.invincible = hitInvincDuration(2.0); 
          spawnParticles(ship.x, ship.y, '#ffd700', 12);
          run.noHitKills = 0; run.combo = 1;
          updateCombo();
        }
      }
      return m.y < H + 40;
    });

    // Powerup pods
    pods = pods.filter(pod => {
      pod.t += dt;
      pod.x += pod.vx * dt;
      pod.y += pod.vy * dt;
      pod.x += Math.sin(pod.t * pod.bobFreq) * pod.bobAmp * dt;
      // Shoot to crack
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        if (b.enemy) continue;
        if (dist(b.x, b.y, pod.x, pod.y) < pod.r + 5) {
          bullets.splice(i, 1);
          spawnParticles(pod.x, pod.y, '#a855f7', 10);
          drops.push({ x: pod.x, y: pod.y, key: pod.puKey, isPowerup: true, r: 13, t: 0 });
          return false;
        }
      }
      return pod.y < H + 60 && pod.t < 20;
    });

    // Drop parabolic
    drops = drops.filter(d => {
      d.t += dt;

      // Pop
      if (d.t < 0.25) {
        d.vy = d.vy || -120;
        d.vx = d.vx || (Math.random() - 0.5) * 60;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.vy += 300 * dt; // gravity
      } else {
        // Homing arc
        const dx = ship.x - d.x;
        const dy = ship.y - d.y;
        const distToShip = Math.sqrt(dx*dx + dy*dy);
        const speed = 180 + (1 - Math.min(distToShip, 200) / 200) * 280;
        const nx = dx / (distToShip || 1);
        const ny = dy / (distToShip || 1);
        d.vx = d.vx || 0;
        d.vy = d.vy || 0;
        d.vx += (nx * speed - d.vx) * dt * 5;
        d.vy += (ny * speed - d.vy) * dt * 5;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
      }

      if (dist(d.x, d.y, ship.x, ship.y) < 22) {
        collectDrop(d);
        return false;
      }
      return d.y < H + 40 && d.t < 8; // expire after 8s
    });

   updateParticles(dt);

    // BOSS FIGHT
    if (bossActive) {
      bossT += dt;

      if (boss.alive) {
        // Rotations
        boss.geo.updateRot(boss.rot, boss.rotSpeed, boss.phase);
        if (boss.hitFlash > 0) boss.hitFlash -= dt;

        // Attack pattern by phase
        boss.shootTimer -= dt;
        const shootInterval = [2.8, 1.8, 1.0][boss.phase - 1];
        if (boss.shootTimer <= 0) {
          boss.shootTimer = shootInterval;
          boss.geo.attack(boss.phase); // per-boss pattern (falls back to tesseract's if undefined)
        }

        // Element attacks
        elementAttackTimer -= dt;
        if (elementAttackTimer <= 0) {
          elementAttackTimer = ELEMENT_ATTACK_INTERVAL[boss.phase - 1];
          triggerElementAttack();
        }

        // Sub-enemy spawning
        boss.spawnTimer -= dt;
        const spawnInterval = boss.geo.squadron
          ? boss.geo.squadron.interval[boss.phase - 1]
          : [6, 4, 2.5][boss.phase - 1];
        if (boss.spawnTimer <= 0) {
          boss.spawnTimer = spawnInterval;
          if (boss.geo.squadron) {
            const formations = boss.geo.squadron.formations;
            spawnSquadron(formations[Math.floor(Math.random() * formations.length)]);
          } else {
            spawnSubEnemy();
          }
        }

        // Mine drops
        if (boss.phase >= 2) {
          boss.mineTimer -= dt;
          if (boss.mineTimer <= 0) {
            boss.mineTimer = 5 - boss.phase;
            mines.push({
              x: 30 + Math.random() * (W - 60),
              y: boss.y + 20,
              vy: 25 + Math.random() * 15,
              r: 11, t: 0, drifting: false,
            });
          }
        }

        // Sweeping laser
        if (boss.geo.sweepLaser) updateSweepLaser(dt);
        if (boss.geo.coneBeam)   updateConeBeam(dt);
        if (boss.geo.zodiacWheel) updateZodiacWheel(dt);
        if (boss.geo.orbitNodes) {
          boss.nodeTimer -= dt;
          if (boss.nodeTimer <= 0) {
            boss.nodeTimer = boss.geo.orbitNodes.interval[boss.phase - 1];
            spawnMobiusNodes();
          }
          updateMobiusNodes(dt);
        }

        // Player bullets → boss
        bullets = bullets.filter(b => {
          if (b.enemy) return true;
          b.x += b.vx * dt; b.y += b.vy * dt;
          if (dist(b.x, b.y, boss.x, boss.y) < boss.scale * 0.55) {
            boss.hp -= 5;
            boss.hitFlash = 0.08;
            run.score += 10;
            spawnParticles(b.x, b.y, '#ffffff', 3);
            updateScoreHUD();
            checkPhase();
            document.getElementById('boss-bar').style.width =
              Math.max(0, (boss.hp / BOSS_MAX_HP) * 100) + '%';
            if (boss.hp <= 0) onBossDefeated();
            return false;
          }
          // Player bullets → sub-enemies
          for (let i = subEnemies.length - 1; i >= 0; i--) {
            const e = subEnemies[i];
            if (dist(b.x, b.y, e.x, e.y) < e.r + 4) {
              e.hp--;
              spawnParticles(e.x, e.y, e.color, 5);
              if (e.hp <= 0) {
                run.score += 50;
                spawnParticles(e.x, e.y, e.color, 12);
                spawnFloatingText(e.x, e.y, '+50', e.color);
                subEnemies.splice(i, 1);
                updateScoreHUD();
              }
              return false;
            }
          }
          return b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
        });

        // Sub-enemy movement, shooting, and collision
        subEnemies = subEnemies.filter(e => {
          e.update(e, eDt);
          e.shootTimer -= dt;
          if (e.shootTimer <= 0 && boss.phase >= 2) {
            e.shootTimer = 3;
            const dx = ship.x - e.x, dy = ship.y - e.y;
            const len = Math.sqrt(dx*dx + dy*dy) || 1;
            bullets.push({ x:e.x, y:e.y, vx:dx/len*90, vy:dy/len*90,
              speed:90, dmg:1, enemy:true, r:2.5, color:e.color });
          }
          if (ship.invincible <= 0 && invincibleTimer <= 0 &&
              dist(e.x, e.y, ship.x, ship.y) < e.r + 12) {
            takeDamage(2);
            ship.invincible = 1.2;
            spawnParticles(ship.x, ship.y, '#d42b6a', 8);
            return false;
          }
          return e.y < H + 60;
        });
      }

      // Skip normal level-clear
      return;
    }

    // End level sweep
    if (!endSweepFired && enemiesSpawned >= maxEnemies && levelTimer >= levelDuration - 3) {
      endSweepFired = true;
      triggerSweep({ silent: false });
    }

    // Level clear check
    if (levelTimer >= levelDuration && enemies.length === 0 && enemiesSpawned >= maxEnemies) {
      levelClear();
    }
  }

  // SPAWNS
  const ENEMY_TYPES = [
    // Scout — triangle rammer
    {
      type:'scout', r:12, hp:2, dmg:0, color:'#e8600a', speed:110,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.beginPath();
        ctx.moveTo(0, e.r);
        ctx.lineTo(-e.r * 0.85, -e.r);
        ctx.lineTo( e.r * 0.85, -e.r);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5;
        ctx.shadowColor = e.color; ctx.shadowBlur = 8;
        ctx.stroke(); ctx.restore();
      },
      update(e, dt) {
        const dx = ship.x - e.x, dy = ship.y - e.y;
        const d = Math.sqrt(dx*dx+dy*dy) || 1;
        e.x += dx/d * e.speed * dt;
        e.y += dy/d * e.speed * dt;
        e.angle = Math.atan2(dx, dy) + Math.PI;
      }
    },
    // Drone — rotating diamond shooter
    {
      type:'drone', r:14, hp:3, color:'#a855f7', speed:40,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.beginPath();
        ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0);
        ctx.lineTo(0, e.r); ctx.lineTo(-e.r, 0);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5;
        ctx.shadowColor = e.color; ctx.shadowBlur = 10;
        ctx.stroke();
        // inner diamond
        ctx.beginPath();
        const s = e.r * 0.45;
        ctx.moveTo(0,-s); ctx.lineTo(s,0); ctx.lineTo(0,s); ctx.lineTo(-s,0); ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 0.8; ctx.stroke();
        ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt;
        e.angle += dt * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          enemyShoot(e);
          e.shootTimer = 4.5 - run.level * 0.36;
        }
      }
    },
    // Swarmer — pentagon rammer
    {
      type:'swarmer', r:8, hp:1, color:'#d42b6a', speed:90,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2 - Math.PI/2;
          const px = Math.cos(a) * e.r, py = Math.sin(a) * e.r;
          i === 0 ? ctx.moveTo(px,py) : ctx.lineTo(px,py);
        }
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.2;
        ctx.shadowColor = e.color; ctx.shadowBlur = 6;
        ctx.stroke(); ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt * 0.6;
        e.x += Math.sin(e.t * 3 + e.phase) * 55 * dt;
        e.x = Math.max(20, Math.min(W - 20, e.x));
        e.t += dt; e.angle += dt * 3;
      }
    },
    // Elite — hexagon
    {
      type:'elite', r:18, hp:8, color:'#ffd700', speed:25,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        // outer hex
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i/6)*Math.PI*2; const px=Math.cos(a)*e.r; const py=Math.sin(a)*e.r;
          i===0?ctx.moveTo(px,py):ctx.lineTo(px,py);
        }
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.8;
        ctx.shadowColor = e.color; ctx.shadowBlur = 16;
        ctx.stroke();
        // inner ring
        ctx.beginPath();
        ctx.arc(0,0,e.r*0.5,0,Math.PI*2);
        ctx.strokeStyle = e.color; ctx.lineWidth = 0.8; ctx.stroke();
        ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt;
        e.angle += dt * 0.6;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          // spread shot
          [-0.4, 0, 0.4].forEach(offset => {
            bullets.push({ x:e.x, y:e.y, speed:130, vx:Math.sin(offset)*70, dmg:1, enemy:true, color:'#ffd700' });
          });
          e.shootTimer = 5.5 - run.level * 0.45;
        }
      }
    },
    // Armored — tetris piece
    {
      type:'armored', r:16, hp:6, color:'#55ff22', speed:55,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.strokeStyle = e.color; ctx.lineWidth = 2;
        ctx.shadowColor = e.color; ctx.shadowBlur = 8;
        ctx.beginPath();
        const s = e.r * 0.75;
        ctx.moveTo(-s, -s); ctx.lineTo(s, -s);
        ctx.lineTo(s, 0);   ctx.lineTo(0, 0);
        ctx.lineTo(0, s);   ctx.lineTo(-s, s);
        ctx.closePath();
        ctx.stroke(); ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt * 0.5;
        e.x += e.vx * dt;
        if (e.x < 24 || e.x > W - 24) { e.vx *= -1; }
        e.angle += dt * 0.8;
      }
    },
  ];

  function spawnEnemy() {
    const level = run.level;
    // Weight table
    const weights = [
      level < 3 ? 6 : 3,                          // scout 
      level < 3 ? 0 : level < 5 ? 1 : 3,          // drone 
      level < 5 ? 3 : 5,                          // swarmer
      level < 4 ? 0 : level < 6 ? 2 : 4,          // elite 
      level > 2 ? 2 : 0,                          // armored
    ];
    const total = weights.reduce((a,b) => a+b, 0);
    let r = Math.random() * total;
    let typeIdx = 0;
    for (let i = 0; i < weights.length; i++) { r -= weights[i]; if (r <= 0) { typeIdx = i; break; } }

    const tmpl = ENEMY_TYPES[typeIdx];
    const e = {
      ...tmpl,
      x: 30 + Math.random() * (W - 60),
      y: -30,
      angle: 0,
      t: 0,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 80,
      // Delay first shot
      shootTimer: (3 - run.level * 0.2) + Math.random() * 2,
      hp: tmpl.hp + Math.floor(run.level * 0.5),
    };
    enemies.push(e);
  }

  function updateEnemy(e, dt) {
    const tmpl = ENEMY_TYPES.find(t => t.type === e.type);
    if (tmpl) tmpl.update(e, dt);
  }

  function enemyShoot(e) {
    const dx = ship.x - e.x, dy = ship.y - e.y;
    const d = Math.sqrt(dx*dx+dy*dy) || 1;
    bullets.push({ x:e.x, y:e.y, speed:120, vx: dx/d*120, vy: dy/d*120, dmg:1, enemy:true, aimed:true, color:'#a855f7' });
  }

  // Phase Fuselage (Titane)
  function hitInvincDuration(base) {
    return base * (run.upgrade === 'TITANE' ? 1.8 : 1);
  }

  function killEnemy(e) {
    run.kills++;
    const base = e.type === 'elite' ? 200 : e.type === 'armored' ? 150 : 100;
    run.noHitKills++;
    if (run.noHitKills >= 10) { run.noHitKills = 0; run.combo = Math.min(run.combo + 1, 5); }
    const pts = base * run.combo;
    run.score += pts;
    spawnFloatingText(e.x, e.y, '+' + pts, e.color);
    updateScoreHUD();
    updateCombo();
    // Paycheck
    run.credits += Math.floor(pts * 0.02);
    // Drop chance
    const dropChance = (0.18 + run.level * 0.012) * (run.upgrade === 'CARBOSILICUM' ? 1.5 : 1);
    if (Math.random() < dropChance) spawnDrop(e.x, e.y, e.type === 'elite');
    spawnParticles(e.x, e.y, e.color, 10);
  }

  function spawnDrop(x, y, elite) {
    const keys = Object.keys(STRINGS.items);
    const key = elite
      ? ['Mg','Ti','Si'][Math.floor(Math.random()*3)]
      : keys[Math.floor(Math.random() * keys.length)];
    drops.push({ x, y, key, r:10, t:0 });
  }

  function collectDrop(d) {
    if (d.isPowerup) {
      // Try to fill
      const activePuCount = run.powerups.filter(k => k != null).length;
      if (activePuCount < run.reserveMax) {
        // Find first null slot, if none push
        const emptyIdx = run.powerups.indexOf(null);
        if (emptyIdx >= 0) run.powerups[emptyIdx] = d.key;
        else run.powerups.push(d.key);
        const pu = STRINGS.powerups[d.key];
        logPickup(`${pu.sym} ${pu.name}`);
        updatePowerupBar();
      } else {
        // Reserve full,  auto-stash
        run.inventory[d.key] = Math.min(99, (run.inventory[d.key] || 0) + 1);
        const pu = STRINGS.powerups[d.key];
        logPickup(`STASHED ${pu.name}`);
        flashStash();
      }
    } else {
      run.inventory[d.key] = Math.min(99, (run.inventory[d.key] || 0) + 1);
      const item = STRINGS.items[d.key];
      logPickup(`${item.sym} ${item.name}`);
      // Π Octane Atomizer
      if (run.upgrade === 'NITROKALIUM') {
        run.octaneTimer = 4;
        logPickup('FIRE RATE UP');
      }
    }
    spawnParticles(d.x, d.y, d.isPowerup ? '#a855f7' : '#00f5ff', 6);
  }

  function flashStash() {
    const el = document.getElementById('pu-stash');
    if (!el) return;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 400);
  }

  function spawnMine() {
    const drifting = Math.random() < 0.45;
    mines.push({
      x: 30 + Math.random() * (W - 60),
      y: -20, r: 11, drifting, t: Math.random() * 10
    });
  }

function spawnPod() {
    const lvl = run ? run.level : 1;
    // Pod drop pool
    const pool = [];
    function add(key, weight) { for (let i = 0; i < weight; i++) pool.push(key); }
    // Compounds
    add('MAGNIUM',      6);
    add('LITHEBRYL',    8);
    add('NITROKALIUM',  8);
    add('CARBOSILICUM', 2);
    // More Compounds
    if (lvl >= 2) { add('TITANE', 4); add('ALKALIUM', 4); add('AZOLITHION', 4); add('GAMMITE', 4); }
    // Alloys
    if (lvl >= 4) {
      add('AXORITE',  3);
      add('PHIOMEGA', 3);
      add('DELTALITE', 3);
      add('OMEGITE',  1);
    }
    const puKey = pool[Math.floor(Math.random() * pool.length)];
    const fromLeft = Math.random() < 0.5;
    pods.push({
      x: fromLeft ? -20 : W + 20,
      y: 60 + Math.random() * (H * 0.35),
      vx: fromLeft ? 38 : -38,
      vy: 22 + Math.random() * 18,
      bobFreq: 1.2 + Math.random() * 0.6,
      bobAmp: 18 + Math.random() * 12,
      r: 16,
      puKey,
      t: 0,
    });
  }

  function fireBullet() {
    const bx = ship.x, by = ship.y - 10;
    const adx = Math.sin(aimAngle);
    const ady = -Math.cos(aimAngle);
    if (run.bulletType === '3spread') {
      [-0.15, 0, 0.15].forEach(offset => {
        const a = Math.atan2(ady, adx) + offset;
        const spd = 520;
        bullets.push({ x:bx, y:by, speed:spd, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, dmg:1, enemy:false, color:'#a855f7' });
      });
    } else if (run.bulletType === '12spread') {
      // PhiOmega (BurstShot)
      const base = Math.atan2(ady, adx);
      const offsets = [-0.35, -0.23, -0.11, 0, 0.11, 0.23, 0.35];
      offsets.forEach((offset, i) => {
        const a   = base + offset;
        const spd = 460 + Math.abs(offset) * 120; // centre: 460, outer tips: ~502
        bullets.push({ x:bx, y:by, speed:spd, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, dmg:1, enemy:false, color:'#ff2d78' });
      });
    } else {
      const spd = 560;
      bullets.push({ x:bx, y:by, speed:spd, vx:adx*spd, vy:ady*spd, dmg:1, enemy:false, color:'#00f5ff' });
    }
  }

  function takeDamage(amt) {
    if (ship.invincible > 0 || invincibleTimer > 0) return;
    
    run.shield = Math.max(0, run.shield - amt);
    run.noHitKills = 0; 
    run.combo = 1;
    updateShieldBar(); 
    updateCombo();

    // Last Stand Passives
    const threshold = Math.max(2, run.shieldMax * 0.2); 
    
    if (run.shield <= threshold && run.shield > 0) {
      if (run.upgrade === 'DELTALITE' && !run.warpStabTriggered) {
        run.warpStabTriggered = true;
        timeDilationTimer = 12;
        run.octaneTimer = 12;
        spawnFloatingText(W/2, H/2 - 30, 'WARP STABILIZER', '#22c55e');
        logPickup('WARP STABILIZER ENGAGED');
      } 
      else if (run.upgrade === 'PHIOMEGA' && !run.fluxTriggered) {
        run.fluxTriggered = true;
        run.bulletType = '12spread';
        noAmmoCostTimer = 10;
        invincibleTimer = 10;
        spawnFloatingText(W/2, H/2 - 30, 'FLUX CANNON', '#a855f7');
        logPickup('FLUX CANNON ACTIVE');
      }
    }

    if (run.shield <= 0) onDeath();
  }

  function onDeath() {
    // Aquiline Manifold (Axorite)
    if (run.upgrade === 'AXORITE' && !run.aquilineUsed) {
        run.aquilineUsed = true;
        run.shield = Math.ceil(run.shieldMax * 0.5);
        updateShieldBar();
        ship.invincible = 3.0;
        spawnFloatingText(W/2, H/2 - 30, 'REPRISAL', '#ec4899');
        logPickup('SHIELD REPAIR');
        state = "playing"; 
        return;
    }

    state = 'dead';
    cancelAnimationFrame(animId);
    if (run.score > save.highScore) { save.highScore = run.score; writeSave(); }
    document.getElementById('death-score').textContent = 'SCORE  ' + run.score.toLocaleString();
    document.getElementById('overlay-death').classList.add('active');
  }

  function levelClear() {
    state = 'clear';
    cancelAnimationFrame(animId);
    const paycheck = 200 + run.level * 50;
    run.credits += paycheck;
    document.getElementById('clear-sub').textContent = STRINGS.ui.levelComplete(run.level);
    document.getElementById('clear-score').textContent = `SCORE  ${run.score.toLocaleString()}  +${paycheck}¢`;
    document.getElementById('overlay-clear').classList.add('active');
  }

  function onBossDefeated() {
    boss.alive   = false;
    bossDefeated = true;
    bossActive   = false;
    state        = 'clear'; // stops update() from running, render() still ticks

    // Advance the boss geometry for the next NG+ run
    save.bossRun++;
    writeSave();

    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        spawnParticles(
          boss.x + (Math.random() - 0.5) * 120,
          boss.y + (Math.random() - 0.5) * 80,
          boss.phaseColors[Math.floor(Math.random() * 3)], 30
        );
      }, i * 120);
    }

    // Score bonus
    run.score += 5000;
    if (run.score > save.highScore) { save.highScore = run.score; writeSave(); }

    // Hide boss HUD
    document.getElementById('boss-hud').classList.remove('active');

    // Animated count-up
    function animateDebrief() {
      const targetKills = run.kills;
      const targetCredits = run.credits;
      const targetScore = run.score;
      
      let currentKills = 0, currentCredits = 0, currentScore = 0;
      const duration = 1500; // 1.5 seconds
      const startTime = Date.now();
      
      function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        currentKills = Math.floor(targetKills * ease);
        currentCredits = Math.floor(targetCredits * ease);
        currentScore = Math.floor(targetScore * ease);
        
        document.getElementById('boss-clear-kills').textContent = 'KILLS ' + currentKills;
        document.getElementById('boss-clear-credits').textContent = 'CREDITS ' + currentCredits;
        document.getElementById('boss-clear-score').textContent = 'FINAL SCORE ' + currentScore.toLocaleString();
        
        if (progress < 1) requestAnimationFrame(update);
      }
      update();
    }
    
    document.getElementById('boss-clear-time').textContent = 'TIME ' + formatTime(run.totalTime);
    animateDebrief();
    
    setTimeout(() => {
      document.getElementById('overlay-boss-clear').classList.add('active');
      cancelAnimationFrame(animId); // now safe to stop the loop
    }, 1800);

    updateScoreHUD();
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ":" + String(s).padStart(2, "0");
  }

  // End Level and Bomb Sweep
  function triggerSweep(opts = {}) {
  const silent = opts.silent || false;

  if (!silent) document.getElementById('powerup-bar').style.pointerEvents = 'none';

  enemies.forEach(e => spawnParticles(e.x, e.y, e.color, 8));
  mines.forEach(m => spawnParticles(m.x, m.y, '#ff2020', 6));

  // Crack pods
  pods.forEach(pod => {
    drops.push({ x: pod.x, y: pod.y, key: pod.puKey, isPowerup: true, r: 13, t: 0 });
    spawnParticles(pod.x, pod.y, '#a855f7', 10);
  });
  pods = [];

  // Collect
  drops.forEach(d => { if (d.isPowerup) collectDrop(d); });
	  
  if (bossActive && boss && boss.alive) {
      // Combustion Oxidizer (Magnium)
      const baseDmg = opts.bossDmg || 30;
      const bombDmg = baseDmg + (run.upgrade === 'MAGNIUM' ? 10 : 0);
    boss.hp -= bombDmg;
    boss.hitFlash = 0.3; 
    spawnParticles(boss.x, boss.y, '#ffd700', 20);
    document.getElementById('boss-bar').style.width =
      Math.max(0, (boss.hp / BOSS_MAX_HP) * 100) + '%';
    if (boss.hp <= 0) onBossDefeated();
  }
	  
  enemies = [];
  mines   = [];
  bullets = [];
  subEnemies = [];
  mobiusNodes = [];
	  

  if (!silent) {
    spawnParticles(W / 2, H / 2, '#ffd700', 25);
    spawnFloatingText(W / 2, H / 2 - 40, 'SECTOR SWEPT', '#ffd700');
    logPickup('SECTOR SWEPT');
  }
}
 // SCREEN SHAKE
function screenShake(magnitude, duration) {
  shakeIntensity = magnitude;
  shakeDuration  = duration;
}
 // TRIGGER POWERUP	
  function triggerPowerup(idx) {
    const pu = run.powerups[idx];
    if (!pu) return;
    if (pu === 'OMEGITE') {
  	  triggerSweep({ silent: true });
	  spawnParticles(W / 2, H / 2, '#d42b6a', 18);
 	  spawnParticles(W / 2, H / 2, '#ffd700', 18);
	  spawnParticles(W / 2, H / 2, '#a855f7', 18);
	  spawnFloatingText(W / 2, H / 2 - 50, 'OMEGITE', '#d42b6a');
	  screenShake(10, 0.6);
	  logPickup('OMEGITE DEPLOYED');
    } else if (pu === 'MAGNIUM') {
  	const MAG_DMG = (run.upgrade === 'MAGNIUM') ? 6 : 5;
  	enemies.forEach(e => {
    e.hp -= MAG_DMG;
    spawnParticles(e.x, e.y, e.color, 8);
    if (e.hp <= 0) {
      run.score += 100;
      spawnParticles(e.x, e.y, e.color, 14);
      spawnFloatingText(e.x, e.y - 10, '+100', e.color);
      updateScoreHUD();
  	  }
 	 });
	  enemies = enemies.filter(e => e.hp > 0);
	  spawnParticles(W / 2, H / 2, '#a855f7', 20);
	  spawnFloatingText(W / 2, H / 2 - 30, 'MAGNIUM', '#a855f7');
	  screenShake(4, 0.4); 
	  logPickup('MAGNIUM DEPLOYED');
    } else if (pu === 'LITHEBRYL') {
      run.shield = run.shieldMax; updateShieldBar(); logPickup('SHIELD RESTORED');
    } else if (pu === 'NITROKALIUM') {
      run.ammo = run.ammoMax; 
      updateAmmoBar();
      spawnFloatingText(W / 2, H / 2 - 30, 'NITROKALIUM', '#00f5ff');
      logPickup('INSTANT RELOAD');
	} else if (pu === 'CARBOSILICUM') {
      run.combo = Math.max(run.combo * 2, 2); logPickup('COMBO UP');
    } else if (pu === 'TITANE') {
      invincibleTimer = 10;
      spawnFloatingText(W / 2, H / 2 - 30, 'TITANE', '#5eead4');
      logPickup('INVINCIBLE 10s');
    } else if (pu === 'ALKALIUM') {
      piercingBullets = true;
      spawnFloatingText(W / 2, H / 2 - 30, 'ALKALIUM', '#00f5ff');
      logPickup('PIERCING ACTIVE');
    } else if (pu === 'AXORITE') {
      run.shield = run.shieldMax; updateShieldBar();
      run.ammo   = run.ammoMax;  updateAmmoBar();
      spawnFloatingText(W / 2, H / 2 - 30, 'AXORITE', '#ffd700');
      logPickup('FULL RESTORE');
    } else if (pu === 'PHIOMEGA') {
      run.bulletType = '12spread';
      spawnFloatingText(W / 2, H / 2 - 30, 'PHIOMEGA', '#a855f7');
      logPickup('BURSTSHOT ACTIVE');
    } else if (pu === 'AZOLITHION') {
      run.bulletType = '3spread';
      spawnFloatingText(W / 2, H / 2 - 30, 'AZOLITHION', '#00f5ff');
      logPickup('MULTISHOT ACTIVE');
    } else if (pu === 'GAMMITE') {
      noAmmoCostTimer = 10;
      spawnFloatingText(W / 2, H / 2 - 30, 'GAMMITE', '#ffd700');
      logPickup('NO AMMO COST');
    } else if (pu === 'DELTALITE') {
      timeDilationTimer = 15;
      spawnFloatingText(W / 2, H / 2 - 30, 'DELTALITE', '#a855f7');
      logPickup('TIME DILATION');
    }
    run.powerups.splice(idx, 1);
    updatePowerupBar();
  }

  // Particle Man
function spawnParticles(x, y, color, n) {
  const r = parseInt(color.slice(1,3), 16);
  const g = parseInt(color.slice(3,5), 16);
  const b = parseInt(color.slice(5,7), 16);
  for (let i = 0; i < n; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 120;
    const life  = 0.4 + Math.random() * 0.4;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life,
      maxLife: life,
      r, g, b,
      size: 1.5 + Math.random() * 2,
    });
  }
}

function updateParticles(dt) {
  particles = particles.filter(p => {
    p.vy += 60 * dt;
    p.vx *= (1 - dt * 1.5);
    p.vy *= (1 - dt * 1.5);
    p.x  += p.vx * dt;
    p.y  += p.vy * dt;
    p.life -= dt;
    return p.life > 0;
  });
}

// Particle Artist
function drawParticles() {
  if (!particles.length) return;

  const prev = ctx.globalCompositeOperation;
  ctx.globalCompositeOperation = 'lighter';
  ctx.lineCap = 'round';

  particles.forEach(p => {
    const lifePct = Math.max(0, p.life / p.maxLife);
    const alpha   = Math.pow(lifePct, 1.2) * 0.95;
    if (alpha <= 0) return;

    const { r, g, b, vx, vy, size } = p;

    // Streak
    const speed    = Math.sqrt(vx * vx + vy * vy);
    const trailLen = Math.min(speed * 0.06, 18);
    const tx = trailLen > 0.5 ? p.x - (vx / speed) * trailLen : p.x;
    const ty = trailLen > 0.5 ? p.y - (vy / speed) * trailLen : p.y;

    // Faded streak
    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.45})`;
    ctx.lineWidth   = Math.max(0.5, size * lifePct * 0.7);
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();

    // Bright dot
    ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(0.5, size * lifePct * 0.6), 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalCompositeOperation = prev;
}

  let floaters = [];
  function spawnFloatingText(x, y, text, color) {
    floaters.push({ x, y, text, color, life:1.2, vy:-60 });
  }
  floaters = [];

  // PROGRESS GAUGE
  function drawSweepGauge() {
    if (endSweepFired || bossActive) return;
    const timeProg = Math.min(1, levelTimer / (levelDuration - 3));
    const enemyProg = Math.min(1, enemiesSpawned / maxEnemies);
    const progress = Math.min(timeProg, enemyProg);
    const cx = W / 2, cy = 36, r = 22, lineW = 3;
    const startAngle = Math.PI * 0.75;
    const endAngle = Math.PI * 2.25;
    const fillEnd = startAngle + (endAngle - startAngle) * progress;
    // Track
    ctx.beginPath();
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.strokeStyle = "rgba(0,245,255,0.15)";
    ctx.lineWidth = lineW;
    ctx.lineCap = "round";
    ctx.stroke();
    // Fill
    if (progress > 0) {
      const alpha = 0.5 + progress * 0.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r, startAngle, fillEnd);
      ctx.strokeStyle = `rgba(0,245,255,${alpha.toFixed(2)})`;
      ctx.lineWidth = lineW;
      ctx.stroke();
    }
    // Sector Level
    ctx.save();
    ctx.font = 'bold 18px "Nova Square", monospace';
    ctx.fillStyle = '#00f5ff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#00f5ff';
    ctx.shadowBlur = 8;
    ctx.fillText(run ? run.level : 1, cx, cy);
    ctx.restore();
  }
  // COUNTDOWN
  let sweepCountdown = 4; 
  function updateCountdown() {
    if (endSweepFired || sweepCountdown <= 0) return;
    const threshold = levelDuration - sweepCountdown;
    if (levelTimer >= threshold) {
      if (sweepCountdown === 1) {
        spawnFloatingText(W * 0.5, H * 0.38, 'READYING SECTOR SWEEP', '#00f5ff');
      } else {
        spawnFloatingText(W * 0.5, H * 0.38, sweepCountdown.toString(), '#00f5ff');
      }
      sweepCountdown--;
    }
  }

  // RENDER
 function render(dt) {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#050510';
  ctx.fillRect(0, 0, W, H);  // ← background stays fixed, outside shake

  ctx.save();
  if (shakeDuration > 0) {
    shakeDuration = Math.max(0, shakeDuration - dt);
    const s = shakeIntensity * (shakeDuration / 0.6);
    ctx.translate(
      (Math.random() * 2 - 1) * s,
      (Math.random() * 2 - 1) * s
    );
  }

  ctx.save();
  ctx.globalAlpha = (state === 'apo-intro') ? apoWaveformAlpha : 1;
  drawWaveform();
  ctx.restore();
  drawSweepGauge();
  updateCountdown();
  drawPods();
  drawDrops();
  drawMines();
  drawBullets();
  drawEnemies();
  if (bossActive || bossDefeated) drawBoss();
  if (apoActive) { drawBoss(); drawPilots(); }
  if (bossActive) drawSweepLaser();
  if (bossActive) drawConeBeam();
  if (bossActive) drawZodiacWheel();
  if (bossActive) drawMobiusNodes();
  if (bossActive) drawSubEnemies();
  drawShip();
  drawParticles();
  drawFloaters();

  ctx.restore();
}

  // Palettes (some parts depreciated)
  const LEVEL_PALETTES = [
    { skyT:'#0d0020', skyB:'#1a0040', sun:'#ff6ec7', sunG:'#d42b6a', grid:'#2255ff', mtn:'#1133cc' }, // 1
    { skyT:'#0a0025', skyB:'#1e0050', sun:'#ff8c42', sunG:'#ff4500', grid:'#00ccff', mtn:'#0066cc' }, // 2
    { skyT:'#100015', skyB:'#300030', sun:'#d42b6a', sunG:'#cc0055', grid:'#cc44ff', mtn:'#8800cc' }, // 3
    { skyT:'#1a0800', skyB:'#3d1200', sun:'#ffd700', sunG:'#ff8c00', grid:'#ff6b35', mtn:'#cc3300' }, // 4
    { skyT:'#200010', skyB:'#450020', sun:'#ff4500', sunG:'#ff0000', grid:'#d42b6a', mtn:'#cc0044' }, // 5
    { skyT:'#05001a', skyB:'#150040', sun:'#a855f7', sunG:'#6600cc', grid:'#8800ff', mtn:'#550099' }, // 6
    { skyT:'#001510', skyB:'#003322', sun:'#00ff9f', sunG:'#00cc66', grid:'#00ffcc', mtn:'#009966' }, // 7
    { skyT:'#1a0000', skyB:'#400000', sun:'#ffffff', sunG:'#ff0040', grid:'#ff0040', mtn:'#990020' }, // 8
  ];

  // Seeded terrain heights
  let terrainSeed = [];
  function initTerrain() {
    terrainSeed = [];
    for (let i = 0; i < 64; i++) terrainSeed.push(Math.random());
  }
  initTerrain();

  function terrainHeight(xi, lvl) {
    const s = terrainSeed;
    const base = s[xi % 64] * 0.5 + s[(xi * 7) % 64] * 0.3 + s[(xi * 13) % 64] * 0.2;
    const amp = 0.28 + lvl * 0.055;
    return base * amp;
  }

  function drawSynthwaveScene() {
    const lvl  = run ? run.level : 1;
    const pal  = LEVEL_PALETTES[(lvl - 1) % LEVEL_PALETTES.length];

    // WAVEFORM
    const rows    = 38;
    const rowSpan = H / rows;
    const sideW   = W * 0.30;
    const c1 = hexToRgb(pal.grid);
    const c2 = hexToRgb(pal.sun);

    for (let r = 0; r < rows; r++) {
      const baseY = (r * rowSpan + rowSpan * 0.5 + waveOffset) % H;
      const screenPct = baseY / H; 
      const amp   = (4 + screenPct * rows * 1.4 + lvl * 0.8) * (0.4 + screenPct * 0.6);
      const freq  = 0.022 + screenPct * rows * 0.001;
      const cycle  = waveOffset / H;
      const localT = cycle < 1 ? cycle : 2 - cycle;
      const ph    = localT * 30 * 0.5 + screenPct * rows * 0.3;
      const ph2   = localT * 30 * 0.3 + screenPct * rows * 0.18;

      const rr = Math.round(c1.r + (c2.r - c1.r) * screenPct);
      const gg = Math.round(c1.g + (c2.g - c1.g) * screenPct);
      const bb = Math.round(c1.b + (c2.b - c1.b) * screenPct);
      const alpha = 0.14 + screenPct * 0.38;

      ctx.strokeStyle = `rgba(${rr},${gg},${bb},${alpha})`;
      ctx.lineWidth = 0.85;
      ctx.beginPath();
      for (let px = 0; px <= W; px += 2) {
        let blend;
        if (px <= sideW) {
          const t = 1 - px / sideW;
          blend = 0.5 - 0.5 * Math.cos(t * Math.PI);
        } else if (px >= W - sideW) {
          const t = (px - (W - sideW)) / sideW;
          blend = 0.5 - 0.5 * Math.cos(t * Math.PI);
        } else {
          blend = 0;
        }
        const wave = Math.sin(px * freq + ph)             * amp
                   + Math.sin(px * freq * 2.1 + ph2)      * amp * 0.4
                   + Math.sin(px * freq * 0.5 + ph * 0.7) * amp * 0.2;
        const py = baseY - wave * blend;
        px === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
  }

  function drawWaveform() {
    drawSynthwaveScene();
  }

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return {r,g,b};
  }

  // Ship Artist
  const UPGRADE_COLORS = {
    LITHEBRYL:    { body:'#ff6b35', fill:null,      fin:'#a855f7', eng:'#d42b6a' },
    TITANE:       { body:'#a855f7', fill:null,      fin:'#a855f7', eng:'#d42b6a' },
    CARBOSILICUM: { body:'#ec4899', fill:null,      fin:'#a855f7', eng:'#d42b6a' },
    NITROKALIUM:  { body:'#00f5ff', fill:null,      fin:'#ec4899', eng:'#ffd700' },
    ALKALIUM:     { body:'#00f5ff', fill:null,      fin:'#ffd700', eng:'#ff6b35' },
    AZOLITHION:   { body:'#00f5ff', fill:null,      fin:'#ff6b35', eng:'#ffffff' },
    MAGNIUM:      { body:'#ff6b35', fill:'#ff6b35', fin:'#a855f7', eng:'#d42b6a' },
    GAMMITE:      { body:'#a855f7', fill:'#a855f7', fin:'#a855f7', eng:'#d42b6a' },
    DELTALITE:    { body:'#22c55e', fill:'#22c55e', fin:'#00f5ff', eng:'#ff6b35' },
    PHIOMEGA:     { body:'#a855f7', fill:'#a855f7', fin:'#ffd700', eng:'#00f5ff' },
    AXORITE:      { body:'#ec4899', fill:'#ec4899', fin:'#00f5ff', eng:'#ffd700' },
    OMEGITE:      { body:'#ef4444', fill:'#ef4444', fin:'#ef4444', eng:'#ffd700' },
  };
  const UPGRADE_KEYS = Object.keys(UPGRADE_COLORS);

  // It's you!
  function drawShipAt(x, y, angle, upgradeKey) {
    const col = (upgradeKey && UPGRADE_COLORS[upgradeKey])
      ? UPGRADE_COLORS[upgradeKey]
      : { body:'#00f5ff', fill:null, fin:'#a855f7', eng:'#d42b6a' }; // Default
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    // Glow and Body
    ctx.shadowColor = col.body;
    ctx.shadowBlur = 16;
    // Main hull
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(-12, 8);
    ctx.lineTo(-5, 4);
    ctx.lineTo(0, 10);
    ctx.lineTo(5, 4);
    ctx.lineTo(12, 8);
    ctx.closePath();
    
    if (col.fill) {
      ctx.fillStyle = col.fill;
      ctx.fill();
    }
    ctx.strokeStyle = col.body;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Tailfins
    ctx.beginPath();
    ctx.moveTo(-12, 8); ctx.lineTo(-18, 2); ctx.lineTo(-10, -2);
    ctx.strokeStyle = col.fin; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12, 8); ctx.lineTo(18, 2); ctx.lineTo(10, -2);
    ctx.stroke();
    // Engine
    ctx.beginPath();
    ctx.arc(0, 10, 3 + Math.sin(Date.now() * 0.01) * 1, 0, Math.PI * 2);
    ctx.fillStyle = col.eng;
    ctx.fill();
    ctx.restore();
  }

  function drawShip() {
    if (apoActive) return; 
    const x = ship.x, y = ship.y;
    const blink = ship.invincible > 0 && Math.sin(Date.now() * 0.02) > 0;
    if (blink) return;
    drawShipAt(x, y, aimAngle, run && run.upgrade);

    // Titane invincibility ring
    if (invincibleTimer > 0) {
      const pulse = 0.5 + 0.5 * Math.sin(Date.now() * 0.008);
      const fade  = Math.min(1, invincibleTimer / 2);
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, 28 + pulse * 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(94,234,212,${0.55 * fade + 0.2 * pulse})`;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#5eead4';
      ctx.shadowBlur = 14 * pulse;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 22 + pulse * 3, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(94,234,212,${0.25 * fade})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawBullets() {
    bullets.forEach(b => {
      ctx.save();
      if (b.enemy) {
        const isMarker = b.vx === 0 && b.vy === 0; 
        ctx.shadowColor = b.color || '#a855f7';
        ctx.fillStyle   = b.color || '#a855f7';
        if (isMarker) {
          ctx.shadowBlur = 10;
          const twinkle = 4.5 + 1.2 * Math.sin(bossT * 5 + b.x * 0.3);
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const r  = (i % 2 === 0) ? twinkle : twinkle * 0.32;
            const a  = (i / 8) * Math.PI * 2;
            const px = Math.cos(a) * r, py = Math.sin(a) * r;
            if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else {
          ctx.shadowBlur = 6;
          const angle = Math.atan2(b.vy, b.vx) + Math.PI / 2;
          const bW = 3, bH = 8, bR = 1.5;
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.roundRect(-bW / 2, -bH / 2, bW, bH, bR);
          ctx.fill();
          ctx.restore();
        }
      } else {
        const isPiercing = piercingBullets;
        const bColor = isPiercing ? '#ffffff' : b.color;
        ctx.shadowColor = isPiercing ? '#00f5ff' : b.color;
        ctx.shadowBlur  = isPiercing ? 16 : 8;
        ctx.fillStyle = bColor;

        if (run.bulletType === 'laser') {
          ctx.fillRect(b.x - 2, b.y - 12, 4, 24);
        } else if (run.bulletType === '12spread' || isPiercing) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, isPiercing ? 4 : 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const angle = Math.atan2(b.vy, b.vx) + Math.PI / 2;
          const bW = 3, bH = 10, bR = 1.5;
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.roundRect(-bW/2, -bH/2, bW, bH, bR);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.restore();
    });
  }

  function drawEnemies() {
    enemies.forEach(e => {
      const tmpl = ENEMY_TYPES.find(t => t.type === e.type);
      if (tmpl) { ctx.save(); tmpl.draw(ctx, e); ctx.restore(); }
    });
  }

  function drawBoss() {
    if (!boss) return;
    boss.geo.draw(boss);
  }

  function drawSubEnemies() {
    subEnemies.forEach(e => {
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.shadowColor = e.color;
      ctx.shadowBlur  = 10;

      if (e.type === 'orbital') {
        // Diamond
        ctx.beginPath();
        ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0);
        ctx.lineTo(0,  e.r); ctx.lineTo(-e.r, 0);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5; ctx.stroke();
      } else {
        // Diver
        ctx.beginPath();
        ctx.moveTo(0, e.r);
        ctx.lineTo(-e.r * 0.8, -e.r);
        ctx.lineTo( e.r * 0.8, -e.r);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5; ctx.stroke();
      }

      ctx.restore();
    });
  }

  function drawMines() {
    mines.forEach(m => {
      ctx.save(); ctx.translate(m.x, m.y);
      ctx.shadowColor = '#ff0000'; ctx.shadowBlur = 18;
      // Body
      ctx.beginPath(); ctx.arc(0,0,m.r,0,Math.PI*2);
      ctx.fillStyle = '#000'; ctx.fill();
      // Red crosshair
      ctx.strokeStyle = '#ff2020'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(0,0,m.r,0,Math.PI*2); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-m.r,0); ctx.lineTo(m.r,0);
      ctx.moveTo(0,-m.r); ctx.lineTo(0,m.r);
      ctx.stroke();
      // Inner X
      const s = m.r*0.55;
      ctx.beginPath();
      ctx.moveTo(-s,-s); ctx.lineTo(s,s);
      ctx.moveTo(s,-s); ctx.lineTo(-s,s);
      ctx.strokeStyle = 'rgba(255,30,30,0.5)'; ctx.stroke();
      ctx.restore();
    });
  }

  function drawDrops() {
    drops.forEach(d => {
      ctx.save(); ctx.translate(d.x, d.y + Math.sin(d.t * 2) * 3);
      if (d.isPowerup) {
        const pulse = 0.7 + 0.3 * Math.sin(d.t * 6);
        ctx.shadowColor = '#a855f7'; ctx.shadowBlur = 14 * pulse;
        ctx.strokeStyle = `rgba(168,85,247,${0.7 + 0.3 * pulse})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
          const px = Math.cos(a) * d.r, py = Math.sin(a) * d.r;
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.stroke();
         // Symbol inside
        const pu = STRINGS.powerups[d.key];
        ctx.font = 'bold 11px Nova Square, monospace';
        ctx.fillStyle = `rgba(168,85,247,${pulse})`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(pu ? pu.sym : '?', 0, 0);
      } else {
        // elements
        ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(0, 0, d.r, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 1; ctx.stroke();
        ctx.font = 'bold 9px Nova Square, monospace';
        ctx.fillStyle = '#00f5ff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        const item = STRINGS.items[d.key];
        ctx.fillText(item ? item.sym : '?', 0, 0);
      }
      ctx.restore();
    });
  }

  function drawPods() {
    pods.forEach(pod => {
      ctx.save();
      ctx.translate(pod.x, pod.y);
      const pulse = 0.6 + 0.4 * Math.sin(pod.t * 3);
      // Outer hex
      ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 18 * pulse;
      ctx.strokeStyle = `rgba(0,245,255,${0.6 + 0.4 * pulse})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const px = Math.cos(a) * pod.r, py = Math.sin(a) * pod.r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.stroke();
      // Inner hex
      ctx.strokeStyle = `rgba(0,245,255,0.3)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const px = Math.cos(a) * pod.r * 0.55, py = Math.sin(a) * pod.r * 0.55;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.stroke();
      // Symbol
      const pu = STRINGS.powerups[pod.puKey];
      ctx.font = 'bold 13px Nova Square, monospace';
      ctx.fillStyle = `rgba(0,245,255,${0.8 + 0.2 * pulse})`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 8;
      ctx.fillText(pu ? pu.sym : '?', 0, 0);
      ctx.restore();
    });
  }

  function drawFloaters() {
    floaters = floaters.filter(f => {
      f.y += f.vy * 0.016; f.life -= 0.016;
      ctx.save();
      ctx.globalAlpha = Math.min(1, f.life * 2);
      ctx.font = 'bold 11px Nova Square, monospace';
      ctx.fillStyle = f.color; ctx.textAlign = 'center';
      ctx.shadowColor = f.color; ctx.shadowBlur = 6;
      ctx.fillText(f.text, f.x, f.y);
      ctx.restore();
      return f.life > 0;
    });
  }

  // HUD UPDATES
  function updateHUD() {
    updateScoreHUD(); updateShieldBar(); updateAmmoBar(); updateCombo(); updatePowerupBar();
    document.getElementById('hud-level').textContent = run.level;
    document.getElementById('hud-best').textContent = save.highScore.toLocaleString();
  }
  function updateScoreHUD() {
    document.getElementById('hud-score').textContent = run.score.toLocaleString();
    const menuHs = document.getElementById('menu-highscore');
    if (menuHs) menuHs.textContent = save.highScore.toString().padStart(6,'0');
  }
  function updateShieldBar() {
    document.getElementById('shield-bar').style.width = (run.shield/run.shieldMax*100)+'%';
  }
  function updateAmmoBar() {
    document.getElementById('ammo-bar').style.width = (run.ammo/run.ammoMax*100)+'%';
  }
  function updateCombo() {
    const el = document.getElementById('hud-combo');
    if (run.combo > 1) { el.textContent = '× ' + run.combo; el.classList.add('active'); }
    else { el.classList.remove('active'); }
  }
  function updatePowerupBar() {
    const slotsEl = document.getElementById('pu-slots');
    if (!slotsEl || !run) return;
    slotsEl.innerHTML = '';
    for (let i = 0; i < run.reserveMax; i++) {
      const slot = document.createElement('div');
      const pu = run.powerups[i] ? STRINGS.powerups[run.powerups[i]] : null;
      slot.className = 'pu-slot' + (pu ? ' filled' : '');
      slot.dataset.idx = i;
      slot.innerHTML = pu
        ? `<span class="pu-slot-sym">${pu.sym}</span><span class="pu-slot-name">${pu.name}</span>`
        : `<span class="pu-slot-name">EMPTY</span>`;
      slotsEl.appendChild(slot);
    }
    const stashEl = document.getElementById('pu-stash');
    if (stashEl) {
      const puKeys = Object.keys(STRINGS.powerups);
      const stashCount = puKeys.reduce((n, k) => n + (run.inventory[k] || 0), 0);
      stashEl.textContent = stashCount > 0 ? `STASH  [${stashCount}]` : 'STASH';
    }
  }

  function logPickup(text) {
    const log = document.getElementById('pickup-log');
    const el = document.createElement('div');
    el.className = 'pickup-entry';
    el.textContent = '+ ' + text;
    log.appendChild(el);
    if (log.children.length > 5) log.removeChild(log.firstChild);
    setTimeout(() => el.remove(), 3100);
  }

  function dist(x1,y1,x2,y2) { const dx=x2-x1,dy=y2-y1; return Math.sqrt(dx*dx+dy*dy); }

  return { init, startLevel, startBoss, startApotheosis, resize, triggerPowerup,
           togglePause,
           triggerSweepPublic: triggerSweep,
           logPickupPublic: logPickup,
           flashStashPublic: flashStash,
           updatePowerupBarPublic: updatePowerupBar,
           triggerApoAttackPublic: triggerApoAttack };
})();


// ANIMATED COUNT-UP

function countUp(el, target, durationMs = 1200, prefix = "", suffix = "") {
  const start = performance.now();
  const startVal = 0;
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / durationMs, 1);
    const current = Math.round(startVal + (target - startVal) * easeOut(progress));
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}


// SHOP

let shopMode = 'buy';
let selectedCardKey = null;
const craftProgress = {}; // puKey → ingredient keys already slotted; reset on tab switch

// Staging
const stagingQueue = [];

function stagingCost(key, tier) {
  if (shopMode === 'buy')  return tier === 'element' ? 80 : 150;
  if (shopMode === 'sell') {
    const SELL = { element:40, compound:90, alloy:130 };
	return (tier === 'alloy' && key === 'OMEGITE') ? 250 : (SELL[tier] || 40);
  }
  return 0;
}

function renderStaging() {
  const list  = document.getElementById('staging-list');
  const total = document.getElementById('staging-total');
  if (!list) return;

  list.innerHTML = '';
  if (stagingQueue.length === 0) {
    if (total) total.textContent = '';
    return;
  }

  stagingQueue.forEach((entry, idx) => {
    const pu   = STRINGS.powerups[entry.key];
    const item = STRINGS.items[entry.key];
    const sym  = pu ? pu.sym : item ? item.sym : '?';
    const name = pu ? pu.name : item ? item.name : entry.key;
    const cost = stagingCost(entry.key, entry.tier);

    // Check if batch is possible
    const canAddMore = entry.ingredients
      ? canAutoConsume(entry.key, entry.tier)
      : false;

    const row = document.createElement('div');
    row.className = 'staging-row';
    row.innerHTML =
      `<span class="staging-row-sym">${sym}</span>` +
      `<span class="staging-row-name">${name}</span>` +
      `<span class="staging-row-qty">` +
        `<button class="staging-qty-btn" data-idx="${idx}" data-dir="-1">−</button>` +
        `<span class="staging-qty-val">${entry.qty}</span>` +
        `<button class="staging-qty-btn" data-idx="${idx}" data-dir="1"` +
          (entry.ingredients && !canAddMore ? ' disabled style="opacity:0.25"' : '') +
        `>+</button>`;
    list.appendChild(row);
  });

  // Quantity buttons
  list.querySelectorAll('.staging-qty-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (btn.disabled) return;
      const idx = parseInt(btn.dataset.idx);
      const dir = parseInt(btn.dataset.dir);
      const entry = stagingQueue[idx];

      if (dir === -1) {
        // Refund
        entry.qty--;
        if (entry.ingredients) refundOneBatch(entry);
        if (entry.qty < 1) stagingQueue.splice(idx, 1);
      } else {
        // Craft
        if (entry.ingredients) {
          if (canAutoConsume(entry.key, entry.tier)) {
            autoConsume(entry.key, entry.tier);
            entry.qty++;
          }
        } else if (shopMode === 'buy') {
          const price = stagingCost(entry.key, entry.tier);
          const otherCost = stagingQueue.reduce((s, e, i) =>
            i !== idx ? s + stagingCost(e.key, e.tier) * e.qty : s, 0);
          const maxAffordable = Math.floor((run.credits - otherCost) / price);
          entry.qty = Math.min(entry.qty + 1, Math.max(1, maxAffordable));
        } else if (shopMode === 'sell') {
          const maxSell = run.inventory[entry.key] || 0;
          entry.qty = Math.min(entry.qty + 1, maxSell);
        } else {
          entry.qty++;
        }
      }
      renderStaging();
      if (shopMode === 'craft') renderShopBody(); // refresh ingredient counts
    });
  });

  // Running total
  if (total) {
    if (shopMode === 'buy') {
      let sum = 0;
      stagingQueue.forEach(e => { sum += stagingCost(e.key, e.tier) * e.qty; });
      total.textContent = `TOTAL: ${sum}¢`;
    } else if (shopMode === 'sell') {
      let sum = 0;
      stagingQueue.forEach(e => { sum += stagingCost(e.key, e.tier) * e.qty; });
      total.textContent = `EARN: +${sum}¢`;
    } else {
      const count = stagingQueue.reduce((s, e) => s + e.qty, 0);
      total.textContent = `${count} ITEM${count !== 1 ? 'S' : ''} TO CRAFT`;
    }
  }
}

function clearStaging() {
  // Refund ingredients
  stagingQueue.forEach(entry => {
    if (entry.ingredients) {
      for (let i = 0; i < entry.qty; i++) refundOneBatch(entry);
    }
  });
  stagingQueue.length = 0;
  renderStaging();
}

// Craft helpers
function resolveIngredientBatch(key, tier) {
  if (!run) return null;
  const variants = tier === 'alloy' ? ALLOY_VARIANTS[key] : COMPOUND_VARIANTS[key];
  if (!variants) return null;
  for (const v of variants) {
    const needed = tier === 'alloy' ? v.map(r => r.key) : [...v];
    // Check inventory has all needed ingredients
    const counts = {};
    let ok = true;
    for (const k of needed) {
      counts[k] = (counts[k] || 0) + 1;
    }
    for (const [k, n] of Object.entries(counts)) {
      if ((run.inventory[k] || 0) < n) { ok = false; break; }
    }
    if (ok) return needed;
  }
  return null;
}

function canAutoConsume(key, tier) {
  return resolveIngredientBatch(key, tier) !== null;
}

function autoConsume(key, tier) {
  const batch = resolveIngredientBatch(key, tier);
  if (!batch) return null;
  for (const k of batch) run.inventory[k] = Math.max(0, (run.inventory[k] || 0) - 1);
  return batch;
}

function refundOneBatch(entry) {
  for (const k of entry.ingredients) {
    run.inventory[k] = Math.min(99, (run.inventory[k] || 0) + 1);
  }
}

function stageCraftJob(key, tier) {
  if (!run) return;
  const progress = craftProgress[key];
  if (!progress || progress.length === 0) return;
  const ingredients = [...progress];
  delete craftProgress[key];
  const existing = stagingQueue.find(e => e.key === key && e.ingredients);
  if (existing) {
     // Validate ingredients
     if (!progress || progress.length === 0) return; // ← no new ingredients
     existing.qty++;
     existing.ingredients = [...existing.ingredients, ...progress]; // IMPORTANT LOOK HERE FOR BATCH FIXING
  } else {
    stagingQueue.push({ key, tier, qty: 1, ingredients });
  }
  renderStaging();
}

function stageItem(key, tier) {
  if (!run) return;
  if (shopMode === 'buy') {
    const price = tier === 'element' ? 80 : 150;
    const alreadyCommitted = stagingQueue.reduce((s, e) => s + stagingCost(e.key, e.tier) * e.qty, 0);
    if (run.credits - alreadyCommitted < price) { showShopToast('Not enough credits!'); return; }
  }
  if (shopMode === 'sell') {
    const alreadyStaged = stagingQueue.find(e => e.key === key)?.qty || 0;
    if (alreadyStaged >= (run.inventory[key] || 0)) { showShopToast('No more to sell!'); return; }
  }
  const existing = stagingQueue.find(e => e.key === key);
  if (existing) existing.qty++;
  else stagingQueue.push({ key, tier, qty: 1 });
  renderStaging();
}

// So we can toast... to the end of the world
let _toastTimer = null;
function showShopToast(msg) {
  const el = document.getElementById('shop-toast');
  if (!el) return;
  clearTimeout(_toastTimer);
  el.textContent = msg;
  el.classList.add('visible');
  _toastTimer = setTimeout(() => el.classList.remove('visible'), 1500);
}

function commitStaging() {
  if (!run || stagingQueue.length === 0) return;
  if (shopMode === 'buy') {
    const total = stagingQueue.reduce((s, e) => s + stagingCost(e.key, e.tier) * e.qty, 0);
    if (run.credits < total) { showShopToast('Not enough credits!'); return; }
    stagingQueue.forEach(({ key, tier, qty }) => {
      run.credits -= stagingCost(key, tier) * qty;
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + qty);
    });
    showShopToast(`Bought ${stagingQueue.reduce((s, e) => s + e.qty, 0)} item(s)!`);
  } else if (shopMode === 'sell') {
    stagingQueue.forEach(({ key, tier, qty }) => {
      const available = run.inventory[key] || 0;
      const actual = Math.min(qty, available);
      run.inventory[key] = available - actual;
      run.credits += stagingCost(key, tier) * actual;
    });
    showShopToast(`Sold ${stagingQueue.reduce((s, e) => s + e.qty, 0)} item(s)!`);
  } else if (shopMode === 'craft') {
     const count = stagingQueue.reduce((s, e) => s + e.qty, 0);
     stagingQueue.forEach(({ key, qty }) => {
       run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + qty);
     });
     stagingQueue.forEach(entry => { delete entry.ingredients; }); // ← strip before clearStaging
     showShopToast(`Crafted ${count} item${count !== 1 ? 's' : ''}!`);
   }
  clearStaging();
  refresh();
  renderShopBody();
}


// CRAFT RECIPE VARIANTS

const COMPOUND_VARIANTS = {
  // Mixed recipes listed first so early drops don't lock out the other ingredient
  LITHEBRYL:    [ ['Be','Ti'], ['Li','Be'], ['Be','Be'] ],
  NITROKALIUM:  [ ['N','K'],   ['N','N'],   ['K','K']   ],
  CARBOSILICUM: [ ['Si','C'],  ['Si','Si'], ['C','C']   ],
  MAGNIUM:      [ ['Li','Mg'], ['Mg','K'],  ['Mg','Mg'] ],
  TITANE:       [ ['Ti','N'],  ['Ti','Ti']              ],
  ALKALIUM:     [ ['Si','K'],  ['Si','N']               ],
  AZOLITHION:   [ ['Li','N'],  ['Li','Li']              ],
  GAMMITE:      [ ['Si','Ti'], ['Si','Be']              ],
};

const ALLOY_VARIANTS = {
  DELTALITE: [
    [{key:'LITHEBRYL'},{key:'TITANE'},{key:'NITROKALIUM'}],
    [{key:'LITHEBRYL'},{key:'TITANE'},{key:'TITANE'}],
    [{key:'LITHEBRYL'},{key:'LITHEBRYL'},{key:'NITROKALIUM'}],
    [{key:'LITHEBRYL'},{key:'LITHEBRYL'},{key:'TITANE'}],
    [{key:'LITHEBRYL'},{key:'LITHEBRYL'},{key:'LITHEBRYL'}],
  ],
  PHIOMEGA: [
    [{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'CARBOSILICUM'},{key:'CARBOSILICUM'}],
    [{key:'ALKALIUM'},{key:'ALKALIUM'}],
  ],
  AXORITE: [
    [{key:'MAGNIUM'},{key:'NITROKALIUM'},{key:'LITHEBRYL'}],
    [{key:'MAGNIUM'},{key:'NITROKALIUM'},{key:'NITROKALIUM'}],
    [{key:'MAGNIUM'},{key:'NITROKALIUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'LITHEBRYL'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'NITROKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'LITHEBRYL'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'NITROKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'ALKALIUM'}],
  ],
  OMEGITE: [
    [{key:'MAGNIUM'},{key:'CARBOSILICUM'},{key:'LITHEBRYL'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'CARBOSILICUM'},{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'}],
    [{key:'TITANE'},{key:'CARBOSILICUM'},{key:'LITHEBRYL'},{key:'ALKALIUM'}],
    [{key:'TITANE'},{key:'CARBOSILICUM'},{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'TITANE'},{key:'ALKALIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'TITANE'}],
  ],
};

function resolveCompoundVariant(puKey, progress) {
  const variants = COMPOUND_VARIANTS[puKey];
  if (!variants) return null;
  if (!progress || progress.length === 0) return { puKey, recipe: variants[0] };
  for (const v of variants) {
    const remaining = [...v];
    let ok = true;
    for (const dropped of progress) {
      const idx = remaining.indexOf(dropped);
      if (idx === -1) { ok = false; break; }
      remaining.splice(idx, 1);
    }
    if (ok) return { puKey, recipe: v };
  }
  return { puKey, recipe: variants[0] };
}

function resolveAlloyVariant(puKey, progress) {
  const variants = ALLOY_VARIANTS[puKey];
  if (!variants) return null;
  if (!progress || progress.length === 0) return { puKey, recipe: variants[0] };
  for (const v of variants) {
    const remaining = v.map(r => r.key);
    let ok = true;
    for (const dropped of progress) {
      const idx = remaining.indexOf(dropped);
      if (idx === -1) { ok = false; break; }
      remaining.splice(idx, 1);
    }
    if (ok) return { puKey, recipe: v };
  }
  return { puKey, recipe: variants[0] };
}

function isValidIngredientForAnyVariant(puKey, tier, dragKey, dragTier, progress) {
  if (tier === 'compound' && dragTier === 'element') {
    const variants = COMPOUND_VARIANTS[puKey];
    if (!variants) return false;
    for (const v of variants) {
      const remaining = [...v];
      let ok = true;
      for (const dropped of progress) {
        const idx = remaining.indexOf(dropped);
        if (idx === -1) { ok = false; break; }
        remaining.splice(idx, 1);
      }
      if (ok && remaining.includes(dragKey)) return true;
    }
    return false;
  }
  if (tier === 'alloy' && dragTier === 'compound') {
    const variants = ALLOY_VARIANTS[puKey];
    if (!variants) return false;
    for (const v of variants) {
      const remaining = v.map(r => r.key);
      let ok = true;
      for (const dropped of progress) {
        const idx = remaining.indexOf(dropped);
        if (idx === -1) { ok = false; break; }
        remaining.splice(idx, 1);
      }
      if (ok && remaining.includes(dragKey)) return true;
    }
    return false;
  }
  return false;
}	

// Action Box Labels
const ACTION_BOX_LABELS = {
  buy:   { cls: 'buy-box'   },
  sell:  { cls: 'sell-box'  },
  craft: { cls: 'craft-box' },
  stash: { cls: ''          },
};

function switchCraftSection(openThis) {
  document.querySelectorAll('.craft-section').forEach(grid => {
    const isOpen = grid.dataset.section === openThis;
    grid.style.display = isOpen ? 'grid' : 'none';
  });

  document.querySelectorAll('.shop-section-label.collapsible').forEach(label => {
    const isOpen = label.dataset.section === openThis;
    label.textContent = label.textContent.replace(/[▸▾]/, isOpen ? '▾' : '▸');
  });
}

function shopTab(tab) {
  // Upgrade mode lock
  if (tab !== 'upgrade') shopMode = tab; 
  else shopMode = 'stash'; // Default to stash if 'upgrade' is passed
  selectedCardKey = null;
  // Refund
  Object.entries(craftProgress).forEach(([puKey, slots]) => {
    slots.forEach(ingredientKey => {
      run.inventory[ingredientKey] = (run.inventory[ingredientKey] || 0) + 1;
    });
    delete craftProgress[puKey];
  });
  ['buy','sell','craft','stash','upgrade'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.classList.toggle('active', t === tab);
  });
  // Update box label
  const box = document.getElementById('shop-action-box');
  if (box) {
    const cfg = ACTION_BOX_LABELS[tab] || ACTION_BOX_LABELS.buy;
    box.className = 'shop-action-box ' + cfg.cls;
  }
  const staging = document.getElementById('shop-staging');
  if (staging) staging.style.display = tab === 'stash' ? 'none' : 'flex';
  const confirmBtn = document.getElementById('btn-shop-action');
  if (confirmBtn) {
    const labels = { buy: 'BUY ALL', sell: 'SELL ALL', craft: 'CRAFT ALL' };
    confirmBtn.textContent = labels[tab] ?? '';
  }
	
  // Reset info panel
  clearItemInfo();
  clearIngredientHighlights();
  clearStaging();
  renderShopBody();
  updateShopStats();
  updateShopReserves();
}

// Info panel
function clearItemInfo() {
  const panel = document.getElementById('shop-info-panel');
  if (panel) panel.innerHTML = '<div class="shop-info-empty">TAP ANY CARD FOR INFO</div>';
}
// Clear highlights
function clearIngredientHighlights() {
  document.querySelectorAll('.recipe-ingredient, .recipe-ingredient--owned').forEach(el => {
    el.classList.remove('recipe-ingredient', 'recipe-ingredient--owned');
  });
}
// Ingredient highlights
function highlightIngredientCards(puKey, tier) {
  clearIngredientHighlights();
  const allKeys = new Set();
  if (tier === 'compound') {
    const variants = COMPOUND_VARIANTS[puKey];
    if (variants) variants.forEach(v => v.forEach(k => allKeys.add(k)));
  } else if (tier === 'alloy') {
    const variants = ALLOY_VARIANTS[puKey];
    if (variants) variants.forEach(v => v.forEach(r => allKeys.add(r.key)));
  }
  allKeys.forEach(key => {
    const candidates = document.querySelectorAll(
      `#shop-body .shop-card[data-card-key="${key}"][data-card-tier="element"],` +
      `#shop-body .shop-card[data-card-key="${key}"][data-card-tier="compound"]`
    );
    candidates.forEach(card => {
      if (card.querySelector('.craft-lights')) return; // skip craft target cards
      const qty = run?.inventory[key] || 0;
      card.classList.add(qty > 0 ? 'recipe-ingredient--owned' : 'recipe-ingredient');
    });
  });
}

function showItemInfo(key, tier) {
  const panel = document.getElementById('shop-info-panel');
  if (!panel) return;
  let sym, name, effect, power, desc, price;
  const symClass = tier === 'compound' ? 'compound' : tier === 'alloy' ? 'alloy' : '';
  if (tier === 'element') {
    const item = STRINGS.items[key];
    if (!item) return;
    sym = item.sym; name = item.name; effect = item.effect; desc = item.desc;
    price = 'BUY 80¢ · SELL 40¢';
  } else {
    const pu = STRINGS.powerups[key];
    if (!pu) return;
    sym = pu.sym; name = pu.name; effect = pu.effect; power = pu.power; desc = pu.desc;
    if (tier === 'compound') {
      price = 'BUY 150¢ · SELL 90¢';
    } else if (tier === 'alloy') {
      price = key === 'OMEGITE' ? 'SELL 250¢' : 'SELL 200¢';
    } else {
      price = 'BUY 150¢';
    }
  }
  panel.innerHTML =
    `<div class="shop-info-sym ${symClass}">${sym}</div>` +
    `<div class="shop-info-name">${name}</div>` +
    (effect ? `<div class="shop-info-effect">EXPEND: ${effect}</div>` : '') +
    (power  ? `<div class="shop-info-power">TRIGGER: ${power}</div>` : '') +
    (desc   ? `<div class="shop-info-desc">${desc}</div>` : '') +
    (price  ? `<div class="shop-info-price">${price}</div>` : '');
}

const STAT_CAPS = {
  shootSpeed:       12,
  ammoMax:         300,
  shieldMax:       100,
  reserveMax:        8,
  ammoRefillRate:   10,   // each unit ≈ +10 ammo per interval
};


function updateShopStats() {
  if (!run) return;
  //Ammo refill rate, max 10
  const refRate = run.ammoRefillRate;
  document.getElementById('stat-val-refill').textContent = refRate;
  document.getElementById('stat-bar-refill').style.width = Math.min(100, (refRate / STAT_CAPS.ammoRefillRate) * 100) + '%';
  // Ammo max: default 50 (base 65 in newRun... using ammoMax), display cap 300
  const ammo = run.ammoMax;
  document.getElementById('stat-val-ammo').textContent   = ammo;
  document.getElementById('stat-bar-ammo').style.width   = Math.min(100, (ammo / 300) * 100) + '%';
  // Shield max: default 10, max 100
  const shld = run.shieldMax;
  document.getElementById('stat-val-shield').textContent = shld;
  document.getElementById('stat-bar-shield').style.width = Math.min(100, (shld / 100) * 100) + '%';
  // Reserve: default 3, max 8
  const res = run.reserveMax;
  document.getElementById('stat-val-reserve').textContent = res;
  document.getElementById('stat-bar-reserve').style.width = Math.min(100, (res / 8) * 100) + '%';
}

function updateShopReserves() {
  if (!run) return;
  const el = document.getElementById('shop-reserve-slots');
  if (!el) return;

  //  Upgrade Action Box
  if (isUpgradeSession) {
    const key = run.inventory._upgradeSlot;
    const pu = key ? STRINGS.powerups[key] : null;
    el.innerHTML = `
      <div class="shop-upgrade-container" style="width:100%; padding: 5px 0;">
        <div class="shop-reserve-slot filled" id="upgrade-drop-zone" style="width:100%; height:44px; flex-direction:row; gap:12px; justify-content:flex-start; padding-left:15px;">
           <span class="shop-reserve-sym" style="font-size:22px;">${pu ? pu.sym : '⇮'}</span>
           <div style="display:flex; flex-direction:column; align-items:flex-start;">
             <span class="shop-reserve-name" style="color:#fff; font-size:10px;">${pu ? pu.name : 'EMPTY'}</span>
             <span style="font-size:7px; color:rgba(255,255,255,0.4);">${pu ? 'EQUIPPED' : 'EQUIP UPGRADE'}</span>
           </div>
        </div>
      </div>
    `;
    return;
  }

  el.innerHTML = '';
  for (let i = 0; i < run.reserveMax; i++) {
    const slot = document.createElement('div');
    const key = run.powerups[i] || null; 
    slot.className = 'shop-reserve-slot' + (key ? ' filled' : '');
    slot.dataset.slot = i;
    slot.dataset.key = key || '';
    if (key && STRINGS.powerups[key]) {
      const pu = STRINGS.powerups[key];
      slot.innerHTML = `<span class="shop-reserve-sym">${pu.sym}</span><span class="shop-reserve-name">${pu.name}</span>`;
    } else {
      slot.innerHTML = '<span class="shop-reserve-name">EMPTY</span>';
    }
    el.appendChild(slot);
  }
}

// Shop Deco
(function() {
  const DECO_SIZE   = 60;  
  const CX          = 30;  
  const CY          = 30;  
  const BODY_R      = 6;    
  const ORBIT_R_X   = 10;   
  const ORBIT_R_Y   = 6;    
  const SMALL_R     = 2;   
  const ORBIT_SPEED = 0.04; 

  let angle    = 0;
  let decoRAF  = null;
  let decoCtx  = null;

  function initShopDeco() {
    const cv = document.getElementById('shop-powerup-deco');
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    cv.width  = DECO_SIZE * dpr;
    cv.height = DECO_SIZE * dpr;
    cv.style.width  = DECO_SIZE + 'px';
    cv.style.height = DECO_SIZE + 'px';
    decoCtx = cv.getContext('2d');
    decoCtx.scale(dpr, dpr);
  if (!decoRAF) decoRAF = requestAnimationFrame(renderShopDeco);
}

  function stopShopDeco() {
    if (decoRAF) { cancelAnimationFrame(decoRAF); decoRAF = null; }
  }

  function renderShopDeco() {
    if (!decoCtx) return;
    decoCtx.clearRect(0, 0, DECO_SIZE, DECO_SIZE);

    angle += ORBIT_SPEED;
    const inBack = Math.sin(angle + ORBIT_SPEED) < 0;

    // Orbiting star
    const ox = CX + Math.cos(angle) * ORBIT_R_X;
    const oy = CY + Math.sin(angle) * ORBIT_R_Y;
    const depthAlpha = (Math.sin(angle) + 1) * 0.4 + 0.2;

    function drawSmallStar() {
      if (Math.sin(angle) <= -0.1 && depthAlpha <= 0.3) return;
      decoCtx.save();
      decoCtx.globalAlpha = depthAlpha;
      decoCtx.shadowColor = 'rgba(255,215,0,0.9)';
      decoCtx.shadowBlur  = 4 * depthAlpha;
      decoCtx.fillStyle   = 'rgba(255,215,0,0.9)';
      decoCtx.beginPath();
      decoCtx.arc(ox, oy, SMALL_R, 0, Math.PI * 2);
      decoCtx.fill();
      decoCtx.restore();
    }

    function drawMainStar() {
      decoCtx.save();
      decoCtx.shadowColor = 'white';
      decoCtx.shadowBlur  = 8;
      decoCtx.strokeStyle = 'rgba(255,215,0,0.9)';
      decoCtx.lineWidth   = 1;
      decoCtx.beginPath();
      decoCtx.arc(CX, CY, BODY_R, 0, Math.PI * 2);
      decoCtx.stroke(); 
      decoCtx.restore();

      // Ping
      const pingProgress = (Date.now() % 1200) / 1200;
      const rippleR      = BODY_R + pingProgress * 18;
      const rippleAlpha  = (1 - pingProgress) * 0.3;
      decoCtx.save();
      decoCtx.strokeStyle = `rgba(255,215,0,${rippleAlpha})`;
      decoCtx.lineWidth   = 1.5;
      decoCtx.beginPath();
      decoCtx.arc(CX, CY, rippleR, 0, Math.PI * 2);
      decoCtx.stroke();
      decoCtx.restore();
    }

    // Draw order
    if (inBack) {
      drawSmallStar();
      drawMainStar();
    } else {
      drawMainStar();
      drawSmallStar();
    }

    decoRAF = requestAnimationFrame(renderShopDeco);
  }

  // Expose so shopTab() can start/stop it
  window.initShopDeco = initShopDeco;
  window.stopShopDeco = stopShopDeco;
})();

function renderShopBody() {
  const body = document.getElementById('shop-body');
  body.innerHTML = '';
  document.getElementById('shop-credits').textContent = run ? run.credits + '¢' : '0¢';

  if (shopMode === 'buy') {
    // Elements  (buy mode)
    const label = document.createElement('div');
    label.className = 'shop-section-label'; label.textContent = 'ELEMENTS';
    body.appendChild(label);
    const grid = document.createElement('div'); grid.className = 'shop-grid';
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const price = 80;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = 'element'; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${item.sym}</div><div class="shop-card-name">${item.name}</div><div class="shop-card-corner"><div class="shop-card-count">${(run?.inventory[key]||0)}/99</div><div class="shop-card-price">${price}¢</div></div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'element');
      };
      grid.appendChild(card);
    });
    body.appendChild(grid);

    // Compounds (buy mode)
    if (run && run.storyFlags >= 4) {
      const label2 = document.createElement('div');
      label2.className = 'shop-section-label'; label2.style.marginTop='16px'; label2.textContent = 'POWERUPS';
      body.appendChild(label2);
      const grid2 = document.createElement('div'); grid2.className = 'shop-grid';
      const BUY_EXCLUDED_POWERUPS = new Set(['OMEGITE','AXORITE','PHIOMEGA','DELTALITE']);
      Object.entries(STRINGS.powerups).filter(([key]) => !BUY_EXCLUDED_POWERUPS.has(key)).forEach(([key, pu]) => {
        const price = 150;
        const card = document.createElement('div'); card.className = 'shop-card obj';
        card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = '1';
        card.innerHTML = `<div class="shop-card-sym">${pu.sym}</div><div class="shop-card-name">${pu.name}</div><div class="shop-card-corner"><div class="shop-card-count">${(run?.inventory[key]||0)}/99</div><div class="shop-card-price">${price}¢</div></div>`;
        card.onclick = () => {
          document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          showItemInfo(key, 'compound');
        };
        grid2.appendChild(card);
      });
      body.appendChild(grid2);
    }

  } else if (shopMode === 'sell') {

    const COMPOUND_KEYS = { LITHEBRYL:90, NITROKALIUM:90, CARBOSILICUM:90, MAGNIUM:90, TITANE:90, ALKALIUM:90, AZOLITHION:90, GAMMITE:90 }; // Shop Pricing
    const ALLOY_KEYS    = { OMEGITE:250, AXORITE:200, PHIOMEGA:200, DELTALITE:200 }; // More Shop Pricing

    function makeSellCard(sym, name, effect, qty, price, key, tier) {
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = tier || 'element'; card.dataset.cardPrice = price; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${sym}</div><div class="shop-card-name">${name}</div><div class="shop-card-corner"><div class="shop-card-count">${qty}</div><div class="shop-card-price">SELL ${price}¢</div></div>`;
      card.onclick = () => {
        const alreadySelected = card.classList.contains('selected');
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, tier || 'element');
      };
      return card;
    }

    function makeSection(labelText) {
      const label = document.createElement('div');
      label.className = 'shop-section-label'; label.textContent = labelText;
      return label;
    }

    let hasItems = false;

    // ELEMENTS (sell mode)
    const elGrid = document.createElement('div'); elGrid.className = 'shop-grid';
    Object.entries(run?.inventory || {}).forEach(([key, qty]) => {
      if (qty <= 0) return;
      const item = STRINGS.items[key];
      if (!item) return;
      hasItems = true;
      elGrid.appendChild(makeSellCard(item.sym, item.name, item.effect, qty, 40, key, 'element'));
    });
    if (elGrid.children.length) {
      body.appendChild(makeSection('ELEMENTS'));
      body.appendChild(elGrid);
    }

    // COMPOUNDS (sell mode)
    const compGrid = document.createElement('div'); compGrid.className = 'shop-grid';
    Object.entries(COMPOUND_KEYS).forEach(([key, price]) => {
      const qty = run?.inventory[key] || 0;
      if (qty <= 0) return;
      const pu = STRINGS.powerups[key];
      hasItems = true;
      compGrid.appendChild(makeSellCard(pu.sym, pu.name, pu.desc, qty, price, key, 'compound'));
    });
    if (compGrid.children.length) {
      const lbl = makeSection('COMPOUNDS'); lbl.style.marginTop = '16px';
      body.appendChild(lbl);
      body.appendChild(compGrid);
    }

    // ALLOYS (sell mode)
    const alloyGrid = document.createElement('div'); alloyGrid.className = 'shop-grid';
    Object.entries(ALLOY_KEYS).forEach(([key, price]) => {
      const qty = run?.inventory[key] || 0;
      if (qty <= 0) return;
      const pu = STRINGS.powerups[key];
      hasItems = true;
      alloyGrid.appendChild(makeSellCard(pu.sym, pu.name, pu.desc, qty, price, key, 'alloy'));
    });
    if (alloyGrid.children.length) {
      const lbl = makeSection('ALLOYS'); lbl.style.marginTop = '16px';
      body.appendChild(lbl);
      body.appendChild(alloyGrid);
    }

    if (!hasItems) {
      const empty = document.createElement('div');
      empty.style.cssText = 'font-size:11px;color:rgba(255,255,255,0.2);padding:20px;letter-spacing:0.1em';
      empty.textContent = 'NO ITEMS TO SELL';
      body.appendChild(empty);
    }

  } else if (shopMode === 'craft') {

    // INGREDIENTS (craft mode)
    const labelEl = document.createElement('div');
    labelEl.className = 'shop-section-label collapsible';
    labelEl.textContent = 'ELEMENTS ▸';
    labelEl.dataset.section = 'craft-elements';
    body.appendChild(labelEl);
	labelEl.addEventListener('click', () => switchCraftSection('craft-elements'));
    const gridEl = document.createElement('div');
    gridEl.className = 'shop-grid craft-section';
    gridEl.dataset.section = 'craft-elements';
    gridEl.style.display = 'none';

    // Elements  (craft mode)
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey = key; card.dataset.cardTier = 'element'; card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym">${item.sym}</div>` +
        `<div class="shop-card-name">${item.name}</div>` +
        `<span class="stash-count">${qty}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'element');
        clearIngredientHighlights();
      };
      gridEl.appendChild(card);
    });
    body.appendChild(gridEl);

    const labelCo = document.createElement('div');
    labelCo.className = 'shop-section-label collapsible';
    labelCo.textContent = 'COMPOUNDS ▸';
    labelCo.dataset.section = 'craft-compounds';
    body.appendChild(labelCo); labelCo.addEventListener('click', () => switchCraftSection('craft-compounds'));
    const gridCo = document.createElement('div');
    gridCo.className = 'shop-grid craft-section';
    gridCo.dataset.section = 'craft-compounds';
    gridCo.style.display = 'none';

    // Compounds (craft mode)
    Object.keys(COMPOUND_VARIANTS).forEach(key => {
      const pu = STRINGS.powerups[key];
      if (!pu) return;
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym" style="color:${has ? 'var(--purple)' : 'rgba(168,85,247,0.25)'}">${pu.sym}</div>` +
        `<div class="shop-card-name">${pu.name}</div>` +
        `<span class="stash-count" style="color:var(--purple)">${qty}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'compound');
        highlightIngredientCards(key, 'compound');
      };
      gridCo.appendChild(card);
    });
    body.appendChild(gridCo);

    // CRAFT
    const labelCraft = document.createElement('div');
    labelCraft.className = 'shop-section-label'; labelCraft.style.marginTop = '4px'; labelCraft.textContent = 'CRAFT';
    body.appendChild(labelCraft);
    const gridCraft = document.createElement('div'); gridCraft.className = 'shop-grid';

    Object.keys(COMPOUND_VARIANTS).forEach(key => {
      const pu = STRINGS.powerups[key];
      if (!pu) return;
      const invQty = run?.inventory[key] || 0;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = '0';
      const resolvedRecipe = resolveCompoundVariant(key, craftProgress[key] || [])?.recipe || Object.values(COMPOUND_VARIANTS[key])[0];
      const lightsHTML = resolvedRecipe.map(() => `<span class="craft-light off"></span>`).join('');
      card.innerHTML =
        `<div class="shop-card-sym" style="color:var(--purple)">${pu.sym}</div>` +
        `<div class="shop-card-name">${pu.name}</div>` +
        `<div class="shop-card-progress">` +
          `<span class="craft-inv-count${invQty > 0 ? ' has' : ''}">${invQty}</span>` +
          `<div class="craft-lights">${lightsHTML}</div>` +
        `</div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'compound');
        highlightIngredientCards(key, 'compound');
        switchCraftSection('craft-elements');
      };
      gridCraft.appendChild(card);
    });
    body.appendChild(gridCraft);

    // ALLOYS  (craft mode)
    const labelAlloy = document.createElement('div');
    labelAlloy.className = 'shop-section-label';
    labelAlloy.style.marginTop = '4px';
    labelAlloy.textContent = 'ALLOYS';
    body.appendChild(labelAlloy);

    const alloys = [
      {
        sym: 'Ω', name: 'Omegite', puKey: 'OMEGITE',
        recipe: [
          { key: 'MAGNIUM',     label: 'Μ Magnium'   },
          { key: 'ALKALIUM', label: 'α Alkalium'  },
          { key: 'TITANE', label: 'Θ Titane'  },
        ],
        effect: 'Reserve +3, All Stats +3 — Irradiation',
        desc: 'A terrifyingly unstable material that exists in a state of constant decay.',
      },
      {
        sym: 'Χ', name: 'Axorite', puKey: 'AXORITE',
        recipe: [
          { key: 'MAGNIUM',     label: 'Μ Magnium'  },
          { key: 'TITANE', label: 'Θ Titane' },
        ],
        effect: 'Shield Max +25, Reserve +2 — Full Restore',
        desc: 'A highly versatile multi-application metal alloy that is used in both defense and munitions.',
      },
      {
        sym: 'Φ', name: 'PhiOmega', puKey: 'PHIOMEGA',
        recipe: [
          { key: 'CARBOSILICUM', label: 'Ξ Carbosilicium' },
          { key: 'ALKALIUM',   label: 'α Alkalium'  },
        ],
        effect: 'Ammo Max +30, Shoot Spd +6 — Bullet Shift',
        desc: 'A perfectly lossless superconductor that expels magnetic fields, ideal for maximizing ammo velocity and efficiency.',
      },
      {
        sym: '∇', name: 'Deltalite', puKey: 'DELTALITE',
        recipe: [
          { key: 'LITHEBRYL', label: 'Β Lithebryl' },
          { key: 'NITROKALIUM',   label: 'Π Nitrokalium'  },
        ],
        effect: 'Shield Max +20, Shoot Spd +10 — Time Dilation',
        desc: 'A sophisticated Beryllium-based metal that can survive the friction of warp-speed travel.',
      },
    ];

    const gridAlloy = document.createElement('div'); gridAlloy.className = 'shop-grid';
    alloys.forEach(a => {
      const pu = STRINGS.powerups[a.puKey];
      const invQty = run?.inventory[a.puKey] || 0;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = a.puKey; card.dataset.cardTier = 'alloy'; card.dataset.draggable = '0';
      const lightsHTML = (resolveAlloyVariant(a.puKey, craftProgress[a.puKey] || [])?.recipe || a.recipe).map(() => `<span class="craft-light off"></span>`).join('');
      card.innerHTML =
        `<div class="shop-card-sym" style="color:var(--pink);font-size:14px">${a.sym}</div>` +
        `<div class="shop-card-name">${a.name}</div>` +
        `<div class="shop-card-progress">` +
          `<span class="craft-inv-count${invQty > 0 ? ' has' : ''}">${invQty}</span>` +
          `<div class="craft-lights">${lightsHTML}</div>` +
        `</div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(a.puKey, 'alloy');
        highlightIngredientCards(a.puKey, 'alloy');
		switchCraftSection('craft-compounds');
      };
      gridAlloy.appendChild(card);
    });
    body.appendChild(gridAlloy);

  } else if (shopMode === 'stash') {

    // ELEMENTS (stash mode)
    const labelEl = document.createElement('div');
    labelEl.className = 'shop-section-label'; labelEl.textContent = 'ELEMENTS';
    body.appendChild(labelEl);

    const gridEl = document.createElement('div'); gridEl.className = 'shop-grid';
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey  = key;
      card.dataset.cardTier = 'element';
      card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym">${item.sym}</div>` +
        `<div class="shop-card-name">${item.name}</div>` +
        `<span class="stash-count">${qty > 0 ? Math.min(qty, 99) : '0'}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'element');
      };
      gridEl.appendChild(card);
    });
    body.appendChild(gridEl);

    // COMPOUNDS (stash mode)
    const labelPu = document.createElement('div');
    labelPu.className = 'shop-section-label';
    labelPu.style.marginTop = '14px';
    labelPu.textContent = 'COMPOUNDS';
    body.appendChild(labelPu);

    const gridPu = document.createElement('div'); gridPu.className = 'shop-grid';
    Object.entries(STRINGS.powerups).forEach(([key, pu]) => {
      const invQty   = run?.inventory[key] || 0;
      const resCount = (run?.powerups || []).filter(k => k === key).length;
      const totalQty = invQty + resCount;
      const has = invQty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj pu-card ' + (totalQty > 0 ? 'stash-has' : 'stash-empty');
      card.dataset.puKey = key;
      card.dataset.cardKey  = key;
      card.dataset.cardTier = 'compound';
      card.dataset.draggable = has ? '1' : '0';

      let countHTML = '';
      if (invQty > 0 || resCount > 0) {
        const parts = [];
        if (invQty  > 0) parts.push(`<span style="color:var(--purple)">${Math.min(invQty,99)}</span>`);
        if (resCount > 0) parts.push(`<span style="color:rgba(0,245,255,0.5);font-size:6px">+${resCount}▣</span>`);
        countHTML = `<span class="stash-count" style="display:flex;flex-direction:column;align-items:flex-end;gap:1px">${parts.join('')}</span>`;
      } else {
        countHTML = `<span class="stash-count" style="color:rgba(255,255,255,0.18)">0</span>`;
      }

      card.innerHTML =
        `<div class="shop-card-sym">${pu.sym}</div>` +
        `<div class="shop-card-name">${pu.name}</div>` +
        countHTML;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const tier = ['OMEGITE','AXORITE','PHIOMEGA','DELTALITE'].includes(key) ? 'alloy' : 'compound';
        showItemInfo(key, tier);
      };
      gridPu.appendChild(card);
    });
    body.appendChild(gridPu);
  }
}

// Shop Continue button
function shopContinue() {
  run.level++;
  run.shootSpeed++;
  if (run.level === 9) {
    run.ammo = run.ammoMax;
    stopShopDeco();
    showScreen('game');
    Game.startBoss();
    return;
  }
  run.ammo = run.ammoMax; // refill ammo
  showScreen('game');
  Game.startLevel();
}


// STORY SCREEN
function getStoryLine(tier, flag) {
  const t = STRINGS.story[tier];
  if (!t) return { text: '', coords: '' };
  return t[flag];
}

function showStory(level) {
  const s = getStoryLine(save.bossRun, level);
  const isBossApproach = level === 9;

  document.getElementById('story-level-label').textContent = isBossApproach
    ? 'APPROACHING THE SOURCE' // DEPRECIATED, REMOVE ENTIRELY
    : STRINGS.ui.levelComplete(level);
  document.getElementById('story-text').textContent = s.text;
  document.getElementById('story-coords').innerHTML = renderCoords(s.coords);

  // Boss approach screen
  const btnShop   = document.getElementById('btn-to-shop');
  const btnLaunch = document.getElementById('btn-story-launch');
  if (isBossApproach) {
    btnShop.textContent   = 'ENTER SHOP';
    btnLaunch.textContent = 'PROCEED';
  } else {
    btnShop.textContent   = STRINGS.ui.enterShop;
    btnLaunch.textContent = STRINGS.ui.launch;
  }

  run.storyFlags = Math.max(run.storyFlags, level);
  save.storyArchive[save.bossRun] = Math.max(save.storyArchive[save.bossRun] || 0, level);
  writeSave();
  showScreen('story');
  updateMenuCoords();
}


// MENU UI

function updateMenuUI() {
  document.getElementById('menu-highscore').textContent = save.highScore.toString().padStart(6,'0');
  updateMenuCoords();
}

function updateMenuCoords() {
  const el = document.getElementById('menu-coords');
  const flag = save.storyArchive[save.bossRun];
  if (!flag) { el.innerHTML = '∅ ⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊'; return; }
  const s = getStoryLine(save.bossRun, flag);
  el.innerHTML = renderCoords(s?.coords) || '∅ ⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊';
}


// WIRING

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  Game.init(canvas);
  updateMenuUI();

  document.getElementById('btn-start').onclick = () => {
    AudioManager.init();
    run = newRun();
    showScreen('game');
    Game.startLevel();
  };

  document.getElementById('btn-shop-action').onclick = () => commitStaging();

  document.getElementById('btn-shop-menu').onclick = () => {
    if (!run) run = newRun();
    isMenuSession = true;
    document.getElementById('shop-level-badge').textContent = 'MODE: STATIONARY';
    document.getElementById('btn-shop-launch').textContent = STRINGS.ui.menu;
    showScreen('shop');
	initShopDeco();
    shopTab('buy');
  };

  document.getElementById('btn-retry').onclick = () => {
    AudioManager.init();
    run = newRun();
    document.getElementById('overlay-death').classList.remove('active');
    showScreen('game');
	stopShopDeco();
    Game.startLevel();
  };

  document.getElementById('btn-menu-from-death').onclick = () => {
    document.getElementById('overlay-death').classList.remove('active');
    showScreen('menu');
    updateMenuUI();
  };

  document.getElementById('btn-boss-to-menu').onclick = () => {
    document.getElementById('overlay-boss-clear').classList.remove('active');
    document.getElementById('boss-hud').classList.remove('active');
    showScreen('menu');
    updateMenuUI();
  };

  const btnApoToMenu = document.getElementById('btn-apotheosis-to-menu');
  if (btnApoToMenu) {
    btnApoToMenu.onclick = () => {
      document.getElementById('overlay-apotheosis-end').classList.remove('active');
      document.getElementById('boss-hud').classList.remove('active');
      showScreen('menu');
      updateMenuUI();
    };
  }

document.getElementById('btn-new-run-plus').onclick = () => {
  document.getElementById('overlay-boss-clear').classList.remove('active');
  document.getElementById('boss-hud').classList.remove('active');
  
  // Return all reserves to inventory before opening shop
  if (run && run.powerups) {
    run.powerups.forEach(key => {
      if (key) run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
    });
    run.powerups = []; // Clear reserves
  }
  
  isUpgradeSession = true; 
  shopMode = 'stash'; 
  document.getElementById('shop-level-badge').textContent = 'MODE: STATIONARY';
  document.getElementById('btn-shop-launch').textContent = STRINGS.ui.launch;
  showScreen('shop');
  initShopDeco();
  shopTab('upgrade'); 
}; 

  document.getElementById('btn-to-story').onclick = () => {
    document.getElementById('overlay-clear').classList.remove('active');
    showStory(run.level);
  };

  document.getElementById('btn-tutorial-menu').onclick  = openTutorial;
  document.getElementById('btn-tutorial-pause').onclick = openTutorial;
  document.getElementById('btn-tutorial-close').onclick = closeTutorial;

  document.getElementById('btn-pause').onclick = () => Game.togglePause();
  document.getElementById('btn-resume').onclick = () => Game.togglePause();
  document.getElementById('btn-return').onclick = () => {
    document.getElementById('overlay-pause').classList.remove('active');
    document.getElementById('btn-pause').textContent = '⏸️';
    showScreen('menu');
    updateMenuUI();
  };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') Game.togglePause();
  });

  document.getElementById('btn-to-shop').onclick = () => {
    shopMode = 'buy';
    document.getElementById('shop-level-badge').textContent = STRINGS.ui.afterLevel(run.level);
    document.getElementById('shop-credits').textContent = run.credits + '¢';
    document.getElementById('btn-shop-launch').textContent = STRINGS.ui.launch;
    showScreen('shop');
	initShopDeco();
    shopTab('buy');
  };

  document.getElementById('btn-story-launch').onclick = () => {
    if (isUpgradeSession) {
	  isUpgradeSession = false;
      // Persist the choice to the global save
      save.upgrade = run.inventory._upgradeSlot || null;
      writeSave();
      
      // Start a fresh run
      run = newRun();
      showScreen('game');
      Game.startLevel();
      return;
    }

    shopContinue();
  };

  // Shop LAUNCH button — needs to check for upgrade or menu session
  document.getElementById('btn-shop-launch').onclick = () => {
    stopShopDeco();
    if (isMenuSession) {
      isMenuSession = false;
      showScreen('menu');
      updateMenuUI();
    } else if (isUpgradeSession) {
      // Same logic as btn-story-launch for upgrade sessions
      isUpgradeSession = false;
      save.upgrade = run.inventory._upgradeSlot || null;
      writeSave();
      run = newRun();
      if (save.bossRun >= 7) {
        Game.startApotheosis();
      } else {
        showScreen('game');
        Game.startLevel();
      }
    } else {
      shopContinue();
    }
  };

  // APOTHEOSIS ATTACK SLOTS
  (function setupApoAttackInteractions() {
    const container = document.getElementById('apo-attacks');
    if (!container) return;
    container.addEventListener('pointerdown', e => {
      const slot = e.target.closest('.apo-slot');
      if (!slot || slot.classList.contains('on-cooldown')) return;
      Game.triggerApoAttackPublic(slot.dataset.key);
    });
  })();

  // COMPOUND RESERVES
  (function setupPowerupInteractions() {
    const bar       = document.getElementById('powerup-bar');
    const stashEl   = document.getElementById('pu-stash');
    let dragSlot    = -1;   // which slot index is being dragged
    let dragStartY  = 0;
    let dragging    = false;
    const DRAG_THRESHOLD = 10; 

    function slotIndexFromEl(el) {
      const slot = el.closest('.pu-slot');
      if (!slot) return -1;
      const idx = parseInt(slot.dataset.idx, 10);
      return isNaN(idx) ? -1 : idx;
    }

    function stashSlot(idx) {
      if (!run || idx < 0 || idx >= run.powerups.length) return;
      const key = run.powerups[idx];
      run.powerups.splice(idx, 1);
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
      const pu = STRINGS.powerups[key];
      Game.logPickupPublic(`STASHED ${pu.name}`);
      Game.flashStashPublic();
      Game.updatePowerupBarPublic();
    }

    function isTouchOverStash(touch) {
      const r = stashEl.getBoundingClientRect();
      return touch.clientX >= r.left && touch.clientX <= r.right
          && touch.clientY >= r.top  && touch.clientY <= r.bottom;
    }

    bar.addEventListener('touchstart', e => {
      const idx = slotIndexFromEl(e.target);
      if (idx < 0) return;
      e.preventDefault(); e.stopPropagation();
      dragSlot  = idx;
      dragStartY = e.touches[0].clientY;
      dragging  = false;
    }, { passive: false });

    bar.addEventListener('touchmove', e => {
      if (dragSlot < 0) return;
      e.preventDefault(); e.stopPropagation();
      const dy = e.touches[0].clientY - dragStartY;
      if (Math.abs(dy) > DRAG_THRESHOLD) dragging = true;
      if (dragging && isTouchOverStash(e.touches[0])) {
        stashEl.classList.add('drag-over');
      } else {
        stashEl.classList.remove('drag-over');
      }
    }, { passive: false });

    bar.addEventListener('touchend', e => {
      if (dragSlot < 0) return;
      e.preventDefault(); e.stopPropagation();
      stashEl.classList.remove('drag-over');
      if (dragging) {
        // Check position over stash
        const t = e.changedTouches[0];
        if (isTouchOverStash(t)) {
          stashSlot(dragSlot);
        }
      } else {
        // Tap to trigger
        AudioManager.resume();
        Game.triggerPowerup(dragSlot);
      }
      dragSlot = -1; dragging = false;
    }, { passive: false });

    // Mouse fallback for desktop
    let mouseSlot = -1, mouseStartY = 0, mouseDragging = false;
    bar.addEventListener('mousedown', e => {
      const idx = slotIndexFromEl(e.target);
      if (idx < 0) return;
      e.preventDefault();
      mouseSlot = idx; mouseStartY = e.clientY; mouseDragging = false;
    });
    window.addEventListener('mousemove', e => {
      if (mouseSlot < 0) return;
      if (Math.abs(e.clientY - mouseStartY) > DRAG_THRESHOLD) mouseDragging = true;
      const r = stashEl.getBoundingClientRect();
      const over = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      stashEl.classList.toggle('drag-over', mouseDragging && over);
    });
    window.addEventListener('mouseup', e => {
      if (mouseSlot < 0) return;
      stashEl.classList.remove('drag-over');
      const r = stashEl.getBoundingClientRect();
      const over = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (mouseDragging && over) {
        stashSlot(mouseSlot);
      } else if (!mouseDragging) {
        Game.triggerPowerup(mouseSlot);
      }
      mouseSlot = -1; mouseDragging = false;
    });
  })();

  // No bad touches
  document.getElementById('screen-game').addEventListener('touchmove', e => e.preventDefault(), { passive:false });

  setupShopDrag();
});

// Shop refresh
function refresh() {
  updateShopReserves();
  updateShopStats();
  renderStaging();
  renderShopBody();
  document.getElementById('shop-credits').textContent = run ? run.credits + '¢' : '0¢';
}


// Shop Drag & Drop
function setupShopDrag() {
  const DRAG_THRESHOLD = 8;
  let dragKey      = null;   // item/powerup key being dragged
  let dragTier     = null;   // 'element' | 'compound' | 'alloy'
  let dragSource   = null;   // 'card' | 'stash' | 'reserve'
  let dragSlotIdx  = -1;
  let dragEl       = null;
  let startX = 0, startY = 0;
  let dragging     = false;
  const DOUBLE_TAP_MS = 350;
  let lastTapCard = null;
  let lastTapTime = 0;
  let lastStatsKey  = null;
  let lastStatsTime = 0;

  // Drag Ghost
  const ghost = document.createElement('div');
  ghost.id = 'shop-drag-ghost';
  ghost.style.display = 'none';
  document.body.appendChild(ghost);

  function showGhost(x, y, key, tier) {
    const pu   = STRINGS.powerups[key];
    const item = STRINGS.items[key];
    const sym  = pu ? pu.sym : item ? item.sym : '?';
    const name = pu ? pu.name : item ? item.name : key;
    ghost.innerHTML = `<span class="ghost-sym">${sym}</span><span class="ghost-name">${name}</span>`;
    ghost.style.display = 'flex';
    moveGhost(x, y);
  }
  function moveGhost(x, y) {
    ghost.style.left = x + 'px';
    ghost.style.top  = y + 'px';
  }
  function hideGhost() { ghost.style.display = 'none'; }

  // Hit test
  function reserveSlotAt(x, y) {
    const selector = isUpgradeSession ? '#upgrade-drop-zone' : '.shop-reserve-slot';
    const slots = document.querySelectorAll(selector);
    for (const s of slots) {
      const r = s.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return s;
    }
    return null;
  }
  function actionBoxAt(x, y) {
    const box = document.getElementById('shop-action-box');
    if (!box) return false;
    const r = box.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }
  function onActionBoxAt(x, y) { return actionBoxAt(x, y); }
  function statsBlockAt(x, y) {
    const block = document.getElementById('shop-stats-block');
    if (!block) return false;
    const r = block.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }
  function stashCardAt(x, y) {
    const cards = document.querySelectorAll('#shop-body .shop-card[data-pu-key]');
    for (const c of cards) {
      const r = c.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return c;
    }
    return null;
  }

  function clearHighlights() {
    document.querySelectorAll('.shop-reserve-slot').forEach(s => {
      s.classList.remove('drag-over', 'drag-over-full');
    });
    document.querySelectorAll('#shop-body .shop-card.drag-over').forEach(c => {
      c.classList.remove('drag-over');
    });
    const box = document.getElementById('shop-action-box');
    if (box) box.classList.remove('drag-over');
    const stats = document.getElementById('shop-stats-block');
    if (stats) stats.classList.remove('drag-over');
  }
  function highlightTarget(x, y) {
    clearHighlights();
    if (isUpgradeSession) {
       const zone = document.getElementById('upgrade-drop-zone');
       const r = zone.getBoundingClientRect();
       if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
         zone.classList.add('drag-over');
       }
       return;
    }
    const slot = reserveSlotAt(x, y);
    if (slot) {
      slot.classList.add(slot.dataset.key ? 'drag-over-full' : 'drag-over');
      return;
    }
    if (shopMode === 'craft' && dragSource === 'card') {
      const targetCard = craftCardAt(x, y);
      if (targetCard) {
        const puKey = targetCard.dataset.cardKey;
        const tier  = targetCard.dataset.cardTier;
        const progress = craftProgress[puKey] || [];
        const isValid = isValidIngredientForAnyVariant(puKey, tier, dragKey, dragTier, progress);
        if (isValid) targetCard.classList.add('drag-over');
        return;
      }
    }
    if (actionBoxAt(x, y)) {
      const box = document.getElementById('shop-action-box');
      if (box) box.classList.add('drag-over');
      return;
    }
    if ((dragTier === 'element' || dragTier === 'compound') && statsBlockAt(x, y)) {
      const stats = document.getElementById('shop-stats-block');
      if (stats) stats.classList.add('drag-over');
    }
  }

  // Element (stat buffs)
function applyElementBuff(key) {
     if (!run) return;
     switch (key) {
       case 'Be': if (run.shieldMax >= STAT_CAPS.shieldMax) { showShopToast('SHIELD MAXED'); return; }
           run.shieldMax = Math.min(run.shieldMax + 6, STAT_CAPS.shieldMax);
           run.shield = Math.min(run.shield + 6, run.shieldMax); break;
       case 'Li': if (run.shieldMax >= STAT_CAPS.shieldMax) { showShopToast('SHIELD MAXED'); return; }
           run.shieldMax = Math.min(run.shieldMax + 4, STAT_CAPS.shieldMax);
           run.shield = Math.min(run.shield + 4, run.shieldMax); break;
       case 'Ti': if (run.shieldMax >= STAT_CAPS.shieldMax) { showShopToast('SHIELD MAXED'); return; }
           run.shieldMax = Math.min(run.shieldMax + 8, STAT_CAPS.shieldMax);
           run.shield = Math.min(run.shield + 8, run.shieldMax); break;
       case 'N': if (run.ammoRefillRate >= STAT_CAPS.ammoRefillRate) { showShopToast('RELOAD MAXED'); return; }
    	   run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate); break;
	   case 'K': if (run.ammoRefillRate >= STAT_CAPS.ammoRefillRate) { showShopToast('RELOAD MAXED'); return; }
    	   run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate); break;
       case 'Si': if (run.ammoMax >= STAT_CAPS.ammoMax) { showShopToast('AMMO MAXED'); return; }
           run.ammoMax = Math.min(run.ammoMax + 10, STAT_CAPS.ammoMax);
           run.ammo = Math.min(run.ammo + 10, run.ammoMax); break;
	   case 'C':  if (run.ammoMax >= STAT_CAPS.ammoMax) { showShopToast('AMMO MAXED'); return; }
           run.ammoMax = Math.min(run.ammoMax + 8, STAT_CAPS.ammoMax);
           run.ammo = Math.min(run.ammo + 8, run.ammoMax); break;
       case 'Mg': if (run.reserveMax >= STAT_CAPS.reserveMax) { showShopToast('RESERVES MAXED'); return; }
           run.reserveMax = Math.min(8, run.reserveMax + 1); break;
     }
   }

  // Compound (stat buffs)
  function applyCompoundBuff(key) {
    if (!run) return;
    switch (key) {

      case 'LITHEBRYL':
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 20, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 8, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
         break;

      case 'NITROKALIUM':
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('RELOAD MAXED'); }
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 6, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
         break;

      case 'CARBOSILICUM':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 18, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('RELOAD MAXED'); }
         break;

      case 'MAGNIUM':
        if (run.reserveMax < STAT_CAPS.reserveMax) {
          run.reserveMax = Math.min(run.reserveMax + 2, STAT_CAPS.reserveMax);
        } else { showShopToast('RESERVES MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('RELOAD MAXED'); }
        break;

      case 'TITANE':
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 30, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('RELOAD MAXED'); }
         break;

      case 'ALKALIUM':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 22, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('RELOAD MAXED'); }
         break;

      case 'AZOLITHION':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 20, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 8, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
         break;

      case 'GAMMITE':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 8, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 8, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('RELOAD MAXED'); }
         break;

      default:
        showShopToast('INVALID'); return;
    }
    updateShopStats();
  }

  // Craft cards
  function craftCardAt(x, y) {
    const cards = document.querySelectorAll('#shop-body .shop-card[data-card-tier="compound"], #shop-body .shop-card[data-card-tier="alloy"]');
    for (const c of cards) {
      if (!c.querySelector('.craft-lights')) continue; // skip ingredient source cards
      const r = c.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return c;
    }
    return null;
  }

  // Refresh Cards
  function refreshCraftCard(puKey, tier, recipe) {
    const allCards = document.querySelectorAll(`#shop-body .shop-card[data-card-key="${puKey}"]`);
    const card = Array.from(allCards).find(c => c.querySelector('.craft-lights'));
    if (!card) return;
    const progress = craftProgress[puKey] || [];
    const total = recipe.length;
    const filled = progress.length;
    const complete = filled === total;

    // Update lights
    const lights = card.querySelectorAll('.craft-light');
    lights.forEach((light, i) => {
      light.className = 'craft-light ' + (i < filled ? (complete ? 'complete' : 'on') : 'off');
    });

    // Update inventory count
    const countEl = card.querySelector('.craft-inv-count');
    if (countEl) {
      const invQty = run?.inventory[puKey] || 0;
      countEl.textContent = invQty;
      countEl.className = 'craft-inv-count' + (invQty > 0 ? ' has' : '');
    }

    // Update draggable + craft-ready
    card.dataset.draggable = complete ? '1' : '0';
    card.classList.toggle('craft-ready', complete);
  }

  function refreshSourceCard(ingredientKey) {
    const src = document.querySelector(
      `#shop-body .shop-card[data-card-key="${ingredientKey}"]:not([data-card-tier="alloy"]):not(.shop-card-progress)`
    );
    // Prefer the one that is NOT a craft target
    const allMatches = document.querySelectorAll(
      `#shop-body .shop-card[data-card-key="${ingredientKey}"][data-card-tier="element"],` +
      `#shop-body .shop-card[data-card-key="${ingredientKey}"][data-card-tier="compound"].stash-has,` +
      `#shop-body .shop-card[data-card-key="${ingredientKey}"][data-card-tier="compound"].stash-empty`
    );
    allMatches.forEach(card => {
      if (card.querySelector('.craft-lights')) return; // skip craft target cards
      const qty = run?.inventory[ingredientKey] || 0;
      const has = qty > 0;
      card.classList.toggle('stash-has',   has);
      card.classList.toggle('stash-empty', !has);
      card.dataset.draggable = has ? '1' : '0';
      const countEl = card.querySelector('.stash-count');
      if (countEl) countEl.textContent = qty;
      // Update sym color for compound ingredient cards
      if (card.dataset.cardTier === 'compound') {
        const symEl = card.querySelector('.shop-card-sym');
        if (symEl) symEl.style.color = has ? 'var(--purple)' : 'rgba(168,85,247,0.25)';
      }
    });
  }

// Commit drop
  function commitDrop(x, y) {
    const targetSlot = reserveSlotAt(x, y);
    const onActionBox = actionBoxAt(x, y);

    // Elements (stat buffs)
    if ((dragSource === 'card' || dragSource === 'stash') && dragTier === 'element' && statsBlockAt(x, y)) {
      const isElementCapped = () => {
        if (!run) return true;
        switch (dragKey) {
          case 'Be': case 'Li': case 'Ti': return run.shieldMax >= STAT_CAPS.shieldMax;
          case 'N':  case 'K':             return run.ammoRefillRate >= STAT_CAPS.ammoRefillRate;
          case 'Si': case 'C':             return run.ammoMax >= STAT_CAPS.ammoMax;
          case 'Mg':                       return run.reserveMax >= STAT_CAPS.reserveMax;
          default: return false;
        }
      };

      const now = Date.now();
      const isDoubleAction = lastStatsKey === dragKey && (now - lastStatsTime) < DOUBLE_TAP_MS;
      lastStatsKey = dragKey; lastStatsTime = now;

      let applyCount = isDoubleAction ? (run.inventory[dragKey] || 0) : 1;
      let appliedAny = false;

      for (let i = 0; i < applyCount; i++) {
        if ((run.inventory[dragKey] || 0) <= 0) break;
        if (isElementCapped()) {
          if (!appliedAny) applyElementBuff(dragKey); 
          break; 
        }
        run.inventory[dragKey]--;
        applyElementBuff(dragKey); 
        appliedAny = true;
      }
      if (appliedAny) refresh();
      return;
    }

    // Compounds (stat buffs)
    if ((dragSource === 'card' || dragSource === 'stash') && dragTier === 'compound' && statsBlockAt(x, y)) {
      const VALID_COMPOUNDS = ['LITHEBRYL', 'NITROKALIUM', 'CARBOSILICUM', 'MAGNIUM', 'TITANE', 'ALKALIUM', 'AZOLITHION', 'GAMMITE'];
      if (!VALID_COMPOUNDS.includes(dragKey)) {
        showShopToast('INVALID');
        return;
      }
      const isCompoundFullyCapped = () => {
        if (!run) return true;
        const sh = run.shieldMax >= STAT_CAPS.shieldMax, am = run.ammoMax >= STAT_CAPS.ammoMax;
        const rf = run.ammoRefillRate >= STAT_CAPS.ammoRefillRate, rv = run.reserveMax >= STAT_CAPS.reserveMax;
        switch (dragKey) {
          case 'LITHEBRYL':    return sh && am; case 'NITROKALIUM':  return rf && sh;
          case 'CARBOSILICUM': return am && rf; case 'MAGNIUM':      return rv && rf;
          case 'TITANE':       return sh && rf; case 'ALKALIUM':     return am && rf;
          case 'AZOLITHION':   return am && sh; case 'GAMMITE':      return am && sh && rf;
          default: return false;
        }
      };

      const now = Date.now();
      const isDoubleAction = lastStatsKey === dragKey && (now - lastStatsTime) < DOUBLE_TAP_MS;
      lastStatsKey = dragKey; lastStatsTime = now;

      let applyCount = isDoubleAction ? (run.inventory[dragKey] || 0) : 1;
      let appliedAny = false;

      for (let i = 0; i < applyCount; i++) {
        if ((run.inventory[dragKey] || 0) <= 0) break;
        if (isCompoundFullyCapped()) {
          if (!appliedAny) applyCompoundBuff(dragKey);
          break;
        }
        run.inventory[dragKey]--;
        applyCompoundBuff(dragKey);
        appliedAny = true;
      }
      if (appliedAny) refresh();
      return;
    }

    // Drag to Craft Card
    if (dragSource === 'card' && shopMode === 'craft') {
      const targetCard = craftCardAt(x, y);
      if (targetCard) {
        const puKey = targetCard.dataset.cardKey;
        const tier  = targetCard.dataset.cardTier;
        if (!craftProgress[puKey]) craftProgress[puKey] = [];
        const progress = craftProgress[puKey];
        const isValid = isValidIngredientForAnyVariant(puKey, tier, dragKey, dragTier, progress);

        if (isValid && (run.inventory[dragKey] || 0) > 0) {
          run.inventory[dragKey]--;
          progress.push(dragKey);
          const resolved = tier === 'alloy' ? resolveAlloyVariant(puKey, progress) : resolveCompoundVariant(puKey, progress);
          const recipeKeys = tier === 'alloy' ? resolved.recipe.map(r => r.key) : resolved.recipe;
          refreshCraftCard(puKey, tier, recipeKeys);
          refreshSourceCard(dragKey);
        }
        return;
      }
    }

    // Drag to Action Box
    if (dragSource === 'card' && onActionBox) {
      if      (shopMode === 'buy')   stageItem(dragKey, dragTier);
      else if (shopMode === 'sell')  stageItem(dragKey, dragTier);
      else if (shopMode === 'craft') stageCraftJob(dragKey, dragTier);
      renderShopBody();
      return;
    }

    // Drag to Reserve or Stats
    if ((dragSource === 'stash' || dragSource === 'card') && targetSlot) {
      if (isUpgradeSession) {
        if (dragTier === 'element') { showShopToast("INVALID"); return; }
        const oldKey = run.inventory._upgradeSlot;
        if (oldKey) run.inventory[oldKey] = (run.inventory[oldKey] || 0) + 1;
        run.inventory._upgradeSlot = dragKey;
        run.inventory[dragKey] = Math.max(0, (run.inventory[dragKey] || 0) - 1);
        showShopToast("UPGRADE EQUIPPED");
        refresh();
        return;
      }
		
      if (dragTier === 'element') { showShopToast('INVALID'); return; }

      const slotIdx = parseInt(targetSlot.dataset.slot);
      const existingKey = run.powerups[slotIdx] || null;
      if (existingKey === dragKey) return;

      // Refund
      if (existingKey) {
        run.inventory[existingKey] = Math.min(99, (run.inventory[existingKey] || 0) + 1);
      }
      
      run.powerups[slotIdx] = dragKey;
      run.inventory[dragKey] = Math.max(0, (run.inventory[dragKey] || 0) - 1);
      showShopToast('EQUIPPED');
      refresh();
      return;
    }

    // Equip/Unequip
    if (dragSource === 'reserve') {
      if (targetSlot) {
        const toIdx = parseInt(targetSlot.dataset.slot);
        if (toIdx === dragSlotIdx) return;
        const toKey = run.powerups[toIdx] || null;
        run.powerups[dragSlotIdx] = toKey;
        run.powerups[toIdx] = dragKey;
      } else {
        run.powerups[dragSlotIdx] = null;
        run.inventory[dragKey] = Math.min(99, (run.inventory[dragKey] || 0) + 1);
      }
      run.powerups = run.powerups.filter(k => k != null);
      refresh();
    }
  }

  function reset() {
    dragging = false;
    dragKey = null; dragTier = null; dragSource = null; dragSlotIdx = -1; dragEl = null;
    hideGhost(); clearHighlights();
    document.querySelectorAll('.shop-card.drag-source').forEach(c => c.classList.remove('drag-source'));
  }

  function clearCraftCard(puKey, tier) {
    if (!craftProgress[puKey] || craftProgress[puKey].length === 0) return;
    for (const key of craftProgress[puKey]) {
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
    }
    delete craftProgress[puKey];
    showShopToast('Cleared — ingredients returned');
    renderShopBody();
  }


  // Pointer start
  function onStart(x, y, target) {
    reset();

    // Any shop card with data-card-key
    const card = target.closest('[data-card-key]');
    if (card && card.dataset.draggable === '1') {
      dragKey    = card.dataset.cardKey;
      dragTier   = card.dataset.cardTier;
      dragSource = 'card';
      dragEl     = card;
      startX = x; startY = y; dragging = false;
      return true;
    }

    // Stash tab powerup card
    const puCard = target.closest('[data-pu-key]');
    if (puCard && puCard.dataset.draggable === '1') {
      dragKey    = puCard.dataset.puKey;
      dragTier   = 'compound';
      dragSource = 'stash';
      dragEl     = puCard;
      startX = x; startY = y; dragging = false;
      return true;
    }
    // Reserve slot
    const slot = target.closest('.shop-reserve-slot');
    if (slot && slot.dataset.key) {
      dragKey      = slot.dataset.key;
      dragTier     = 'compound';
      dragSlotIdx  = parseInt(slot.dataset.slot);
      dragSource   = 'reserve';
      dragEl       = slot;
      startX = x; startY = y; dragging = false;
      return true;
    }
    return false;
  }

  function onMove(x, y) {
    if (!dragKey) return;
    if (!dragging) {
      const d = Math.sqrt((x-startX)**2 + (y-startY)**2);
      if (d < DRAG_THRESHOLD) return;
      dragging = true;
      if (dragEl) dragEl.classList.add('drag-source');
      showGhost(x, y, dragKey, dragTier);
    }
    moveGhost(x, y);
    highlightTarget(x, y);
  }

function onEnd(x, y) {
    if (!dragKey) return;

    if (dragging) {
      commitDrop(x, y);
      reset(); 
    } else {
      const now = Date.now();
      
      // Info Display
      const tier = dragSource === 'reserve' ? 'compound' : dragTier || 'element';
      showItemInfo(dragKey, tier);
      if (dragEl) {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        dragEl.classList.add('selected');
      }

      // Clear Ingredients
      if (shopMode === 'craft' && dragEl) {
        const puKey = dragEl.dataset.cardKey;
        if (puKey && craftProgress[puKey]?.length > 0) {
          if (lastTapCard === dragEl && (now - lastTapTime) < DOUBLE_TAP_MS) {
            clearCraftCard(puKey, dragEl.dataset.cardTier);
            lastTapCard = null; reset(); return;
          }
          lastTapCard = dragEl; lastTapTime = now;
        }
      }

      // Stack of Stats
      const isStatEligible = shopMode === 'stash'
        && (dragSource === 'card' || dragSource === 'stash')
        && (dragTier === 'element' || dragTier === 'compound')
        && (run?.inventory[dragKey] || 0) >= 1;

      if (isStatEligible) {
        if (lastStatsKey === dragKey && (now - lastStatsTime) < DOUBLE_TAP_MS) {
          // --- SUCCESSFUL DOUBLE TAP ---
          const statsBlock = document.getElementById('shop-stats-block');
          if (statsBlock) {
            const r = statsBlock.getBoundingClientRect();
            // This triggers the bulk logic inside commitDrop
            commitDrop(r.left + r.width / 2, r.top + r.height / 2); 
            showGhost(r.left + r.width / 2, r.top + r.height / 2, dragKey, dragTier);
            setTimeout(() => hideGhost(), 500);
          }
          lastStatsKey = null; // Clear so 3rd tap doesn't bulk again
        } else {
          lastStatsKey = dragKey;
          lastStatsTime = now;
        }
      }

      // Cleanup tap state but keep dragKey alive for the double-tap window
      dragging = false;
      clearHighlights();
    }
  }

  // Good Touches
  const shopScreen = document.getElementById('screen-shop');

  shopScreen.addEventListener('touchstart', e => {
    const t = e.touches[0];
    if (onStart(t.clientX, t.clientY, e.target)) e.preventDefault();
  }, { passive: false });

  shopScreen.addEventListener('touchmove', e => {
    if (!dragKey) return;
    e.preventDefault();
    const t = e.touches[0];
    onMove(t.clientX, t.clientY);
  }, { passive: false });

  shopScreen.addEventListener('touchend', e => {
    if (!dragKey) return;
    e.preventDefault();
    const t = e.changedTouches[0];
    onEnd(t.clientX, t.clientY);
  }, { passive: false });

  // Mouse fallback events
  shopScreen.addEventListener('mousedown', e => {
    onStart(e.clientX, e.clientY, e.target);
  });
  window.addEventListener('mousemove', e => {
    if (dragKey) onMove(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', e => {
    if (dragKey) onEnd(e.clientX, e.clientY);
  });
}
