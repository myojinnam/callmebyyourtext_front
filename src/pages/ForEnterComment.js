import React from 'react';
import Header from '../components/Header/Header';
import Main from './../components/Main/Main';

export default function ForEnterComment({ user }) {
  return (
    <div>
      <Header user={user} />
      <Main name={user} />
    </div>
  );
}
