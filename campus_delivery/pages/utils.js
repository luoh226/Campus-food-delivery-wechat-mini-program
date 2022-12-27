export const generateList = (childCount) => {
  const ans = []
  for (let i = 0; i < childCount; i++) {
    ans.push({
      color: '#FAF283',
      money: i,
      places: i,
      distance: i,
      phonenumber: i
    })
  }
  return ans
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

export const generateGridList = (childCount, columns) => {
  const ans = []
  for (let i = 0; i < childCount; i++) {
    ans.push({
      id: i,
      sub: getRandomInt(columns) + 1,
    })
  }
  return ans
}