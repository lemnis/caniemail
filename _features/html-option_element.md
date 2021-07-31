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
    "2": "HTML input with datalist test: The menu context might imply a menuitem role instead of an option role",
    "3": "HTML input with datalist test: Only the name is displayed by Edge and announced by Narrator if both the name and value are set.",
    "4": "HTML input with datalist test: the first item was announced as \"row 1\", however other items did not convey their position.",
    "5": "HTML select element test: only conveyed when expanded",
    "6": "HTML input with datalist test: option role was implied by the announcement of \"autofill menu\" and \"in list\" when entering the list of options",
    "7": "HTML input with datalist test: Only the option value is listed as predictions, not the name."
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "75-79": "a #1"
      }
    },
    "jaws": {
      "chrome": {
        "80": "a #2"
      },
      "ie": {
        "11": "a"
      },
      "firefox": {
        "73": "y"
      }
    },
    "narrator": {
      "edge": {
        "44": "a #3"
      }
    },
    "nvda": {
      "chrome": {
        "80": "y #4 #5"
      },
      "firefox": {
        "73": "a #5"
      }
    },
    "orca": {
      "firefox": {
        "73": "a"
      }
    },
    "talkback": {
      "and_chr": {
        "80": "a #6"
      }
    },
    "va_and": {
      "and_chr": {
        "77-79": "a"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.3.1": "a #7"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.5": "a"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0-13.3.1": "u"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.5-13.0.2": "a"
      }
    },
    "wsr": {
      "edge": {
        "44": "a"
      },
      "chrome": {
        "77-79": "u"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the option element": "https://html.spec.whatwg.org/#the-option-element",
    "HTML AAM for the option element": "https://w3c.github.io/html-aam/#el-option"
  }
}
---