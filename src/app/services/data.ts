export const parkingSlotType = [
  {
    id: 'PST-001',
    name: 'Compact',
    size: 4,
  },
  {
    id: 'PST-002',
    name: 'Large',
    size: 8,
  },
  {
    id: 'PST-003',
    name: 'Motorcycle',
    size: 2,
  },
  {
    id: 'PST-004',
    name: 'Handicapped',
  },
];

export const floorCapacityMap = [
  {
    id: 'FLR-001',
    name: 'floor 1',
    parkingSlots: [
      {
        slotId: 'PST-001',
        count: 3,
        used: 0,
      },
      {
        slotId: 'PST-002',
        count: 3,
        used: 0,
      },{
        slotId: 'PST-003',
        count: 5,
        used: 0,
      },
      {
        slotId: 'PST-004',
        count: 2,
        used: 0,
      },
    ],
  },
  {
    id: 'FLR-002',
    name: 'floor 2',
    parkingSlots: [
      {
        slotId: 'PST-001',
        count: 3,
        used: 0,
      },
      {
        slotId: 'PST-002',
        count: 3,
        used: 0,
      },{
        slotId: 'PST-003',
        count: 5,
        used: 0,
      },
      {
        slotId: 'PST-004',
        count: 2,
        used: 0,
      },
    ],
  },
  {
    id: 'FLR-003',
    name: 'floor 3',
    parkingSlots: [
      {
        slotId: 'PST-001',
        count: 3,
        used: 0,
      },
      {
        slotId: 'PST-002',
        count: 3,
        used: 0,
      },{
        slotId: 'PST-003',
        count: 5,
        used: 0,
      },
      {
        slotId: 'PST-004',
        count: 2,
        used: 0,
      },
    ],
  },
  {
    id: 'FLR-004',
    name: 'floor 4',
    parkingSlots: [
      {
        slotId: 'PST-001',
        count: 5,
        used: 0,
      },
      {
        slotId: 'PST-002',
        count: 5,
        used: 0,
      },{
        slotId: 'PST-003',
        count: 5,
        used: 0,
      },
    ],
  },
];
