import { Schema } from 'mongoose';
import * as toJson from 'meanie-mongoose-to-json';

export const OfSchema = new Schema({
  author: String,
  description: String,
  createdAt: Date,
}).plugin(toJson);
