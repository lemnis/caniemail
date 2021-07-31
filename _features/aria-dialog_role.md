---
{
  "title": "dialog role",
  "description": "A dialog is a descendant window of the primary window of a web application. For HTML pages, the primary application window is the entire web document, i.e., the body element.",
  "category": "aria",
  "keywords": [
    "dialog role"
  ],
  "last_test_date": "2019-08-13",
  "test_results_url": "https://a11ysupport.io/tech/aria/dialog_role",
  "test_url": "https://a11ysupport.io/tech/aria/dialog_role",
  "notes_by_num": {
    "1": "Didn't convey the boundaries of the dialog",
    "2": "ARIA dialog role must use document mode: An element in the dialog had to receive focus before the contents of the dialog would be read by NVDA.",
    "3": "Didn't convey the name of the dialog",
    "4": "Didn't convey its role"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "74-88": "y"
      },
      "ie": {
        "11-11.253": "y"
      },
      "firefox": {
        "66-85": "y"
      }
    },
    "narrator": {
      "edge": {
        "44.17763-88": "a #1"
      }
    },
    "nvda": {
      "chrome": {
        "74-88": "y"
      },
      "firefox": {
        "64.0.2-85": "y #2"
      }
    },
    "orca": {
      "firefox": {
        "69-85": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "67-88": "a #3 #4 #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.1.2-14.3": "a #3 #4"
      }
    },
    "vo_macos": {
      "safari": {
        "12.0.2-14.0.3": "a"
      }
    }
  },
  "links": {
    "ARIA spec for dialog": "https://www.w3.org/TR/wai-aria-1.1/#dialog"
  }
}
---