import { CarbonIcon } from "@/components/conditional/sub/carbon";
import { LightIcon } from "@/components/conditional/sub/light";
import { MineralsIcon } from "@/components/conditional/sub/minerals";
import { TemperatureIcon } from "@/components/conditional/sub/temperature";

export const CARDS = [
  {
    NAME: 'Light',
    DESCRIPTION: 'Provides energy.\nToo little — photosynthesis slows down.\nToo much — can damage the plant.',
    ICON: <LightIcon/>
  },
  {
    NAME: 'Carbon Dioxide (CO₂)',
    DESCRIPTION: 'A key ingredient for making sugars.\nMore CO₂ (up to a point) = faster\nphotosynthesis.',
    ICON: <CarbonIcon/>
  },
  {
    NAME: 'Temperature',
    DESCRIPTION: 'Too cold — reactions slow.\nToo hot — enzymes stop working.\nBest range: around 25°C.',
    ICON: <TemperatureIcon/>
  },
  {
    NAME: 'Minerals',
    DESCRIPTION: 'Needed to build chlorophyll\nand enzymes. Most important:\nmagnesium, nitrogen, phosphorus.',
    ICON: <MineralsIcon/>
  }
];