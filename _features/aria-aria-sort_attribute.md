---
{
  "title": "aria-sort attribute",
  "description": "Indicates if items in a table or grid are sorted in ascending or descending order.",
  "category": "aria",
  "keywords": [
    "aria-sort attribute"
  ],
  "last_test_date": "2020-09-08",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-sort_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-sort_attribute",
  "notes_by_num": {
    "1": "Didn't convey the 'none' value by indicating that the header is unsorted but sortable",
    "2": "Didn't convey changes to the sort value",
    "3": "Didn't convey the 'ascending' value",
    "4": "Didn't convey the 'descending' value",
    "5": "Didn't convey the 'other' value"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "85": "a #1"
      },
      "ie": {
        "11": "a #2 #1"
      },
      "firefox": {
        "80": "a #1"
      }
    },
    "narrator": {
      "edge": {
        "85": "a #2 #1"
      }
    },
    "nvda": {
      "chrome": {
        "85": "a #2 #1"
      },
      "firefox": {
        "80": "a #2 #1"
      },
      "ie": {
        "11": "u"
      }
    },
    "orca": {
      "firefox": {
        "85": "a #2 #3 #4 #1 #5"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.6.1": "a #2 #1 #5"
      }
    },
    "vo_macos": {
      "safari": {
        "13.1.2": "a #2 #1 #5"
      }
    },
    "talkback": {
      "and_chr": {
        "85": "a #2 #3 #4 #1 #5"
      },
      "and_ff": {
        "80": "u"
      }
    }
  },
  "links": {
    "ARIA spec for aria-sort": "https://www.w3.org/TR/wai-aria-1.1/#aria-sort"
  }
}
---