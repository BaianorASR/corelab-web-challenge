import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import React, { FC } from 'react';
import { useFetch } from 'shared/hooks/useFetch';

import * as S from './styles';

type TAdsCardsProps = {
  // vehicles: IVehiclesData[];
};

export const TAdsCards: FC<TAdsCardsProps> = () => {
  const { data } = useFetch('all-vehicles');

  return (
    <S.Container>
      <h2>Anúncios</h2>
      <S.CardsContainer>
        {data?.map(vehicle => (
          <li key={vehicle.id}>
            <OVehicleCard vehicle={vehicle} />
          </li>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};
