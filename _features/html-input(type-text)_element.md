---
{
  "title": "input[type=\"text\"] element",
  "description": "",
  "category": "html",
  "keywords": "input[type=\"text\"] element",
  "last_test_date": "2019-07-20",
  "test_results_url": "https://a11ysupport.io/tech/html/input(type-text)_element",
  "test_url": "https://a11ysupport.io/tech/html/input(type-text)_element",
  "notes_by_num": {
    "1": "HTML input with datalist test: The role is not consistently conveyed across browsers, and is often presented with a modifier (\"combo\" or \"has popup\") to convey the presence of the datalist.",
    "2": "HTML input with datalist test: Focus was sent back to the input and the input was announced",
    "3": "HTML input with datalist test: When paired with IE, JAWS does not alter the role to convey the datalist functionality.",
    "4": "HTML input with datalist test: unknown because it was not possible to navigate to a suggestion to activate",
    "5": "HTML input with datalist test: Unknown because it was not possible to navigate to a suggestion to activate",
    "6": "HTML input with datalist test: The value was announced after a suggestion was activated and focus was returned to the text input",
    "7": "HTML input with datalist test: The role is not consistently conveyed across browsers, and is often presented with a modifier (\"combo box\" or \"has popup\") to convey the presence of the datalist.",
    "8": "HTML input with datalist test: Focus was returned to the text input",
    "9": "HTML input with datalist test: The role is not consistently conveyed across browsers, and is often presented with a modifier (\"combo box\" or \"subMenu\") to convey the presence of the datalist.",
    "10": "HTML input with datalist test: Focus was returned to the text input but only the value was announced",
    "11": "HTML input with datalist test: value was announced and focus was returned to the text input.",
    "12": "Didn't convey its name",
    "13": "HTML input with datalist test: The activated suggestion was announced, and focus was moved to a new suggestion"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "76-79": "y"
      }
    },
    "jaws": {
      "chrome": {
        "92": "a #1 #2"
      },
      "edge": {
        "92": "a"
      },
      "ie": {
        "11": "a #3 #4"
      },
      "firefox": {
        "72-73": "y #1 #5"
      }
    },
    "narrator": {
      "edge": {
        "44": "y #6"
      }
    },
    "nvda": {
      "chrome": {
        "92": "y #7 #8"
      },
      "edge": {
        "92": "y"
      },
      "firefox": {
        "68-73": "y #9 #10"
      }
    },
    "orca": {
      "firefox": {
        "69-73": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "76-80": "y #11"
      }
    },
    "va_and": {
      "and_chr": {
        "77-79": "a #12"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1-13.3.1": "y #13"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.2-13.0.5": "a #8"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0-13.3.1": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5-13.0.2": "y"
      }
    },
    "wsr": {
      "edge": {
        "44": "a"
      },
      "chrome": {
        "77-79": "y"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for input[type=\"text\"]": "https://html.spec.whatwg.org/multipage/input.html#text-(type=text)-state-and-search-state-(type=search)",
    "HTML AAM for the input[type=\"text\"]": "https://w3c.github.io/html-aam/#el-input-text"
  }
}
---