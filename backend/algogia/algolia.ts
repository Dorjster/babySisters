import algoliasearch, { SearchIndex } from "algoliasearch";

const algoliaClient = algoliasearch(
  "FR0Z5MF364",
  "12166c67d3f358bb829f97a387ff47fb"
);

const algoliaIndex: SearchIndex = algoliaClient.initIndex("babysitter_info");

algoliaIndex.setSettings({
  searchableAttributes: [
    "wage",
    "unordered(education)",
    "unordered(character)",
    "unordered(year_of_experience)",
    "unordered(skills)",
    "unordered(languages)",
  ],
});

export { algoliaClient, algoliaIndex };
