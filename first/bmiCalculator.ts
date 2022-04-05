

  export interface Results {
    height: number;
    weight: number;
    bmi: string;
  }

  const calculateBmi = (height: number, weight: number, bmin: number): Results => {
    //let bmi = 1.3 * (weight/((height/100)**2.5));
    console.log(bmin);
    switch(true) {
      case  bmin < 18.5:
        return {
          height: height,
          weight: weight,
          bmi:'Underweight'
        };
        break;
      case 18.5 < bmin && bmin < 24.9:
        return {
          height: height,
          weight: weight,
          bmi: 'Normal (healthy weight)'
        };
        break;
      case 25 < bmin && bmin < 29.9:
        return {
          height: height,
          weight: weight,
          bmi:'Overweight'
        };
        break;
      case bmin > 30:
        return {
          height: height,
          weight: weight,
          bmi:'Obese'
        };
        break;
    }
    return {
      height: height,
      weight: weight,
      bmi:'Give parameters'
    };
  };

  
  //console.log(calculateBmi(180, 74))
  //export interface Results {
  //  height: number;
  //  weight: number;
  //  bmi: string;
  //}

export default calculateBmi;