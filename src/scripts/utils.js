const MAX_NUM = 9;

/**
 * Find all unique numbers for a given array size who's result for a given opperator is equal to the given answer
 * @param {Number} size
 * @param {String} op
 * @param {Number} ans
 * @returns {Set}
 */
export default function getAllPermutations({ size, op, ans }) {
  let start = parseInt([...Array(size)].fill(1).join(""));
  let end = parseInt([...Array(size)].fill(MAX_NUM).join(""));
  //FIXME: Doesn't allow for "duplicates"
  let res = new Set();
  for (let i = start; i < end; i++) {
    let t = Array.from(String(i), Number);
    if (!t.includes(0)) {
      let t2 = new Set(t.sort());
      if (t2.size === t.length) {
        let resString = Array.from(t2).join("");
        //TODO: Handle subtraction and division
        switch (op) {
          case "+":
            if (t.reduce((accumulator, curr) => accumulator + curr) === ans) {
              res.add(resString);
            }
            break;
          case "*":
            if (t.reduce((accumulator, curr) => accumulator * curr) === ans) {
              res.add(resString);
            }
            break;
          default:
            break;
        }
      }
    }
  }
  return res;
}
