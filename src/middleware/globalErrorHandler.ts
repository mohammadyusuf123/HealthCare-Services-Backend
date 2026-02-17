import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import { StatusCodes } from "http-status-codes";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
         if(envVars.NODE_ENV === "development") {
        console.log("Error from globalErrorHandler", err);
        }
        const statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;
        const message: string = 'Internal Server Error';
        res.status(statusCode).json({
            success: false,
            message: err.message,
            error: err.message
        });
        
    };