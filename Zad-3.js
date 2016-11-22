

      let arr = [25, null, 35, "name", undefined, 33, 12, NaN, "40", 1, false];

        console.log(sum(arr));

      function sum(arr){
        let sum = 0;

        for (let variable of arr) {
            if(check(variable)){
              sum+=variable;
            }
        }
        return sum;
      }
      function check(variable){

        if(typeof variable !== "number" || (variable | 0) === 0){
            return false;
        }
        return true;
      }
