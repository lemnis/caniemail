---
{
  "title": "hyperlink element",
  "description": "If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.",
  "category": "html",
  "keywords": [
    "hyperlink element"
  ],
  "last_test_date": "2019-07-28",
  "test_results_url": "https://a11ysupport.io/tech/html/a(href)_element",
  "test_url": "https://a11ysupport.io/tech/html/a(href)_element",
  "notes_by_num": {
    "1": "HTML links example 1 - A link by itself: Boundaries implied by navigation",
    "2": "HTML links example 2 - A link in a paragraph: Boundaries implied by navigation",
    "3": "HTML links example 3 - A link in a list: Boundaries implied by navigation",
    "4": "HTML links example 4 - A visited link: Boundaries implied by navigation",
    "5": "HTML links example 5 - A link that wraps many elements: Announces the link role on every line, and does not announce something like \"entering link\" or \"leaving link\" when entering or leaving.",
    "6": "Didn't convey the visited state",
    "7": "HTML links example 3 - A link in a list: boundaries implied by navigation",
    "8": "HTML links example 5 - A link that wraps many elements: The entire content is announced as a link, and it is not possible to navigate content within the link. No semantics inside the link are conveyed.",
    "9": "HTML links example 5 - A link that wraps many elements: Boundaries implied by navigation. The entire content is announced as a link, and it is not possible to navigate content within the link. No semantics inside the link are conveyed.",
    "10": "HTML links example 5 - A link that wraps many elements: The entire contents of the link are announced when navigating to the link. Users can navigate into the link contain and navigate object by object.",
    "11": "Didn't convey its name"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "75": "y"
      }
    },
    "jaws": {
      "chrome": {
        "75": "a #1 #2 #3 #4 #5"
      },
      "ie": {
        "11": "a #1 #2 #3 #4 #5"
      },
      "firefox": {
        "68": "a #1 #2 #3 #4 #5"
      }
    },
    "narrator": {
      "edge": {
        "44": "a #1 #2 #3 #4 #6"
      }
    },
    "nvda": {
      "chrome": {
        "75": "y #1 #2 #7 #4 #5"
      },
      "firefox": {
        "68": "y #1 #2 #7 #4 #5"
      }
    },
    "orca": {
      "firefox": {
        "69": "a"
      }
    },
    "talkback": {
      "and_chr": {
        "75": "a #1 #2 #3 #4 #6 #8 #9"
      }
    },
    "va_and": {
      "and_chr": {
        "77": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1": "y #1 #2 #3 #4"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1": "y #1 #2 #3 #4 #10"
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
        "44": "a #11"
      },
      "chrome": {
        "77": "a #11"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the a element": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
    "HTML AAM for the a element (with href)": "https://w3c.github.io/html-aam/#el-a"
  }
}
---