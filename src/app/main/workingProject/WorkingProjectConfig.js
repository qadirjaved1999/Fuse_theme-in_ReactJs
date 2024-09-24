import { PqlOne } from 'src/helpers/components';
import Pql1Config from './Pql1Config';
import Pql2Config from './Pql2Config';
import Pql3Config from './Pql3Config';

const WorkingProjectConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/working-project', 
      element: <div><PqlOne /></div>,
    },
    ...Pql1Config.routes,
    ...Pql2Config.routes,
    ...Pql3Config.routes,
  ],
};

export default WorkingProjectConfig;







// import i18next from 'i18next';

// import en from './i18n/en';
// import tr from './i18n/tr';
// import ar from './i18n/ar';
// // import Example from './Example';
// // import Potential from '../potential-project/Potential';
// import WorkingProject from './WorkingProject'

// i18next.addResourceBundle('en', 'examplePage', en);
// i18next.addResourceBundle('tr', 'examplePage', tr);
// i18next.addResourceBundle('ar', 'examplePage', ar);

// const PotentialConfig = {
//   settings: {
//     layout: {
//       config: {},
//     },
//   },
//   routes: [
//     {
//       path: '/pql1',
//       element: <WorkingProject />,
//     },
//   ],
// };

// export default PotentialConfig;

// /**
//  * Lazy load Example
//  */
// /*
// import React from 'react';

// const Example = lazy(() => import('./Example'));

// const ExampleConfig = {
//   settings: {
//     layout: {
//       config: {},
//     },
//   },
//   routes: [
//     {
//       path: 'example',
//       element: <Example />,
//     },
//   ],
// };

// export default ExampleConfig;
// */
