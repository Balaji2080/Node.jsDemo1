// run `node index.js` in the terminal

let a = 1;
let b = 2;

const pr1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a == 1) {
        console.log('PR1 Resolved');
        resolve(a + a);
      } else {
        console.log('PR1 Rejected');
        reject('Error Occured');
      }
    }, 5000);
  });
};

const pr2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b == 2) {
        console.log('PR2 Resolved');
        resolve(b + b);
      } else {
        console.log('PR2 Rejected');
        reject('Error Occured');
      }
    }, 1000);
  });
};

const pr3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a == 1) {
        console.log('PR3 Resolved');
        resolve(a + a);
      } else {
        console.log('PR2 Rejected');
        reject('Error Occured');
      }
    }, 1000);
  });
};

Promise.all([pr3(), pr2()])
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('failed');
  });
