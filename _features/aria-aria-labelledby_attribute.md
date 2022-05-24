---
{
  "title": "aria-labelledby attribute",
  "description": "Identifies the element (or elements) that labels the current element. See related aria-describedby.",
  "category": "aria",
  "keywords": "aria-labelledby attribute",
  "last_test_date": "2019-01-06",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-labelledby_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-labelledby_attribute",
  "notes_by_num": {
    "1": "Didn't contribute to the accessible name",
    "2": "APG 1.1 Checkbox Example (Two State): Pressing the TAB or SHIFT+TAB keys to focus the first (or last) checkbox in the group caused the group label to be announced",
    "3": "Didn't convey name changes when in focus"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "76-77": "u #1"
      }
    },
    "jaws": {
      "chrome": {
        "92": "a #2 #3"
      },
      "edge": {
        "92": "a #3"
      },
      "ie": {
        "11-11.134": "y #2"
      },
      "firefox": {
        "66-79": "a #2 #3"
      }
    },
    "narrator": {
      "edge": {
        "44-84": "a"
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
        "67-79": "a #3"
      }
    },
    "va_and": {
      "and_chr": {
        "77": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.2": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3-13.6": "a #1"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1-13.1.2": "a"
      }
    },
    "talkback": {
      "and_chr": {
        "75-84": "a #1 #3"
      }
    },
    "orca": {
      "firefox": {
        "69-79": "a #3"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0-13.1": "y"
      }
    },
    "wsr": {
      "edge": {
        "44": "y"
      },
      "chrome": {
        "77": "y"
      }
    }
  },
  "links": {
    "ARIA spec for aria-labelledby": "https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby"
  }
}
---