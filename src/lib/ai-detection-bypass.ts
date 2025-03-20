import { shuffleArray, randomBetween } from "./utils";

// Strategies to defeat AI text detection
export const bypassStrategies = {
  // Strategy 1: Insert invisible Unicode characters in strategic locations
  insertInvisibleCharacters: (text: string): string => {
    // List of zero-width and invisible unicode characters
    const invisibleChars = [
      "\u200B", // Zero-Width Space
      "\u200C", // Zero-Width Non-Joiner
      "\u200D", // Zero-Width Joiner
      "\u2060", // Word Joiner
      "\u2061", // Function Application
      "\u2062", // Invisible Times
      "\u2063", // Invisible Separator
      "\u2064", // Invisible Plus
      "\uFEFF", // Zero Width No-Break Space
      "\u034F", // Combining Grapheme Joiner
      "\u180E", // Mongolian Vowel Separator
      "\u061C", // Arabic Letter Mark
    ];

    const lines = text.split("\n");
    return lines
      .map((line) => {
        // Only process non-empty lines
        if (line.trim().length === 0) return line;

        // Split the line into words
        const words = line.split(" ");

        // Every 3-6 words, add an invisible character
        for (let i = 0; i < words.length; i++) {
          if (i % randomBetween(3, 6) === 0 && words[i].length > 3) {
            const charIndex = randomBetween(1, words[i].length - 1);
            const randomChar = invisibleChars[Math.floor(Math.random() * invisibleChars.length)];

            words[i] =
              words[i].substring(0, charIndex) +
              randomChar +
              words[i].substring(charIndex);
          }
        }

        return words.join(" ");
      })
      .join("\n");
  },

  // Strategy 2: Use homoglyphs - characters that look similar but have different code points
  useHomoglyphs: (text: string): string => {
    // Map of characters to their homoglyphs
    const homoglyphs: Record<string, string[]> = {
      'a': ['а', 'ɑ', 'α'], // Cyrillic 'а', Latin 'ɑ', Greek 'α'
      'e': ['е', 'ԑ', 'ε'], // Cyrillic 'е', Latin 'ԑ', Greek 'ε'
      'o': ['о', 'ο', 'ᴏ'], // Cyrillic 'о', Greek 'ο', Latin small capital 'ᴏ'
      'p': ['р', 'ρ', 'ⲣ'], // Cyrillic 'р', Greek 'ρ', Coptic 'ⲣ'
      'c': ['с', 'ϲ', 'ⅽ'], // Cyrillic 'с', Greek 'ϲ', Roman numeral 'ⅽ'
      'i': ['і', 'ι', 'ⅰ'], // Ukrainian 'і', Greek 'ι', Roman numeral 'ⅰ'
      's': ['ѕ', 'ꜱ'],      // Cyrillic 'ѕ', Latin small capital 'ꜱ'
      'x': ['х', '᙮'],      // Cyrillic 'х', Canadian syllabics '᙮'
      'y': ['у', 'ʏ', 'ỿ'], // Cyrillic 'у', Latin 'ʏ', 'ỿ'
      'h': ['һ', 'ʜ'],      // Cyrillic 'һ', Latin small capital 'ʜ'
      'n': ['ո', 'ⴖ'],     // Armenian 'ո', Georgian 'ⴖ'
      'm': ['м', 'ⴅ'],     // Cyrillic 'м', Georgian 'ⴅ'
      't': ['т', 'τ'],     // Cyrillic 'т', Greek 'τ'
      'j': ['ј'],          // Cyrillic 'ј'
    };

    let modifiedText = text;

    // Replace a small percentage of characters with homoglyphs
    for (const [original, replacements] of Object.entries(homoglyphs)) {
      // Create a regex to match all occurrences of the original character
      const regex = new RegExp(original, 'g');

      // Replace some instances of the original character with a homoglyph
      modifiedText = modifiedText.replace(regex, (match) => {
        // Increased probability for better results
        if (Math.random() < 0.15) { // Increased from 0.12
          const replacement = replacements[Math.floor(Math.random() * replacements.length)];
          return replacement;
        }
        return match;
      });
    }

    return modifiedText;
  },

  // Strategy 3: Randomly vary whitespace and add zero-width spaces between characters
  varyWhitespace: (text: string): string => {
    const lines = text.split("\n");

    return lines
      .map((line) => {
        if (line.trim().length === 0) return line;

        // Randomly add an extra space after some punctuation marks
        line = line.replace(/([.,;:?!])/g, (match) => {
          if (Math.random() < 0.18) {
            return match + " ";
          }
          return match;
        });

        // Occasionally add a non-breaking space or thin space instead of a regular space
        const words = line.split(" ");
        const result = words
          .map((word, index) => {
            // Add zero-width spaces between some characters in longer words
            if (word.length > 5 && Math.random() < 0.15) {
              const pos = Math.floor(Math.random() * (word.length - 1)) + 1;
              word = word.slice(0, pos) + "\u200B" + word.slice(pos);
            }

            if (index < words.length - 1) {
              if (Math.random() < 0.08) {
                return word + "\u00A0"; // Non-breaking space
              }
              if (Math.random() < 0.05) {
                return word + "\u2009"; // Thin space
              }
            }
            return word;
          })
          .join(" ");

        return result;
      })
      .join("\n");
  },

  // Strategy 4: Slightly modify sentence structures without changing meaning
  restructureSentences: (text: string): string => {
    // Split into sentences
    const sentenceEndings = /([.!?]\s)/g;
    const sentences = text.split(sentenceEndings);

    const processedSentences = [];
    for (let i = 0; i < sentences.length; i += 2) {
      if (i + 1 < sentences.length) {
        const sentence = sentences[i];
        const ending = sentences[i + 1];

        // Skip short sentences or if random chance says no
        if (sentence.length < 15 || Math.random() > 0.18) {
          processedSentences.push(sentence + ending);
          continue;
        }

        // Different restructuring techniques
        const technique = Math.floor(Math.random() * 4);

        if (technique === 0 && sentence.includes(",")) {
          // Swap clauses around a comma
          const parts = sentence.split(",");
          if (parts.length >= 2) {
            // Take the last part and move it to the beginning
            const lastPart = parts.pop()?.trim() || "";
            const newSentence = lastPart + ", " + parts.join(",");
            processedSentences.push(newSentence + ending);
            continue;
          }
        } else if (technique === 1 &&
                  sentence.toLowerCase().includes(" because ")) {
          // Change "X because Y" to "Because Y, X"
          const parts = sentence.split(/\s+because\s+/i);
          if (parts.length === 2) {
            const newSentence = "Because " + parts[1] + ", " + parts[0].toLowerCase();
            processedSentences.push(newSentence + ending);
            continue;
          }
        } else if (technique === 2 &&
                  (sentence.toLowerCase().includes(" is ") ||
                   sentence.toLowerCase().includes(" are "))) {
          // Change active to passive voice for simple sentences
          // This is a simplified approach and won't work for all sentences
          const isMatch = sentence.match(/(.+?)\s+is\s+(.+)/i);
          const areMatch = sentence.match(/(.+?)\s+are\s+(.+)/i);

          if (isMatch && isMatch.length === 3) {
            const subject = isMatch[1].trim();
            const predicate = isMatch[2].trim();

            // Only apply if not too complex
            if (subject.split(" ").length <= 3) {
              const newSentence = predicate.charAt(0).toUpperCase() +
                                 predicate.substring(1) +
                                 " is attributed to " + subject;
              processedSentences.push(newSentence + ending);
              continue;
            }
          } else if (areMatch && areMatch.length === 3) {
            const subject = areMatch[1].trim();
            const predicate = areMatch[2].trim();

            // Only apply if not too complex
            if (subject.split(" ").length <= 3) {
              const newSentence = predicate.charAt(0).toUpperCase() +
                                 predicate.substring(1) +
                                 " are attributed to " + subject;
              processedSentences.push(newSentence + ending);
              continue;
            }
          }
        } else if (technique === 3 &&
                  sentence.split(" ").length > 6) {
          // Insert an interrupting phrase
          const words = sentence.split(" ");
          const insertPos = Math.floor(words.length / 2);

          const phrases = [
            ", in this case, ",
            ", to be precise, ",
            ", in this context, ",
            ", in my view, ",
            ", interestingly, ",
            ", it seems, "
          ];

          const phrase = phrases[Math.floor(Math.random() * phrases.length)];

          words.splice(insertPos, 0, phrase);
          processedSentences.push(words.join(" ") + ending);
          continue;
        }

        // If no technique applied, keep original
        processedSentences.push(sentence + ending);
      } else if (sentences[i]) {
        // Handle the last sentence without ending if present
        processedSentences.push(sentences[i]);
      }
    }

    return processedSentences.join("");
  },

  // Strategy 5: Inject perplexity by occasionally using uncommon word choices
  injectPerplexity: (text: string): string => {
    // Maps common words to uncommon alternatives
    const commonToUncommon: Record<string, string[]> = {
      "good": ["splendid", "superb", "exceptional", "marvelous", "sublime"],
      "bad": ["abysmal", "atrocious", "lamentable", "woeful", "execrable"],
      "big": ["colossal", "gargantuan", "immense", "mammoth", "prodigious"],
      "small": ["diminutive", "minuscule", "paltry", "meager", "negligible"],
      "important": ["paramount", "imperative", "cardinal", "seminal", "pivotal"],
      "interesting": ["captivating", "enthralling", "riveting", "absorbing", "mesmerizing"],
      "look": ["scrutinize", "examine", "inspect", "peruse", "survey"],
      "think": ["ruminate", "contemplate", "muse", "ponder", "deliberate"],
      "happy": ["jubilant", "elated", "euphoric", "ecstatic", "rapturous"],
      "sad": ["melancholic", "despondent", "forlorn", "crestfallen", "disconsolate"],
      "very": ["exceedingly", "extraordinarily", "remarkably", "notably", "substantially"],
      "many": ["myriad", "numerous", "copious", "abundant", "multitudinous"],
      "use": ["employ", "utilize", "wield", "implement", "leverage"],
      "make": ["fabricate", "construct", "fashion", "forge", "craft"],
      "said": ["articulated", "conveyed", "expressed", "vocalized", "pronounced"],
      "beautiful": ["exquisite", "resplendent", "magnificent", "stunning", "glorious"],
      "old": ["antiquated", "venerable", "ancient", "archaic", "primeval"],
      "new": ["novel", "unprecedented", "innovative", "groundbreaking", "nascent"],
    };

    let modifiedText = text;

    // Replace common words with uncommon alternatives
    for (const [common, uncommon] of Object.entries(commonToUncommon)) {
      // Create a regex that matches the word with word boundaries
      const regex = new RegExp(`\\b${common}\\b`, "gi");

      // Replace some instances with uncommon alternatives
      modifiedText = modifiedText.replace(regex, (match) => {
        // Increased replacement probability
        if (Math.random() < 0.40) { // Increased from 0.38
          // Preserve capitalization
          const replacement = uncommon[Math.floor(Math.random() * uncommon.length)];
          if (match.charAt(0) === match.charAt(0).toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }
          return replacement;
        }
        return match;
      });
    }

    return modifiedText;
  },

  // Strategy 6: Add subtle spelling variations or regional differences
  addSpellingVariations: (text: string): string => {
    // Maps standard spellings to variations (US to UK, common misspellings, etc.)
    const spellingVariations: Record<string, string[]> = {
      "color": ["colour"],
      "center": ["centre"],
      "analyze": ["analyse"],
      "organize": ["organise"],
      "behavior": ["behaviour"],
      "defense": ["defence"],
      "dialog": ["dialogue"],
      "favorite": ["favourite"],
      "gray": ["grey"],
      "humor": ["humour"],
      "judgment": ["judgement"],
      "labeled": ["labelled"],
      "program": ["programme"],
      "traveled": ["travelled"],
      "definitely": ["definately"], // Common misspelling
      "separate": ["seperate"], // Common misspelling
      "occurred": ["occured"], // Common misspelling
      "necessary": ["neccessary"], // Common misspelling
      "accommodate": ["accomodate"], // Common misspelling
      "government": ["goverment"], // Common misspelling
      "experience": ["experiance"], // Common misspelling
    };

    let modifiedText = text;

    // Apply spelling variations
    for (const [standard, variations] of Object.entries(spellingVariations)) {
      // Create a regex that matches the word with word boundaries
      const regex = new RegExp(`\\b${standard}\\b`, "gi");

      // Replace some instances with variations
      modifiedText = modifiedText.replace(regex, (match) => {
        if (Math.random() < 0.35) {
          const variation = variations[Math.floor(Math.random() * variations.length)];

          // Preserve capitalization
          if (match.charAt(0) === match.charAt(0).toUpperCase()) {
            return variation.charAt(0).toUpperCase() + variation.slice(1);
          }
          return variation;
        }
        return match;
      });
    }

    return modifiedText;
  },

  // Strategy 7: Insert markdown-like formatting that's invisible to detection
  insertFormatting: (text: string): string => {
    const lines = text.split("\n");

    return lines
      .map((line) => {
        if (line.trim().length < 10) return line;

        // Randomly select words to format
        if (Math.random() < 0.15) {
          const words = line.split(" ");

          // Find suitable words to format (longer than 3 chars)
          const formattableWords = words
            .map((word, index) => ({ word, index }))
            .filter(({ word }) => word.length > 3 && !word.includes(",") && !word.includes("."));

          if (formattableWords.length > 0) {
            // Select a random word to format
            const { word, index } = formattableWords[
              Math.floor(Math.random() * formattableWords.length)
            ];

            // Format types:
            // 1. Bold: **word**
            // 2. Italic: *word*
            // 3. Highlight: ==word==
            const formatType = Math.floor(Math.random() * 3);

            if (formatType === 0 && word.length > 4) {
              words[index] = `**${word}**`;
            } else if (formatType === 1) {
              words[index] = `*${word}*`;
            } else {
              words[index] = `==${word}==`;
            }

            return words.join(" ");
          }
        }

        return line;
      })
      .join("\n");
  },

  // Strategy 8: Mix different line ending styles (CR, LF, CRLF)
  mixLineEndings: (text: string): string => {
    const lines = text.split("\n");

    return lines
      .map((line, index) => {
        // Random chance to apply different line ending
        if (index < lines.length - 1) {
          const random = Math.random();

          if (random < 0.1) {
            return line + "\r"; // CR (Mac classic)
          } else if (random < 0.2) {
            return line + "\r\n"; // CRLF (Windows)
          }
          // Otherwise, use default \n (UNIX)
        }

        return line;
      })
      .join("\n");
  },

  // Strategy 9: Randomly alternate between straight and curly quotes
  alternatePunctuation: (text: string): string => {
    // Replace some standard quotes with curly ones
    if (Math.random() < 0.6) {
      text = text.replace(/"/g, (match) => {
        return Math.random() < 0.5 ? "\u201C" : "\u201D"; // Left and right double quotes
      });
    }

    // Replace some apostrophes with curly ones
    if (Math.random() < 0.6) {
      text = text.replace(/'/g, (match) => {
        return Math.random() < 0.5 ? "\u2018" : "\u2019"; // Left and right single quotes
      });
    }

    return text;
  },

  // Strategy 10: Advanced steganography - embed imperceptible patterns in text
  advancedSteganography: (text: string): string => {
    // This technique embeds patterns that are invisible to humans but can confuse AI detectors
    // by adding special unicode characters, zero-width joiners, and other special characters

    // Function to insert invisible characters in a way that breaks AI detection patterns
    const embedPattern = (word: string): string => {
      if (word.length < 4) return word;

      // Create complex patterns using various zero-width and special unicode characters
      const patterns = [
        // Pattern 1: Zero-width joiner between characters
        (w: string) => {
          const pos = Math.floor(w.length / 2);
          return w.slice(0, pos) + "\u200D" + w.slice(pos);
        },
        // Pattern 2: Zero-width non-joiner + space + zero-width space
        (w: string) => {
          const pos = Math.floor(w.length / 3);
          return w.slice(0, pos) + "\u200C" + "\u200B" + w.slice(pos);
        },
        // Pattern 3: Right-to-left mark (invisible but changes text direction properties)
        (w: string) => {
          if (w.length > 5) {
            const pos = 2;
            return w.slice(0, pos) + "\u200F" + w.slice(pos);
          }
          return w;
        },
        // Pattern 4: Mathematical invisible times operator
        (w: string) => {
          if (w.length > 4) {
            return w.charAt(0) + "\u2062" + w.slice(1);
          }
          return w;
        },
        // Pattern 5: Combining character sequence
        (w: string) => {
          if (w.length > 6) {
            // Add a combining character that doesn't visibly change the text
            const pos = Math.floor(w.length / 2);
            return w.slice(0, pos) + "\u0305\u200B\u034F" + w.slice(pos);
          }
          return w;
        }
      ];

      // Choose a random pattern to apply
      const pattern = patterns[Math.floor(Math.random() * patterns.length)];
      return pattern(word);
    };

    // Process text by applying patterns with a specific probability
    const processWords = (text: string): string => {
      const words = text.split(" ");

      // Apply embedding to approximately 30% of words (enough to fool detection, not enough to break encoding)
      return words.map(word =>
        Math.random() < 0.3 ? embedPattern(word) : word
      ).join(" ");
    };

    // Process the text by paragraphs to maintain structure
    const paragraphs = text.split("\n\n");
    return paragraphs.map(para => processWords(para)).join("\n\n");
  },

  // Strategy 11: Statistical pattern disruption (targets GPTZero specifically)
  statisticalPatternDisruption: (text: string): string => {
    // GPTZero and similar tools analyze statistical patterns in text
    // This strategy disrupts those patterns by introducing carefully calculated variations

    // Helper function to calculate entropy-like value for a string
    const calculateComplexity = (str: string): number => {
      const chars = str.split('');
      const frequencies: Record<string, number> = {};

      // Count character frequencies
      chars.forEach(char => {
        frequencies[char] = (frequencies[char] || 0) + 1;
      });

      // Calculate entropy
      return Object.values(frequencies).reduce(
        (entropy, freq) => {
          const p = freq / str.length;
          return entropy - p * Math.log2(p);
        },
        0
      );
    };

    // Break text into sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

    return sentences.map(sentence => {
      const complexity = calculateComplexity(sentence);

      // Apply different transformations based on complexity
      if (complexity > 3.8) {
        // High complexity sentences - simplify slightly
        return sentence.replace(/\b\w{10,}\b/g, match => {
          // Replace some long words with simpler alternatives if they exist
          const simpleWords: Record<string, string> = {
            "additionally": "also",
            "consequently": "so",
            "subsequently": "then",
            "nevertheless": "still",
            "approximately": "about",
            "significantly": "greatly",
            "functionality": "features",
            "implementation": "setup",
            "demonstrated": "showed",
            "consideration": "thought"
          };

          return simpleWords[match.toLowerCase()] || match;
        });
      } else if (complexity < 3.2) {
        // Low complexity sentences - add some variation
        // Insert a qualifier or elaboration in the middle of the sentence
        const insertPos = Math.floor(sentence.length / 2);
        const elaborations = [
          ", in essence, ",
          ", to clarify, ",
          ", quite simply, ",
          ", in fact, ",
          ", to be precise, "
        ];
        const elaboration = elaborations[Math.floor(Math.random() * elaborations.length)];

        // Only insert if it makes sense (not breaking a word)
        const beforeChar = sentence.charAt(insertPos - 1);
        const afterChar = sentence.charAt(insertPos);

        if (beforeChar === ' ' || afterChar === ' ') {
          return sentence;
        }

        return sentence.slice(0, insertPos) + elaboration + sentence.slice(insertPos);
      }

      return sentence;
    }).join("");
  }
};

// Function to apply all bypass strategies with controlled randomness
export function bypassAIDetection(text: string, intensity: number = 0.5): string {
  // Create an array of strategy functions
  const strategies = [
    bypassStrategies.insertInvisibleCharacters,
    bypassStrategies.useHomoglyphs,
    bypassStrategies.varyWhitespace,
    bypassStrategies.restructureSentences,
    bypassStrategies.injectPerplexity,
    bypassStrategies.addSpellingVariations,
    bypassStrategies.insertFormatting,
    bypassStrategies.mixLineEndings,
    bypassStrategies.alternatePunctuation,
    bypassStrategies.advancedSteganography,     // New strategy
    bypassStrategies.statisticalPatternDisruption // New strategy
  ];

  // Apply more strategies with higher intensity
  const strategyCount = Math.max(3, Math.floor(strategies.length * intensity));

  // Shuffle strategies for randomness
  const shuffledStrategies = shuffleArray(strategies);

  // Take a subset of strategies based on intensity
  const selectedStrategies = shuffledStrategies.slice(0, strategyCount);

  // Always include advanced steganography for GPTZero if intensity > 0.5
  if (intensity > 0.5 && !selectedStrategies.includes(bypassStrategies.advancedSteganography)) {
    selectedStrategies.push(bypassStrategies.advancedSteganography);
  }

  // Apply selected strategies
  let result = text;
  for (const strategy of selectedStrategies) {
    result = strategy(result);
  }

  return result;
}

// Main function to apply both humanization and bypass strategies
export function humanizeAndBypass(text: string, intensity: number = 0.5): string {
  // First humanize the text (but pass through the original text since humanization happens in text-processor)
  const humanized = text;

  // Then apply bypass strategies (with slightly higher intensity for extreme mode)
  const adjustedIntensity = Math.min(0.95, intensity * 1.3); // Increased multiplier
  const bypassed = bypassAIDetection(humanized, adjustedIntensity);

  return bypassed;
}
