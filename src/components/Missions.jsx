import React from 'react';
import { PropTypes } from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headLine="Missões" />
        <section>
          {missions.map((missoes) => (
            <MissionCard
              key={ missoes.name }
              name={ missoes.name }
              year={ missoes.year }
              country={ missoes.country }
              destination={ missoes.destination }
            />
          ))}
        </section>
      </div>

    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Missions;
