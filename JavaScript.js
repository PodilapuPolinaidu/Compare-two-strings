const str1 = "JavaScript Learning";
const str2 = "javascript learning";
// const result = str1.toUpperCase() === str2.toUpperCase();

const result = new RegExp(str1, "gi");
const res = result.test(str2);
if(res){
  document.write("The strings are similar");
}
else{
  document.write("Not similar");
}