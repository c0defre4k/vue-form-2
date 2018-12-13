export default function(that) {
  return !isNaN(that.curValue) && that.curValue%1===0;
}
