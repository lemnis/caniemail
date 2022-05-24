---
{
  "title": "status role",
  "description": "A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar.",
  "category": "aria",
  "keywords": "status role",
  "last_test_date": "2020-07-08",
  "test_results_url": "https://a11ysupport.io/tech/aria/status_role",
  "test_url": "https://a11ysupport.io/tech/aria/status_role",
  "notes_by_num": {
    "1": "Didn't convey its name and role while navigating the page if it has a name",
    "2": "Didn't convey the implicit aria-atomic value of true by announcing the entire region",
    "3": "Didn't convey its name and role as part of the live announcement if it has a name"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "92": "a #1"
      },
      "edge": {
        "92": "a #1"
      },
      "ie": {
        "11": "a #2 #1 #3"
      },
      "firefox": {
        "77": "a #2 #1 #3"
      }
    },
    "narrator": {
      "edge": {
        "83": "a #1"
      }
    },
    "nvda": {
      "chrome": {
        "92": "a #1"
      },
      "edge": {
        "92": "a #1"
      },
      "firefox": {
        "77": "a #2 #1 #3"
      }
    },
    "talkback": {
      "and_chr": {
        "84": "a #2"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.4.1": "a #1 #3"
      }
    },
    "vo_macos": {
      "safari": {
        "13.1.1": "a"
      }
    },
    "orca": {
      "firefox": {
        "77": "a #2 #1"
      }
    }
  },
  "links": {
    "ARIA spec for status": "https://www.w3.org/TR/wai-aria-1.1/#status"
  }
}
---