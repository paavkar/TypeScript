import express from 'express';
import  calculator from './calculator';
// <reference path="bmiCalculator.d.ts"/>
//import Results from './bmiCalculator';
import calculateBmi from './bmiCalculator';

const app = express();



interface Results {
  height: number;
  weight: number;
  bmi: string;
}

/*
const calculateBmi = (height: number, weight: number, bmi: number): Results => {
  //let bmi = 1.3 * (weight/((height/100)**2.5));
  console.log(bmi)
  switch(true) {
    case  bmi < 18.5:
      return {
        height: height,
        weight: weight,
        bmi:'Underweight'
      }
      break;
    case 18.5 < bmi && bmi < 24.9:
      return {
        height: height,
        weight: weight,
        bmi: 'Normal (healthy weight)'
      }
      break;
    case 25 < bmi && bmi < 29.9:
      return {
        height: height,
        weight: weight,
        bmi:'Overweight'
      }
      break;
    case bmi > 30:
      return {
        height: height,
        weight: weight,
        bmi:'Obese'
      }
      break;
  }
  return {
    height: height,
    weight: weight,
    bmi:'Give parameters'
  }
}
*/

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  const bmin: number = 1.3 * (weight/((height/100)**2.5));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const bmi: Results = calculateBmi(height, weight, bmin);
  res.send(bmi);
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if ( !value1 || isNaN(Number(value1))) {
    return res.send({ error: '...'}).status(400);
  }

  if ( !value2 || isNaN(Number(value1))) {
    return res.send({ error: '...'}).status(400);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op);
  return res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});