import React from 'react';

import Feed from '../Feed';

import {
  Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton,
} from './styles';

const ProfilePage: React.FC = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>

      <h1>Xar0P</h1>
      <h2>@Xar0P</h2>

      <p>
        CEO FoxChaser
      </p>

      <ul>
        <li>
          <LocationIcon />
          Curitiba, Brasil
        </li>
        <li>
          <CakeIcon />
          Nascido em 30 de março
        </li>
      </ul>

      <Followage>
        <span>
          seguindo
          {' '}
          <strong>94</strong>
        </span>
        <span>
          <strong>672 </strong>
          {' '}
          seguidores
        </span>
      </Followage>
    </ProfileData>

    <Feed />
  </Container>
);

export default ProfilePage;
