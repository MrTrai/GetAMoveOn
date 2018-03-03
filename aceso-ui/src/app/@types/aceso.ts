export interface Doctor {
  houseHoldIDList?: string[],
  doctorID?: string,
  name: string,
  email: string,
  profession: string,
  gender: string
}

export interface HouseHold {
  householdID: string;
  membersList: string[],
  headOfHousehold: string,
  doctorID: string
}

export interface User {
  userID: string,
  householdID: string,
  personalDoctorID: string,
  userProfile?: UserProfile,
  name: string,
  isHeadOfHouseHold?: boolean,
  data?: UserData,
  healthStatus?: string,
  email: string
}

export interface UserData {
  heartRate: any[],
  weight: any[],
  temperature: any[],
  heartRatePrediction: any[],
  weightPrediction: any[],
  temperaturePrediction: any[]
}

export interface UserProfile{

}


