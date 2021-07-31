---
{
  "title": "summary element",
  "description": "The details element represents a disclosure widget from which the user can obtain additional information or controls. Note that per the HTML5 spec, headings are allowed in the summary element.",
  "category": "html",
  "keywords": [
    "summary element"
  ],
  "last_test_date": "2019-08-05",
  "test_results_url": "https://a11ysupport.io/tech/html/summary_element",
  "test_url": "https://a11ysupport.io/tech/html/summary_element",
  "notes_by_num": {
    "1": "HTML basic details/summary test with a heading in the summary: tried \"click train\"",
    "2": "HTML basic details/summary test with a heading in the summary: tried \"click button\" and \"click summary\"",
    "3": "HTML basic details/summary test with a heading in the summary: Not applicable because IE doesn't support these elements, so semantics are not conveyed and all content is shown.",
    "4": "HTML basic details/summary test with a heading in the summary: NA because IE doesn't support these elements, so semantics are not conveyed and all content is shown.",
    "5": "HTML basic details/summary test with a heading in the summary: NA because Narrator doesn't support these elements, so semantics are not conveyed and all content is shown.",
    "6": "HTML basic details/summary test with a heading in the summary: Narrator doesn't support these elements, so semantics are not conveyed and all content is shown."
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "88": "u #1 #2"
      }
    },
    "jaws": {
      "chrome": {
        "88": "y"
      },
      "ie": {
        "11": "na #3 #4"
      },
      "firefox": {
        "85": "y"
      }
    },
    "narrator": {
      "edge": {
        "88": "y #5 #6"
      }
    },
    "nvda": {
      "chrome": {
        "88": "a"
      },
      "firefox": {
        "85": "y"
      }
    },
    "orca": {
      "firefox": {
        "85": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "88": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "88": "a"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "14.4": "a"
      }
    },
    "vo_macos": {
      "safari": {
        "14.0.3": "a"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "14.4": "a"
      }
    },
    "vc_macos": {
      "safari": {
        "14.0.3": "u"
      }
    },
    "wsr": {
      "edge": {
        "88": "na"
      },
      "chrome": {
        "88": "a"
      }
    }
  },
  "links": {
    "NVDA issue for change of state": "https://github.com/nvaccess/nvda/issues/8631",
    "NVDA issue for change of state (when a heading is used) ": "https://github.com/nvaccess/nvda/issues/8706",
    "JAWS issue for missing heading semantics": "https://github.com/FreedomScientific/VFO-standards-support/issues/105",
    "WHATWG HTML spec for the summary element": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element",
    "HTML AAM for the summary element": "https://w3c.github.io/html-aam/#el-summary"
  }
}
---