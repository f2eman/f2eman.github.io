const TOOLS = {
  data: {
    _arrow: document.querySelector('.j_arrow'),
    _content: document.querySelector('.j_content'),
    _time: document.querySelector('.j_time'),
  },
  arrowClick() {
    this.data._arrow.addEventListener(
      'click',
      () => {
        window.scrollTo({
          top: this.data._content.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      },
      false
    );
  },
  setTime() {
    this.data._time.innerHTML = new Date().getFullYear();
  },
  init() {
    this.arrowClick();
    this.setTime();
  },
};

TOOLS.init();
