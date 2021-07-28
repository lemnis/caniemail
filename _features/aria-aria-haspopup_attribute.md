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
  "stats": {
    "jaws": {
      "chrome": {
        "75": "a",
        "80": "a",
        "86": "a"
      },
      "ie": {
        "11": "a"
      },
      "firefox": {
        "67": "a",
        "74": "a",
        "82": "a"
      },
      "edge": {
        "44": null
      }
    },
    "narrator": {
      "edge": {
        "44": "a",
        "86": "a",
        "44.17763": "a"
      }
    },
    "nvda": {
      "chrome": {
        "75": "a",
        "80": "a",
        "86": "a"
      },
      "firefox": {
        "67": "a",
        "74": "a",
        "82": "a"
      },
      "ie": {
        "11": null
      },
      "edge": {
        "44.17763": null
      }
    },
    "talkback": {
      "and_chr": {
        "75": "a",
        "80": "a",
        "86": "a"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "14.2": "y",
        "13.4": "y",
        "13.1": "y"
      }
    },
    "vo_macos": {
      "safari": {
        "14.0": "y",
        "13.1": "y",
        "13.0.2": "y"
      }
    },
    "orca": {
      "firefox": {
        "69": "a",
        "74": "a",
        "82": "a"
      }
    },
    "dragon_win": {
      "chrome": {
        "80": "y",
        "87": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "80": "y",
        "87": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "14.0.1": "y",
        "13.0.5": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "14.2": "y",
        "13.3.1": "y"
      }
    },
    "wsr": {
      "chrome": {
        "80": "y",
        "87": "y"
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