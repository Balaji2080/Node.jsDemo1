const jsonResult = {
  name: 'balaji',
  techStack: 'Mern',
  project: 'Travelers',
  someKey1: 's1',
  someKey2: 's2',
};

const { techStack: someKey, project, ...otherKeys } = jsonResult;
console.log(someKey, project);
console.log(otherKeys);

const dbResult = [
  {
    name: 'balaji',
    techStack: 'Mern',
    project: 'Travelers',
    someKey1: 's1',
    someKey2: 's2',
  },
  {
    name: 'balaji2',
    techStack: 'Mern',
    project: 'Travelers',
    someKey1: 's1',
    someKey2: 's2',
  },
  {
    name: 'balaji3',
    techStack: 'java',
    project: 'Travelers',
    someKey1: 's1',
    someKey2: 's2',
  },
];
const resFilter = dbResult.filter((result) => {
  if (result.techStack == 'java') {
    return result;
  }
});
const [r3, ...otherResults] = dbResult;
console.log(otherResults);
console.log(resFilter);

const os = require('os');
console.log(os.cpus());
