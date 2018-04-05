var recipes = {flour:'1 cup'}
function updateObjectWithKeyAndValue(obj, key, value) {
 var object =  Object.assign({},obj,{[key]:value})
  return object
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object.[key] = "value"
}