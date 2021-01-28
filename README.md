# SASS Boiler Plate

## Simple and ready to use

# File structture:

```
├── dist (or build)
│ ├── css
│ │ ├── main.css
│ │ ├── main.css.map
│ ├── images
│ ├── index.html
├── scss
│ ├── base
│ │ ├── _reset.scss
│ │ ├── _root.scss
│ │ ├── _typography.scss
│ ├── components
│ │ ├── _buttons.scss
│ │ ├── _decorations.scss
│ │ ├── _forms.scss
│ │ ├── _icons.scss
│ │ ├── _menu.scss
│ │ ├── _utilities.scss
│ ├── sections (empty by default)
│ │ ├── _section_name_example.scss
│ ├── variables
│ │ ├── _aligns.scss
│ │ ├── _colors.scss
│ │ ├── _variables.scss
│ ├── _functions.scss
│ ├── _media.scss
│ ├── main.css
├── README.md
├── package-lock.json
├── package.json
└── .gitignore
```

## How to install

Download and install it with:

`npm i`

it will install:

- `node-sass`
- `gh-pages` (as dev dependency)

`package.json` contains the following scripts:

```json
"scripts": {
    "sass": "node-sass --source-map dist/css/main.css.map --output-style compressed -w scss -o dist/css -- recursive ",
    "publish": "gh-pages -d dist"
  }
```

Therefore for sass:

```html
npm run sass
```

to publish it be sure the git repo is already synced and then just run:

```html
npm run publish
```

## Smooth Scrolling

Smooth scrolling is on by default, to disable is go to base/\_root.scss

## How to use columns and rows

By default for desktop:

`.row` 12 columns<br/>
`.col-1` ...till `.col-12`

By default for tablet:

`.row` 6 columns<br/>
`.col-m-1` ...till `.col-m-6`

By default for phone:

`.row` 3 columns<br/>
`.col-lg-1` ...till `.col-lg-3`

If you need customized rows:

`.row-1` ...till `.row-12`<br>
It gives `1 column` or `2 columns` and so on.

Example:

```html
<div class="row">
  <div class="col-12 col-m-6 col-lg-3"></div>
</div>

<div class="row">
  <div class="col-9 col-m-2 col-lg-1"></div>
  <div class="col-3 col-m-4 col-lg-2"></div>
</div>
```

## Breakpoints and media queries

## Margins and paddings

By default in `rem` and till `4`

margin-bottom, top, left, right<br>
`mb-#`, `mt-#`, `ml-#`, `mr-#`,

padding-bottom, top, left, right<br>
`pb-#`, `pt-#`, `pl-#`, `pr-#`,

margin-horrizontal, margin-vertical<br>
`mh-#`, `mv-#`

padding-horrizontal, padding-vertical<br>
`ph-#`, `pv-#`

Example:

```html
<div class="row">
  <div class="col-12 col-m-6 col-lg-3 mb-2 pl-1"></div>
</div>
```

adds a `margin-bottom` of `2rem` and a `padding-left` of `1rem`

Example:

```html
<div class="row">
  <div class="col-12 col-m-6 col-lg-3 mv-2 ph-1"></div>
</div>
```

## Aligns

Quick premade aligns (variables/\_aligns.scss):

`t-center-x`

and

`t-center-y`

## Buttons

In `components/_buttons.scss` you can setup the buttons.

With `%btn-shared` you can setup the general shared style.

```css
%btn-shared {
  display: inline-block;
  padding: 0.8rem 2rem;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", sans-serif; // or variable
  text-transform: uppercase;
  border-radius: 5px;
}
```

The function `button` gets those arguments:

`color, color-hover, border-color, text-norm, text-hover, type, border, size`

Therefore you can create a button with (using variables):

```css
.btn {
  &-test {
    @include button(
      $light-blue,
      $light-blue-hover,
      $light-blue,
      $light-blue-text-norm,
      $light-blue-text-hover,
      solid,
      5px,
      normal
    );
  }
}
```

## Forms and inputs

## Social icons

If you need to horrizontal align social icons just use `.icons-social`<br>
Customize it `components/icons.scss`

## Decorations

Line decoration till 3px (components/\_decorations.scss)

Colors: White, Black, Grey

Example:

```html
<div class="line-black-3px"></div>
```

## Other functions

Invert color based on background:
`functions.scss``

```css
@function set-text-color($color) {
  @if (lightness($color) > 50) {
    @return #000;
  } @else {
    @return #fff;
  }
}
```

Example:

```css
color: set-text-color(red);
```

## Typography

Under components/\_decorations.scss

```css
h1 h2 h3 h4 h5 h6
```

Others:

```css
.text-white .text-black .text-grey;
```

```css
.text-thin .text-normal .text-bold;
```
