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
    "3": "Didn't let a user navigate to elements that target the current element. If this functionality is provided and the there are multiple targeting elements, the user must be able to choose which one to navigate to.",
    "4": "aria-flowto test: partial because user was not prompted to follow the alternate reading order.",
    "5": "Didn't convey that another element flows to the current element",
    "6": "Didn't convey the presence of the flowto attribute",
    "7": "Didn't let a user navigate to referenced element(s). If the there are multiple targets, the user MUST be able to choose which one to navigate to."
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
        "44.17763": "u #3 #4 #5 #6"
      }
    },
    "nvda": {
      "chrome": {
        "74": "n #3 #7 #5 #6"
      },
      "firefox": {
        "66": "n #3 #7 #5 #6"
      }
    },
    "orca": {
      "firefox": {
        "69": "n #3 #7 #5 #6"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.2": "n #3 #7 #5 #6"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1": "n #3 #7 #5 #6"
      }
    },
    "talkback": {
      "and_chr": {
        "75": "n #3 #7 #5 #6"
      }
    }
  },
  "links": {
    "ARIA spec for aria-flowto": "https://www.w3.org/TR/wai-aria-1.1/#aria-flowto"
  }
}
---