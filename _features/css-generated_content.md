---
{
  "title": "CSS generated content",
  "description": "CSS Generated Content is content that is added to the DOM via CSS such as ::before and ::after content.",
  "category": "css",
  "keywords": [
    "CSS generated content"
  ],
  "last_test_date": "2018-07-21",
  "test_results_url": "https://a11ysupport.io/tech/css/generated_content",
  "test_url": "https://a11ysupport.io/tech/css/generated_content",
  "notes": "Avoid using CSS generated content for meaningful textual additions.",
  "notes_by_num": {
    "1": "Didn't be included as part of the accessible name",
    "2": "CSS generated content in form label: It worked if I said \"click generated\", which means that the CSS generated content is not taken into account.",
    "3": "CSS Generated Content with HTML span element: When using the next/previous line command, you have to swipe left/right three times to hear the entire sentence. The first swipe right reads the before generated content 'this', the next swipe right reads the html contents 'is generated', and the final swipe right reads the after generated content 'content'."
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "70.0-81": "n #1"
      },
      "ie": {
        "11.134": "n #2"
      },
      "firefox": {
        "63.0.1": "n #1"
      }
    },
    "jaws": {
      "chrome": {
        "75-81": "a #1"
      },
      "ie": {
        "11": "u #1"
      },
      "firefox": {
        "67-74": "y"
      },
      "edge": {
        "44": "a #1"
      }
    },
    "narrator": {
      "edge": {
        "44": "a #1"
      }
    },
    "nvda": {
      "chrome": {
        "75-81": "a #1"
      },
      "firefox": {
        "60-74": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "67-81": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "77-81": "a"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.3.1-13.4.1": "y #3"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1.1-13.1": "y"
      }
    },
    "orca": {
      "firefox": {
        "69-74": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.0-13.4.1": "a"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.2-13.1": "y"
      }
    },
    "wsr": {
      "chrome": {
        "77-81": "n #1"
      },
      "edge": {
        "44": "y"
      }
    }
  },
  "links": {
    "Chrome bug for incorrect button name mapping": "https://bugs.chromium.org/p/chromium/issues/detail?id=1071827",
    "CSS Generated Content Module Level 3": "https://www.w3.org/TR/2016/WD-css-content-3-20160602/",
    "Accessible Name and Description Computation: Step 2F": "https://www.w3.org/TR/accname-1.1/https://www.w3.org/TR/accname-1.1/#step2F.ii"
  }
}
---