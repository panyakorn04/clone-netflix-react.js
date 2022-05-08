import React from "react";
import selectionFilter from "../utils/selection-filter";
import { useContent } from "../hooks";

export default function Browse() {
  // const { series } = useContent("series");
  // const { films } = useContent("films");

  // const slides = selectionFilter({ series, films });
  // console.log(slides);

  return (
    <iframe
      width="560"
      height="315"
      src="https://vimeo.com/693455021"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
