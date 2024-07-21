import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/components/PlacesPage/schema.ts',
  out: './migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: 'libsql://rumorecife-joaooliveira.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjE1ODE5MzEsImlkIjoiMzczZjVlNTUtNmY2ZC00YWNkLWI1ZmMtN2VhZjIzN2M0MTFmIn0.kq7K8oslXjy8lRYAtQc8naC98z3Q65D8LHzsiyjMo48-4qdKwANvoFJYcPKZ9mjLd771sHDlxgNvX9vuI6BkAw',
  },
});