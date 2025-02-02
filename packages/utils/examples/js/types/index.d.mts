type Simple2DTuple = [number, number];
type Simple2D = {
    x: number;
    y: number;
};
type Simple2DAndTuple = Simple2D & {
    tuple: Simple2DTuple;
};
type Simple2DLine = [Simple2D, Simple2D];

export type { Simple2D, Simple2DAndTuple, Simple2DLine, Simple2DTuple };
