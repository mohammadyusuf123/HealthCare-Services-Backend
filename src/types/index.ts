
export interface createPatient {
    userId: string
    name: string,
    email: string,
    password: string
}

export interface EnvConfig{
    NODE_ENV: string
    PORT: string
    DATABASE_URL: string
    BETTER_AUTH_URL: string
    BETTER_AUTH_SECRET: string
    APP_URL: string
}