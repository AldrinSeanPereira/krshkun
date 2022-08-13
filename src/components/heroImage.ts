import { Component } from '../library/component'

export class HeroImageComponent extends Component {
  private hero : { path: string, href: string, alt: string }

  constructor (hero : { path: string, href: string, alt: string }) {
    super()

    this.hero = hero
  }

  private template (hero : { path: string, href: string, alt: string }): string {
    return `<a align="right" href="${hero.href}"><img alt="${hero.alt}" src="${hero.path}" /></a>`
  }

  compile (): string {
    return this.template(this.hero)
  }
}
