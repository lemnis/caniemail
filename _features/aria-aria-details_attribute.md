---
{
  "title": "aria-details attribute",
  "description": "Identifies the element that provides a detailed, extended description for the object. See related aria-describedby.",
  "category": "aria",
  "keywords": [
    "aria-details attribute"
  ],
  "last_test_date": "2019-05-19",
  "test_results_url": "https://a11ysupport.io/tech/aria/aria-details_attribute",
  "test_url": "https://a11ysupport.io/tech/aria/aria-details_attribute",
  "notes": "There is poor support for `aria-details`, so it should not be used as the only means of conveying the relationship between an object and its detailed description. Since `aria-details` can only reference an element that is elsewhere on the same page, the details will likely sill be discoverable by screen reader users. Until support is more robust, it might be worth while to consider an additional indication that the object has a detailed description on the same page by way of the `alt` attribute or similar method.",
  "stats": {
    "jaws": {
      "chrome": {
        "74": "a"
      },
      "ie": {
        "11.134": "a"
      },
      "firefox": {
        "66": "a"
      }
    },
    "narrator": {
      "edge": {
        "44.17763": "n"
      }
    },
    "nvda": {
      "chrome": {
        "74": "n"
      },
      "firefox": {
        "66": "n"
      }
    },
    "orca": {
      "firefox": {
        "69": "n"
      }
    },
    "talkback": {
      "and_chr": {
        "75": "n"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "12.2": "n"
      }
    },
    "vo_macos": {
      "safari": {
        "12.1": "n"
      }
    }
  },
  "links": {
    "ARIA spec for aria-details": "https://www.w3.org/TR/wai-aria-1.1/#aria-details"
  }
}
---