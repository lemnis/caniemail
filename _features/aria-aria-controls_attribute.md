---
{
  "title": "aria-controls attribute",
  "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element. See related aria-owns.",
  "category": "aria",
  "keywords": [
    "aria-controls attribute"
  ],
  "last_test_date": "2020-11-09",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-controls_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-controls_attribute",
  "notes_by_num": {
    "1": "Didn't convey the presence of the aria-controls attribute",
    "2": "Didn't allow the user to jump to the controlled element"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "80-86": "a #1"
      },
      "ie": {
        "11": "a #1"
      },
      "firefox": {
        "74-82": "a #1"
      },
      "edge": {
        "86": "u #1"
      }
    },
    "narrator": {
      "edge": {
        "44-86": "u #2 #1"
      }
    },
    "nvda": {
      "chrome": {
        "73-86": "n #2 #1"
      },
      "firefox": {
        "66-82": "n #2 #1"
      },
      "ie": {
        "11": "n #2 #1"
      },
      "edge": {
        "44.17763": "n #2 #1"
      }
    },
    "talkback": {
      "and_chr": {
        "75-86": "n #2 #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.2-14.2": "n #2 #1"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1-14.0": "n #2 #1"
      }
    },
    "orca": {
      "firefox": {
        "69-82": "n #2 #1"
      }
    },
    "dragon_win": {
      "chrome": {
        "80-87": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "80-87": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5-14.0.1": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.3.1-14.2": "y"
      }
    },
    "wsr": {
      "chrome": {
        "80-87": "y"
      }
    }
  },
  "links": {
    "ARIA: What to do about aria-controls": "https://github.com/w3c/aria/issues/995",
    "ARIA spec for aria-controls": "https://www.w3.org/TR/wai-aria-1.1/#aria-controls"
  }
}
---