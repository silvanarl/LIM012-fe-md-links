const stats = (array) => {
  const quantity = array.length;
  const uniqueLinks = new Set(array.map((element) => element.href)).size;
  if (array.length === 0) {
    return 'No links found in this file.';
  } else {
    const statsReturn = `
    TOTAL: ${quantity}
    UNIQUE: ${uniqueLinks}
    `;
    return statsReturn;
  }
};

const statsValidate = (array) => {
  const quantity = array.length;
  const uniqueLinks = new Set(array.map((element) => element.href)).size;
  const brokenLinks = new Set(array.filter((href) => (href.status >= 400))).size;
  const statsValidateReturn = `
    TOTAL: ${quantity}
    UNIQUE: ${uniqueLinks}
    BROKEN: ${brokenLinks}
    `;
  return statsValidateReturn;
};
module.exports = {
  stats,
  statsValidate
};