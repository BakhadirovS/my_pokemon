import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AbilityList = ({ abilities }) => {
  const [abilityData, setAbilityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const abilityPromises = abilities.map((ability) => axios.get(ability.ability.url));
      try {
        const responses = await Promise.all(abilityPromises);
        const data = responses.map((response) => response.data);
        setAbilityData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [abilities]);

  return (
    <ul>
      {abilityData.map((ability) => (
        <li key={ability.name}>{ability.name}</li>
      ))}
    </ul>
  );
};

export default AbilityList;
