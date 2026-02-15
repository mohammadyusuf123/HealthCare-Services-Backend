import { Response } from "express";

interface IResponseData<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data?: T
}

export const sendResponse = <T>({ statusCode, success, message, data }: IResponseData<T>, res:Response) => {
    res.status(statusCode).json({
        success,
        message,
        data
    })
}