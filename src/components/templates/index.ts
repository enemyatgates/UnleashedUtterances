import CommonDefault from "./CommonDefault";
import MarpSlideClean from "./MarpSlideClean";
import MarpSlideDark from "./MarpSlideDark";
import MarpSlideCode from "./MarpSlideCode";
import NotionDocumentLight from "./NotionDocumentLight";
import NotionDocumentSepia from "./NotionDocumentSepia";
import NotionGalleryGrid from "./NotionGalleryGrid";
import JoplinNotebookClassic from "./JoplinNotebookClassic";
import JoplinNotebookDark from "./JoplinNotebookDark";
import JoplinNoteCompact from "./JoplinNoteCompact";

export type TemplateName =
  | "CommonDefault"
  | "MarpSlideClean"
  | "MarpSlideDark"
  | "MarpSlideCode"
  | "NotionDocumentLight"
  | "NotionDocumentSepia"
  | "NotionGalleryGrid"
  | "JoplinNotebookClassic"
  | "JoplinNotebookDark"
  | "JoplinNoteCompact";

export const templates: Record<TemplateName, React.ComponentType<any>> = {
  CommonDefault,
  MarpSlideClean,
  MarpSlideDark,
  MarpSlideCode,
  NotionDocumentLight,
  NotionDocumentSepia,
  NotionGalleryGrid,
  JoplinNotebookClassic,
  JoplinNotebookDark,
  JoplinNoteCompact,
};

export function getTemplate(name: string): React.ComponentType<any> {
  return templates[name as TemplateName] ?? CommonDefault;
}
