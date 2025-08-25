import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Erro na validação das variáveis de ambiente:', parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;