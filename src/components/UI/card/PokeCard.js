import React, { useState } from 'react';
import Styles from './PokeCard.module.css';
import PersentageBar from '../bar/PersentageBar';

function PokeCard({ pokeObject }) {
  const [activeTab, setActiveTab] = useState('About');

  function openTab(tab) {
    setActiveTab(tab);
  }

  if (!pokeObject) {
    return null;
  }

  return (
    <div className={`${Styles.pokeCard} ${activeTab === 'About' ? Styles.active : ''}`}>
      <div className={`${Styles.pokeCardContent} ${pokeObject.types[0].type.name} position-relative`}>
        <img
          src={pokeObject.sprites.other.dream_world.front_default}
          alt=""
          className={`position-absolute top-50 start-0 translate-middle ${Styles.cardImage}`}
        />
        <div className={`${Styles.cardBox}`}>
          <span>{pokeObject.forms[0].url.split('/')[6]}</span>
          <h2 className={Styles.cardName}>{pokeObject.forms[0].name}</h2>

          <div className="w3-bar w3-black">
            <button
              className={`w3-bar-item w3-button ${Styles.b1} ${activeTab === 'About' ? Styles.activeTab : ''}`}
              onClick={() => openTab('About')}
            >
              About
            </button>
            <button
              className={`w3-bar-item w3-button ${Styles.b2} ${activeTab === 'BaseStates' ? Styles.activeTab : ''}`}
              onClick={() => openTab('BaseStates')}
            >
              Base stats
            </button>
            <button
              className={`w3-bar-item w3-button ${Styles.b3} ${activeTab === 'Moves' ? Styles.activeTab : ''}`}
              onClick={() => openTab('Moves')}
            >
              Moves
            </button>
          </div>

          <div id="About" className={`w3-container tab p-3 m-4 ${activeTab === 'About' ? 'd-block' : 'd-none'}`}>
            <strong>Abilities:</strong>
            <ul style={{ listStyle: 'circle outside none' }}>
              {pokeObject.abilities.map((item) => (
                <li className="badge text-bg-dark m-2 p-2">{item.ability.name}</li>
              ))}
            </ul>
            <strong className="m-4">Height: {pokeObject.height} cm</strong>
            <strong>Weight: {pokeObject.weight} kg</strong>
            <br />
            <h4 style={{ color: '#000' }} className="m-5">
              Types:
            </h4>
            <ul style={{ listStyle: 'circle outside none' }}>
              {pokeObject.types.map((item) => (
                <li className="badge text-bg-info m-2 p-2">{item.type.name}</li>
              ))}
            </ul>
          </div>

          <div
            id="BaseStates"
            className={`w3-container tab ${activeTab === 'BaseStates' ? 'd-block' : 'd-none'}`}
            style={{ color: '#000', marginTop: '2rem', marginRight: '-20rem' }}
          >
            {pokeObject.stats.map((stat) => (
              <p key={stat.stat.name}>
                {`${stat.stat.name.charAt(0).toUpperCase()}${stat.stat.name.slice(1)}: ${stat.base_stat} % `}
                <PersentageBar color="orange" percent={stat.base_stat} height={10} />
              </p>
            ))}
          </div>

          <div id="Moves" className={`w3-container tab ${activeTab === 'Moves' ? 'd-block' : 'd-none'}`}>
            <ul style={{ listStyle: 'circle outside none' }}>
              {pokeObject.moves.map((item, index) =>
                index < 9 ? (
                  <li className="text-center p-2" key={item.move.name}>
                    <span style={{ marginTop: '-10px' }}>
                      {`${item.move.name.charAt(0).toUpperCase()}${item.move.name.slice(1)}:`}
                    </span>{' '}
                    <em style={{ marginRight: '-10%' }}>
                      {item.version_group_details
                        .filter((_, index) => index < 3 && (index !== 2 || item.version_group.name.length < 15))
                        .map((version) => (
                          <span key={version.version_group.name}>
                            {`${version.version_group.name.charAt(0).toUpperCase()}${version.version_group.name
                              .slice(1)
                              .split('-')
                              .join(' ')} `}
                          </span>
                        ))}
                    </em>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;

