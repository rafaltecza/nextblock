export type Action<T extends string> = {
    type: T;
};

export type ActionWithPayload<T extends string, P> = Action<T> & {
    payload: P;
};

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P): { type: T, payload?: P} {
    return { type, payload };
}

type ActionsCreatorsMapObject = {
    [actionCreator: string]: (...args: any[]) => unknown;
}

export type ActionsUnion<A extends ActionsCreatorsMapObject> = ReturnType<A[keyof A]>;


