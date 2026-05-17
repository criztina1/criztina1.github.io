const animalIcons = [
  "camera",
  "chat",
  "critterpedia",
  "design",
  "diy",
  "helicopter",
  "map",
  "miles",
  "shopping",
  "variant",
]

const animalIconColors = [
  "var(--accent-yellow)",
  "var(--accent-green)",
  "var(--accent-blue)",
  "var(--accent-peach)",
  "var(--animal-teal)",
]

function hashText(input: string) {
  let hash = 2166136261
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function applyAnimalCardIcons() {
  const cards = document.querySelectorAll<HTMLElement>(
    ".recent-notes li.recent-li, li.section-li > .section",
  )

  for (const card of cards) {
    const link = card.querySelector<HTMLAnchorElement>("a.internal")
    const seed = `${link?.getAttribute("href") ?? ""}|${link?.textContent?.trim() ?? card.textContent?.trim() ?? ""}`
    const hash = hashText(seed)
    const icon = animalIcons[hash % animalIcons.length]
    const color = animalIconColors[Math.floor(hash / animalIcons.length) % animalIconColors.length]

    card.style.setProperty("--animal-card-icon", `var(--icon-${icon})`)
    card.style.setProperty("--animal-card-bg", color)
  }
}

document.addEventListener("nav", applyAnimalCardIcons)
