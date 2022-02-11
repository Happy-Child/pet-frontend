export class SafeJSON {
  static parse<T>(data: string): T | undefined {
    try {
      return JSON.parse(data) as T;
    } catch (_) {
      return undefined;
    }
  }
}
