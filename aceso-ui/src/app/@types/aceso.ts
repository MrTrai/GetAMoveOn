export interface Doctor {
  houseHoldList: string[],
  name: string,
  email: string,
  profession: string,
  gender: string
}

export interface HouseHold {
  membersList: string[],
  headOfHousehold: string,
  doctorID: string
}

export interface User {
  userProfile: UserProfile,
  doctorID: string,
  name: string,
  headOfHouseHold: boolean,
  data: UserData,
  healthStatus: string

}

export interface UserData {
  heartRate: any[],
  weight: any[],
  temperature: any[]
}

export interface UserProfile{

}
