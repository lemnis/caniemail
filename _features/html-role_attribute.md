---
{
  "title": "role attribute",
  "description": "The role attribute is used to convey the purpose of various elements to users of assistive technology. While the role attribute is defined in ARIA, these expectations test the attribute as implemented in HTML.",
  "category": "html",
  "keywords": "role attribute",
  "last_test_date": "2019-12-02",
  "test_results_url": "https://a11ysupport.io/tech/html/role_attribute",
  "test_url": "https://a11ysupport.io/tech/html/role_attribute",
  "notes_by_num": {
    "1": "Didn't support fallback roles",
    "2": "Didn't lose the location of the browsing caret when a container role is changed",
    "3": "Didn't process changes in role values"
  },
  "stats": {
    "dragon_win": {
      "chrome": {
        "78": "a #1"
      }
    },
    "jaws": {
      "chrome": {
        "78": "y"
      },
      "ie": {
        "11": "a #1"
      },
      "firefox": {
        "70": "y"
      }
    },
    "narrator": {
      "edge": {
        "44": "y"
      }
    },
    "nvda": {
      "chrome": {
        "78": "a #2"
      },
      "firefox": {
        "70": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "78": "y"
      }
    },
    "va_and": {
      "and_chr": {
        "78": "y"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "13.2.3": "a #3"
      }
    },
    "vo_macos": {
      "safari": {
        "13.0.3": "y"
      }
    },
    "orca": {
      "firefox": {
        "70": "y"
      }
    },
    "vc_ios": {
      "ios_saf": {
        "13.2.3": "y"
      }
    },
    "vc_macos": {
      "safari": {
        "13.0.3": "y"
      }
    },
    "wsr": {
      "chrome": {
        "78": "y"
      }
    }
  },
  "links": {
    "WHATWG HTML spec for the role attribute": "https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role",
    "ARIA 1.1 spec for the role attribute": "https://www.w3.org/TR/wai-aria-1.1/#host_general_role",
    "Additional information about the role attribute in the ARIA 1.2 spec (draft)": "https://www.w3.org/TR/wai-aria-1.2/#introroles"
  }
}
---