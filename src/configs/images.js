import { convertNumberToStrWithLen } from "../utils/string";

const NUMBER_CHARACTER_LENGTH = 5;

function generateImageUrls(prefixPath, len) {
  const images = [];
  for (let i = 0; i <= len; i++) {
    images.push(
      `${prefixPath}${convertNumberToStrWithLen(
        i,
        NUMBER_CHARACTER_LENGTH
      )}.webp`
    );
  }
  return images;
}

export const ImageConfig = {
  Infomation1: generateImageUrls("/images/info1/", 210),
  Infomation2: [],
  Infomation3: [],
  Infomation4: [],
  Infomation5: [],
  Infomation6: [],
  Infomation7: [],
  Nike1: generateImageUrls("/images/n1/", 30),
  Nike2: [],
  Nike3: [],
  Nike4: [],
  Nike5: [],
  Nike6: [],
  Nike7: [],
  NikeAlmostCompleted: [],
  NikeCompleted: [],
  Congratulations: [],
};
