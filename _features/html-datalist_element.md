---
{
  "title": "datalist element",
  "description": "The datalist element represents a set of option elements that represent predefined options for other controls. It is attached to an input via the list attribute.",
  "category": "html",
  "keywords": "datalist element",
  "last_test_date": "2019-07-19",
  "test_results_url": "https://a11ysupport.io/tech/html/datalist_element",
  "test_url": "https://a11ysupport.io/tech/html/datalist_element",
  "notes_by_num": {
    "1": "HTML input with datalist test: The datalist is conveyed as a menu as opposed to a listbox.",
    "2": "Didn't convey that changes in suggestions were made",
    "3": "Didn't convey its role",
    "4": "Didn't convey the boundaries of the element",
    "5": "HTML input with datalist test: The datalist role is implied by the \"combo\" role and \"suggestions\" announcement.",
    "6": "HTML input with datalist test: The datalist role is implied by the \"has auto complete\" announcement for the text input, combined with down arrow navigating suggestions. However, table semantics were also announced when none exist.",
    "7": "HTML input with datalist test: The datalist role is implied by the \"has auto complete\" announcement for the text input, combined with down arrow navigating suggestions. However, all options are announced as \"blank\".",
    "8": "HTML input with datalist test: boundaries are implied by the menu and focus being sent back to the input",
    "9": "HTML input with datalist test: Suggestions are listed in the normal virtual keyboard predictions. However, there is no indication that these predictions are suggestions from the website, and may be confused with the normal virtual keyboard predictions.",
    "10": "HTML input with datalist test: Boundaries can be implied by the role of \"prediction\" being announced for each available prediction. In other words, when the user hears a different role announced, they can assume they left the predictions."
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "79": "y"
      }
    },
    "jaws": {
      "chrome": {
        "92": "a #1 #2"
      },
      "edge": {
        "92": "a #2"
      },
      "ie": {
        "11": "n #3 #4 #2"
      },
      "firefox": {
        "73": "a #2"
      }
    },
    "narrator": {
      "edge": {
        "44": "y #5"
      }
    },
    "nvda": {
      "chrome": {
        "92": "a #6 #2"
      },
      "edge": {
        "92": "a #2"
      },
      "firefox": {
        "73": "a #7 #2"
      }
    },
    "orca": {
      "firefox": {
        "73": "a #8 #2"
      }
    },
    "talkback": {
      "and_chr": {
        "80": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "79": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.3.1": "a #9 #10 #2"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.5": "n #3 #4 #2"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.3.1": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5": "y"
      }
    },
    "wsr": {
      "edge": {
        "44": "y"
      },
      "chrome": {
        "79": "y"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the datalist element": "https://html.spec.whatwg.org/#the-datalist-element",
    "HTML AAM for the datalist element": "https://www.w3.org/TR/html-aam-1.0/#details-id-25"
  }
}
---