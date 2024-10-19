import mongoose from 'mongoose';

export const convertStringIdToObjectId = (id: string) => {
  try {
    return mongoose.Types.ObjectId.createFromHexString(id);
  } catch (err) {
    throw new Error('Invalid mongodb ID');
  }
};
