const numJewelsInStones = (jewels, stones) => {
  let output = jewels.split("");
  let one = output[0]
  let two = output[1]
  let jewelsCount =0
  for (let i = 0; i < stones.length; i++) {
    if (stones[i].includes(one) || stones[i].includes(two)) {
      jewelsCount++;
    }
  }

  console.log(jewelsCount);
};
const jewels = "bB"
const stones = "aasdfghASEDbbS";

numJewelsInStones(jewels, stones);
