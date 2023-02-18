import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';

export default function LoginForComment({ user }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api();
  }, []);

  const api = async () => {
    try {
      setLoading(true);
    } catch (e) {}
  };

  return (
    <>
      <Loading />
    </>
  );
}
