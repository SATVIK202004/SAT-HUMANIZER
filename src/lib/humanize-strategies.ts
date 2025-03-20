// Define common academic words to replace with more conversational alternatives
const academicToConversational: Record<string, string[]> = {
  "demonstrate": ["show", "reveal", "indicate", "prove", "display"],
  "utilize": ["use", "employ", "apply", "work with", "leverage"],
  "facilitate": ["help", "assist", "aid", "make easier", "enable"],
  "implement": ["carry out", "put in place", "start using", "set up", "begin"],
  "subsequently": ["later", "afterward", "then", "after that", "next"],
  "furthermore": ["also", "besides", "plus", "what's more", "additionally"],
  "nevertheless": ["still", "yet", "however", "even so", "all the same"],
  "therefore": ["so", "as a result", "because of this", "that's why", "consequently"],
  "numerous": ["many", "lots of", "several", "a bunch of", "plenty of"],
  "regarding": ["about", "concerning", "on", "related to", "with respect to"],
  "additional": ["extra", "more", "added", "other", "further"],
  "approximately": ["about", "around", "roughly", "close to", "nearly"],
  "significantly": ["a lot", "considerably", "notably", "greatly", "substantially"],
  "prioritize": ["focus on", "put first", "make a priority", "emphasize", "highlight"],
  "fundamental": ["basic", "key", "main", "core", "essential"],
  "illustrate": ["show", "explain", "display", "clarify", "demonstrate"],
  "commence": ["begin", "start", "kick off", "launch", "initiate"],
  "terminate": ["end", "stop", "finish", "conclude", "wrap up"],
  "adequate": ["enough", "sufficient", "ample", "suitable", "good enough"],
  "allocate": ["give", "assign", "distribute", "share", "divide"],
  "ascertain": ["find out", "determine", "figure out", "learn", "discover"],
  "endeavor": ["try", "attempt", "work", "strive", "effort"],
  "comprise": ["include", "contain", "consist of", "make up", "have"],
  "substantial": ["big", "large", "considerable", "significant", "major"],
  "optimal": ["best", "ideal", "perfect", "top", "prime"],
  "innovative": ["new", "novel", "creative", "groundbreaking", "original"],
  "elaborate": ["complex", "detailed", "intricate", "sophisticated", "complicated"],
  "comprehensive": ["complete", "thorough", "full", "extensive", "in-depth"],
  "preliminary": ["early", "initial", "first", "beginning", "introductory"],
  "consequently": ["so", "as a result", "thus", "therefore", "hence"],
  "primarily": ["mainly", "mostly", "chiefly", "largely", "principally"],
  "various": ["different", "several", "assorted", "diverse", "many"],
  "sufficient": ["enough", "adequate", "plenty", "ample", "satisfactory"],
  "enhance": ["improve", "boost", "increase", "strengthen", "upgrade"],
  "acquire": ["get", "obtain", "gain", "secure", "buy"],
  "attribute": ["quality", "feature", "characteristic", "trait", "aspect"],
  "conceive": ["think up", "imagine", "envision", "come up with", "dream up"],
  "emphasize": ["stress", "highlight", "underline", "focus on", "point out"],
  "diverse": ["varied", "different", "assorted", "mixed", "ranging"],
  "simplify": ["make easier", "streamline", "uncomplicate", "clarify", "reduce"],

  // Additional word replacements to make text more human-like
  "individuals": ["people", "folks", "persons", "humans", "men and women"],
  "obtain": ["get", "grab", "pick up", "receive", "collect"],
  "purchase": ["buy", "get", "pick up", "shop for", "pay for"],
  "assistance": ["help", "support", "aid", "backing", "guidance"],
  "frequently": ["often", "a lot", "regularly", "again and again", "all the time"],
  "indicate": ["show", "point to", "suggest", "mean", "tell"],
  "attempt": ["try", "make an effort", "have a go", "take a shot", "give it a try"],
  "observe": ["see", "watch", "notice", "spot", "check out"],
  "inquire": ["ask", "question", "wonder", "want to know", "check"],
  "comprehend": ["understand", "get", "grasp", "figure out", "make sense of"],
  "initial": ["first", "beginning", "starting", "early", "original"],
  "currently": ["now", "right now", "at the moment", "these days", "nowadays"],
  "alternative": ["option", "choice", "other way", "different approach", "plan B"],
  "collaborate": ["work together", "team up", "join forces", "cooperate", "partner"],
  "excessive": ["too much", "over the top", "extreme", "overkill", "way too much"],
  "assist": ["help", "support", "lend a hand", "back up", "pitch in"],
  "locate": ["find", "spot", "discover", "uncover", "come across"],
  "select": ["choose", "pick", "opt for", "go with", "decide on"],
  "require": ["need", "want", "must have", "call for", "demand"],
  "within": ["in", "inside", "during", "in the course of", "throughout"],

  // Common phrases replacements
  "in order to": ["to", "so that", "so I could", "for", "with the goal of"],
  "due to the fact that": ["because", "since", "as", "given that", "seeing as"],
  "a large number of": ["many", "lots of", "tons of", "plenty of", "a bunch of"],
  "at this point in time": ["now", "currently", "at this moment", "right now", "presently"],
  "in the event that": ["if", "should", "when", "assuming that", "provided that"],
  "for the purpose of": ["for", "to", "so that", "in order to", "with the aim of"],
  "in the process of": ["while", "during", "as", "when", "as I was"],
  "with regard to": ["about", "regarding", "concerning", "on", "as for"],
  "it should be noted that": ["note that", "remember that", "keep in mind that", "don't forget that", "importantly"],
  "for all intents and purposes": ["basically", "essentially", "fundamentally", "in essence", "practically"],
};

// Create mapping for common filler phrases to make text more conversational
const conversationalFillers = [
  "you know", "I mean", "like", "basically", "actually", "literally",
  "obviously", "pretty much", "sort of", "kind of", "in a way",
  "more or less", "to be honest", "honestly", "frankly", "to tell the truth",
  "as a matter of fact", "at the end of the day", "when you think about it",
  "for what it's worth", "if you ask me", "in my opinion", "from my perspective"
];

// List of common contractions to replace formal writing
const contractions: Record<string, string> = {
  "it is": "it's",
  "they are": "they're",
  "we are": "we're",
  "you are": "you're",
  "I am": "I'm",
  "do not": "don't",
  "does not": "doesn't",
  "did not": "didn't",
  "has not": "hasn't",
  "have not": "haven't",
  "had not": "hadn't",
  "will not": "won't",
  "would not": "wouldn't",
  "could not": "couldn't",
  "should not": "shouldn't",
  "is not": "isn't",
  "are not": "aren't",
  "was not": "wasn't",
  "were not": "weren't",
  "cannot": "can't",
  "we will": "we'll",
  "they will": "they'll",
  "you will": "you'll",
  "I will": "I'll",
  "he will": "he'll",
  "she will": "she'll",
  "it will": "it'll",
  "I would": "I'd",
  "you would": "you'd",
  "he would": "he'd",
  "she would": "she'd",
  "we would": "we'd",
  "they would": "they'd"
};

// Define sentence structures to introduce variations
const sentenceStructures = [
  (sentence: string) => sentence, // Keep original in some cases
  (sentence: string) => {
    if (sentence.length < 10 || !sentence.includes(" ")) return sentence;
    const words = sentence.split(" ");
    if (words.length < 4) return sentence;

    // Check if sentence starts with a capital letter and ends with punctuation
    const firstChar = sentence.charAt(0);
    const lastChar = sentence.charAt(sentence.length - 1);

    if (
      firstChar === firstChar.toUpperCase() &&
      ['.', '!', '?', ',', ';'].includes(lastChar)
    ) {
      const punctuation = sentence.charAt(sentence.length - 1);
      const sentenceWithoutPunctuation = sentence.slice(0, -1);

      // Introduce a conversational phrase at the beginning
      const phrases = [
        "I think ",
        "In my view, ",
        "I believe ",
        "From my perspective, ",
        "It seems that ",
        "I'd say ",
        "Personally, ",
        "In my opinion, ",
        "As I see it, ",
        "To my mind, ",
        "If you ask me, ",
        "As far as I'm concerned, ",
        "I feel that ",
        "My take is that ",
        "I would argue that ",
        "I'd have to say ",
        "It strikes me that ",
        "I've noticed that ",
        "I've found that ",
        "It appears to me that ",
        "In my experience, ",
      ];

      return phrases[Math.floor(Math.random() * phrases.length)] +
        sentenceWithoutPunctuation.charAt(0).toLowerCase() +
        sentenceWithoutPunctuation.slice(1) +
        punctuation;
    }

    return sentence;
  },
  (sentence: string) => {
    if (sentence.length < 10 || !sentence.includes(" ")) return sentence;

    // Split into words and check if we can add filler words
    const words = sentence.split(" ");
    if (words.length < 4) return sentence;

    // Identify a position to add a filler
    const position = Math.floor(Math.random() * (words.length - 2)) + 1;

    // Select a random filler from our conversational fillers
    const selectedFiller = conversationalFillers[Math.floor(Math.random() * conversationalFillers.length)];

    words.splice(position, 0, selectedFiller);
    return words.join(" ");
  },
  (sentence: string) => {
    // Add a rhetorical question or emphasis
    if (sentence.length < 20) return sentence;

    const punctuation = sentence.charAt(sentence.length - 1);
    const sentenceWithoutPunctuation = sentence.slice(0, -1);

    // List of emphatic endings
    const emphatics = [
      `, don't you think${punctuation}`,
      `, right${punctuation}`,
      `, you know what I mean${punctuation}`,
      ` - that's for sure${punctuation}`,
      ` (at least that's what I think)${punctuation}`,
      `, if that makes sense${punctuation}`,
      `, which is pretty cool${punctuation}`,
      `, wouldn't you agree${punctuation}`,
      `, as you can imagine${punctuation}`,
      ` - no doubt about it${punctuation}`,
      `, obviously${punctuation}`,
      `, strangely enough${punctuation}`,
      `, as one might expect${punctuation}`,
      `, if you can believe it${punctuation}`,
      `, which is crazy${punctuation}`,
      `, or so I've heard${punctuation}`,
      ` - crazy, right${punctuation}`,
      ` (believe it or not)${punctuation}`,
      `, for what it's worth${punctuation}`,
      `, in case you were wondering${punctuation}`,
    ];

    const selectedEmphatic = emphatics[Math.floor(Math.random() * emphatics.length)];

    return sentenceWithoutPunctuation + selectedEmphatic;
  },
  (sentence: string) => {
    // Break a long sentence into two shorter ones
    if (sentence.length < 40 || !sentence.includes(",")) return sentence;

    const parts = sentence.split(",");
    if (parts.length < 2) return sentence;

    const firstPart = parts.slice(0, Math.ceil(parts.length / 2)).join(",");
    const secondPart = parts.slice(Math.ceil(parts.length / 2)).join(",");

    // If the first part doesn't end with punctuation, add a period
    const firstPartEnding = firstPart.trim().slice(-1);
    const secondPartStart = secondPart.trim().charAt(0);

    if (!['.', '!', '?'].includes(firstPartEnding)) {
      const connector = ". ";
      return firstPart + connector + secondPartStart.toUpperCase() + secondPart.trim().slice(1);
    }

    return sentence;
  }
];

// Function to apply contractions throughout text
function applyContractions(text: string, probability: number = 0.7): string {
  let processedText = text;

  // Apply contractions with given probability
  Object.entries(contractions).forEach(([formal, contracted]) => {
    const regex = new RegExp(`\\b${formal}\\b`, "gi");
    processedText = processedText.replace(regex, (match) => {
      // Apply with probability
      if (Math.random() < probability) {
        // Preserve capitalization
        if (match.charAt(0) === match.charAt(0).toUpperCase()) {
          return contracted.charAt(0).toUpperCase() + contracted.slice(1);
        }
        return contracted;
      }
      return match;
    });
  });

  return processedText;
}

// Strategies for humanizing text
export const humanizationStrategies = {
  // Strategy 1: Introduce typing errors occasionally
  introduceTypingErrors: (text: string): string => {
    const lines = text.split("\n");
    return lines
      .map((line) => {
        // Skip short lines
        if (line.length < 15) return line;

        // Randomly decide if we should introduce an error in this line
        if (Math.random() > 0.25) return line;

        const words = line.split(" ");
        // Select a random word that's at least 4 letters long
        const eligibleWords = words.filter(word => word.length >= 4);

        if (eligibleWords.length === 0) return line;

        const wordToModify = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];
        const wordIndex = words.indexOf(wordToModify);

        // Error types:
        // 1. Swap two adjacent letters
        // 2. Omit a letter
        // 3. Double a letter

        const errorType = Math.floor(Math.random() * 3);
        let modifiedWord = wordToModify;

        if (errorType === 0 && wordToModify.length >= 3) {
          // Swap two adjacent letters
          const position = Math.floor(Math.random() * (wordToModify.length - 2)) + 1;
          modifiedWord =
            wordToModify.substring(0, position) +
            wordToModify.charAt(position + 1) +
            wordToModify.charAt(position) +
            wordToModify.substring(position + 2);
        } else if (errorType === 1) {
          // Omit a letter
          const position = Math.floor(Math.random() * wordToModify.length);
          modifiedWord =
            wordToModify.substring(0, position) +
            wordToModify.substring(position + 1);
        } else if (errorType === 2) {
          // Double a letter
          const position = Math.floor(Math.random() * wordToModify.length);
          modifiedWord =
            wordToModify.substring(0, position) +
            wordToModify.charAt(position) +
            wordToModify.substring(position);
        }

        // Replace the word in the line
        words[wordIndex] = modifiedWord;
        return words.join(" ");
      })
      .join("\n");
  },

  // Strategy 2: Add human inconsistencies (mixed punctuation styles, capitalization)
  addInconsistencies: (text: string): string => {
    const lines = text.split("\n");
    return lines
      .map((line) => {
        // Skip short lines
        if (line.length < 15) return line;

        // Randomly decide if we should modify this line
        if (Math.random() > 0.25) return line;

        // Inconsistency types:
        // 1. Change punctuation style (e.g., dash instead of comma)
        // 2. Occasionally miss a capitalization
        // 3. Use contractions sometimes

        const inconsistencyType = Math.floor(Math.random() * 3);

        if (inconsistencyType === 0) {
          // Change punctuation style
          if (line.includes(",")) {
            const replacements = [" -", ";", "..."];
            const replacement = replacements[Math.floor(Math.random() * replacements.length)];
            // Only replace one comma to avoid over-modification
            return line.replace(",", replacement);
          }
        } else if (inconsistencyType === 1) {
          // Occasionally miss a capitalization after a period
          if (line.includes(". ")) {
            const sentenceParts = line.split(". ");
            if (sentenceParts.length > 1) {
              const indexToModify = Math.floor(Math.random() * (sentenceParts.length - 1)) + 1;
              if (sentenceParts[indexToModify].length > 0) {
                sentenceParts[indexToModify] =
                  sentenceParts[indexToModify].charAt(0).toLowerCase() +
                  sentenceParts[indexToModify].substring(1);
              }
              return sentenceParts.join(". ");
            }
          }
        } else if (inconsistencyType === 2) {
          // Apply a contraction
          let modifiedLine = line;
          for (const [full, contracted] of Object.entries(contractions)) {
            if (modifiedLine.includes(full)) {
              modifiedLine = modifiedLine.replace(full, contracted);
              break;
            }
          }
          return modifiedLine;
        }

        return line;
      })
      .join("\n");
  },

  // Strategy 3: Vary sentence structures for more human-like writing
  varyStructures: (text: string): string => {
    // Split the text into sentences
    const sentenceRegex = /([.!?]\s+|\n+|$)/g;
    const parts = text.split(sentenceRegex);

    // Process the parts to form complete sentences
    const sentences = [];

    // Group pairs of parts into sentences (part + ending)
    for (let i = 0; i < parts.length; i += 2) {
      if (i + 1 < parts.length) {
        sentences.push(parts[i] + parts[i + 1]);
      } else if (parts[i]) {
        sentences.push(parts[i]);
      }
    }

    return sentences
      .map((sentence) => {
        // Skip very short sentences or non-sentences
        if (sentence.trim().length < 5) return sentence;

        // Randomly decide if we should modify this sentence
        // Increased probability to 50% for better results
        if (Math.random() > 0.5) return sentence;

        // Apply a random sentence structure transformation
        const strategyIndex = Math.floor(Math.random() * sentenceStructures.length);
        const strategy = sentenceStructures[strategyIndex];
        return strategy(sentence);
      })
      .join("");
  },

  // Strategy 4: Replace formal/academic words with more conversational ones
  useConversationalLanguage: (text: string): string => {
    let modifiedText = text;

    // Replace academic words with conversational alternatives
    for (const [formal, conversational] of Object.entries(academicToConversational)) {
      // Case-insensitive global replace
      const regex = new RegExp(`\\b${formal}\\b`, "gi");
      modifiedText = modifiedText.replace(regex, () => {
        // Increased probability to 60%
        if (Math.random() < 0.6) {
          return conversational[Math.floor(Math.random() * conversational.length)];
        }
        return formal;
      });
    }

    // Apply contractions with high probability for more human-like text
    modifiedText = applyContractions(modifiedText, 0.8);

    return modifiedText;
  },

  // Strategy 5: Add paragraph breaks and formatting variations
  improveReadability: (text: string): string => {
    const lines = text.split("\n");
    const modifiedLines = [];

    for (const line of lines) {
      // Skip very short lines
      if (line.trim().length < 30) {
        modifiedLines.push(line);
        continue;
      }

      // Randomly decide if we should add a paragraph break
      if (Math.random() < 0.15 && line.trim().endsWith(".")) {
        modifiedLines.push(line);
        // Add an empty line for paragraph break
        modifiedLines.push("");
      } else {
        modifiedLines.push(line);
      }
    }

    return modifiedLines.join("\n");
  },
};

// Function to apply all humanization strategies
export function humanizeText(text: string, intensity: number = 0.5): string {
  // Apply strategies in order with varying intensity
  let humanizedText = text;

  // Apply typing errors (light touch)
  if (Math.random() < intensity * 0.7) {
    humanizedText = humanizationStrategies.introduceTypingErrors(humanizedText);
  }

  // Add inconsistencies
  if (Math.random() < intensity * 0.8) {
    humanizedText = humanizationStrategies.addInconsistencies(humanizedText);
  }

  // Vary sentence structures - apply this more consistently
  if (Math.random() < intensity * 0.95) {
    humanizedText = humanizationStrategies.varyStructures(humanizedText);
  }

  // Use conversational language - apply this more consistently
  if (Math.random() < intensity * 0.98) {
    humanizedText = humanizationStrategies.useConversationalLanguage(humanizedText);
  }

  // Improve readability with paragraph breaks
  if (Math.random() < intensity * 0.7) {
    humanizedText = humanizationStrategies.improveReadability(humanizedText);
  }

  return humanizedText;
}

// Function to generate multiple variations
export function generateVariations(text: string, count: number = 5): string[] {
  const variations: string[] = [];

  // Generate variations with different intensities
  for (let i = 0; i < count; i++) {
    // Vary the intensity slightly for each variation
    const baseIntensity = 0.6; // Increased base intensity for better results
    const intensityVariation = (Math.random() - 0.5) * 0.3; // +/- 0.15
    const intensity = Math.max(0.3, Math.min(0.95, baseIntensity + intensityVariation));

    variations.push(humanizeText(text, intensity));
  }

  return variations;
}
