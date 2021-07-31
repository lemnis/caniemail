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
    "1": "Didn't convey changes to aria-selected value",
    "2": "Didn't convey false value by indicating that the element can be selected",
    "3": "Didn't convey undefined value by indicating that the element is not selectable",
    "4": "Didn't convey true value by indicating that the element is currently selected",
    "5": "ARIA gridcell role with aria-selected: Narrator appears to intercept the enter key when aria-selected is set to false"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "75-86": "a #1 #2 #3 #4"
      },
      "ie": {
        "11": "a #1 #2 #4"
      },
      "firefox": {
        "68-82": "a #1 #2 #4"
      }
    },
    "narrator": {
      "edge": {
        "44-86": "a #5 #2"
      }
    },
    "nvda": {
      "chrome": {
        "75-86": "a #4 #3"
      },
      "firefox": {
        "68-82": "a #1 #4 #3"
      }
    },
    "talkback": {
      "and_chr": {
        "75-86": "a #2 #4"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1-14.2": "a #4 #1 #2"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1-14.0": "a #1 #2 #4"
      }
    },
    "orca": {
      "firefox": {
        "69-82": "a #1 #4"
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