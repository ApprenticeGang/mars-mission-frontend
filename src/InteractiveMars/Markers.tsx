
interface Marker {
    id: number;
    rover: string;
    color: string;
    coordinates: number[];
    value: number;
}

export const Markers: Marker[] = [
    {
        id: 1,
        rover: 'Curiosity',
        color: 'red',
        coordinates: [4.5895, 137.4417],
        value: 35,
    },
    {
        id: 2,
        rover: 'Spirit',
        color: 'blue',
        coordinates: [14.5684, 175.472636],
        value: 35,
    },
    {
        id: 3,
        rover: 'Opportunity',
        color: 'orange',
        coordinates: [1.9462, 354.4734],
        value: 35,
    },
    {
    id: 4,
        rover: 'Perseverance',
        color: 'gold',
        coordinates: [-18.4, 77.5],
        value: 35,
    },
];
  