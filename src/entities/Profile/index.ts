export type { IProfile, ProfileSchema } from './model/types/profileSchema';
export { profileActions, profileReducer } from './model/slice/profileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
