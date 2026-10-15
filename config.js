/* Conexión con Supabase. Compartido por la encuesta (index.html) y el panel (resultados.html).
   SUPABASE_KEY es la clave pública (publishable o anon). Nunca pongas aquí la service_role/secret.
   Con los dos campos vacíos: la encuesta guarda en el navegador y el panel muestra datos de ejemplo. */
window.ENCUESTA_CONFIG = {
  SUPABASE_URL: 'https://edguxxlfpziqwuyhlrqv.supabase.co',
  SUPABASE_KEY: 'sb_publishable_hPcdxuQb3ex4tpYe4yqQDQ_pryNC88q',
  TABLE: 'respuestas_rcp',
  SURVEY_VERSION: 1
};
