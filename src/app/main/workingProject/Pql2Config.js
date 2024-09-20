// src/app/main/workingProject/Pql2Config.js
import PqlTwo from "src/components/PqlTwo";

const Pql2Config = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pql2',
      element: <PqlTwo />,
    },
  ],
};

export default Pql2Config;
