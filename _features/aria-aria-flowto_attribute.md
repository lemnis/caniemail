---
{
  "title": "aria-flowto attribute",
  "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.",
  "category": "aria",
  "keywords": [
    "aria-flowto attribute"
  ],
  "last_test_date": "2019-01-08",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-flowto_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-flowto_attribute",
  "notes_by_num": {
    "1": "aria-flowto test: relationships are displayed in a dialog, but only targets that have an aria-label are labelled in the dialog. The rest appear without a textual label.",
    "2": "aria-flowto test: partial support because a reference to multiple elements is not supported",
    "3": "aria-flowto test: partial because user was not prompted to follow the alternate reading order."
  },
  "stats": {
    "jaws": {
      "chrome": {
        "74": "y #1"
      },
      "ie": {
        "11.134": "y #1"
      },
      "firefox": {
        "66": "a #2"
      }
    },
    "narrator": {
      "edge": {
        "44.17763": "u #3"
      }
    },
    "nvda": {
      "chrome": {
        "74": "n"
      },
      "firefox": {
        "66": "n"
      }
    },
    "orca": {
      "firefox": {
        "69": "n"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.2": "n"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1": "n"
      }
    },
    "talkback": {
      "and_chr": {
        "75": "n"
      }
    }
  },
  "links": {
    "ARIA spec for aria-flowto": "https://www.w3.org/TR/wai-aria-1.1/#aria-flowto"
  }
}
---