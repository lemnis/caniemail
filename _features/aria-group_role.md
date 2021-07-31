---
{
  "title": "group role",
  "description": "A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies.",
  "category": "aria",
  "keywords": [
    "group role"
  ],
  "last_test_date": "2019-01-06",
  "test_results_url": "https://a11ysupport.io/tech/aria/group_role",
  "test_url": "https://a11ysupport.io/tech/aria/group_role",
  "notes_by_num": {
    "1": "APG 1.1 Checkbox Example (Two State): Pressing the TAB or SHIFT+TAB keys to focus the first (or last) checkbox in the group caused the group label to be announced, but not the group role.",
    "2": "Didn't convey the name if named",
    "3": "Didn't convey its role",
    "4": "Didn't convey the boundaries of the group"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "76-78": "y"
      }
    },
    "jaws": {
      "chrome": {
        "74-78": "a #1"
      },
      "ie": {
        "11-11.134": "a #1"
      },
      "firefox": {
        "66-70": "a #1"
      }
    },
    "narrator": {
      "edge": {
        "44-44.17763.1.0": "a"
      }
    },
    "nvda": {
      "chrome": {
        "74-78": "a"
      },
      "firefox": {
        "67-70": "a"
      }
    },
    "va_and": {
      "and_chr": {
        "77-78": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.2-13.0.4": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3-13.3": "a #2 #3 #4"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1-13.0.4": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "75-78": "a #2 #3 #4"
      }
    },
    "orca": {
      "firefox": {
        "69-70": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0-13.3": "y"
      }
    },
    "wsr": {
      "edge": {
        "44": "y"
      },
      "chrome": {
        "77-78": "y"
      }
    }
  },
  "links": {
    "ARIA spec for group": "https://www.w3.org/TR/wai-aria-1.1/#group"
  }
}
---