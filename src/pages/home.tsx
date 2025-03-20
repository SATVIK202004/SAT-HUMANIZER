import { useState, useEffect } from "react";
import { Shield, Copy, CheckCheck, Brain, RotateCcw, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Spinner } from "../components/ui/spinner";
import {
  processText,
  ProcessType,
  intensityLevels,
  ProcessingResult,
  ProcessingConfig,
} from "../lib/text-processor";

// Maximum character limit
const MAX_CHARS = 80000;

export function HomePage() {
  // Input text state
  const [inputText, setInputText] = useState("");
  const [charCount, setCharCount] = useState(0);

  // Processing options state
  const [processType, setProcessType] = useState<ProcessType>("combined");
  const [intensity, setIntensity] = useState(intensityLevels.medium);

  // Results state
  const [result, setResult] = useState<ProcessingResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Copy states for each variation
  const [copiedStates, setCopiedStates] = useState<boolean[]>([]);

  // Update character count when input changes
  useEffect(() => {
    setCharCount(inputText.length);
  }, [inputText]);

  // Reset copied states when new results come in
  useEffect(() => {
    if (result) {
      setCopiedStates(new Array(result.variations.length).fill(false));
    }
  }, [result]);

  // Handle text processing
  const handleProcess = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to humanize");
      return;
    }

    if (inputText.length > MAX_CHARS) {
      setError(`Text exceeds maximum limit of ${MAX_CHARS} characters`);
      return;
    }

    setError(null);
    setIsProcessing(true);

    try {
      const config: ProcessingConfig = {
        intensity,
        processType,
        variationCount: 5, // Always generate 5 variations
        preserveFormatting: true,
        maxChars: MAX_CHARS,
      };

      const processResult = await processText(inputText, config);
      setResult(processResult);

      if (!processResult.success) {
        setError(processResult.message || "Failed to process text");
      }
    } catch (err) {
      setError(`An error occurred: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Reset the form
  const handleReset = () => {
    setInputText("");
    setResult(null);
    setError(null);
  };

  // Copy text to clipboard
  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);

      // Update the copied state for this variation
      const newCopiedStates = [...copiedStates];
      newCopiedStates[index] = true;
      setCopiedStates(newCopiedStates);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        const resetStates = [...copiedStates];
        resetStates[index] = false;
        setCopiedStates(resetStates);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="container py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SAT Humanizer
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Transform AI-generated text into human-like writing. Bypass AI detection tools.
        </p>
      </div>

      {/* Input Section */}
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="input-text" className="text-sm font-medium">
              Enter text to humanize
            </label>
            <div className="relative">
              <Textarea
                id="input-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your AI-generated text here (up to 80,000 characters)..."
                className="min-h-[300px] resize-y font-mono text-sm"
              />
              <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                {charCount}/{MAX_CHARS}
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-center gap-2 text-sm">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={handleProcess}
              disabled={isProcessing || !inputText.trim()}
              variant="gradient"
              className="gap-2"
            >
              {isProcessing ? <Spinner size="sm" /> : <Brain className="h-4 w-4" />}
              {isProcessing ? "Processing..." : "Humanize Text"}
            </Button>

            <Button
              onClick={handleReset}
              variant="outline"
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        <div className="space-y-6 border p-4 rounded-lg bg-muted/10">
          <div>
            <h3 className="font-medium mb-2">Processing Mode</h3>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant={processType === "humanize" ? "default" : "outline"}
                onClick={() => setProcessType("humanize")}
                className="justify-start"
              >
                <div className="flex flex-col items-start text-left">
                  <span>Humanize Only</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    Makes text sound more human
                  </span>
                </div>
              </Button>

              <Button
                variant={processType === "bypass" ? "default" : "outline"}
                onClick={() => setProcessType("bypass")}
                className="justify-start"
              >
                <div className="flex flex-col items-start text-left">
                  <span>AI Detection Bypass</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    Focuses on evading AI detection
                  </span>
                </div>
              </Button>

              <Button
                variant={processType === "combined" ? "default" : "outline"}
                onClick={() => setProcessType("combined")}
                className="justify-start"
              >
                <div className="flex flex-col items-start text-left">
                  <span>Combined Approach</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    Humanizes and bypasses detection
                  </span>
                </div>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Humanization Intensity</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={intensity === intensityLevels.light ? "default" : "outline"}
                onClick={() => setIntensity(intensityLevels.light)}
                size="sm"
              >
                Light
              </Button>

              <Button
                variant={intensity === intensityLevels.medium ? "default" : "outline"}
                onClick={() => setIntensity(intensityLevels.medium)}
                size="sm"
              >
                Medium
              </Button>

              <Button
                variant={intensity === intensityLevels.high ? "default" : "outline"}
                onClick={() => setIntensity(intensityLevels.high)}
                size="sm"
              >
                High
              </Button>

              <Button
                variant={intensity === intensityLevels.extreme ? "default" : "outline"}
                onClick={() => setIntensity(intensityLevels.extreme)}
                size="sm"
              >
                Extreme
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <h3 className="font-medium">Bypasses AI Detection</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Our advanced algorithms help your text bypass GPTZero, Undetectable AI, and other detection tools.
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {result && result.success && (
        <div className="mt-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Results</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {result.detectionAssessment && (
                <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium
                  ${result.stats.detectionScoreEstimate < 30
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : result.stats.detectionScoreEstimate < 60
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  {result.detectionAssessment}
                </div>
              )}
              <div className="text-sm text-muted-foreground">
                Processed in {Math.round(result.stats.processingTime)}ms
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {result.variations.map((variation, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-background shadow-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Variation {index + 1}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(variation, index)}
                    className="gap-1"
                  >
                    {copiedStates[index] ? (
                      <>
                        <CheckCheck className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-muted/30 p-3 rounded-md max-h-[300px] overflow-y-auto">
                  <pre className="text-sm whitespace-pre-wrap font-times-new-roman">{variation}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Advanced Humanization</h3>
            <p className="text-sm text-muted-foreground">
              Sophisticated algorithms that transform AI text into natural, human-like writing styles.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">AI Detection Bypass</h3>
            <p className="text-sm text-muted-foreground">
              Evades sophisticated AI detection systems like GPTZero and Undetectable.ai with specialized techniques.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <div className="text-lg font-bold text-primary">5x</div>
            </div>
            <h3 className="font-medium">Multiple Variations</h3>
            <p className="text-sm text-muted-foreground">
              Generate 5 unique variations of your text with different humanization patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
