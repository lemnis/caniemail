---
{
  "title": "aria-atomic attribute",
  "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
  "category": "aria",
  "keywords": "aria-atomic attribute",
  "last_test_date": "2019-01-06",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-atomic_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-atomic_attribute",
  "notes_by_num": {
    "1": "Didn't convey the false value by only announcing content that has changed",
    "2": "Didn't convey the true value by announcing all content"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "84": "a #1"
      },
      "edge": {
        "91": "a #1"
      },
      "ie": {
        "11": "y"
      },
      "firefox": {
        "82": "y"
      }
    },
    "narrator": {
      "edge": {
        "86": "y"
      }
    },
    "nvda": {
      "chrome": {
        "91": "a #1"
      },
      "edge": {
        "91": "a #1"
      },
      "firefox": {
        "82": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "86": "a #2 #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "14.2": "y"
      }
    },
    "vo_macos": {
      "safari": {
        "14.0": "y"
      }
    },
    "orca": {
      "firefox": {
        "82": "y"
      }
    }
  },
  "links": {
    "Chromium issue for aria-atomic=false not respected when new nodes are spans": "https://bugs.chromium.org/p/chromium/issues/detail?id=1148404",
    "ARIA spec for aria-atomic": "https://www.w3.org/TR/wai-aria-1.1/#aria-atomic"
  }
}
---