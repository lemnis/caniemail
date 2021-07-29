---
{
  "title": "dl element (description list)",
  "description": "Description list element. See the related [`dt` element](/tech/html/dt_element) and the [`dd` element](/tech/html/dd_element) for more information.",
  "category": "html",
  "keywords": [
    "dl element (description list)"
  ],
  "last_test_date": "2018-09-05",
  "test_results_url": "https://a11ysupport.io/tech/html/dl_element",
  "notes": "The `dl` element and its associated `dt` and `dd` elements have poor to non-existent support. If it is critically important to convey relationships between terms and descriptions and the values of the two can be confused with each other (think a matching list of colors such as \"red: blue\", consider another approach such as a table or headings. It is often possible for a user to determine which text is a key and which text is a value just based upon the text alone. If this is the case for your implementation, it might be fine to use a `dl` element and hope for better support in the future.",
  "stats": {
    "jaws": {
      "chrome": {
        "85": "a"
      },
      "ie": {
        "11.134": "a"
      },
      "firefox": {
        "80": "a"
      }
    },
    "narrator": {
      "edge": {
        "85": "n"
      }
    },
    "nvda": {
      "chrome": {
        "85": "a"
      },
      "firefox": {
        "80": "a"
      }
    },
    "orca": {
      "firefox": {
        "80": "n"
      }
    },
    "talkback": {
      "and_chr": {
        "85": "u"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "14": "a"
      }
    },
    "vo_macos": {
      "safari": {
        "14.0": "a"
      }
    }
  },
  "links": {
    "NVDA issue": "https://github.com/nvaccess/nvda/issues/3858",
    "JAWS issue": "https://github.com/FreedomScientific/VFO-standards-support/issues/157",
    "WHATWG HTML spec for description lists": "https://html.spec.whatwg.org/#the-dl-element",
    "HTML AAM for the dl element": "https://w3c.github.io/html-aam/#el-dl"
  }
}
---