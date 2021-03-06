---
title: Saber Config
layout: docs
---

You can use `saber-config.yml`, `saber-config.toml`, `saber-config.js` or `saber-config.json` for general configurations. All the possible config keys will be listed below.

Note that during development, changes made in the config file will NOT trigger rebuild, there're exceptions though, for `siteConfig` and `themeConfig` properties.

## theme

- Type: `string`

The path to your theme or a npm package name (`saber-theme-` prefix is optional).

## siteConfig

- Type: `object`
- Need Restarting: NO

This option is used for configuring the basic information of your website, e.g. `siteConfig.title` and `siteConfig.description`, these can be imported in your app:

```js
import { siteConfig } from 'saber/config'

// You need to write custom logic to handle hot reloading
// ...
```

Alternatively you can access `this.$siteConfig` in your component, in this way it will automatically trigger hot reloading when the actual `siteConfig` changes.

## themeConfig

- Type: `object`
- Need Restarting: NO

For reusuablity, a theme should use this option for customization instead of hard-coding everything in the theme itself.

Like `siteConfig` you can import it from `saber/config` or reference in component via `this.$themeConfig`.

## build

### outDir

- Type: `string`
- Default: `public`

The directory to output HTML files and other static assets.

### publicUrl

- Type: `string`
- Default: `/`

The base URL your application will be deployed at. If your website is located at a sub directory, e.g. `https://example.com/blog`, you should set this option to `/blog/` (trailing slash is optional).

### extractCSS

- Type: `boolean`
- Default: `false`

Extract CSS.

### cssSourceMap

- Type: `boolean`
- Default: `false`

Source maps supports for CSS files.

### loaderOptions

- Type: `LoaderOptions`
- Default: `{}`

Options for css loaders:

```ts
interface LoaderOptions {
  /** sass-loader */
  sass?: any
  /** less-loader */
  less?: any
  /** stylus-loader */
  stylus?: any
  /** css-loader */
  css?: any
  /** postcss-loader */
  postcss?: any
}
```

## plugins

- Type: `Array<Plugin>`

Use a set of Saber plugins:

```typescript
type Plugin =
  | string
  | {
      /** The path to your plugin or an npm package name */
      resolve: string
      /** Plugin options */
      options?: object
    }
```

## markdown

Customizing the internal markdown parser.

### slugify

- Type: `string`
- Examples: `limax` `./my-slugify-utility`

The path to a module or npm package name that slugifies the markdown headers. The module should have following signature:

```typescript
type Slugify = (header: string) => string
```

You can use the [limax](https://github.com/lovell/limax) which provides CJK support.

### highlighter

- Type: `string`
- Example: `saber-highlighter-prism`

The path to a module or npm package name that highlights code blocks in markdown. `saber-highlighter-` prefix is optional.

Note that a highlighter will only tokenize the code, you need to add corresponding CSS yourself.

### options

- Type: `object`

Options for [markdown-it](https://github.com/markdown-it/markdown-it).

### plugins

- Type: `Array<MarkdownPlugin>`

Plugins for [markdown-it](https://github.com/markdown-it/markdown-it):

```typescript
interface MarkdownPlugin {
  // A package name or relative path
  // e.g. markdown-it-footnote
  resolve: string
  options?: object
}
```

## permalinks

- Type: `Permalinks` `(page: Page) => Permalinks`
- Default: `/:posts/:slug.html` for posts, `/:slug.html` for other pages

The template that is used to generate permalink for each page.

```typescript
interface Permalinks {
  [pageType: string]: string
}
```

Note that the permalink for the homepage is always `/`.
