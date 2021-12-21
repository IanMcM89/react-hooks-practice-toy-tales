import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  const toysToBeDisplayed = toys.map(toy => <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLikeToy={onLikeToy}/>);

  return (
    <div id="toy-collection">{toysToBeDisplayed}</div>
  );
}

export default ToyContainer;
