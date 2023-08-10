//11a
const nums = [10,20,30];
nums[2]=99;

//11b
function getLastValue(array){
  const lastIndex = array.length-1;
  return array[lastIndex];
}

//11c
function arraySwap(array){
  const firstIndex = 0;
  const secondIndex = array.length-1;
  const temp = array[secondIndex];
  array[secondIndex]=array[firstIndex];
  array[firstIndex]= temp;
  return array;
}

//11d
for(i=0;i<=10;i+=2){
  console.log(i);
}

//11e
for(i=5;i>=0;i--){
  console.log(i);
}

//11f
let index1= 0;
while(index1<=10){
  console.log(index1);
  index1+=2;
}
let index2= 5;
while(index2>=0){
  console.log(index2);
  index2--;
}

//11g
const num = [1,2,3];
const plusNum=[];
for(i=0;i<num.length;i++){
  const curNum = num[i];
  plusNum.push(curNum+1);
}
console.log(plusNum);

//11h
function addOne(array){
  let modifiedArray=[];
  for(i=0;i<array.length;i++){
    const curNum = array[i];
    modifiedArray.push(curNum+1);
  }
  console.log(modifiedArray);
}
addOne([1,2,3,4]);

//11i
function addNum(array, num){
  let modifiedArray=[];
  for(i=0;i<array.length;i++){
    const curNum = array[i];
    modifiedArray.push(curNum+num);
  }
  console.log(modifiedArray);
}
addNum([10,20,30],5);

//11j
function addArrays(array1,array2){
  let modifiedArray=[];
  const length = testShorterArray(array1,array2);
  for (i=0;i<length;i++){
    modifiedArray[i]= array1[i]+array2[i];
  }
  console.log(modifiedArray);
}
function testShorterArray(array1,array2){
  const length1 = array1.length;
  const length2 = array2.length;
  if(length1>length2)
    return length2;
  else if(length2>length1)
    return length2;
  else
    return length1;
}
addArrays([5,2,3],[1,2,3]);

//11k
function countPositive(nums){
  let positiveAmount = 0;
  for(i=0;i<nums.length;i++){
    if(nums[i]>0){
      positiveAmount++;
    }
  }
  return positiveAmount;
}
console.log(countPositive([0,-1,0,9,-10]));

//11l
function minMax(nums){
  let min = 0;
  let max = 0;
  for(i=0;i<nums.length;i++){
    if(nums[i]<min)
      min = nums[i];
    else if(nums[i]>max)
      max = nums[i];
  }
  const mixAndMax = {
    min: min,
    max: max
  };
  return mixAndMax;
}
console.log(minMax([1,2,3,4,100,-100]));

//11m
function minMaxUpdated(nums){
  if(nums.length === 0)
    return {min: null,max:null};
  else if(nums.length === 1)
    return {min: nums[0],max:nums[0]};
  let min = 0;
  let max = 0;
  for(i=0;i<nums.length;i++){
    if(nums[i]<min)
      min = nums[i];
    else if(nums[i]>max)
      max = nums[i];
  }
  const mixAndMax = {
    min: min,
    max: max
  };
  return mixAndMax;
}
console.log(minMaxUpdated([1,2,3,4,100,-100]));

//11n
function countWords(words){
  const wordCount = {};
  for(i=0;i<words.length;i++){
    const word = words[i];
    if(!wordCount[word])
      wordCount[word]=1;
    else
      wordCount[word]++;
  }
  return wordCount;
}
console.log(countWords(['dog','monkey','dog','giraffe','giraffe','dog','monkey','gazelle']));