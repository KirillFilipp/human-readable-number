module.exports = function toReadable(number) {
  let i = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  let j = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  let k = ['hundred'];
  let result;
  let res = number.toString().split(''); // [9,9,0]
  let resI = res[1] + res[2];
  if (number <= 19) {
    return i[number];
  } else if (number >= 20 & number < 100) {
    if (res[1] == '0') {
      return j[res[0]];
    } else {
      return j[res[0]] + ' ' + i[res[1]];
    }
  } else if (number >= 100) {
    if (res[2] == '0') {
      if (resI >= '10' & resI < '20') {
        result = i[res[0]] + ' ' + 'hundred' + ' ' + i[resI];
        return result.replace(/\s+/g, ' ').trim();
      } else {
        result = i[res[0]] + ' ' + 'hundred' + ' ' + j[res[1]];
        return result.replace(/\s+/g, ' ').trim();
      }
    } else if (resI >= '10' & resI < '20') {
      result = i[res[0]] + ' ' + 'hundred' + ' ' + i[resI];
      return result.replace(/\s+/g, ' ').trim();
    } else {
      result = i[res[0]] + ' ' + 'hundred' + ' ' + j[res[1]] + ' ' + i[res[2]];
      return result.replace(/\s+/g, ' ').trim();
    }
  }
  return result;
}

//999
//nine hundred ninety nine