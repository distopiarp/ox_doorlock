import create from 'zustand';
import type { StoreState } from './';

export interface DoorColumn extends Omit<StoreState, 'groups'|'reputation'> {
  id: number;
  name: string;
  zone: string;
  groups: { [k: string]: number };
  reputation: { [k: string]: number };
}

export const useDoors = create<{ doors: DoorColumn[]; setDoors: (value: DoorColumn[]) => void }>((set) => ({
  doors: [],
  setDoors: (doors: DoorColumn[]) => set({ doors }),
}));
