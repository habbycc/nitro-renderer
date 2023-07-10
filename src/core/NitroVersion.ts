export class NitroVersion {
  public static RENDERER_VERSION: string = "1.6.6";
  public static UI_VERSION: string = "";

  public static sayHello(): void {
    self.console.log(
      `nitro-renderer: ${NitroVersion.RENDERER_VERSION}`,
    );
  }
}
