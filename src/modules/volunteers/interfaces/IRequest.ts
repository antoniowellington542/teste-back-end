interface IRequest {
  email?: string;
  name?: string;
  birthdate?: string;
  cellphone?: string;
  occupation?: string;
  university?: string;
  semester?: string;
  speciality?: string;
  listFreeDaysOfWeek?: Array<string>;
  numberOfFreeDaysOfWeek?: number;
  timeOfExperience?: string;
  howMuchParticipate?: string;
  howDidKnowOfSDR?: string;
}

export { IRequest };