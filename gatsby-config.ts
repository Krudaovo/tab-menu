import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const config: GatsbyConfig = {
  siteMetadata: {
    charset: 'utf-8',
    lang: 'ja',
    title: 'tab-menu-demo',
    description: 'タブメニューをできるだけReactの機能を活かして制作しました。',
    siteUrl: 'https://tab-menu-demo.netlify.app/',
    themeColor: '#',
    // ogp:type
    // website, article, blog
    // bar, company, face, hotel, restaurant
    // album, book, drink, food, game, movie, product, song, tv_show
    // cause, sports_leage, sports_team
    // band, government, non_profit, school, university
    // actor, athlete, author, director, musician, politician, profile, public_figure
    // city, country, landmark, state_province,
    // activity, sport
    ogpType: 'product'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": `images`,
        "path": `${__dirname}/src/images/`
      },
      __key: `images`
    },
    `gatsby-plugin-postcss`,
  ]
};

export default config;
