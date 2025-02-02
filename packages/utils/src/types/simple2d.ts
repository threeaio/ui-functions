export type Simple2DTuple = [number, number];
export type Simple2D = { x: number; y: number };

export type Simple2DAndTuple = Simple2D & { tuple: Simple2DTuple };
export type Simple2DLine = [Simple2D, Simple2D];