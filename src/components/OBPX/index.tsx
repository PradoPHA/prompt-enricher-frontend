import React, { useState } from "react";
import * as S from "./styles";
import { EnrichedPromptResult } from "./types";

// Opções predefinidas de precisão
const precisionLevels = [
  { label: "Very low", value: "very_low_precision" },
  { label: "Low", value: "low_precision" },
  { label: "Medium", value: "medium_precision" },
  { label: "High", value: "high_precision" },
  { label: "Very high", value: "very_high_precision" },
];

export const OBPX = () => {
  const [prompt, setPrompt] = useState("");
  const [precisionIndex, setPrecisionIndex] = useState(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EnrichedPromptResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const element = document.getElementById("promptContent");
    if (element) {
      const text = element.innerText;
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 15000); // Reseta o botão após 15 segundos
      });
    }
    if (element) {
      navigator.clipboard.writeText(element.innerText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 15000); // Reseta o botão após 15 segundos
      });
    }
  };

  const handleEnrichClick = async () => {
    setError(null);

    const payload = {
      prompt,
      precision: precisionLevels[precisionIndex].value,
    };

    setLoading(true);
    setResult(null);

    try {
      // const response = await fetch("https://web-production-ff2b.up.railway.app/enrich_prompt", {
      const response = await fetch("http://localhost:8000/enrich_prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with the backend.");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while trying to enhance the prompt. Please try again later."
      );
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
            href="https://ontobee.org/ontology/MFOEM"
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
          placeholder="Enter your prompt...."
        />

        <S.Label>Precision: {precisionLevels[precisionIndex].label}</S.Label>
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
              Expanding... <S.LoadingSpinner />
            </>
          ) : (
            "Expand"
          )}
        </S.Button>
      </S.Form>

      {error && (
        <S.ErrorMessage>
          <p>{error}</p>
        </S.ErrorMessage>
      )}

      {result && (
        <>
          <S.EnrichedPromptContainer>
            <S.EnrichedPrompt>
              {result["Enriched"] ? (
                <>
                  <h3>Enriched Prompt:</h3>
                  <br />
                  <p id="promptContent">{result["Enriched Prompt"]}</p>
                  <S.CopyButton onClick={handleCopy}>
                    {copied ? "Copied!" : "Copy"}
                  </S.CopyButton>
                </>
              ) : (
                <h3>This prompt could not be enriched!</h3>
              )}
            </S.EnrichedPrompt>
          </S.EnrichedPromptContainer>

          <S.ToggleDetailsButton
            onClick={() => setShowAdvancedDetails((prev) => !prev)}
          >
            {showAdvancedDetails
              ? "Hide Advanced Details"
              : "Show Advanced Details"}
          </S.ToggleDetailsButton>
          {showAdvancedDetails && (
            <S.Result>
              <h3>Result:</h3>
              <p>
                <strong>Status:</strong> {result.Status}
              </p>
              <p>
                <strong>Message:</strong> {result.Message}
              </p>
              <p>
                <strong>Original Prompt</strong> {result["Original Prompt"]}
              </p>
              <p>
                <strong>
                  {result["Enriched"] ? "Threshold used:" : "Tried thresholds:"}
                </strong>{" "}
                {result["Enriched"]
                  ? result["Threshold used"]
                  : (result["Tried thresholds"] ?? []).join(", ")}
              </p>
              <p>
                <strong>Precision level used:</strong>{" "}
                {
                  precisionLevels.find(
                    (level) => level.value === result["Precision level used"]
                  )?.label
                }
              </p>
              <p>
                <strong>Key terms:</strong> {result["Key terms"].join(", ")}
              </p>
              <p>
                <strong>Ontology matches:</strong>
              </p>
              <pre>{JSON.stringify(result["Ontology matches"], null, 2)}</pre>
            </S.Result>
          )}
        </>
      )}
    </S.Container>
  );
};
