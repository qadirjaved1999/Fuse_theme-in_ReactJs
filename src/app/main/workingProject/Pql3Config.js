// src/app/main/workingProject/Pql3Config.js
import PqlThree from "src/components/PqlThree";

const Pql3Config = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pql3',
      element: <PqlThree />,
    },
  ],
};

export default Pql3Config;
