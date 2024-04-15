import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headLine="Planetas" />
        <section>
          {planets.map((planetas) => (
            <PlanetCard
              key={ planetas.name }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />
          ))}
        </section>
      </div>

    );
  }
}

export default SolarSystem;
