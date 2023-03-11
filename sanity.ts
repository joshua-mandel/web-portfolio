import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: "production",
  projectId: 've8fo00y',
  apiVersion: "2021-03-25",
  useCdn: false,
};

// Set up the client for fetching data in the getProps page functions - Helper function
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);