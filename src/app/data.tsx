export interface CommercialFrame {
  id: number;
  frameNumber: string;
  size: string;
  price: string;
  status: "Wazi" | "Imepangwa";
  image: string;
  descriptionSwahili: string;
  locationDetails: string;
}

export interface CommercialBlock {
  blockName: string;
  registrationNumber: string;
  frames: CommercialFrame[];
}

export const groupedBlocksData: CommercialBlock[] = [
  {
    blockName: "BLOCK A (Main Frontage)",
    registrationNumber: "REG-2026-BLKA-0091",
    frames: [
      {
        id: 1,
        frameNumber: "Fremu No. 01",
        size: "Mita 4 x 5 (Kubwa)",
        price: "TSh 350,000",
        status: "Wazi",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Fremu hii ipo upande wa mbele kabisa wa barabara kuu. Ina mfumo wa Luku yake yenyewe na inafaa kwa duka la jumla au maduka ya suti.",
        locationDetails: "Ghorofa ya Chini - Karibu na Lango Kuu la Kuingilia",
      },
      {
        id: 2,
        frameNumber: "Fremu No. 02",
        size: "Mita 3 x 4 (Standard)",
        price: "TSh 280,000",
        status: "Wazi",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Ina sakafu safi ya marumaru (tiles) na milango imara ya chuma. Inafaa kwa duka la simu au ofisi ya uwakala.",
        locationDetails: "Ghorofa ya Chini - Mkono wa Kulia ukitokea Gate Kuu",
      },
      {
        id: 3,
        frameNumber: "Fremu No. 03",
        size: "Mita 4 x 5 (Kubwa)",
        price: "TSh 350,000",
        status: "Imepangwa",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Fremu ya kona yenye madirisha makubwa ya kioo kwa ajili ya maonyesho mazuri ya bidhaa. Inafaa kwa duka la viatu au famasi.",
        locationDetails: "Ghorofa ya Chini - Mkabala na Eneo la Maegesho",
      },
      {
        id: 4,
        frameNumber: "Fremu No. 04",
        size: "Mita 4 x 4 (Standard)",
        price: "TSh 300,000",
        status: "Wazi",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Fremu nzuri karibu kabisa na korido kuu. Inafaa sana kwa duka la vinywaji, salon ya kiume, au duka la vipodozi.",
        locationDetails: "Ghorofa ya Chini - Karibu na Ngazi za Katikati",
      },
    ],
  },
  {
    blockName: "BLOCK B (Middle Arcade)",
    registrationNumber: "REG-2026-BLKB-0092",
    frames: [
      {
        id: 5,
        frameNumber: "Fremu No. 05",
        size: "Mita 5 x 6 (Ziada)",
        price: "TSh 500,000",
        status: "Wazi",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Eneo kubwa sana linalofaa kwa ofisi ya benki ndogo, duka kubwa la rejareja au saluni ya kisasa.",
        locationDetails: "Njia ya Kati - Karibu na Eneo la ATM",
      },
      {
        id: 6,
        frameNumber: "Fremu No. 06",
        size: "Mita 3 x 4 (Standard)",
        price: "TSh 250,000",
        status: "Wazi",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Fremu yenye utulivu inayofaa sana kwa biashara ya kutoa huduma kama vile studio au duka la vifaa vya shule.",
        locationDetails: "Njia ya Kati - Ghorofa ya Kwanza, Mkono wa Kushoto",
      },
      {
        id: 7,
        frameNumber: "Fremu No. 07",
        size: "Mita 4 x 4 (Mstari)",
        price: "TSh 300,000",
        status: "Imepangwa",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Fremu ya kisasa iliyo tayari kwa matumizi. Ina wiring kamili ya feni na taa. Inafaa kwa mgahawa mdogo au duka la juisi.",
        locationDetails: "Njia ya Kati - Hatua chache karibu na Viwanja vya Chakula",
      },
      {
        id: 8,
        frameNumber: "Fremu No. 08",
        size: "Mita 3 x 4 (Standard)",
        price: "TSh 260,000",
        status: "Wazi",
        image: "/utils/milk-frame.png",
        descriptionSwahili: "Eneo zuri upande wa ghorofa ya kwanza linalotazama ndani ya uwanja wa maduka. Inafaa kwa duka la nguo za watoto.",
        locationDetails: "Ghorofa ya Kwanza - Karibu na Eneo la Mapumziko",
      },
    ],
  },
];
