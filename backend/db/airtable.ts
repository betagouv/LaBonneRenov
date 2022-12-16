import Airtable from 'airtable';
import dotenv from 'dotenv';

dotenv.config();

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_KEY_API,
}).base(process.env.AIRTABLE_BASE || '');

export default airtable;
