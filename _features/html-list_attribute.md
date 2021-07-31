---
{
  "title": "list attribute",
  "description": "The list attribute is used to identify an element that lists predefined options suggested to the user.",
  "category": "html",
  "keywords": "list attribute",
  "last_test_date": "2019-07-19",
  "test_results_url": "https://a11ysupport.io/tech/html/list_attribute",
  "test_url": "https://a11ysupport.io/tech/html/list_attribute",
  "notes_by_num": {
    "1": "HTML input with datalist test: The role is not consistently conveyed across browsers, and is often presented with a modifier (\"combo\" or \"has popup\") to convey the presence of the datalist.",
    "2": "HTML input with datalist test: When paired with IE, JAWS does not alter the role to convey the datalist functionality.",
    "3": "HTML input with datalist test: The role is not consistently conveyed across browsers, and is often presented with a modifier (\"combo box\" or \"subMenu\") to convey the presence of the datalist.",
    "4": "Didn't convey the presence of the list attribute"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "79": "y"
      }
    },
    "jaws": {
      "chrome": {
        "80": "y #1"
      },
      "ie": {
        "11": "n #2"
      },
      "firefox": {
        "73": "y #1"
      }
    },
    "narrator": {
      "edge": {
        "44": "y"
      }
    },
    "nvda": {
      "chrome": {
        "80": "y #3"
      },
      "firefox": {
        "73": "y #3"
      }
    },
    "orca": {
      "firefox": {
        "73": "n #4"
      }
    },
    "talkback": {
      "and_chr": {
        "80": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "79": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.3.1": "y"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.5": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.3.1": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5": "y"
      }
    },
    "wsr": {
      "edge": {
        "44": "y"
      },
      "chrome": {
        "79": "y"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the list attribute": "https://html.spec.whatwg.org/multipage/input.html#the-list-attribute",
    "HTML AAM for the list attribute": "https://w3c.github.io/html-aam/#att-list"
  }
}
---