import { IResponse, T } from "../@types/utils/response";


const responseObj = (status: number, value: T, error: string) => {
    const response: IResponse = {
        status,
        value,
        error
    }
    return response;
}

export default responseObj;