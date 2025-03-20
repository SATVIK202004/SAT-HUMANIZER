import { Link } from "react-router-dom";
import { Brain, Shield, Code, Clipboard, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function AboutPage() {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        About SAT Humanizer
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground">
          SAT Humanizer is an advanced text processing tool developed by Peddisetty, designed to transform AI-generated content into more human-like writing. Our sophisticated algorithms help bypass AI detection tools while preserving the original meaning of your text.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>

        <div className="grid gap-6 my-6">
          <div className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Advanced Linguistic Analysis</h3>
              <p className="text-muted-foreground">
                Our system analyzes the distinctive patterns of AI-generated text and introduces natural human variations in writing style, syntax, and vocabulary.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Multi-Strategy Approach</h3>
              <p className="text-muted-foreground">
                We employ multiple humanization strategies including sentence restructuring, vocabulary variation, typing errors, inconsistencies, and format modifications, all carefully balanced to maintain readability.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">AI Detection Evasion</h3>
              <p className="text-muted-foreground">
                Special techniques are employed to bypass AI detection tools like GPTZero and Undetectable.ai, including invisible character insertion, homoglyphs, and perplexity injection.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clipboard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Multiple Variations</h3>
              <p className="text-muted-foreground">
                For each submission, SAT Humanizer generates 5 unique variations with different humanization patterns, giving you options to choose from.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Why Use SAT Humanizer?</h2>

        <ul className="space-y-2 my-4 list-none pl-0">
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>Process up to 80,000 characters at once, handling large documents and essays</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>Adjustable intensity levels to control the degree of humanization</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>Specialized techniques to bypass the latest AI detection algorithms</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>Safe and secure processing with no storage of your text</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>Fast processing with minimal wait times</span>
          </li>
        </ul>

        <div className="bg-muted/30 p-6 rounded-lg mt-10">
          <h3 className="text-xl font-medium mb-2">Important Disclaimer</h3>
          <p className="text-sm text-muted-foreground mb-4">
            SAT Humanizer is designed for legitimate use cases such as improving AI-assisted writing for academic and professional purposes. Users are responsible for ensuring that their use of this tool complies with relevant academic integrity policies, terms of service of other platforms, and applicable laws.
          </p>
          <p className="text-sm text-muted-foreground">
            We do not encourage or condone any form of academic dishonesty, plagiarism, or misrepresentation. The tool should be used ethically and responsibly.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-medium mb-4">Ready to Humanize Your Text?</h3>
          <Link to="/">
            <Button variant="gradient" size="lg" className="gap-2">
              Try SAT Humanizer Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
