export interface Criterion  {
    name : string;
    weight: number;
    isBenefit: boolean;
}

export interface Alternative {
    name: string;
    values: number[];
}
