const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    let angry = 0;
    let not_angry = 0;

    for (i in theaterIXX){
      theaterIXX[i].hasil === "marah"? angry++ : not_angry++;
    }

    for (i in theaterVGC){
      theaterVGC[i].hasil === "marah"? angry++ : not_angry++;
    }
    
    return emosi === "marah"? angry: not_angry

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
