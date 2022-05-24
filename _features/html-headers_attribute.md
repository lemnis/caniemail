---
{
  "title": "headers attribute",
  "description": "The `headers` attribute gives authors a way to override implicit cell headers (via `<th>` elements) to accurately describe the structure of complex tables to assistive technology. Note: this is a difficult feature to test, as implicit headers often interfere with results. It's not possible to tell where the header originitated from when testing with an assistive technology; is this header sourced implicitly (via `<th>` elements) or explicitly (via the `headers` attribute). Most real world tables that require the `headers` attribute also make use of implicit headers. Several tests are included for this feature because of this, and some of the results may be false negatives.",
  "category": "html",
  "keywords": "headers attribute",
  "last_test_date": "2020-07-10",
  "test_results_url": "https://a11ysupport.io/tech/html/headers_attribute",
  "test_url": "https://a11ysupport.io/tech/html/headers_attribute",
  "notes_by_num": {
    "1": "Didn't convey the defined cell headers"
  },
  "stats": {
    "jaws": {
      "chrome": {
        "101": "n #1"
      },
      "edge": {
        "101": "n #1"
      },
      "ie": {
        "11": "a #1"
      },
      "firefox": {
        "99": "a #1"
      }
    },
    "narrator": {
      "edge": {
        "101": "n #1"
      }
    },
    "nvda": {
      "chrome": {
        "101": "a #1"
      },
      "edge": {
        "101": "a #1"
      },
      "firefox": {
        "99": "y"
      }
    },
    "talkback": {
      "and_chr": {
        "101": "n #1"
      }
    },
    "vo_ios": {
      "ios_saf": {
        "15.4.1": "n #1"
      }
    },
    "vo_macos": {
      "safari": {
        "15.3": "a #1"
      }
    },
    "orca": {
      "firefox": {
        "77": "n #1"
      }
    }
  },
  "links": {
    "Chrome bug for headers attribute": "https://bugs.chromium.org/p/chromium/issues/detail?id=1081201",
    "WHATWG HTML spec 4.9.12.2 Forming relationships between data cells and header cells": "https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics:attr-tdth-headers",
    "HTML AAM for the headers attribute": "https://w3c.github.io/html-aam/#att-headers"
  }
}
---