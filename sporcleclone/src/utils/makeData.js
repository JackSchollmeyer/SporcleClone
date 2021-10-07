import faker from "faker";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  const privateChange = Math.random();
  return {
    name: faker.company.companyName(0),
    completedBy: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? "draft" : "published",
    isPrivate: privateChange > 0.1 ? false : true,
    createdAt: new Date(),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
