
interface tryCatchError {
    code: number,
    msg: string
};

export const errorHandler = (error: unknown): tryCatchError =>{

    if(typeof error === 'string')  return { code: 500, msg: error }; 
    else if (error instanceof Error) return { code: 500, msg: error.message};
    else return { code: 500, msg: 'Something went wrong!' };
};