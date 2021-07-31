---
{
  "title": "option element",
  "description": "",
  "category": "html",
  "keywords": [
    "option element"
  ],
  "last_test_date": "2019-07-24",
  "test_results_url": "https://a11ysupport.io/tech/html/option_element",
  "test_url": "https://a11ysupport.io/tech/html/option_element",
  "notes_by_num": {
    "1": "HTML select element test: Options within an optgroup are not supported. I said 'click listbox', 'show choices', 'choose banana', and the option was not activated. Saying 'choose everything' instead worked as expected ('everything' is not part of an optgroup).",
    "2": "Didn't convey its name",
    "3": "Didn't convey its role",
    "4": "Didn't convey the value of the option when used in a datalist context",
    "5": "HTML input with datalist test: The menu context might imply a menuitem role instead of an option role",
    "6": "Didn't convey information about the position the option in the list",
    "7": "HTML input with datalist test: Only the name is displayed by Edge and announced by Narrator if both the name and value are set.",
    "8": "HTML input with datalist test: the first item was announced as \"row 1\", however other items did not convey their position.",
    "9": "HTML select element test: only conveyed when expanded",
    "10": "HTML input with datalist test: option role was implied by the announcement of \"autofill menu\" and \"in list\" when entering the list of options",
    "11": "HTML input with datalist test: Only the option value is listed as predictions, not the name."
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "75-79": "a #1 #2 #3 #4"
      }
    },
    "jaws": {
      "chrome": {
        "80": "a #5 #6"
      },
      "ie": {
        "11": "a #2 #3 #4 #6"
      },
      "firefox": {
        "73": "y"
      }
    },
    "narrator": {
      "edge": {
        "44": "a #7"
      }
    },
    "nvda": {
      "chrome": {
        "80": "y #8 #9"
      },
      "firefox": {
        "73": "a #4 #9"
      }
    },
    "orca": {
      "firefox": {
        "73": "a #4 #6"
      }
    },
    "talkback": {
      "and_chr": {
        "80": "a #10 #6"
      }
    },
    "va_and": {
      "and_chr": {
        "77-79": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.3.1": "a #11 #6"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.5": "a #2 #3 #4 #6"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0-13.3.1": "u #2 #4"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5-13.0.2": "a #2 #3 #4"
      }
    },
    "wsr": {
      "edge": {
        "44": "y"
      },
      "chrome": {
        "77-79": "u #2 #3 #4"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the option element": "https://html.spec.whatwg.org/#the-option-element",
    "HTML AAM for the option element": "https://w3c.github.io/html-aam/#el-option"
  }
}
---