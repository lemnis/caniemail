---
{
  "title": "aria-modal attribute",
  "description": "Indicates whether an element is modal when displayed. For more robust support, consider making the rest of the document [inert](https://github.com/WICG/inert) when an element has aria-modal=true.",
  "category": "aria",
  "keywords": "aria-modal attribute",
  "last_test_date": "2019-08-13",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-modal_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-modal_attribute",
  "notes_by_num": {
    "1": "Didn't convey the presence of aria-modal=true",
    "2": "Didn't limit reading to children of aria-modal=true",
    "3": "Didn't remove outside content from navigational shortcuts when aria-modal=true"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "96": "y"
      },
      "edge": {
        "96": "y"
      },
      "ie": {
        "11": "a"
      },
      "firefox": {
        "85": "a"
      }
    },
    "narrator": {
      "edge": {
        "88": "n #1 #2 #3"
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
        "85": "y"
      }
    },
    "orca": {
      "firefox": {
        "85": "u"
      }
    },
    "talkback": {
      "and_chr": {
        "88": "n #1 #2 #3"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "14.3": "u #1 #3"
      }
    },
    "vo_macos": {
      "safari": {
        "14.0.3": "u #3"
      }
    }
  },
  "links": {
    "JAWS issue": "https://github.com/FreedomScientific/VFO-standards-support/issues/179",
    "ARIA spec for aria-modal": "https://www.w3.org/TR/wai-aria-1.1/#aria-modal"
  }
}
---