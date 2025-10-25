import { z } from 'zod';

const envSchema = z.object({
  VITE_ENVIRONMENT: z.enum([
    'development',
    // 'staging',
    'production',
  ]),
});

const env = envSchema.parse(import.meta.env);

export default env;
