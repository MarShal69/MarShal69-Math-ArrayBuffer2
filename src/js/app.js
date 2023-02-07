import getBuffer from './initialData';

export default class ArrayBufferConverter {
  // class ArrayBufferConverter {
  // eslint-disable-next-line class-methods-use-this
  load() {
    const data = new Uint16Array(getBuffer());
    return data;
  }

  // eslint-disable-next-line class-methods-use-this
  toString(data) {
    const data1 = [];
    data.forEach((el) => {
      data1.push(String.fromCharCode(el));
    });
    const dataStr = data1.join('');
    return dataStr;
  }
}


// const buffer = new ArrayBufferConverter();
// console.log(buffer);
// console.log(buffer.load());
// console.log(buffer.toString(buffer.load()));
