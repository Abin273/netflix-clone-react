import OpenAI from 'openai';

export const openaiClient = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_USER_API_KEY, // This is the default and can be omitted
  // This line is adding only because we are integrating openai in frontend. 
  // It is better to do openai in the backend like Nodejs.
  dangerouslyAllowBrowser: true, 
});