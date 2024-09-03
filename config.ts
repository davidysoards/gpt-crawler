import { Config } from "./src/config";

// kasten docs
export const defaultConfig: Config = {
  url: "https://docs.kasten.io/latest",
  match: "https://docs.kasten.io/latest/**",
  selector: "div[itemprop='articleBody']",
  resourceExclusions: [
    "css",
    "gif",
    "ico",
    "jpeg",
    "jpg",
    "js",
    "png",
    "svg",
    "webp",
    "woff",
    "woff2",
  ],
  maxPagesToCrawl: 1000,
  outputFileName: "docs.json",
  // maxTokens: 2000000,
};

// kasten-k10-support
// export const defaultConfig: Config = {
//   url: "https://www.veeam.com/knowledge-base.html?product=KASTEN",
//   match: "https://www.veeam.com/kb**",
//   selector:
//     "body > div.base-page__wrapper > div > div.base-page__content-wrapper > div:nth-child(3) > div > div > div > div",

//   resourceExclusions: [
//     "css",
//     "gif",
//     "ico",
//     "jpeg",
//     "jpg",
//     "js",
//     "png",
//     "svg",
//     "webp",
//     "woff",
//     "woff2",
//   ],
//   maxPagesToCrawl: 1000,
//   outputFileName: "knowledge-base.json",
//   // maxTokens: 2000000,
// };
