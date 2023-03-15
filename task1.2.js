function deepClone(obj){
   return {...obj};
}

const object1 = {
  field1: 'source field',
  field2: 1,
}

const object2 = {
  age: 18
}

const object3=deepClone(object1);
console.log('cloned object:', object3);
console.log('source object:', object1);
object3.field1='clone field';
object3.field2=2;
console.log('cloned object after changes:', object3);

const object4=deepClone(object2);
console.log('second clone:', object4);