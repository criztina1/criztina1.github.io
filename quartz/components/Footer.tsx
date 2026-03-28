import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
          <footer class={`${displayClass ?? ""}`}>
            <hr />
            
            {/* 你的专属漂流时间组件 */}
            <p style={{ textAlign: "center", margin: "0.5rem 0" }}>
              🚀 本小站已经在互联网星海中漂流了 <span id="run-time" style={{ fontWeight: "bold", color: "var(--secondary)" }}></span>
            </p>
            <script dangerouslySetInnerHTML={{ __html: `
              setInterval(() => {
                // 把下面这个时间换成你建站的具体时间！格式保持不变
                let start = new Date("2026-03-27T23:00:00");
                let now = new Date();
                let diff = Math.floor((now - start) / 1000);
                let d = Math.floor(diff / (24 * 3600));
                let h = Math.floor((diff % (24 * 3600)) / 3600);
                let m = Math.floor((diff % 3600) / 60);
                let s = diff % 60;
                let el = document.getElementById("run-time");
                if(el) el.innerHTML = d + " 天 " + h + " 小时 " + m + " 分 " + s + " 秒";
              }, 1000);
            `}}></script>

            <p>
              Created with <a href="https://quartz.jzhao.xyz/">Quartz</a> © {year}
            </p>
            <ul>
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </footer>
        )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
