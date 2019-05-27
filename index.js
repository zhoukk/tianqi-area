var path = require('path')

module.exports = {
  // 省级（省份、直辖市、自治区）
  provinces: require(path.resolve(__dirname, '../dist/provinces.json')),
  // 地级（城市）
  cities: require(path.resolve(__dirname, '../dist/cities.json')),
  // 县级（区县）
  counties: require(path.resolve(__dirname, '../dist/counties.json')),
}