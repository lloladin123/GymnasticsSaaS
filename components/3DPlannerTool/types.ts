export interface Block {
  id: number;
  type: string;
  behaviors: string[];
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number, number];
}
