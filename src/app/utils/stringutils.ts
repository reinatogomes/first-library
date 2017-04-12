export class StringUtils {

  static nullTransform(value: string) {
    return value == 'null' ? null : value;
  }

  static substring(value: string, length: number) {
    if (value && length && value.length > length) {
      value = value.substring(0, length - 1);
    }
    return value;
  }

}