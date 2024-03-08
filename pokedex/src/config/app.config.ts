export const EnvConfiguration= ()=> ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    default_limit: process.env.DEFAULT_LIMIT || 7,
})

//configuracion para el modulo de NEST, dentro de building blocks se puede usar
//en algun momento antes de eso, no