---
{
  "title": "aria-haspopup attribute",
  "description": "This attribute indicates the availability and type of interactive popup element, such as menu or dialog.\n\n Aria 1.0 values are well supported, such as `true`, `false`, and `menu` (which is the same as `true`). New values such as `dialog`, `grid`, `listbox`, and `tree` are not supported. This lack of support might cause significant issues for screen reader users. For example, `aria-haspopup=\"listbox\"` being announced as `aria-haspopup=\"menu\"` could lead users to think that something the behaves like a native `<select>` (`listbox`) is a `menu`.",
  "category": "aria",
  "keywords": [
    "aria-haspopup attribute"
  ],
  "last_test_date": "2019-04-02",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-haspopup_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-haspopup_attribute",
  "stats": {
    "jaws": {
      "chrome": {
        "92": "a"
      },
      "edge": {
        "92": "a"
      },
      "ie": {
        "11": "a"
      },
      "firefox": {
        "67-82": "a"
      }
    },
    "narrator": {
      "edge": {
        "44-86": "a"
      }
    },
    "nvda": {
      "chrome": {
        "92": "a"
      },
      "edge": {
        "92": "a"
      },
      "firefox": {
        "67-82": "a"
      },
      "ie": {
        "11": "a"
      }
    },
    "talkback": {
      "and_chr": {
        "75-86": "a"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.1-15.0.2": "a"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.2-15.1": "a"
      }
    },
    "orca": {
      "firefox": {
        "69-82": "a"
      }
    },
    "dragon_win": {
      "chrome": {
        "80-87": "a"
      }
    },
    "va_and": {
      "and_chr": {
        "80-87": "a"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5-14.0.1": "a"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.3.1-14.2": "a"
      }
    },
    "wsr": {
      "chrome": {
        "80-87": "a"
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