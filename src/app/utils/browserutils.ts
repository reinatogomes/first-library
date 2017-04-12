export class BrowserUtils {
  
  static subirTela() {
    this.componentFocus("body");
  }
  
  static componentFocus(selector) {
    $(selector).animate({ scrollTop: 0 }, 600);
  }
}