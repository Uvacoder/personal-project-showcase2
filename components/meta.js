import Head from 'next/head'
import theme from '../lib/theme'

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  title = 'Home', // page title
  name = 'MYP Personal Project Exhibition 2021', // site name
  description = '', // page description
  image = 'https://cloud-8ik5agek7.vercel.app/0myp_personal_project.png', // social card image URL
  url = 'http://pps-draft.sampoder.com/',
  children,
}) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_SG" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={theme.colors.primary} />
    <meta
      key="tile_color"
      name="msapplication-TileColor"
      content={theme.colors.primary}
    />
    <link
      key="safari_icon"
      rel="mask-icon"
      href={`${url}/safari-pinned-tab.png`}
      color={theme.colors.primary}
    />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${url}/apple-touch-icon.png`}
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}/favicon-32x32.png`}
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}/favicon-16x16.png`}
    />
    <link
      key="favicon"
      rel="icon"
      href={`${url}/favicon.ico`}
    />
    <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    {children}
  </Head>
)

export default Meta
