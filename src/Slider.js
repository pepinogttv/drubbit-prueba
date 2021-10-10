export default class Slider {
  constructor({ scrolleable, length, first, autoMove }) {
    this.scrolleable = scrolleable;
    this.length = length;
    this.first = first;
    this.scroll_state = 0;
    if (autoMove) {
      this.loop();
      this.formatAutoMove = false;
    }
    this.scrolleable_width = this.scrolleable.scrollWidth;
    this.slide_width = this.scrolleable_width / length;
  }
  moveToFirst() {
    this.scroll_state = this.slide_width * this.first;
    this.move();
  }
  next() {
    this.scroll_state += this.slide_width;
    if (this.scroll_state >= this.scrolleable_width) this.scroll_state = 0;
    this.moveSmooth();
  }
  previous() {
    this.scroll_state -= this.slide_width;
    if (this.scroll_state < 0)
      this.scroll_state = this.scrolleable_width - this.slide_width;
    this.moveSmooth();
  }
  move() {
    this.scrolleable.scroll(this.scroll_state, 0);
  }
  moveSmooth() {
    this.scrolleable.scroll({
      left: this.scroll_state,
      top: 0,
      behavior: "smooth",
    });
  }
  loop() {
    setInterval(() => {
      if (this.formatAutoMove) this.formatAutoMove = false;
      else this.next();
    }, 4000);
  }
  delayAutoMove() {
    this.formatAutoMove = true;
  }
  to(numberSlide) {
    console.log(this.length)
    this.scroll_state = this.slide_width * numberSlide;
    console.log('slider.to(): ', this.scroll_state)
    this.moveSmooth();
  }
}
