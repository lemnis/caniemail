---
{
  "title": "aria-selected attribute",
  "description": "Indicates the current \"selected\" state of various widgets. See related aria-checked and aria-pressed.",
  "category": "aria",
  "keywords": "aria-selected attribute",
  "last_test_date": "2019-08-02",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-selected_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-selected_attribute",
  "notes_by_num": {
    "1": "Didn't convey true value by indicating that the element is currently selected",
    "2": "Didn't convey changes to aria-selected value",
    "3": "Didn't convey false value by indicating that the element can be selected",
    "4": "ARIA gridcell role with aria-selected: Narrator appears to intercept the enter key when aria-selected is set to false",
    "5": "Didn't convey undefined value by indicating that the element is not selectable"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "92": "a #1 #2 #3"
      },
      "edge": {
        "92": "a #1 #2 #3"
      },
      "ie": {
        "11": "a #2 #3 #1"
      },
      "firefox": {
        "68-82": "a #2 #3 #1"
      }
    },
    "narrator": {
      "edge": {
        "44-86": "a #4 #3"
      }
    },
    "nvda": {
      "chrome": {
        "92": "a #1"
      },
      "edge": {
        "92": "a #1"
      },
      "firefox": {
        "68-82": "a #2 #1 #5"
      }
    },
    "talkback": {
      "and_chr": {
        "75-86": "a #3 #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1-14.2": "a #1 #2 #3"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1-15.1": "a #2 #3 #1"
      }
    },
    "orca": {
      "firefox": {
        "82-93": "a #1 #2 #3"
      }
    },
    "dragon_win": {
      "chrome": {
        "87": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "87": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "14.0.1": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "14.2": "y"
      }
    },
    "wsr": {
      "chrome": {
        "87": "y"
      }
    }
  },
  "links": {
    "ARIA spec for aria-selected": "https://www.w3.org/TR/wai-aria-1.1/#aria-selected"
  }
}
---