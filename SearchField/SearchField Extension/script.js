(function () {
  const SearchField = {
    querySelector: [
      "input[aria-label*='search']",
      "input[aria-label*='Search']",
      "input[aria-label*='rechercher']",
      "input[aria-label='Rechercher']",
      "input[type='search']",
      "input[name*='search']",
      "input[id*='search']"
    ],
    init() {
      this.searchFiedl = document.querySelector(this.querySelector.join(","));
      if (this.searchFiedl !== null) {
        document.addEventListener('keydown', (e) => {
          this.focus(e);
        });
      }
    },
    focus(e) {
      if (e.code === "KeyL" && e.ctrlKey && e.shiftKey) {
        this.searchFiedl.focus();
        this.searchFiedl.select();
      }
    }
  };
  document.addEventListener("DOMContentLoaded", function (event) {
    SearchField.init();
  });
})();
