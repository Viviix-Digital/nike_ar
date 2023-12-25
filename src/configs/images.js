import { convertNumberToStrWithLen } from "../utils/string";

const NUMBER_CHARACTER_LENGTH = 5;

function generateImageUrls(prefixPath, len, version = 0) {
  const images = [];
  for (let i = 0; i <= len; i++) {
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
  Infomation1: generateImageUrls("/images/info1/", 150),
  Infomation2: generateImageUrls("/images/info2/", 210),
  Infomation3: generateImageUrls("/images/info3/", 210),
  Infomation4: generateImageUrls("/images/info4/", 210),
  Infomation5: generateImageUrls("/images/info5/", 210),
  Infomation6: generateImageUrls("/images/info6/", 210),
  Infomation7: generateImageUrls("/images/info7/", 210),
  Nike1: generateImageUrls("/images/n1/", 30),
  Nike2: generateImageUrls("/images/n2/", 30),
  Nike3: generateImageUrls("/images/n3/", 30),
  Nike4: generateImageUrls("/images/n4/", 30),
  Nike5: generateImageUrls("/images/n5/", 30),
  Nike6: generateImageUrls("/images/n6/", 30),
  Nike7: generateImageUrls("/images/n7/", 30),
  NikeAlmostCompleted: [],
  Home: generateImageUrls("/images/kv-s1/", 232),
  Guide: generateImageUrls("/images/kv-s2/", 249),
  Completed: generateImageUrls("/images/kv-s6/", 250),
  Congratulations: generateImageUrls("/images/kv-s7/", 249),
};
