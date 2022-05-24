---
{
  "title": "placeholder link element",
  "description": "If the a element has no href attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.",
  "category": "html",
  "keywords": "placeholder link element",
  "last_test_date": "2019-07-28",
  "test_results_url": "https://a11ysupport.io/tech/html/a_element",
  "test_url": "https://a11ysupport.io/tech/html/a_element",
  "notes_by_num": {
    "1": "Didn't convey the link role; OR MUST convey as a placeholder link",
    "2": "HTML links example 6 - A placeholder link by itself: partial support because HTML5 does not call these anchors.",
    "3": "HTML links example 7 - A placeholder link in a paragraph: partial support because HTML5 does not call these anchors.",
    "4": "HTML links example 8 - A placeholder link that wraps many elements: partial support because HTML5 does not call these anchors.",
    "5": "Didn't provide shortcuts to jump to this role",
    "6": "HTML links example 6 - A placeholder link by itself: The text role was conveyed along with the readonly state. No semantics should be conveyed.",
    "7": "HTML links example 7 - A placeholder link in a paragraph: The text role was conveyed along with the readonly state. No semantics should be conveyed.",
    "8": "HTML links example 8 - A placeholder link that wraps many elements: The text role was conveyed along with the readonly state. No semantics should be conveyed.",
    "9": "HTML links example 6 - A placeholder link by itself: Partial support because the element is not \"clickable\"",
    "10": "Didn't convey its name"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "75": "a #1"
      }
    },
    "jaws": {
      "chrome": {
        "92": "a #2 #3 #4"
      },
      "edge": {
        "92": "a #5"
      },
      "ie": {
        "11": "a #2 #3 #4"
      },
      "firefox": {
        "68": "a #2 #3 #4"
      }
    },
    "narrator": {
      "edge": {
        "44": "a #6 #7 #8"
      }
    },
    "nvda": {
      "chrome": {
        "92": "y"
      },
      "edge": {
        "92": "y"
      },
      "firefox": {
        "68": "y"
      }
    },
    "orca": {
      "firefox": {
        "69": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "75": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "77": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1": "y"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1": "a #9"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.2": "y"
      }
    },
    "wsr": {
      "edge": {
        "44": "a #1 #10"
      },
      "chrome": {
        "77": "u #10"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the a element": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
    "HTML AAM for the a element (without href)": "https://w3c.github.io/html-aam/#el-a-no-href"
  }
}
---