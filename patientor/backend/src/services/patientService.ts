/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patients from '../../data/patients';

import { NewPatient, NoSSN, Patient } from '../types';

import { v1 as uuid } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
//const id = uuid();

const addPatient = ( entry: NewPatient): Patient => {
  const NewPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    id: uuid(),
    ...entry
  };

  patients.push(NewPatient);
  return NewPatient;
};

const getEntries = (): Patient[] => {
  return patients;
};


const getPatient = (id: string) => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const getPatients = (): NoSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

export default {
  getEntries,
  getPatients,
  addPatient,
  getPatient
};