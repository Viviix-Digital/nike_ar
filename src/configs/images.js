import { convertNumberToStrWithLen } from "../utils/string";

const NUMBER_CHARACTER_LENGTH = 5;

function generateImageUrls(prefixPath, start, end, version = 0) {
  const images = [];
  for (let i = start; i <= end; i++) {
    images.push(
      `${prefixPath}${convertNumberToStrWithLen(
        i,
        NUMBER_CHARACTER_LENGTH
      )}.webp?v=${version}`
    );
  }
  return images;
}

export const ImageConfig = {
  Infomation1: generateImageUrls("/images/info1/", 0, 150, 1),
  Infomation2: generateImageUrls("/images/info2/", 0, 210, 1),
  Infomation3: generateImageUrls("/images/info3/", 0, 210, 1),
  Infomation4: generateImageUrls("/images/info4/", 0, 210, 1),
  Infomation5: generateImageUrls("/images/info5/", 0, 210, 1),
  Infomation6: generateImageUrls("/images/info6/", 0, 210, 1),
  Infomation7: generateImageUrls("/images/info7/", 0, 210, 1),
  Nike1: generateImageUrls("/images/n1/", 0, 30, 1),
  Nike2: generateImageUrls("/images/n2/", 0, 30, 1),
  Nike3: generateImageUrls("/images/n3/", 0, 30, 1),
  Nike4: generateImageUrls("/images/n4/", 0, 30, 1),
  Nike5: generateImageUrls("/images/n5/", 0, 30, 1),
  Nike6: generateImageUrls("/images/n6/", 0, 30, 1),
  Nike7: generateImageUrls("/images/n7/", 0, 30, 1),
  Home: generateImageUrls("/images/kv-s1/", 0, 120, 2),
  Guide: generateImageUrls("/images/kv-s2/", 0, 249, 1),
  Completed: generateImageUrls("/images/kv-s6/", 0, 250, 1),
  Congratulations: generateImageUrls("/images/kv-s7/", 0, 249, 1),
  Button1: generateImageUrls("/images/button_1/", 1, 124),
  Button2: generateImageUrls("/images/button_2/", 1, 124),
  Button3: generateImageUrls("/images/button_3/", 0, 100),
  Button4: generateImageUrls("/images/button_4/", 0, 249),
  ScoreEffect: generateImageUrls("/images/score_effect/", 0, 25),
  Pice1: generateImageUrls("/images/r1/", 0, 30),
  Pice2: generateImageUrls("/images/r2/", 0, 30),
  Pice3: generateImageUrls("/images/r3/", 0, 30),
  Pice4: generateImageUrls("/images/r4/", 0, 30),
  Pice5: generateImageUrls("/images/r5/", 0, 30),
  Pice6: generateImageUrls("/images/r6/", 0, 30),
  Pice7: generateImageUrls("/images/r7/", 0, 30),
};
