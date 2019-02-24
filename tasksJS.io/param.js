//гарантированое выполнение кода

function throwIfTrue(param) {
  try{
    if (param)
    throw new Error('Test exception');
  }
  catch (e) {
    console.log('catch<br/>');
  }
  finally {
    console.log('finally<br/>');

  }
}
 throwIfTrue(true);  //printed: "catch" and "finally"
 throwIfTrue(false); //printed only "finally"
