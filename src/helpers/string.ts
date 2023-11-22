declare global {
  interface String {
    capitalizeEachWord: () => string;
  }
}

String.prototype.capitalizeEachWord = function () {
  return this.split(' ')
    .map(w => w[0]?.toUpperCase() + w.slice(1))
    .join(' ');
};

export {};
