export interface EnrichedPromptResult {
  Status: string;
  Enriched: boolean;
  Message: string;
  "Original Prompt": string;
  "Enriched Prompt": string;
  "Threshold used": number;
  "Tried thresholds"?: number[];
  "Precision level used": string;
  "Key terms": string[];
  "Ontology matches": Record<string, never>;
}
