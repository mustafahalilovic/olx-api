import 'dotenv/config';

// telling typescript that we are sure POSTGRES_PORT is string, otherwise it will be
// string | undefined and it will not allow to parse it to int.
const port: string = process.env.POSTGRES_PORT!;

export const config = {
    host: process.env.POSTGRES_HOST,
    port: parseInt(port),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ensureDatabaseExists: true
};


