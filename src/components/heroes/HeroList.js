import React from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher";
import { HeroCards } from "./HeroCards";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroeByPublisher(publisher);

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCards key={hero.id} {...hero} />
      ))}
    </div>
  );
};
