import InternalForm from 'src/components/InternalForm';

const PotentialConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/potential',
      element: <InternalForm />,
    },
  ],
};

export default PotentialConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
