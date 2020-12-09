import React, { useMemo } from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher";
import { HeroCards } from "./HeroCards";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);


  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCards key={hero.id} {...hero} />
      ))}
    </div>
  );
};
