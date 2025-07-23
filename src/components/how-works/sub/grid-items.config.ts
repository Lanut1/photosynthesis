import { TEXTS } from "@/constants/texts";

const gridItems = [
  {
    id: 1,
    src: "/images/plant.svg",
    alt: "Plant diagram showing photosynthesis",
  },
  {
    id: 2,
    src: "/images/light-leave.svg",
    alt: "Light reaction process in plant leaves",
    overlay: {
      tagTitle: TEXTS.HOW_WORKS.LIGHT_REACTION,
      description: TEXTS.HOW_WORKS.LIGHT_DETAILS
    }
  },
  {
    id: 3,
    src: "/images/leaves.svg",
    alt: "Close-up of plant leaves structure",
  },
  {
    id: 4,
    src: "/images/night-leaves.svg",
    alt: "Plant respiration process at night",
  },
  {
    id: 5,
    src: "/images/night-process.svg",
    alt: "Biochemical night process in plants",
    overlay: {
      tagTitle: TEXTS.HOW_WORKS.NIGHT_REACTION,
      description: TEXTS.HOW_WORKS.NIGHT_DETAILS
    }
  },
  {
    id: 6,
    src: "/images/night-reaction.svg",
    alt: "Chemical reactions during plant night cycle",
  }
];

export default gridItems;
