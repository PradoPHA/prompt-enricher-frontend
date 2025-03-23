import React, { useState } from "react";
import * as S from "./styles";
import { EnrichedPromptResult } from "./types";

// Opções predefinidas de precisão
const precisionLevels = [
  { label: "Muito baixa", value: "precisao_muito_baixa" },
  { label: "Baixa", value: "precisao_baixa" },
  { label: "Média", value: "precisao_media" },
  { label: "Alta", value: "precisao_alta" },
  { label: "Muito alta", value: "precisao_muito_alta" },
];

export const OBPX = () => {
  const [prompt, setPrompt] = useState("");
  const [precisionIndex, setPrecisionIndex] = useState(2); // Começa com "Média"
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EnrichedPromptResult | null>(null);
  const [error, setError] = useState<string | null>(null); // Estado para armazenar o erro

  const handleEnrichClick = async () => {
    // Limpar erro antes de uma nova tentativa
    setError(null);

    const payload = {
      prompt,
      precision: precisionLevels[precisionIndex].value,
    };

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/enrich_prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha na comunicação com o backend.");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setError(
        "Ocorreu um erro ao tentar enriquecer o prompt. Tente novamente mais tarde."
      ); // Exibe mensagem de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h1>Prompt Expander</h1>
        <br></br>
        <h2>
          This prototype uses the{" "}
          <a
            href="https://obofoundry.org/ontology/mfoem.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            MFOEM
          </a>{" "}
          ontology (Emotion Ontology) as a basis for term expansion.
        </h2>
      </S.Header>

      <S.Form>
        <S.Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Digite o seu prompt..."
        />

        {/* Slider de Precisão */}
        <S.Label>Precisão: {precisionLevels[precisionIndex].label}</S.Label>
        <S.ThresholdSlider
          type="range"
          min="0"
          max={precisionLevels.length - 1}
          step="1"
          value={precisionIndex}
          onChange={(e) => setPrecisionIndex(parseInt(e.target.value))}
        />

        <S.Button onClick={handleEnrichClick} disabled={loading}>
          {loading ? (
            <>
              Enriquecendo... <S.LoadingSpinner />
            </>
          ) : (
            "Enriquecer"
          )}
        </S.Button>
      </S.Form>

      {error && (
        <S.ErrorMessage>
          <p>{error}</p>
        </S.ErrorMessage>
      )}

      {result && (
        <S.Result>
          <h3>Resultado:</h3>
          <p>
            <strong>Status:</strong> {result.Status}
          </p>
          <p>
            <strong>Message:</strong> {result.Message}
          </p>
          <p>
            <strong>Prompt original:</strong> {result["Prompt original"]}
          </p>
          <p>
            <strong>Prompt enriquecido:</strong> {result["Prompt enriquecido"]}
          </p>
          <p>
            <strong>Threshold utilizado:</strong>{" "}
            {result["Threshold utilizado"]}
          </p>
          <p>
            <strong>Nível de Precisão Utilizado:</strong>{" "}
            {
              precisionLevels.find(
                (level) => level.value === result["Nível de precisão utilizado"]
              )?.label
            }
          </p>
          <p>
            <strong>Termos-chave:</strong> {result["Termos-chave"].join(", ")}
          </p>
          <p>
            <strong>Correspondências na ontologia:</strong>
          </p>
          <pre>
            {JSON.stringify(result["Correspondências na ontologia"], null, 2)}
          </pre>
        </S.Result>
      )}
    </S.Container>
  );
};
