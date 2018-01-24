function filter_list(l) {
  return l.filter((obj) => {
return typeof(obj) === 'number'
})
}