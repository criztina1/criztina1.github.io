import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="footer-status">
          <span class="footer-status-icon" aria-hidden="true" />
          <span>
            小站已运行 <strong id="run-time" />
          </span>
          <span class="footer-status-divider" aria-hidden="true" />
          <span>
            Created with <a href="https://quartz.jzhao.xyz/">Quartz</a> © {year}
          </span>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const updateRunTime = () => {
                const start = new Date("2026-03-27T23:00:00")
                const now = new Date()
                const diff = Math.floor((now - start) / 1000)
                const d = Math.floor(diff / (24 * 3600))
                const h = Math.floor((diff % (24 * 3600)) / 3600)
                const m = Math.floor((diff % 3600) / 60)
                const s = diff % 60
                const el = document.getElementById("run-time")

                if (el) {
                  el.textContent = d + " 天 " + h + " 小时 " + m + " 分 " + s + " 秒"
                }
              }

              updateRunTime()
              setInterval(updateRunTime, 1000)
            `,
          }}
        />
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
