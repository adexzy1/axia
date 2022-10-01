import React from 'react';
import { useRouter } from 'next/router';
import IndexLayout from '../layout';

const Catalog = () => {
  const { query } = useRouter();

  return <div>catalog {query.search}</div>;
};

Catalog.PageLayout = IndexLayout;

export default Catalog;
