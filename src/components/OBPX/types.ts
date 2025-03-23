export interface EnrichedPromptResult {
  Status: string;
  Message: string;
  "Prompt original": string;
  "Prompt enriquecido": string;
  "Threshold utilizado": number;
  "Nível de precisão utilizado": string;
  "Termos-chave": string[];
  "Correspondências na ontologia": Record<string, never>; // Aqui, podemos ajustar mais conforme o formato de matches_info
}
