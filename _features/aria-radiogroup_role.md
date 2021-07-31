---
{
  "title": "radiogroup role",
  "description": "A group of radio buttons.",
  "category": "aria",
  "keywords": [
    "radiogroup role"
  ],
  "last_test_date": "2019-01-06",
  "test_results_url": "https://a11ysupport.io/tech/aria/radiogroup_role",
  "test_url": "https://a11ysupport.io/tech/aria/radiogroup_role",
  "notes_by_num": {
    "1": "aria-required attribute on role=radiogroup: Reading mode passed because \"Contains 2 items\" implies a grouping",
    "2": "Didn't convey the group name if it has a group name",
    "3": "Didn't convey its role",
    "4": "Didn't convey the boundaries of the group"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "75": "a"
      },
      "ie": {
        "11": "a"
      },
      "firefox": {
        "67": "a"
      }
    },
    "narrator": {
      "edge": {
        "44.17763": "y #1"
      }
    },
    "nvda": {
      "chrome": {
        "75": "a"
      },
      "firefox": {
        "67": "a"
      }
    },
    "orca": {
      "firefox": {
        "69": "a"
      }
    },
    "talkback": {
      "and_chr": {
        "76": "n #2 #3 #4"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1": "n #2 #3 #4"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1": "y"
      }
    }
  },
  "links": {
    "ARIA spec for radiogroup": "https://www.w3.org/TR/wai-aria-1.1/#radiogroup"
  }
}
---