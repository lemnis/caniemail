---
{
  "title": "aria-haspopup attribute",
  "description": "This attribute indicates the availability and type of interactive popup element, such as menu or dialog.\n\n Aria 1.0 values are well supported, such as `true`, `false`, and `menu` (which is the same as `true`). New values such as `dialog`, `grid`, `listbox`, and `tree` are not supported. This lack of support might cause significant issues for screen reader users. For example, `aria-haspopup=\"listbox\"` being announced as `aria-haspopup=\"menu\"` could lead users to think that something the behaves like a native `<select>` (`listbox`) is a `menu`.",
  "category": "aria",
  "keywords": "aria-haspopup attribute",
  "last_test_date": "2019-04-02",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-haspopup_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-haspopup_attribute",
  "notes_by_num": {
    "1": "Didn't convey the \"listbox\" value",
    "2": "Didn't convey the \"dialog\" value",
    "3": "Didn't convey the \"grid\" value",
    "4": "Didn't convey the \"tree\" value",
    "5": "Didn't convey the \"true\" value (see note)",
    "6": "Didn't convey the \"menu\" value"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "92": "a #1 #2 #3 #4"
      },
      "edge": {
        "92": "a #1 #2 #3 #4"
      },
      "ie": {
        "11": "a #1 #2 #3 #4"
      },
      "firefox": {
        "67-82": "a #2 #3 #1 #4"
      }
    },
    "narrator": {
      "edge": {
        "44-86": "a #5 #2 #3 #1 #6 #4"
      }
    },
    "nvda": {
      "chrome": {
        "92": "a #1 #2 #3 #4"
      },
      "edge": {
        "92": "a #1 #2 #3 #4"
      },
      "firefox": {
        "67-82": "a #2 #3 #1 #4"
      },
      "ie": {
        "11": "a #2 #3 #1 #4"
      }
    },
    "talkback": {
      "and_chr": {
        "75-86": "a #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.1-15.0.2": "y"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.2-15.1": "y"
      }
    },
    "orca": {
      "firefox": {
        "69-82": "a #2 #3 #1 #6 #4 #5"
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
    "NVDA issue for ARIA 1.1 values": "https://github.com/nvaccess/nvda/issues/8235",
    "JAWS issue for ARIA 1.1 values": "https://github.com/FreedomScientific/VFO-standards-support/issues/33",
    "ARIA spec for aria-haspopup": "https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup"
  }
}
---