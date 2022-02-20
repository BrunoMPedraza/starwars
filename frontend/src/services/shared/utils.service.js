export const fakeLoader = (time) =>{
    setTimeout(() => {
        return true
    }, time);
}

export const iterateInConsole = (array) => {
    for (let i = 0; i < array.results.length; i++) {
        console.log(array.results[i].name);
      }
}