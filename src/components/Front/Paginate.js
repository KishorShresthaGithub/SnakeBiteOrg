//hook to paginate array

const paginateArray = (input, perPage) => {
  let temp = [];
  let array = [...input];

  for (let i = 0; i < array.length; i += perPage)
    temp.push(array.slice(i, i + perPage));

  return temp;
};

export default paginateArray;
