import type { ZodFormattedError } from 'zod';
import { serverScheme } from './schema';

export const formatErrors = (
  errors: ZodFormattedError<Map<string, string>, string>
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) {
        return `${name}: ${value._errors.join(', ')}\n`;
      }
      return undefined;
    })
    .filter(Boolean);

const env = serverScheme.safeParse(process.env);

if (env.success === false) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(env.error.format())
  );
  throw new Error('Invalid environment variables');
}

export const serverEnv = env.data;
