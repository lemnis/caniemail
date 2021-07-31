---
{
  "title": "log role",
  "description": "A type of live region where new information is added in meaningful order and old information may disappear",
  "category": "aria",
  "keywords": [
    "log role"
  ],
  "last_test_date": "2020-07-14",
  "test_results_url": "https://a11ysupport.io/tech/aria/log_role",
  "test_url": "https://a11ysupport.io/tech/aria/log_role",
  "notes_by_num": {
    "1": "Didn't convey its name and role as part of the live announcement if it has a name",
    "2": "Didn't convey its name and role while navigating the page if it has a name",
    "3": "Didn't announce changes to the live region",
    "4": "Didn't convey the implicit aria-atomic value of false by only announcing content that has changed"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "86": "a #1"
      },
      "ie": {
        "11": "a"
      },
      "firefox": {
        "82": "a #2 #1"
      }
    },
    "narrator": {
      "edge": {
        "86": "a #3 #4 #2 #1"
      }
    },
    "nvda": {
      "chrome": {
        "86": "a"
      },
      "firefox": {
        "82": "a #2 #1"
      }
    },
    "talkback": {
      "and_chr": {
        "86": "a #2 #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "14.2": "a #2 #1"
      }
    },
    "vo_macos": {
      "safari": {
        "14.0": "a #1"
      }
    },
    "orca": {
      "firefox": {
        "82": "a #2 #1"
      }
    }
  },
  "links": {
    "ARIA spec for log": "https://www.w3.org/TR/wai-aria-1.1/#log"
  }
}
---