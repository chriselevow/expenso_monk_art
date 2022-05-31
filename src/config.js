const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Hippo";
const description = "A gang of Hangry Hippos wading under the water ready to bite!";
const baseUri = "/assets";

const solanaMetadata = {
  symbol: "HH",
  seller_fee_basis_points: 0, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
// const layerConfigurations = [
//   // +100
//   {
//     growEditionSizeTo: 100,
//     layersOrder: [
//       { name: "background" },
//       { name: "eyes" },
//       { name: "base" },
//       { name: "cloths" },
//       // { name: "mouth props" },
//       { name: "hats" },
//       { name: "eyewear" },
//     ],
//   },
// ]

const layerConfigurations = [
  // +100
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "cloths" },
      { name: "mouth props" },
      { name: "hats" },
      { name: "eyewear" },
    ],
  },
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "cloths" },
      { name: "mouth props" },
      { name: "eyewear" },
      { name: "rings" },
      { name: "nose rings" },
      
    ],
  },
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      { name: "cloths" },
      { name: "mouth props" },
      { name: "hats" },
      { name: "black eyewear" },
    ],
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      { name: "cloths" },
      { name: "mouth props" },
      { name: "black eyewear" },
      { name: "rings" },
      { name: "nose rings" },
    ],
  },
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "cloths" },
      { name: "mouth props" },
      { name: "helms" },
    ],
  },
  {
    growEditionSizeTo: 35,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "neckwear" },
      { name: "mouth props" },
      { name: "hats" },
      { name: "eyewear" },
    ],
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "neckwear" },
      { name: "mouth props" },
      { name: "eyewear" },
      { name: "rings" },
      { name: "nose rings" },
      
    ],
  },
  {
    growEditionSizeTo: 45,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      { name: "neckwear" },
      { name: "mouth props" },
      { name: "hats" },
      { name: "black eyewear" },
    ],
  },
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      { name: "neckwear" },
      { name: "mouth props" },
      { name: "black eyewear" },
      { name: "rings" },
      { name: "nose rings" },
    ],
  },
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "neckwear" },
      { name: "mouth props" },
      { name: "helms" },
    ],
  },
  {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      { name: "hoodie" },
      { name: "mouth props" },
    ],
  },
  {
    growEditionSizeTo: 65,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "big suit" },
      { name: "mouth props" },
      { name: "hats" },
      { name: "eyewear" },
    ],
  },
  {
    growEditionSizeTo: 70,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      // { name: "big suit" },
      { name: "mouth props" },
      { name: "hats" },
      { name: "black eyewear" },
    ],
  },
  {
    growEditionSizeTo: 75,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "big suit" },
      { name: "mouth props" },
      { name: "helms" },
    ],
  },
  // -100
  {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "cloths" },
      { name: "hats" },
      { name: "eyewear" },
    ],
  },
  {
    growEditionSizeTo: 85,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "cloths" },
      { name: "eyewear" },
      { name: "rings" },
      { name: "nose rings" },
    ],
  },
  {
    growEditionSizeTo: 90,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "cloths" },
      { name: "hats" },
      { name: "black eyewear" },
    ],
  },
  {
    growEditionSizeTo: 95,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "cloths" },
      { name: "black eyewear" },
      { name: "rings" },
      { name: "nose rings" },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "cloths" },
      { name: "helms" },
    ],
  },
  {
    growEditionSizeTo: 105,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "neckwear" },
      { name: "hats" },
      { name: "eyewear" },
    ],
  },
  {
    growEditionSizeTo: 110,
    layersOrder: [
      { name: "background" },
      { name: "eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "neckwear" },
      { name: "eyewear" },
      { name: "rings" },
      { name: "nose rings" },
    ],
  },
  {
    growEditionSizeTo: 115,
    layersOrder: [
      { name: "background" },
      { name: "basic eyes" },
      { name: "base" },
      // { name: "snarls" },
      { name: "neckwear" },
      { name: "hats" },
      { name: "black eyewear" },
    ],
  },
]
//   {
//     growEditionSizeTo: 5368,
//     layersOrder: [
//       { name: "background" },
//       { name: "basic eyes" },
//       { name: "snarls" },
//       { name: "neckwear" },
//       { name: "black eyewear" },
//       { name: "rings" },
//       { name: "nose rings" },
//     ],
//   },
//   {
//     growEditionSizeTo: 5418,
//     layersOrder: [
//       { name: "background" },
//       { name: "eyes" },
//       { name: "snarls" },
//       { name: "neckwear" },
//       { name: "helms" },
//     ],
//   },
//   {
//     growEditionSizeTo: 5538,
//     layersOrder: [
//       { name: "background" },
//       { name: "eyes" },
//       { name: "snarls" },
//       { name: "hoodie" },
//     ],
//   },
//   // 5
//   {
//     growEditionSizeTo: 5545,
//     layersOrder: [
//       { name: "background" },
//       { name: "eyes" },
//       { name: "snarls" },
//       { name: "big suit" },
//       { name: "hats" },
//       { name: "eyewear" },
//     ],
//   },
//   {
//     growEditionSizeTo: 5550,
//     layersOrder: [
//       { name: "background" },
//       { name: "basic eyes" },
//       { name: "snarls" },
//       { name: "big suit" },
//       { name: "hats" },
//       { name: "black eyewear" },
//     ],
//   },
//   {
//     growEditionSizeTo: 5555,
//     layersOrder: [
//       { name: "background" },
//       { name: "eyes" },
//       { name: "snarls" },
//       { name: "big suit" },
//       { name: "helms" },
//     ],
//   },
// ];


const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 100,
  height: 100,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 4 / 256,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 20,
  thumbWidth: 100,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
