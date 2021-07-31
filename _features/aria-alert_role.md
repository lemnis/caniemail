---
{
  "title": "alert role",
  "description": "A type of live region with important, and usually time-sensitive, information. See related alertdialog and status.",
  "category": "aria",
  "keywords": [
    "alert role"
  ],
  "last_test_date": "2020-06-19",
  "test_results_url": "https://a11ysupport.io/tech/aria/alert_role",
  "test_url": "https://a11ysupport.io/tech/aria/alert_role",
  "notes_by_num": {
    "1": "Didn't convey the implicit aria-live value of assertive by interrupting the current announcement",
    "2": "Didn't convey its name and role while navigating the page if it has a name",
    "3": "Didn't convey the implicit aria-atomic value of true by announcing the entire region",
    "4": "Didn't convey its name and role as part of the live announcement if it has a name",
    "5": "Didn't announce changes to the live region"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "84": "a #1 #2"
      },
      "ie": {
        "11": "a #2"
      },
      "firefox": {
        "77": "a #2"
      }
    },
    "narrator": {
      "edge": {
        "83": "a #2"
      }
    },
    "nvda": {
      "chrome": {
        "84": "a #1 #2"
      },
      "firefox": {
        "77": "a #2"
      }
    },
    "talkback": {
      "and_chr": {
        "84": "a #3"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.4.1": "a #2 #4"
      }
    },
    "vo_macos": {
      "safari": {
        "13.1.1": "y"
      }
    },
    "orca": {
      "firefox": {
        "77": "u #5 #3 #1 #4"
      }
    }
  },
  "links": {
    "ARIA spec for alert": "https://www.w3.org/TR/wai-aria-1.1/#alert"
  }
}
---