import { Schema , model} from 'mongoose';
import { IVoluntarySchema } from './IVoluntarySchema';

const VoluntarySchema = new Schema<IVoluntarySchema>({
  id: {
    type: String,
    required: false,
  },
  admin: {
    type: Boolean,
    required: false,
    default: false,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
     required:true
  },
  birthdate: {
    type: String,
    required: true
  },
  cellphone: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  listFreeDaysOfWeek: {
    type: [String],
    required: true
  },
  numberOfFreeDaysOfWeek: {
    type: Number,
    required: true
  },
  timeOfExperience: {
    type: String,
    required: true
  },
  howMuchParticipate: {
    type: String,
    required: true
  },
  howDidKnowOfSDR: {
    type: String,
    required: true
  },
})

const Voluntary= model<IVoluntarySchema>('voluntary', VoluntarySchema);
export { Voluntary };