export function convertNumberToStrWithLen(n, len) {
  let nStr = n.toString();
  if (nStr.length > len) {
    return nStr;
  }
  const numberMissing = len - nStr.length;
  for (let i = 0; i < numberMissing; i++) {
    nStr = "0" + nStr;
  }
  return nStr;
}
