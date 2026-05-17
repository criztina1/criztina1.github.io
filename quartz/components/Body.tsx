// @ts-ignore
import animalIconScript from "./scripts/animalIcons.inline"
// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { concatenateResources } from "../util/resources"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = concatenateResources(clipboardScript, animalIconScript)
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
