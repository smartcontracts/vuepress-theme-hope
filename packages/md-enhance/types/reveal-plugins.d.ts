declare module "reveal.js" {
  export interface AnythingConfig {
    className: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaults?: Record<string, any>;
    initialize?: (
      container: HTMLElement,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options: Record<string, any>
    ) => void;
  }

  export type ChalkboardKeyBindingConfig = Record<
    string,
    {
      keyCode: number;
      key: string;
      description: string;
    }
  >;

  export interface ChalkboardConfig {
    /**
     * drawing width of the boardmarker
     */
    boardmarkerWidth?: number;
    /**
     * drawing width of the chalk
     */
    chalkWidth?: number;
    /**
     * the opacity of the chalk
     */
    chalkEffect?: number;
    /**
     * Optional filename for pre-recorded drawings.
     */
    src?: string;
    /**
     * Configuation option allowing to prevent changes to existing drawings.
     */
    readOnly?: boolean;
    /**
     * If set to `true` a button for opening and closing the notes canvas is shown. Alternatively, the css position attributes can be provided if the default position is not appropriate.
     */
    toggleNotesButton?: boolean | Record<string, string>;
    /**
     * If set to `true` a button for opening and closing the chalkboard is shown. Alternatively, the css position attributes can be provided if the default position is not appropriate.
     */
    toggleChalkboardButton?: boolean | Record<string, string>;
    /**
     * Gives the duration (in milliseconds) of the transition for a slide change, so that the notes canvas is drawn after the transition is completed.
     */
    transition?: number;
    theme?: "chalkboard" | "whiteboard";
    /**
     * The first value expects a (semi-)transparent color which is used to provide visual feedback that the notes canvas is enabled, the second value expects a filename to a background image for the chalkboard.
     */
    background?: [string, string] | [string];
    /**
     * By default whiteboard and chalkboard themes include a grid pattern on the background.
     *
     * This pattern can be modified by setting the color, the distance between lines, and the line width
     *
     * e.g. { color: 'rgb(127,127,255,0.1)', distance: 40, width: 2}
     *
     * Alternatively, the grid can be removed by setting the value to false.
     */
    grid?: Record<string, string> | false;
    /**
     * An image path and radius for the eraser.
     */
    eraser?: { src: string; radius: number };
    /**  A list of boardmarkers with given color and cursor.*/

    boardmarkers?: { color: string; cursor: string }[];
    /** A list of chalks with given color and cursor. */
    chalks?: { color: string; cursor: string }[];
    /** Whether to remember the last selected color for the slide canvas or the board. */
    rememberColor?: [boolean, boolean];
    keyBindings?: ChalkboardKeyBindingConfig;
  }

  interface RevealOptions {
    anything?: AnythingConfig[];
    chalkboard?: ChalkboardConfig;
  }
}

declare module "vuepress-plugin-md-enhance/src/plugins/chalkboard/img/*.png" {
  const imgPath: string;

  export default imgPath;
}
