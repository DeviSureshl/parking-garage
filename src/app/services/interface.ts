export interface IRegistration {
  checkInDate: string;
  parkingSlotType: string;
  vehicleNumber: string;
  floor: string;
}

export interface IFloorCapacity {
  id: string;
  name: string;
  parkingSlots: {
    slotId: string;
    count: number;
    remaining: number;
    used: number;
  }[];
}

export interface ITransaction {
  registration: IRegistration,
  paymentDate: string,
  amount: number
}