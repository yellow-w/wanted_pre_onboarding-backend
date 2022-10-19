export interface IWd {
    id?: number;
    c_id: number;
    signing_bonus: number;
    position: string;
    description: string;
    tech_stack: string;
}

export interface ICompany{
    id?: number;
    name: string;
    nationality: string;
    location: string;
}