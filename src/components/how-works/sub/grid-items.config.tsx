import { TEXTS } from "@/constants/texts";

const gridItems = [
  {
    id: 1,
    image: "/images/plant.jpg",
    alt: "Plant diagram showing photosynthesis",
  },
  {
    id: 2,
    image: "/images/light-leave.jpg",
    alt: "Light reaction process in plant leaves",
    overlay: {
      tagTitle: TEXTS.HOW_WORKS.LIGHT_REACTION,
      description: TEXTS.HOW_WORKS.LIGHT_DETAILS
    }
  },
  {
    id: 3,
    image: "/images/leaves.jpg",
    alt: "Close-up of plant leaves structure",
  },
  {
    id: 4,
    image: "/images/night-leaves.jpg",
    alt: "Plant respiration process at night",
  },
  {
    id: 5,
    image: "/images/night-process.jpg",
    alt: "Biochemical night process in plants",
    overlay: {
      tagTitle: TEXTS.HOW_WORKS.NIGHT_REACTION,
      description: TEXTS.HOW_WORKS.NIGHT_DETAILS
    }
  },
  {
    id: 6,
    image: "/images/night-reaction.jpg",
    alt: "Chemical reactions during plant night cycle",
  }
];

export default gridItems;
